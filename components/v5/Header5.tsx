"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import Icon from "../Icon";

export default function Header5() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
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
    <header className="v5-header" data-solid={solid}>
      <div className="v5-header__bar">
        <a href="#top" className="v5-logo" aria-label="Max Motors – Startseite">
          <span className="v5-logo__badge">
            <Image src="/logo.png" alt="Max Motors GmbH Logo" width={38} height={38} priority />
          </span>
          <span className="v5-logo__txt">Max Motors</span>
        </a>

        <nav className="v5-nav" aria-label="Hauptnavigation">
          {nav.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="v5-header__cta">
          <a className="v5-phone" href={site.phoneHref}>
            <Icon name="phone" size={15} />
            {site.phoneLabel}
          </a>
          <a className="v5-btn" href="#kontakt">
            Termin anfragen
          </a>
          <button
            className="v5-burger"
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

      <div className="v5-drawer" data-open={open}>
        {nav.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="v5-btn" href="#kontakt" onClick={() => setOpen(false)}>
          Termin anfragen
        </a>
      </div>
    </header>
  );
}
