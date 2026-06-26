"use client";

import { useEffect, useRef, useState } from "react";
import { kapazitaet as k } from "@/lib/content";
import CountUp from "../CountUp";
import Reveal from "../Reveal";

export default function Kapazitaet() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section cap" id="kapazitaet">
      <div className="container">
        <div className="feature" style={{ alignItems: "center", marginBottom: 48 }}>
          <Reveal className="feature__copy">
            <div className="sec-head__top" style={{ marginBottom: 18 }}>
              <span className="idx">{k.index}</span>
              <span className="kicker">{k.kicker}</span>
            </div>
            <h2 className="h-sec">{k.headline}</h2>
          </Reveal>
          <Reveal className="feature__copy">
            <p className="lead" style={{ marginBottom: 18 }}>
              {k.subhead}
            </p>
            {k.paragraphs.map((p, i) => (
              <p key={i} style={{ color: "var(--muted)", marginBottom: 14 }}>
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <div className="stat-grid" ref={gridRef}>
          {k.stats.map((s, i) => (
            <div className={`stat-cell ${inView ? "is-in" : ""}`} key={i}>
              <div className="num">
                {typeof s.value === "number" ? (
                  <CountUp to={s.value} suffix={s.suffix} />
                ) : (
                  s.display
                )}
              </div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
