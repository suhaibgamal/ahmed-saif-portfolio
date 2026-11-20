"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function AppleShowcasePlayer({ tracks, locale }) {
  const isAr = locale === "ar";
  const [index, setIndex] = useState(0);
  const [playingId, setPlayingId] = useState(null);

  const active = tracks[index] || tracks[0];
  const isPlaying = playingId === active.youtubeId;

  function choose(idx) {
    setIndex(idx);
    setPlayingId(null);
  }

  return (
    <div className="air-stage-card">
      <div className="air-stage-card__video">
        {isPlaying ? (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`}
            title={active.title}
          />
        ) : (
          <button
            type="button"
            className="air-video-facade"
            onClick={() => setPlayingId(active.youtubeId)}
            aria-label={isAr ? `تشغيل ${active.title}` : `Play ${active.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${active.youtubeId}/hqdefault.jpg`}
              alt={active.title}
              loading="eager"
              decoding="async"
            />
            <span className="air-video-facade__scrim" aria-hidden="true" />
            <span className="air-video-facade__btn" aria-hidden="true">
              <Play size={22} fill="currentColor" />
            </span>
            <span className="air-video-facade__pill">
              {active.year} · {formatDuration(active.durationSeconds)}
            </span>
          </button>
        )}
      </div>

      <div className="air-stage-card__panel">
        <div className="air-stage-card__meta">
          <span className="air-chip">{active.type}</span>
          <h2>{active.title}</h2>
          <p>{active.note}</p>
          <Link className="air-inline-link" href={active.href}>
            <span>{isAr ? "تفاصيل الإصدار" : "View release"}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div
          className="air-stage-picker"
          role="tablist"
          aria-label={isAr ? "اختر عملاً للتشغيل" : "Select a release to preview"}
        >
          {tracks.map((track, idx) => (
            <button
              key={track.youtubeId}
              type="button"
              role="tab"
              aria-selected={idx === index}
              className={`air-stage-picker__item ${idx === index ? "is-active" : ""}`}
              onClick={() => choose(idx)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${track.youtubeId}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span className="air-stage-picker__copy">
                <strong>{track.title}</strong>
                <small>
                  {track.year} · {formatDuration(track.durationSeconds)}
                </small>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
