"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "a7md-mode-style-7";
const DEFAULT_MODE = "light";
const CHANGE_EVENT = "a7md-mode-change-7";

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
  const isDark = mode === "dark";

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
        ? "طبعة النهار"
        : "طبعة المساء"
      : isDark
        ? "Day edition"
        : "Evening edition";

  return (
    <button
      type="button"
      className="ed-util-btn"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun size={14} aria-hidden="true" /> : <Moon size={14} aria-hidden="true" />}
      <span>{label}</span>
    </button>
  );
}
