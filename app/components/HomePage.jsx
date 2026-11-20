import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import {
  content,
  getLocalePath,
  getWorkCopy,
  getWorkPath,
  socialLinks,
  works
} from "../data";
import AppleShowcasePlayer from "./AppleShowcasePlayer";
import SiteChrome, { SocialIcon } from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const DirectionalArrow = isAr ? ArrowLeft : ArrowRight;

  const spotlightTracks = [works[0], works[1], works[3], works[4]].map((work) => {
    const copy = getWorkCopy(work, locale);
    return {
      youtubeId: work.youtubeId,
      year: work.year,
      durationSeconds: work.durationSeconds,
      title: copy.title,
      type: copy.type,
      note: copy.note,
      href: getWorkPath(locale, work)
    };
  });

  const shelfWorks = works.slice(0, 8);
  const streaming = socialLinks.filter((s) =>
    ["appleMusic", "spotify", "youtube", "anghami", "soundcloud"].includes(s.icon)
  );

  return (
    <SiteChrome locale={locale} page="home">
      {/* 1. Centered Airy Apple Hero + Integrated Listening Stage */}
      <section className="air-hero">
        <div className="air-container">
          <div className="air-hero__intro">
            <div className="air-artist-pill">
              <Image
                src="/ahmed-saif-profile.webp"
                alt={t.hero.title}
                width={34}
                height={34}
                priority
                className="air-artist-pill__avatar"
              />
              <span>
                {isAr
                  ? "أحمد سيف · مغنٍ وملحن يمني"
                  : "Ahmed Saif · Yemeni Singer & Composer"}
              </span>
            </div>

            <h1 className="air-hero__title">
              {isAr
                ? "موسيقى يمنية صافية، تبدأ بلحنٍ صادق."
                : "Yemeni songcraft, shaped with quiet clarity."}
            </h1>

            <p className="air-hero__lead">{t.hero.lead}</p>

            <div className="air-actions air-actions--center">
              <a className="air-btn air-btn--primary" href="#featured-stage">
                <Play size={15} fill="currentColor" aria-hidden="true" />
                <span>{isAr ? "استمع للمختارات" : "Play featured works"}</span>
              </a>
              <Link
                className="air-btn air-btn--secondary"
                href={getLocalePath(locale, "works")}
              >
                <span>{t.hero.explore}</span>
                <DirectionalArrow size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div id="featured-stage" className="air-hero__stage">
            <AppleShowcasePlayer tracks={spotlightTracks} locale={locale} />
          </div>
        </div>
      </section>

      {/* 2. Horizontal Snapping Discography Shelf */}
      <section className="air-section">
        <div className="air-container">
          <div className="air-section-head">
            <div>
              <p className="air-kicker">{t.featuredWorks.eyebrow}</p>
              <h2 className="air-h2">
                {isAr ? "مختارات الأرشيف الموسيقي" : "Selected Discography"}
              </h2>
            </div>
            <Link className="air-inline-link" href={getLocalePath(locale, "works")}>
              <span>{isAr ? "عرض كل الأعمال (١٨)" : "See all 18 works"}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="air-shelf" role="region" aria-label={t.featuredWorks.title}>
            {shelfWorks.map((work) => {
              const copy = getWorkCopy(work, locale);
              return (
                <Link
                  key={work.youtubeId}
                  href={getWorkPath(locale, work)}
                  className="air-album-card"
                >
                  <div className="air-album-card__art">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg`}
                      alt={copy.title}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="air-album-card__year">{work.year}</span>
                  </div>
                  <div className="air-album-card__meta">
                    <h3>{copy.title}</h3>
                    <p>
                      {copy.type} · {copy.mood}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Two-Column Airy Feature Panels (Sunlit Studio + Artist Milestone) */}
      <section className="air-section air-section--tinted">
        <div className="air-container">
          <div className="air-feature-pair">
            <article className="air-panel">
              <div className="air-panel__media">
                <Image
                  src="/visual-sunlit-oud.webp"
                  alt={isAr ? "استوديو أحمد سيف الصوتي" : "A7MD Acoustic Studio"}
                  width={960}
                  height={540}
                  sizes="(max-width: 900px) 100vw, 560px"
                />
              </div>
              <div className="air-panel__body">
                <p className="air-kicker">{t.studio.eyebrow}</p>
                <h3>{t.studio.title}</h3>
                <p>{t.studio.body}</p>
                <ul className="air-clean-list">
                  {t.studio.cards.map((card) => (
                    <li key={card.title}>
                      <strong>{card.title}</strong>
                      <span>{card.body}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="air-panel">
              <div className="air-panel__portrait-wrap">
                <Image
                  src="/ahmed-saif-profile.webp"
                  alt={t.hero.title}
                  width={520}
                  height={520}
                  sizes="(max-width: 900px) 100vw, 460px"
                  className="air-panel__portrait"
                />
              </div>
              <div className="air-panel__body">
                <p className="air-kicker">{t.aboutPage.eyebrow}</p>
                <h3>{t.aboutPage.statement}</h3>
                <p>{t.aboutPage.body}</p>
                <div className="air-stat-strip">
                  {t.stats.map((item) => (
                    <div key={item.value}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
                <Link className="air-inline-link" href={getLocalePath(locale, "about")}>
                  <span>{isAr ? "اقرأ القصة الكاملة" : "Read the artist story"}</span>
                  <DirectionalArrow size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Streaming Ecosystem & Calm Inquiry Banner */}
      <section className="air-section">
        <div className="air-container">
          <div className="air-banner">
            <p className="air-kicker">{t.strip.label}</p>
            <h2 className="air-h2">{t.strip.title}</h2>
            <div className="air-platform-row">
              {streaming.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="air-platform-chip"
                >
                  <SocialIcon name={item.icon} size={15} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            <div className="air-banner__divider" />
            <p className="air-banner__sub">{t.contactPage.body}</p>
            <Link
              className="air-btn air-btn--primary"
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
