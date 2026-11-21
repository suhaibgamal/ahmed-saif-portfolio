"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, X } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function GalleryExhibition({ tracks, locale }) {
  const isAr = locale === "ar";
  const [activeId, setActiveId] = useState(null);

  const active = tracks.find((item) => item.youtubeId === activeId) || null;

  return (
    <div className="gal-exhibition">
      {active && (
        <div className="gal-screening" aria-live="polite">
          <div className="gal-screening__head">
            <div>
              <span className="gal-caption">
                {active.year} · {active.type}
              </span>
              <h3>{active.title}</h3>
            </div>
            <div className="gal-screening__actions">
              <Link className="gal-text-link" href={active.href}>
                <span>{isAr ? "صفحة العمل" : "Release sheet"}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <button
                type="button"
                className="gal-icon-btn"
                onClick={() => setActiveId(null)}
                aria-label={isAr ? "إغلاق العرض" : "Close screening"}
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="gal-screening__frame">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`}
              title={active.title}
            />
          </div>
          <p className="gal-screening__note">{active.note}</p>
        </div>
      )}

      <div className="gal-plates">
        {tracks.map((track) => {
          const isSelected = activeId === track.youtubeId;
          return (
            <article
              key={track.youtubeId}
              className={`gal-plate ${isSelected ? "is-active" : ""}`}
            >
              <button
                type="button"
                className="gal-plate__frame"
                onClick={() => setActiveId(track.youtubeId)}
                aria-label={isAr ? `عرض ${track.title}` : `Screen ${track.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${track.youtubeId}/hqdefault.jpg`}
                  alt={track.title}
                  loading="lazy"
                  decoding="async"
                  className="gal-silver-img"
                />
                <span className="gal-plate__play" aria-hidden="true">
                  <Play size={18} fill="currentColor" />
                </span>
              </button>

              <div className="gal-plate__meta">
                <div>
                  <span className="gal-caption">
                    {track.year} · {track.type} · {formatDuration(track.durationSeconds)}
                  </span>
                  <h3>{track.title}</h3>
                  <p>{track.mood}</p>
                </div>
                <Link
                  href={track.href}
                  className="gal-plate__link"
                  aria-label={`${isAr ? "تفاصيل" : "Details"}: ${track.title}`}
                >
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
