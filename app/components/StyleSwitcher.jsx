"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Palette, Check, ChevronDown, ChevronUp, Layers } from "lucide-react";

export const STYLES = [
  {
    id: "style-1",
    num: "1",
    nameAr: "الذهب المعتق",
    nameEn: "Obsidian Gold",
    archetype: "classic",
    color: "#d4af37",
    desc: "Quiet Luxury Atelier"
  },
  {
    id: "style-2",
    num: "2",
    nameAr: "النيلي السينمائي",
    nameEn: "Nocturne Indigo",
    archetype: "classic",
    color: "#38bdf8",
    desc: "Cinematic Modernist"
  },
  {
    id: "style-3",
    num: "3",
    nameAr: "العنبر الدافئ",
    nameEn: "Volcanic Amber",
    archetype: "classic",
    color: "#f59e0b",
    desc: "Analog Boutique Studio"
  },
  {
    id: "style-4",
    num: "4",
    nameAr: "المريمية والغموض",
    nameEn: "Forest Sage",
    archetype: "classic",
    color: "#52b788",
    desc: "Organic Earth Depth"
  },
  {
    id: "style-5",
    num: "5",
    nameAr: "المونوكروم البسيط",
    nameEn: "Monochrome Gallery",
    archetype: "classic",
    color: "#ffffff",
    desc: "Swiss High-Fashion Minimal"
  },
  {
    id: "style-6",
    num: "6",
    nameAr: "بنتو غريد التفاعلي",
    nameEn: "Interactive Bento Grid",
    archetype: "bento",
    color: "#3b82f6",
    desc: "Modern Modular Dashboard"
  },
  {
    id: "style-7",
    num: "7",
    nameAr: "اللوكبـوك التحريري",
    nameEn: "Editorial Lookbook",
    archetype: "editorial",
    color: "#c26d53",
    desc: "High-Fashion Magazine Spread"
  },
  {
    id: "style-8",
    num: "8",
    nameAr: "استوديو الكونسول التناظري",
    nameEn: "Analog Studio Console",
    archetype: "studio",
    color: "#ea580c",
    desc: "Hardware Mixing Board & DAW"
  },
  {
    id: "style-9",
    num: "9",
    nameAr: "المسرح المباشر",
    nameEn: "Live Stage Headliner",
    archetype: "stage",
    color: "#a855f7",
    desc: "Stadium Concert & Tour Aura"
  },
  {
    id: "style-10",
    num: "10",
    nameAr: "كانفاس الصوت والطباعة",
    nameEn: "Minimal Audio Canvas",
    archetype: "canvas",
    color: "#10b981",
    desc: "Pure Typography & Audio Waves"
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
      const activeObj = STYLES.find((s) => s.id === currentStyle);
      if (activeObj) {
        document.documentElement.setAttribute("data-archetype", activeObj.archetype);
      }
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
      aria-label={isAr ? "مبدل تصاميم العميل الـ 10" : "10 Design Variations Switcher"}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="style-dock__container">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="style-dock__toggle"
          title={isAr ? "تبديل بين التصاميم الـ 10 المقترحة" : "Switch between 10 design proposals"}
          aria-expanded={isOpen}
        >
          <span className="style-dock__dot" style={{ backgroundColor: activeObj.color }} />
          <Palette size={15} aria-hidden="true" />
          <span className="style-dock__label">
            {isAr ? `تصميم ${activeObj.num}: ${activeObj.nameAr}` : `Design ${activeObj.num}: ${activeObj.nameEn}`}
          </span>
          <span className="style-dock__badge">
            {activeObj.archetype}
          </span>
          {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </button>

        {isOpen && (
          <div className="style-dock__menu" role="menu">
            <div className="style-dock__menu-header">
              <span>{isAr ? "اختر أحد التصاميم الـ 10 المختلفة كلياً:" : "Choose from 10 distinct design worlds:"}</span>
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
                      <div className="style-dock__option-row">
                        <strong>{isAr ? `${style.num}. ${style.nameAr}` : `${style.num}. ${style.nameEn}`}</strong>
                        <span className="style-dock__tag">{style.archetype}</span>
                      </div>
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
