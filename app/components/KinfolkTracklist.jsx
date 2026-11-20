"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, X } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function KinfolkTracklist({ tracks, locale }) {
  const isAr = locale === "ar";
  const [openId, setOpenId] = useState(tracks[0]?.youtubeId || null);
  const [playingId, setPlayingId] = useState(null);

  function toggleRow(youtubeId) {
    if (openId === youtubeId) {
      setOpenId(null);
      setPlayingId(null);
    } else {
      setOpenId(youtubeId);
      setPlayingId(null);
    }
  }

  return (
    <div className="kin-tracklist">
      {tracks.map((track) => {
        const isOpen = openId === track.youtubeId;
        const isPlaying = playingId === track.youtubeId;
        return (
          <div
            key={track.youtubeId}
            className={`kin-track ${isOpen ? "is-open" : ""}`}
          >
            <button
              type="button"
              className="kin-track__trigger"
              onClick={() => toggleRow(track.youtubeId)}
              aria-expanded={isOpen}
            >
              <span className="kin-track__year">{track.year}</span>
              <span className="kin-track__title">
                <strong>{track.title}</strong>
                <small>
                  {track.type} — {track.mood}
                </small>
              </span>
              <span className="kin-track__right">
                <span className="kin-track__dur">
                  {formatDuration(track.durationSeconds)}
                </span>
                <span className="kin-track__badge">
                  {isOpen ? (isAr ? "إخفاء" : "Close") : isAr ? "استمع" : "Listen"}
                </span>
              </span>
            </button>

            {isOpen && (
              <div className="kin-track__panel">
                <div className="kin-track__video">
                  {isPlaying ? (
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      src={`https://www.youtube-nocookie.com/embed/${track.youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`}
                      title={track.title}
                    />
                  ) : (
                    <button
                      type="button"
                      className="kin-facade"
                      onClick={() => setPlayingId(track.youtubeId)}
                      aria-label={isAr ? `تشغيل ${track.title}` : `Play ${track.title}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://i.ytimg.com/vi/${track.youtubeId}/hqdefault.jpg`}
                        alt={track.title}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="kin-facade__scrim" aria-hidden="true" />
                      <span className="kin-facade__play" aria-hidden="true">
                        <Play size={20} fill="currentColor" />
                      </span>
                    </button>
                  )}
                </div>

                <div className="kin-track__notes">
                  <div className="kin-track__notes-top">
                    <span className="kin-eyebrow">{track.type}</span>
                    {isPlaying && (
                      <button
                        type="button"
                        className="kin-mode-btn"
                        onClick={() => setPlayingId(null)}
                        aria-label={isAr ? "إيقاف" : "Stop"}
                      >
                        <X size={14} aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  <p>{track.note}</p>
                  <Link className="kin-link" href={track.href}>
                    <span>{isAr ? "صفحة العمل الكاملة" : "Open full release"}</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
