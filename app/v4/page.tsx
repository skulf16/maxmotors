import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import "./v4.css";

import Header4 from "@/components/v4/Header4";
import Hero4 from "@/components/v4/Hero4";
import Split4 from "@/components/v4/Split4";
import RedlineGauge from "@/components/v4/RedlineGauge";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";

import {
  ablauf,
  faq,
  kapazitaet,
  kontakt,
  leistungen,
  lackiererei,
  motorenbau,
  positionierung,
  site,
  usp,
  footer as footerData,
  nav,
} from "@/lib/content";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Max Motors Berlin — Entwurf v4 (Night Run)",
};

const gauges = [
  { value: 15, frac: 0.82, label: "Hebebühnen im Einsatz" },
  { value: 100, suffix: "%", frac: 1, label: "Eigenleistung im Haus" },
  { value: 4, frac: 1, label: "Gewerke, ein Dach" },
  { value: 1, frac: 1, label: "Halle – alles vor Ort" },
];

export default function V4() {
  return (
    <div className={`v4 ${orbitron.variable}`}>
      <div className="v4__grain" aria-hidden />
      <Header4 />

      <main>
        <Hero4 />

        {/* ---- Mission + Stages ---- */}
        <section className="v4-section" id="positionierung">
          <div className="v4-wrap">
            <Reveal className="v4-head">
              <span className="v4-eyebrow">01 Wer wir sind</span>
              <h2 className="v4-h2">
                Service, Wartung und ehrliche Reparatur — alles im eigenen Haus, mit <em>Benzin im Blut</em>.
              </h2>
              <p className="v4-lead">{positionierung.subhead}</p>
              <p className="v4-body" style={{ marginTop: 14, opacity: 0.78 }}>
                Übrigens: Etwas Motorsport-Erfahrung steckt mit drin – im Mittelpunkt steht aber immer Ihr Auto.
              </p>
            </Reveal>

            <div className="v4-stages">
              {usp.items.map((it, i) => (
                <Reveal className="v4-stage" key={it.title} delay={i * 70}>
                  <div className="v4-stage__no">{String(i + 1).padStart(2, "0")}</div>
                  <span className="v4-stage__ic">
                    <Icon name={it.icon} size={30} />
                  </span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Leistungen ---- */}
        <section className="v4-section" id="leistungen">
          <div className="v4-wrap">
            <Reveal className="v4-head">
              <span className="v4-eyebrow">02 {leistungen.kicker}</span>
              <h2 className="v4-h2">{leistungen.headline}</h2>
              <p className="v4-lead">{leistungen.subhead}</p>
            </Reveal>
            <Reveal className="v4-svc">
              {leistungen.items.map((it) => (
                <div className="v4-svc__cell" key={it.title}>
                  <span className="ic">{it.icon && <Icon name={it.icon} size={26} />}</span>
                  <h4>{it.title}</h4>
                  <p>{it.text}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ---- Deep-Dives ---- */}
        <Split4
          id="motorenbau"
          index="03"
          kicker={motorenbau.kicker}
          headline={motorenbau.headline}
          lead={motorenbau.subhead}
          paragraphs={motorenbau.paragraphs}
          items={motorenbau.items}
          cta={motorenbau.cta}
          image="/images/photo-09.jpg"
          alt="Eigene Motoren-Bearbeitungsmaschine bei Max Motors"
          badge="Eigener Motorenbau"
        />

        <Split4
          id="lackiererei"
          index="04"
          kicker={lackiererei.kicker}
          headline={lackiererei.headline}
          lead={lackiererei.subhead}
          paragraphs={lackiererei.paragraphs}
          items={lackiererei.items}
          cta={lackiererei.cta}
          image="/images/photo-01.jpg"
          alt="Abgeklebtes Fahrzeug in der Lackierkabine"
          badge="Eigene Lackierkabine"
          reversed
        />

        {/* ---- Kapazität: Redline-Tacho ---- */}
        <section className="v4-section" id="kapazitaet" style={{ background: "var(--ink-2)" }}>
          <div className="v4-wrap">
            <Reveal className="v4-head">
              <span className="v4-eyebrow">05 {kapazitaet.kicker}</span>
              <h2 className="v4-h2">{kapazitaet.headline}</h2>
              <p className="v4-lead">{kapazitaet.subhead}</p>
            </Reveal>
            <div className="v4-gauges">
              {gauges.map((g) => (
                <RedlineGauge key={g.label} value={g.value} suffix={g.suffix} frac={g.frac} label={g.label} />
              ))}
            </div>
          </div>
        </section>

        {/* ---- Ablauf ---- */}
        <section className="v4-section" id="ablauf">
          <div className="v4-wrap">
            <Reveal className="v4-head">
              <span className="v4-eyebrow">06 {ablauf.kicker}</span>
              <h2 className="v4-h2">{ablauf.headline}</h2>
              <p className="v4-lead">{ablauf.subhead}</p>
            </Reveal>
            <div className="v4-steps">
              {ablauf.steps.map((s, i) => (
                <Reveal className="v4-step" key={s.no} delay={i * 80}>
                  <div className="v4-step__no">{s.no}</div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---- FAQ ---- */}
        <section className="v4-section" id="faq">
          <div className="v4-wrap">
            <Reveal className="v4-head">
              <span className="v4-eyebrow">07 {faq.kicker}</span>
              <h2 className="v4-h2">{faq.headline}</h2>
              <p className="v4-lead">{faq.subhead}</p>
            </Reveal>
            <Reveal>
              <Faq items={faq.items} />
            </Reveal>
          </div>
        </section>

        {/* ---- Kontakt ---- */}
        <section className="v4-section" id="kontakt">
          <div className="v4-wrap">
            <Reveal className="v4-head">
              <span className="v4-eyebrow">08 {kontakt.kicker}</span>
              <h2 className="v4-h2">{kontakt.headline}</h2>
              <p className="v4-lead">{kontakt.subhead}</p>
            </Reveal>
            <div className="v4-contact">
              <Reveal>
                {kontakt.paragraphs.map((p, i) => (
                  <p className="v4-body" key={i}>{p}</p>
                ))}
                <div className="v4-info" style={{ marginTop: 26 }}>
                  <div className="v4-info__row">
                    <span className="v4-info__ic"><Icon name="phone" size={22} /></span>
                    <div>
                      <div className="v4-info__k">Telefon</div>
                      <div className="v4-info__v"><a href={site.phoneHref}>{site.phoneLabel}</a></div>
                    </div>
                  </div>
                  <div className="v4-info__row">
                    <span className="v4-info__ic"><Icon name="mail" size={22} /></span>
                    <div>
                      <div className="v4-info__k">E-Mail</div>
                      <div className="v4-info__v"><a href={`mailto:${site.email}`}>{site.email}</a></div>
                    </div>
                  </div>
                  <div className="v4-info__row">
                    <span className="v4-info__ic"><Icon name="pin" size={22} /></span>
                    <div>
                      <div className="v4-info__k">Adresse</div>
                      <div className="v4-info__v">{site.street}, {site.zip} Berlin</div>
                    </div>
                  </div>
                  <div className="v4-info__row" style={{ display: "block" }}>
                    <div className="v4-info__k" style={{ marginBottom: 10 }}>Öffnungszeiten</div>
                    <div className="v4-hours">
                      {site.hours.map((h) => (
                        <div className="r" key={h.day}>
                          <b>{h.day}</b>
                          <span>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* ---- Footer ---- */}
      <footer className="v4-footer">
        <div className="v4-wrap">
          <div className="v4-footer__top">
            <div>
              <span className="v4-logo">
                <span className="v4-logo__badge">
                  <Image src="/logo.png" alt="Max Motors GmbH Logo" width={52} height={52} />
                </span>
              </span>
              <p className="v4-footer__claim">
                Wo Präzision auf <em>Leidenschaft</em> trifft.
              </p>
            </div>
            <div className="v4-footer__cols">
              <div>
                <h5>Werkstatt</h5>
                {nav.map((l) => (<a key={l.href} href={l.href}>{l.label}</a>))}
              </div>
              <div>
                <h5>Kontakt</h5>
                <a href={site.phoneHref}>{site.phoneLabel}</a>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <p>{site.street}<br />{site.zip} Berlin</p>
              </div>
              <div>
                <h5>Rechtliches</h5>
                {footerData.legal.map((l) => (<a key={l.href} href={l.href}>{l.label}</a>))}
              </div>
            </div>
          </div>
          <div className="v4-footer__bottom">
            <span>© {site.name} GmbH, Berlin · Freie Kfz-Meisterwerkstatt</span>
            <span>Entwurf v4 · Night Run</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
