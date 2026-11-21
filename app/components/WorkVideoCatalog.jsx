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
  const categories = isAr
    ? [
        { id: "all", label: "الكل" },
        { id: "stage", label: "تترات ومحافل" },
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

  return (
    <section className="sw-band" id="catalog">
      <div className="sw-filter-grid">
        <div className="sw-filter-tabs" role="group" aria-label={isAr ? "تصنيف" : "Filter"}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`sw-filter-tab ${category === cat.id ? "is-active" : ""}`}
              onClick={() => setCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <label className="sw-search-cell">
          <Search size={14} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isAr ? "ابحث في الفهرس..." : "Search index..."}
            aria-label={isAr ? "بحث" : "Search"}
          />
        </label>

        <select
          className="sw-year-cell"
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

      <div className="sw-catalog-split">
        <div className="sw-catalog-list">
          {filtered.length === 0 ? (
            <div className="sw-empty-cell">
              <p>{isAr ? "لا توجد أعمال مطابقة." : "No entries match this filter."}</p>
              <button
                type="button"
                className="sw-btn sw-btn--outline"
                onClick={() => {
                  setCategory("all");
                  setYear("all");
                  setQuery("");
                }}
              >
                {isAr ? "إعادة ضبط" : "Reset"}
              </button>
            </div>
          ) : (
            filtered.map((work) => {
              const isSelected = active?.key === work.key;
              return (
                <div
                  key={work.key}
                  className={`sw-index-row ${isSelected ? "is-active" : ""}`}
                >
                  <button
                    type="button"
                    className="sw-index-row__btn"
                    onClick={() => {
                      setSelectedKey(work.key);
                      setPlayingId(null);
                    }}
                  >
                    <span className="sw-index-row__year">{work.year}</span>
                    <span className="sw-index-row__title">
                      <strong>{work.title}</strong>
                      <small>
                        {work.type} · {work.mood}
                      </small>
                    </span>
                    <span className="sw-index-row__dur">
                      {formatDuration(work.durationSeconds)}
                    </span>
                  </button>
                  <Link
                    href={work.href}
                    className="sw-index-row__link"
                    aria-label={`${detailLabel}: ${work.title}`}
                  >
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              );
            })
          )}
        </div>

        <aside className="sw-catalog-aside" aria-live="polite">
          {active && (
            <div className="sw-chamber">
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
                      loading="eager"
                      decoding="async"
                    />
                    <span className="sw-facade__scrim" aria-hidden="true" />
                    <span className="sw-facade__play" aria-hidden="true">
                      <Play size={20} fill="currentColor" />
                    </span>
                  </button>
                )}
              </div>

              <div className="sw-chamber__body">
                <div className="sw-chamber__top">
                  <span className="sw-tag">
                    {active.year} · {active.type}
                  </span>
                  {isPlaying && (
                    <button
                      type="button"
                      className="sw-tool-btn"
                      onClick={() => setPlayingId(null)}
                      aria-label={isAr ? "إغلاق" : "Close"}
                    >
                      <X size={14} aria-hidden="true" />
                    </button>
                  )}
                </div>
                <h2>{active.title}</h2>
                <p>{active.note}</p>
                <div className="sw-chamber__foot">
                  <span>
                    {active.mood} · {formatDuration(active.durationSeconds)}
                  </span>
                  <Link className="sw-inline-link" href={active.href}>
                    <span>{detailLabel}</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
