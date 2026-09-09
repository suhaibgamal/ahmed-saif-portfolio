"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Disc3,
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
import { STYLES } from "./StyleSwitcher";

const emptySubscribe = () => () => {};

export default function HomePage({ locale }) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [activeArchetype, setActiveArchetype] = useState("classic");
  const t = content[locale];
  const featuredWorks = works.slice(0, 4);
  const latestWork = works[0];
  const latestCopy = getWorkCopy(latestWork, locale);

  useEffect(() => {
    const updateArchetype = () => {
      const theme = document.documentElement.getAttribute("data-theme") || "style-1";
      const matched = STYLES.find((s) => s.id === theme);
      if (matched) {
        setActiveArchetype(matched.archetype);
      }
    };

    updateArchetype();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme" || mutation.attributeName === "data-archetype") {
          updateArchetype();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <SiteChrome headerMode="solid" locale={locale} page="home">
      {/* ====================================================================
          ARCHETYPE 1: BENTO GRID LAYOUT (Style 6)
          ==================================================================== */}
      {activeArchetype === "bento" && (
        <div className="bento-wrapper" aria-label="Bento Grid Portfolio">
          <div className="bento-grid">
            {/* Bento Card: Hero Copy */}
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
                <a
                  className="button button-primary"
                  href="https://soundcloud.com/a7mdsif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play size={16} fill="currentColor" />
                  <span>{t.hero.listen}</span>
                </a>
                <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                  <Music2 size={16} />
                  <span>{t.hero.explore}</span>
                </Link>
              </div>
            </div>

            {/* Bento Card: Portrait & Live Status */}
            <div className="bento-card bento-card--hero-portrait">
              <div className="bento-portrait-box">
                <Image
                  src="/ahmed-saif-profile.webp"
                  alt={t.hero.title}
                  width={240}
                  height={240}
                  priority
                />
              </div>
              <strong style={{ fontSize: "17px", display: "block", marginBottom: "4px" }}>
                {t.hero.title}
              </strong>
              <span style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 600 }}>
                ● A7MD Studio · {locale === "ar" ? "جاهز للتعاونات الفنية" : "Open for Collaborations"}
              </span>
            </div>

            {/* Bento Card: Latest Release Highlight */}
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
                <Link
                  className="button button-primary"
                  href={getWorkPath(locale, latestWork)}
                  style={{ width: "fit-content" }}
                >
                  <Play size={16} fill="currentColor" />
                  <span>{locale === "ar" ? "استمع الآن وشاهد العمل" : "Listen & Watch"}</span>
                </Link>
              </div>
            </div>

            {/* Bento Card: Studio Craft */}
            <div className="bento-card bento-card--studio">
              <div>
                <span className="bento-tag">
                  <SlidersHorizontal size={13} /> A7MD Studio
                </span>
                <h3 style={{ fontSize: "18px", margin: "8px 0" }}>{t.studio.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                  {t.studio.body}
                </p>
              </div>
              <div style={{ marginTop: "16px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {t.studio.cards.map((c) => (
                  <span
                    key={c.title}
                    style={{
                      fontSize: "12px",
                      padding: "4px 10px",
                      background: "var(--bg-soft)",
                      borderRadius: "6px",
                      border: "1px solid var(--line)"
                    }}
                  >
                    {c.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card: Featured Works Catalog */}
            <div className="bento-card bento-card--catalog">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h2 style={{ fontSize: "20px", margin: 0 }}>{t.featuredWorks.eyebrow}</h2>
                <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                  <span>{t.worksPage.catalogLabel}</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>

              <div className="act-works-grid" style={{ marginBottom: 0 }}>
                {featuredWorks.map((work) => {
                  const copy = getWorkCopy(work, locale);
                  return (
                    <Link className="act-work-card" href={getWorkPath(locale, work)} key={work.enTitle}>
                      <div className="act-work-card__top">
                        <span className="act-work-card__year">{work.year}</span>
                        <ArrowUpRight className="act-work-card__icon" size={17} />
                      </div>
                      <div className="act-work-card__body">
                        <h3 style={{ fontSize: "16px" }}>{copy.title}</h3>
                        <span className="act-work-card__meta">{copy.type}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bento Card: Direct Contact */}
            <div className="bento-card bento-card--contact">
              <span className="bento-tag" style={{ marginInline: "auto" }}>
                <Mail size={13} /> {t.contactPage.eyebrow}
              </span>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", margin: "8px 0 12px" }}>{t.worksPage.cta}</h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "540px", margin: "0 auto 24px" }}>
                {t.contactPage.body}
              </p>
              <a
                className="button button-primary"
                href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                style={{ marginInline: "auto" }}
              >
                <Mail size={16} />
                <span>{t.contactPage.primaryAction}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          ARCHETYPE 2: EDITORIAL LOOKBOOK (Style 7)
          ==================================================================== */}
      {activeArchetype === "editorial" && (
        <div className="editorial-wrapper" aria-label="Editorial Lookbook Portfolio">
          <div className="editorial-hero">
            <div>
              <p className="eyebrow" style={{ color: "var(--accent)" }}>{t.hero.kicker}</p>
              <h1 className="editorial-title">{t.hero.title}</h1>
              <p style={{ fontSize: "18px", color: "var(--accent)", fontWeight: 600, marginBottom: "16px" }}>
                {t.hero.role}
              </p>
              <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--muted-strong)", marginBottom: "32px" }}>
                {t.hero.lead}
              </p>

              <div style={{ display: "flex", gap: "14px" }}>
                <a
                  className="button button-primary"
                  href="https://soundcloud.com/a7mdsif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play size={16} fill="currentColor" />
                  <span>{t.hero.listen}</span>
                </a>
                <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                  <span>{t.hero.explore}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="editorial-portrait-frame">
              <Image
                src="/ahmed-saif-profile.webp"
                alt={t.hero.title}
                width={500}
                height={600}
                priority
              />
            </div>
          </div>

          <div className="editorial-quote-strip">
            <blockquote>
              &ldquo;{t.aboutPage.statement}&rdquo;
            </blockquote>
          </div>

          <div className="editorial-reel">
            <p className="eyebrow">{t.featuredWorks.eyebrow}</p>
            <h2 style={{ fontSize: "32px", margin: "10px 0" }}>{t.featuredWorks.title}</h2>
            <div className="editorial-reel-grid">
              {featuredWorks.map((work, idx) => {
                const copy = getWorkCopy(work, locale);
                return (
                  <Link href={getWorkPath(locale, work)} key={work.enTitle} className="editorial-item">
                    <span className="editorial-item-num">0{idx + 1} — {work.year}</span>
                    <h3>{copy.title}</h3>
                    <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0 }}>{copy.type} · {copy.mood}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div style={{ padding: "80px 0", textAlign: "center" }}>
            <p className="eyebrow">{t.contactPage.eyebrow}</p>
            <h2 style={{ fontSize: "32px", margin: "12px 0 24px" }}>{t.worksPage.cta}</h2>
            <a className="button button-primary" href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}>
              <Mail size={16} />
              <span>{t.contactPage.primaryAction}</span>
            </a>
          </div>
        </div>
      )}

      {/* ====================================================================
          ARCHETYPE 3: ANALOG STUDIO CONSOLE (Style 8)
          ==================================================================== */}
      {activeArchetype === "studio" && (
        <div className="studio-wrapper" aria-label="Analog Studio Console Portfolio">
          <div className="studio-console-deck">
            <div className="studio-console-header">
              <div>
                <span className="studio-led-badge">
                  <span className="studio-led-dot" /> REC · A7MD STUDIO ACTIVE
                </span>
              </div>
              <span style={{ fontSize: "13px", color: "var(--muted)", fontFamily: "monospace" }}>
                MASTER 48kHz / 24-BIT
              </span>
            </div>

            <div className="studio-console-grid">
              <div>
                <h1 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", margin: "0 0 16px" }}>{t.hero.title}</h1>
                <p style={{ fontSize: "17px", color: "var(--accent)", fontWeight: 600, margin: "0 0 14px" }}>
                  {t.hero.role}
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--muted-strong)", marginBottom: "28px" }}>
                  {t.hero.lead}
                </p>

                <div className="hero-v2__actions">
                  <a className="button button-primary" href="https://soundcloud.com/a7mdsif" target="_blank" rel="noopener noreferrer">
                    <Play size={16} fill="currentColor" />
                    <span>{t.hero.listen}</span>
                  </a>
                  <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                    <Disc3 size={16} />
                    <span>{t.hero.explore}</span>
                  </Link>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "240px", height: "240px", borderRadius: "14px", overflow: "hidden", border: "2px solid var(--accent)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                  <Image src="/ahmed-saif-profile.webp" alt={t.hero.title} width={240} height={240} priority />
                </div>
              </div>
            </div>

            {/* Decorative Studio Faders */}
            <div className="studio-fader-strip" aria-hidden="true">
              {[
                { name: "MELODY", val: "75%" },
                { name: "RHYTHM", val: "88%" },
                { name: "VOCAL", val: "92%" },
                { name: "BASS", val: "80%" },
                { name: "MASTER", val: "100%" }
              ].map((fader) => (
                <div key={fader.name} className="studio-fader-ch">
                  <div className="studio-fader-track">
                    <div className="studio-fader-thumb" style={{ bottom: fader.val }} />
                  </div>
                  <span>{fader.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="act-section" style={{ borderTop: "1px solid var(--line)", padding: "60px 0" }}>
            <p className="eyebrow">SESSION ARCHIVE</p>
            <h2 style={{ fontSize: "28px", margin: "10px 0 30px" }}>{t.featuredWorks.title}</h2>
            <div className="act-works-grid">
              {featuredWorks.map((work) => {
                const copy = getWorkCopy(work, locale);
                return (
                  <Link className="act-work-card" href={getWorkPath(locale, work)} key={work.enTitle}>
                    <div className="act-work-card__top">
                      <span className="act-work-card__year">{work.year} · TAPE</span>
                      <ArrowUpRight className="act-work-card__icon" size={17} />
                    </div>
                    <div className="act-work-card__body">
                      <h3>{copy.title}</h3>
                      <span className="act-work-card__meta">{copy.type}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          ARCHETYPE 4: LIVE STAGE HEADLINER (Style 9)
          ==================================================================== */}
      {activeArchetype === "stage" && (
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
          ARCHETYPE 5: MINIMAL AUDIO CANVAS (Style 10)
          ==================================================================== */}
      {activeArchetype === "canvas" && (
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

      {/* ====================================================================
          ARCHETYPE 0: CLASSIC REDESIGN (Styles 1, 2, 3, 4, 5)
          ==================================================================== */}
      {activeArchetype === "classic" && (
        <>
          {/* Act 1: Hero V2 */}
          <section className="hero-v2" aria-labelledby="hero-title">
            <div className="hero-v2__ambient" aria-hidden="true" />
            <div className="hero-v2__grid">
              <div className="hero-v2__copy">
                <div className="hero-v2__badge">
                  <span className="hero-v2__badge-dot" />
                  <span>{t.hero.role}</span>
                </div>

                <h1 id="hero-title" className="hero-v2__title">{t.hero.title}</h1>
                <p className="hero-v2__lead">{t.hero.lead}</p>

                <div className="hero-v2__actions">
                  <a className="button button-primary" href="https://soundcloud.com/a7mdsif" target="_blank" rel="noopener noreferrer">
                    <Play size={17} fill="currentColor" />
                    <span>{t.hero.listen}</span>
                  </a>

                  <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                    <Music2 size={17} />
                    <span>{t.hero.explore}</span>
                  </Link>
                </div>

                <div className="hero-v2__stats" aria-label={t.hero.role}>
                  {t.stats.map((stat) => (
                    <div className="hero-v2__stat-item" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-v2__visual">
                <div className="hero-v2__portrait-frame">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt={t.hero.title}
                    width={440}
                    height={440}
                    priority
                    className="hero-v2__portrait-img"
                    sizes="(max-width: 900px) 320px, 440px"
                  />
                  <div className="hero-v2__portrait-tag">
                    <span>A7MD Studio</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Act 2: Featured Works */}
          <section className="act-section" aria-labelledby="featured-title">
            <div className="act-section__inner">
              <div className="act-header">
                <p className="eyebrow">{t.featuredWorks.eyebrow}</p>
                <h2 id="featured-title">{t.featuredWorks.title}</h2>
                <p>{t.featuredWorks.body}</p>
              </div>

              <div className="act-works-grid">
                {featuredWorks.map((work) => {
                  const copy = getWorkCopy(work, locale);
                  return (
                    <Link className="act-work-card" href={getWorkPath(locale, work)} key={work.enTitle}>
                      <div className="act-work-card__top">
                        <span className="act-work-card__year">{work.year}</span>
                        <ArrowUpRight className="act-work-card__icon" size={18} />
                      </div>
                      <div className="act-work-card__body">
                        <h3>{copy.title}</h3>
                        <span className="act-work-card__meta">{copy.type} · {copy.mood}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="section-link-row">
                <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
                  <Radio size={17} />
                  <span>{t.worksPage.catalogLabel}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </section>

          {/* Act 3: Story & Craft */}
          <section className="act-section" aria-labelledby="story-title">
            <div className="act-section__inner">
              <div className="act-story-card">
                <div className="act-story-card__content">
                  <p className="eyebrow">{t.aboutPage.eyebrow}</p>
                  <h2 id="story-title">{t.aboutPage.title}</h2>
                  <p>{t.aboutPage.body}</p>
                  <blockquote className="artist-quote" style={{ marginTop: "24px" }}>
                    <p>{t.aboutPage.statement}</p>
                  </blockquote>
                  <div style={{ marginTop: "28px" }}>
                    <Link className="button button-secondary" href={getLocalePath(locale, "about")}>
                      <Sparkles size={16} />
                      <span>{t.nav.find((item) => item.page === "about")?.label}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="act-story-pillars">
                  {t.aboutPage.principles.map((principle, index) => (
                    <div className="act-story-pillar" key={principle.title}>
                      <span className="act-story-pillar__num">0{index + 1}</span>
                      <div>
                        <h4>{principle.title}</h4>
                        <p>{principle.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Act 4: Platforms & Contact */}
          <section className="act-connect" aria-labelledby="connect-title">
            <div className="act-section__inner">
              <div className="act-connect__box">
                <p className="eyebrow">{t.contactPage.eyebrow}</p>
                <h2 id="connect-title">{t.worksPage.cta}</h2>
                <p>{t.contactPage.body}</p>

                <div className="act-platforms">
                  {socialLinks
                    .filter((item) => ["soundcloud", "spotify", "appleMusic", "anghami", "youtube"].includes(item.icon))
                    .map((platform) => (
                      <a key={platform.label} href={platform.href} target="_blank" rel="noopener noreferrer" className="act-platform-link">
                        <SocialIcon name={platform.icon} size={16} />
                        <span>{platform.label}</span>
                      </a>
                    ))}
                </div>

                <a className="button button-primary" href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}>
                  <Mail size={17} />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </SiteChrome>
  );
}
