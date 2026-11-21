"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function SymphonyProgram({ actOne, actTwo, locale }) {
  const isAr = locale === "ar";
  const allTracks = [...actOne, ...actTwo];
  const [selectedId, setSelectedId] = useState(allTracks[0]?.youtubeId || null);
  const [playingId, setPlayingId] = useState(null);

  const active =
    allTracks.find((item) => item.youtubeId === selectedId) || allTracks[0];
  const isPlaying = active && playingId === active.youtubeId;

  function choose(track) {
    setSelectedId(track.youtubeId);
    setPlayingId(null);
  }

  return (
    <div className="sym-program">
      {active && (
        <div className="sym-stage-box">
          <div className="sym-stage-box__screen">
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
                className="sym-facade"
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
                <span className="sym-facade__scrim" aria-hidden="true" />
                <span className="sym-facade__play" aria-hidden="true">
                  <Play size={22} fill="currentColor" />
                </span>
              </button>
            )}
          </div>

          <div className="sym-stage-box__caption">
            <div>
              <p className="sym-kicker">
                {active.year} · {active.type} · {formatDuration(active.durationSeconds)}
              </p>
              <h3>{active.title}</h3>
              <p>{active.note}</p>
            </div>
            <Link className="sym-link" href={active.href}>
              <span>{isAr ? "بطاقة العرض الكاملة" : "Full performance page"}</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}

      <div className="sym-acts">
        <div className="sym-act">
          <p className="sym-act__title">
            {isAr ? "الفصل الأول — المسرح والدراما" : "Act I — Stage & Screen"}
          </p>
          <div className="sym-act__rows">
            {actOne.map((track) => (
              <button
                key={track.youtubeId}
                type="button"
                className={`sym-row ${selectedId === track.youtubeId ? "is-active" : ""}`}
                onClick={() => choose(track)}
              >
                <span className="sym-row__year">{track.year}</span>
                <span className="sym-row__body">
                  <strong>{track.title}</strong>
                  <small>{track.mood}</small>
                </span>
                <span className="sym-row__dur">
                  {formatDuration(track.durationSeconds)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="sym-act">
          <p className="sym-act__title">
            {isAr ? "الفصل الثاني — مختارات منفردة" : "Act II — Selected Repertoire"}
          </p>
          <div className="sym-act__rows">
            {actTwo.map((track) => (
              <button
                key={track.youtubeId}
                type="button"
                className={`sym-row ${selectedId === track.youtubeId ? "is-active" : ""}`}
                onClick={() => choose(track)}
              >
                <span className="sym-row__year">{track.year}</span>
                <span className="sym-row__body">
                  <strong>{track.title}</strong>
                  <small>{track.mood}</small>
                </span>
                <span className="sym-row__dur">
                  {formatDuration(track.durationSeconds)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
