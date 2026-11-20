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
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function WorkDetailPage({ locale = "ar", work }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const copy = getWorkCopy(work, locale);
  const idx = works.findIndex((item) => item.youtubeId === work.youtubeId);
  const prev = works[idx - 1];
  const next = works[idx + 1];

  return (
    <SiteChrome locale={locale} page="works" work={work}>
      <article className="air-detail">
        <div className="air-container air-container--narrow">
          <Link className="air-inline-link" href={getLocalePath(locale, "works")}>
            {isAr ? <ArrowRight size={15} aria-hidden="true" /> : <ArrowLeft size={15} aria-hidden="true" />}
            <span>{isAr ? "العودة للأعمال" : "All works"}</span>
          </Link>

          <header className="air-detail__head">
            <span className="air-chip">
              {work.year} · {copy.type}
            </span>
            <h1 className="air-page-title">{copy.title}</h1>
            <p className="air-page-lead">{copy.note}</p>
          </header>

          <div className="air-detail__player">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={`${getYoutubeEmbedUrl(work)}?rel=0&modestbranding=1&playsinline=1`}
              title={copy.title}
            />
          </div>

          <div className="air-meta-pills">
            <div>
              <span>{isAr ? "تاريخ النشر" : "Published"}</span>
              <strong>{formatUploadDate(locale, work.uploadDate)}</strong>
            </div>
            <div>
              <span>{isAr ? "المدة" : "Duration"}</span>
              <strong>{formatDuration(work.durationSeconds)}</strong>
            </div>
            <div>
              <span>{isAr ? "التصنيف" : "Type"}</span>
              <strong>{copy.type}</strong>
            </div>
            <div>
              <span>{isAr ? "المزاج" : "Mood"}</span>
              <strong>{copy.mood}</strong>
            </div>
          </div>

          <div className="air-actions">
            <a
              className="air-btn air-btn--primary"
              href={getYoutubeWatchUrl(work)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={15} aria-hidden="true" />
              <span>{isAr ? "شاهد على يوتيوب" : "Watch on YouTube"}</span>
            </a>
            <Link className="air-btn air-btn--secondary" href={getLocalePath(locale, "contact")}>
              <Music2 size={15} aria-hidden="true" />
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>

          <nav className="air-pager" aria-label={isAr ? "التنقل بين الأعمال" : "Work navigation"}>
            {prev ? (
              <Link className="air-pager__card" href={getWorkPath(locale, prev)}>
                <span>{isAr ? "الأحدث" : "Newer"}</span>
                <strong>{getWorkCopy(prev, locale).title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link className="air-pager__card air-pager__card--end" href={getWorkPath(locale, next)}>
                <span>{isAr ? "السابق" : "Earlier"}</span>
                <strong>{getWorkCopy(next, locale).title}</strong>
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
