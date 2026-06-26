import Image from "next/image";
import type { SpecItem } from "@/lib/content";
import Reveal from "../Reveal";

type Props = {
  id: string;
  index: string;
  kicker: string;
  headline: string;
  lead: string;
  paragraphs: string[];
  items: SpecItem[];
  cta: { label: string; href: string };
  image: string;
  alt: string;
  badge?: string;
  reversed?: boolean;
  light?: boolean;
};

export default function Split3({
  id,
  index,
  kicker,
  headline,
  lead,
  paragraphs,
  items,
  cta,
  image,
  alt,
  badge,
  reversed = false,
  light = false,
}: Props) {
  return (
    <section className={`c3-section ${light ? "c3-light" : ""}`} id={id}>
      <div className="c3-wrap">
        <div className={`c3-split ${reversed ? "c3-split--rev" : ""}`}>
          <Reveal className="c3-split__media">
            <Image src={image} alt={alt} fill sizes="(max-width: 860px) 100vw, 55vw" quality={80} />
            {badge && (
              <span className="c3-split__badge">
                <i />
                {badge}
              </span>
            )}
          </Reveal>

          <Reveal className="c3-split__copy">
            <span className="c3-eyebrow">
              {index} — {kicker}
            </span>
            <h2 className="c3-h2">{headline}</h2>
            <p className="c3-lead">{lead}</p>
            {paragraphs.map((p, i) => (
              <p className="c3-body" key={i}>
                {p}
              </p>
            ))}

            <div className="c3-spec">
              {items.map((it, i) => (
                <div className="c3-spec__row" key={it.title}>
                  <span className="c3-spec__no">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{it.title}</h4>
                    <p>{it.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="c3-split__cta">
              <a className={`c3-btn ${light ? "c3-btn--dark" : ""}`} href={cta.href}>
                {cta.label}
                <span className="arr">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
