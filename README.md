<p align="center">
  <img src="docs/banner.svg" alt="RE:Chat – OSINT und digitale Forensik für Chat-Exporte" width="100%">
</p>

<p align="center">
  <a href="https://r-winter-mute-dev.github.io/RE-Chat/"><img src="https://img.shields.io/badge/Zum_Werkzeug-öffnen-a6e3a1?style=for-the-badge&labelColor=1a1a1a" alt="Zum Werkzeug"></a>
</p>

<p align="center">
  <a href="https://github.com/r-winter-mute-dev/RE-Chat/actions/workflows/pages.yml"><img src="https://github.com/r-winter-mute-dev/RE-Chat/actions/workflows/pages.yml/badge.svg" alt="Veröffentlichung"></a>
  <a href="https://github.com/r-winter-mute-dev/RE-Chat/actions/workflows/ci.yml"><img src="https://github.com/r-winter-mute-dev/RE-Chat/actions/workflows/ci.yml/badge.svg" alt="Tests"></a>
  <img src="https://img.shields.io/badge/OSINT-%26_Forensik-a6e3a1?labelColor=2a2a2a" alt="OSINT und Forensik">
  <img src="https://img.shields.io/badge/läuft-lokal_im_Browser-a6e3a1?labelColor=2a2a2a" alt="Läuft lokal im Browser">
  <img src="https://img.shields.io/badge/Uploads-keine-a6e3a1?labelColor=2a2a2a" alt="Keine Uploads">
  <img src="https://img.shields.io/badge/Prüfsummen-MD5_·_SHA--1_·_SHA--256-89b4fa?labelColor=2a2a2a" alt="Prüfsummen: MD5, SHA-1, SHA-256">
  <img src="https://img.shields.io/badge/Code-MIT-a0a0a0?labelColor=2a2a2a" alt="Code: MIT">
</p>

<p align="center">
  <em>Dieses Werkzeug wurde gebaut, um Chat-Exporte nachvollziehbar auszuwerten:<br>Verlauf rekonstruieren, Spuren finden, Ergebnisse dokumentieren, ohne dass die Daten das Gerät verlassen.</em>
</p>

---

**RE:Chat** ist ein Werkzeug für OSINT und digitale Forensik an WhatsApp-Exporten. Du ziehst die `.txt`, die `.zip` oder den entpackten Ordner hinein. Daraus entstehen der vollständige Verlauf als Chat, eine Fallakte mit Prüfsummen und eine Asservatenliste. Dazu kommen extrahierte Indikatoren, Metadaten aus Bildern, Hinweise auf Unstimmigkeiten und ein druckbarer Bericht, in dem jede Aussage auf eine Zeile der Quelldatei verweist.

Alles läuft in einer einzigen HTML-Datei im Browser. Es wird nichts hochgeladen, nichts gespeichert und kein fremder Dienst abgefragt.

> [!IMPORTANT]
> **Nur rechtmäßig einsetzen.** Ein Chat enthält Nachrichten, Nummern und Standorte anderer Menschen. Nutze RE:Chat für Chats, an denen du beteiligt bist oder für deren Auswertung eine Berechtigung besteht, und gib Ergebnisse über andere nicht ohne Grundlage weiter.
>
> **Kein zertifiziertes Forensik-Werkzeug.** RE:Chat ist nicht validiert oder zertifiziert. Ergebnisse, die vor Gericht oder in Verfahren verwendet werden sollen, müssen mit anerkannten Werkzeugen und Methoden geprüft werden.

## Ablauf

| Phase | Was passiert |
| :---: | --- |
| 1 | **Sichern:** Export einlesen. RE:Chat berechnet MD5, SHA-1 und SHA-256 der Chat-Datei und der ZIP und listet alle Dateien mit ihren Zeitstempeln als Asservate auf. |
| 2 | **Rekonstruieren:** Der Verlauf erscheint als Chat, mit Medien an der richtigen Stelle. Jede Nachricht kennt ihre Zeilennummer in der Quelldatei. |
| 3 | **Auswerten:** Personen, Aktivitätsmuster, Indikatoren, Metadaten aus Bildern, Systemereignisse |
| 4 | **Prüfen:** Die Anomalie-Erkennung zeigt Stellen, die nicht zu einem unveränderten Export passen. |
| 5 | **Markieren:** Relevante Nachrichten mit ☆ markieren und mit einer Notiz versehen |
| 6 | **Dokumentieren:** Forensischer Bericht als HTML zum Drucken oder als PDF, dazu JSON und CSV für andere Werkzeuge |

## Werkzeuge

| Werkzeug | Was es leistet | Stand |
| --- | --- | :---: |
| **Chat-Ansicht** | Verlauf wie im Original: Sprechblasen, Datumstrenner, Formatierung, Bilder, Videos, Sprachnachrichten, Dokumente. Volltextsuche und Sprung zu einem Datum. | ✅ |
| **Fallakte** | Aktenzeichen, Bearbeiter, Notizen, Zeitzone des Exportgeräts. Alles landet im Bericht. | ✅ |
| **Prüfsummen** | MD5, SHA-1 und SHA-256 für Chat-Datei, Container und auf Wunsch jede einzelne Datei | ✅ |
| **Asservatenliste** | Alle eingelesenen Dateien mit Pfad, Größe, ZIP-Zeitstempel (lokal und, falls vorhanden, UTC), Dateisystem-Zeit und Prüfsummen | ✅ |
| **Zeit in UTC** | Die Wanduhrzeiten des Exports werden mit der gewählten Zeitzone nach UTC umgerechnet, inklusive Sommerzeit. | ✅ |
| **Personen** | Nachrichten, Wörter, Medien, Links, Löschungen, Bearbeitungen, mittlere Antwortzeit, aktivste Stunde | ✅ |
| **Aktivität** | Heatmap Wochentag × Uhrzeit (gesamt und pro Person), Nachrichten pro Monat, längste Pausen | ✅ |
| **Indikatoren** | Extraktion aus dem Text, Details in der nächsten Tabelle | ✅ |
| **Medien und EXIF** | Kamera, Objektiv, Aufnahmezeit, Software, Autor und GPS-Position aus JPEG-Bildern. GPS-Funde gehen in die Standorte ein. | ✅ |
| **Anomalien** | Hinweise auf Unstimmigkeiten, Details weiter unten | ✅ |
| **Markierungen** | Relevante Nachrichten markieren und kommentieren. Im Bericht erscheinen sie mit Kontext. | ✅ |
| **Ereignisse** | Systemmeldungen, gelöschte und bearbeitete Nachrichten als Zeitleiste | ✅ |
| **Bericht** | Druckbarer forensischer Bericht (HTML/PDF), Bericht als JSON, Nachrichten als CSV/JSON, Indikatoren und Asservate als CSV | ✅ |
| **Standortkarte** | Alle Standorte auf einer Offline-Karte | 🚧 |
| **Weitere Messenger** | Telegram (JSON-Export) und Signal | 🚧 |
| **Mehrere Exporte vergleichen** | Zwei Exporte desselben Chats von verschiedenen Geräten gegeneinander prüfen | 🚧 |

✅ nutzbar · 🚧 geplant

### Indikatoren

| Art | Erkennung |
| --- | --- |
| **Links und Domains** | Alle `http(s)`-Adressen, Domains zusammengefasst |
| **Telefonnummern** | Muster für internationale und deutsche Schreibweisen, normalisiert. Dazu Absender, die ohne gespeicherten Kontaktnamen nur als Nummer im Export stehen. |
| **E-Mail-Adressen** | Muster |
| **Standorte** | Koordinaten aus Karten-Links (Google, Apple, OpenStreetMap u. a.) und aus EXIF-Daten von Bildern |
| **IBAN** | Muster plus Prüfsumme nach ISO 13616, dadurch kaum Fehltreffer |
| **Krypto-Adressen** | Bitcoin (Legacy, SegWit) und Ethereum per Muster |
| **IP-Adressen** | IPv4 |
| **Erwähnungen, Hashtags** | `@Nummer` und `#Begriff` |
| **Dateien** | Alle Anhänge, mit Hinweis, ob sie im Export liegen |

Zu jedem Indikator zeigt RE:Chat die Anzahl, das erste und letzte Vorkommen, die Personen und die Zeilen der Quelldatei. Ein Klick springt zum nächsten Vorkommen im Chat.

### Anomalie-Erkennung

| Prüfung | Stufe | Warum |
| --- | :---: | --- |
| **Zeitstempel rückläufig** | auffällig | Ein Export ist chronologisch. Springt die Zeit zurück, wurde die Uhr verstellt, die Zeitzone gewechselt oder die Datei bearbeitet. |
| **Zeit im iOS-Dateinamen weicht ab** | auffällig | iOS benennt Anhänge mit Datum und Uhrzeit. Weicht das von der Nachricht ab, passt etwas nicht zusammen. |
| **Datum im Android-Dateinamen weicht ab** | Hinweis | Kann bei weitergeleiteten oder später gespeicherten Dateien normal sein |
| **Zeilen ohne Zeitstempel am Anfang** | Hinweis | Gehören nicht zum üblichen Exportformat |
| **Doppelte Nachrichten** | Hinweis | Gleicher Text, gleiche Person, gleiche Minute |
| **Anhang fehlt im Export** | Hinweis | Erwähnt, aber keine Datei vorhanden |
| **Datei ohne Bezug im Chat** | Hinweis | Liegt im Export, wird aber nirgends erwähnt |

Eine Anomalie ist kein Beweis für Manipulation, sondern ein Grund, genauer hinzusehen.

### Der Bericht

Der forensische Bericht ist eine eigenständige HTML-Datei, die sich drucken oder als PDF speichern lässt. Er enthält:

1. Fall (Aktenzeichen, Bearbeiter, Notizen)
2. Asservat mit Prüfsummen, Zeitstempeln, erkanntem Format und angenommener Zeitzone
3. Methodik und Grenzen
4. Beteiligte
5. Anomalien
6. Markierte Nachrichten mit je zwei Nachrichten Kontext und Notiz
7. Indikatoren mit Zeilennummern, Metadaten aus Medien
8. Systemereignisse, Löschungen, Bearbeitungen
9. Asservatenliste
10. Felder für Ort, Datum und Unterschrift

## Chat exportieren

| Gerät | Weg |
| --- | --- |
| **Android** | Chat öffnen → **⋮** → **Mehr** → **Chat exportieren** → mit oder ohne Medien |
| **iPhone** | Chat öffnen → oben auf den Namen tippen → **Chat exportieren** → mit oder ohne Medien |

Mit Medien entsteht eine `.zip`, die nicht entpackt werden muss. Für eine Auswertung ist die unveränderte ZIP am besten: Prüfsummen und ZIP-Zeitstempel beziehen sich dann auf das Original. Die Menüpunkte können je nach WhatsApp-Version anders heißen.

## Grenzen

- **Ein Export ist kein Abbild des Geräts.** Er ist eine Textdatei, die sich vor der Sicherung unbemerkt bearbeiten lässt. Prüfsummen belegen nur, dass die Datei seit ihrer Berechnung unverändert ist, nicht dass ihr Inhalt echt ist.
- **Zeiten** im Export sind Wanduhrzeiten des exportierenden Geräts ohne Zeitzone. Die UTC-Werte stimmen nur, wenn die gewählte Zeitzone stimmt.
- **Gelöschte Nachrichten** lassen sich aus dem Export nicht wiederherstellen. **Bearbeitete** stehen nur in der letzten Fassung drin.
- **Indikatoren** werden per Muster erkannt. Fehltreffer und übersehene Funde sind möglich, jeder Fund ist einzeln zu prüfen.
- **EXIF-Daten** fehlen bei normal gesendeten Fotos in der Regel. Wo sie vorhanden sind, können sie gefälscht sein.
- **ZIP- und Dateisystem-Zeitstempel** ändern sich beim Kopieren, Packen oder Herunterladen und sind nur ein Indiz.
- **Exportformate** ändern sich mit WhatsApp-Versionen und Sprachen. Erkannt werden Android und iOS mit Datumsangaben wie `12.03.21`, `3/12/21` und `2021-03-12`.
- **Große Dateien** über 1,5 GB lassen sich im Browser nicht hashen.

## Datenschutz

| | |
| --- | --- |
| **Nichts verlässt das Gerät** | Der Chat wird nur im Arbeitsspeicher des Browsers verarbeitet. Eine Content-Security-Policy verbietet der Seite technisch, Verbindungen zu Servern aufzubauen. Ein automatischer Test prüft das bei jeder Änderung. |
| **Nichts wird gespeichert** | Kein `localStorage`, keine Cookies, kein Konto. Fallakte, Markierungen und Notizen gibt es nur, bis der Tab geschlossen wird. Was bleiben soll, gehört in den Bericht. |
| **Keine Drittanbieter** | Keine Schriften von außen, keine CDNs, keine Analyse-Dienste, keine Bibliotheken. ZIP, MD5 und EXIF sind selbst umgesetzt, SHA-1 und SHA-256 liefert der Browser. |
| **Externe Links nur auf Klick** | Links im Chat und „Karte ↗“ bei Standorten öffnen fremde Seiten in einem neuen Tab, aber nur nach einem Klick. |
| **Offline nutzbar** | Für sensible Fälle `index.html` herunterladen und auf einem Rechner ohne Netz öffnen. Es fehlt dann nichts. |
| **Hosting** | GitHub Pages. GitHub erhebt beim Aufruf der Seite technische Zugriffsdaten wie die IP-Adresse. Den Chat selbst bekommt GitHub nicht. |

## Mitmachen

Fehler gefunden oder ein Export, der nicht erkannt wird? [Öffne ein Issue](https://github.com/r-winter-mute-dev/RE-Chat/issues). Bitte **keine echten Chats** hochladen, sondern nur ein paar anonymisierte Zeilen, an denen man das Format sieht.

Am meisten hilft gerade:

- [ ] **Validierung** an Referenz-Exporten mit bekanntem Inhalt, auch im Vergleich mit etablierten Forensik-Werkzeugen
- [ ] **Exporte aus weiteren Sprachen und Ländern:** Wie sehen Datum, Uhrzeit, Anhänge und Systemmeldungen bei euch aus?
- [ ] **Exporte aus WhatsApp Business** und von Desktop-Versionen
- [ ] **Rückmeldung aus der Praxis:** Was fehlt im Bericht, damit er sich in eure Abläufe einfügt?
- [ ] **Testen mit sehr großen Chats** (über 100.000 Nachrichten)

## Entstehung

> [!NOTE]
> Dieses Werkzeug entsteht mit Unterstützung von **Claude**, einer KI von Anthropic. Die KI ist für dieses Projekt verändert und auf wissenschaftliches Arbeiten ausgelegt.

- **Lokal zuerst:** Jede Funktion muss ohne Server auskommen. Was eine Verbindung nach außen bräuchte, wird nicht eingebaut oder passiert nur auf ausdrücklichen Klick.
- **Nachvollziehbar:** Jede Aussage im Bericht verweist auf eine Zeile der Quelldatei. Wo RE:Chat rät (Exportformat, Datumsreihenfolge, Zeitzone, Muster), sagt es das.
- **Ehrlich über Grenzen:** Ein Export beweist weniger, als er auf den ersten Blick zeigt. Bericht und README sagen das deutlich.

Die Idee, die Ziele und die Entscheidungen kommen von einem Menschen. Code und Texte schreibt die KI, ein Mensch prüft sie und gibt sie frei. Auch so können Fehler drinstecken. Wenn dir etwas falsch vorkommt, [öffne ein Issue](https://github.com/r-winter-mute-dev/RE-Chat/issues).

## Für Entwickler

<details>
<summary><strong>Lokal starten</strong></summary>

Das ganze Werkzeug ist eine einzige Datei. `index.html` im Browser öffnen, fertig. Ein Build-Schritt ist nicht nötig.
</details>

<details>
<summary><strong>Tests</strong></summary>

Voraussetzung: Node.js 22 oder neuer.

```bash
npm install
npx playwright install chromium
npm test
```

Die Tests laden die Beispielexporte aus `tests/fixtures/` (Android, iOS, US-Format) und prüfen unter anderem:

- Darstellung und Medien
- Prüfsummen gegen Node.js
- Anomalien und EXIF mit GPS
- IBAN-Prüfung
- UTC-Umrechnung mit Sommerzeit
- Markierungen im Bericht
- dass die Seite keine fremden Server anfragt
</details>

<details>
<summary><strong>Technik</strong></summary>

Eine statische HTML-Datei mit eingebettetem CSS und JavaScript, ohne Abhängigkeiten. ZIP-Dateien liest ein kleiner eigener Leser (inklusive ZIP64 und Extended Timestamps) und entpackt sie über die im Browser eingebaute `DecompressionStream`. Medien werden erst beim Hinscrollen entpackt. MD5 und der EXIF-Leser sind selbst umgesetzt, SHA-1 und SHA-256 kommen aus der Web Crypto API. Die Zeitzonen-Umrechnung nutzt `Intl`. Die Seite wird über GitHub Actions automatisch auf GitHub Pages veröffentlicht, die Testdaten gehen dabei nicht mit.
</details>

<details>
<summary><strong>Eigene Kopie betreiben</strong></summary>

Repository forken, unter **Settings → Pages** als Quelle **GitHub Actions** wählen, fertig. Oder einfach `index.html` herunterladen und offline nutzen.
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
