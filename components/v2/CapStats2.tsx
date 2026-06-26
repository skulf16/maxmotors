"use client";

import { kapazitaet as k } from "@/lib/content";
import CountUp from "../CountUp";

export default function CapStats2() {
  return (
    <div className="c-stats">
      {k.stats.map((s, i) => (
        <div className="c-stat" key={i}>
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
  );
}
