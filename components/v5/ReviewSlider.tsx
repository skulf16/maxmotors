"use client";

import { useEffect, useState } from "react";

// Platzhalter-Bewertungen – später durch echte Google-Rezensionen ersetzen
const reviews = [
  { text: "Ehrliche Beratung, faire Preise und top Arbeit am Motor. Endlich eine Werkstatt, der man wirklich vertrauen kann.", author: "Marko S." },
  { text: "Mein Lack sah danach aus wie neu – kein Übergang zu sehen. Absolute Empfehlung für Karosserie und Lack.", author: "Julia R." },
  { text: "Schneller Termin, alles transparent erklärt, Auto lief danach perfekt. Komme definitiv wieder.", author: "Daniel K." },
  { text: "Profis mit echter Motorsport-Erfahrung. Tuning sauber abgestimmt und eingetragen, kein Stress beim TÜV.", author: "Sven M." },
  { text: "Kompetent, freundlich und schnell. Preis-Leistung stimmt absolut – seltener Fall heutzutage.", author: "Aylin T." },
];

export default function ReviewSlider() {
  const [per, setPer] = useState(3);
  const [i, setI] = useState(0);

  // sichtbare Karten je nach Breite (3 / 2 / 1)
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPer(w >= 900 ? 3 : w >= 600 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(0, reviews.length - per);

  // Index einklammern, wenn sich die Anzahl sichtbarer Karten ändert
  useEffect(() => {
    setI((p) => Math.min(p, maxIndex));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((p) => (p >= maxIndex ? 0 : p + 1)), 5500);
    return () => clearInterval(id);
  }, [maxIndex]);

  const step = 100 / per;

  return (
    <div className="v5-reviews">
      <div className="v5-reviews__viewport">
        <div className="v5-reviews__track" style={{ transform: `translateX(-${i * step}%)` }}>
          {reviews.map((r, j) => (
            <figure className="v5-review" key={j} style={{ flex: `0 0 ${step}%` }}>
              <div className="v5-review__inner">
                <div className="v5-review__stars" aria-hidden>★★★★★</div>
                <blockquote className="v5-review__txt">{r.text}</blockquote>
                <figcaption className="v5-review__by">{r.author} · <span>Google</span></figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
      <div className="v5-reviews__dots">
        {Array.from({ length: maxIndex + 1 }).map((_, j) => (
          <button
            key={j}
            type="button"
            className={`v5-reviews__dot${j === i ? " is-active" : ""}`}
            aria-label={`Bewertungen ${j + 1}`}
            onClick={() => setI(j)}
          />
        ))}
      </div>
    </div>
  );
}
