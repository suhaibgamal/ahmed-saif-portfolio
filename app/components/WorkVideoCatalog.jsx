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
        { id: "all", label: "كل البرنامج" },
        { id: "stage", label: "المسرح والدراما" },
        { id: "singles", label: "إصدارات منفردة" },
        { id: "visual", label: "فيديو وثنائيات" }
      ]
    : [
        { id: "all", label: "Full Repertoire" },
        { id: "stage", label: "Stage & Screen" },
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
    <section className="sym-section" id="catalog">
      <div className="sym-wrap">
        {active && (
          <div className="sym-stage-box sym-stage-box--catalog" aria-live="polite">
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
                    loading="eager"
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
                <div className="sym-stage-box__top">
                  <p className="sym-kicker">
                    {active.year} · {active.type} · {formatDuration(active.durationSeconds)}
                  </p>
                  {isPlaying && (
                    <button
                      type="button"
                      className="sym-icon-btn"
                      onClick={() => setPlayingId(null)}
                      aria-label={isAr ? "إغلاق" : "Close"}
                    >
                      <X size={14} aria-hidden="true" />
                    </button>
                  )}
                </div>
                <h2>{active.title}</h2>
                <p>{active.note}</p>
              </div>
              <Link className="sym-link" href={active.href}>
                <span>{detailLabel}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}

        <div className="sym-toolbar">
          <div className="sym-tabs" role="group" aria-label={isAr ? "تصنيف" : "Filter"}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`sym-tab ${category === tab.id ? "is-active" : ""}`}
                onClick={() => setCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="sym-inputs">
            <label className="sym-search">
              <Search size={14} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isAr ? "ابحث في الأعمال..." : "Search repertoire..."}
                aria-label={isAr ? "بحث" : "Search"}
              />
            </label>
            <select
              className="sym-select"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              aria-label={isAr ? "السنة" : "Year"}
            >
              <option value="all">{isAr ? "كل المواسم" : "All years"}</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="sym-empty">
            <p>{isAr ? "لا توجد أعمال مطابقة." : "No works match your search."}</p>
            <button
              type="button"
              className="sym-btn sym-btn--outline"
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
          <div className="sym-catalog-rows">
            {filtered.map((work) => {
              const isSelected = active?.key === work.key;
              return (
                <div
                  key={work.key}
                  className={`sym-cat-row ${isSelected ? "is-active" : ""}`}
                >
                  <button
                    type="button"
                    className="sym-cat-row__btn"
                    onClick={() => {
                      setSelectedKey(work.key);
                      setPlayingId(null);
                    }}
                  >
                    <span className="sym-row__year">{work.year}</span>
                    <span className="sym-cat-row__thumb">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg`}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span className="sym-row__body">
                      <strong>{work.title}</strong>
                      <small>
                        {work.type} · {work.mood}
                      </small>
                    </span>
                    <span className="sym-row__dur">
                      {formatDuration(work.durationSeconds)}
                    </span>
                  </button>
                  <Link
                    href={work.href}
                    className="sym-cat-row__link"
                    aria-label={`${detailLabel}: ${work.title}`}
                  >
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
