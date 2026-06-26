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

export default function Split4({
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
    <section className="v4-section" id={id}>
      <div className="v4-wrap">
        <div className={`v4-split ${reversed ? "v4-split--rev" : ""}`}>
          <Reveal className="v4-split__media">
            <Image src={image} alt={alt} fill sizes="(max-width: 860px) 100vw, 55vw" quality={80} />
            {badge && (
              <span className="v4-split__badge">
                <i />
                {badge}
              </span>
            )}
          </Reveal>

          <Reveal className="v4-split__copy">
            <span className="v4-eyebrow">
              {index} {kicker}
            </span>
            <h2 className="v4-h2">{headline}</h2>
            <p className="v4-lead">{lead}</p>
            {paragraphs.map((p, i) => (
              <p className="v4-body" key={i}>
                {p}
              </p>
            ))}

            <div className="v4-spec">
              {items.map((it, i) => (
                <div className="v4-spec__row" key={it.title}>
                  <span className="v4-spec__no">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{it.title}</h4>
                    <p>{it.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="v4-split__cta">
              <a className="v4-btn" href={cta.href}>
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
