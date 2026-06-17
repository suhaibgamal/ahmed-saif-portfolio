import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Music2, Play } from "lucide-react";
import {
  content,
  getLocalePath,
  getWorkCopy,
  getWorkPath,
  getYoutubeEmbedUrl,
  getYoutubeWatchUrl,
  works
} from "../data";
import SiteChrome from "./SiteChrome";

function formatUploadDate(locale, uploadDate) {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-YE" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(uploadDate));
}

export default function WorkDetailPage({ locale, work }) {
  const t = content[locale];
  const copy = getWorkCopy(work, locale);
  const currentIndex = works.findIndex((item) => item.youtubeId === work.youtubeId);
  const previousWork = works[currentIndex - 1];
  const nextWork = works[currentIndex + 1];
  const watchLabel = locale === "ar" ? "شاهد على يوتيوب" : "Watch on YouTube";
  const catalogLabel = locale === "ar" ? "العودة إلى الأعمال" : "Back to works";
  const publishedLabel = locale === "ar" ? "تاريخ النشر" : "Published";
  const roleLabel = locale === "ar" ? "نوع العمل" : "Work type";
  const nextLabel = locale === "ar" ? "العمل التالي" : "Next work";
  const previousLabel = locale === "ar" ? "العمل السابق" : "Previous work";

  return (
    <SiteChrome locale={locale} page="works" work={work}>
      <article className="work-detail">
        <section className="work-detail-hero">
          <div className="work-detail__copy">
            <Link className="text-link" href={getLocalePath(locale, "works")}>
              {locale === "ar" ? <ArrowRight size={17} /> : <ArrowLeft size={17} />}
              <span>{catalogLabel}</span>
            </Link>
            <p className="eyebrow">{work.year} / {copy.type}</p>
            <h1>{copy.title}</h1>
            <p>{copy.note}</p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={getYoutubeWatchUrl(work)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink aria-hidden="true" size={18} />
                <span>{watchLabel}</span>
              </a>
              <Link className="button button-secondary" href={getLocalePath(locale, "contact")}>
                <Music2 aria-hidden="true" size={18} />
                <span>{t.contactPage.primaryAction}</span>
              </Link>
            </div>
          </div>

          <div className="work-detail__player" aria-label={copy.title}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              src={`${getYoutubeEmbedUrl(work)}?rel=0&modestbranding=1&playsinline=1`}
              title={copy.title}
            />
          </div>
        </section>

        <section className="section work-detail-meta">
          <div className="work-detail-meta__item">
            <span>{publishedLabel}</span>
            <strong>{formatUploadDate(locale, work.uploadDate)}</strong>
          </div>
          <div className="work-detail-meta__item">
            <span>{roleLabel}</span>
            <strong>{copy.type}</strong>
          </div>
          <div className="work-detail-meta__item">
            <span>{locale === "ar" ? "المزاج" : "Mood"}</span>
            <strong>{copy.mood}</strong>
          </div>
        </section>

        <nav className="section work-detail-nav" aria-label={locale === "ar" ? "التنقل بين الأعمال" : "Work navigation"}>
          {previousWork ? (
            <Link href={getWorkPath(locale, previousWork)}>
              <span>{previousLabel}</span>
              <strong>{getWorkCopy(previousWork, locale).title}</strong>
            </Link>
          ) : (
            <span />
          )}

          <Link className="work-detail-nav__center" href={getLocalePath(locale, "works")}>
            <Play aria-hidden="true" size={16} fill="currentColor" />
            <span>{t.worksPage.catalogLabel}</span>
          </Link>

          {nextWork ? (
            <Link href={getWorkPath(locale, nextWork)}>
              <span>{nextLabel}</span>
              <strong>{getWorkCopy(nextWork, locale).title}</strong>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </SiteChrome>
  );
}
