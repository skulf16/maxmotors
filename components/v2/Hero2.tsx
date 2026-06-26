import Image from "next/image";
import { hero, site } from "@/lib/content";

export default function Hero2() {
  return (
    <section className="c-hero" id="top">
      <div className="c-hero__media">
        <Image
          src="/images/photo-11.jpg"
          alt="Die Werkstatthalle von Max Motors in Berlin mit mehreren Fahrzeugen auf Hebebühnen"
          fill
          priority
          sizes="100vw"
          quality={82}
        />
      </div>
      <div className="c-hero__scrim" aria-hidden />
      <div className="c-hero__grain" aria-hidden />

      <div className="c-hero__in">
        <span className="c-eyebrow c-hero__eyebrow">{hero.kicker}</span>
        <h1>
          <span>{hero.headlineTop}</span>
          <span>{hero.headlineBottom}</span>
        </h1>
        <p className="c-hero__sub">{hero.subhead}</p>

        <div className="c-hero__cta">
          <a className="c-btn" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
            <span className="arr">→</span>
          </a>
          <a className="c-btn c-btn--ghost" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </a>
        </div>

        <div className="c-hero__meta">
          <span><b>Berlin</b></span>
          <span><b>15</b>&nbsp;Hebebühnen</span>
          <span>Alle Marken</span>
          <span>Eigener Motorenbau&nbsp;·&nbsp;Lackierkabine</span>
        </div>
      </div>

      <div className="c-scrollcue" aria-hidden>
        Scrollen
        <i />
      </div>
    </section>
  );
}
