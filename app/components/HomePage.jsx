"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Disc3,
  ExternalLink,
  Flame,
  Globe,
  Headphones,
  Mail,
  Mic,
  Music2,
  Play,
  Radio,
  SlidersHorizontal,
  Sparkles,
  Volume2
} from "lucide-react";
import {
  content,
  getLocalePath,
  getWorkCopy,
  getWorkPath,
  socialLinks,
  works
} from "../data";
import SiteChrome, { emailHref, SocialIcon } from "./SiteChrome";
import { useActiveTheme } from "./useActiveTheme";

export default function HomePage({ locale }) {
  const { archetype: activeArchetype } = useActiveTheme();
  const t = content[locale];
  const featuredWorks = works.slice(0, 4);
  const latestWork = works[0];
  const latestCopy = getWorkCopy(latestWork, locale);

  const archetype = (activeArchetype === "classic" || !activeArchetype) ? "aureate" : activeArchetype;

  return (
    <SiteChrome headerMode="solid" locale={locale} page="home">
      {/* ====================================================================
          1. AUREATE LYRICIST (Royal Yemeni Maestro - Style 1)
          ==================================================================== */}
      {archetype === "aureate" && (
        <div className="aureate-wrapper" aria-label="Aureate Lyricist Portfolio">
          <div className="aureate-hero">
            <div>
              <span className="aureate-crest">
                <Sparkles size={13} /> {locale === "ar" ? "موسيقى يمنية أصيلة بنبض عالمي" : "Aureate Yemeni Maestro"}
              </span>
              <h1 style={{ fontSize: "clamp(34px, 5.5vw, 62px)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 20px" }}>
                {t.hero.title}
              </h1>
              <p style={{ fontSize: "19px", color: "var(--accent)", fontWeight: 700, margin: "0 0 16px" }}>
                {t.hero.role}
              </p>
              <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "32px", maxWidth: "560px" }}>
                {t.hero.lead}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a className="button button-primary" href="https://soundcloud.com/a7mdsif" target="_blank" rel="noopener noreferrer">
                  <Play size={16} fill="currentColor" />
                  <span>{t.hero.listen}</span>
                </a>
                <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                  <Music2 size={16} />
                  <span>{t.hero.explore}</span>
                </Link>
              </div>
            </div>
            <div className="aureate-portrait-frame">
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={400} height={500} priority />
            </div>
          </div>

          <div style={{ margin: "80px 0 40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "36px" }}>
              <div>
                <p className="eyebrow">{locale === "ar" ? "مختارات من روائع الأعمال" : "Featured Compositions"}</p>
                <h2 style={{ fontSize: "32px", margin: "6px 0 0" }}>{t.featuredWorks.title}</h2>
              </div>
              <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                <span>{t.featuredWorks.action}</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="aureate-works-grid">
              {featuredWorks.map((work) => {
                const copy = getWorkCopy(work, locale);
                return (
                  <Link href={getWorkPath(locale, work)} key={work.enTitle} className="aureate-work-card">
                    <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 700, letterSpacing: "1px" }}>
                      {work.year} · {copy.type}
                    </span>
                    <h3 style={{ fontSize: "22px", margin: "10px 0 8px" }}>{copy.title}</h3>
                    <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0 }}>{copy.mood}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          2. NOCTURNAL RESONANCE (Cyber Indigo & Glassmorphism - Style 2)
          ==================================================================== */}
      {archetype === "nocturne" && (
        <div className="nocturne-wrapper" aria-label="Nocturnal Resonance Portfolio">
          <div className="nocturne-hero">
            <div className="nocturne-orb" />
            <div>
              <span className="nocturne-hologram-tag">
                ● {locale === "ar" ? "بث الاستوديو الحي" : "Cyber Acoustic Telemetry"}
              </span>
              <h1 style={{ fontSize: "clamp(34px, 5.5vw, 64px)", fontWeight: 800, margin: "16px 0", letterSpacing: "-0.02em" }}>
                {t.hero.title}
              </h1>
              <p style={{ fontSize: "18px", color: "#38bdf8", fontWeight: 700, margin: "0 0 16px" }}>
                {t.hero.role}
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "28px" }}>
                {t.hero.lead}
              </p>
              <div style={{ display: "flex", gap: "14px" }}>
                <a className="button button-primary" href="https://soundcloud.com/a7mdsif" target="_blank" rel="noopener noreferrer">
                  <Play size={16} fill="currentColor" />
                  <span>{t.hero.listen}</span>
                </a>
                <Link className="button button-secondary" href={getLocalePath(locale, "about")}>
                  <span>{t.nav.find((item) => item.page === "about")?.label}</span>
                </Link>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={400} height={440} priority />
            </div>
          </div>

          <div style={{ margin: "60px 0" }}>
            <p className="eyebrow" style={{ color: "#38bdf8" }}>AUDIO TELEMETRY & RELEASES</p>
            <h2 style={{ fontSize: "30px", margin: "8px 0 32px" }}>{t.featuredWorks.title}</h2>
            <div className="nocturne-glass-grid">
              {featuredWorks.map((work) => {
                const copy = getWorkCopy(work, locale);
                return (
                  <Link href={getWorkPath(locale, work)} key={work.enTitle} className="nocturne-glass-card">
                    <span className="nocturne-hologram-tag">{copy.type}</span>
                    <h3 style={{ fontSize: "20px", margin: "14px 0 8px", color: "#f1f5f9" }}>{copy.title}</h3>
                    <p style={{ fontSize: "14px", color: "var(--muted)", margin: "0 0 14px" }}>{copy.mood}</p>
                    <span style={{ fontSize: "12px", color: "#38bdf8", fontWeight: 700 }}>{work.year} ↗</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          3. ANALOG TAPE LOUNGE (Raw Acoustic Session - Style 3)
          ==================================================================== */}
      {archetype === "tape" && (
        <div className="tape-wrapper" aria-label="Analog Tape Lounge Portfolio">
          <div className="tape-hero">
            <div className="tape-polaroid">
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={340} height={340} priority />
              <div className="tape-polaroid-caption">A7MD STUDIO · TAPE SESSION 01</div>
            </div>
            <div>
              <span style={{ display: "inline-block", background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", padding: "4px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: 700, fontFamily: "monospace" }}>
                REEL-TO-REEL MASTER // 15 IPS
              </span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", margin: "16px 0 12px" }}>{t.hero.title}</h1>
              <p style={{ fontSize: "18px", color: "#f59e0b", fontWeight: 700, margin: "0 0 16px" }}>{t.hero.role}</p>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "26px" }}>{t.hero.lead}</p>
              <div style={{ display: "flex", gap: "14px" }}>
                <a className="button button-primary" href="https://soundcloud.com/a7mdsif" target="_blank" rel="noopener noreferrer">
                  <Play size={16} fill="currentColor" />
                  <span>{t.hero.listen}</span>
                </a>
                <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                  <span>{t.hero.explore}</span>
                </Link>
              </div>
            </div>
          </div>

          <div style={{ margin: "60px 0" }}>
            <p className="eyebrow" style={{ color: "#f59e0b" }}>ACOUSTIC REELS & MASTER TRACKS</p>
            <h2 style={{ fontSize: "30px", margin: "8px 0 32px" }}>{t.featuredWorks.title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {featuredWorks.map((work, i) => {
                const copy = getWorkCopy(work, locale);
                return (
                  <Link href={getWorkPath(locale, work)} key={work.enTitle} className="tape-cassette-card">
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#f59e0b", fontFamily: "monospace" }}>
                      <span>SIDE A / 0{i + 1}</span>
                      <span>{work.year}</span>
                    </div>
                    <h3 style={{ fontSize: "20px", margin: 0 }}>{copy.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>{copy.type} · {copy.mood}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          4. ATELIER FOREST (Architectural Swiss Grid - Style 4)
          ==================================================================== */}
      {archetype === "atelier" && (
        <div className="atelier-wrapper" aria-label="Atelier Forest Portfolio">
          <div className="atelier-grid-hero">
            <div className="atelier-hero-text">
              <div>
                <span className="atelier-mono-tag">ATELIER A7MD // ARCHITECTURAL SOUND // YEMEN</span>
                <h1 style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 800, margin: "0 0 16px" }}>{t.hero.title}</h1>
                <p style={{ fontSize: "18px", color: "#52b788", fontWeight: 700, margin: "0 0 20px" }}>{t.hero.role}</p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted-strong)" }}>{t.hero.lead}</p>
              </div>
              <div style={{ marginTop: "36px", display: "flex", gap: "16px" }}>
                <a className="button button-primary" href="https://soundcloud.com/a7mdsif" target="_blank" rel="noopener noreferrer">
                  <Play size={16} fill="currentColor" />
                  <span>{t.hero.listen}</span>
                </a>
                <Link className="button button-secondary" href={getLocalePath(locale, "contact")}>
                  <span>{t.nav.find((item) => item.page === "contact")?.label}</span>
                </Link>
              </div>
            </div>
            <div className="atelier-hero-visual">
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={400} height={460} priority />
            </div>
          </div>

          <div style={{ margin: "60px 0" }}>
            <span className="atelier-mono-tag">INDEX 01 / SELECTED WORKS</span>
            <div style={{ marginTop: "20px" }}>
              {featuredWorks.map((work, idx) => {
                const copy = getWorkCopy(work, locale);
                return (
                  <Link href={getWorkPath(locale, work)} key={work.enTitle} className="atelier-catalog-row">
                    <span className="atelier-catalog-num">0{idx + 1}</span>
                    <div>
                      <strong style={{ fontSize: "20px", display: "block" }}>{copy.title}</strong>
                      <span style={{ fontSize: "13px", color: "var(--muted)" }}>{copy.type} · {copy.mood}</span>
                    </div>
                    <span style={{ fontFamily: "Space Mono, monospace", fontSize: "14px", color: "#52b788" }}>{work.year} ↗</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          5. MONOCHROME GALLERY (Brutalist Museum Archival - Style 5)
          ==================================================================== */}
      {archetype === "gallery" && (
        <div className="gallery-wrapper" aria-label="Monochrome Gallery Portfolio">
          <div className="gallery-split-hero">
            <div>
              <h1 className="gallery-giant-title">{t.hero.title}</h1>
              <p style={{ fontSize: "16px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, margin: "20px 0 24px", color: "#ffffff" }}>
                {t.hero.role}
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#a1a1aa", maxWidth: "480px", marginBottom: "32px" }}>
                {t.hero.lead}
              </p>
              <div style={{ display: "flex", gap: "14px" }}>
                <a className="button button-primary" href="https://soundcloud.com/a7mdsif" target="_blank" rel="noopener noreferrer">
                  <Play size={16} fill="currentColor" />
                  <span>{t.hero.listen}</span>
                </a>
                <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                  <span>{t.hero.explore}</span>
                </Link>
              </div>
            </div>
            <div className="gallery-photo-plate">
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={400} height={500} priority />
              <span className="gallery-plate-tag">FIG. 01 — ARCHIVE</span>
            </div>
          </div>

          <div style={{ margin: "60px 0" }}>
            <p style={{ fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: "#71717a", fontWeight: 800 }}>
              EXHIBITION INDEX // 2024–2026
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px", marginTop: "24px" }}>
              {featuredWorks.map((work, idx) => {
                const copy = getWorkCopy(work, locale);
                return (
                  <Link href={getWorkPath(locale, work)} key={work.enTitle} className="gallery-exhibition-card">
                    <span style={{ fontSize: "11px", letterSpacing: "1.5px", color: "#71717a", textTransform: "uppercase" }}>
                      ITEM #{idx + 1} · {work.year}
                    </span>
                    <h3 style={{ fontSize: "22px", margin: "12px 0 8px", color: "#ffffff" }}>{copy.title}</h3>
                    <p style={{ fontSize: "13px", color: "#a1a1aa", margin: 0 }}>{copy.type} / {copy.mood}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          6. NEO-BENTO SHOWCASE (Modular Dashboard - Style 6)
          ==================================================================== */}
      {archetype === "bento" && (
        <div className="bento-wrapper" aria-label="Bento Grid Portfolio">
          <div className="bento-grid">
            <div className="bento-card bento-card--hero-copy">
              <div>
                <span className="bento-tag">
                  <Sparkles size={13} /> {t.hero.role}
                </span>
                <h1 className="hero-v2__title" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>
                  {t.hero.title}
                </h1>
                <p className="hero-v2__lead" style={{ fontSize: "16px", marginBottom: "24px" }}>
                  {t.hero.lead}
                </p>
              </div>
              <div className="hero-v2__actions">
                <a className="button button-primary" href="https://soundcloud.com/a7mdsif" target="_blank" rel="noopener noreferrer">
                  <Play size={16} fill="currentColor" />
                  <span>{t.hero.listen}</span>
                </a>
                <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                  <Music2 size={16} />
                  <span>{t.hero.explore}</span>
                </Link>
              </div>
            </div>

            <div className="bento-card bento-card--hero-portrait">
              <div className="bento-portrait-box">
                <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={240} height={240} priority />
              </div>
              <strong style={{ fontSize: "17px", display: "block", marginBottom: "4px" }}>{t.hero.title}</strong>
              <span style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 600 }}>
                ● A7MD Studio · {locale === "ar" ? "جاهز للتعاونات الفنية" : "Open for Collaborations"}
              </span>
            </div>

            <div className="bento-card bento-card--player">
              <div>
                <span className="bento-tag">
                  <Volume2 size={13} /> {locale === "ar" ? "أحدث إصدار رسمي" : "Latest Official Release"}
                </span>
                <h2 style={{ fontSize: "22px", margin: "10px 0 6px" }}>{latestCopy.title}</h2>
                <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0 }}>
                  {latestCopy.type} · {latestCopy.mood} ({latestWork.year})
                </p>
              </div>
              <div style={{ marginTop: "24px" }}>
                <Link className="button button-primary" href={getWorkPath(locale, latestWork)} style={{ width: "fit-content" }}>
                  <Play size={16} fill="currentColor" />
                  <span>{locale === "ar" ? "استمع الآن وشاهد العمل" : "Listen & Watch"}</span>
                </Link>
              </div>
            </div>

            <div className="bento-card bento-card--studio">
              <span className="bento-tag">
                <Headphones size={13} /> A7MD Studio
              </span>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--muted-strong)", margin: "12px 0 0" }}>
                {t.aboutPage.principles[1]?.body}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          7. EDITORIAL LOOKBOOK (Haute Horlogerie - Style 7)
          ==================================================================== */}
      {archetype === "editorial" && (
        <div className="editorial-wrapper" aria-label="Editorial Lookbook Portfolio">
          <div className="editorial-hero">
            <div className="editorial-hero-image">
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} fill priority sizes="(max-width: 900px) 100vw, 450px" />
            </div>
            <div className="editorial-hero-content">
              <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700 }}>
                VOL. I · ISSUE 2026 // MONOGRAPH
              </span>
              <h1 className="editorial-display-title">{t.hero.title}</h1>
              <p style={{ fontSize: "18px", color: "var(--accent)", fontWeight: 700, margin: "0 0 16px" }}>
                {t.hero.role}
              </p>
              <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "32px" }}>
                {t.hero.lead}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a className="button button-primary" href="https://soundcloud.com/a7mdsif" target="_blank" rel="noopener noreferrer">
                  <Play size={16} fill="currentColor" />
                  <span>{t.hero.listen}</span>
                </a>
                <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                  <span>{t.hero.explore}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div style={{ padding: "40px 0" }}>
            <p className="eyebrow">EDITORIAL REEL // SELECTED DISCOGRAPHY</p>
            <div className="editorial-reel">
              {works.map((work) => {
                const copy = getWorkCopy(work, locale);
                return (
                  <Link href={getWorkPath(locale, work)} key={work.enTitle} className="editorial-card">
                    <span style={{ fontSize: "11px", color: "var(--accent)", fontWeight: 700 }}>{work.year} · {copy.type}</span>
                    <h3 style={{ fontSize: "20px", margin: "10px 0 6px" }}>{copy.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>{copy.mood}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          8. ANALOG STUDIO CONSOLE (Hardware DAW - Style 8)
          ==================================================================== */}
      {archetype === "studio" && (
        <div className="studio-wrapper" aria-label="Analog Studio Console Portfolio">
          <div className="studio-console-deck">
            <div className="studio-console-header">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="studio-led studio-led--green" />
                <span style={{ fontSize: "12px", fontFamily: "monospace", fontWeight: 700 }}>
                  A7MD MASTER DESK · 48kHz / 24-BIT
                </span>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <span className="studio-led studio-led--yellow" />
                <span className="studio-led studio-led--red" />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "30px", alignItems: "center", marginBottom: "30px" }}>
              <div>
                <h1 style={{ fontSize: "clamp(30px, 4.5vw, 52px)", margin: "0 0 10px" }}>{t.hero.title}</h1>
                <p style={{ fontSize: "16px", color: "var(--accent)", fontWeight: 700, margin: "0 0 12px" }}>
                  {t.hero.role} · A7MD Studio
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--muted-strong)", margin: 0 }}>
                  {t.hero.lead}
                </p>
              </div>
              <div style={{ width: "120px", height: "120px", borderRadius: "14px", overflow: "hidden", border: "1px solid var(--line)" }}>
                <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={120} height={120} priority />
              </div>
            </div>

            <div className="studio-fader-strip">
              {['SUB', 'VOCAL', 'LUTE', 'DRUM', 'MASTER'].map((ch, idx) => (
                <div key={ch} className="studio-fader-ch">
                  <div className="studio-fader-track">
                    <div className="studio-fader-thumb" style={{ top: `${20 + idx * 12}px` }} />
                  </div>
                  <span>{ch}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "30px", display: "flex", gap: "14px" }}>
              <a className="button button-primary" href="https://soundcloud.com/a7mdsif" target="_blank" rel="noopener noreferrer">
                <Play size={16} fill="currentColor" />
                <span>{locale === "ar" ? "تشغيل عبر ساوندكلاود" : "Live SoundCloud Stream"}</span>
              </a>
              <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                <SlidersHorizontal size={16} />
                <span>{locale === "ar" ? "معاينة التراكات" : "Master Tracks"}</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          9. LIVE STAGE HEADLINER (Stadium Concert - Style 9)
          ==================================================================== */}
      {archetype === "stage" && (
        <div className="stage-wrapper" aria-label="Live Stage Headliner Portfolio">
          <div className="stage-hero">
            <span className="stage-live-pill">
              ● LIVE HEADLINER · EXPO OSAKA & SERIES THEMES
            </span>
            <div className="stage-portrait-circle">
              <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={200} height={200} priority />
            </div>
            <h1 style={{ fontSize: "clamp(36px, 6vw, 68px)", margin: "0 0 16px" }}>{t.hero.title}</h1>
            <p style={{ fontSize: "18px", color: "var(--accent)", fontWeight: 700, margin: "0 0 16px" }}>
              {t.hero.role}
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--muted-strong)", maxWidth: "620px", margin: "0 auto 32px" }}>
              {t.hero.lead}
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "14px" }}>
              <a className="button button-primary" href="https://soundcloud.com/a7mdsif" target="_blank" rel="noopener noreferrer">
                <Play size={16} fill="currentColor" />
                <span>{t.hero.listen}</span>
              </a>
              <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                <Mic size={16} />
                <span>{t.hero.explore}</span>
              </Link>
            </div>
          </div>

          <div style={{ padding: "40px 0" }}>
            <p className="eyebrow" style={{ textAlign: "center" }}>FESTIVAL & SOUNDTRACK SETLIST</p>
            <h2 style={{ fontSize: "32px", textAlign: "center", margin: "10px 0 40px" }}>{t.featuredWorks.title}</h2>
            <div className="stage-setlist">
              {featuredWorks.map((work, idx) => {
                const copy = getWorkCopy(work, locale);
                return (
                  <Link href={getWorkPath(locale, work)} key={work.enTitle} className="stage-setlist-item">
                    <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                      <span style={{ fontSize: "18px", fontWeight: 800, color: "var(--accent)" }}>0{idx + 1}</span>
                      <div>
                        <strong style={{ fontSize: "18px", display: "block" }}>{copy.title}</strong>
                        <span style={{ fontSize: "13px", color: "var(--muted)" }}>{copy.type} · {copy.mood}</span>
                      </div>
                    </div>
                    <span style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 600 }}>{work.year} ▶</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          10. MINIMAL AUDIO CANVAS (Zen Typographic - Style 10)
          ==================================================================== */}
      {archetype === "canvas" && (
        <div className="canvas-wrapper" aria-label="Minimal Audio Canvas Portfolio">
          <h1 className="canvas-hero-title">{t.hero.title}</h1>
          <div className="canvas-intro-row">
            <div>
              <p style={{ fontSize: "20px", color: "var(--accent)", fontWeight: 700, margin: "0 0 12px" }}>
                {t.hero.role}
              </p>
              <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--muted-strong)", margin: 0 }}>
                {t.hero.lead}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <blockquote style={{ fontSize: "18px", fontStyle: "italic", margin: 0, color: "var(--muted)" }}>
                &ldquo;{t.aboutPage.statement}&rdquo;
              </blockquote>
              <div style={{ display: "flex", gap: "14px" }}>
                <a className="button button-primary" href="https://soundcloud.com/a7mdsif" target="_blank" rel="noopener noreferrer">
                  <Play size={16} fill="currentColor" />
                  <span>SoundCloud</span>
                </a>
                <a className="button button-secondary" href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}>
                  <Mail size={16} />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
              </div>
            </div>
          </div>

          <div style={{ padding: "40px 0" }}>
            <p className="eyebrow">SELECTED RELEASES</p>
            <div className="canvas-track-list">
              {featuredWorks.map((work) => {
                const copy = getWorkCopy(work, locale);
                return (
                  <Link href={getWorkPath(locale, work)} key={work.enTitle} className="canvas-track-row">
                    <span className="canvas-track-title">{copy.title}</span>
                    <span className="canvas-track-tag">{work.year} / {copy.type} ↗</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </SiteChrome>
  );
}
