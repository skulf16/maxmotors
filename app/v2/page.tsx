import type { Metadata } from "next";
import Image from "next/image";
import "./v2.css";

import Header2 from "@/components/v2/Header2";
import Hero2 from "@/components/v2/Hero2";
import Split2 from "@/components/v2/Split2";
import Band2 from "@/components/v2/Band2";
import CapStats2 from "@/components/v2/CapStats2";
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
  warum,
  footer as footerData,
  nav,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Max Motors Berlin — Entwurf v2 (Cinematic)",
};

const uspImages = [
  "/images/photo-08.jpg",
  "/images/photo-02.jpg",
  "/images/photo-07.jpg",
  "/images/photo-10.jpg",
];

export default function V2() {
  return (
    <div className="c">
      <Header2 />

      <main>
        <Hero2 />

        {/* ---- Zwei Welten ---- */}
        <section className="c-section" id="positionierung">
          <div className="c-wrap">
            <Reveal className="c-head c-head--center">
              <span className="c-eyebrow c-eyebrow--center">
                {positionierung.index} — {positionierung.kicker}
              </span>
              <h2 className="c-h2">{positionierung.headline}</h2>
              <p className="c-lead">{positionierung.subhead}</p>
            </Reveal>

            <div className="c-twocols">
              {[
                { col: positionierung.columns[0], img: "/images/photo-06.jpg", alt: "Alltagsfahrzeug auf der Hebebühne bei Max Motors" },
                { col: positionierung.columns[1], img: "/images/photo-03.jpg", alt: "Performance-Motorraum mit Sport-Ansaugung" },
              ].map(({ col, img, alt }) => (
                <Reveal as="article" className="c-worldcard" key={col.tag}>
                  <div className="c-worldcard__media">
                    <Image src={img} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" quality={80} />
                  </div>
                  <span className="c-worldcard__tag">{col.tag}</span>
                  <h3>{col.title}</h3>
                  <ul>
                    {col.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="c-closer">{positionierung.closer}</p>
            </Reveal>
          </div>
        </section>

        {/* ---- Vier Säulen (Bildkarten) ---- */}
        <section className="c-section" id="usp">
          <div className="c-wrap">
            <Reveal className="c-head">
              <span className="c-eyebrow">
                {usp.index} — {usp.kicker}
              </span>
              <h2 className="c-h2">{usp.headline}</h2>
              <p className="c-lead">{usp.subhead}</p>
            </Reveal>

            <div className="c-cards">
              {usp.items.map((it, i) => (
                <Reveal as="article" className="c-card" key={it.title} delay={i * 70}>
                  <div className="c-card__media">
                    <Image src={uspImages[i]} alt={it.title} fill sizes="(max-width: 1040px) 50vw, 25vw" quality={78} />
                  </div>
                  <span className="c-card__no">{String(i + 1).padStart(2, "0")}</span>
                  <span className="c-card__ic">
                    <Icon name={it.icon} size={30} />
                  </span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Alltags-Leistungen ---- */}
        <section className="c-section" id="leistungen">
          <div className="c-wrap">
            <Reveal className="c-head">
              <span className="c-eyebrow">
                {leistungen.index} — {leistungen.kicker}
              </span>
              <h2 className="c-h2">{leistungen.headline}</h2>
              <p className="c-lead">{leistungen.subhead}</p>
            </Reveal>

            <Reveal className="c-svc">
              {leistungen.items.map((it) => (
                <div className="c-svc__cell" key={it.title}>
                  <span className="ic">{it.icon && <Icon name={it.icon} size={26} />}</span>
                  <h4>{it.title}</h4>
                  <p>{it.text}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ---- Deep-Dives ---- */}
        <Split2
          id="motorenbau"
          index={motorenbau.index}
          kicker={motorenbau.kicker}
          headline={motorenbau.headline}
          lead={motorenbau.subhead}
          paragraphs={motorenbau.paragraphs}
          items={motorenbau.items}
          cta={motorenbau.cta}
          image="/images/photo-09.jpg"
          alt="Eigene Motoren-Bearbeitungsmaschine in der Werkstatt von Max Motors"
          badge="Eigener Motorenbau"
        />

        <Split2
          id="performance"
          index={performance.index}
          kicker={performance.kicker}
          headline={performance.headline}
          lead={performance.subhead}
          paragraphs={performance.paragraphs}
          items={performance.items}
          cta={performance.cta}
          image="/images/photo-03.jpg"
          alt="Performance-Motorraum mit Sport-Ansaugung und Ladeluft-Verrohrung"
          badge="Performance & Abstimmung"
          reversed
        />

        <Split2
          id="lackiererei"
          index={lackiererei.index}
          kicker={lackiererei.kicker}
          headline={lackiererei.headline}
          lead={lackiererei.subhead}
          paragraphs={lackiererei.paragraphs}
          items={lackiererei.items}
          cta={lackiererei.cta}
          image="/images/photo-01.jpg"
          alt="Für die Lackierung vorbereitetes, abgeklebtes Fahrzeug in der Lackierkabine"
          badge="Eigene Lackierkabine"
        />

        {/* ---- Motorsport (cinematic) ---- */}
        <Band2
          id="motorsport"
          image="/images/photo-10.jpg"
          alt="Fahrzeuge auf Hebebühnen in der Werkstatthalle von Max Motors"
        >
          <span className="c-eyebrow">
            {motorsport.index} — {motorsport.kicker}
          </span>
          <h2 className="c-pull">
            <span className="bar" aria-hidden />
            {motorsport.headline}
          </h2>
          <p className="c-lead" style={{ marginTop: 24, color: "var(--text)" }}>
            {motorsport.subhead}
          </p>
          {motorsport.paragraphs.slice(0, 2).map((p, i) => (
            <p className="c-body" key={i}>
              {p}
            </p>
          ))}
          <p
            style={{
              fontFamily: "var(--font-display)",
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "1.2rem",
              lineHeight: 1.2,
              color: "var(--accent-2)",
              borderLeft: "3px solid var(--accent)",
              paddingLeft: 18,
              margin: "26px 0 30px",
              maxWidth: "40ch",
            }}
          >
            {motorsport.pullquote}
          </p>
          <a className="c-btn c-btn--ghost" href={motorsport.cta.href}>
            {motorsport.cta.label}
            <span className="arr">→</span>
          </a>
        </Band2>

        {/* ---- Kapazität (cinematic + stats) ---- */}
        <Band2
          id="kapazitaet"
          image="/images/photo-07.jpg"
          alt="Werkstatthalle mit mehreren Fahrzeugen auf LONGUS-Hebebühnen"
          center
        >
          <span className="c-eyebrow c-eyebrow--center">
            {kapazitaet.index} — {kapazitaet.kicker}
          </span>
          <h2 className="c-h2">{kapazitaet.headline}</h2>
          <p className="c-lead" style={{ marginInline: "auto", marginTop: 18 }}>
            {kapazitaet.subhead}
          </p>
          <CapStats2 />
        </Band2>

        {/* ---- Ablauf ---- */}
        <section className="c-section" id="ablauf">
          <div className="c-wrap">
            <Reveal className="c-head">
              <span className="c-eyebrow">
                {ablauf.index} — {ablauf.kicker}
              </span>
              <h2 className="c-h2">{ablauf.headline}</h2>
              <p className="c-lead">{ablauf.subhead}</p>
            </Reveal>

            <div className="c-steps">
              {ablauf.steps.map((s, i) => (
                <Reveal className="c-step" key={s.no} delay={i * 80}>
                  <div className="c-step__no">{s.no}</div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Warum wir ---- */}
        <section className="c-section" id="warum">
          <div className="c-wrap">
            <Reveal className="c-head">
              <span className="c-eyebrow">
                {warum.index} — {warum.kicker}
              </span>
              <h2 className="c-h2">{warum.headline}</h2>
              <p className="c-lead">{warum.subhead}</p>
            </Reveal>

            <div className="c-why">
              {warum.items.map((it, i) => (
                <Reveal className="c-why__card" key={it.title} delay={(i % 3) * 70}>
                  <span className="ic">{it.icon && <Icon name={it.icon} size={28} />}</span>
                  <h4>{it.title}</h4>
                  <p>{it.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---- FAQ ---- */}
        <section className="c-section" id="faq">
          <div className="c-wrap">
            <Reveal className="c-head c-head--center">
              <span className="c-eyebrow c-eyebrow--center">
                {faq.index} — {faq.kicker}
              </span>
              <h2 className="c-h2">{faq.headline}</h2>
              <p className="c-lead">{faq.subhead}</p>
            </Reveal>
            <Reveal>
              <Faq items={faq.items} />
            </Reveal>
          </div>
        </section>

        {/* ---- Kontakt ---- */}
        <section className="c-section" id="kontakt">
          <div className="c-wrap">
            <Reveal className="c-head">
              <span className="c-eyebrow">
                {kontakt.index} — {kontakt.kicker}
              </span>
              <h2 className="c-h2">{kontakt.headline}</h2>
              <p className="c-lead">{kontakt.subhead}</p>
            </Reveal>

            <div className="c-contact">
              <Reveal>
                {kontakt.paragraphs.map((p, i) => (
                  <p className="c-body" key={i}>
                    {p}
                  </p>
                ))}
                <div className="c-info" style={{ marginTop: 26 }}>
                  <div className="c-info__row">
                    <span className="c-info__ic"><Icon name="phone" size={22} /></span>
                    <div>
                      <div className="c-info__k">Telefon</div>
                      <div className="c-info__v"><a href={site.phoneHref}>{site.phoneLabel}</a></div>
                    </div>
                  </div>
                  <div className="c-info__row">
                    <span className="c-info__ic"><Icon name="mail" size={22} /></span>
                    <div>
                      <div className="c-info__k">E-Mail</div>
                      <div className="c-info__v"><a href={`mailto:${site.email}`}>{site.email}</a></div>
                    </div>
                  </div>
                  <div className="c-info__row">
                    <span className="c-info__ic"><Icon name="pin" size={22} /></span>
                    <div>
                      <div className="c-info__k">Adresse</div>
                      <div className="c-info__v">{site.street}, {site.zip} Berlin</div>
                    </div>
                  </div>
                  <div className="c-info__row" style={{ display: "block" }}>
                    <div className="c-info__k" style={{ marginBottom: 10 }}>Öffnungszeiten</div>
                    <div className="c-hours">
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
      <footer className="c-footer">
        <div className="c-wrap">
          <div className="c-footer__top">
            <div>
              <span className="c-logo">
                <span className="c-logo__badge">
                  <Image src="/logo.png" alt="Max Motors GmbH Logo" width={52} height={52} />
                </span>
              </span>
              <p className="c-footer__claim">{footerData.claim}</p>
            </div>
            <div className="c-footer__cols">
              <div>
                <h5>Werkstatt</h5>
                {nav.map((l) => (
                  <a key={l.href} href={l.href}>{l.label}</a>
                ))}
              </div>
              <div>
                <h5>Kontakt</h5>
                <a href={site.phoneHref}>{site.phoneLabel}</a>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <p>{site.street}<br />{site.zip} Berlin</p>
              </div>
              <div>
                <h5>Rechtliches</h5>
                {footerData.legal.map((l) => (
                  <a key={l.href} href={l.href}>{l.label}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="c-footer__bottom">
            <span>© {site.name} GmbH, Berlin · Freie Kfz-Meisterwerkstatt</span>
            <span>Entwurf v2 · Cinematic</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
