import { usp } from "@/lib/content";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";

export default function Usp() {
  return (
    <section className="section" id="usp">
      <div className="container">
        <SectionHead
          index={usp.index}
          kicker={usp.kicker}
          headline={usp.headline}
          subhead={usp.subhead}
        />

        <Reveal className="usp-grid">
          {usp.items.map((it, i) => (
            <div className="usp-cell" key={it.title}>
              <span className="usp-cell__no">{String(i + 1).padStart(2, "0")}</span>
              <div className="usp-cell__icon">
                <Icon name={it.icon} size={30} />
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <p className="usp-note">{usp.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
