"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import Icon from "../Icon";

export default function Header4() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.55);
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
    <header className="v4-header" data-solid={solid}>
      <div className="v4-header__in">
        <a href="#top" className="v4-logo" aria-label="Max Motors – Startseite">
          <span className="v4-logo__badge">
            <Image src="/logo.png" alt="Max Motors GmbH Logo" width={44} height={44} priority />
          </span>
          <span className="v4-logo__txt">
            <b>MAX MOTORS</b>
            Kfz-Meisterwerkstatt · Berlin
          </span>
        </a>

        <nav className="v4-nav" aria-label="Hauptnavigation">
          {nav.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="v4-header__cta">
          <a className="v4-phone" href={site.phoneHref}>
            <Icon name="phone" size={16} />
            {site.phoneLabel}
          </a>
          <a className="v4-btn" href="#kontakt">
            Termin
          </a>
          <button
            className="v4-burger"
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

      <div className="v4-drawer" data-open={open}>
        {nav.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {l.label}
          </a>
        ))}
        <a className="v4-btn" href="#kontakt" onClick={() => setOpen(false)}>
          Termin anfragen
        </a>
      </div>
    </header>
  );
}
