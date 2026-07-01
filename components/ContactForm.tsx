"use client";

import { useState } from "react";
import Icon from "./Icon";

const leistungen = [
  "Reparatur & Service",
  "HU",
  "Motor",
  "Performance & Tuning",
];

const marken = [
  "Audi", "BMW", "Citroën", "Cupra", "Dacia", "Fiat", "Ford", "Honda", "Hyundai", "Kia",
  "Mazda", "Mercedes-Benz", "Mini", "Nissan", "Opel", "Peugeot", "Porsche", "Renault",
  "Seat", "Škoda", "Smart", "Tesla", "Toyota", "Volkswagen", "Volvo", "Andere",
];

const stepNames = ["Leistung", "Fahrzeug", "Kontakt", "Nachricht"];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [d, setD] = useState({
    leistung: "", marke: "", modell: "", vorname: "", name: "", telefon: "", email: "", nachricht: "",
  });
  const set = (k: string, v: string) => setD((p) => ({ ...p, [k]: v }));

  const canNext =
    (step === 0 && !!d.leistung) ||
    (step === 1 && !!d.marke) ||
    (step === 2 && !!d.vorname && !!d.name && !!d.telefon) ||
    step === 3;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form">
        <div className="form-success">
          <div className="ok"><Icon name="badge" size={26} /></div>
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
    <form className="form v5-funnel" onSubmit={onSubmit} noValidate>
      <div className="v5-funnel__bar" aria-hidden>
        {stepNames.map((s, i) => (
          <span key={s} className={`v5-funnel__seg${i === step ? " is-active" : ""}${i < step ? " is-done" : ""}`} />
        ))}
      </div>
      <div className="v5-funnel__meta">Schritt {step + 1} von {stepNames.length} · {stepNames[step]}</div>

      {step === 0 && (
        <div className="v5-funnel__panel">
          <h3 className="v5-funnel__q">Worum geht es?</h3>
          <div className="v5-funnel__opts">
            {leistungen.map((l) => (
              <button
                type="button"
                key={l}
                className={`v5-funnel__opt${d.leistung === l ? " is-sel" : ""}`}
                onClick={() => { set("leistung", l); setStep(1); }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="v5-funnel__panel">
          <h3 className="v5-funnel__q">Welches Fahrzeug?</h3>
          <div className="field-row">
            <div className="field">
              <select aria-label="Marke" value={d.marke} onChange={(e) => set("marke", e.target.value)}>
                <option value="" disabled>Marke wählen …</option>
                {marken.map((m) => <option key={m}>{m}</option>)}
              </select>
            </div>
            <div className="field">
              <input type="text" placeholder="Modell (z. B. Golf VII)" aria-label="Modell" value={d.modell} onChange={(e) => set("modell", e.target.value)} />
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="v5-funnel__panel">
          <h3 className="v5-funnel__q">Wie erreichen wir Sie?</h3>
          <div className="field-row">
            <div className="field"><input placeholder="Vorname *" aria-label="Vorname" value={d.vorname} onChange={(e) => set("vorname", e.target.value)} /></div>
            <div className="field"><input placeholder="Name *" aria-label="Name" value={d.name} onChange={(e) => set("name", e.target.value)} /></div>
          </div>
          <div className="field-row">
            <div className="field"><input type="tel" placeholder="Telefon *" aria-label="Telefon" value={d.telefon} onChange={(e) => set("telefon", e.target.value)} /></div>
            <div className="field"><input type="email" placeholder="E-Mail" aria-label="E-Mail" value={d.email} onChange={(e) => set("email", e.target.value)} /></div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="v5-funnel__panel">
          <h3 className="v5-funnel__q">Ihre Nachricht</h3>
          <div className="field">
            <textarea
              placeholder="Schildern Sie uns kurz, was ansteht – je konkreter, desto schneller können wir einschätzen."
              aria-label="Nachricht"
              value={d.nachricht}
              onChange={(e) => set("nachricht", e.target.value)}
            />
          </div>
          <p className="form__legal">
            Mit dem Absenden stimmen Sie zu, dass wir Ihre Angaben zur Bearbeitung
            der Anfrage verwenden. Details in unserer{" "}
            <a href="/datenschutz">Datenschutzerklärung</a>.
          </p>
        </div>
      )}

      <div className="v5-funnel__nav">
        {step > 0 && (
          <button type="button" className="v5-btn v5-btn--outline" onClick={() => setStep(step - 1)}>
            Zurück
          </button>
        )}
        {step < 3 && (
          <button type="button" className="v5-btn" disabled={!canNext} onClick={() => canNext && setStep(step + 1)}>
            Weiter <span className="arr">→</span>
          </button>
        )}
        {step === 3 && (
          <button type="submit" className="v5-btn">
            Anfrage senden <span className="arr">→</span>
          </button>
        )}
      </div>
    </form>
  );
}
