import { hero, site } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden />
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="kicker" data-anim="1">
            {hero.kicker}
          </span>

          <h1>
            <span data-anim="2">{hero.headlineTop}</span>
            <br />
            <span className="line2" data-anim="3">
              {hero.headlineBottom}
            </span>
          </h1>

          <p className="hero__sub" data-anim="3">
            {hero.subhead}
          </p>
          <p className="hero__p" data-anim="4">
            {hero.paragraph}
          </p>

          <div className="hero__cta" data-anim="5">
            <a className="btn" href={hero.ctaPrimary.href}>
              {hero.ctaPrimary.label}
              <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost" href={hero.ctaSecondary.href}>
              {hero.ctaSecondary.label}
            </a>
          </div>

          <p className="hero__note" data-anim="6">
            <b>{site.tagline}</b>
          </p>
        </div>

        {/* Prüfstands-Protokoll */}
        <div className="spec-card" data-anim="6">
          <div className="spec-card__cap">
            <span>{hero.spec.caption}</span>
            <span className="live">
              <i /> Max Motors
            </span>
          </div>

          {hero.spec.rows.map((r, i) => (
            <div className="spec-row" key={i}>
              <span className="lbl">{r.label}</span>
              <span className={`val ${i === 0 ? "is-key" : ""}`}>{r.value}</span>
            </div>
          ))}

          {/* dekorative Leistungskurve (Prüfstand) */}
          <svg
            className="dyno"
            viewBox="0 0 320 110"
            role="img"
            aria-label="Leistungskurve"
          >
            <defs>
              <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#e8521e" stopOpacity="0.28" />
                <stop offset="1" stopColor="#e8521e" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[22, 44, 66, 88].map((y) => (
              <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#2a2d30" strokeWidth="1" />
            ))}
            {[64, 128, 192, 256].map((x) => (
              <line key={x} x1={x} y1="0" x2={x} y2="110" stroke="#2a2d30" strokeWidth="1" />
            ))}
            <path
              d="M0 104 C 70 100, 120 70, 175 42 S 280 14, 320 8 L 320 110 L 0 110 Z"
              fill="url(#fill)"
            />
            <path
              d="M0 104 C 70 100, 120 70, 175 42 S 280 14, 320 8"
              fill="none"
              stroke="#e8521e"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Drehmomentkurve, kühl-metallisch */}
            <path
              d="M0 96 C 80 60, 130 48, 175 50 S 270 70, 320 86"
              fill="none"
              stroke="#c9cdd0"
              strokeWidth="1.4"
              strokeDasharray="3 4"
              opacity="0.7"
            />
          </svg>
          <div className="spec-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
            <span className="lbl mono" style={{ fontSize: "0.68rem", letterSpacing: "0.1em" }}>
              PS
            </span>
            <span className="lbl mono" style={{ fontSize: "0.68rem", letterSpacing: "0.1em" }}>
              Nm · Drehzahl →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
