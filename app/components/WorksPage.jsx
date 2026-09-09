"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Disc3,
  ExternalLink,
  Flame,
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
  getWorkKey,
  getWorkPath,
  works
} from "../data";
import { SonicSeal } from "./MusicVisuals";
import SiteChrome, { emailHref } from "./SiteChrome";
import WorkVideoCatalog from "./WorkVideoCatalog";
import { useActiveTheme } from "./useActiveTheme";

export default function WorksPage({ locale }) {
  const { archetype: activeArchetype } = useActiveTheme();
  const t = content[locale];
  const featuredWork = works[0];
  const featuredCopy = getWorkCopy(featuredWork, locale);

  const localizedTracks = works.map((work) => {
    const copy = getWorkCopy(work, locale);
    return {
      youtubeId: work.youtubeId,
      year: work.year,
      href: getWorkPath(locale, work),
      key: getWorkKey(work),
      title: copy.title,
      subtitle: copy.subtitle,
      type: copy.type,
      mood: copy.mood,
      note: copy.note
    };
  });

  const archetype = (activeArchetype === "classic" || !activeArchetype) ? "aureate" : activeArchetype;

  return (
    <SiteChrome locale={locale} page="works">
      {/* ====================================================================
          1. AUREATE LYRICIST (Style 1: Royal Museum Showcase)
          ==================================================================== */}
      {archetype === "aureate" && (
        <div className="aureate-wrapper">
          <header style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="aureate-crest">
              <Sparkles size={13} /> {locale === "ar" ? "أرشيف الأعمال الموسيقية الفاخرة" : "Royal Discography Archive"}
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", margin: "14px 0" }}>{t.worksPage.title}</h1>
            <p style={{ fontSize: "17px", color: "var(--muted-strong)", maxWidth: "600px", margin: "0 auto" }}>
              {t.worksPage.body}
            </p>
          </header>

          <WorkVideoCatalog
            catalogLabel={t.worksPage.catalogLabel}
            closeLabel={locale === "ar" ? "إغلاق المشغل" : "Close player"}
            detailLabel={locale === "ar" ? "افتح صفحة العمل" : "Open work page"}
            featuredLabel={t.worksPage.featuredLabel}
            tracks={localizedTracks}
          />
        </div>
      )}

      {/* ====================================================================
          2. NOCTURNAL RESONANCE (Style 2: Cyber Glassmorphic Telemetry)
          ==================================================================== */}
      {archetype === "nocturne" && (
        <div className="nocturne-wrapper">
          <header style={{ marginBottom: "50px", padding: "40px", background: "rgba(11, 19, 41, 0.4)", borderRadius: "20px", border: "1px solid rgba(56, 189, 248, 0.2)" }}>
            <span className="nocturne-hologram-tag">AUDIO FREQUENCY INDEX // 48kHz</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", margin: "16px 0 10px", color: "#f1f5f9" }}>{t.worksPage.title}</h1>
            <p style={{ fontSize: "16px", color: "var(--muted-strong)", margin: 0 }}>{t.worksPage.body}</p>
          </header>

          <WorkVideoCatalog
            catalogLabel={t.worksPage.catalogLabel}
            closeLabel={locale === "ar" ? "إغلاق المشغل" : "Close player"}
            detailLabel={locale === "ar" ? "افتح صفحة العمل" : "Open work page"}
            featuredLabel={t.worksPage.featuredLabel}
            tracks={localizedTracks}
          />
        </div>
      )}

      {/* ====================================================================
          3. ANALOG TAPE LOUNGE (Style 3: Tape Reel & Cassette Ledger)
          ==================================================================== */}
      {archetype === "tape" && (
        <div className="tape-wrapper">
          <header style={{ padding: "40px", background: "#15110d", border: "2px solid rgba(245, 158, 11, 0.25)", borderRadius: "8px", marginBottom: "50px" }}>
            <span style={{ fontSize: "12px", fontFamily: "monospace", color: "#f59e0b", letterSpacing: "1px" }}>
              MASTER TAPE INVENTORY · 15 IPS REEL
            </span>
            <h1 style={{ fontSize: "clamp(30px, 4.5vw, 50px)", margin: "14px 0 8px" }}>{t.worksPage.title}</h1>
            <p style={{ fontSize: "16px", color: "var(--muted-strong)", margin: 0 }}>{t.worksPage.body}</p>
          </header>

          <WorkVideoCatalog
            catalogLabel={t.worksPage.catalogLabel}
            closeLabel={locale === "ar" ? "إغلاق المشغل" : "Close player"}
            detailLabel={locale === "ar" ? "افتح صفحة العمل" : "Open work page"}
            featuredLabel={t.worksPage.featuredLabel}
            tracks={localizedTracks}
          />
        </div>
      )}

      {/* ====================================================================
          4. ATELIER FOREST (Style 4: Architectural Swiss Catalog)
          ==================================================================== */}
      {archetype === "atelier" && (
        <div className="atelier-wrapper">
          <header style={{ padding: "50px 0", borderBottom: "1px solid rgba(255, 255, 255, 0.15)", marginBottom: "50px" }}>
            <span className="atelier-mono-tag">ATELIER CATALOGUE // VOL 01</span>
            <h1 style={{ fontSize: "clamp(34px, 5vw, 56px)", margin: "10px 0" }}>{t.worksPage.title}</h1>
            <p style={{ fontSize: "16px", color: "var(--muted-strong)", maxWidth: "580px", margin: 0 }}>{t.worksPage.body}</p>
          </header>

          <WorkVideoCatalog
            catalogLabel={t.worksPage.catalogLabel}
            closeLabel={locale === "ar" ? "إغلاق المشغل" : "Close player"}
            detailLabel={locale === "ar" ? "افتح صفحة العمل" : "Open work page"}
            featuredLabel={t.worksPage.featuredLabel}
            tracks={localizedTracks}
          />
        </div>
      )}

      {/* ====================================================================
          5. MONOCHROME GALLERY (Style 5: Brutalist Archival Index)
          ==================================================================== */}
      {archetype === "gallery" && (
        <div className="gallery-wrapper">
          <header style={{ padding: "50px 0", borderBottom: "2px solid #ffffff", marginBottom: "50px" }}>
            <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#a1a1aa", fontWeight: 800 }}>
              EXHIBITION ARCHIVE // COMPOSITIONS
            </span>
            <h1 style={{ fontSize: "clamp(36px, 6vw, 68px)", margin: "14px 0 10px", color: "#ffffff", textTransform: "uppercase" }}>
              {t.worksPage.title}
            </h1>
            <p style={{ fontSize: "16px", color: "#a1a1aa", maxWidth: "600px", margin: 0 }}>{t.worksPage.body}</p>
          </header>

          <WorkVideoCatalog
            catalogLabel={t.worksPage.catalogLabel}
            closeLabel={locale === "ar" ? "إغلاق المشغل" : "Close player"}
            detailLabel={locale === "ar" ? "افتح صفحة العمل" : "Open work page"}
            featuredLabel={t.worksPage.featuredLabel}
            tracks={localizedTracks}
          />
        </div>
      )}

      {/* ====================================================================
          6. NEO-BENTO SHOWCASE (Style 6: Modular Product Grid)
          ==================================================================== */}
      {archetype === "bento" && (
        <div className="bento-wrapper">
          <header style={{ marginBottom: "40px" }}>
            <span className="bento-tag">
              <Sparkles size={13} /> {locale === "ar" ? "كتالوج الأعمال الرسمي" : "Official Discography"}
            </span>
            <h1 className="hero-v2__title" style={{ fontSize: "clamp(30px, 4.5vw, 50px)", margin: "14px 0 10px" }}>
              {t.worksPage.title}
            </h1>
            <p className="hero-v2__lead" style={{ fontSize: "16px", margin: 0 }}>{t.worksPage.body}</p>
          </header>

          <WorkVideoCatalog
            catalogLabel={t.worksPage.catalogLabel}
            closeLabel={locale === "ar" ? "إغلاق المشغل" : "Close player"}
            detailLabel={locale === "ar" ? "افتح صفحة العمل" : "Open work page"}
            featuredLabel={t.worksPage.featuredLabel}
            tracks={localizedTracks}
          />
        </div>
      )}

      {/* ====================================================================
          7. EDITORIAL LOOKBOOK (Style 7: Haute Lookbook Spread)
          ==================================================================== */}
      {archetype === "editorial" && (
        <div className="editorial-wrapper">
          <header style={{ padding: "40px 0 60px", borderBottom: "1px solid var(--line)" }}>
            <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700 }}>
              DISCOGRAPHY SPREAD // VOL 01
            </span>
            <h1 className="editorial-display-title" style={{ fontSize: "clamp(36px, 6vw, 64px)", margin: "14px 0" }}>
              {t.worksPage.title}
            </h1>
            <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--muted-strong)", maxWidth: "620px", margin: 0 }}>
              {t.worksPage.body}
            </p>
          </header>

          <div style={{ marginTop: "40px" }}>
            <WorkVideoCatalog
              catalogLabel={t.worksPage.catalogLabel}
              closeLabel={locale === "ar" ? "إغلاق المشغل" : "Close player"}
              detailLabel={locale === "ar" ? "افتح صفحة العمل" : "Open work page"}
              featuredLabel={t.worksPage.featuredLabel}
              tracks={localizedTracks}
            />
          </div>
        </div>
      )}

      {/* ====================================================================
          8. ANALOG STUDIO CONSOLE (Style 8: Hardware Multitrack Rack)
          ==================================================================== */}
      {archetype === "studio" && (
        <div className="studio-wrapper">
          <div className="studio-console-header" style={{ marginBottom: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span className="studio-led studio-led--green" />
              <span style={{ fontSize: "12px", fontFamily: "monospace", fontWeight: 700 }}>
                MULTITRACK SESSION REEL · A7MD STUDIO
              </span>
            </div>
            <span style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--muted)" }}>
              {works.length} TRACKS LOADED
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(30px, 4.5vw, 50px)", margin: "0 0 10px" }}>{t.worksPage.title}</h1>
          <p style={{ fontSize: "16px", color: "var(--muted-strong)", marginBottom: "40px" }}>{t.worksPage.body}</p>

          <WorkVideoCatalog
            catalogLabel={t.worksPage.catalogLabel}
            closeLabel={locale === "ar" ? "إغلاق المشغل" : "Close player"}
            detailLabel={locale === "ar" ? "افتح صفحة العمل" : "Open work page"}
            featuredLabel={t.worksPage.featuredLabel}
            tracks={localizedTracks}
          />
        </div>
      )}

      {/* ====================================================================
          9. LIVE STAGE HEADLINER (Style 9: Stadium Concert Setlist)
          ==================================================================== */}
      {archetype === "stage" && (
        <div className="stage-wrapper">
          <div style={{ textAlign: "center", padding: "40px 20px", marginBottom: "40px" }}>
            <span className="stage-live-pill">OFFICIAL TOUR & SOUNDTRACK SETLIST</span>
            <h1 style={{ fontSize: "clamp(34px, 6vw, 64px)", margin: "14px 0" }}>{t.worksPage.title}</h1>
            <p style={{ fontSize: "17px", color: "var(--muted-strong)", maxWidth: "600px", margin: "0 auto" }}>
              {t.worksPage.body}
            </p>
          </div>

          <WorkVideoCatalog
            catalogLabel={t.worksPage.catalogLabel}
            closeLabel={locale === "ar" ? "إغلاق المشغل" : "Close player"}
            detailLabel={locale === "ar" ? "افتح صفحة العمل" : "Open work page"}
            featuredLabel={t.worksPage.featuredLabel}
            tracks={localizedTracks}
          />
        </div>
      )}

      {/* ====================================================================
          10. MINIMAL AUDIO CANVAS (Style 10: Zen Typographic Table)
          ==================================================================== */}
      {archetype === "canvas" && (
        <div className="canvas-wrapper">
          <header style={{ paddingBottom: "40px", borderBottom: "1px solid var(--line)", marginBottom: "50px" }}>
            <h1 className="canvas-hero-title">{t.worksPage.title}</h1>
            <p style={{ fontSize: "18px", color: "var(--muted-strong)", maxWidth: "600px", margin: 0 }}>
              {t.worksPage.body}
            </p>
          </header>

          <WorkVideoCatalog
            catalogLabel={t.worksPage.catalogLabel}
            closeLabel={locale === "ar" ? "إغلاق المشغل" : "Close player"}
            detailLabel={locale === "ar" ? "افتح صفحة العمل" : "Open work page"}
            featuredLabel={t.worksPage.featuredLabel}
            tracks={localizedTracks}
          />
        </div>
      )}

      {/* Shared CTA at bottom */}
      <section className="section work-cta" style={{ marginTop: "80px" }}>
        <h2>{t.worksPage.cta}</h2>
        <div className="hero-actions">
          <Link className="button button-secondary" href={getLocalePath(locale, "about")}>
            <Music2 aria-hidden="true" size={18} />
            <span>{t.nav.find((item) => item.page === "about")?.label}</span>
          </Link>
          <a
            className="button button-primary"
            href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
          >
            <Mail aria-hidden="true" size={18} />
            <span>{t.contactPage.primaryAction}</span>
          </a>
        </div>
      </section>
    </SiteChrome>
  );
}
