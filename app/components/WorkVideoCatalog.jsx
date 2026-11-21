"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Search } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function WorkVideoCatalog({ tracks, locale }) {
  const isAr = locale === "ar";
  const [openKey, setOpenKey] = useState(tracks[0]?.key || null);
  const [playingId, setPlayingId] = useState(null);
  const [category, setCategory] = useState("all");
  const [year, setYear] = useState("all");
  const [query, setQuery] = useState("");

  const years = useMemo(() => Array.from(new Set(tracks.map((w) => w.year))), [tracks]);
  const tabs = isAr
    ? [
        { id: "all", label: "الكل" },
        { id: "stage", label: "تترات ومحافل" },
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

  function toggle(work) {
    if (openKey === work.key) {
      setOpenKey(null);
      setPlayingId(null);
    } else {
      setOpenKey(work.key);
      setPlayingId(null);
    }
  }

  return (
    <section className="zn-section zn-section--tight" id="catalog">
      <div className="zn-col">
        <div className="zn-controls">
          <div className="zn-tabs" role="group" aria-label={isAr ? "تصنيف" : "Category"}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`zn-tab ${category === tab.id ? "is-active" : ""}`}
                onClick={() => setCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="zn-inputs">
            <label className="zn-search">
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
              className="zn-select"
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
          <div className="zn-empty">
            <p>{isAr ? "لا توجد نتائج مطابقة." : "No matching releases."}</p>
            <button
              type="button"
              className="zn-btn zn-btn--quiet"
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
          <div className="zn-tracks">
            {filtered.map((work) => {
              const isOpen = openKey === work.key;
              const isPlaying = playingId === work.youtubeId;
              return (
                <div key={work.key} className={`zn-track ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="zn-track__row"
                    onClick={() => toggle(work)}
                    aria-expanded={isOpen}
                  >
                    <span className="zn-track__year">{work.year}</span>
                    <span className="zn-track__title">
                      <strong>{work.title}</strong>
                      <small>
                        {work.type} · {work.mood}
                      </small>
                    </span>
                    <span className="zn-track__dur">
                      {formatDuration(work.durationSeconds)}
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
                            src={`https://www.youtube-nocookie.com/embed/${work.youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`}
                            title={work.title}
                          />
                        ) : (
                          <button
                            type="button"
                            className="zn-facade"
                            onClick={() => setPlayingId(work.youtubeId)}
                            aria-label={isAr ? `تشغيل ${work.title}` : `Play ${work.title}`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg`}
                              alt={work.title}
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
                        <p>{work.note}</p>
                        <Link className="zn-link" href={work.href}>
                          <span>{isAr ? "صفحة العمل" : "Release sheet"}</span>
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
