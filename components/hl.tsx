import React from "react";

/**
 * Zweifarbige Headlines: Text in `*Sternchen*` wird im Lime-Akzent gerendert.
 * Beispiel: hl("Sculpted by air. *Crafted* to inspire.")
 */
export function hl(text: string) {
  return text.split("*").map((part, i) =>
    i % 2 === 1 ? (
      <span className="v5-hl" key={i}>{part}</span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}
