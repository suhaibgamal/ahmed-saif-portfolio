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
      <article className="bn-section">
        <div className="bn-wrap bn-detail-stack">
          <div className="bn-tile bn-page-banner">
            <Link className="bn-link" href={getLocalePath(locale, "works")}>
              {isAr ? <ArrowRight size={14} aria-hidden="true" /> : <ArrowLeft size={14} aria-hidden="true" />}
              <span>{isAr ? "العودة للأعمال" : "Back to works"}</span>
            </Link>
            <span className="bn-pill">
              {work.year} · {copy.type}
            </span>
            <h1 className="bn-hero-title">{copy.title}</h1>
            <p className="bn-hero-lead">{copy.note}</p>
          </div>

          <div className="bn-tile bn-detail-player-tile">
            <div className="bn-video-box">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                src={`${getYoutubeEmbedUrl(work)}?rel=0&modestbranding=1&playsinline=1`}
                title={copy.title}
              />
            </div>
          </div>

          <div className="bn-meta-tiles">
            <div className="bn-tile">
              <span className="bn-label">{isAr ? "تاريخ النشر" : "Published"}</span>
              <strong>{formatUploadDate(locale, work.uploadDate)}</strong>
            </div>
            <div className="bn-tile">
              <span className="bn-label">{isAr ? "المدة" : "Duration"}</span>
              <strong>{formatDuration(work.durationSeconds)}</strong>
            </div>
            <div className="bn-tile">
              <span className="bn-label">{isAr ? "التصنيف" : "Format"}</span>
              <strong>{copy.type}</strong>
            </div>
            <div className="bn-tile">
              <span className="bn-label">{isAr ? "المزاج" : "Mood"}</span>
              <strong>{copy.mood}</strong>
            </div>
          </div>

          <div className="bn-actions">
            <a
              className="bn-btn bn-btn--primary"
              href={getYoutubeWatchUrl(work)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={15} aria-hidden="true" />
              <span>{isAr ? "شاهد على يوتيوب" : "Watch on YouTube"}</span>
            </a>
            <Link className="bn-btn bn-btn--soft" href={getLocalePath(locale, "contact")}>
              <Music2 size={15} aria-hidden="true" />
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>

          <nav className="bn-pager" aria-label={isAr ? "التنقل بين الأعمال" : "Work navigation"}>
            {prev ? (
              <Link className="bn-tile bn-pager__tile" href={getWorkPath(locale, prev)}>
                <span className="bn-label">{isAr ? "الأحدث" : "Newer"}</span>
                <strong>{getWorkCopy(prev, locale).title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link className="bn-tile bn-pager__tile bn-pager__tile--end" href={getWorkPath(locale, next)}>
                <span className="bn-label">{isAr ? "السابق" : "Earlier"}</span>
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
