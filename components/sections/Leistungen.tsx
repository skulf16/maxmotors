import { leistungen as l } from "@/lib/content";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";

export default function Leistungen() {
  return (
    <section className="section" id="leistungen">
      <div className="container">
        <SectionHead
          index={l.index}
          kicker={l.kicker}
          headline={l.headline}
          subhead={l.subhead}
        />

        <Reveal className="svc-grid">
          {l.items.map((it) => (
            <div className="svc-cell" key={it.title}>
              <div className="svc-cell__icon">
                {it.icon && <Icon name={it.icon} size={26} />}
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </Reveal>

        <Reveal
          style={
            {
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "30px",
            } as React.CSSProperties
          }
        >
          <p className="usp-note" style={{ marginTop: 0, maxWidth: "52ch" }}>
            {l.note}
          </p>
          <a className="btn" href={l.cta.href}>
            {l.cta.label}
            <span className="arr">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
