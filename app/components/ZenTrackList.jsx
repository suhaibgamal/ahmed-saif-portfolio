"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function ZenTrackList({ tracks, locale }) {
  const isAr = locale === "ar";
  const [openId, setOpenId] = useState(null);
  const [playingId, setPlayingId] = useState(null);

  function toggle(id) {
    if (openId === id) {
      setOpenId(null);
      setPlayingId(null);
    } else {
      setOpenId(id);
      setPlayingId(null);
    }
  }

  return (
    <div className="zn-tracks">
      {tracks.map((track) => {
        const isOpen = openId === track.youtubeId;
        const isPlaying = playingId === track.youtubeId;

        return (
          <div
            key={track.youtubeId}
            className={`zn-track ${isOpen ? "is-open" : ""}`}
          >
            <button
              type="button"
              className="zn-track__row"
              onClick={() => toggle(track.youtubeId)}
              aria-expanded={isOpen}
            >
              <span className="zn-track__year">{track.year}</span>
              <span className="zn-track__title">
                <strong>{track.title}</strong>
                <small>
                  {track.type} · {track.mood}
                </small>
              </span>
              <span className="zn-track__dur">
                {formatDuration(track.durationSeconds)}
              </span>
            </button>

            {isOpen && (
              <div className="zn-track__drawer">
                <div className="zn-frame">
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
                      className="zn-facade"
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
                      <span className="zn-facade__scrim" aria-hidden="true" />
                      <span className="zn-facade__play" aria-hidden="true">
                        <Play size={18} fill="currentColor" />
                      </span>
                    </button>
                  )}
                </div>

                <div className="zn-track__foot">
                  <p>{track.note}</p>
                  <Link className="zn-link" href={track.href}>
                    <span>{isAr ? "صفحة العمل" : "Release page"}</span>
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
