"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function EditorialLookbook({ tracks, locale }) {
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
    <div className="ed-lookbook">
      <div className="ed-folio-stage">
        <div className="ed-folio-stage__video">
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
              className="ed-facade"
              onClick={() => setPlayingId(active.youtubeId)}
              aria-label={isAr ? `تشغيل ${active.title}` : `Play ${active.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${active.youtubeId}/hqdefault.jpg`}
                alt={active.title}
                loading="lazy"
                decoding="async"
              />
              <span className="ed-facade__scrim" aria-hidden="true" />
              <span className="ed-facade__play" aria-hidden="true">
                <Play size={20} fill="currentColor" />
              </span>
            </button>
          )}
        </div>

        <div className="ed-folio-stage__meta">
          <p className="ed-kicker">
            {active.year} · {active.type} · {formatDuration(active.durationSeconds)}
          </p>
          <h3>{active.title}</h3>
          <p>{active.note}</p>
          <Link className="ed-link" href={active.href}>
            <span>{isAr ? "اقرأ بطاقة العمل" : "Read release folio"}</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div
        className="ed-lookbook-strip"
        role="tablist"
        aria-label={isAr ? "الأعمال المختارة" : "Featured releases"}
      >
        {tracks.map((track, idx) => (
          <button
            key={track.youtubeId}
            type="button"
            role="tab"
            aria-selected={idx === index}
            className={`ed-lookbook-card ${idx === index ? "is-active" : ""}`}
            onClick={() => choose(idx)}
          >
            <span className="ed-lookbook-card__img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${track.youtubeId}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="ed-lookbook-card__year">
              {track.year} · {track.type}
            </span>
            <strong>{track.title}</strong>
            <small>{track.mood}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
