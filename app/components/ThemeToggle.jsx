"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "a7md-mode-style-2";
const DEFAULT_MODE = "light";
const CHANGE_EVENT = "a7md-mode-change-2";

function subscribe(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  if (typeof document === "undefined") return DEFAULT_MODE;
  return document.documentElement.getAttribute("data-mode") || DEFAULT_MODE;
}

export default function ThemeToggle({ locale = "ar" }) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, () => DEFAULT_MODE);
  const isDark = mode === "dark";

  function toggleMode() {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-mode", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore restricted storage contexts.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  const label =
    locale === "ar"
      ? isDark
        ? "الوضع النهاري"
        : "الوضع الليلي"
      : isDark
        ? "Light mode"
        : "Dark mode";

  return (
    <button
      type="button"
      className="air-icon-btn"
      onClick={toggleMode}
      aria-label={label}
      title={label}
    >
      {isDark ? (
        <Sun aria-hidden="true" size={16} strokeWidth={1.8} />
      ) : (
        <Moon aria-hidden="true" size={16} strokeWidth={1.8} />
      )}
    </button>
  );
}
