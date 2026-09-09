import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Headphones,
  Mail,
  Music2,
  Play,
  Radio,
  Sparkles
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

export default function HomePage({ locale }) {
  const t = content[locale];
  const featuredWorks = works.slice(0, 4);

  return (
    <SiteChrome headerMode="solid" locale={locale} page="home">
      {/* ================================================================
          ACT 1: HERO WITH PORTRAIT & 1ST-PERSON ARTIST VOICE
          ================================================================ */}
      <section className="hero-v2" aria-labelledby="hero-title">
        <div className="hero-v2__ambient" aria-hidden="true" />
        <div className="hero-v2__grid">
          <div className="hero-v2__copy">
            <div className="hero-v2__badge">
              <span className="hero-v2__badge-dot" />
              <span>{t.hero.role}</span>
            </div>

            <h1 id="hero-title" className="hero-v2__title">
              {t.hero.title}
            </h1>

            <p className="hero-v2__lead">{t.hero.lead}</p>

            <div className="hero-v2__actions">
              <a
                className="button button-primary"
                href="https://soundcloud.com/a7mdsif"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play aria-hidden="true" size={17} fill="currentColor" />
                <span>{t.hero.listen}</span>
              </a>

              <Link
                className="button button-secondary"
                href={getLocalePath(locale, "works")}
              >
                <Music2 aria-hidden="true" size={17} />
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

      {/* ================================================================
          ACT 2: FEATURED WORKS & LIVING DISCOGRAPHY
          ================================================================ */}
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
                <Link
                  className="act-work-card"
                  href={getWorkPath(locale, work)}
                  key={work.enTitle}
                >
                  <div className="act-work-card__top">
                    <span className="act-work-card__year">{work.year}</span>
                    <ArrowUpRight
                      className="act-work-card__icon"
                      aria-hidden="true"
                      size={18}
                    />
                  </div>

                  <div className="act-work-card__body">
                    <h3>{copy.title}</h3>
                    <span className="act-work-card__meta">
                      {copy.type} · {copy.mood}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="section-link-row">
            <Link
              className="button button-secondary"
              href={getLocalePath(locale, "works")}
            >
              <Radio aria-hidden="true" size={17} />
              <span>{t.worksPage.catalogLabel}</span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          ACT 3: UNIFIED ARTIST STORY & A7MD STUDIO CRAFT
          ================================================================ */}
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
                <Link
                  className="button button-secondary"
                  href={getLocalePath(locale, "about")}
                >
                  <Sparkles aria-hidden="true" size={16} />
                  <span>{t.nav.find((item) => item.page === "about")?.label}</span>
                  <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </div>

            <div className="act-story-pillars">
              {t.aboutPage.principles.map((principle, index) => (
                <div className="act-story-pillar" key={principle.title}>
                  <span className="act-story-pillar__num">
                    0{index + 1}
                  </span>
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

      {/* ================================================================
          ACT 4: PLATFORMS PRESENCE & DIRECT COLLABORATION
          ================================================================ */}
      <section className="act-connect" aria-labelledby="connect-title">
        <div className="act-section__inner">
          <div className="act-connect__box">
            <p className="eyebrow">{t.contactPage.eyebrow}</p>
            <h2 id="connect-title">{t.worksPage.cta}</h2>
            <p>{t.contactPage.body}</p>

            <div className="act-platforms" aria-label={t.strip.label}>
              {socialLinks
                .filter((item) =>
                  ["soundcloud", "spotify", "appleMusic", "anghami", "youtube"].includes(
                    item.icon
                  )
                )
                .map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="act-platform-link"
                  >
                    <SocialIcon name={platform.icon} size={16} />
                    <span>{platform.label}</span>
                  </a>
                ))}
            </div>

            <a
              className="button button-primary"
              href={emailHref(
                t.contactPage.primaryEmail,
                t.contactPage.subject
              )}
            >
              <Mail aria-hidden="true" size={17} />
              <span>{t.contactPage.primaryAction}</span>
            </a>
          </div>
        </div>
      </section>

    </SiteChrome>
  );
}
