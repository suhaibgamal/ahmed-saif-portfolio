"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function HomeListeningTheater({ tracks, locale }) {
  const isAr = locale === "ar";
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingId, setPlayingId] = useState(null);

  const active = tracks[activeIndex] || tracks[0];
  const isPlaying = playingId === active.youtubeId;

  function selectTrack(idx) {
    setActiveIndex(idx);
    setPlayingId(null);
  }

  return (
    <div className="sov-theater">
      <div className="sov-theater__stage">
        <div className="sov-theater__frame">
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
              className="sov-theater__facade"
              onClick={() => setPlayingId(active.youtubeId)}
              aria-label={
                isAr ? `تشغيل ${active.title}` : `Play ${active.title}`
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${active.youtubeId}/hqdefault.jpg`}
                alt={active.title}
                loading="lazy"
                decoding="async"
              />
              <span className="sov-theater__veil" aria-hidden="true" />
              <span className="sov-theater__play" aria-hidden="true">
                <Play size={22} fill="currentColor" />
              </span>
              <span className="sov-theater__badge">
                {active.year} · {formatDuration(active.durationSeconds)}
              </span>
            </button>
          )}
        </div>

        <div className="sov-theater__caption">
          <div>
            <p className="sov-theater__meta">
              {active.type} · {active.mood}
            </p>
            <h3 className="sov-theater__title">{active.title}</h3>
            <p className="sov-theater__note">{active.note}</p>
          </div>
          <Link className="sov-text-link" href={active.href}>
            <span>{isAr ? "صفحة العمل الكاملة" : "Full release page"}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div
        className="sov-theater__list"
        role="tablist"
        aria-label={isAr ? "الأعمال المختارة" : "Selected works"}
      >
        {tracks.map((track, idx) => {
          const selected = idx === activeIndex;
          return (
            <button
              key={track.youtubeId}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`sov-theater__row ${selected ? "is-selected" : ""}`}
              onClick={() => selectTrack(idx)}
            >
              <span className="sov-theater__row-year">{track.year}</span>
              <span className="sov-theater__row-body">
                <strong>{track.title}</strong>
                <small>
                  {track.type} — {track.mood}
                </small>
              </span>
              <span className="sov-theater__row-dur">
                {formatDuration(track.durationSeconds)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
