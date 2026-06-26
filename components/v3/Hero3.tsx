import Image from "next/image";
import { hero } from "@/lib/content";

const specs = [
  { k: "Standort", v: "Berlin" },
  { k: "Hebebühnen", v: "15", em: true },
  { k: "Marken", v: "alle" },
  { k: "Leistung", v: "bis 600+ PS", em: true },
];

export default function Hero3() {
  return (
    <section className="c3-hero" id="top">
      <div className="c3-hero__media">
        <Image
          src="/images/photo-10.jpg"
          alt="Fahrzeug auf der Hebebühne in der Werkstatt von Max Motors"
          fill
          priority
          sizes="100vw"
          quality={84}
        />
      </div>
      <div className="c3-hero__scrim" aria-hidden />
      <div className="c3-hero__grain" aria-hidden />

      <div className="c3-scrollcue" aria-hidden>
        Scrollen
        <i />
      </div>

      <div className="c3-hero__in">
        <span className="c3-eyebrow c3-hero__eyebrow">{hero.kicker}</span>
        <h1>
          <span>{hero.headlineTop}</span>
          <span>{hero.headlineBottom}</span>
        </h1>
        <p className="c3-hero__sub">{hero.subhead}</p>
        <div className="c3-hero__cta">
          <a className="c3-btn" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
            <span className="arr">→</span>
          </a>
          <a className="c3-btn c3-btn--ghost" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>

      <div className="c3-specbar">
        <div className="c3-specbar__in">
          {specs.map((s) => (
            <div className="c3-specbar__col" key={s.k}>
              <div className="c3-specbar__k">{s.k}</div>
              <div className="c3-specbar__v">{s.em ? <em>{s.v}</em> : s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
