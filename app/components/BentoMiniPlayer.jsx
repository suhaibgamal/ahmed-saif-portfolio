"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function BentoMiniPlayer({ tracks, locale }) {
  const isAr = locale === "ar";
  const [index, setIndex] = useState(0);
  const [playingId, setPlayingId] = useState(null);

  const active = tracks[index] || tracks[0];
  const isPlaying = playingId === active.youtubeId;

  function step(delta) {
    setPlayingId(null);
    setIndex((prev) => (prev + delta + tracks.length) % tracks.length);
  }

  return (
    <div className="bn-tile bn-player-tile">
      <div className="bn-player-tile__top">
        <span className="bn-pill">
          {active.year} · {active.type}
        </span>
        <div className="bn-stepper">
          <button
            type="button"
            className="bn-icon-btn"
            onClick={() => step(-1)}
            aria-label={isAr ? "العمل السابق" : "Previous track"}
          >
            {isAr ? <ChevronRight size={15} aria-hidden="true" /> : <ChevronLeft size={15} aria-hidden="true" />}
          </button>
          <span className="bn-stepper__count">
            {index + 1} / {tracks.length}
          </span>
          <button
            type="button"
            className="bn-icon-btn"
            onClick={() => step(1)}
            aria-label={isAr ? "العمل التالي" : "Next track"}
          >
            {isAr ? <ChevronLeft size={15} aria-hidden="true" /> : <ChevronRight size={15} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className="bn-video-box">
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
            className="bn-facade"
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
            <span className="bn-facade__scrim" aria-hidden="true" />
            <span className="bn-facade__play" aria-hidden="true">
              <Play size={20} fill="currentColor" />
            </span>
            <span className="bn-facade__dur">
              {formatDuration(active.durationSeconds)}
            </span>
          </button>
        )}
      </div>

      <div className="bn-player-tile__foot">
        <div>
          <h2>{active.title}</h2>
          <p>{active.mood}</p>
        </div>
        <Link className="bn-link" href={active.href}>
          <span>{isAr ? "التفاصيل" : "Details"}</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
