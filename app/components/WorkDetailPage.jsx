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
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
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
      <article className="hf-section">
        <div className="hf-wrap hf-detail-stack">
          <div className="hf-chassis">
            <Link className="hf-link" href={getLocalePath(locale, "works")}>
              {isAr ? <ArrowRight size={14} aria-hidden="true" /> : <ArrowLeft size={14} aria-hidden="true" />}
              <span>{isAr ? "العودة للأرشيف" : "Back to archive"}</span>
            </Link>
            <p className="hf-kicker hf-kicker--mt">
              {work.year} · {copy.type}
            </p>
            <h1 className="hf-title">{copy.title}</h1>
            <p className="hf-lead">{copy.note}</p>
          </div>

          <div className="hf-chassis hf-chassis--screen">
            <div className="hf-deck__screen">
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

          <div className="hf-channels">
            <div className="hf-chassis hf-channel">
              <span className="hf-channel__label">{isAr ? "النشر" : "Published"}</span>
              <strong>{formatUploadDate(locale, work.uploadDate)}</strong>
            </div>
            <div className="hf-chassis hf-channel">
              <span className="hf-channel__label">{isAr ? "المدة" : "Duration"}</span>
              <strong className="hf-mono">{formatDuration(work.durationSeconds)}</strong>
            </div>
            <div className="hf-chassis hf-channel">
              <span className="hf-channel__label">{isAr ? "النوع" : "Format"}</span>
              <strong>{copy.type}</strong>
            </div>
            <div className="hf-chassis hf-channel">
              <span className="hf-channel__label">{isAr ? "الأجواء" : "Mood"}</span>
              <strong>{copy.mood}</strong>
            </div>
          </div>

          <div className="hf-actions">
            <a
              className="hf-btn hf-btn--brass"
              href={getYoutubeWatchUrl(work)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={15} aria-hidden="true" />
              <span>{isAr ? "شاهد على يوتيوب" : "Watch on YouTube"}</span>
            </a>
            <Link className="hf-btn hf-btn--metal" href={getLocalePath(locale, "contact")}>
              <Music2 size={15} aria-hidden="true" />
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>

          <nav className="hf-pager" aria-label={isAr ? "التنقل بين الأعمال" : "Work navigation"}>
            {prev ? (
              <Link className="hf-chassis hf-pager__item" href={getWorkPath(locale, prev)}>
                <span className="hf-mono hf-brass-text">{isAr ? "الأحدث" : "NEWER"}</span>
                <strong>{getWorkCopy(prev, locale).title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link className="hf-chassis hf-pager__item hf-pager__item--end" href={getWorkPath(locale, next)}>
                <span className="hf-mono hf-brass-text">{isAr ? "السابق" : "EARLIER"}</span>
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
