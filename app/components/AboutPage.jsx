"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Headphones,
  Mic,
  Music2,
  Quote,
  Radio,
  SlidersHorizontal,
  Sparkles
} from "lucide-react";
import { content, getLocalePath } from "../data";
import { MeterStack, StaffLines } from "./MusicVisuals";
import SiteChrome from "./SiteChrome";
import { useActiveTheme } from "./useActiveTheme";

export default function AboutPage({ locale }) {
  const { archetype: activeArchetype } = useActiveTheme();
  const t = content[locale];

  const archetype = (activeArchetype === "classic" || !activeArchetype) ? "aureate" : activeArchetype;

  return (
    <SiteChrome locale={locale} page="about">
      {/* ====================================================================
          1. AUREATE LYRICIST (Style 1: Royal Monograph)
          ==================================================================== */}
      {archetype === "aureate" && (
        <div className="aureate-wrapper">
          <div className="aureate-hero" style={{ marginBottom: "60px" }}>
            <div>
              <span className="aureate-crest">
                <Sparkles size={13} /> {locale === "ar" ? "سيرة الفنان والملحن" : "Artist & Composer Monograph"}
              </span>
              <h1 style={{ fontSize: "clamp(34px, 5vw, 56px)", margin: "14px 0" }}>{t.aboutPage.title}</h1>
              <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "24px" }}>
                {t.aboutPage.body}
              </p>
              <blockquote style={{ borderInlineStart: "3px solid #d4af37", paddingInlineStart: "16px", fontStyle: "italic", color: "#d4af37", fontSize: "18px", margin: 0 }}>
                &ldquo;{t.aboutPage.statement}&rdquo;
              </blockquote>
            </div>
            <div className="aureate-portrait-frame">
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={400} height={480} priority />
            </div>
          </div>

          <section style={{ margin: "60px 0" }}>
            <p className="eyebrow">{t.signature.eyebrow}</p>
            <h2 style={{ fontSize: "32px", margin: "8px 0 20px" }}>{t.signature.title}</h2>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--muted-strong)", maxWidth: "800px" }}>
              {t.signature.body}
            </p>
          </section>

          <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", margin: "60px 0" }}>
            {t.aboutPage.principles.map((pr) => (
              <article key={pr.title} className="aureate-work-card">
                <h3 style={{ fontSize: "20px", color: "var(--accent)", margin: "0 0 10px" }}>{pr.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--muted-strong)", margin: 0 }}>{pr.body}</p>
              </article>
            ))}
          </section>
        </div>
      )}

      {/* ====================================================================
          2. NOCTURNAL RESONANCE (Style 2: Cyber Sound Lab Telemetry)
          ==================================================================== */}
      {archetype === "nocturne" && (
        <div className="nocturne-wrapper">
          <div className="nocturne-hero" style={{ marginBottom: "60px" }}>
            <div>
              <span className="nocturne-hologram-tag">SOUND LAB TELEMETRY // SPECIFICATION</span>
              <h1 style={{ fontSize: "clamp(34px, 5vw, 54px)", margin: "16px 0", color: "#f1f5f9" }}>{t.aboutPage.title}</h1>
              <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "24px" }}>
                {t.aboutPage.body}
              </p>
              <div style={{ padding: "16px", background: "rgba(56, 189, 248, 0.1)", borderRadius: "12px", border: "1px solid rgba(56, 189, 248, 0.25)" }}>
                <p style={{ margin: 0, color: "#38bdf8", fontSize: "16px", fontStyle: "italic" }}>
                  &ldquo;{t.aboutPage.statement}&rdquo;
                </p>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={400} height={440} priority />
            </div>
          </div>

          <div className="nocturne-glass-grid" style={{ margin: "60px 0" }}>
            {t.aboutPage.principles.map((pr) => (
              <div key={pr.title} className="nocturne-glass-card">
                <span className="nocturne-hologram-tag">SPEC</span>
                <h3 style={{ fontSize: "20px", color: "#f1f5f9", margin: "12px 0 8px" }}>{pr.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>{pr.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ====================================================================
          3. ANALOG TAPE LOUNGE (Style 3: Handcrafted Studio Diary)
          ==================================================================== */}
      {archetype === "tape" && (
        <div className="tape-wrapper">
          <div className="tape-hero" style={{ marginBottom: "60px" }}>
            <div className="tape-polaroid">
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={340} height={340} priority />
              <div className="tape-polaroid-caption">A7MD STUDIO · COMPOSITION DESK</div>
            </div>
            <div>
              <span style={{ display: "inline-block", background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", padding: "4px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: 700, fontFamily: "monospace" }}>
                STUDIO LOGBOOK // FIELD NOTES
              </span>
              <h1 style={{ fontSize: "clamp(30px, 4.5vw, 50px)", margin: "16px 0 12px" }}>{t.aboutPage.title}</h1>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "20px" }}>
                {t.aboutPage.body}
              </p>
              <blockquote style={{ borderInlineStart: "3px solid #f59e0b", paddingInlineStart: "16px", fontStyle: "italic", color: "#f59e0b", margin: 0 }}>
                &ldquo;{t.aboutPage.statement}&rdquo;
              </blockquote>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", margin: "60px 0" }}>
            {t.aboutPage.principles.map((pr) => (
              <div key={pr.title} className="tape-cassette-card">
                <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#f59e0b" }}>LOG PRINCIPLE</span>
                <h3 style={{ fontSize: "20px", margin: "8px 0 6px" }}>{pr.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>{pr.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ====================================================================
          4. ATELIER FOREST (Style 4: Architectural Studio Manifesto)
          ==================================================================== */}
      {archetype === "atelier" && (
        <div className="atelier-wrapper">
          <div className="atelier-grid-hero" style={{ marginBottom: "60px" }}>
            <div className="atelier-hero-text">
              <div>
                <span className="atelier-mono-tag">MANIFESTO // A7MD STUDIO PHILOSOPHY</span>
                <h1 style={{ fontSize: "clamp(34px, 5vw, 56px)", margin: "14px 0" }}>{t.aboutPage.title}</h1>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "24px" }}>
                  {t.aboutPage.body}
                </p>
                <div style={{ borderInlineStart: "2px solid #52b788", paddingInlineStart: "16px" }}>
                  <p style={{ fontStyle: "italic", color: "#52b788", margin: 0 }}>
                    &ldquo;{t.aboutPage.statement}&rdquo;
                  </p>
                </div>
              </div>
            </div>
            <div className="atelier-hero-visual">
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={400} height={460} priority />
            </div>
          </div>

          <div style={{ margin: "60px 0" }}>
            <span className="atelier-mono-tag">INDEX 02 / CORE PRINCIPLES</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "20px" }}>
              {t.aboutPage.principles.map((pr, idx) => (
                <div key={pr.title} style={{ padding: "30px", border: "1px solid rgba(255, 255, 255, 0.12)", background: "#0d1712" }}>
                  <span style={{ fontFamily: "Space Mono, monospace", color: "#52b788", fontSize: "16px", fontWeight: 700 }}>
                    0{idx + 1}
                  </span>
                  <h3 style={{ fontSize: "20px", margin: "12px 0 8px" }}>{pr.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--muted-strong)", margin: 0 }}>{pr.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          5. MONOCHROME GALLERY (Style 5: Curatorial Retrospective Essay)
          ==================================================================== */}
      {archetype === "gallery" && (
        <div className="gallery-wrapper">
          <div className="gallery-split-hero" style={{ marginBottom: "60px" }}>
            <div>
              <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#a1a1aa", fontWeight: 800 }}>
                CURATORIAL MONOGRAPH
              </span>
              <h1 className="gallery-giant-title" style={{ margin: "14px 0" }}>{t.aboutPage.title}</h1>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#a1a1aa", marginBottom: "24px" }}>
                {t.aboutPage.body}
              </p>
              <p style={{ fontSize: "18px", fontStyle: "italic", color: "#ffffff", borderInlineStart: "2px solid #ffffff", paddingInlineStart: "16px", margin: 0 }}>
                &ldquo;{t.aboutPage.statement}&rdquo;
              </p>
            </div>
            <div className="gallery-photo-plate">
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={400} height={500} priority />
              <span className="gallery-plate-tag">DOC. 02 — BIOGRAPHY</span>
            </div>
          </div>

          <div style={{ margin: "60px 0" }}>
            <p style={{ fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: "#71717a", fontWeight: 800 }}>
              ARTISTIC PILLARS
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "24px" }}>
              {t.aboutPage.principles.map((pr, idx) => (
                <div key={pr.title} className="gallery-exhibition-card">
                  <span style={{ fontSize: "11px", letterSpacing: "1.5px", color: "#71717a" }}>
                    SECTION {['I', 'II', 'III'][idx] || idx + 1}
                  </span>
                  <h3 style={{ fontSize: "20px", color: "#ffffff", margin: "12px 0 8px" }}>{pr.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#a1a1aa", margin: 0 }}>{pr.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          6. NEO-BENTO SHOWCASE (Style 6: Modular Milestone Grid)
          ==================================================================== */}
      {archetype === "bento" && (
        <div className="bento-wrapper">
          <div className="bento-grid" style={{ marginBottom: "50px" }}>
            <div className="bento-card bento-card--hero-copy">
              <span className="bento-tag"><Sparkles size={13} /> {locale === "ar" ? "سيرة الفنان" : "Biography"}</span>
              <h1 className="hero-v2__title" style={{ fontSize: "clamp(28px, 4vw, 44px)", margin: "14px 0" }}>{t.aboutPage.title}</h1>
              <p className="hero-v2__lead" style={{ fontSize: "16px", margin: 0 }}>{t.aboutPage.body}</p>
            </div>
            <div className="bento-card bento-card--hero-portrait">
              <div className="bento-portrait-box">
                <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={240} height={240} priority />
              </div>
              <strong style={{ fontSize: "16px" }}>{t.hero.title}</strong>
              <span style={{ fontSize: "13px", color: "var(--accent)" }}>A7MD Studio</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {t.aboutPage.principles.map((pr) => (
              <div key={pr.title} className="bento-card">
                <span className="bento-tag"><Sparkles size={12} /> {pr.title}</span>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--muted-strong)", margin: "12px 0 0" }}>{pr.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ====================================================================
          7. EDITORIAL LOOKBOOK (Style 7: Haute Magazine Feature Article)
          ==================================================================== */}
      {archetype === "editorial" && (
        <div className="editorial-wrapper">
          <div className="editorial-hero" style={{ marginBottom: "60px" }}>
            <div className="editorial-hero-image">
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} fill priority sizes="(max-width: 900px) 100vw, 450px" />
            </div>
            <div className="editorial-hero-content">
              <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700 }}>
                INTERVIEW // THE ARTIST VOICE
              </span>
              <h1 className="editorial-display-title" style={{ fontSize: "clamp(34px, 5.5vw, 58px)", margin: "14px 0" }}>{t.aboutPage.title}</h1>
              <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "24px" }}>
                {t.aboutPage.body}
              </p>
              <p style={{ fontSize: "20px", fontStyle: "italic", color: "var(--accent)", margin: 0 }}>
                &ldquo;{t.aboutPage.statement}&rdquo;
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px", margin: "60px 0" }}>
            {t.aboutPage.principles.map((pr) => (
              <div key={pr.title} className="editorial-card">
                <h3 style={{ fontSize: "20px", margin: "0 0 10px", color: "var(--accent)" }}>{pr.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>{pr.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ====================================================================
          8. ANALOG STUDIO CONSOLE (Style 8: Studio Room Specs & Manifest)
          ==================================================================== */}
      {archetype === "studio" && (
        <div className="studio-wrapper">
          <div className="studio-console-deck" style={{ marginBottom: "50px" }}>
            <div className="studio-console-header">
              <span style={{ fontFamily: "monospace", fontSize: "12px", color: "var(--accent)", fontWeight: 700 }}>
                STUDIO FACILITY SPECIFICATION · A7MD STUDIO
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(30px, 4.5vw, 50px)", margin: "16px 0 10px" }}>{t.aboutPage.title}</h1>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--muted-strong)", marginBottom: "24px" }}>
              {t.aboutPage.body}
            </p>
            <div style={{ padding: "16px", background: "rgba(0,0,0,0.5)", borderRadius: "8px", border: "1px solid var(--line)" }}>
              <p style={{ margin: 0, fontFamily: "monospace", color: "var(--accent)", fontSize: "14px" }}>
                STATEMENT: &ldquo;{t.aboutPage.statement}&rdquo;
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {t.aboutPage.principles.map((pr) => (
              <div key={pr.title} style={{ padding: "24px", background: "var(--bg-raised)", border: "1px solid var(--line)", borderRadius: "10px" }}>
                <span style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--accent)" }}>PHILOSOPHY RACK</span>
                <h3 style={{ fontSize: "18px", margin: "8px 0" }}>{pr.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>{pr.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ====================================================================
          9. LIVE STAGE HEADLINER (Style 9: Arena Tour Chronicle)
          ==================================================================== */}
      {archetype === "stage" && (
        <div className="stage-wrapper">
          <div className="stage-hero" style={{ marginBottom: "50px" }}>
            <span className="stage-live-pill">ARTIST CHRONICLE · INTERNATIONAL TOUR</span>
            <div className="stage-portrait-circle">
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={200} height={200} priority />
            </div>
            <h1 style={{ fontSize: "clamp(34px, 6vw, 60px)", margin: "14px 0" }}>{t.aboutPage.title}</h1>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--muted-strong)", maxWidth: "620px", margin: "0 auto 24px" }}>
              {t.aboutPage.body}
            </p>
            <p style={{ fontSize: "18px", fontStyle: "italic", color: "var(--accent)", margin: 0 }}>
              &ldquo;{t.aboutPage.statement}&rdquo;
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {t.aboutPage.principles.map((pr) => (
              <div key={pr.title} className="stage-setlist-item" style={{ flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
                <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 700 }}>PILLAR</span>
                <h3 style={{ fontSize: "20px", margin: 0 }}>{pr.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>{pr.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ====================================================================
          10. MINIMAL AUDIO CANVAS (Style 10: Meditative Artist Essay)
          ==================================================================== */}
      {archetype === "canvas" && (
        <div className="canvas-wrapper">
          <header style={{ paddingBottom: "40px", borderBottom: "1px solid var(--line)", marginBottom: "50px" }}>
            <h1 className="canvas-hero-title">{t.aboutPage.title}</h1>
            <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--muted-strong)", maxWidth: "680px", margin: "0 0 24px" }}>
              {t.aboutPage.body}
            </p>
            <blockquote style={{ fontSize: "20px", fontStyle: "italic", color: "var(--accent)", margin: 0 }}>
              &ldquo;{t.aboutPage.statement}&rdquo;
            </blockquote>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {t.aboutPage.principles.map((pr) => (
              <div key={pr.title} style={{ paddingBottom: "30px", borderBottom: "1px solid var(--line)" }}>
                <h3 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 10px" }}>{pr.title}</h3>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted-strong)", margin: 0 }}>{pr.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shared CTA at bottom */}
      <section className="section work-cta" style={{ marginTop: "80px" }}>
        <h2>{t.pageCards.items.find((item) => item.page === "works")?.body}</h2>
        <Link className="button button-primary" href={getLocalePath(locale, "works")}>
          <span>{t.nav.find((item) => item.page === "works")?.label}</span>
          <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </SiteChrome>
  );
}
