import Link from "next/link";
import { Mail, Music2 } from "lucide-react";
import { content, getLocalePath, getWorkCopy, works } from "../data";
import { SonicSeal } from "./MusicVisuals";
import SiteChrome, { emailHref } from "./SiteChrome";
import WorkVideoCatalog from "./WorkVideoCatalog";

export default function WorksPage({ locale }) {
  const t = content[locale];
  const featuredWork = works[0];
  const featuredCopy = getWorkCopy(featuredWork, locale);

  return (
    <SiteChrome locale={locale} page="works">
      <section className="page-hero page-hero--works">
        <div className="page-hero__copy">
          <p className="eyebrow">{t.worksPage.eyebrow}</p>
          <h1>{t.worksPage.title}</h1>
          <p>{t.worksPage.body}</p>
        </div>
        <div className="page-hero__visual">
          <SonicSeal label={t.worksPage.eyebrow} />
        </div>
      </section>

      <section className="section release-room">
        <article className="release-spotlight">
          <span>{t.worksPage.latestLabel}</span>
          <h2>{featuredCopy.title}</h2>
          <p>{featuredCopy.note}</p>
          <div className="release-meta">
            <strong>{featuredWork.year}</strong>
            <small>{featuredCopy.type}</small>
            <small>{featuredCopy.mood}</small>
          </div>
        </article>
        <div className="release-visual">
          <SonicSeal label={featuredCopy.title} />
        </div>
      </section>

      <WorkVideoCatalog locale={locale} tracks={works} />

      <section className="section work-cta">
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
