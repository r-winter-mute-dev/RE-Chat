# Changelog

Versionsnummern nach [SemVer](https://semver.org/lang/de/); vor 1.0 kann sich alles ändern.

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
