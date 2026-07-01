import { hero } from "@/lib/content";
import { hl } from "@/components/hl";

const facts = [
  { big: "15", k: "Hebebühnen", p: "Modern, hohe Kapazität, kurze Wartezeiten." },
  { big: "100%", k: "Eigenleistung", p: "Alles im eigenen Haus, nichts ausgelagert." },
  { big: "alle", k: "Marken & Klassen", p: "Vom Alltagswagen bis zum Sportwagen." },
];

export default function Hero5() {
  return (
    <section className="v5-hero" id="top">
      <video
        className="v5-hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/photo-11.jpg"
        aria-hidden
      >
        <source src="/max-motors-header.mp4" type="video/mp4" />
      </video>
      <div className="v5-hero__scrim" aria-hidden />
      <div className="v5-hero__deco" aria-hidden />

      <div className="v5-hero__in">
        <h1 className="v5-h1">{hl(hero.headlineMain)}</h1>
        <p className="v5-hero__claim">{hero.headlineBottom}</p>

        <div className="v5-hero__cta">
          <a className="v5-btn" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
            <span className="arr">→</span>
          </a>
          <a className="v5-btn v5-btn--outline" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>

      <div className="v5-herofacts">
        <div className="v5-herofacts__in">
          {facts.map((f) => (
            <div className="v5-fact" key={f.k}>
              <span className="v5-fact__big" aria-hidden>{f.big}</span>
              <div className="v5-fact__k">{f.k}</div>
              <p className="v5-fact__p">{f.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
