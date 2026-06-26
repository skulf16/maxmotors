import { Archivo } from "next/font/google";
import Image from "next/image";
import "./v5.css";

import Header5 from "@/components/v5/Header5";
import Hero5 from "@/components/v5/Hero5";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";

import {
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

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export default function Home() {
  return (
    <div className={`v5 ${archivo.variable}`}>
      <Header5 />

      <main>
        <Hero5 />

        {/* ---- Mission + Value Cards ---- */}
        <section className="v5-section" id="positionierung">
          <div className="v5-wrap">
            <Reveal className="v5-mission">
              <div>
                <span className="v5-kicker" style={{ marginBottom: 18, display: "inline-block" }}>
                  {positionierung.kicker}
                </span>
                <h2 className="v5-h2">
                  Eine ehrliche Werkstatt, die alles im eigenen Haus macht.
                </h2>
              </div>
              <div className="v5-mission__right">
                <p className="v5-lead">{positionierung.subhead}</p>
              </div>
            </Reveal>

            <div className="v5-cards">
              {usp.items.map((it, i) => (
                <Reveal className="v5-card" key={it.title} delay={i * 70}>
                  <span className="v5-card__ic">
                    <Icon name={it.icon} size={24} />
                  </span>
                  <h3 className="v5-h3">{it.title}</h3>
                  <p>{it.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Services ---- */}
        <section className="v5-section v5-section--grey" id="leistungen">
          <div className="v5-wrap">
            <Reveal className="v5-head">
              <span className="v5-kicker">{leistungen.kicker}</span>
              <h2 className="v5-h2">{leistungen.headline}</h2>
              <p className="v5-lead">{leistungen.subhead}</p>
            </Reveal>
            <Reveal className="v5-svc">
              {leistungen.items.map((it) => (
                <div className="v5-svc__cell" key={it.title}>
                  <span className="v5-svc__ic">{it.icon && <Icon name={it.icon} size={22} />}</span>
                  <div>
                    <h3 className="v5-h3">{it.title}</h3>
                    <p>{it.text}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ---- Feature: Motoren-Instandsetzung ---- */}
        <section className="v5-section" id="motorenbau">
          <div className="v5-wrap">
            <div className="v5-feature">
              <Reveal className="v5-feature__media">
                <span className="v5-feature__tag">Eigener Motorenbau</span>
                <Image
                  src="/images/photo-09.jpg"
                  alt="Eigene Motoren-Bearbeitungsmaschine bei Max Motors"
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                  quality={80}
                />
              </Reveal>
              <Reveal className="v5-feature__copy">
                <span className="v5-kicker">{motorenbau.kicker}</span>
                <h2 className="v5-h2">{motorenbau.headline}</h2>
                <p className="v5-lead">{motorenbau.subhead}</p>
                <div className="v5-feature__list">
                  {motorenbau.items.map((it, i) => (
                    <div className="v5-feature__row" key={it.title}>
                      <span className="n">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h4>{it.title}</h4>
                        <p>{it.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="v5-feature__cta">
                  <a className="v5-btn v5-btn--dark" href={motorenbau.cta.href}>
                    {motorenbau.cta.label}
                    <span className="arr">→</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---- Feature: Lackiererei ---- */}
        <section className="v5-section v5-section--grey" id="lackiererei">
          <div className="v5-wrap">
            <div className="v5-feature v5-feature--rev">
              <Reveal className="v5-feature__media">
                <span className="v5-feature__tag">Eigene Lackierkabine</span>
                <Image
                  src="/images/photo-01.jpg"
                  alt="Abgeklebtes Fahrzeug in der Lackierkabine"
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                  quality={80}
                />
              </Reveal>
              <Reveal className="v5-feature__copy">
                <span className="v5-kicker">{lackiererei.kicker}</span>
                <h2 className="v5-h2">{lackiererei.headline}</h2>
                <p className="v5-lead">{lackiererei.subhead}</p>
                <div className="v5-feature__list">
                  {lackiererei.items.map((it, i) => (
                    <div className="v5-feature__row" key={it.title}>
                      <span className="n">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h4>{it.title}</h4>
                        <p>{it.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="v5-feature__cta">
                  <a className="v5-btn v5-btn--dark" href={lackiererei.cta.href}>
                    {lackiererei.cta.label}
                    <span className="arr">→</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---- Big dark stats band ---- */}
        <section className="v5-section v5-section--dark" id="kapazitaet">
          <div className="v5-wrap">
            <Reveal className="v5-head">
              <span className="v5-kicker">{kapazitaet.kicker}</span>
              <h2 className="v5-h2">{kapazitaet.headline}</h2>
              <p className="v5-lead">{kapazitaet.subhead}</p>
            </Reveal>
            <div className="v5-bigstats">
              <Reveal className="v5-bigstat">
                <div className="v5-bigstat__n">15</div>
                <div className="v5-bigstat__k">Hebebühnen</div>
                <p className="v5-bigstat__p">Hohe Kapazität, kurze Wartezeiten – Termine in Tagen, nicht Wochen.</p>
              </Reveal>
              <Reveal className="v5-bigstat" delay={80}>
                <div className="v5-bigstat__n">100<span className="sfx">%</span></div>
                <div className="v5-bigstat__k">Eigenleistung</div>
                <p className="v5-bigstat__p">Motor, Lack, Karosserie und Mechanik – alles im eigenen Haus, nichts ausgelagert.</p>
              </Reveal>
              <Reveal className="v5-bigstat" delay={160}>
                <div className="v5-bigstat__n">4</div>
                <div className="v5-bigstat__k">Gewerke, ein Dach</div>
                <p className="v5-bigstat__p">Motor, Lack, Karosserie, Mechanik – ein Ansprechpartner, ein Qualitätsanspruch.</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---- FAQ ---- */}
        <section className="v5-section v5-faq" id="faq">
          <div className="v5-wrap">
            <Reveal className="v5-head">
              <span className="v5-kicker">{faq.kicker}</span>
              <h2 className="v5-h2">{faq.headline}</h2>
              <p className="v5-lead">{faq.subhead}</p>
            </Reveal>
            <Reveal>
              <Faq items={faq.items} />
            </Reveal>
          </div>
        </section>

        {/* ---- CTA band ---- */}
        <section className="v5-section" style={{ paddingBlock: "0 clamp(70px,9vw,140px)" }}>
          <div className="v5-wrap">
            <Reveal className="v5-cta">
              <div>
                <h2>Bringen Sie Ihr Auto in gute Hände.</h2>
                <p>
                  Service, Reparatur oder ein größeres Anliegen? Schildern Sie uns kurz, was ansteht –
                  wir melden uns zeitnah mit einer ehrlichen Einschätzung und einem Termin.
                </p>
              </div>
              <div className="v5-cta__actions">
                <a className="v5-btn" href="#kontakt">
                  Termin anfragen
                  <span className="arr">→</span>
                </a>
                <a className="v5-cta__phone" href={site.phoneHref}>
                  {site.phoneLabel}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---- Kontakt ---- */}
        <section className="v5-section v5-section--dark" id="kontakt">
          <div className="v5-wrap">
            <Reveal className="v5-head">
              <span className="v5-kicker">{kontakt.kicker}</span>
              <h2 className="v5-h2">{kontakt.headline}</h2>
              <p className="v5-lead">{kontakt.subhead}</p>
            </Reveal>
            <div className="v5-contact">
              <Reveal>
                {kontakt.paragraphs.map((p, i) => (
                  <p className="v5-body" key={i}>{p}</p>
                ))}
                <div className="v5-info" style={{ marginTop: 24 }}>
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
                <span className="v5-logo__badge">
                  <Image src="/logo.png" alt="Max Motors GmbH Logo" width={46} height={46} />
                </span>
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
