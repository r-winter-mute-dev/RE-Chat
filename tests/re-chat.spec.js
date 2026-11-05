// @ts-check
const { test, expect } = require("@playwright/test");
const path = require("path");
const fs = require("fs");

const PAGE = "file://" + path.resolve(__dirname, "..", "index.html");
const FIX = name => path.resolve(__dirname, "fixtures", name);

/** Lädt die Seite, merkt sich jede Anfrage nach außen und öffnet die Datei. */
async function open(page, file) {
  const external = [];
  page.on("request", r => { if (!/^(file|blob|data):/.test(r.url())) external.push(r.url()); });
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.goto(PAGE);
  await page.setInputFiles("#fileInput", FIX(file));
  await expect(page.locator(".msg").first()).toBeVisible();
  return { external, errors };
}

test("Android-ZIP: Nachrichten, Medien, Systemmeldungen", async ({ page }) => {
  const { external, errors } = await open(page, "WhatsApp Chat mit Ben.zip");
  await expect(page.locator("#title")).toHaveText("Ben");
  await expect(page.locator(".msg.sys").first()).toContainText("Ende-zu-Ende");
  await expect(page.locator(".msg", { hasText: "zweite Zeile" })).toContainText("Hi!");
  await expect(page.locator(".media img")).toHaveCount(1);
  await expect(page.locator(".media .missing")).toContainText("PTT-20210313-WA0002.opus");
  await expect(page.locator(".msg", { hasText: "Treffen am" })).toContainText("bearbeitet");
  await expect(page.locator(".msg", { hasText: "Treffen am" })).not.toContainText("<Diese Nachricht");
  await expect(page.locator(".bubble b")).toHaveText("Welt");
  expect(errors).toEqual([]);
  expect(external).toEqual([]);
});

test("iOS-ZIP: _chat.txt, Anhang und Systemnachrichten", async ({ page }) => {
  const { external } = await open(page, "WhatsApp Chat - Familie.zip");
  await expect(page.locator("#title")).toHaveText("Familie");
  await expect(page.locator(".msg.sys")).toHaveCount(2);
  await expect(page.locator(".media img")).toHaveCount(1);
  const options = await page.locator("#meSel option").allTextContents();
  expect(options).not.toContain("Familie");
  expect(external).toEqual([]);
});

test("US-Format: Monat zuerst, 12-Stunden-Zeit", async ({ page }) => {
  await open(page, "en-us.txt");
  const days = await page.locator(".day").evaluateAll(s => s.map(d => d.dataset.day));
  expect(days).toEqual(["2024-03-14", "2024-12-31"]);
  await expect(page.locator(".msg", { hasText: "late night" })).toContainText("23:59");
  await expect(page.locator(".msg", { hasText: "happy new year" })).toContainText("00:00");
});

test("Suche findet Treffer und springt", async ({ page }) => {
  await open(page, "android.txt");
  await page.fill("#search", "standort");
  await expect(page.locator("#hitCount")).toHaveText("1/1");
  await expect(page.locator(".msg.hit")).toContainText("maps.google.com");
});

test("Analyse: Indikatoren, Prüfsumme, Personen", async ({ page }) => {
  const { external } = await open(page, "WhatsApp Chat mit Ben.zip");
  await page.click("#openPanel");
  await expect(page.locator("#hashTxt")).toHaveText(/^[0-9a-f]{64}$/);
  await expect(page.locator("#hashZip")).toHaveText(/^[0-9a-f]{64}$/);

  await page.click('#panel .tabs button[data-tab="ioc"]');
  await page.click('#iocChips button[data-cat="phone"]');
  const phones = await page.locator("#iocTable td.v").allTextContents();
  expect(phones.sort()).toEqual(["+49301234567", "015123456789"]);
  await page.click('#iocChips button[data-cat="email"]');
  await expect(page.locator("#iocTable td.v")).toHaveText(["test.person@example.com"]);
  await page.click('#iocChips button[data-cat="geo"]');
  await expect(page.locator("#iocTable td.v")).toHaveText(["52.52001, 13.40495"]);
  await page.click('#iocChips button[data-cat="mention"]');
  await expect(page.locator("#iocTable td.v")).toHaveText(["@4915112345678"]);

  await page.click('#panel .tabs button[data-tab="events"]');
  await expect(page.locator("#pbody")).toContainText("Ben hat die Telefonnummer gewechselt.");
  await expect(page.locator("#pbody")).toContainText("Gelöschte Nachrichten (1)");

  await page.click('#panel .tabs button[data-tab="people"]');
  await expect(page.locator("#pbody table.t tr")).toHaveCount(3);
  expect(external).toEqual([]);
});

test("Export: CSV und Bericht", async ({ page }) => {
  await open(page, "android.txt");
  await page.click("#openPanel");
  await page.click('#panel .tabs button[data-tab="export"]');

  const [csv] = await Promise.all([page.waitForEvent("download"), page.click('[data-exp="msgs-csv"]')]);
  const csvText = fs.readFileSync(await csv.path(), "utf8");
  expect(csvText.startsWith("﻿\"nr\",\"zeit_lokal\"")).toBe(true);
  expect(csvText).toContain('"deleted"');

  const [rep] = await Promise.all([page.waitForEvent("download"), page.click('[data-exp="report"]')]);
  const report = JSON.parse(fs.readFileSync(await rep.path(), "utf8"));
  expect(report.werkzeug).toBe("RE:Chat");
  expect(report.quelle.sha256).toMatch(/^[0-9a-f]{64}$/);
  expect(report.personen.map(p => p.name).sort()).toEqual(["Anna", "Ben"]);
  expect(report.indikatoren.phone).toHaveLength(2);
});

test("Content-Security-Policy blockiert Verbindungen nach außen", async ({ page }) => {
  await open(page, "android.txt");
  const blocked = await page.evaluate(async () => {
    try { await fetch("https://example.com/"); return false; } catch { return true; }
  });
  expect(blocked).toBe(true);
});
