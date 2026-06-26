"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  frac: number; // 0..1 Füllgrad des Bogens
  label: string;
  duration?: number;
};

// 270°-Tachobogen (Lücke unten), Bogen + Zahl animieren beim Sichtbarwerden.
export default function Gauge({ value, suffix = "", frac, label, duration = 1500 }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [num, setNum] = useState(0);
  const [on, setOn] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            setOn(true);
            if (reduce) {
              setNum(value);
              return;
            }
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setNum(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  // 270°-Bogen: Start 135°, Sweep im Uhrzeigersinn 270° bis 45°
  const path = "M24.64 95.36 A 50 50 0 1 1 95.36 95.36";
  const dashOffset = on ? 100 - frac * 100 : 100;

  return (
    <div className="c3-gauge">
      <svg className="c3-gauge__svg" viewBox="0 0 120 120" ref={ref} aria-hidden>
        <path d={path} fill="none" stroke="rgba(243,239,231,0.12)" strokeWidth="7" strokeLinecap="round" />
        <path
          d={path}
          fill="none"
          stroke="var(--red)"
          strokeWidth="7"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={100}
          strokeDashoffset={dashOffset}
          style={{ transition: `stroke-dashoffset ${duration}ms cubic-bezier(0.22,1,0.36,1)` }}
        />
        <text x="60" y="64" textAnchor="middle" dominantBaseline="middle" className="c3-gauge__val">
          {num}
          {suffix && <tspan className="c3-gauge__sfx">{suffix}</tspan>}
        </text>
      </svg>
      <div className="c3-gauge__lbl">{label}</div>
    </div>
  );
}
