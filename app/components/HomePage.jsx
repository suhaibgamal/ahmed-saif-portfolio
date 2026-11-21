import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  content,
  getLocalePath,
  getWorkCopy,
  getWorkPath,
  socialLinks,
  works
} from "../data";
import GalleryExhibition from "./GalleryExhibition";
import SiteChrome, { SocialIcon } from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const DirectionalArrow = isAr ? ArrowLeft : ArrowRight;

  const exhibitionWorks = [works[0], works[1], works[4], works[5]].map((work) => {
    const copy = getWorkCopy(work, locale);
    return {
      youtubeId: work.youtubeId,
      year: work.year,
      durationSeconds: work.durationSeconds,
      title: copy.title,
      type: copy.type,
      mood: copy.mood,
      note: copy.note,
      href: getWorkPath(locale, work)
    };
  });

  const streaming = socialLinks.filter((s) =>
    ["youtube", "spotify", "appleMusic", "anghami", "soundcloud"].includes(s.icon)
  );

  return (
    <SiteChrome locale={locale} page="home">
      {/* 1. Monumental Poster Opening & Silver-Gelatin Portrait */}
      <section className="gal-hero">
        <div className="gal-wrap">
          <div className="gal-poster-head">
            <p className="gal-caption">
              {isAr
                ? "معرض الصوت والذاكرة · ٢٠٢٠ – ٢٠٢٦"
                : "Sound & Memory Monograph · 2020 – 2026"}
            </p>
            <h1 className="gal-poster-title">{t.hero.title}</h1>
          </div>

          <div className="gal-hero-split">
            <div className="gal-hero-copy">
              <p className="gal-hero-role">{t.hero.role}</p>
              <p className="gal-lead">{t.hero.lead}</p>
              <div className="gal-actions">
                <a className="gal-btn gal-btn--solid" href="#exhibition">
                  <span>{isAr ? "ادخل قاعة العرض" : "Enter screening room"}</span>
                  <DirectionalArrow size={15} aria-hidden="true" />
                </a>
                <Link
                  className="gal-btn gal-btn--line"
                  href={getLocalePath(locale, "works")}
                >
                  <span>{t.hero.explore}</span>
                </Link>
              </div>

              <dl className="gal-metrics">
                {t.stats.map((stat) => (
                  <div key={stat.value}>
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure className="gal-portrait-frame">
              <Image
                src="/ahmed-saif-profile.webp"
                alt={t.hero.title}
                width={560}
                height={620}
                priority
                sizes="(max-width: 900px) 100vw, 44vw"
                className="gal-silver-img"
              />
              <figcaption>
                <span>{t.hero.title}</span>
                <span>{isAr ? "صنعاء · A7MD Studio" : "Sana'a · A7MD Studio"}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 2. Exhibition Screening Room (2x2 Silver-to-Color Plates) */}
      <section className="gal-section" id="exhibition">
        <div className="gal-wrap">
          <div className="gal-section-head">
            <div>
              <p className="gal-caption">{t.featuredWorks.eyebrow}</p>
              <h2 className="gal-h2">{t.featuredWorks.title}</h2>
            </div>
            <Link className="gal-text-link" href={getLocalePath(locale, "works")}>
              <span>{isAr ? "الأرشيف الكامل (١٨)" : "Full archive (18)"}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <GalleryExhibition tracks={exhibitionWorks} locale={locale} />
        </div>
      </section>

      {/* 3. Sculptural Statement & Wide Monochrome Oud Interlude */}
      <section className="gal-section gal-section--plinth">
        <div className="gal-wrap">
          <blockquote className="gal-statement">
            “{t.aboutPage.statement}”
          </blockquote>

          <figure className="gal-wide-plate">
            <Image
              src="/ahmed-saif-hero.webp"
              alt={t.heroAlt}
              width={1600}
              height={760}
              sizes="(max-width: 900px) 100vw, 1180px"
              className="gal-silver-img"
            />
          </figure>

          <div className="gal-studio-notes">
            {t.studio.cards.map((card) => (
              <div className="gal-studio-note" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Listening Directory & Gallery Representation */}
      <section className="gal-section">
        <div className="gal-wrap gal-closing">
          <div>
            <p className="gal-caption">{t.strip.label}</p>
            <h2 className="gal-h2">{t.strip.title}</h2>
            <div className="gal-platforms">
              {streaming.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gal-platform-item"
                >
                  <SocialIcon name={item.icon} size={15} />
                  <span>{item.label}</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="gal-closing__panel">
            <p className="gal-caption">{t.contactPage.eyebrow}</p>
            <h3>{t.contactPage.title}</h3>
            <p>{t.contactPage.body}</p>
            <Link
              className="gal-btn gal-btn--solid"
              href={getLocalePath(locale, "contact")}
            >
              <span>{t.contactPage.primaryAction}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
