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
  featuredLabel,
  detailLabel,
  closeLabel
}) {
  const isAr = locale === "ar";
  const [selectedKey, setSelectedKey] = useState(tracks[0]?.key || null);
  const [playingId, setPlayingId] = useState(null);
  const [category, setCategory] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [query, setQuery] = useState("");

  const years = useMemo(
    () => Array.from(new Set(tracks.map((item) => item.year))),
    [tracks]
  );

  const categories = isAr
    ? [
        { id: "all", label: "جميع الأعمال" },
        { id: "milestones", label: "مسلسلات ومحافل دولية" },
        { id: "singles", label: "إصدارات منفردة" },
        { id: "visual", label: "فيديو وثنائيات" }
      ]
    : [
        { id: "all", label: "All works" },
        { id: "milestones", label: "Scores & live stages" },
        { id: "singles", label: "Singles" },
        { id: "visual", label: "Videos & duets" }
      ];

  const filteredTracks = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tracks.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (yearFilter !== "all" && item.year !== yearFilter) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.mood.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
      );
    });
  }, [tracks, category, yearFilter, query]);

  const groupedTracks = useMemo(() => {
    return filteredTracks.reduce((groups, work) => {
      const existing = groups.find((group) => group.year === work.year);
      if (existing) {
        existing.tracks.push(work);
        return groups;
      }
      return [...groups, { year: work.year, tracks: [work] }];
    }, []);
  }, [filteredTracks]);

  const active =
    tracks.find((item) => item.key === selectedKey) ||
    filteredTracks[0] ||
    tracks[0];
  const isPlaying = active && playingId === active.youtubeId;

  function handleSelect(track) {
    setSelectedKey(track.key);
    setPlayingId(null);
  }

  return (
    <section className="sov-section sov-catalog-section" id="catalog">
      <div className="sov-container">
        <div className="sov-catalog-controls">
          <div
            className="sov-filter-pills"
            role="group"
            aria-label={isAr ? "تصفية حسب التصنيف" : "Filter by category"}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`sov-pill ${category === cat.id ? "is-active" : ""}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="sov-catalog-inputs">
            <label className="sov-search">
              <Search size={15} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isAr ? "ابحث بعنوان أو مزاج..." : "Search title or mood..."}
                aria-label={isAr ? "بحث في الأعمال" : "Search works"}
              />
            </label>

            <select
              className="sov-year-select"
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              aria-label={isAr ? "تصفية حسب السنة" : "Filter by year"}
            >
              <option value="all">{isAr ? "كل السنوات" : "All years"}</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="sov-catalog-layout">
          <aside className="sov-sticky-player" aria-live="polite">
            {active ? (
              <div className="sov-player-card">
                <div className="sov-theater__frame">
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
                      className="sov-theater__facade"
                      onClick={() => setPlayingId(active.youtubeId)}
                      aria-label={
                        isAr ? `تشغيل ${active.title}` : `Play ${active.title}`
                      }
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://i.ytimg.com/vi/${active.youtubeId}/hqdefault.jpg`}
                        alt={active.title}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="sov-theater__veil" aria-hidden="true" />
                      <span className="sov-theater__play" aria-hidden="true">
                        <Play size={22} fill="currentColor" />
                      </span>
                      <span className="sov-theater__badge">
                        {active.year} · {formatDuration(active.durationSeconds)}
                      </span>
                    </button>
                  )}
                </div>

                <div className="sov-player-card__body">
                  <div className="sov-player-card__top">
                    <span className="eyebrow">
                      {active.year} · {active.type}
                    </span>
                    {isPlaying && (
                      <button
                        type="button"
                        className="sov-icon-btn"
                        onClick={() => setPlayingId(null)}
                        aria-label={closeLabel}
                      >
                        <X size={15} aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  <h2>{active.title}</h2>
                  <p>{active.note}</p>
                  <div className="sov-player-card__foot">
                    <span className="sov-mood-chip">{active.mood}</span>
                    <Link className="sov-text-link" href={active.href}>
                      <span>{detailLabel}</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="sov-player-empty">
                <p>{featuredLabel}</p>
              </div>
            )}
          </aside>

          <div className="sov-repertoire">
            {groupedTracks.length === 0 ? (
              <div className="sov-empty-state">
                <p>
                  {isAr
                    ? "لم يتم العثور على أعمال مطابقة للبحث الحالي."
                    : "No works match the current filters."}
                </p>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    setCategory("all");
                    setYearFilter("all");
                    setQuery("");
                  }}
                >
                  {isAr ? "إعادة ضبط الفلاتر" : "Reset filters"}
                </button>
              </div>
            ) : (
              groupedTracks.map((group) => (
                <div className="sov-year-block" key={group.year}>
                  <div className="sov-year-block__head">
                    <h3>{group.year}</h3>
                    <span>
                      {isAr
                        ? `${group.tracks.length} أعمال`
                        : `${group.tracks.length} ${group.tracks.length === 1 ? "work" : "works"}`}
                    </span>
                  </div>

                  <div className="sov-year-block__rows">
                    {group.tracks.map((work) => {
                      const isActive = active?.key === work.key;
                      return (
                        <div
                          key={work.key}
                          className={`sov-track-row ${isActive ? "is-active" : ""}`}
                        >
                          <button
                            type="button"
                            className="sov-track-row__main"
                            onClick={() => handleSelect(work)}
                          >
                            <span className="sov-track-row__thumb">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={`https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg`}
                                alt=""
                                loading="lazy"
                                decoding="async"
                              />
                              <span className="sov-track-row__play" aria-hidden="true">
                                <Play size={13} fill="currentColor" />
                              </span>
                            </span>
                            <span className="sov-track-row__text">
                              <strong>{work.title}</strong>
                              <small>
                                {work.type} · {work.mood}
                              </small>
                            </span>
                          </button>

                          <div className="sov-track-row__meta">
                            <span>{formatDuration(work.durationSeconds)}</span>
                            <Link
                              href={work.href}
                              className="sov-track-row__link"
                              aria-label={`${detailLabel}: ${work.title}`}
                            >
                              <ArrowUpRight size={15} aria-hidden="true" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
