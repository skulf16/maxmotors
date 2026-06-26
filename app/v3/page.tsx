import type { Metadata } from "next";
import "./v3.css";

import Header3 from "@/components/v3/Header3";
import Hero3 from "@/components/v3/Hero3";
import Split3 from "@/components/v3/Split3";
import Gauge from "@/components/v3/Gauge";
import Image from "next/image";
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
  motorsport,
  performance,
  positionierung,
  site,
  usp,
  footer as footerData,
  nav,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Max Motors Berlin — Entwurf v3 (Konfigurator)",
};

const ghostStats = [
  { big: "15", k: "Hebebühnen", p: "Hohe Kapazität, kurze Wartezeiten – Termine in Tagen, nicht Wochen." },
  { big: "100%", k: "Eigenleistung", p: "Motor, Lack, Karosserie und Mechanik – alles im eigenen Haus, nichts ausgelagert." },
  { big: "alle", k: "Marken & Modelle", p: "Vom Alltagsauto bis zum Sportwagen mit 300+ PS – jeder ist willkommen." },
];

const gauges = [
  { value: 15, frac: 0.82, label: "Hebebühnen im Einsatz" },
  { value: 300, suffix: "+", frac: 0.85, label: "PS auf der Bühne – vom Alltag bis Sportwagen" },
  { value: 100, suffix: "%", frac: 1, label: "Eigenleistung: Motor, Lack & Karosserie" },
  { value: 4, frac: 1, label: "Gewerke unter einem Dach" },
];

export default function V3() {
  return (
    <div className="c3">
      <Header3 />

      <main>
        <Hero3 />

        {/* ---- Mission (hell) ---- */}
        <section className="c3-section c3-light" id="positionierung">
          <div className="c3-wrap">
            <Reveal>
              <span className="c3-eyebrow">{positionierung.index} — {positionierung.kicker}</span>
            </Reveal>
            <Reveal className="c3-mission">
              <h2 style={{ marginTop: 22 }}>
                Von der Inspektion bis zum Rennmotor — gebaut auf Können, Ehrlichkeit und <em>Benzin im Blut</em>.
              </h2>
              <p className="c3-lead">{positionierung.subhead}</p>
            </Reveal>

            <Reveal className="c3-ghoststats">
              {ghostStats.map((g) => (
                <div className="c3-ghost" key={g.k}>
                  <span className="c3-ghost__big" aria-hidden>{g.big}</span>
                  <div className="c3-ghost__k">{g.k}</div>
                  <p className="c3-ghost__p">{g.p}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="c3-values">
              {usp.items.map((it, i) => (
                <div className="c3-value" key={it.title}>
                  <span className="c3-value__no">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ic"><Icon name={it.icon} size={28} /></span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ---- Leistungen (dunkel) ---- */}
        <section className="c3-section" id="leistungen">
          <div className="c3-wrap">
            <Reveal className="c3-head">
              <span className="c3-eyebrow">{leistungen.index} — {leistungen.kicker}</span>
              <h2 className="c3-h2">{leistungen.headline}</h2>
              <p className="c3-lead">{leistungen.subhead}</p>
            </Reveal>
            <Reveal className="c3-svc">
              {leistungen.items.map((it) => (
                <div className="c3-svc__cell" key={it.title}>
                  <span className="ic">{it.icon && <Icon name={it.icon} size={26} />}</span>
                  <h4>{it.title}</h4>
                  <p>{it.text}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ---- Motorenbau (dunkel) ---- */}
        <Split3
          id="motorenbau"
          index={motorenbau.index}
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

        {/* ---- Performance (dunkel, Motor-Beauty) ---- */}
        <Split3
          id="performance"
          index={performance.index}
          kicker={performance.kicker}
          headline={performance.headline}
          lead={performance.subhead}
          paragraphs={performance.paragraphs}
          items={performance.items}
          cta={performance.cta}
          image="/images/photo-03.jpg"
          alt="Performance-Motorraum mit Sport-Ansaugung"
          badge="Performance & Abstimmung"
          reversed
        />

        {/* ---- Lackiererei (hell) ---- */}
        <Split3
          id="lackiererei"
          index={lackiererei.index}
          kicker={lackiererei.kicker}
          headline={lackiererei.headline}
          lead={lackiererei.subhead}
          paragraphs={lackiererei.paragraphs}
          items={lackiererei.items}
          cta={lackiererei.cta}
          image="/images/photo-01.jpg"
          alt="Abgeklebtes Fahrzeug in der Lackierkabine"
          badge="Eigene Lackierkabine"
          light
        />

        {/* ---- Kapazität: Tacho-Werte (dunkel) ---- */}
        <section className="c3-section" id="kapazitaet" style={{ background: "var(--ink-2)" }}>
          <div className="c3-wrap">
            <Reveal className="c3-head">
              <span className="c3-eyebrow">{kapazitaet.index} — {kapazitaet.kicker}</span>
              <h2 className="c3-h2">{kapazitaet.headline}</h2>
              <p className="c3-lead">{kapazitaet.subhead}</p>
            </Reveal>
            <div className="c3-gauges">
              {gauges.map((g) => (
                <Gauge key={g.label} value={g.value} suffix={g.suffix} frac={g.frac} label={g.label} />
              ))}
            </div>
          </div>
        </section>

        {/* ---- Motorsport (cinematic Band) ---- */}
        <section className="c3-band" id="motorsport">
          <div className="c3-band__media">
            <Image src="/images/photo-11.jpg" alt="Werkstatthalle von Max Motors" fill sizes="100vw" quality={80} />
          </div>
          <div className="c3-band__scrim" aria-hidden />
          <div className="c3-band__in">
            <div className="c3-band__content">
              <span className="c3-eyebrow">{motorsport.index} — {motorsport.kicker}</span>
              <h2 className="c3-pull" style={{ marginTop: 22 }}>
                <span className="bar" aria-hidden />
                {motorsport.headline}
              </h2>
              <p className="c3-lead" style={{ marginTop: 22, color: "var(--on-ink)" }}>
                {motorsport.subhead}
              </p>
              <p className="c3-body">{motorsport.paragraphs[1]}</p>
              <p
                style={{
                  fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 600,
                  fontSize: "1.2rem", lineHeight: 1.2, color: "var(--accent-2)",
                  borderLeft: "3px solid var(--red)", paddingLeft: 18, margin: "26px 0 30px", maxWidth: "40ch",
                }}
              >
                {motorsport.pullquote}
              </p>
              <a className="c3-btn c3-btn--ghost" href={motorsport.cta.href}>
                {motorsport.cta.label}
                <span className="arr">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ---- Ablauf (hell) ---- */}
        <section className="c3-section c3-light" id="ablauf">
          <div className="c3-wrap">
            <Reveal className="c3-head">
              <span className="c3-eyebrow">{ablauf.index} — {ablauf.kicker}</span>
              <h2 className="c3-h2">{ablauf.headline}</h2>
              <p className="c3-lead">{ablauf.subhead}</p>
            </Reveal>
            <div className="c3-steps">
              {ablauf.steps.map((s, i) => (
                <Reveal className="c3-step" key={s.no} delay={i * 80}>
                  <div className="c3-step__no">{s.no}</div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---- FAQ (dunkel) ---- */}
        <section className="c3-section" id="faq">
          <div className="c3-wrap">
            <Reveal className="c3-head">
              <span className="c3-eyebrow">{faq.index} — {faq.kicker}</span>
              <h2 className="c3-h2">{faq.headline}</h2>
              <p className="c3-lead">{faq.subhead}</p>
            </Reveal>
            <Reveal>
              <Faq items={faq.items} />
            </Reveal>
          </div>
        </section>

        {/* ---- Kontakt (dunkel) ---- */}
        <section className="c3-section" id="kontakt">
          <div className="c3-wrap">
            <Reveal className="c3-head">
              <span className="c3-eyebrow">{kontakt.index} — {kontakt.kicker}</span>
              <h2 className="c3-h2">{kontakt.headline}</h2>
              <p className="c3-lead">{kontakt.subhead}</p>
            </Reveal>
            <div className="c3-contact">
              <Reveal>
                {kontakt.paragraphs.map((p, i) => (
                  <p className="c3-body" key={i}>{p}</p>
                ))}
                <div className="c3-info" style={{ marginTop: 26 }}>
                  <div className="c3-info__row">
                    <span className="c3-info__ic"><Icon name="phone" size={22} /></span>
                    <div>
                      <div className="c3-info__k">Telefon</div>
                      <div className="c3-info__v"><a href={site.phoneHref}>{site.phoneLabel}</a></div>
                    </div>
                  </div>
                  <div className="c3-info__row">
                    <span className="c3-info__ic"><Icon name="mail" size={22} /></span>
                    <div>
                      <div className="c3-info__k">E-Mail</div>
                      <div className="c3-info__v"><a href={`mailto:${site.email}`}>{site.email}</a></div>
                    </div>
                  </div>
                  <div className="c3-info__row">
                    <span className="c3-info__ic"><Icon name="pin" size={22} /></span>
                    <div>
                      <div className="c3-info__k">Adresse</div>
                      <div className="c3-info__v">{site.street}, {site.zip} Berlin</div>
                    </div>
                  </div>
                  <div className="c3-info__row" style={{ display: "block" }}>
                    <div className="c3-info__k" style={{ marginBottom: 10 }}>Öffnungszeiten</div>
                    <div className="c3-hours">
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
      <footer className="c3-footer">
        <div className="c3-wrap">
          <div className="c3-footer__top">
            <div>
              <span className="c3-logo">
                <span className="c3-logo__badge">
                  <Image src="/logo.png" alt="Max Motors GmbH Logo" width={52} height={52} />
                </span>
              </span>
              <p className="c3-footer__claim">
                Wo Präzision auf Leidenschaft trifft. Eine Werkstatt, <em>dieselbe Sorgfalt</em>.
              </p>
            </div>
            <div className="c3-footer__cols">
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
          <div className="c3-footer__bottom">
            <span>© {site.name} GmbH, Berlin · Freie Kfz-Meisterwerkstatt</span>
            <span>Entwurf v3 · Konfigurator</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
