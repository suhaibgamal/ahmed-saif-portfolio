"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { ExternalLink, Play, X } from "lucide-react";

function getRequestedWorkKey() {
  if (typeof window === "undefined") {
    return null;
  }

  return new URLSearchParams(window.location.search).get("work");
}

function subscribeToLocation(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  let active = true;
  queueMicrotask(() => {
    if (active) {
      callback();
    }
  });

  window.addEventListener("popstate", callback);

  return () => {
    active = false;
    window.removeEventListener("popstate", callback);
  };
}

function getEmbedSrc(work) {
  if (!work.youtubeId) {
    return null;
  }

  return `https://www.youtube-nocookie.com/embed/${work.youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`;
}

function getThumbnailUrl(youtubeId) {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

function YouTubeFacade({ work, title }) {
  const [activated, setActivated] = useState(false);
  const embedSrc = getEmbedSrc(work);

  if (activated && embedSrc) {
    return (
      <div className="work-player__frame">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          src={embedSrc}
          title={title}
        />
      </div>
    );
  }

  return (
    <button
      className="work-player__facade"
      type="button"
      onClick={() => setActivated(true)}
      aria-label={title}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        className="work-player__thumb"
        decoding="async"
        loading="lazy"
        src={getThumbnailUrl(work.youtubeId)}
      />
      <span className="work-player__play-btn" aria-hidden="true">
        <Play size={28} fill="currentColor" />
      </span>
    </button>
  );
}

export default function WorkVideoCatalog({
  tracks,
  featuredLabel,
  catalogLabel,
  detailLabel,
  closeLabel
}) {
  const requestedKey = useSyncExternalStore(
    subscribeToLocation,
    getRequestedWorkKey,
    () => null
  );
  const catalogRef = useRef(null);
  const [manualKey, setManualKey] = useState(undefined);
  const selectedKey = manualKey === undefined ? requestedKey : manualKey;
  const selected = tracks.find((work) => work.key === selectedKey);
  const selectedCopy = selected || null;
  const groupedTracks = useMemo(() => {
    return tracks.reduce((groups, work) => {
      const existing = groups.find((group) => group.year === work.year);
      if (existing) {
        existing.tracks.push(work);
        return groups;
      }

      return [...groups, { year: work.year, tracks: [work] }];
    }, []);
  }, [tracks]);

  useEffect(() => {
    if (!selectedKey || !catalogRef.current) {
      return;
    }

    catalogRef.current.scrollIntoView({ block: "start" });
  }, [selectedKey]);

  function handleTrackClick(event, key) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    setManualKey(key);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("work", key);
      url.hash = "catalog";
      window.history.replaceState(null, "", url);
    }
  }

  return (
    <section className="section video-catalog-section" id="catalog" ref={catalogRef}>
      <div className="video-catalog-layout">
        <aside className="work-player" aria-live="polite">
          {selected && selectedCopy ? (
            <>
              <YouTubeFacade key={selected.youtubeId} work={selected} title={selectedCopy.title} />
              <div className="work-player__meta">
                <div>
                  <span>{selected.year}</span>
                  <h2>{selectedCopy.title}</h2>
                  <p>{selectedCopy.note}</p>
                  <Link className="work-player__detail-link" href={selected.href} prefetch={false}>
                    <ExternalLink aria-hidden="true" size={16} />
                    <span>{detailLabel}</span>
                  </Link>
                </div>
                <button
                  className="work-player__close"
                  type="button"
                  onClick={() => setManualKey(null)}
                  aria-label={closeLabel}
                >
                  <X aria-hidden="true" size={18} />
                </button>
              </div>
            </>
          ) : (
            <div className="work-player__empty">
              <Play aria-hidden="true" size={34} fill="currentColor" />
              <span>{featuredLabel}</span>
              <strong>{catalogLabel}</strong>
            </div>
          )}
        </aside>

        <div className="year-catalog">
          {groupedTracks.map((group) => (
            <section className="year-group" key={group.year}>
              <div className="year-heading">
                <span>{group.year}</span>
                <strong>{group.tracks.length}</strong>
              </div>

              <div className="year-tracks">
                {group.tracks.map((work) => {
                  const key = work.key;

                  return (
                    <Link
                      className="year-track"
                      data-active={selectedKey === key ? "true" : undefined}
                      href={work.href}
                      key={key}
                      onClick={(event) => handleTrackClick(event, key)}
                      prefetch={false}
                    >
                      <span className="year-track__play">
                        <Play aria-hidden="true" size={15} fill="currentColor" />
                      </span>
                      <span>
                        <strong>{work.title}</strong>
                        <small>{work.subtitle}</small>
                      </span>
                      <em>{work.mood}</em>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
