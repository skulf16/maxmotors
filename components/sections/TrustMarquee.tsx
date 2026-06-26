import { trustSignals } from "@/lib/content";

export default function TrustMarquee() {
  // doppelt gerendert für nahtloses Endlos-Laufband
  const items = [...trustSignals, ...trustSignals];
  return (
    <div className="marquee" aria-label="Leistungen und Vorteile auf einen Blick">
      <div className="marquee__track">
        {items.map((t, i) => (
          <span className="marquee__item" key={i} aria-hidden={i >= trustSignals.length}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
