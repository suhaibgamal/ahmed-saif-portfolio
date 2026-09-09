"use client";

import { useSyncExternalStore } from "react";
import { STYLES } from "./StyleSwitcher";

function subscribe(callback) {
  if (typeof window === "undefined") return () => {};
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.attributeName === "data-theme" || m.attributeName === "data-archetype") {
        callback();
      }
    }
  });
  observer.observe(document.documentElement, { attributes: true });
  window.addEventListener("storage", callback);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") return "style-1";
  return document.documentElement.getAttribute("data-theme") || "style-1";
}

function getServerSnapshot() {
  return "style-1";
}

export function useActiveTheme() {
  const themeId = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const style = STYLES.find((s) => s.id === themeId) || STYLES[0];
  return {
    themeId,
    archetype: style.archetype,
    style
  };
}
