import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote, Radio, Sparkles } from "lucide-react";
import { content, getLocalePath } from "../data";
import { MeterStack, StaffLines } from "./MusicVisuals";
import SiteChrome from "./SiteChrome";

export default function AboutPage({ locale }) {
  const t = content[locale];

  return (
    <SiteChrome locale={locale} page="about">
      <section className="page-hero page-hero--story">
        <Image
          src="/ahmed-saif-hero.webp"
          alt=""
          fill
          priority
          className="page-hero-bg"
          sizes="100vw"
        />
        <StaffLines />
        <div className="page-hero__copy">
          <p className="eyebrow">{t.aboutPage.eyebrow}</p>
          <h1>{t.aboutPage.title}</h1>
          <p>{t.aboutPage.body}</p>
        </div>
        <blockquote className="artist-quote">
          <Quote aria-hidden="true" size={28} />
          <p>{t.aboutPage.statement}</p>
        </blockquote>
      </section>

      <section className="section story-section">
        <div className="story-copy">
          <p className="eyebrow">{t.signature.eyebrow}</p>
          <h2>{t.signature.title}</h2>
          <p>{t.signature.body}</p>
        </div>
        <MeterStack channels={t.console.channels} />
      </section>

      <section className="section principles-section" aria-label={t.aboutPage.eyebrow}>
        {t.aboutPage.principles.map((principle, index) => {
          const Icon = index === 0 ? Radio : index === 1 ? ArrowUpRight : Sparkles;

          return (
            <article className="principle-card" key={principle.title}>
              <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
              <h2>{principle.title}</h2>
              <p>{principle.body}</p>
            </article>
          );
        })}
      </section>

      <section className="section timeline-section" aria-label={t.signature.title}>
        <div className="section-heading compact">
          <p className="eyebrow">{t.nav.find((item) => item.page === "about")?.label}</p>
          <h2>{t.pageCards.items.find((item) => item.page === "about")?.body}</h2>
        </div>
        <div className="timeline timeline--long">
          {t.timeline.map((item) => (
            <div className="timeline-item" key={item.year}>
              <time>{item.year}</time>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section work-cta">
        <h2>{t.pageCards.items.find((item) => item.page === "works")?.body}</h2>
        <Link className="button button-primary" href={getLocalePath(locale, "works")}>
          <span>{t.nav.find((item) => item.page === "works")?.label}</span>
          <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </SiteChrome>
  );
}
