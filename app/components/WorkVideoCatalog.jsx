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
  const [yearFilter, setYearFilter] = useState("all");
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
      if (yearFilter !== "all" && item.year !== yearFilter) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.mood.toLowerCase().includes(q)
      );
    });
  }, [tracks, category, yearFilter, query]);

  const active =
    tracks.find((item) => item.key === selectedKey) || filtered[0] || tracks[0];
  const isPlaying = active && playingId === active.youtubeId;

  function choose(track) {
    setSelectedKey(track.key);
    setPlayingId(null);
  }

  return (
    <section className="kin-section" id="catalog">
      <div className="kin-wrap">
        <div className="kin-filter-bar">
          <div className="kin-filter-tabs" role="group" aria-label={isAr ? "تصنيف" : "Category"}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`kin-tab ${category === cat.id ? "is-active" : ""}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="kin-filter-inputs">
            <label className="kin-search">
              <Search size={14} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isAr ? "ابحث في الفهرس..." : "Search archive..."}
                aria-label={isAr ? "بحث" : "Search"}
              />
            </label>
            <select
              className="kin-select"
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
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

        {active && (
          <div className="kin-spotlight-card" aria-live="polite">
            <div className="kin-spotlight-card__media">
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
                  className="kin-facade"
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
                  <span className="kin-facade__scrim" aria-hidden="true" />
                  <span className="kin-facade__play" aria-hidden="true">
                    <Play size={20} fill="currentColor" />
                  </span>
                </button>
              )}
            </div>

            <div className="kin-spotlight-card__info">
              <div className="kin-track__notes-top">
                <span className="kin-eyebrow">
                  {active.year} · {active.type}
                </span>
                {isPlaying && (
                  <button
                    type="button"
                    className="kin-mode-btn"
                    onClick={() => setPlayingId(null)}
                    aria-label={isAr ? "إغلاق المشغل" : "Close player"}
                  >
                    <X size={14} aria-hidden="true" />
                  </button>
                )}
              </div>
              <h2>{active.title}</h2>
              <p>{active.note}</p>
              <div className="kin-spotlight-card__foot">
                <span>
                  {active.mood} · {formatDuration(active.durationSeconds)}
                </span>
                <Link className="kin-link" href={active.href}>
                  <span>{detailLabel}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="kin-empty">
            <p>{isAr ? "لا توجد نتائج مطابقة." : "No releases match this filter."}</p>
            <button
              type="button"
              className="kin-btn kin-btn--outline"
              onClick={() => {
                setCategory("all");
                setYearFilter("all");
                setQuery("");
              }}
            >
              {isAr ? "إعادة الضبط" : "Reset"}
            </button>
          </div>
        ) : (
          <div className="kin-archive-list">
            {filtered.map((work) => {
              const isSelected = active?.key === work.key;
              return (
                <div
                  key={work.key}
                  className={`kin-archive-row ${isSelected ? "is-active" : ""}`}
                >
                  <button
                    type="button"
                    className="kin-archive-row__btn"
                    onClick={() => choose(work)}
                  >
                    <span className="kin-archive-row__year">{work.year}</span>
                    <span className="kin-archive-row__thumb">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg`}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span className="kin-archive-row__text">
                      <strong>{work.title}</strong>
                      <small>
                        {work.type} — {work.mood}
                      </small>
                    </span>
                  </button>
                  <div className="kin-archive-row__end">
                    <span>{formatDuration(work.durationSeconds)}</span>
                    <Link
                      href={work.href}
                      className="kin-archive-row__link"
                      aria-label={`${detailLabel}: ${work.title}`}
                    >
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
