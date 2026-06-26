"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  frac: number;
  label: string;
  duration?: number;
};

// 270°-Tacho mit roter Redline-Zone, NOS-blauer Zeiger-Bogen, Orbitron-Zahl.
export default function RedlineGauge({ value, suffix = "", frac, label, duration = 1600 }: Props) {
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

  const path = "M24.64 95.36 A 50 50 0 1 1 95.36 95.36";
  const dashOffset = on ? 100 - frac * 100 : 100;

  return (
    <div className="v4-gauge">
      <svg className="v4-gauge__svg" viewBox="0 0 120 120" ref={ref} aria-hidden>
        {/* Track */}
        <path d={path} fill="none" stroke="rgba(120,165,255,0.16)" strokeWidth="7" strokeLinecap="round" />
        {/* Redline-Zone (letzte ~16%) */}
        <path
          d={path}
          fill="none"
          stroke="#ff2a2a"
          strokeWidth="7"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray="16 100"
          strokeDashoffset={-84}
          style={{ filter: "drop-shadow(0 0 5px rgba(255,42,42,0.7))" }}
        />
        {/* Zeiger-Bogen */}
        <path
          d={path}
          fill="none"
          stroke="#1fe6ff"
          strokeWidth="7"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={100}
          strokeDashoffset={dashOffset}
          style={{
            filter: "drop-shadow(0 0 6px rgba(31,230,255,0.9))",
            transition: `stroke-dashoffset ${duration}ms cubic-bezier(0.22,1,0.36,1)`,
          }}
        />
        <text x="60" y="64" textAnchor="middle" dominantBaseline="middle" className="v4-gauge__val">
          {num}
          {suffix && <tspan className="v4-gauge__sfx">{suffix}</tspan>}
        </text>
      </svg>
      <div className="v4-gauge__lbl">{label}</div>
    </div>
  );
}
