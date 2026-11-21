"use client";

import { useEffect, useState } from "react";

export default function StageHeader({ overlay = false, label, children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 36);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cls = [
    "sym-header",
    overlay ? "sym-header--overlay" : "sym-header--solid",
    scrolled ? "is-scrolled" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={cls} aria-label={label}>
      {children}
    </header>
  );
}
