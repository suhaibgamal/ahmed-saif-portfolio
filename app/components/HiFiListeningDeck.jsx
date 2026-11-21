"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

function formatDuration(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function HiFiListeningDeck({ tracks, locale }) {
  const isAr = locale === "ar";
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingId, setPlayingId] = useState(null);

  const active = tracks[activeIndex] || tracks[0];
  const isPlaying = playingId === active.youtubeId;

  function choose(idx) {
    setActiveIndex(idx);
    setPlayingId(null);
  }

  return (
    <div className="hf-deck">
      <div className="hf-deck__viewport">
        <div className="hf-deck__screen">
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
              className="hf-facade"
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
              <span className="hf-facade__scrim" aria-hidden="true" />
              <span className="hf-facade__play" aria-hidden="true">
                <Play size={20} fill="currentColor" />
              </span>
            </button>
          )}
        </div>

        <div className="hf-deck__readout">
          <div>
            <span className="hf-mono hf-brass-text">
              {active.year} · {formatDuration(active.durationSeconds)} · {active.type}
            </span>
            <h2>{active.title}</h2>
            <p>{active.note}</p>
          </div>
          <Link className="hf-link" href={active.href}>
            <span>{isAr ? "بطاقة العمل" : "Release sheet"}</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div
        className="hf-deck__selector"
        role="tablist"
        aria-label={isAr ? "قائمة المقاطع المختارة" : "Select a master track"}
      >
        <div className="hf-deck__selector-head">
          <span>{isAr ? "مسار الاستماع" : "Selected Masters"}</span>
          <span className="hf-mono">{tracks.length} {isAr ? "أعمال" : "TRACKS"}</span>
        </div>

        {tracks.map((track, idx) => {
          const selected = idx === activeIndex;
          return (
            <button
              key={track.youtubeId}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`hf-slot ${selected ? "is-selected" : ""}`}
              onClick={() => choose(idx)}
            >
              <span className="hf-slot__indicator" aria-hidden="true" />
              <span className="hf-mono hf-slot__year">{track.year}</span>
              <span className="hf-slot__copy">
                <strong>{track.title}</strong>
                <small>{track.mood}</small>
              </span>
              <span className="hf-mono hf-slot__dur">
                {formatDuration(track.durationSeconds)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
