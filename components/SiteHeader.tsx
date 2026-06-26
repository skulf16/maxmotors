"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import Icon from "./Icon";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    <header className="site-header" data-scrolled={scrolled}>
      <div className="container site-header__inner">
        <a href="#top" className="brand" aria-label="Max Motors – Startseite">
          MAX MOTORS<span className="dot">.</span>
          <small>Berlin</small>
        </a>

        <nav className="nav" aria-label="Hauptnavigation">
          {nav.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <a className="header-phone" href={site.phoneHref}>
            <Icon name="phone" size={16} />
            {site.phoneLabel}
          </a>
          <a className="btn" href="#kontakt">
            Termin anfragen
          </a>
          <button
            className="burger"
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

      <div className="mobile-nav" data-open={open}>
        {nav.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {l.label}
          </a>
        ))}
        <a className="btn" href="#kontakt" onClick={() => setOpen(false)}>
          Termin anfragen
        </a>
      </div>
    </header>
  );
}
