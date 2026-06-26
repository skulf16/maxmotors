"use client";

import { useState } from "react";
import { kontakt } from "@/lib/content";
import Icon from "./Icon";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // Demo-Submit: ohne Backend. Vor Live-Gang an ein echtes Postfach /
  // Formular-Backend (z. B. E-Mail-API oder Formspree) anbinden.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form">
        <div className="form-success">
          <div className="ok">
            <Icon name="badge" size={26} />
          </div>
          <h3>Danke – angekommen.</h3>
          <p>
            Wir haben Ihre Anfrage erhalten und melden uns zeitnah mit einer
            ehrlichen Einschätzung und einem Terminvorschlag zurück.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <p className="form__note">{kontakt.formNote}</p>

      <div className="field-row">
        <div className="field">
          <label htmlFor="name">
            Name <span className="req">*</span>
          </label>
          <input id="name" name="name" type="text" required placeholder="Vor- und Nachname" />
        </div>
        <div className="field">
          <label htmlFor="phone">
            Telefon <span className="req">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required placeholder="Für den Rückruf" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">E-Mail</label>
          <input id="email" name="email" type="email" placeholder="name@beispiel.de" />
        </div>
        <div className="field">
          <label htmlFor="vehicle">Fahrzeug</label>
          <input id="vehicle" name="vehicle" type="text" placeholder="z. B. VW Golf, Bj. 2016" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="topic">Anliegen</label>
        <select id="topic" name="topic" defaultValue="">
          <option value="" disabled>
            Bitte wählen …
          </option>
          <option>Inspektion / Wartung</option>
          <option>HU / AU (TÜV)</option>
          <option>Reparatur / Diagnose</option>
          <option>Motorenbau / Motorschaden</option>
          <option>Performance / Tuning</option>
          <option>Lack / Karosserie / Unfall</option>
          <option>Sonstiges</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="msg">
          Nachricht <span className="req">*</span>
        </label>
        <textarea
          id="msg"
          name="msg"
          required
          placeholder="Schildern Sie uns kurz, was ansteht – je konkreter, desto schneller können wir einschätzen."
        />
      </div>

      <button className="btn" type="submit">
        Anfrage senden
        <span className="arr">→</span>
      </button>

      <p className="form__legal">
        Mit dem Absenden stimmen Sie zu, dass wir Ihre Angaben zur Bearbeitung
        der Anfrage verwenden. Details in unserer{" "}
        <a href="/datenschutz">Datenschutzerklärung</a>.
      </p>
    </form>
  );
}
