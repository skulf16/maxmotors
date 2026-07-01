"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Platzhalter-Bilder – werden später durch die finalen ersetzt
const imgs = [
  "/images/photo-07.jpg",
  "/images/photo-02.jpg",
  "/images/photo-10.jpg",
  "/images/photo-11.jpg",
];

export default function IntroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((p) => (p + 1) % imgs.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="v5-intro__photo">
      {imgs.map((src, j) => (
        <Image
          key={src}
          src={src}
          alt="Max Motors – Werkstatt in Berlin"
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
          quality={82}
          priority={j === 0}
          className={`v5-slide${j === i ? " is-active" : ""}`}
        />
      ))}
      <div className="v5-slider__dots">
        {imgs.map((_, j) => (
          <button
            key={j}
            type="button"
            className={`v5-slider__dot${j === i ? " is-active" : ""}`}
            aria-label={`Bild ${j + 1} anzeigen`}
            onClick={() => setI(j)}
          />
        ))}
      </div>
    </div>
  );
}
