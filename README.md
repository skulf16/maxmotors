# Max Motors – Website

Hochwertige One-Page-Website für die (fiktive) Werkstatt **Max Motors** in Berlin.
Performance-Schmiede **und** ganz normale Werkstatt – vom Opel Corsa bis 300+ PS.

Gebaut mit **Next.js 15 (App Router) + React 19 + TypeScript**, ohne CSS-Framework
(eigenes Design-System „Prüfstand" in `app/globals.css`).

## Entwürfe

- **`/`** — Entwurf 1 „Prüfstand": Datenblatt-/Messprotokoll-Look, grafisch, ohne Fotos. *(nicht weiterverfolgt)*
- **`/v2`** — Entwurf 2 „Cinematic": dunkel & edel, große echte Bildwelten, Vollbild-Hero. *(nicht weiterverfolgt)*
- **`/v3`** — Entwurf 3 „Konfigurator": inspiriert von den Pinterest-Referenzen
  (Jaguar / Copperlane / McLaren / KIA). Dunkler Fahrzeug-Hero mit Spec-Leiste, **Racing-Rot**,
  helle Mission-Sektion mit geisterhaften Riesenzahlen, Tacho-/Gauge-Werte, Logo auf hellem Badge.
- **`/v4`** — Entwurf 4 „Night Run" (**Fast & Furious Style**): Neon-Nacht (NOS-Blau + Magenta),
  glühende schräge Headlines, Speed-Streifen, Redline-Tacho, Digital-Dashboard (Orbitron-Font),
  Fotos im Neon-Duotone-Grade.
- **`/v5`** — Entwurf 5 „Copperlane-Stil" (**aktuelle Richtung**): Layout nach dem Copperlane-Template
  (eigener Code, Max-Motors-Inhalte) – Pill-Nav, **Hero-Video** (`public/max-motors-header.mp4`),
  geticktes Kicker-Label, fette Archivo-Versal-Headlines, geisterhafte Stat-Zahlen, helle Sektionen,
  Lime-Akzent, Value-Cards, Lime-CTA-Band. Service-Fokus.

## Starten

```bash
npm install
npm run dev      # Entwicklung → http://localhost:3000  (v2 unter /v2)
npm run build    # Produktions-Build
npm run start    # Produktions-Server
```

## Bilder

Echte Fotos & Logo liegen in `public/images/` bzw. `public/logo.png`.
Die iPhone-Originale waren HEIC und wurden nach JPEG konvertiert, auf max. 2000 px
skaliert und von fehlerhaften EXIF-Orientierungs-Tags befreit (sonst dreht der
`next/image`-Optimizer die Bilder). Neue Fotos am besten genauso aufbereiten
(JPEG, ohne Orientierungs-Tag).

## Aufbau

```
app/
  layout.tsx          Fonts (Oswald, Inter, IBM Plex Mono), SEO-Meta, JSON-LD (AutoRepair)
  page.tsx            Reihenfolge aller Sektionen der Startseite
  globals.css         Komplettes Design-System „Prüfstand"
  impressum/          Pflichtseite (Platzhalter)
  datenschutz/        Pflichtseite (Platzhalter)
components/
  SiteHeader.tsx      Sticky-Header + mobiles Menü
  SiteFooter.tsx      Footer
  Icon.tsx            Linien-Icon-Set
  Reveal.tsx          Scroll-Einblendungen
  CountUp.tsx         Hochzählende Kennzahlen
  Faq.tsx             Akkordeon
  ContactForm.tsx     Kontaktformular (Demo, ohne Backend)
  SectionHead.tsx     Wiederverwendbare Sektions-Überschrift
  sections/           Einzelne Seitenabschnitte
lib/
  content.ts          ALLE Texte & Daten an einer Stelle
```

## ⚠️ Vor dem Live-Gang ersetzen

Alle Inhalte sind redaktionell, aber folgende Punkte sind **Platzhalter**:

1. **Kontaktdaten** in `lib/content.ts` → Objekt `site`
   (Telefon, WhatsApp, E-Mail, Straße, PLZ, Öffnungszeiten).
2. **Impressum & Datenschutz** (`app/impressum`, `app/datenschutz`) – mit echten
   Firmendaten füllen und **anwaltlich/per Datenschutz-Generator prüfen lassen**
   (Rechtsform, HRB, USt-ID, Handwerkskammer, eingesetzte Tools/Hosting).
3. **Kontaktformular** (`components/ContactForm.tsx`) – aktuell nur Demo.
   An ein echtes Backend (E-Mail-API / Formular-Dienst) anbinden.
4. **Bilder**: Das Design lebt bewusst von Typo, Datenblatt-Look und Grafik statt
   Stock-Fotos. Echte Werkstatt-/Motorsport-Fotos lassen sich später ergänzen.
5. **Domain** in `app/layout.tsx` (`metadataBase`) anpassen.

## Design „Prüfstand"

- Motorblock-Schwarz `#0E0F11`, warmes Datenblatt-Weiß `#F2EDE4`,
  ein Zündungs-Akzent `#E8521E`, kühl-metallisches `#C9CDD0`.
- Display **Oswald**, Fließtext **Inter**, alle Messwerte **IBM Plex Mono**.
- Leitmotiv: Label links / Wert rechts in Mono, feine Hairlines wie ein
  Prüfstands-Messprotokoll – gleiche Sorgfalt für Corsa wie für 300-PS-Aufbau.
