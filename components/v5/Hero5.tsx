import { hero } from "@/lib/content";

const stats = [
  {
    big: "15",
    k: "Hebebühnen",
    p: "Hohe Kapazität, kurze Wartezeiten – Termine in Tagen, nicht Wochen.",
  },
  {
    big: "100%",
    k: "Eigenleistung",
    p: "Motor, Lack, Karosserie und Mechanik – alles im eigenen Haus, nichts ausgelagert.",
  },
  {
    big: "alle",
    k: "Marken & Klassen",
    p: "Vom Alltagswagen bis zum hochwertigen Fahrzeug – jedes Auto ist willkommen.",
  },
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

      <div className="v5-hero__in">
        <span className="v5-kicker">Max Motors GmbH</span>
        <h1 className="v5-h1">{hero.headlineMain}</h1>
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

      <div className="v5-herostats">
        {stats.map((s) => (
          <div className="v5-stat" key={s.k}>
            <span className="v5-stat__big" aria-hidden>
              {s.big}
            </span>
            <div className="v5-stat__k">{s.k}</div>
            <p className="v5-stat__p">{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
