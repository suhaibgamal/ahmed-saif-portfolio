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

  function openTrack(work) {
    setSelectedKey(work.key);
    setPlayingId(work.youtubeId);
    const el = document.getElementById("ed-screening");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  return (
    <section className="ed-section" id="catalog">
      <div className="ed-wrap">
        {active && (
          <div className="ed-folio-stage ed-folio-stage--catalog" id="ed-screening" aria-live="polite">
            <div className="ed-folio-stage__video">
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
                  className="ed-facade"
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
                  <span className="ed-facade__scrim" aria-hidden="true" />
                  <span className="ed-facade__play" aria-hidden="true">
                    <Play size={20} fill="currentColor" />
                  </span>
                </button>
              )}
            </div>

            <div className="ed-folio-stage__meta">
              <div className="ed-folio-stage__top">
                <p className="ed-kicker">
                  {active.year} · {active.type}
                </p>
                {isPlaying && (
                  <button
                    type="button"
                    className="ed-util-btn"
                    onClick={() => setPlayingId(null)}
                    aria-label={isAr ? "إغلاق" : "Close"}
                  >
                    <X size={14} aria-hidden="true" />
                  </button>
                )}
              </div>
              <h2>{active.title}</h2>
              <p>{active.note}</p>
              <div className="ed-folio-stage__foot">
                <span>
                  {active.mood} · {formatDuration(active.durationSeconds)}
                </span>
                <Link className="ed-link" href={active.href}>
                  <span>{detailLabel}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="ed-toolbar">
          <div className="ed-tabs" role="group" aria-label={isAr ? "تصنيف" : "Category"}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`ed-tab ${category === tab.id ? "is-active" : ""}`}
                onClick={() => setCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="ed-inputs">
            <label className="ed-search">
              <Search size={14} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isAr ? "ابحث في الفهرس..." : "Search catalogue..."}
                aria-label={isAr ? "بحث" : "Search"}
              />
            </label>
            <select
              className="ed-select"
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
          <div className="ed-empty">
            <p>{isAr ? "لا توجد أعمال مطابقة." : "No matching works."}</p>
            <button
              type="button"
              className="ed-btn ed-btn--outline"
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
          <div className="ed-catalogue-grid">
            {filtered.map((work) => {
              const isSelected = active?.key === work.key;
              return (
                <article
                  key={work.key}
                  className={`ed-cat-entry ${isSelected ? "is-selected" : ""}`}
                >
                  <button
                    type="button"
                    className="ed-cat-entry__thumb"
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
                    <span className="ed-cat-entry__play" aria-hidden="true">
                      <Play size={15} fill="currentColor" />
                    </span>
                  </button>

                  <div className="ed-cat-entry__body">
                    <span className="ed-kicker">
                      {work.year} · {work.type} · {formatDuration(work.durationSeconds)}
                    </span>
                    <h3>{work.title}</h3>
                    <p>{work.note}</p>
                    <Link className="ed-link" href={work.href}>
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
