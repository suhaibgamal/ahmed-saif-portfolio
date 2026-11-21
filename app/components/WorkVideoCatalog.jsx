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
  const [activeKey, setActiveKey] = useState(null);
  const [category, setCategory] = useState("all");
  const [year, setYear] = useState("all");
  const [query, setQuery] = useState("");

  const years = useMemo(() => Array.from(new Set(tracks.map((w) => w.year))), [tracks]);
  const tabs = isAr
    ? [
        { id: "all", label: "الكل" },
        { id: "stage", label: "مسلسلات ومحافل" },
        { id: "singles", label: "منفردة" },
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

  const active = tracks.find((item) => item.key === activeKey) || null;

  function openScreening(work) {
    setActiveKey(work.key);
    const el = document.getElementById("gal-screening-stage");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  return (
    <section className="gal-section" id="catalog">
      <div className="gal-wrap">
        <div className="gal-controls">
          <div className="gal-tabs" role="group" aria-label={isAr ? "تصنيف" : "Filter"}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`gal-tab ${category === tab.id ? "is-active" : ""}`}
                onClick={() => setCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="gal-inputs">
            <label className="gal-search">
              <Search size={14} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isAr ? "ابحث في المعرض..." : "Search archive..."}
                aria-label={isAr ? "بحث" : "Search"}
              />
            </label>
            <select
              className="gal-select"
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

        <div id="gal-screening-stage">
          {active && (
            <div className="gal-screening" aria-live="polite">
              <div className="gal-screening__head">
                <div>
                  <span className="gal-caption">
                    {active.year} · {active.type}
                  </span>
                  <h2>{active.title}</h2>
                </div>
                <div className="gal-screening__actions">
                  <Link className="gal-text-link" href={active.href}>
                    <span>{detailLabel}</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                  <button
                    type="button"
                    className="gal-icon-btn"
                    onClick={() => setActiveKey(null)}
                    aria-label={isAr ? "إغلاق" : "Close"}
                  >
                    <X size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="gal-screening__frame">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`}
                  title={active.title}
                />
              </div>
              <p className="gal-screening__note">{active.note}</p>
            </div>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="gal-empty">
            <p>{isAr ? "لا توجد أعمال مطابقة." : "No matching works."}</p>
            <button
              type="button"
              className="gal-btn gal-btn--line"
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
          <div className="gal-plates">
            {filtered.map((work) => {
              const isSelected = activeKey === work.key;
              return (
                <article
                  key={work.key}
                  className={`gal-plate ${isSelected ? "is-active" : ""}`}
                >
                  <button
                    type="button"
                    className="gal-plate__frame"
                    onClick={() => openScreening(work)}
                    aria-label={isAr ? `عرض ${work.title}` : `Screen ${work.title}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg`}
                      alt={work.title}
                      loading="lazy"
                      decoding="async"
                      className="gal-silver-img"
                    />
                    <span className="gal-plate__play" aria-hidden="true">
                      <Play size={18} fill="currentColor" />
                    </span>
                  </button>

                  <div className="gal-plate__meta">
                    <div>
                      <span className="gal-caption">
                        {work.year} · {work.type} · {formatDuration(work.durationSeconds)}
                      </span>
                      <h3>{work.title}</h3>
                      <p>{work.mood}</p>
                    </div>
                    <Link
                      href={work.href}
                      className="gal-plate__link"
                      aria-label={`${detailLabel}: ${work.title}`}
                    >
                      <ArrowUpRight size={16} aria-hidden="true" />
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
