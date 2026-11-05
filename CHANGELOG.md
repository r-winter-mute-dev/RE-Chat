# Changelog

Versionsnummern nach [SemVer](https://semver.org/lang/de/); vor 1.0 kann sich alles ändern.

## [0.2.0] – 2026-11-05

Neu ausgerichtet als Werkzeug für OSINT und digitale Forensik.

### Neu
- **Fallakte:** Aktenzeichen, Bearbeiter, Notizen, Zeitzone des Exportgeräts.
- **Prüfsummen:** MD5 (eigene Umsetzung), SHA-1 und SHA-256 für Chat-Datei und Container.
- **Asservatenliste** aller eingelesenen Dateien mit ZIP-Zeitstempeln (DOS-Zeit und Extended Timestamp in UTC), Dateisystem-Zeit und Prüfsummen auf Knopfdruck.
- **Zeilennummern** der Quelldatei für jede Nachricht, in allen Exporten und im Bericht.
- **UTC-Umrechnung** der Exportzeiten mit wählbarer Zeitzone, inklusive Sommerzeit.
- **Anomalie-Erkennung:** rückläufige Zeitstempel, abweichende Zeit im Dateinamen (iOS) bzw. Datum (Android), Zeilen ohne Zeitstempel, doppelte Nachrichten, fehlende Anhänge, Dateien ohne Bezug im Chat.
- **Medien und EXIF:** Kamera, Objektiv, Aufnahmezeit, Software, Autor und GPS aus JPEG-Bildern; GPS-Funde gehen in die Standorte ein.
- **Neue Indikatoren:** IBAN (mit Prüfsumme), Krypto-Adressen, IPv4-Adressen, Absender ohne Kontaktnamen.
- **Markierungen:** Nachrichten im Chat mit ☆ markieren und kommentieren.
- **Forensischer Bericht** als druckbares HTML (für PDF) mit Fall, Asservat, Methodik und Grenzen, Beteiligten, Anomalien, markierten Nachrichten mit Kontext, Indikatoren, Ereignissen und Asservatenliste.
- Exporte enthalten Zeile, Exportzeit, Zeit mit Offset und UTC.

### Geändert
- Startseite, Kopfzeile, README und Banner als OSINT- und Forensik-Werkzeug.
- Analyse-Panel heißt jetzt „Forensik“, mit eigenen Reitern für Fall, Medien, Anomalien, Markierungen, Asservate und Bericht.

## [0.1.0] – 2026-11-05

### Neu
- **Chat-Ansicht:** WhatsApp-Exporte als `.txt`, `.zip` oder Ordner öffnen, per Auswahl oder Drag-and-drop. Android- und iOS-Format, Datumsangaben `TT.MM.JJ`, `M/T/JJ` und `JJJJ-MM-TT`, 12- und 24-Stunden-Zeit.
- Sprechblasen mit „Ich bin“-Auswahl, Namen in Gruppen, Datumstrenner, WhatsApp-Formatierung, klickbare Links.
- Bilder, Videos, Sprachnachrichten und Dokumente direkt im Chat, erst beim Hinscrollen geladen. Bildansicht per Klick.
- Gelöschte und bearbeitete Nachrichten erkennbar markiert.
- Volltextsuche mit Trefferzähler, Sprung zu einem Datum, Auswahl bei mehreren Chats.
- Eigener ZIP-Leser ohne Bibliothek, mit ZIP64.
- **Analyse:** Übersicht mit SHA-256-Prüfsummen, Profil pro Person, Heatmap Wochentag × Uhrzeit, Nachrichten pro Monat, längste Pausen, Indikatoren (Links, Domains, Telefonnummern, E-Mails, Standorte, Erwähnungen, Hashtags, Dateien), Systemereignisse, häufigste Wörter und Emojis.
- **Export:** Nachrichten als CSV und JSON, Indikatoren als CSV, Bericht als JSON.
- Content-Security-Policy, die Verbindungen zu Servern verbietet. Nichts wird gespeichert.
- Darkmode mit Akzenten in Catppuccin Mocha, Namensfarben in Gruppen aus der Mocha-Palette.

### Technik
- Playwright-Tests mit Beispielexporten, inklusive Prüfung auf externe Anfragen.
- Veröffentlichung über GitHub Actions auf GitHub Pages, Dependabot für npm und GitHub Actions.
