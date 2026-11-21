import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Globe, Mail } from "lucide-react";
import {
  content,
  getLocalePath,
  getWorkCopy,
  getWorkPath,
  socialLinks,
  works
} from "../data";
import BentoMiniPlayer from "./BentoMiniPlayer";
import SiteChrome, { SocialIcon } from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const DirectionalArrow = isAr ? ArrowLeft : ArrowRight;

  const playerWorks = [works[0], works[1], works[2], works[4]].map((work) => {
    const copy = getWorkCopy(work, locale);
    return {
      youtubeId: work.youtubeId,
      year: work.year,
      durationSeconds: work.durationSeconds,
      title: copy.title,
      type: copy.type,
      mood: copy.mood,
      href: getWorkPath(locale, work)
    };
  });

  const galleryWorks = works.slice(3, 7);
  const streaming = socialLinks.filter((s) =>
    ["youtube", "spotify", "appleMusic", "anghami", "soundcloud"].includes(s.icon)
  );

  return (
    <SiteChrome locale={locale} page="home">
      <section className="bn-section">
        <div className="bn-wrap">
          <div className="bn-mosaic">
            {/* Tile 1: Main Artist Intro (7 cols) */}
            <div className="bn-tile bn-tile--hero">
              <div>
                <span className="bn-status">
                  <span className="bn-status__dot" aria-hidden="true" />
                  {isAr ? "A7MD Studio · متاح للتعاونات الفنية" : "A7MD Studio · Open for Commissions"}
                </span>
                <h1 className="bn-hero-title">
                  {isAr
                    ? "أحمد سيف — ألحان يمنية وإنتاج استوديو متكامل."
                    : "Ahmed Saif — Yemeni melodies & modern studio craft."}
                </h1>
                <p className="bn-hero-lead">{t.hero.lead}</p>
              </div>
              <div className="bn-actions">
                <Link className="bn-btn bn-btn--primary" href={getLocalePath(locale, "works")}>
                  <span>{t.hero.explore}</span>
                  <DirectionalArrow size={15} aria-hidden="true" />
                </Link>
                <Link className="bn-btn bn-btn--soft" href={getLocalePath(locale, "contact")}>
                  <Mail size={15} aria-hidden="true" />
                  <span>{t.contactPage.primaryAction}</span>
                </Link>
              </div>
            </div>

            {/* Tile 2: Artist Portrait Card (5 cols) */}
            <figure className="bn-tile bn-tile--portrait">
              <div className="bn-portrait-box">
                <Image
                  src="/ahmed-saif-profile.webp"
                  alt={t.hero.title}
                  width={520}
                  height={520}
                  priority
                  sizes="(max-width: 900px) 100vw, 420px"
                />
              </div>
              <figcaption className="bn-portrait-cap">
                <div>
                  <strong>{t.hero.title}</strong>
                  <span>{t.hero.role}</span>
                </div>
                <span className="bn-pill">{isAr ? "صنعاء، اليمن" : "Sana'a"}</span>
              </figcaption>
            </figure>

            {/* Tile 3: Live Playable Video Tile (7 cols) */}
            <div className="bn-col-7">
              <BentoMiniPlayer tracks={playerWorks} locale={locale} />
            </div>

            {/* Tile 4: Milestone + Streaming Stack (5 cols) */}
            <div className="bn-col-5 bn-stack">
              <div className="bn-tile bn-tile--accent">
                <div className="bn-tile--accent__top">
                  <Globe size={18} aria-hidden="true" />
                  <span>{isAr ? "محطة دولية ٢٠٢٥ – ٢٠٢٦" : "Highlight 2025 – 2026"}</span>
                </div>
                <h2>
                  {isAr
                    ? "من مسرح إكسبو أوساكا باليابان إلى تتر مسلسل الضايعة"
                    : "From Expo Osaka Japan to Al-Dhayeh TV Theme"}
                </h2>
                <p>
                  {isAr
                    ? "أكثر من ١٨ إصداراً رسمياً تجمع التراث اليمني بالتوزيع المعاصر."
                    : "18+ official works bridging Yemeni musical memory with contemporary production."}
                </p>
                <Link className="bn-accent-link" href={getLocalePath(locale, "about")}>
                  <span>{isAr ? "استعرض المسيرة الكاملة" : "Explore full story"}</span>
                  <DirectionalArrow size={14} aria-hidden="true" />
                </Link>
              </div>

              <div className="bn-tile bn-tile--platforms">
                <span className="bn-label">{t.strip.label}</span>
                <div className="bn-platform-pills">
                  {streaming.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bn-platform-chip"
                    >
                      <SocialIcon name={item.icon} size={15} />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Tile 5: A7MD Studio Craft (4 cols) */}
            <div className="bn-tile bn-col-4">
              <span className="bn-label">{t.studio.eyebrow}</span>
              <h2 className="bn-tile-h2">{t.studio.title}</h2>
              <div className="bn-craft-stack">
                {t.studio.cards.map((card) => (
                  <div key={card.title} className="bn-craft-item">
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tile 6: Mini Discography Showcase (8 cols) */}
            <div className="bn-tile bn-col-8">
              <div className="bn-tile-head">
                <div>
                  <span className="bn-label">{t.featuredWorks.eyebrow}</span>
                  <h2 className="bn-tile-h2">
                    {isAr ? "مختارات من الأرشيف" : "More From The Catalog"}
                  </h2>
                </div>
                <Link className="bn-link" href={getLocalePath(locale, "works")}>
                  <span>{isAr ? "الكل (١٨)" : "All (18)"}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>

              <div className="bn-mini-grid">
                {galleryWorks.map((work) => {
                  const copy = getWorkCopy(work, locale);
                  return (
                    <Link
                      key={work.youtubeId}
                      href={getWorkPath(locale, work)}
                      className="bn-mini-card"
                    >
                      <div className="bn-mini-card__art">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg`}
                          alt={copy.title}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="bn-mini-card__meta">
                        <span>{work.year}</span>
                        <strong>{copy.title}</strong>
                        <small>{copy.mood}</small>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Tile 7: Quote Tile (5 cols) */}
            <div className="bn-tile bn-col-5 bn-quote-tile">
              <span className="bn-label">{t.credits.eyebrow}</span>
              <blockquote>“{t.aboutPage.statement}”</blockquote>
              <span>— {t.hero.title}</span>
            </div>

            {/* Tile 8: Collaboration CTA Tile (7 cols) */}
            <div className="bn-tile bn-col-7 bn-cta-tile">
              <div>
                <span className="bn-label">{t.contactPage.eyebrow}</span>
                <h2 className="bn-tile-h2">{t.contactPage.title}</h2>
                <p>{t.contactPage.body}</p>
              </div>
              <div className="bn-actions">
                <Link className="bn-btn bn-btn--primary" href={getLocalePath(locale, "contact")}>
                  <span>{t.contactPage.primaryAction}</span>
                  <DirectionalArrow size={15} aria-hidden="true" />
                </Link>
                <Link className="bn-btn bn-btn--soft" href={getLocalePath(locale, "about")}>
                  <span>{t.nav.find((n) => n.page === "about")?.label}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
