"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Search, X } from "lucide-react";

function formatDuration(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
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

  return (
    <section className="hf-section hf-section--compact" id="catalog">
      <div className="hf-wrap">
        {active && (
          <div className="hf-chassis hf-dock" aria-live="polite">
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

            <div className="hf-dock__body">
              <div className="hf-dock__top">
                <span className="hf-mono hf-brass-text">
                  {active.year} · {formatDuration(active.durationSeconds)} · {active.type}
                </span>
                {isPlaying && (
                  <button
                    type="button"
                    className="hf-icon-btn"
                    onClick={() => setPlayingId(null)}
                    aria-label={isAr ? "إغلاق" : "Close"}
                  >
                    <X size={14} aria-hidden="true" />
                  </button>
                )}
              </div>
              <h2>{active.title}</h2>
              <p>{active.note}</p>
              <div className="hf-dock__foot">
                <span>{active.mood}</span>
                <Link className="hf-link" href={active.href}>
                  <span>{detailLabel}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="hf-chassis hf-toolbar">
          <div className="hf-tabs" role="group" aria-label={isAr ? "تصنيف" : "Filter"}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`hf-tab ${category === tab.id ? "is-active" : ""}`}
                onClick={() => setCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hf-inputs">
            <label className="hf-search">
              <Search size={14} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isAr ? "ابحث في الأرشيف..." : "Search archive..."}
                aria-label={isAr ? "بحث" : "Search"}
              />
            </label>
            <select
              className="hf-select"
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

        <div className="hf-chassis hf-list-chassis">
          {filtered.length === 0 ? (
            <div className="hf-empty">
              <p>{isAr ? "لا توجد أعمال مطابقة." : "No matching works."}</p>
              <button
                type="button"
                className="hf-btn hf-btn--metal"
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
                  className={`hf-track-row ${isSelected ? "is-selected" : ""}`}
                >
                  <button
                    type="button"
                    className="hf-track-row__btn"
                    onClick={() => {
                      setSelectedKey(work.key);
                      setPlayingId(null);
                    }}
                  >
                    <span className="hf-slot__indicator" aria-hidden="true" />
                    <span className="hf-mono hf-slot__year">{work.year}</span>
                    <span className="hf-track-row__thumb">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg`}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span className="hf-slot__copy">
                      <strong>{work.title}</strong>
                      <small>
                        {work.type} · {work.mood}
                      </small>
                    </span>
                    <span className="hf-mono hf-slot__dur">
                      {formatDuration(work.durationSeconds)}
                    </span>
                  </button>
                  <Link
                    href={work.href}
                    className="hf-track-row__link"
                    aria-label={`${detailLabel}: ${work.title}`}
                  >
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
