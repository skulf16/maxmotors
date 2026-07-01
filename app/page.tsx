import { Saira_Condensed } from "next/font/google";
import "./v5.css";

import Header5 from "@/components/v5/Header5";
import Hero5 from "@/components/v5/Hero5";
import ServiceGrid from "@/components/v5/ServiceGrid";
import IntroSlider from "@/components/v5/IntroSlider";
import ReviewSlider from "@/components/v5/ReviewSlider";
import LottieIcon from "@/components/v5/LottieIcon";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import { hl } from "@/components/hl";
import type { IconName } from "@/lib/content";

import {
  faq,
  kontakt,
  leistungen,
  motorsport,
  positionierung,
  site,
  trustSignals,
  footer as footerData,
  nav,
} from "@/lib/content";

// Condensed Display-Schrift (Corporate)
const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-saira",
  display: "swap",
});

// Benefits-Spalten im Intro (wie in der Referenz unten)
const introBenefits: { icon: IconName; t: string; s: string }[] = [
  { icon: "clock", t: "Kurzfristige Termine", s: "Termine in Tagen, nicht Wochen." },
  { icon: "badge", t: "Gutachten & HU in House", s: "Prüfung und Gutachten unter einem Dach." },
  { icon: "tag", t: "Teileabnahme vor Ort", s: "Eintragung direkt bei uns." },
];

export default function Home() {
  return (
    <div className={`v5 ${saira.variable}`}>
      <Header5 />

      <main>
        <Hero5 />

        {/* ---- Trust-Laufband ---- */}
        <div className="v5-marquee" aria-hidden>
          <div className="v5-marquee__track">
            {[...trustSignals, ...trustSignals].map((t, i) => (
              <span className="v5-marquee__item" key={i}>{t}</span>
            ))}
          </div>
        </div>

        {/* ---- Intro / Unternehmen ---- */}
        <section className="v5-section" id="positionierung">
          <div className="v5-wrap">
            <div className="v5-intro">
              <Reveal className="v5-intro__media">
                <IntroSlider />
                <div className="v5-intro__badge">
                  <span className="v5-intro__badgeic" aria-hidden><Icon name="shield" size={22} /></span>
                  <div className="n">4</div>
                  <div className="lbl">Gewerke, ein Dach</div>
                  <div className="sub">Motor · Lack · Karosserie · Mechanik</div>
                </div>
              </Reveal>

              <Reveal className="v5-intro__copy">
                <span className="v5-kicker">{positionierung.kicker}</span>
                <h2 className="v5-h2">{hl("Zwei Welten, *eine Werkstatt*")}</h2>
                <p className="v5-lead">{positionierung.lead}</p>

                <div className="v5-intro__benefits">
                  {introBenefits.map((b) => (
                    <div className="v5-benefit" key={b.t}>
                      <span className="v5-benefit__ic"><Icon name={b.icon} size={20} /></span>
                      <h4 className="v5-benefit__t">{b.t}</h4>
                      <p className="v5-benefit__s">{b.s}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---- Service (2x2, klappt beim Hover auf) ---- */}
        <section className="v5-section v5-section--dark" id="service">
          <div className="v5-wrap">
            <Reveal className="v5-head">
              <span className="v5-kicker">Service</span>
              <h2 className="v5-h2">{hl("Vier Bereiche, *ein Dach*")}</h2>
              <p className="v5-lead">Motor, Lack, Leistung und die klassische Werkstatt – alles aus einer Hand.</p>
            </Reveal>
            <ServiceGrid />
          </div>
        </section>

        {/* ---- Überlappendes Termin-CTA (zwischen den Sektionen) ---- */}
        <div className="v5-overlap">
          <Reveal className="v5-overlap__card">
            <div className="v5-overlap__in">
              <h2>Ihr Auto braucht einen Termin?</h2>
              <a className="v5-btn" href="#kontakt">
                Termin vereinbaren
                <span className="arr">→</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* ---- Services ---- */}
        <section className="v5-section v5-section--grey" id="leistungen">
          <div className="v5-wrap">
            <Reveal className="v5-head">
              <span className="v5-kicker">{leistungen.kicker}</span>
              <h2 className="v5-h2">{hl(leistungen.headline)}</h2>
              <p className="v5-lead">{leistungen.subhead}</p>
            </Reveal>
            <div className="v5-tiles">
              {leistungen.items.map((it, i) => (
                <Reveal className="v5-tile" key={it.title} delay={(i % 3) * 70}>
                  <span className="v5-tile__ic">
                    {it.lottie ? <LottieIcon src={it.lottie} /> : it.icon && <Icon name={it.icon} size={24} />}
                  </span>
                  <h3 className="v5-h3">{it.title}</h3>
                  <p>{it.text}</p>
                </Reveal>
              ))}
              <Reveal className="v5-tile v5-tile--cta">
                <h3 className="v5-h3">Termin nötig?</h3>
                <p>Sagen Sie uns kurz, was ansteht – wir melden uns mit einem Vorschlag und einem Termin.</p>
                <a className="v5-btn" href="#kontakt">
                  Termin vereinbaren
                  <span className="arr">→</span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---- Motorsport (dunkel, Parallax-Hintergrund) ---- */}
        <section className="v5-section v5-section--dark v5-motorsport" id="motorsport">
          <div className="v5-wrap">
            <Reveal className="v5-head">
              <span className="v5-kicker">{motorsport.kicker}</span>
              <h2 className="v5-h2">{hl("Vom *Rennsport* geprägt – für die Straße gemacht.")}</h2>
              <p className="v5-lead">{motorsport.subhead}</p>
            </Reveal>
            <Reveal className="v5-motorsport__cta">
              <a className="v5-btn" href={motorsport.cta.href}>
                {motorsport.cta.label}
                <span className="arr">→</span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* ---- FAQ + Google-Bewertungen (dunkel, Verlauf + Racing-Stripes) ---- */}
        <section className="v5-section v5-section--dark v5-faq" id="faq">
          <div className="v5-wrap">
            <div className="v5-faqgrid">
              <Reveal className="v5-faqgrid__left">
                <div className="v5-gf">
                  <span className="v5-kicker">Philosophie</span>
                  <h2 className="v5-h2">{hl("Autos sind nicht unser Job – *sie sind unsere Leidenschaft*")}</h2>
                  <blockquote className="v5-gf__text">
                    <p>
                      Als ich Max Motors aufgebaut habe, hatte ich eine einfache Idee:
                      eine Werkstatt, in der man ehrlich sagt, was ansteht – und was nicht.
                      Kein Fachchinesisch, keine unnötigen Rechnungen.
                    </p>
                    <p>
                      Vom ersten Ölwechsel bis zum großen Motorprojekt behandeln wir jedes
                      Auto so, als wäre es unser eigenes. Kommen Sie vorbei – wir reden Klartext.
                    </p>
                  </blockquote>
                  <div className="v5-gf__author">
                    <img className="v5-gf__photo" src="/images/photo-08.jpg" alt="Max Mustermann, Geschäftsführer" width={60} height={60} />
                    <div className="v5-gf__meta">
                      <span className="v5-gf__sign">Max Mustermann</span>
                      <span className="v5-gf__role">Max Mustermann · Geschäftsführer</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal className="v5-faqgrid__right">
                <Faq items={faq.items} />
              </Reveal>
            </div>

            <Reveal className="v5-reviewsblock">
              <div className="v5-rating">
                <span className="v5-rating__score">4,9</span>
                <span>
                  <span className="v5-rating__stars" aria-hidden>★★★★★</span>
                  <span className="v5-rating__meta">auf Google · 120+ Bewertungen</span>
                </span>
              </div>
              <ReviewSlider />
            </Reveal>
          </div>
        </section>

        {/* ---- Kontakt ---- */}
        <section className="v5-section v5-section--dark" id="kontakt">
          <div className="v5-wrap">
            <Reveal className="v5-head">
              <span className="v5-kicker">{kontakt.kicker}</span>
              <h2 className="v5-h2">{hl(kontakt.headline)}</h2>
              <p className="v5-lead">{kontakt.subhead}</p>
            </Reveal>
            <div className="v5-contact">
              <Reveal>
                {kontakt.paragraphs.map((p, i) => (
                  <p className="v5-body" key={i}>{p}</p>
                ))}
                <div className="v5-info">
                  <div className="v5-info__row">
                    <span className="v5-info__ic"><Icon name="phone" size={20} /></span>
                    <div>
                      <div className="v5-info__k">Telefon</div>
                      <div className="v5-info__v"><a href={site.phoneHref}>{site.phoneLabel}</a></div>
                    </div>
                  </div>
                  <div className="v5-info__row">
                    <span className="v5-info__ic"><Icon name="mail" size={20} /></span>
                    <div>
                      <div className="v5-info__k">E-Mail</div>
                      <div className="v5-info__v"><a href={`mailto:${site.email}`}>{site.email}</a></div>
                    </div>
                  </div>
                  <div className="v5-info__row">
                    <span className="v5-info__ic"><Icon name="pin" size={20} /></span>
                    <div>
                      <div className="v5-info__k">Adresse</div>
                      <div className="v5-info__v">{site.street}, {site.zip} Berlin</div>
                    </div>
                  </div>
                  <div className="v5-info__row" style={{ display: "block" }}>
                    <div className="v5-info__k" style={{ marginBottom: 10 }}>Öffnungszeiten</div>
                    <div className="v5-hours">
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
      <footer className="v5-footer">
        <div className="v5-wrap">
          <div className="v5-footer__top">
            <div>
              <span className="v5-logo">
                <span className="v5-logo__txt">Max Motors</span>
              </span>
              <p className="v5-footer__claim">{footerData.claim}</p>
            </div>
            <div className="v5-footer__cols">
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
          <div className="v5-footer__bottom">
            <span>© {site.name} GmbH, Berlin · Freie Kfz-Meisterwerkstatt</span>
            <span>Service · Reparatur · Lack & Karosserie · Motoren-Instandsetzung</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
