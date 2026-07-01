"use client";

import { useState } from "react";
import Image from "next/image";
import { motorenbau, lackiererei, performance, leistungen } from "@/lib/content";

type Svc = {
  no: string;
  t: string;
  img: string;
  intro: string;
  detailed: boolean; // mit Beschreibungen (true) oder nur Namen (false)
  items: { title: string; text: string }[];
};

// Spezialgebiete + klassische Werkstatt – Detailinhalt klappt beim Klick auf
const services: Svc[] = [
  { no: "01", t: "Motorenbau & Instandsetzung", img: "/images/motorenbau.jpg", intro: motorenbau.subhead, detailed: true, items: motorenbau.items },
  { no: "02", t: "Lackiererei & Karosserie", img: "/images/lackiererei.jpg", intro: lackiererei.subhead, detailed: true, items: lackiererei.items },
  { no: "03", t: "Tuning & Performance", img: "/images/motorsport.jpg", intro: performance.subhead, detailed: true, items: performance.items.slice(0, 4) },
  { no: "04", t: "Freie Markenwerkstatt", img: "/images/werkstatt.jpg", intro: leistungen.subhead, detailed: false, items: leistungen.items },
];

export default function ServiceGrid() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="v5-svcgrid" data-open={open ?? undefined}>
      {services.map((s, i) => {
        const isOpen = open === i;
        return (
          <article
            key={s.no}
            className={`v5-svcbox${isOpen ? " is-open" : ""}`}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onClick={() => setOpen(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(i);
              } else if (e.key === "Escape") {
                setOpen(null);
              }
            }}
          >
            <Image src={s.img} alt={s.t} fill sizes="(max-width: 700px) 100vw, 50vw" quality={78} />
            <span className="v5-svcbox__veil" aria-hidden />
            <span className="v5-svcbox__no" aria-hidden>{s.no}</span>

            <div className="v5-svcbox__body">
              <span className="v5-svcbox__more" aria-hidden>Mehr erfahren +</span>
              <h3 className="v5-svcbox__t">{s.t}</h3>
            </div>

            <div className="v5-svcbox__detail">
              <button
                type="button"
                className="v5-svcbox__close"
                aria-label="Schließen"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(null);
                }}
              >
                ×
              </button>
              <div className="v5-svcbox__detailscroll">
                <h3 className="v5-svcbox__t">{s.t}</h3>
                {s.detailed && <p className="v5-svcbox__intro">{s.intro}</p>}
                <div className={`v5-svcbox__items${s.detailed ? " is-detailed" : ""}`}>
                  {s.items.map((it, j) => (
                    <div className="v5-svcitem" key={it.title}>
                      <span className="n">{String(j + 1).padStart(2, "0")}</span>
                      <div className="v5-svcitem__main">
                        <span className="v5-svcitem__t">{it.title}</span>
                        {s.detailed && <p className="v5-svcitem__p">{it.text}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="v5-svcbox__foot">
                <a className="v5-btn" href="#kontakt" onClick={(e) => e.stopPropagation()}>
                  Termin vereinbaren
                  <span className="arr">→</span>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
