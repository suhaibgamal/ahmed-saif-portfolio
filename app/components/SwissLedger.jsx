"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function SwissLedger({ tracks, locale }) {
  const isAr = locale === "ar";
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [playingId, setPlayingId] = useState(null);

  const active = tracks[selectedIndex] || tracks[0];
  const isPlaying = playingId === active.youtubeId;

  function choose(idx) {
    setSelectedIndex(idx);
    setPlayingId(null);
  }

  return (
    <div className="sw-ledger-split">
      <div className="sw-ledger-table" role="tablist" aria-label={isAr ? "جدول الأعمال" : "Works ledger"}>
        <div className="sw-ledger-head" aria-hidden="true">
          <span>{isAr ? "السنة" : "Year"}</span>
          <span>{isAr ? "العمل الموسيقي" : "Title"}</span>
          <span>{isAr ? "المدة" : "Length"}</span>
        </div>

        {tracks.map((track, idx) => {
          const activeRow = idx === selectedIndex;
          return (
            <button
              key={track.youtubeId}
              type="button"
              role="tab"
              aria-selected={activeRow}
              className={`sw-ledger-row ${activeRow ? "is-active" : ""}`}
              onClick={() => choose(idx)}
            >
              <span className="sw-ledger-row__year">{track.year}</span>
              <span className="sw-ledger-row__title">
                <strong>{track.title}</strong>
                <small>
                  {track.type} · {track.mood}
                </small>
              </span>
              <span className="sw-ledger-row__dur">
                {formatDuration(track.durationSeconds)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="sw-ledger-preview">
        <div className="sw-screen">
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
              className="sw-facade"
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
              <span className="sw-facade__scrim" aria-hidden="true" />
              <span className="sw-facade__play" aria-hidden="true">
                <Play size={20} fill="currentColor" />
              </span>
            </button>
          )}
        </div>

        <div className="sw-ledger-preview__body">
          <span className="sw-tag">
            {active.year} · {active.type}
          </span>
          <h3>{active.title}</h3>
          <p>{active.note}</p>
          <Link className="sw-inline-link" href={active.href}>
            <span>{isAr ? "بطاقة العمل الكاملة" : "Open work dossier"}</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
