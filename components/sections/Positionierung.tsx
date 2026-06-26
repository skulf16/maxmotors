import { positionierung as p } from "@/lib/content";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";

export default function Positionierung() {
  return (
    <section className="section" id="positionierung">
      <div className="container">
        <SectionHead
          index={p.index}
          kicker={p.kicker}
          headline={p.headline}
          subhead={p.subhead}
        />

        <Reveal>
          <p className="pos-lead">{p.lead}</p>
        </Reveal>

        <Reveal className="pos-cols">
          {p.columns.map((col) => (
            <div className="pos-col" key={col.tag}>
              <span className="pos-col__tag">{col.tag}</span>
              <h3>{col.title}</h3>
              <ul>
                {col.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal className="pos-closer">
          <span className="bar" aria-hidden />
          <span>{p.closer}</span>
        </Reveal>
      </div>
    </section>
  );
}
