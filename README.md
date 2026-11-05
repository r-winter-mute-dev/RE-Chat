<p align="center">
  <img src="docs/banner.svg" alt="RE:Chat – Alte Chats wieder lesen, wie damals" width="100%">
</p>

<p align="center">
  <a href="https://r-winter-mute-dev.github.io/re-chat/"><img src="https://img.shields.io/badge/Zur_Seite-öffnen-a6e3a1?style=for-the-badge&labelColor=1a1a1a" alt="Zur Seite"></a>
</p>

<p align="center">
  <a href="https://github.com/r-winter-mute-dev/re-chat/actions/workflows/pages.yml"><img src="https://github.com/r-winter-mute-dev/re-chat/actions/workflows/pages.yml/badge.svg" alt="Veröffentlichung"></a>
  <a href="https://github.com/r-winter-mute-dev/re-chat/actions/workflows/ci.yml"><img src="https://github.com/r-winter-mute-dev/re-chat/actions/workflows/ci.yml/badge.svg" alt="Tests"></a>
  <img src="https://img.shields.io/badge/läuft-lokal_im_Browser-a6e3a1?labelColor=2a2a2a" alt="Läuft lokal im Browser">
  <img src="https://img.shields.io/badge/Uploads-keine-a6e3a1?labelColor=2a2a2a" alt="Keine Uploads">
  <img src="https://img.shields.io/badge/kostenlos-ohne_Anmeldung-a6e3a1?labelColor=2a2a2a" alt="Kostenlos, ohne Anmeldung">
  <img src="https://img.shields.io/badge/Code-MIT-a0a0a0?labelColor=2a2a2a" alt="Code: MIT">
</p>

<p align="center">
  <em>Diese Seite wurde gebaut, damit alte Chats nicht als unlesbare Textdatei enden:<br>Export hineinziehen und wieder scrollen, so wie damals.</em>
</p>

---

**RE:Chat** macht aus einem WhatsApp-Export wieder einen Chat. Du ziehst die `.txt`, die `.zip` oder den entpackten Ordner auf die Seite und bekommst den Verlauf zurück: Sprechblasen, Datumstrenner, Bilder, Videos und Sprachnachrichten an der richtigen Stelle.

Dazu gibt es einen Analysebereich mit Werkzeugen aus OSINT und Forensik. Er zeigt, wer wann wie viel geschrieben hat, und zieht Links, Telefonnummern, Standorte und gelöschte Nachrichten aus dem Verlauf. Die Ergebnisse lassen sich mit Prüfsumme als Bericht exportieren.

Alles passiert in deinem Browser. Der Chat wird nirgendwo hochgeladen.

> [!IMPORTANT]
> **Ein Chat gehört nicht nur dir.** Er enthält Nachrichten, Nummern und Standorte anderer Menschen. Nutze RE:Chat für Chats, an denen du selbst beteiligt warst oder für die du eine Berechtigung hast, und gib Auswertungen über andere nicht ohne deren Einverständnis weiter.

## So funktioniert die Seite

| | |
| --- | --- |
| **Reinziehen und lesen** | `.txt`, `.zip` oder ganzer Ordner, per Drag-and-drop oder Auswahl. Mehrere Chats auf einmal gehen auch. |
| **Wie im Original** | Eigene Nachrichten rechts, andere links, Namen in Gruppen, Datumstrenner, Formatierung (`*fett*`, `_kursiv_`, `~durchgestrichen~`) und klickbare Links. |
| **Medien an Ort und Stelle** | Bilder, Videos, Sprachnachrichten und Dokumente aus dem Export erscheinen in der Sprechblase. Sie werden erst geladen, wenn du hinscrollst. |
| **„Ich bin“** | Du wählst, wer du im Chat bist. Deine Nachrichten wandern nach rechts. |
| **Suchen und springen** | Volltextsuche mit Trefferzähler, Sprung zu einem bestimmten Datum. |
| **Groß** | Chats mit Zehntausenden Nachrichten bleiben flüssig. ZIP-Dateien über 4 GB werden unterstützt. |
| **Darkmode** | Dunkles, ruhiges Grau, Akzente in Catppuccin Mocha. Jede Person in Gruppen bekommt eine eigene Akzentfarbe. |

## Chat exportieren

| Gerät | Weg |
| --- | --- |
| **Android** | Chat öffnen → **⋮** → **Mehr** → **Chat exportieren** → mit oder ohne Medien |
| **iPhone** | Chat öffnen → oben auf den Namen tippen → **Chat exportieren** → mit oder ohne Medien |

Am einfachsten schickst du dir die Datei selbst (Mail, Cloud, USB-Kabel) und ziehst sie dann auf die Seite. Mit Medien wird es eine `.zip`, die du nicht entpacken musst. Die Menüpunkte können je nach WhatsApp-Version anders heißen.

## Analyse

Über **🔍 Analyse** öffnet sich ein Panel neben dem Chat. Ein Klick auf eine Fundstelle springt im Chat an die passende Stelle.

| Werkzeug | Was es zeigt | Stand |
| --- | --- | :---: |
| **Übersicht** | Nachrichten, Personen, aktive Tage, Medien, gelöschte und bearbeitete Nachrichten, erkanntes Exportformat | ✅ |
| **Prüfsummen** | SHA-256 der Chat-Datei und der ZIP. Damit lässt sich später belegen, dass der Export unverändert ist. | ✅ |
| **Personen** | Pro Person: Nachrichten, Wörter, Medien, Links, Löschungen, mittlere Antwortzeit, aktivste Stunde, erste und letzte Nachricht | ✅ |
| **Aktivität** | Heatmap Wochentag × Uhrzeit (gesamt oder pro Person), Nachrichten pro Monat, die längsten Pausen | ✅ |
| **Indikatoren** | Links und Domains, Telefonnummern, E-Mail-Adressen, geteilte Standorte, @-Erwähnungen, Hashtags, Dateien. Mit Anzahl, Zeitraum und wer sie geschickt hat. | ✅ |
| **Ereignisse** | Systemmeldungen (Beitritte, Nummernwechsel, Gruppenänderungen), gelöschte und bearbeitete Nachrichten als Zeitleiste | ✅ |
| **Wörter** | Häufigste Wörter und Emojis | ✅ |
| **Export** | Nachrichten als CSV oder JSON, Indikatoren als CSV, vollständiger Bericht als JSON mit Prüfsummen | ✅ |
| **Standorte auf einer Karte** | Alle geteilten Standorte auf einer Offline-Karte | 🚧 |
| **Andere Messenger** | Telegram (JSON-Export) und Signal | 🚧 |

✅ nutzbar · 🚧 geplant

Die Analyse arbeitet nur mit dem, was im Export steht. Es gibt keine Abfragen bei fremden Diensten, keine Rückwärtssuche von Nummern und keine Anreicherung aus dem Netz.

## Grenzen

Damit niemand mehr aus den Ergebnissen liest, als drinsteht:

- **Zeiten** stammen aus dem Export und gelten in der Zeitzone des Geräts, das exportiert hat.
- **Telefonnummern und E-Mails** werden per Muster erkannt. Fehltreffer und übersehene Nummern sind möglich.
- **Gelöschte Nachrichten** lassen sich nicht wiederherstellen. Der Export enthält nur den Hinweis, dass etwas gelöscht wurde.
- **Bearbeitete Nachrichten** stehen im Export nur in der letzten Fassung.
- **Medien**, die beim Export weggelassen wurden, fehlen auch hier. Manche Formate (zum Beispiel HEIC-Fotos oder Opus-Sprachnachrichten) spielen nicht alle Browser ab; dann gibt es einen Download.
- **Exportformate** ändern sich mit WhatsApp-Versionen und Sprachen. Erkannt werden Android und iOS mit Datumsangaben wie `12.03.21`, `3/12/21` und `2021-03-12`.

## Datenschutz

| | |
| --- | --- |
| **Nichts verlässt dein Gerät** | Der Chat wird nur im Arbeitsspeicher des Browsers gelesen. Eine Content-Security-Policy verbietet der Seite technisch, Verbindungen zu Servern aufzubauen. Ein automatischer Test prüft das. |
| **Nichts wird gespeichert** | Kein `localStorage`, keine Cookies, kein Konto. Neu laden oder Tab schließen, und alles ist weg. |
| **Keine Drittanbieter** | Keine Schriften von außen, keine CDNs, keine Analyse-Dienste, keine Bibliotheken. ZIP-Dateien entpackt der Browser selbst. |
| **Externe Links nur auf Klick** | Links im Chat und „Karte ↗“ bei Standorten öffnen fremde Seiten in einem neuen Tab, aber nur wenn du draufklickst. |
| **Hosting** | GitHub Pages. GitHub erhebt beim Aufruf der Seite technische Zugriffsdaten wie die IP-Adresse. Den Chat selbst bekommt GitHub nicht. Wer ganz sicher gehen will, lädt die `index.html` herunter und öffnet sie ohne Internet. |

## Mitmachen

Fehler gefunden oder ein Export, der nicht erkannt wird? [Öffne ein Issue](https://github.com/r-winter-mute-dev/re-chat/issues). Bitte **keine echten Chats** hochladen, sondern nur ein paar anonymisierte Zeilen, an denen man das Format sieht.

Am meisten hilft gerade:

- [ ] **Exporte aus weiteren Sprachen und Ländern.** Wie sehen Datum, Uhrzeit und Anhänge bei euch aus?
- [ ] **Exporte aus WhatsApp Business** und von Desktop-Versionen
- [ ] **Testen mit sehr großen Chats** (über 100.000 Nachrichten)
- [ ] **Ideen für weitere Analysen**, die ohne Netzverbindung auskommen

## Entstehung

> [!NOTE]
> Diese Seite entsteht mit Unterstützung von **Claude**, einer KI von Anthropic. Die KI ist für dieses Projekt verändert und auf wissenschaftliches Arbeiten ausgelegt.

- **Lokal zuerst:** Jede Funktion muss ohne Server auskommen. Was eine Verbindung nach außen bräuchte, wird nicht eingebaut oder passiert nur auf ausdrücklichen Klick.
- **Kennzeichnung:** Wo die Seite rät (Exportformat, Datumsreihenfolge, Telefonnummern), sagt sie es.

Die Idee, die Ziele und die Entscheidungen kommen von einem Menschen. Code und Texte schreibt die KI, ein Mensch prüft sie und gibt sie frei. Auch so können Fehler drinstecken. Wenn dir etwas falsch vorkommt, [öffne ein Issue](https://github.com/r-winter-mute-dev/re-chat/issues).

## Für Entwickler

<details>
<summary><strong>Lokal starten</strong></summary>

Die ganze Seite ist eine einzige Datei. `index.html` im Browser öffnen, fertig. Ein Build-Schritt ist nicht nötig.
</details>

<details>
<summary><strong>Tests</strong></summary>

Voraussetzung: Node.js 22 oder neuer.

```bash
npm install
npx playwright install chromium
npm test
```

Die Tests laden die Beispielexporte aus `tests/fixtures/` (Android, iOS, US-Format), prüfen Darstellung, Medien, Analyse und Export und stellen sicher, dass die Seite keine fremden Server anfragt.
</details>

<details>
<summary><strong>Technik</strong></summary>

Eine statische HTML-Datei mit eingebettetem CSS und JavaScript, ohne Abhängigkeiten. ZIP-Dateien werden mit einem kleinen eigenen Leser und der im Browser eingebauten `DecompressionStream` entpackt, auch im ZIP64-Format. Medien werden erst beim Hinscrollen entpackt. Prüfsummen berechnet die Web Crypto API. Die Seite wird über GitHub Actions automatisch auf GitHub Pages veröffentlicht.
</details>

<details>
<summary><strong>Eigene Kopie betreiben</strong></summary>

Repository forken, unter **Settings → Pages** als Quelle **GitHub Actions** wählen, fertig.
</details>

## Lizenz

| Was | Lizenz |
| --- | --- |
| Code, Texte, Grafiken | [MIT](LICENSE): frei nutzbar, auch kommerziell, Copyright-Hinweis bleibt erhalten |
| Akzentfarben | [Catppuccin](https://catppuccin.com) Mocha (MIT) |
| Schrift | Systemschriften des Geräts, keine eingebundenen Schriftdateien |

<p align="center">
  <sub>RE:Chat ist ein unabhängiges Projekt und nicht mit WhatsApp oder Meta verbunden. WhatsApp ist eine Marke der WhatsApp LLC.</sub>
</p>
