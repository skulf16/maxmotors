"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export default function Faq({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className="faq-item" data-open={isOpen} key={i}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="faq-q__no">{String(i + 1).padStart(2, "0")}</span>
              <span className="faq-q__txt">{it.q}</span>
              <span className="faq-q__ic" aria-hidden />
            </button>
            <div className="faq-a">
              <div className="faq-a__inner">
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
