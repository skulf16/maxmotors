import { kontakt as k, site } from "@/lib/content";
import ContactForm from "../ContactForm";
import Icon from "../Icon";
import Reveal from "../Reveal";

export default function Kontakt() {
  return (
    <section className="section contact" id="kontakt">
      <div className="container">
        <Reveal className="sec-head">
          <div className="sec-head__top">
            <span className="idx">{k.index}</span>
            <span className="kicker">{k.kicker}</span>
          </div>
          <h2 className="h-sec">{k.headline}</h2>
          <p className="lead">{k.subhead}</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            {k.paragraphs.map((p, i) => (
              <p key={i} style={{ color: "var(--muted)", marginBottom: 16 }}>
                {p}
              </p>
            ))}

            <div className="contact-info" style={{ marginTop: 26 }}>
              <div className="info-row">
                <span className="info-row__ic">
                  <Icon name="phone" size={22} />
                </span>
                <div>
                  <div className="info-row__k">Telefon</div>
                  <div className="info-row__v">
                    <a href={site.phoneHref}>{site.phoneLabel}</a>
                  </div>
                </div>
              </div>

              <div className="info-row">
                <span className="info-row__ic">
                  <Icon name="mail" size={22} />
                </span>
                <div>
                  <div className="info-row__k">E-Mail</div>
                  <div className="info-row__v">
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </div>
              </div>

              <div className="info-row">
                <span className="info-row__ic">
                  <Icon name="pin" size={22} />
                </span>
                <div>
                  <div className="info-row__k">Adresse</div>
                  <div className="info-row__v">
                    {site.street}, {site.zip} Berlin
                  </div>
                </div>
              </div>

              <div className="info-row" style={{ display: "block" }}>
                <div className="info-row__k" style={{ marginBottom: 10 }}>
                  Öffnungszeiten
                </div>
                <div className="hours">
                  {site.hours.map((h) => (
                    <div className="hrow" key={h.day}>
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
  );
}
