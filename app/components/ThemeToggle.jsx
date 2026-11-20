"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "a7md-mode-style-1";
const DEFAULT_MODE = "dark";
const CHANGE_EVENT = "a7md-mode-change";

function subscribe(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  if (typeof document === "undefined") {
    return DEFAULT_MODE;
  }

  return document.documentElement.getAttribute("data-mode") || DEFAULT_MODE;
}

export default function ThemeToggle({ locale = "ar", className = "" }) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, () => DEFAULT_MODE);
  const isDark = mode !== "light";

  function toggleMode() {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-mode", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors in restricted browsing contexts.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  const label =
    locale === "ar"
      ? isDark
        ? "التبديل إلى الوضع النهاري"
        : "التبديل إلى الوضع الليلي"
      : isDark
        ? "Switch to light mode"
        : "Switch to dark mode";

  return (
    <button
      type="button"
      className={`mode-toggle ${className}`.trim()}
      onClick={toggleMode}
      aria-label={label}
      title={label}
    >
      {isDark ? (
        <Sun aria-hidden="true" size={16} strokeWidth={1.75} />
      ) : (
        <Moon aria-hidden="true" size={16} strokeWidth={1.75} />
      )}
    </button>
  );
}
