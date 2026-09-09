"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Palette, Check, ChevronDown, ChevronUp } from "lucide-react";

export const STYLES = [
  {
    id: "style-1",
    num: "1",
    nameAr: "الذهب المعتق",
    nameEn: "Obsidian Gold",
    color: "#d4af37",
    desc: "Quiet Luxury Atelier"
  },
  {
    id: "style-2",
    num: "2",
    nameAr: "النيلي السينمائي",
    nameEn: "Nocturne Indigo",
    color: "#38bdf8",
    desc: "Cinematic Modernist"
  },
  {
    id: "style-3",
    num: "3",
    nameAr: "العنبر الدافئ",
    nameEn: "Volcanic Amber",
    color: "#f59e0b",
    desc: "Analog Boutique Studio"
  },
  {
    id: "style-4",
    num: "4",
    nameAr: "المريمية والغموض",
    nameEn: "Forest Sage",
    color: "#52b788",
    desc: "Organic Earth Depth"
  },
  {
    id: "style-5",
    num: "5",
    nameAr: "المونوكروم البسيط",
    nameEn: "Monochrome Gallery",
    color: "#ffffff",
    desc: "Swiss High-Fashion Minimal"
  }
];

const emptySubscribe = () => () => {};

export default function StyleSwitcher({ defaultStyle = "style-1", locale = "ar" }) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [currentStyle, setCurrentStyle] = useState(() => {
    if (typeof window === "undefined") return defaultStyle;
    try {
      const params = new URLSearchParams(window.location.search);
      const styleParam = params.get("style");
      if (styleParam) {
        const matched = STYLES.find(
          (s) => s.id === styleParam || s.num === styleParam || s.id === `style-${styleParam}`
        );
        if (matched) return matched.id;
      }
      const saved = localStorage.getItem("a7md_style");
      if (saved && STYLES.some((s) => s.id === saved)) {
        return saved;
      }
    } catch {
      // ignore
    }
    return defaultStyle;
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", currentStyle);
    }
  }, [currentStyle]);

  const handleSelectStyle = (styleId) => {
    setCurrentStyle(styleId);
    setIsOpen(false);
    try {
      localStorage.setItem("a7md_style", styleId);
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        url.searchParams.set("style", styleId.replace("style-", ""));
        window.history.replaceState({}, "", url.toString());
      }
    } catch {
      // ignore
    }
  };

  if (!isClient) return null;

  const isAr = locale === "ar";
  const activeObj = STYLES.find((s) => s.id === currentStyle) || STYLES[0];

  return (
    <aside
      className="style-dock"
      aria-label={isAr ? "مبدل تصاميم العميل" : "Design Variations Switcher"}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="style-dock__container">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="style-dock__toggle"
          title={isAr ? "تبديل التصاميم المقترحة" : "Switch design variations"}
          aria-expanded={isOpen}
        >
          <span className="style-dock__dot" style={{ backgroundColor: activeObj.color }} />
          <Palette size={15} aria-hidden="true" />
          <span className="style-dock__label">
            {isAr ? `التصميم ${activeObj.num}: ${activeObj.nameAr}` : `Style ${activeObj.num}: ${activeObj.nameEn}`}
          </span>
          {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </button>

        {isOpen && (
          <div className="style-dock__menu" role="menu">
            <div className="style-dock__menu-header">
              <span>{isAr ? "اختر أحد التصاميم الـ 5 المقترحة:" : "Select one of 5 design proposals:"}</span>
            </div>
            <div className="style-dock__options">
              {STYLES.map((style) => {
                const isActive = currentStyle === style.id;
                return (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => handleSelectStyle(style.id)}
                    className={`style-dock__option ${isActive ? "is-active" : ""}`}
                    role="menuitem"
                  >
                    <span className="style-dock__color-swatch" style={{ backgroundColor: style.color }} />
                    <div className="style-dock__option-text">
                      <strong>{isAr ? `${style.num}. ${style.nameAr}` : `${style.num}. ${style.nameEn}`}</strong>
                      <small>{style.desc}</small>
                    </div>
                    {isActive && <Check size={14} className="style-dock__check" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
