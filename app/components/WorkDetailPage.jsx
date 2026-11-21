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
      <article className="sym-detail">
        <div className="sym-wrap sym-wrap--narrow">
          <Link className="sym-link" href={getLocalePath(locale, "works")}>
            {isAr ? <ArrowRight size={14} aria-hidden="true" /> : <ArrowLeft size={14} aria-hidden="true" />}
            <span>{isAr ? "العودة للبرنامج" : "Back to repertoire"}</span>
          </Link>

          <header className="sym-detail__head">
            <p className="sym-kicker">
              {work.year} · {copy.type}
            </p>
            <h1 className="sym-page-title">{copy.title}</h1>
            <p className="sym-page-lead">{copy.note}</p>
          </header>

          <div className="sym-stage-box__screen sym-detail__screen">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={`${getYoutubeEmbedUrl(work)}?rel=0&modestbranding=1&playsinline=1`}
              title={copy.title}
            />
          </div>

          <dl className="sym-specs">
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

          <div className="sym-actions">
            <a
              className="sym-btn sym-btn--gold"
              href={getYoutubeWatchUrl(work)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={15} aria-hidden="true" />
              <span>{isAr ? "شاهد على يوتيوب" : "Watch on YouTube"}</span>
            </a>
            <Link className="sym-btn sym-btn--outline" href={getLocalePath(locale, "contact")}>
              <Music2 size={15} aria-hidden="true" />
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>

          <nav className="sym-pager" aria-label={isAr ? "التنقل بين الأعمال" : "Work navigation"}>
            {prev ? (
              <Link className="sym-pager__item" href={getWorkPath(locale, prev)}>
                <span>{isAr ? "الأحدث" : "Newer"}</span>
                <strong>{getWorkCopy(prev, locale).title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link className="sym-pager__item sym-pager__item--end" href={getWorkPath(locale, next)}>
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
