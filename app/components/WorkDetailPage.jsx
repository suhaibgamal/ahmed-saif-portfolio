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
      <article className="ed-detail">
        <div className="ed-wrap ed-wrap--narrow">
          <Link className="ed-link" href={getLocalePath(locale, "works")}>
            {isAr ? <ArrowRight size={14} aria-hidden="true" /> : <ArrowLeft size={14} aria-hidden="true" />}
            <span>{isAr ? "العودة للفهرس" : "Back to catalogue"}</span>
          </Link>

          <header className="ed-detail__head">
            <p className="ed-kicker">
              {work.year} · {copy.type}
            </p>
            <h1 className="ed-page-title">{copy.title}</h1>
            <p className="ed-cover__deck">{copy.note}</p>
          </header>

          <div className="ed-folio-stage__video ed-detail__video">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={`${getYoutubeEmbedUrl(work)}?rel=0&modestbranding=1&playsinline=1`}
              title={copy.title}
            />
          </div>

          <dl className="ed-colophon-specs">
            <div>
              <dt>{isAr ? "تاريخ النشر" : "Published"}</dt>
              <dd>{formatUploadDate(locale, work.uploadDate)}</dd>
            </div>
            <div>
              <dt>{isAr ? "المدة" : "Duration"}</dt>
              <dd>{formatDuration(work.durationSeconds)}</dd>
            </div>
            <div>
              <dt>{isAr ? "النوع" : "Format"}</dt>
              <dd>{copy.type}</dd>
            </div>
            <div>
              <dt>{isAr ? "الأجواء" : "Mood"}</dt>
              <dd>{copy.mood}</dd>
            </div>
          </dl>

          <div className="ed-actions">
            <a
              className="ed-btn ed-btn--primary"
              href={getYoutubeWatchUrl(work)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={15} aria-hidden="true" />
              <span>{isAr ? "شاهد على يوتيوب" : "Watch on YouTube"}</span>
            </a>
            <Link className="ed-btn ed-btn--outline" href={getLocalePath(locale, "contact")}>
              <Music2 size={15} aria-hidden="true" />
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>

          <nav className="ed-pager" aria-label={isAr ? "التنقل بين الأعمال" : "Work navigation"}>
            {prev ? (
              <Link className="ed-pager__item" href={getWorkPath(locale, prev)}>
                <span>{isAr ? "الأحدث" : "Newer"}</span>
                <strong>{getWorkCopy(prev, locale).title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link className="ed-pager__item ed-pager__item--end" href={getWorkPath(locale, next)}>
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
