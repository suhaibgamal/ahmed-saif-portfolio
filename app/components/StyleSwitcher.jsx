"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Palette, Check, ChevronDown, ChevronUp, Layers } from "lucide-react";

export const STYLES = [
  {
    id: "style-1",
    num: "1",
    nameAr: "الذهب المعتق",
    nameEn: "Aureate Lyricist",
    archetype: "aureate",
    color: "#d4af37",
    desc: "Royal Yemeni Maestro & Classical Gold"
  },
  {
    id: "style-2",
    num: "2",
    nameAr: "النيلي السينمائي",
    nameEn: "Nocturnal Resonance",
    archetype: "nocturne",
    color: "#38bdf8",
    desc: "Cyber Indigo & Glassmorphic Soundwave"
  },
  {
    id: "style-3",
    num: "3",
    nameAr: "العنبر الدافئ",
    nameEn: "Analog Tape Lounge",
    archetype: "tape",
    color: "#f59e0b",
    desc: "70s Raw Acoustic Reel-to-Reel"
  },
  {
    id: "style-4",
    num: "4",
    nameAr: "المريمية والغموض",
    nameEn: "Atelier Forest",
    archetype: "atelier",
    color: "#52b788",
    desc: "Swiss Architectural Grid & Terracotta"
  },
  {
    id: "style-5",
    num: "5",
    nameAr: "المونوكروم البسيط",
    nameEn: "Monochrome Gallery",
    archetype: "gallery",
    color: "#ffffff",
    desc: "Brutalist Museum Exhibition Archival"
  },
  {
    id: "style-6",
    num: "6",
    nameAr: "بنتو غريد التفاعلي",
    nameEn: "Neo-Bento Showcase",
    archetype: "bento",
    color: "#3b82f6",
    desc: "Modern Modular Product Dashboard"
  },
  {
    id: "style-7",
    num: "7",
    nameAr: "اللوكبـوك التحريري",
    nameEn: "Editorial Lookbook",
    archetype: "editorial",
    color: "#c26d53",
    desc: "Haute Horlogerie & Fashion Spread"
  },
  {
    id: "style-8",
    num: "8",
    nameAr: "استوديو الكونسول التناظري",
    nameEn: "Analog Studio Console",
    archetype: "studio",
    color: "#ea580c",
    desc: "Hardware Master Desk & DAW Rack"
  },
  {
    id: "style-9",
    num: "9",
    nameAr: "المسرح المباشر",
    nameEn: "Live Stage Headliner",
    archetype: "stage",
    color: "#a855f7",
    desc: "Stadium Concert & Arena Tour Aura"
  },
  {
    id: "style-10",
    num: "10",
    nameAr: "كانفاس الصوت والطباعة",
    nameEn: "Minimal Audio Canvas",
    archetype: "canvas",
    color: "#10b981",
    desc: "Zen Typographic Purity & Soundwave"
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

  const handleSelect = (id) => {
    setCurrentStyle(id);
    const activeObj = STYLES.find((s) => s.id === id);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", id);
      if (activeObj) {
        document.documentElement.setAttribute("data-archetype", activeObj.archetype);
      }
    }
    try {
      localStorage.setItem("a7md_style", id);
      const url = new URL(window.location.href);
      url.searchParams.set("style", id.replace("style-", ""));
      window.history.replaceState({}, "", url.toString());
    } catch {
      // ignore
    }
    setIsOpen(false);
  };

  const activeStyle = STYLES.find((s) => s.id === currentStyle) || STYLES[0];

  if (!isClient) return null;

  return (
    <aside
      aria-label="Style Switcher"
      className="style-switcher"
      style={{
        position: "fixed",
        bottom: "20px",
        insetInlineEnd: "20px",
        zIndex: 9999,
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="style-switcher__toggle"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          background: "rgba(18, 18, 22, 0.88)",
          backdropFilter: "blur(14px)",
          border: "1px solid var(--line-strong, rgba(255, 255, 255, 0.16))",
          borderRadius: "999px",
          color: "var(--text, #fff)",
          cursor: "pointer",
          fontSize: "13px",
          fontWeight: 600,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          transition: "all 0.25s ease"
        }}
        aria-expanded={isOpen}
      >
        <span
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: activeStyle.color,
            boxShadow: `0 0 8px ${activeStyle.color}`
          }}
        />
        <span>{locale === "ar" ? `التصميم ${activeStyle.num}: ${activeStyle.nameAr}` : `Style ${activeStyle.num}: ${activeStyle.nameEn}`}</span>
        <span
          style={{
            fontSize: "10px",
            opacity: 0.6,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            padding: "2px 6px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "4px"
          }}
        >
          {activeStyle.archetype}
        </span>
        {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
      </button>

      {isOpen && (
        <div
          className="style-switcher__panel"
          style={{
            position: "absolute",
            bottom: "50px",
            insetInlineEnd: "0",
            width: "320px",
            maxHeight: "440px",
            overflowY: "auto",
            background: "rgba(15, 15, 18, 0.94)",
            backdropFilter: "blur(20px)",
            border: "1px solid var(--line-strong, rgba(255, 255, 255, 0.16))",
            borderRadius: "16px",
            padding: "8px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            gap: "4px"
          }}
        >
          <div
            style={{
              padding: "8px 12px 6px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Palette size={14} style={{ color: activeStyle.color }} />
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}>
                {locale === "ar" ? "10 تصاميم كاملة ومستقلة" : "10 Bespoke Websites"}
              </span>
            </div>
            <span style={{ fontSize: "10px", color: "var(--muted, #888)" }}>
              {STYLES.length} Designs
            </span>
          </div>

          {STYLES.map((st) => {
            const isSelected = st.id === currentStyle;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => handleSelect(st.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: isSelected ? "1px solid var(--line-strong, rgba(255,255,255,0.25))" : "1px solid transparent",
                  background: isSelected ? "rgba(255, 255, 255, 0.08)" : "transparent",
                  color: "#fff",
                  cursor: "pointer",
                  textAlign: locale === "ar" ? "right" : "left",
                  transition: "background 0.18s ease"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: st.color,
                      flexShrink: 0,
                      boxShadow: isSelected ? `0 0 10px ${st.color}` : "none"
                    }}
                  />
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
                      <span>{locale === "ar" ? st.nameAr : st.nameEn}</span>
                      <span
                        style={{
                          fontSize: "9px",
                          opacity: 0.6,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          padding: "1px 5px",
                          background: "rgba(255,255,255,0.06)",
                          borderRadius: "3px"
                        }}
                      >
                        {st.num}
                      </span>
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--muted, #999)", marginTop: "2px" }}>
                      {st.desc}
                    </div>
                  </div>
                </div>
                {isSelected && <Check size={16} style={{ color: st.color, flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>
      )}
    </aside>
  );
}
