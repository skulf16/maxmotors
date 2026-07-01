"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

/** Lädt eine Lottie-JSON (aus /public) und spielt sie als animiertes Icon. */
export default function LottieIcon({ src }: { src: string }) {
  const [data, setData] = useState<unknown>(null);

  useEffect(() => {
    let alive = true;
    fetch(src)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (alive) setData(d);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [src]);

  if (!data) return null;
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Lottie animationData={data as any} loop autoplay style={{ width: "100%", height: "100%" }} />
  );
}
