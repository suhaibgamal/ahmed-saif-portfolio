"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Search, X } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function WorkVideoCatalog({ tracks, locale, detailLabel }) {
  const isAr = locale === "ar";
  const [selectedKey, setSelectedKey] = useState(tracks[0]?.key || null);
  const [playingId, setPlayingId] = useState(null);
  const [category, setCategory] = useState("all");
  const [year, setYear] = useState("all");
  const [query, setQuery] = useState("");

  const years = useMemo(() => Array.from(new Set(tracks.map((w) => w.year))), [tracks]);
  const tabs = isAr
    ? [
        { id: "all", label: "الكل" },
        { id: "stage", label: "مسلسلات ومحافل" },
        { id: "singles", label: "إصدارات منفردة" },
        { id: "visual", label: "فيديو وثنائيات" }
      ]
    : [
        { id: "all", label: "All" },
        { id: "stage", label: "Scores & Live" },
        { id: "singles", label: "Singles" },
        { id: "visual", label: "Videos & Duets" }
      ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tracks.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (year !== "all" && item.year !== year) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.mood.toLowerCase().includes(q)
      );
    });
  }, [tracks, category, year, query]);

  const active =
    tracks.find((item) => item.key === selectedKey) || filtered[0] || tracks[0];
  const isPlaying = active && playingId === active.youtubeId;

  function playTrack(work) {
    setSelectedKey(work.key);
    setPlayingId(work.youtubeId);
    const el = document.getElementById("bn-player-dock");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  return (
    <section className="bn-section bn-section--tight" id="catalog">
      <div className="bn-wrap">
        {active && (
          <div className="bn-tile bn-dock-tile" id="bn-player-dock" aria-live="polite">
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
                </button>
              )}
            </div>

            <div className="bn-dock-tile__info">
              <div className="bn-player-tile__top">
                <span className="bn-pill">
                  {active.year} · {active.type}
                </span>
                {isPlaying && (
                  <button
                    type="button"
                    className="bn-icon-btn"
                    onClick={() => setPlayingId(null)}
                    aria-label={isAr ? "إغلاق" : "Close"}
                  >
                    <X size={15} aria-hidden="true" />
                  </button>
                )}
              </div>
              <h2>{active.title}</h2>
              <p>{active.note}</p>
              <div className="bn-dock-tile__foot">
                <span>
                  {active.mood} · {formatDuration(active.durationSeconds)}
                </span>
                <Link className="bn-link" href={active.href}>
                  <span>{detailLabel}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="bn-tile bn-filter-tile">
          <div className="bn-filter-pills" role="group" aria-label={isAr ? "تصنيف" : "Filter"}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`bn-filter-btn ${category === tab.id ? "is-active" : ""}`}
                onClick={() => setCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bn-filter-inputs">
            <label className="bn-search">
              <Search size={14} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isAr ? "ابحث..." : "Search..."}
                aria-label={isAr ? "بحث" : "Search"}
              />
            </label>
            <select
              className="bn-select"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              aria-label={isAr ? "السنة" : "Year"}
            >
              <option value="all">{isAr ? "كل السنوات" : "All years"}</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="bn-tile bn-empty">
            <p>{isAr ? "لا توجد أعمال مطابقة." : "No matching releases."}</p>
            <button
              type="button"
              className="bn-btn bn-btn--soft"
              onClick={() => {
                setCategory("all");
                setYear("all");
                setQuery("");
              }}
            >
              {isAr ? "إعادة الضبط" : "Reset"}
            </button>
          </div>
        ) : (
          <div className="bn-works-grid">
            {filtered.map((work) => {
              const isSelected = active?.key === work.key;
              return (
                <article
                  key={work.key}
                  className={`bn-tile bn-work-card ${isSelected ? "is-selected" : ""}`}
                >
                  <button
                    type="button"
                    className="bn-work-card__media"
                    onClick={() => playTrack(work)}
                    aria-label={isAr ? `تشغيل ${work.title}` : `Play ${work.title}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg`}
                      alt={work.title}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="bn-work-card__play" aria-hidden="true">
                      <Play size={15} fill="currentColor" />
                    </span>
                    <span className="bn-facade__dur">
                      {formatDuration(work.durationSeconds)}
                    </span>
                  </button>
                  <div className="bn-work-card__body">
                    <span className="bn-label">
                      {work.year} · {work.type}
                    </span>
                    <h3>{work.title}</h3>
                    <p>{work.mood}</p>
                    <Link className="bn-link" href={work.href}>
                      <span>{detailLabel}</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
