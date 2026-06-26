import Image from "next/image";
import { hero } from "@/lib/content";

const dash = [
  { k: "Service", v: "alle Marken", em: true },
  { k: "Hebebühnen", v: "15", em: true },
  { k: "Motor", v: "im Haus" },
  { k: "Standort", v: "Berlin" },
];

export default function Hero4() {
  return (
    <section className="v4-hero" id="top">
      <div className="v4-hero__media">
        <Image
          src="/images/photo-10.jpg"
          alt="Fahrzeug in der Werkstatt von Max Motors"
          fill
          priority
          sizes="100vw"
          quality={84}
        />
      </div>
      <div className="v4-hero__grade" aria-hidden />
      <div className="v4-hero__scrim" aria-hidden />
      <div className="v4-streaks" aria-hidden>
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="v4-scrollcue" aria-hidden>
        Mehr
        <i />
      </div>

      <div className="v4-hero__in">
        <span className="v4-eyebrow v4-hero__eyebrow">Freie Kfz-Meisterwerkstatt — Berlin</span>
        <h1>
          <span className="l1">{hero.headlineTop}</span>
          <span className="l2">{hero.headlineBottom}</span>
        </h1>
        <p className="v4-hero__sub">{hero.subhead}</p>
        <div className="v4-hero__cta">
          <a className="v4-btn" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
            <span className="arr">→</span>
          </a>
          <a className="v4-btn v4-btn--ghost" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>

      <div className="v4-dash">
        <div className="v4-dash__in">
          {dash.map((d) => (
            <div className="v4-dash__col" key={d.k}>
              <div className="v4-dash__k">{d.k}</div>
              <div className="v4-dash__v">{d.em ? <em>{d.v}</em> : d.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
