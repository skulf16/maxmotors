import { warum as w } from "@/lib/content";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";

export default function Warum() {
  return (
    <section className="section" id="warum">
      <div className="container">
        <SectionHead
          index={w.index}
          kicker={w.kicker}
          headline={w.headline}
          subhead={w.subhead}
        />

        <div className="why-grid">
          {w.items.map((it, i) => (
            <Reveal className="why-card" key={it.title} delay={(i % 3) * 70}>
              <div className="why-card__icon">
                {it.icon && <Icon name={it.icon} size={28} />}
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
