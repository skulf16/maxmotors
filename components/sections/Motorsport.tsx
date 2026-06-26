import { motorsport as m } from "@/lib/content";
import Reveal from "../Reveal";

export default function Motorsport() {
  return (
    <section className="section" id="motorsport" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div className="feature">
          <Reveal className="feature__copy">
            <div className="sec-head__top" style={{ marginBottom: 22 }}>
              <span className="idx">{m.index}</span>
              <span className="kicker">{m.kicker}</span>
            </div>
            <h2 className="quote">
              <span className="bar" aria-hidden />
              {m.headline}
            </h2>
            <div className="ms-stats">
              {m.stats.map((s) => (
                <div className="ms-stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="feature__copy">
            <p className="lead" style={{ marginBottom: 22 }}>
              {m.subhead}
            </p>
            {m.paragraphs.map((p, i) => (
              <p key={i} style={{ color: "var(--muted)", marginBottom: 16 }}>
                {p}
              </p>
            ))}
            <p
              style={{
                fontFamily: "var(--font-display)",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: "1.25rem",
                lineHeight: 1.15,
                color: "var(--accent-2)",
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "18px",
                margin: "26px 0 30px",
              }}
            >
              {m.pullquote}
            </p>
            <a className="btn btn--ghost" href={m.cta.href}>
              {m.cta.label}
              <span className="arr">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
