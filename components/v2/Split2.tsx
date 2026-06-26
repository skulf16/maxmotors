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
};

export default function Split2({
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
}: Props) {
  return (
    <section className="c-section" id={id}>
      <div className="c-wrap">
        <div className={`c-split ${reversed ? "c-split--rev" : ""}`}>
          <Reveal className="c-split__media">
            <Image src={image} alt={alt} fill sizes="(max-width: 860px) 100vw, 55vw" quality={80} />
            {badge && (
              <span className="c-split__badge">
                <i />
                {badge}
              </span>
            )}
          </Reveal>

          <Reveal className="c-split__copy">
            <span className="c-eyebrow">
              {index} — {kicker}
            </span>
            <h2 className="c-h2">{headline}</h2>
            <p className="c-lead">{lead}</p>
            {paragraphs.map((p, i) => (
              <p className="c-body" key={i}>
                {p}
              </p>
            ))}

            <div className="c-spec">
              {items.map((it, i) => (
                <div className="c-spec__row" key={it.title}>
                  <span className="c-spec__no">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{it.title}</h4>
                    <p>{it.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="c-split__cta">
              <a className="c-btn" href={cta.href}>
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
