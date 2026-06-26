"use client";

import { useEffect, useRef, useState } from "react";
import { ablauf as a } from "@/lib/content";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";

export default function Ablauf() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="ablauf">
      <div className="container">
        <SectionHead
          index={a.index}
          kicker={a.kicker}
          headline={a.headline}
          subhead={a.subhead}
        />

        <div className="steps" ref={ref}>
          {a.steps.map((s) => (
            <div className={`step ${inView ? "is-in" : ""}`} key={s.no}>
              <div className="step__no">{s.no}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <Reveal style={{ marginTop: 32 }}>
          <a className="btn" href={a.cta.href}>
            {a.cta.label}
            <span className="arr">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
