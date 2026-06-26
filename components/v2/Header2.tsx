"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import Icon from "../Icon";

export default function Header2() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="c-header" data-solid={solid}>
      <div className="c-header__in">
        <a href="#top" className="c-logo" aria-label="Max Motors – Startseite">
          <span className="c-logo__badge">
            <Image src="/logo.png" alt="Max Motors GmbH Logo" width={46} height={46} priority />
          </span>
          <span className="c-logo__txt">
            <b>MAX MOTORS</b>
            Werkstatt · Berlin
          </span>
        </a>

        <nav className="c-nav" aria-label="Hauptnavigation">
          {nav.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="c-header__cta">
          <a className="c-phone" href={site.phoneHref}>
            <Icon name="phone" size={16} />
            {site.phoneLabel}
          </a>
          <a className="c-btn" href="#kontakt">
            Termin anfragen
          </a>
          <button
            className="c-burger"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="c-drawer" data-open={open}>
        {nav.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {l.label}
          </a>
        ))}
        <a className="c-btn" href="#kontakt" onClick={() => setOpen(false)}>
          Termin anfragen
        </a>
      </div>
    </header>
  );
}
