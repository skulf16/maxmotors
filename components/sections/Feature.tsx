import type { SpecItem } from "@/lib/content";
import Reveal from "../Reveal";

type Props = {
  id: string;
  index: string;
  kicker: string;
  headline: string;
  subhead: string;
  paragraphs: string[];
  items: SpecItem[];
  cta: { label: string; href: string };
  reversed?: boolean;
};

/** Wiederverwendbare „Deep-Dive"-Sektion: Text links, Datenblatt-Liste rechts. */
export default function Feature({
  id,
  index,
  kicker,
  headline,
  subhead,
  paragraphs,
  items,
  cta,
  reversed = false,
}: Props) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className={`feature ${reversed ? "feature--rev" : ""}`}>
          <Reveal className="feature__copy">
            <div className="sec-head__top" style={{ marginBottom: 18 }}>
              <span className="idx">{index}</span>
              <span className="kicker">{kicker}</span>
            </div>
            <h2 className="h-sec" style={{ marginBottom: 18 }}>
              {headline}
            </h2>
            <p className="lead" style={{ marginBottom: 24 }}>
              {subhead}
            </p>
            {paragraphs.map((p, i) => (
              <p key={i} style={{ color: "var(--muted)" }}>
                {p}
              </p>
            ))}
            <div className="feature__cta">
              <a className="btn" href={cta.href}>
                {cta.label}
                <span className="arr">→</span>
              </a>
            </div>
          </Reveal>

          <Reveal className="feature__specs">
            <div className="spec-list">
              {items.map((it, i) => (
                <div className="spec-list__row" key={it.title}>
                  <span className="spec-list__no">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{it.title}</h3>
                    <p>{it.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
