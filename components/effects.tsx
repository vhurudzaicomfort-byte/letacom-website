"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Adds `is-visible` to [data-reveal] elements as they enter the viewport. Content stays visible without JS. */
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    const observe = () => document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}

/** Background video that only loads on capable connections and screens; falls back to the poster image. */
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const ok =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      window.matchMedia("(min-width: 768px)").matches &&
      !conn?.saveData &&
      !["slow-2g", "2g", "3g"].includes(conn?.effectiveType ?? "");
    // Deferred so the poster paints first.
    const t = window.setTimeout(() => setPlay(ok), 0);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <>
      <Image src={poster} alt="" fill priority sizes="100vw" className="object-cover" />
      {play && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          tabIndex={-1}
        />
      )}
    </>
  );
}
