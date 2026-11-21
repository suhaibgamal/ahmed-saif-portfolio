"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "a7md-mode-style-10";
const DEFAULT_MODE = "dark";
const CHANGE_EVENT = "a7md-mode-change-10";

function subscribe(cb) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CHANGE_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CHANGE_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

function getSnapshot() {
  if (typeof document === "undefined") return DEFAULT_MODE;
  return document.documentElement.getAttribute("data-mode") || DEFAULT_MODE;
}

export default function ThemeToggle({ locale = "ar" }) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, () => DEFAULT_MODE);
  const isDark = mode !== "light";

  function toggle() {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-mode", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  const label =
    locale === "ar"
      ? isDark
        ? "ورق النهار"
        : "سكون الليل"
      : isDark
        ? "Washi paper mode"
        : "Inkstone dark mode";

  return (
    <button
      type="button"
      className="zn-quiet-btn"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}
    </button>
  );
}
