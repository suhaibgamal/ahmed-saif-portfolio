"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Search, X } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function WorkVideoCatalog({
  tracks,
  locale,
  detailLabel,
  closeLabel
}) {
  const isAr = locale === "ar";
  const [selectedKey, setSelectedKey] = useState(tracks[0]?.key || null);
  const [playingId, setPlayingId] = useState(null);
  const [category, setCategory] = useState("all");
  const [year, setYear] = useState("all");
  const [query, setQuery] = useState("");

  const years = useMemo(
    () => Array.from(new Set(tracks.map((item) => item.year))),
    [tracks]
  );

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
        item.mood.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
      );
    });
  }, [tracks, category, year, query]);

  const active =
    tracks.find((item) => item.key === selectedKey) || filtered[0] || tracks[0];
  const isPlaying = active && playingId === active.youtubeId;

  function openTrack(track) {
    setSelectedKey(track.key);
    setPlayingId(track.youtubeId);
    const el = document.getElementById("air-dock-player");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  return (
    <section className="air-section air-catalog-wrap" id="catalog">
      <div className="air-container">
        {active && (
          <div className="air-dock" id="air-dock-player" aria-live="polite">
            <div className="air-dock__video">
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
                </button>
              )}
            </div>

            <div className="air-dock__info">
              <div className="air-dock__head">
                <span className="air-chip">
                  {active.year} · {active.type}
                </span>
                {isPlaying && (
                  <button
                    type="button"
                    className="air-icon-btn"
                    onClick={() => setPlayingId(null)}
                    aria-label={closeLabel}
                  >
                    <X size={15} aria-hidden="true" />
                  </button>
                )}
              </div>
              <h2>{active.title}</h2>
              <p>{active.note}</p>
              <div className="air-dock__foot">
                <span>
                  {active.mood} · {formatDuration(active.durationSeconds)}
                </span>
                <Link className="air-inline-link" href={active.href}>
                  <span>{detailLabel}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="air-toolbar">
          <div className="air-segmented" role="group" aria-label={isAr ? "تصنيف الأعمال" : "Category filter"}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`air-segmented__btn ${category === tab.id ? "is-active" : ""}`}
                onClick={() => setCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="air-toolbar__right">
            <label className="air-search-box">
              <Search size={15} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isAr ? "ابحث في الأعمال..." : "Search discography..."}
                aria-label={isAr ? "بحث" : "Search"}
              />
            </label>

            <select
              className="air-select"
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
          <div className="air-empty">
            <p>{isAr ? "لا توجد أعمال مطابقة لبحثك." : "No matching releases found."}</p>
            <button
              type="button"
              className="air-btn air-btn--secondary"
              onClick={() => {
                setCategory("all");
                setYear("all");
                setQuery("");
              }}
            >
              {isAr ? "عرض كل الأعمال" : "Show all works"}
            </button>
          </div>
        ) : (
          <div className="air-works-grid">
            {filtered.map((work) => {
              const isSelected = active?.key === work.key;
              return (
                <article
                  key={work.key}
                  className={`air-work-tile ${isSelected ? "is-selected" : ""}`}
                >
                  <button
                    type="button"
                    className="air-work-tile__cover"
                    onClick={() => openTrack(work)}
                    aria-label={isAr ? `تشغيل ${work.title}` : `Play ${work.title}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg`}
                      alt={work.title}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="air-work-tile__play" aria-hidden="true">
                      <Play size={16} fill="currentColor" />
                    </span>
                    <span className="air-work-tile__dur">
                      {formatDuration(work.durationSeconds)}
                    </span>
                  </button>

                  <div className="air-work-tile__body">
                    <div className="air-work-tile__meta">
                      <span>{work.year}</span>
                      <span>·</span>
                      <span>{work.type}</span>
                    </div>
                    <h3>{work.title}</h3>
                    <p>{work.mood}</p>
                    <Link className="air-work-tile__link" href={work.href}>
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
