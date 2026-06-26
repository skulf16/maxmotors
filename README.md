# Max Motors – Website

One-Page-Website für die **Max Motors GmbH**, freie Kfz-Meisterwerkstatt in Berlin.
Fokus: Service, Wartung und ehrliche Reparatur – alles im eigenen Haus, vom Kleinwagen
bis zum Sportwagen. Eigener Motorenbau (Reparatur statt Versand), Lackiererei & Karosserie.

Gebaut mit **Next.js 15 (App Router) + React 19 + TypeScript**, ohne CSS-Framework.

## Starten

```bash
npm install
npm run dev      # Entwicklung → http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktions-Server
```

## Aufbau

```
app/
  layout.tsx          Fonts, SEO-Meta, JSON-LD (AutoRepair)
  page.tsx            Startseite (alle Sektionen)
  v5.css              Design-System der Startseite ("Copperlane-Stil")
  globals.css         Basis-Styles + geteilte Komponenten (Formular, FAQ, Rechtsseiten)
  impressum/          Pflichtseite (Platzhalter – vor Live-Gang prüfen lassen)
  datenschutz/        Pflichtseite (Platzhalter – vor Live-Gang prüfen lassen)
components/
  v5/Header5.tsx      Pill-Navigation (sticky, mobiles Menü)
  v5/Hero5.tsx        Hero mit Video-Hintergrund + Stat-Reihe
  Icon.tsx            Linien-Icon-Set
  Reveal.tsx          Scroll-Einblendungen
  Faq.tsx             Akkordeon
  ContactForm.tsx     Kontaktformular (Demo, ohne Backend)
  SiteHeader/Footer   Header/Footer der Rechtsseiten
lib/
  content.ts          ALLE Texte & Daten an einer Stelle
```

## Design

- Heller, klarer Aufbau mit dunklen Akzent-Sektionen, **Lime-Akzent** (`#C7EE3A`).
- Display **Archivo** (fette Versal-Headlines), Fließtext **Inter**.
- Pill-Navigation, Hero mit Video, geticktes Kicker-Label, geisterhafte Stat-Zahlen,
  Value-Cards, Feature-Reihen (Bild + Liste), Lime-CTA-Band.
- Alle Texte zentral in `lib/content.ts`.

## Bilder & Video

- Fotos liegen in `public/images/` (eigene Werkstatt-Fotos), Logo in `public/logo.png`,
  Hero-Video in `public/max-motors-header.mp4`.
- iPhone-Originale waren HEIC → nach JPEG konvertiert, auf max. 2000 px skaliert und von
  fehlerhaften EXIF-Orientierungs-Tags befreit. Neue Fotos genauso aufbereiten.

## ⚠️ Vor dem Live-Gang

1. **Kontaktdaten** in `lib/content.ts` → Objekt `site` (Telefon, WhatsApp, E-Mail,
   Straße, PLZ, Öffnungszeiten) – aktuell Platzhalter.
2. **Impressum & Datenschutz** (`app/impressum`, `app/datenschutz`) mit echten Firmendaten
   füllen und **anwaltlich / per Datenschutz-Generator prüfen lassen**.
3. **Kontaktformular** (`components/ContactForm.tsx`) an ein echtes Backend anbinden.
4. **Hero-Video** komprimieren (aktuell ~16 MB) für schnellere Ladezeit.
5. **Domain** in `app/layout.tsx` (`metadataBase`) setzen.
