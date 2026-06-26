import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container legal-page">
          <p className="legal-sub">Ihre Daten bei Max Motors</p>
          <h1>Datenschutz&shy;erklärung</h1>

          <div className="legal-note">
            <p>
              <strong>Hinweis:</strong> Diese Datenschutzerklärung ist eine
              Vorlage mit Platzhaltern. Sie ist vor dem Live-Gang an den
              tatsächlichen Betrieb (eingesetzte Tools, Hosting, Mitarbeiterzahl)
              anzupassen und rechtlich prüfen zu lassen. Dies ist keine
              Rechtsberatung.
            </p>
          </div>

          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            Max Motors [Rechtsform], {site.street}, {site.zip} Berlin
            <br />
            E-Mail: {site.email} · Telefon: {site.phoneLabel}
          </p>

          <h2>2. Erhebung beim Besuch der Website</h2>
          <p>
            Beim Aufruf unserer Website werden durch den Hosting-Provider
            automatisch Informationen in Server-Logfiles erhoben (z. B.
            IP-Adresse, Datum und Uhrzeit, abgerufene Seite, Browsertyp).
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an einem sicheren, stabilen Betrieb).
          </p>

          <h2>3. Kontaktformular &amp; Terminanfrage</h2>
          <p>
            Wenn Sie uns über das Formular oder per E-Mail kontaktieren,
            verarbeiten wir die von Ihnen angegebenen Daten (Name, Telefon,
            E-Mail, Fahrzeug und Ihr Anliegen) ausschließlich zur Bearbeitung
            Ihrer Anfrage und zur Terminabstimmung. Rechtsgrundlage ist Art. 6
            Abs. 1 lit. b und lit. f DSGVO. Die Daten werden gelöscht, sobald sie
            für den Zweck nicht mehr erforderlich sind und keine gesetzlichen
            Aufbewahrungsfristen entgegenstehen.
          </p>

          <h2>4. Cookies &amp; eingebundene Dienste</h2>
          <p>
            Technisch notwendige Cookies sind einwilligungsfrei. Für nicht
            zwingend erforderliche Dienste (z. B. Karten, Analyse, eingebettete
            Inhalte) holen wir Ihre Einwilligung nach § 25 TDDDG i. V. m. Art. 6
            Abs. 1 lit. a DSGVO ein, bevor diese geladen werden. [Hier die
            tatsächlich eingesetzten Dienste und Auftragsverarbeiter ergänzen,
            z. B. Hosting, Kartendienst, Formular-Backend.]
          </p>

          <h2>5. Ihre Rechte</h2>
          <ul>
            <li>Auskunft über die zu Ihnen gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO) und Einschränkung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft</li>
          </ul>

          <h2>6. Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren –
            für Berlin bei der Berliner Beauftragten für Datenschutz und
            Informationsfreiheit.
          </p>

          <a className="tlink back-link" href="/">
            ← Zurück zur Startseite
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
