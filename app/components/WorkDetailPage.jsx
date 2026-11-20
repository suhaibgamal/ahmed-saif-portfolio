import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Music2 } from "lucide-react";
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

function formatDuration(seconds) {
  const total = Number(seconds);
  if (!Number.isFinite(total) || total <= 0) return "—";
  const m = Math.floor(total / 60);
  const s = String(total % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function WorkDetailPage({ locale = "ar", work }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const copy = getWorkCopy(work, locale);
  const currentIndex = works.findIndex(
    (item) => item.youtubeId === work.youtubeId
  );
  const previousWork = works[currentIndex - 1];
  const nextWork = works[currentIndex + 1];

  return (
    <SiteChrome locale={locale} page="works" work={work}>
      <article className="sov-detail">
        <div className="sov-container">
          <div className="sov-detail__back">
            <Link
              className="sov-text-link"
              href={getLocalePath(locale, "works")}
            >
              {isAr ? (
                <ArrowRight size={15} aria-hidden="true" />
              ) : (
                <ArrowLeft size={15} aria-hidden="true" />
              )}
              <span>{isAr ? "العودة إلى الأرشيف" : "Back to works"}</span>
            </Link>
          </div>

          <header className="sov-detail__header">
            <p className="eyebrow">
              {work.year} · {copy.type}
            </p>
            <h1 className="sov-page-title">{copy.title}</h1>
            <p className="sov-page-lead">{copy.note}</p>
          </header>

          <div className="sov-detail__stage" aria-label={copy.title}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={`${getYoutubeEmbedUrl(work)}?rel=0&modestbranding=1&playsinline=1`}
              title={copy.title}
            />
          </div>

          <dl className="sov-detail__ledger">
            <div>
              <dt>{isAr ? "تاريخ النشر" : "Published"}</dt>
              <dd>{formatUploadDate(locale, work.uploadDate)}</dd>
            </div>
            <div>
              <dt>{isAr ? "المدة" : "Duration"}</dt>
              <dd>{formatDuration(work.durationSeconds)}</dd>
            </div>
            <div>
              <dt>{isAr ? "التصنيف" : "Format"}</dt>
              <dd>{copy.type}</dd>
            </div>
            <div>
              <dt>{isAr ? "الأجواء" : "Atmosphere"}</dt>
              <dd>{copy.mood}</dd>
            </div>
          </dl>

          <div className="action-row sov-detail__actions">
            <a
              className="btn btn-primary"
              href={getYoutubeWatchUrl(work)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={15} aria-hidden="true" />
              <span>{isAr ? "شاهد على يوتيوب" : "Watch on YouTube"}</span>
            </a>
            <Link
              className="btn btn-ghost"
              href={getLocalePath(locale, "contact")}
            >
              <Music2 size={15} aria-hidden="true" />
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>

          <nav
            className="sov-detail__pager"
            aria-label={isAr ? "التنقل بين الأعمال" : "Work navigation"}
          >
            {previousWork ? (
              <Link
                className="sov-pager-link"
                href={getWorkPath(locale, previousWork)}
              >
                <span>{isAr ? "العمل الأحدث" : "Newer release"}</span>
                <strong>{getWorkCopy(previousWork, locale).title}</strong>
              </Link>
            ) : (
              <span />
            )}

            {nextWork ? (
              <Link
                className="sov-pager-link sov-pager-link--end"
                href={getWorkPath(locale, nextWork)}
              >
                <span>{isAr ? "العمل السابق" : "Earlier release"}</span>
                <strong>{getWorkCopy(nextWork, locale).title}</strong>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </article>
    </SiteChrome>
  );
}
