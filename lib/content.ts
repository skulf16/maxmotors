// =============================================================================
// Max Motors – zentrale Inhalte der Website
// Alle Texte an einer Stelle, damit sie leicht zu pflegen sind.
//
// HINWEIS: Kontaktdaten (Telefon, E-Mail, Adresse, Öffnungszeiten) sind
// PLATZHALTER und müssen vor dem Live-Gang durch die echten Daten ersetzt
// werden. Sie sind unten im Objekt `site` klar markiert.
// =============================================================================

export type IconName =
  | "engine"
  | "spray"
  | "lift"
  | "flag"
  | "wrench"
  | "gauge"
  | "brake"
  | "tire"
  | "snow"
  | "oil"
  | "diagnose"
  | "shield"
  | "clock"
  | "badge"
  | "tag"
  | "truck"
  | "phone"
  | "mail"
  | "pin";

export type SpecItem = { title: string; text: string; icon?: IconName; lottie?: string };

// -----------------------------------------------------------------------------
// Stammdaten / Kontakt  (PLATZHALTER – bitte ersetzen)
// -----------------------------------------------------------------------------
export const site = {
  name: "Max Motors",
  city: "Berlin",
  tagline: "Für alle ab 100 PS – und alle, die mehr als 300 wollen.",

  // PLATZHALTER ↓↓↓
  phoneLabel: "030 1234 5678",
  phoneHref: "tel:+493012345678",
  whatsappHref: "https://wa.me/493012345678",
  email: "kontakt@max-motors-berlin.de",
  street: "Industriestraße 15",
  zip: "12099",
  // PLATZHALTER ↑↑↑

  hours: [
    { day: "Mo – Fr", time: "07:30 – 18:00 Uhr" },
    { day: "Samstag", time: "09:00 – 14:00 Uhr" },
    { day: "Sonntag", time: "geschlossen" },
  ],
};

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------
export const nav: { href: string; label: string }[] = [
  { href: "#service", label: "Service" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#motorsport", label: "Motorsport" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

// -----------------------------------------------------------------------------
// SEO
// -----------------------------------------------------------------------------
export const meta = {
  title: "Max Motors Berlin – Kfz-Werkstatt für Service, Reparatur & Lack",
  description:
    "Kfz-Meisterwerkstatt in Berlin: Service, Wartung und ehrliche Reparatur für alle Marken. Motor-Instandsetzung, Lackiererei und Karosserie – alles im eigenen Haus. 15 Hebebühnen, schnelle Termine.",
};

// -----------------------------------------------------------------------------
// Hero
// -----------------------------------------------------------------------------
export const hero = {
  kicker: "Freie Meisterwerkstatt in Berlin",
  headlineMain: "Freie Kfz-Werkstatt in Berlin für *alle Fahrzeuge*",
  headlineTop: "Max Motors",
  headlineBottom: "Vom Alltagswagen über hochwertige Fahrzeuge bis zum Power-Projekt – alles unter einem Dach.",
  subhead: "Service, Wartung, Lack, Motor und Karosserie – wir erledigen alles unter einem Dach. Top Service vom Kleinwagen bis zum Sportwagen.",
  // Drei Zielgruppen, für die die Werkstatt da ist (Hero-Tags)
  audiences: [
    { label: "Alltagsfahrzeuge", note: "Service, Wartung & Reparatur – alle Marken" },
    { label: "Hochwertige Fahrzeuge", note: "Sorgfalt & Dokumentation auf Meister-Niveau" },
    { label: "Mehr Power", note: "Motorenbau, Leistung & saubere Eintragung" },
  ],
  paragraph:
    "Service, Wartung, Diagnose, Lackiererei, Karosserie – und sogar die Motor-Instandsetzung machen wir im eigenen Haus, statt Ihr Auto irgendwohin zu schicken. Vom Alltagswagen bis zum hochwertigen Fahrzeug bekommt jeder dieselbe gemessene Sorgfalt – zu fairen Preisen.",
  ctaPrimary: { label: "Termin anfragen", href: "#kontakt" },
  ctaSecondary: { label: "Leistungen ansehen", href: "#leistungen" },
  // „Prüfstands-Protokoll" – Leistungsspektrum des Betriebs (keine erfundenen Messwerte)
  spec: {
    caption: "Leistungsspektrum",
    rows: [
      { label: "Leistung", value: "60 – 600+ PS" },
      { label: "Marken", value: "alle" },
      { label: "Hebebühnen", value: "15" },
      { label: "Eigener Motorenbau", value: "ja" },
      { label: "Eigene Lackierkabine", value: "ja" },
      { label: "Termin", value: "kurzfristig" },
    ],
  },
};

// -----------------------------------------------------------------------------
// Trust-Bar (Laufband)
// -----------------------------------------------------------------------------
export const trustSignals: string[] = [
  "Kfz-Meisterbetrieb",
  "Alle Marken & Modelle",
  "HU & AU im Haus",
  "Kostenloser Kostenvoranschlag",
  "Faire Festpreise",
  "Garantie auf alle Arbeiten",
  "Eigener Motorenbau",
  "Eigene Lackierkabine",
  "15 Hebebühnen · kurze Wartezeiten",
  "Hol- & Bringservice",
  "Ersatzwagen auf Wunsch",
  "Auch hochwertige Fahrzeuge",
];

// -----------------------------------------------------------------------------
// USP-Strip
// -----------------------------------------------------------------------------
export const usp = {
  index: "01",
  kicker: "Unsere vier Säulen",
  headline: "Vier Dinge, die wir selbst machen",
  subhead:
    "Service, Reparatur und Instandsetzung – alles im eigenen Haus, in Berlin. Für jede Marke und jede Fahrzeugklasse.",
  note: "Vom Ölwechsel bis zur Motor-Instandsetzung – ehrliche Werkstattarbeit für jedes Budget und jede Fahrzeugklasse.",
  items: [
    {
      icon: "engine" as IconName,
      img: "/images/photo-09.jpg",
      title: "Motor-Instandsetzung im Haus",
      text: "Geht der Motor kaputt, reparieren wir ihn bei uns – statt ihn wochenlang einzuschicken. Vom Zylinderkopf bis zur Revision: alles vor Ort.",
    },
    {
      icon: "spray" as IconName,
      img: "/images/photo-01.jpg",
      title: "Eigene Lackierkabine",
      text: "Karosserie, Schweißarbeiten und Lackierung laufen bei uns intern in der eigenen Kabine. Saubere Übergänge, ein Ansprechpartner, kein Hin- und Herschicken.",
    },
    {
      icon: "lift" as IconName,
      img: "/images/photo-06.jpg",
      title: "15 Bühnen, schnelle Termine",
      text: "Großer Stützpunkt mit 15 Hebebühnen. Das heißt hohe Kapazität und Termine, auf die Sie nicht wochenlang warten – ob Ölwechsel oder große Reparatur.",
    },
    {
      icon: "shield" as IconName,
      img: "/images/photo-03.jpg",
      title: "Service für jede Klasse",
      text: "Vom Alltagswagen bis zum hochwertigen Fahrzeug: Wartung, Service und Reparatur für alle Marken – mit dem gleichen Anspruch und ehrlicher Beratung.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Positionierung – Zwei Welten, eine Werkstatt
// -----------------------------------------------------------------------------
export const positionierung = {
  index: "02",
  kicker: "Wer wir sind",
  headline: "Zwei Welten, eine Werkstatt",
  subhead:
    "Wir sind die Werkstatt für Ihr Alltagsauto – und die Adresse, wenn ein hochwertiges Fahrzeug das Beste verdient. Gleicher Anspruch, gleiche Sorgfalt, alles im eigenen Haus.",
  lead: "Max Motors ist eine freie Werkstatt in Berlin mit Meisterbetrieb-Anspruch – und wir meinen genau das, was wir sagen. Die Inspektion am Alltagswagen ist uns so wichtig wie das hochwertige Fahrzeug, das jemand uns anvertraut. Hier ist jeder willkommen, und jedes Auto bekommt dieselbe gemessene Sorgfalt.",
  columns: [
    {
      tag: "Alltag",
      title: "Ihre Alltagswerkstatt",
      points: [
        "Inspektion & Wartung nach Herstellervorgabe",
        "HU / AU & TÜV im Haus",
        "Reparatur aller Marken & Modelle",
        "Faire Festpreise für jedes Budget",
      ],
    },
    {
      tag: "Gehobene Klasse",
      title: "Für höchste Ansprüche",
      points: [
        "Motor-Instandsetzung im eigenen Haus",
        "Service nach Herstellervorgabe",
        "Lackiererei & Karosserie inhouse",
        "Sorgfältige, dokumentierte Arbeit",
      ],
    },
  ],
  closer:
    "Was wir am hochwertigen Fahrzeug können, kommt auch Ihrem Alltagsauto zugute. Ein Betrieb, eine Mannschaft, ein Qualitätsanspruch.",
};

// -----------------------------------------------------------------------------
// Leistungen (Alltag)
// -----------------------------------------------------------------------------
export const leistungen = {
  index: "03",
  kicker: "Reguläre Leistungen",
  headline: "Alles, was Ihr Auto im *Alltag* braucht",
  subhead:
    "Wartung, Prüfung, Diagnose, Bremsen, Reifen und mehr – für alle Marken und Modelle. Sagen Sie uns, was ansteht, wir kümmern uns darum.",
  cta: { label: "Termin anfragen", href: "#kontakt" },
  note: "15 Hebebühnen, hohe Kapazität, schnelle Termine. Schildern Sie uns kurz, was ansteht – wir melden uns mit einem Vorschlag.",
  items: [
    {
      icon: "wrench" as IconName,
      lottie: "/Icons/wartung-inspektion.json",
      title: "Wartung & Inspektion",
      text: "Wartung nach Herstellervorgabe, ob Kleinwagen oder Sportwagen. Alle Arbeiten dokumentiert und nachvollziehbar, damit Ihre Garantie erhalten bleibt.",
    },
    {
      icon: "badge" as IconName,
      lottie: "/Icons/hauptuntersuchung.json",
      title: "HU / AU-Vorbereitung",
      text: "Wir machen Ihr Auto fit für die Hauptuntersuchung: prüfen, was geprüft wird, beheben Mängel vorab und stimmen den Termin direkt mit dem Prüfer ab.",
    },
    {
      icon: "diagnose" as IconName,
      lottie: "/Icons/diagnose.json",
      title: "Diagnose & Elektronik",
      text: "Warnleuchte an, Fehler im Speicher? Wir lesen aus, messen nach und finden die Ursache, statt nur das Symptom zu löschen – auch bei moderner Sensorik.",
    },
    {
      icon: "brake" as IconName,
      lottie: "/Icons/bremsen.json",
      title: "Bremsen & Fahrwerk",
      text: "Beläge, Scheiben, Stoßdämpfer, Lager und Achsvermessung. Damit das Auto sauber steht, sicher verzögert und ruhig auf der Straße liegt.",
    },
    {
      icon: "tire" as IconName,
      lottie: "/Icons/reifen.json",
      title: "Reifen & Räder",
      text: "Reifenwechsel, Montage, Auswuchten und Einlagerung. Wir beraten ehrlich, welche Reifen zu Ihrem Fahrzeug und Budget passen.",
    },
    {
      icon: "snow" as IconName,
      lottie: "/Icons/klima.json",
      title: "Klimaservice",
      text: "Klimaanlage prüfen, befüllen und desinfizieren. Lässt die Kühlung nach, finden wir das Leck, statt nur nachzufüllen.",
    },
    {
      icon: "oil" as IconName,
      lottie: "/Icons/oel.json",
      title: "Öl- & Service",
      text: "Öl- und Filterwechsel mit den richtigen Freigaben für Ihren Motor, schnell und sauber erledigt – und ein Hinweis, wann der nächste Service fällig ist.",
    },
    {
      icon: "gauge" as IconName,
      lottie: "/Icons/steering%20wheel.json",
      title: "Achsvermessung",
      text: "Computergestützte Achs- und Fahrwerksvermessung. Wir richten die Geometrie exakt aus – für gleichmäßigen Reifenverschleiß und sauberes Fahrverhalten.",
    },
  ] as SpecItem[],
};

// -----------------------------------------------------------------------------
// Motorenbau
// -----------------------------------------------------------------------------
export const motorenbau = {
  index: "04",
  kicker: "Motorenbau & Instandsetzung",
  headline: "Motorschaden? *Reparatur im Haus* statt Versand.",
  subhead:
    "Geht etwas am Motor kaputt, setzen wir ihn bei uns vor Ort instand – statt ihn wochenlang einzuschicken. Das spart Zeit, Wege und Nerven.",
  paragraphs: [
    "Einen Motorschaden geben die meisten Werkstätten ab – Ihr Auto verschwindet für Wochen, und keiner weiß so genau, was passiert. Bei Max Motors bleibt der Motor im Haus. Wir zerlegen, vermessen und setzen ihn mit eigenen Leuten und eigenem Werkzeug instand. Kurze Wege, klare Verantwortung, ein Ansprechpartner.",
    "Uns geht es dabei nicht um Höchstleistung, sondern darum, dass Ihr Motor wieder zuverlässig läuft. Wir arbeiten nach Herstellervorgaben, dokumentieren Toleranzen und sagen ehrlich, was sich lohnt – ob beim Alltagswagen oder beim hochwertigen Fahrzeug.",
    "Und oft lässt sich ein Motor instand setzen, statt ihn komplett zu tauschen. Wir schauen genau hin und empfehlen den Weg, der für Sie wirtschaftlich sinnvoll ist – nicht den teuersten.",
  ],
  cta: { label: "Motor-Check anfragen", href: "#kontakt" },
  items: [
    {
      title: "Motorschaden-Reparatur",
      text: "Vom Motorschaden bis zum Defekt nach Überhitzung: Wir reparieren im Haus, statt Ihr Auto wochenlang einzuschicken.",
    },
    {
      title: "Komplettrevision & Überholung",
      text: "Motor raus, komplett zerlegt, vermessen und neu aufgebaut. Verschleißteile, Lager, Dichtungen und Steuerung nach Herstellervorgabe, sauber dokumentiert.",
    },
    {
      title: "Zylinderkopf-Instandsetzung",
      text: "Planen, Ventile, Sitze und Führungen prüfen, Dichtheit herstellen. Defekte Kopfdichtung, Riss oder Verzug nach Überhitzung – wir bringen den Kopf zurück in Form.",
    },
    {
      title: "Diagnose & ehrliche Einschätzung",
      text: "Klopfen, Ölverbrauch, Leistungsverlust? Wir finden die Ursache, bevor wir schrauben, und sagen klar, ob Instandsetzung oder Tausch der sinnvollere Weg ist.",
    },
  ] as SpecItem[],
};

// -----------------------------------------------------------------------------
// Performance & Tuning
// -----------------------------------------------------------------------------
export const performance = {
  index: "05",
  kicker: "Tuning & Performance",
  headline: "Mehr Leistung. *Sauber abgestimmt*, ehrlich eingetragen.",
  subhead:
    "Jahrelange Motorsport-Erfahrung und ein eigenes Renn-Team – von Serie bis 300+ PS, sauber abgestimmt und ehrlich eingetragen.",
  paragraphs: [
    "Leistung ist kein Zufall, sondern Messarbeit. Wir holen aus Ihrem Fahrzeug heraus, was sicher und sinnvoll machbar ist – mit eigenem Motorenbau, einem aktiven Motorsport-Team und Leuten, die wissen, wovon sie reden. Kein lautes Versprechen, sondern saubere Abstimmung, die im Alltag hält.",
    "Wir denken Leistung als Gesamtpaket: Software und Hardware, Motor, Abgasanlage und Fahrwerk müssen zueinander passen. Deshalb stimmen wir nicht nur eine Zahl auf dem Datenblatt ab, sondern das ganze Auto – damit mehr PS auch mehr Fahrbarkeit bedeuten und nicht nur mehr Verschleiß.",
    "Eintragung und Legalität sind für uns keine Fußnote, sondern die Grundlage. Wir arbeiten von Anfang an eintragungs- und gutachtenbewusst und begleiten den Weg zur sauberen Abnahme. So bleibt Ihr Fahrzeug versichert, zugelassen und Ihrer – nur deutlich agiler.",
  ],
  cta: { label: "Projekt besprechen", href: "#kontakt" },
  items: [
    {
      title: "Leistungssteigerung mit Konzept",
      text: "Von der dezenten Mehrleistung im Serienrahmen bis zu Aufbauten jenseits der 300 PS. Wir planen Ihr Ziel realistisch – ausgelegt auf Budget und Einsatz.",
    },
    {
      title: "Software & Abstimmung",
      text: "Kennfeld-Optimierung und individuelle Abstimmung statt Pauschal-Datei aus der Schublade. Sauber auf Ihren Motor angepasst, mit Blick auf Standfestigkeit.",
    },
    {
      title: "Abgasanlage",
      text: "Vom Downpipe bis zur kompletten Anlage – in Klang und Durchsatz aufs Setup abgestimmt. Geschweißt und gefertigt in eigener Werkstatt.",
    },
    {
      title: "Fahrwerk & Bremse",
      text: "Mehr Leistung will gehalten und verzögert werden. Fahrwerk, Reifen und Bremse stimmen wir auf die neue Leistung ab – berechenbar in jeder Lage.",
    },
    {
      title: "Motorenbau im Haus",
      text: "Schmiede-Kolben, verstärkte Innereien, Revision: Wer ernsthaft Leistung will, kommt am Motor nicht vorbei. Kein Versand, keine Wartezeit auf fremde Hand.",
    },
    {
      title: "Eintragung & Legalität",
      text: "Eintragungs- und gutachtenbewusst von der ersten Schraube an. Wir begleiten Sie bis zur sauberen Abnahme – damit alles zugelassen bleibt.",
    },
  ] as SpecItem[],
};

// -----------------------------------------------------------------------------
// Lackiererei & Karosserie
// -----------------------------------------------------------------------------
export const lackiererei = {
  index: "06",
  kicker: "Lackiererei & Karosserie",
  headline: "Lack und Karosserie. *Alles im Haus*, nichts ausgelagert.",
  subhead:
    "Von der Parkdelle bis zur Unfallinstandsetzung – mit eigener Lackierkabine in Berlin.",
  paragraphs: [
    "Lack und Karosserie machen wir komplett selbst. Unsere Lackierkabine steht bei uns in der Halle, die Schweißarbeiten kommen aus der eigenen Werkstatt, und die Aufbereitung übernimmt dasselbe Team. Ihr Fahrzeug wandert also nicht zu Subunternehmern, sondern bleibt bei uns – vom ersten Blick auf den Schaden bis zur Übergabe.",
    "Das gilt für jedes Auto. Den Kratzer am Kotflügel nehmen wir genauso ernst wie den Schaden an der Front eines Sportwagens. Wir mischen den Farbton passend zu Ihrem Fahrzeug und arbeiten so, dass man die Reparatur am Ende nicht mehr sieht. Faire Preise, ehrliche Ansagen, keine bösen Überraschungen bei der Abholung.",
  ],
  cta: { label: "Schaden begutachten lassen", href: "#kontakt" },
  items: [
    {
      title: "Eigene Lackierkabine",
      text: "Lackierung im eigenen Haus, vom Spotlack einer einzelnen Stelle bis zur Komplettlackierung. Farbtöne mischen wir passend, damit der Übergang nicht auffällt.",
    },
    {
      title: "Unfallinstandsetzung",
      text: "Wir richten Unfallschäden fachgerecht instand – vom Blechschaden bis zur Frontpartie, inklusive Abwicklung mit Ihrer Versicherung.",
    },
    {
      title: "Schweißarbeiten",
      text: "Schweißen und Richten an Karosserie und Tragteilen erledigen wir selbst. Saubere Naht, tragfähiges Ergebnis, fertig für Lack und Straße.",
    },
    {
      title: "Aufbereitung & Smart Repair",
      text: "Innen wie außen wieder auf Stand: Politur, Lackpflege und Kleinschadenreparatur aus einer Hand – ob vor dem Verkauf oder einfach so.",
    },
  ] as SpecItem[],
};

// -----------------------------------------------------------------------------
// Motorsport
// -----------------------------------------------------------------------------
export const motorsport = {
  index: "07",
  kicker: "Motorsport",
  headline: "Wir fahren selbst. Das merkt man an jedem Auftrag.",
  subhead:
    "Eigenes Team, echte Rennstrecken-Erfahrung – und das Wissen daraus landet bei Ihnen in der Halle.",
  paragraphs: [
    "Max Motors hat ein eigenes Motorsport-Team. Wir stehen nicht am Rand, wir sind selbst auf der Strecke – mit allem, was dazugehört: Setup unter Zeitdruck, Fehler suchen, wenn es heiß wird, und ein Fahrzeug, das am Sonntag halten muss, was wir am Freitag versprochen haben. Diese Erfahrung kann man nicht kaufen, die fährt man sich.",
    "Was wir auf der Rennstrecke lernen, bleibt nicht auf der Rennstrecke. Trackday-Vorbereitung, die Abstimmung von Rennfahrzeugen, der ehrliche Blick darauf, was Last und Drehzahl mit Motor, Bremsen und Material machen – dieses Know-how fließt direkt in jeden Auftrag ein. Auch in den, der nach außen ganz unspektakulär aussieht.",
    "Genau deshalb arbeiten wir an Ihrem Auto so, wie wir an unserem eigenen arbeiten würden. Ob Sportwagen für den nächsten Trackday oder Alltagswagen zur Inspektion: Sie bekommen dieselbe gemessene Sorgfalt, denselben prüfenden Blick und dieselbe Ehrlichkeit, wenn etwas nicht passt.",
  ],
  pullquote: "Motorsport ist bei uns kein Schaufenster – es ist die Schule, in der wir gelernt haben, genau zu sein.",
  cta: { label: "Projekt mit uns besprechen", href: "#kontakt" },
  stats: [
    { value: "Eigenes", label: "Renn-Team" },
    { value: "Trackday", label: "Vorbereitung & Setup" },
    { value: "100 %", label: "Know-how aus dem Wettbewerb" },
  ],
};

// -----------------------------------------------------------------------------
// Kapazität / Stützpunkt
// -----------------------------------------------------------------------------
export const kapazitaet = {
  index: "08",
  kicker: "Ihre Vorteile",
  headline: "15 Hebebühnen. Eine große Halle. *Schnelle Termine*.",
  subhead: "Großer Stützpunkt in Berlin – alles unter einem Dach.",
  paragraphs: [
    "Ein Werkstattplatz ist schnell besetzt. Bei uns sind es fünfzehn. Auf 15 Hebebühnen in einer großen Halle laufen Inspektion, Karosserie, Motorenbau, Lack und Prüfstand parallel – Ihr Fahrzeug muss nicht warten, bis ein anderes fertig ist.",
    "Das spürt man am Termin: Mehr Plätze bedeuten kürzere Wartezeiten, klare Absprachen und realistische Zusagen, die wir auch halten. Alles unter einem Dach heißt kein Hin und Her zwischen Betrieben und keine Schnittstellen, an denen Wissen verloren geht.",
  ],
  stats: [
    { value: 15, suffix: "", label: "Hebebühnen im Einsatz" },
    { value: 1, suffix: "", label: "Halle – alles unter einem Dach" },
    { display: "Alle", label: "Marken & Modelle willkommen" },
    { value: 300, suffix: "+", label: "PS – vom Alltagsauto bis Sportwagen" },
  ] as { value?: number; suffix?: string; display?: string; label: string }[],
};

// -----------------------------------------------------------------------------
// Ablauf
// -----------------------------------------------------------------------------
export const ablauf = {
  index: "09",
  kicker: "So arbeiten wir",
  headline: "Vier Schritte. Klare Ansagen. Kein Rätselraten.",
  subhead:
    "Jeder Auftrag läuft bei uns nach demselben gemessenen Ablauf. Sie wissen jederzeit, woran wir arbeiten und was es kostet.",
  cta: { label: "Termin anfragen", href: "#kontakt" },
  steps: [
    {
      no: "01",
      title: "Anfrage & Termin",
      text: "Rufen Sie an oder schreiben Sie uns kurz, was los ist. Mit 15 Hebebühnen haben wir Kapazität – Sie bekommen einen Termin, der zeitnah passt, kein Warten über Wochen.",
    },
    {
      no: "02",
      title: "Diagnose & Kostenvoranschlag",
      text: "Wir schauen uns Ihr Fahrzeug genau an und sagen ehrlich, was anliegt – und was nicht. Sie erhalten einen transparenten Kostenvoranschlag. Gearbeitet wird erst, wenn Sie Ja sagen.",
    },
    {
      no: "03",
      title: "Umsetzung",
      text: "Jetzt machen wir unsere Arbeit – das Meiste im eigenen Haus: Motorenbau, Karosserie, Schweißen und Lack in der eigenen Kabine. Ändert sich unterwegs etwas, hören Sie vorher von uns.",
    },
    {
      no: "04",
      title: "Abnahme & Übergabe",
      text: "Zum Schluss kontrollieren wir, was wir gemacht haben. Bei der Übergabe erklären wir verständlich, was am Fahrzeug passiert ist. Sie fahren mit gutem Gefühl raus.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Warum Max Motors
// -----------------------------------------------------------------------------
export const warum = {
  index: "10",
  kicker: "Warum Max Motors",
  headline: "Eine Werkstatt für alle. Mit dem Anspruch eines Meisterbetriebs.",
  subhead:
    "Bei uns bekommt jedes Auto dieselbe gemessene Sorgfalt – und jeder Kunde eine ehrliche Ansage.",
  items: [
    {
      icon: "badge" as IconName,
      title: "Arbeit auf Meister-Niveau",
      text: "Präzise, sauber, nachvollziehbar. Was wir anfassen, machen wir richtig – vom Ölwechsel bis zur Motorrevision.",
    },
    {
      icon: "tag" as IconName,
      title: "Transparente Preise",
      text: "Sie wissen vorher, woran Sie sind. Verständlicher Kostenvoranschlag, bevor wir loslegen. Keine Überraschungen auf der Rechnung.",
    },
    {
      icon: "wrench" as IconName,
      title: "Alle Marken, alle Modelle",
      text: "Ob Kleinwagen, Familienkombi oder Sportwagen mit 300+ PS – eine Anlaufstelle für Ihren kompletten Fuhrpark.",
    },
    {
      icon: "shield" as IconName,
      title: "Faire Behandlung für jedes Budget",
      text: "Bei uns ist jeder willkommen. Wir suchen die Lösung, die zu Ihrem Auto und Geldbeutel passt – statt das teuerste Paket zu verkaufen.",
    },
    {
      icon: "truck" as IconName,
      title: "Hol- und Bringservice",
      text: "Keine Zeit, vorbeizukommen? Wir holen Ihr Fahrzeug ab und bringen es zurück, wenn alles erledigt ist.",
    },
    {
      icon: "clock" as IconName,
      title: "Gewährleistung auf unsere Arbeit",
      text: "Wir stehen für das gerade, was wir gemacht haben. Sorgfalt endet nicht am Tag der Abholung.",
    },
  ] as SpecItem[],
};

// -----------------------------------------------------------------------------
// FAQ
// -----------------------------------------------------------------------------
export const faq = {
  index: "11",
  kicker: "Häufige Fragen",
  headline: "*Klare Antworten*, bevor Sie zum Hörer greifen",
  subhead: "Was hier nicht steht, beantworten wir am Telefon oder direkt in der Halle.",
  items: [
    {
      q: "Welche Marken reparieren Sie?",
      a: "Als freie Werkstatt arbeiten wir an allen Marken und Modellen – vom deutschen Hersteller über Importe bis zum Sportwagen mit 300 PS und mehr. Wir sind kein Vertragspartner einer einzelnen Marke, und genau das ist Ihr Vorteil: Wir entscheiden frei, was Ihr Auto wirklich braucht.",
    },
    {
      q: "Nehmen Sie auch kleine oder ältere Autos an?",
      a: "Selbstverständlich. Der Kleinwagen zur Inspektion ist bei uns genauso willkommen wie der Sportwagen auf dem Prüfstand. Gerade ältere Fahrzeuge profitieren von unserem eigenen Motorenbau im Haus: Was andere abschreiben, können wir oft instand setzen. Jedes Auto bekommt dieselbe Sorgfalt – unabhängig von Baujahr und Budget.",
    },
    {
      q: "Bekomme ich vorab einen Kostenvoranschlag?",
      a: "Ja. Bevor wir loslegen, schauen wir uns Ihr Fahrzeug an und sagen ehrlich, was zu tun ist und was es kostet. Keine Überraschungen auf der Rechnung. Zeigt sich bei der Arbeit etwas Zusätzliches, melden wir uns vorher bei Ihnen und stimmen das gemeinsam ab.",
    },
    {
      q: "Gibt es Garantie auf Tuning und Eintragung?",
      a: "Auf unsere Arbeit geben wir Ihnen die gesetzliche Gewährleistung. Beim Thema Tuning beraten wir geradeheraus, was technisch sinnvoll und sauber eintragungsfähig ist. Wir bauen nichts ein, was wir nicht selbst fahren würden, und machen keine Versprechen, die wir nicht halten können.",
    },
    {
      q: "Ich hatte einen Unfall – was ist mit der Versicherung?",
      a: "Karosserie, Schweißarbeiten und Lack machen wir komplett im eigenen Haus, inklusive eigener Lackierkabine. Wir unterstützen Sie bei der Abwicklung mit Ihrer Versicherung und sprechen Klartext, was repariert werden muss und was sich noch lohnt. Sie bekommen Ihr Auto sauber zurück, nicht nur notdürftig geflickt.",
    },
    {
      q: "Wie lange ist der Terminvorlauf?",
      a: "Mit 15 Hebebühnen und einem großen Stützpunkt haben wir die Kapazität für kurze Wartezeiten – auch dann, wenn andere Werkstätten Sie wochenlang vertrösten. Rufen Sie an oder kommen Sie vorbei. In vielen Fällen finden wir schneller einen Termin, als Sie denken.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Kontakt
// -----------------------------------------------------------------------------
export const kontakt = {
  index: "12",
  kicker: "Kontakt",
  headline: "Kommen Sie vorbei. *Wir reden Klartext.*",
  subhead:
    "Ehrliche Beratung, klare Termine, saubere Arbeit – Sie erreichen uns direkt, ohne Umwege.",
  paragraphs: [] as string[],
  formNote:
    "Sagen Sie uns kurz, um welches Fahrzeug es geht und was ansteht – je konkreter, desto schneller können wir einschätzen. Wir melden uns zeitnah zurück.",
};

// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------
export const footer = {
  claim: "Vom ersten Check bis zum letzten Lack – alles bei Max Motors.",
  blurb:
    "Eigener Motorenbau, eigene Lackierkabine, 15 Hebebühnen und ein eigenes Motorsport-Team. Wir machen die normale Inspektion so ernst wie den Lauf auf dem Prüfstand.",
  legal: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ],
};
