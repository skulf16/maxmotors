import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container legal-page">
          <p className="legal-sub">Anbieterkennzeichnung</p>
          <h1>Impressum</h1>

          <div className="legal-note">
            <p>
              <strong>Hinweis:</strong> Diese Seite enthält Platzhalter. Vor dem
              Live-Gang sind alle Angaben durch die echten Betriebsdaten zu
              ersetzen und rechtlich prüfen zu lassen. Dies ist keine
              Rechtsberatung.
            </p>
          </div>

          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            Max Motors [Rechtsform, z. B. GmbH]
            <br />
            {site.street}
            <br />
            {site.zip} Berlin
          </p>

          <h2>Vertreten durch</h2>
          <p>[Name der/des Geschäftsführer:in / Inhaber:in]</p>

          <h2>Kontakt</h2>
          <p>
            Telefon: {site.phoneLabel}
            <br />
            E-Mail: {site.email}
          </p>

          <h2>Registereintrag</h2>
          <p>
            Eintragung im Handelsregister.
            <br />
            Registergericht: [Amtsgericht Berlin (Charlottenburg)]
            <br />
            Registernummer: [HRB XXXXXX]
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [DE XXXXXXXXX]
          </p>

          <h2>Handwerksrechtliche Angaben</h2>
          <ul>
            <li>Gesetzliche Berufsbezeichnung: Kraftfahrzeugtechniker-Meister (verliehen in Deutschland)</li>
            <li>Zuständige Handwerkskammer: Handwerkskammer Berlin</li>
            <li>Eingetragen in die Handwerksrolle der Handwerkskammer Berlin</li>
            <li>Es gelten die Handwerksordnung (HwO) sowie die einschlägigen berufsrechtlichen Regelungen.</li>
          </ul>

          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            [Name, Anschrift wie oben]
          </p>

          <h2>EU-Streitschlichtung &amp; Verbraucherstreitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit. Wir sind nicht verpflichtet und
            grundsätzlich nicht bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen. [Bitte final prüfen.]
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
