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
import HomeListeningTheater from "./HomeListeningTheater";
import SiteChrome, { SocialIcon } from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const DirectionalArrow = isAr ? ArrowLeft : ArrowRight;

  const featuredWorks = [works[0], works[1], works[2], works[4]].map((work) => {
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

  const listeningPlatforms = socialLinks.filter((item) =>
    ["youtube", "spotify", "appleMusic", "anghami", "soundcloud"].includes(
      item.icon
    )
  );

  return (
    <SiteChrome headerMode="overlay" locale={locale} page="home">
      {/* 1. Full-Bleed Atmospheric Oud & Stage Hero */}
      <section className="sov-hero" aria-labelledby="sov-hero-title">
        <div className="sov-hero__backdrop" aria-hidden="true">
          <Image
            src="/ahmed-saif-hero.webp"
            alt={t.heroAlt}
            fill
            priority
            sizes="100vw"
            className="sov-hero__img"
          />
          <div className="sov-hero__veil" />
        </div>

        <div className="sov-container sov-hero__content">
          <div className="sov-hero__copy">
            <p className="sov-hero__origin">
              {isAr
                ? "صنعاء · إكسبو أوساكا · A7MD Studio"
                : "Sana'a · Expo Osaka · A7MD Studio"}
            </p>
            <h1 id="sov-hero-title" className="sov-hero__title">
              {t.hero.title}
            </h1>
            <p className="sov-hero__subtitle">
              {isAr
                ? "صوتٌ يمانيّ وألحانٌ تُصاغ بهدوء الاستوديو"
                : "Yemeni Vocalist, Composer & Studio Producer"}
            </p>
            <p className="sov-hero__lead">{t.hero.lead}</p>

            <div className="action-row">
              <a className="btn btn-primary" href="#listening-room">
                <Play size={15} fill="currentColor" aria-hidden="true" />
                <span>{isAr ? "استمع للمختارات" : "Listen to repertoire"}</span>
              </a>
              <Link
                className="btn btn-outline-hero"
                href={getLocalePath(locale, "works")}
              >
                <span>{t.hero.explore}</span>
                <DirectionalArrow size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <dl className="sov-hero__ledger">
            <div>
              <dt>{isAr ? "الأرشيف الرسمي" : "Official Catalog"}</dt>
              <dd>{isAr ? "١٨ عملاً موسيقياً" : "18 Original Releases"}</dd>
            </div>
            <div>
              <dt>{isAr ? "حضور دولي" : "International Stage"}</dt>
              <dd>{isAr ? "إكسبو أوساكا ٢٠٢٥" : "Expo Osaka 2025"}</dd>
            </div>
            <div>
              <dt>{isAr ? "الإنتاج" : "Production House"}</dt>
              <dd>A7MD Studio</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2. Sovereign Listening Room (Inline Playable Repertoire) */}
      <section
        id="listening-room"
        className="sov-section sov-section--theater"
        aria-labelledby="theater-heading"
      >
        <div className="sov-container">
          <div className="sov-section-head">
            <div>
              <p className="eyebrow">{t.featuredWorks.eyebrow}</p>
              <h2 id="theater-heading" className="sov-h2">
                {t.featuredWorks.title}
              </h2>
            </div>
            <Link
              className="sov-text-link"
              href={getLocalePath(locale, "works")}
            >
              <span>{isAr ? "الأرشيف الكامل (١٨ عملاً)" : "Full archive (18 works)"}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <HomeListeningTheater tracks={featuredWorks} locale={locale} />
        </div>
      </section>

      {/* 3. Asymmetric Portrait & A7MD Studio Craft */}
      <section className="sov-section sov-section--atelier">
        <div className="sov-container">
          <div className="sov-atelier-grid">
            <figure className="sov-portrait-plate">
              <div className="sov-portrait-plate__inner">
                <Image
                  src="/ahmed-saif-profile.webp"
                  alt={t.hero.title}
                  width={560}
                  height={560}
                  sizes="(max-width: 900px) 100vw, 440px"
                  className="sov-portrait-plate__img"
                />
              </div>
              <figcaption className="sov-portrait-plate__cap">
                <span>{t.hero.title}</span>
                <span>{isAr ? "مؤسس A7MD Studio" : "Founder, A7MD Studio"}</span>
              </figcaption>
            </figure>

            <div className="sov-atelier-copy">
              <p className="eyebrow">{t.studio.eyebrow}</p>
              <h2 className="sov-h2">{t.studio.title}</h2>
              <p className="sov-body">{t.studio.body}</p>

              <blockquote className="sov-quote">
                “{t.aboutPage.statement}”
              </blockquote>

              <div className="sov-discipline-list">
                {t.studio.cards.map((item) => (
                  <div className="sov-discipline-row" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="sov-atelier-link">
                <Link
                  className="sov-text-link"
                  href={getLocalePath(locale, "about")}
                >
                  <span>
                    {isAr ? "اقرأ القصة والمسيرة الكاملة" : "Read the full story & timeline"}
                  </span>
                  <DirectionalArrow size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Streaming Platforms & Private Salon CTA */}
      <section className="sov-section sov-section--closing">
        <div className="sov-container">
          <div className="sov-closing-grid">
            <div className="sov-closing-platforms">
              <p className="eyebrow">{t.strip.label}</p>
              <h2 className="sov-h2">
                {isAr
                  ? "استمع للأعمال الرسمية على منصتك المفضلة"
                  : "Listen across official streaming platforms"}
              </h2>
              <div className="sov-platform-list">
                {listeningPlatforms.map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sov-platform-pill"
                  >
                    <SocialIcon name={platform.icon} size={16} />
                    <span>{platform.label}</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="sov-closing-cta">
              <p className="eyebrow">{t.contactPage.eyebrow}</p>
              <h2 className="sov-h3">
                {isAr
                  ? "للمشاريع الفنية، تترات المسلسلات، والتعاونات الغنائية"
                  : "For original compositions, screen scores & collaborations"}
              </h2>
              <p className="sov-body">{t.contactPage.body}</p>
              <Link
                className="btn btn-primary"
                href={getLocalePath(locale, "contact")}
              >
                <span>{t.contactPage.primaryAction}</span>
                <DirectionalArrow size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
