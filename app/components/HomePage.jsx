import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  AudioLines,
  Drum,
  Handshake,
  Headphones,
  Mail,
  Music2,
  Music4,
  Play,
  Radio,
  SlidersHorizontal
} from "lucide-react";
import {
  content,
  getLocalePath,
  getWorkCopy,
  getWorkPath,
  works
} from "../data";
import { MeterStack, SonicSeal, StaffLines, Waveform } from "./MusicVisuals";
import SiteChrome, { emailHref, OutboundIcon } from "./SiteChrome";

export default function HomePage({ locale }) {
  const t = content[locale];
  const featuredWorks = works.slice(0, 4);

  return (
    <SiteChrome headerMode="overlay" locale={locale} page="home">
      <section className="hero hero--cinematic" aria-labelledby="hero-title">
        <Image
          src="/ahmed-saif-hero.webp"
          alt={t.heroAlt}
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />
        <div className="hero-shade" aria-hidden="true" />
        <StaffLines />

        <div className="hero-content">
          <p className="eyebrow">{t.hero.kicker}</p>
          <h1 id="hero-title">{t.hero.title}</h1>
          <p className="role">{t.hero.role}</p>
          <p className="lead">{t.hero.lead}</p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://soundcloud.com/a7mdsif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play aria-hidden="true" size={18} fill="currentColor" />
              <span>{t.hero.listen}</span>
            </a>
            <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
              <Music2 aria-hidden="true" size={18} />
              <span>{t.hero.explore}</span>
            </Link>
          </div>

          <ul className="signal-list" aria-label={t.hero.role}>
            {t.stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero-instrument" aria-label={t.hero.tag}>
          <SonicSeal label={t.hero.tag} />
          <div className="hero-tag">
            <span>{t.hero.tag}</span>
            <Waveform dense />
          </div>
        </aside>
      </section>

      <section className="platform-strip" aria-label={t.strip.label}>
        <div className="strip-heading">
          <span>{t.strip.label}</span>
          <strong>{t.strip.title}</strong>
        </div>
        <Waveform />
        <a
          className="strip-link"
          href="https://soundcloud.com/a7mdsif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Headphones aria-hidden="true" size={18} />
          <span>{t.strip.action}</span>
          <OutboundIcon label={t.external} />
        </a>
      </section>

      <section className="section studio-brand-section" aria-labelledby="studio-brand-title">
        <div className="studio-brand__visual">
          <Image
            src="/favicon.webp"
            alt=""
            width={132}
            height={46}
            sizes="132px"
            className="studio-brand__logo"
          />
          <strong>A7MD Studio</strong>
          <span>{t.brandLine}</span>
        </div>

        <div className="studio-brand__copy">
          <p className="eyebrow">{t.studio.eyebrow}</p>
          <h2 id="studio-brand-title">{t.studio.title}</h2>
          <p>{t.studio.body}</p>
          <div className="studio-card-grid">
            {t.studio.cards.map((card, index) => {
              const Icon = index === 0 ? AudioLines : index === 1 ? Drum : Music4;

              return (
                <article className="studio-card" key={card.title}>
                  <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section studio-section" aria-labelledby="studio-title">
        <div className="section-heading">
          <p className="eyebrow">{t.console.eyebrow}</p>
          <h2 id="studio-title">{t.console.title}</h2>
          <p>{t.console.body}</p>
        </div>

        <div className="studio-console">
          <div className="console-copy">
            <SlidersHorizontal aria-hidden="true" size={28} />
            <h3>{t.signature.title}</h3>
            <p>{t.signature.body}</p>
          </div>
          <MeterStack channels={t.console.channels} />
        </div>
      </section>

      <section className="section works-feature" aria-labelledby="featured-title">
        <div className="section-heading">
          <p className="eyebrow">{t.featuredWorks.eyebrow}</p>
          <h2 id="featured-title">{t.featuredWorks.title}</h2>
          <p>{t.featuredWorks.body}</p>
        </div>

        <div className="track-grid">
          {featuredWorks.map((work, index) => {
            const copy = getWorkCopy(work, locale);

            return (
              <Link
                className="track-card"
                href={getWorkPath(locale, work)}
                key={work.enTitle}
              >
                <span className="track-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p>{copy.mood}</p>
                  <h3>{copy.title}</h3>
                  <span>{copy.type}</span>
                </div>
                <ArrowUpRight aria-hidden="true" size={19} />
              </Link>
            );
          })}
        </div>

        <div className="section-link-row">
          <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
            <Radio aria-hidden="true" size={18} />
            <span>{t.nav.find((item) => item.page === "works")?.label}</span>
          </Link>
        </div>
      </section>

      <section className="section signature-section" aria-labelledby="signature-title">
        <div className="signature-copy">
          <p className="eyebrow">{t.signature.eyebrow}</p>
          <h2 id="signature-title">{t.signature.title}</h2>
          <p>{t.signature.body}</p>
        </div>
        <div className="signature-score">
          {t.signature.layers.map((layer, index) => (
            <div className="score-line" key={layer}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{layer}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section credits-section" aria-labelledby="credits-title">
        <div className="section-heading compact">
          <p className="eyebrow">{t.credits.eyebrow}</p>
          <h2 id="credits-title">{t.credits.title}</h2>
          <p>{t.credits.body}</p>
        </div>
        <div className="credit-grid">
          {t.credits.items.map((item, index) => {
            const Icon = index === 0 ? Music4 : index === 1 ? AudioLines : Handshake;

            return (
              <article className="credit-card" key={item.title}>
                <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section site-map-section" aria-labelledby="pages-title">
        <div className="section-heading">
          <p className="eyebrow">{t.pageCards.eyebrow}</p>
          <h2 id="pages-title">{t.pageCards.title}</h2>
          <p>{t.pageCards.body}</p>
        </div>
        <div className="page-card-grid">
          {t.pageCards.items.map((item) => (
            <Link
              className="page-card"
              href={getLocalePath(locale, item.page)}
              key={item.page}
            >
              <span>{item.title}</span>
              <p>{item.body}</p>
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="section home-contact">
        <div>
          <p className="eyebrow">{t.contactPage.eyebrow}</p>
          <h2>{t.worksPage.cta}</h2>
        </div>
        <a
          className="button button-primary"
          href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
        >
          <Mail aria-hidden="true" size={18} />
          <span>{t.contactPage.primaryAction}</span>
        </a>
      </section>
    </SiteChrome>
  );
}
