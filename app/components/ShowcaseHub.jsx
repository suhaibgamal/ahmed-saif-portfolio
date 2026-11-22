"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Copy,
  ExternalLink,
  Heart,
  Languages,
  Moon,
  Sun,
  X
} from "lucide-react";
import { showcaseItems } from "../showcase-data";

const MODE_KEY = "a7md-showcase-mode";
const MODE_EVENT = "a7md-showcase-mode-change";
const PICKS_KEY = "a7md-showcase-picks";
const PICKS_EVENT = "a7md-showcase-picks-change";

function subscribeMode(cb) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(MODE_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(MODE_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

function getModeSnapshot() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-mode") || "light";
}

function subscribePicks(cb) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(PICKS_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(PICKS_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

function getPicksSnapshot() {
  if (typeof window === "undefined") return "[]";
  try {
    return localStorage.getItem(PICKS_KEY) || "[]";
  } catch {
    return "[]";
  }
}

function MiniWireframe({ variant, colors }) {
  const style = {
    "--wf-bg": colors.bg,
    "--wf-surface": colors.surface,
    "--wf-accent": colors.accent,
    "--wf-ink": colors.ink
  };

  return (
    <div className={`sc-wf sc-wf--${variant}`} style={style} aria-hidden="true">
      {variant === "hero-bleed" && (
        <div className="sc-wf__canvas">
          <div className="sc-wf__top-bar">
            <span className="sc-wf__dot" />
            <span className="sc-wf__line sc-wf__line--xs" />
          </div>
          <div className="sc-wf__bleed-body">
            <div className="sc-wf__stack">
              <span className="sc-wf__accent-bar" />
              <span className="sc-wf__line sc-wf__line--lg" />
              <span className="sc-wf__line sc-wf__line--md" />
              <span className="sc-wf__pill-accent" />
            </div>
            <div className="sc-wf__glow-orb" />
          </div>
        </div>
      )}

      {variant === "apple-center" && (
        <div className="sc-wf__canvas">
          <div className="sc-wf__top-bar sc-wf__top-bar--center">
            <span className="sc-wf__line sc-wf__line--sm" />
          </div>
          <div className="sc-wf__center-col">
            <span className="sc-wf__line sc-wf__line--md" />
            <div className="sc-wf__round-stage">
              <span className="sc-wf__stage-box" />
              <div className="sc-wf__stage-list">
                <span className="sc-wf__pill-accent" />
                <span className="sc-wf__line sc-wf__line--full" />
                <span className="sc-wf__line sc-wf__line--md" />
              </div>
            </div>
          </div>
        </div>
      )}

      {variant === "side-rail" && (
        <div className="sc-wf__rail-layout">
          <div className="sc-wf__rail">
            <span className="sc-wf__dot" />
            <span className="sc-wf__line sc-wf__line--full" />
            <span className="sc-wf__line sc-wf__line--md" />
            <span className="sc-wf__line sc-wf__line--md" />
          </div>
          <div className="sc-wf__rail-main">
            <span className="sc-wf__line sc-wf__line--lg" />
            <div className="sc-wf__diptych">
              <span className="sc-wf__block sc-wf__block--wide" />
              <span className="sc-wf__block" />
            </div>
          </div>
        </div>
      )}

      {variant === "swiss-grid" && (
        <div className="sc-wf__swiss">
          <div className="sc-wf__swiss-top">
            <span className="sc-wf__line sc-wf__line--sm" />
            <span className="sc-wf__accent-bar" />
          </div>
          <div className="sc-wf__swiss-split">
            <div className="sc-wf__swiss-cell">
              <span className="sc-wf__line sc-wf__line--lg" />
              <span className="sc-wf__line sc-wf__line--md" />
              <span className="sc-wf__pill-accent" />
            </div>
            <div className="sc-wf__swiss-cell sc-wf__swiss-cell--media">
              <span className="sc-wf__block" />
              <span className="sc-wf__block" />
            </div>
          </div>
        </div>
      )}

      {variant === "gallery-plates" && (
        <div className="sc-wf__canvas">
          <div className="sc-wf__top-bar">
            <span className="sc-wf__line sc-wf__line--md" />
            <span className="sc-wf__line sc-wf__line--xs" />
          </div>
          <div className="sc-wf__plates">
            <span className="sc-wf__plate" />
            <span className="sc-wf__plate" />
          </div>
        </div>
      )}

      {variant === "bento-mosaic" && (
        <div className="sc-wf__canvas">
          <div className="sc-wf__capsule" />
          <div className="sc-wf__bento">
            <span className="sc-wf__bento-lg" />
            <span className="sc-wf__bento-sm" />
            <span className="sc-wf__bento-accent" />
            <span className="sc-wf__bento-wide" />
          </div>
        </div>
      )}

      {variant === "print-masthead" && (
        <div className="sc-wf__canvas">
          <div className="sc-wf__masthead">
            <span className="sc-wf__line sc-wf__line--md" />
          </div>
          <div className="sc-wf__editorial">
            <div className="sc-wf__stack">
              <span className="sc-wf__accent-bar" />
              <span className="sc-wf__line sc-wf__line--lg" />
              <span className="sc-wf__line sc-wf__line--md" />
            </div>
            <span className="sc-wf__tall-frame" />
          </div>
        </div>
      )}

      {variant === "hifi-deck" && (
        <div className="sc-wf__canvas">
          <div className="sc-wf__seg-bar" />
          <div className="sc-wf__deck">
            <span className="sc-wf__deck-screen" />
            <div className="sc-wf__deck-rows">
              <span className="sc-wf__deck-row is-on" />
              <span className="sc-wf__deck-row" />
              <span className="sc-wf__deck-row" />
            </div>
          </div>
        </div>
      )}

      {variant === "concert-stage" && (
        <div className="sc-wf__canvas sc-wf__canvas--stage">
          <div className="sc-wf__stage-spot" />
          <div className="sc-wf__center-col">
            <span className="sc-wf__medallion" />
            <span className="sc-wf__line sc-wf__line--md" />
            <span className="sc-wf__pill-accent" />
          </div>
        </div>
      )}

      {variant === "zen-column" && (
        <div className="sc-wf__canvas">
          <div className="sc-wf__zen-col">
            <span className="sc-wf__line sc-wf__line--md" />
            <span className="sc-wf__zen-row" />
            <span className="sc-wf__zen-row" />
          </div>
          <div className="sc-wf__bottom-pill" />
        </div>
      )}
    </div>
  );
}

export default function ShowcaseHub({ locale = "ar" }) {
  const isAr = locale === "ar";
  const [filter, setFilter] = useState("all");
  const [copied, setCopied] = useState(false);

  const mode = useSyncExternalStore(subscribeMode, getModeSnapshot, () => "light");
  const picksRaw = useSyncExternalStore(subscribePicks, getPicksSnapshot, () => "[]");

  let picks = [];
  try {
    const parsed = JSON.parse(picksRaw);
    if (Array.isArray(parsed)) picks = parsed;
  } catch {
    picks = [];
  }

  function toggleMode() {
    const next = mode === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-mode", next);
    try {
      localStorage.setItem(MODE_KEY, next);
    } catch {
      // Ignore storage errors.
    }
    window.dispatchEvent(new Event(MODE_EVENT));
  }

  function togglePick(id) {
    const next = picks.includes(id)
      ? picks.filter((x) => x !== id)
      : [...picks, id].sort((a, b) => a - b);
    try {
      localStorage.setItem(PICKS_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage errors.
    }
    window.dispatchEvent(new Event(PICKS_EVENT));
  }

  function clearPicks() {
    try {
      localStorage.setItem(PICKS_KEY, "[]");
    } catch {
      // Ignore storage errors.
    }
    window.dispatchEvent(new Event(PICKS_EVENT));
  }

  async function copyPicks() {
    const selectedItems = showcaseItems.filter((item) => picks.includes(item.id));
    if (selectedItems.length === 0) return;

    const lines = selectedItems.map((item) =>
      isAr
        ? `- رقم ${item.id}: ${item.arName} (${item.enName})\n  ${item.url}`
        : `- #${item.id}: ${item.enName}\n  ${item.url}`
    );

    const text = isAr
      ? `هذه أكثر التصاميم اللي عجبتني لموقعي:\n${lines.join("\n")}`
      : `Here are my favorite portfolio directions:\n${lines.join("\n")}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Ignore restricted clipboard contexts.
    }
  }

  const visibleItems = showcaseItems.filter((item) => {
    if (filter === "light") return item.defaultMode === "light";
    if (filter === "dark") return item.defaultMode === "dark";
    if (filter === "picks") return picks.includes(item.id);
    return true;
  });

  const isDark = mode === "dark";

  return (
    <div className="sc-shell" dir={isAr ? "rtl" : "ltr"} lang={locale}>
      <header className="sc-header">
        <div className="sc-wrap sc-header__inner">
          <div className="sc-brand">
            <Image
              src="/ahmed-saif-profile.webp"
              alt={isAr ? "أحمد سيف" : "Ahmed Saif"}
              width={36}
              height={36}
              priority
              className="sc-brand__avatar"
            />
            <div>
              <strong>{isAr ? "أحمد سيف" : "Ahmed Saif"}</strong>
              <span>{isAr ? "معرض التصاميم المقترحة" : "Portfolio Design Showcase"}</span>
            </div>
          </div>

          <div className="sc-header__tools">
            <button
              type="button"
              className="sc-icon-btn"
              onClick={toggleMode}
              aria-label={
                isAr
                  ? isDark
                    ? "الوضع النهاري"
                    : "الوضع الليلي"
                  : isDark
                    ? "Light mode"
                    : "Dark mode"
              }
            >
              {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            </button>
            <Link className="sc-lang-btn" href={isAr ? "/en" : "/"}>
              <Languages size={14} aria-hidden="true" />
              <span>{isAr ? "English" : "العربية"}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="sc-main">
        <section className="sc-hero">
          <div className="sc-wrap">
            <span className="sc-kicker">
              {isAr ? "١٠ مواقع مختلفة بالكامل · للمعاينة والمقارنة" : "10 Distinct Website Directions · Live Review"}
            </span>
            <h1 className="sc-title">
              {isAr
                ? "مرحباً أحمد — اختر الهوية الأقرب لموسيقاك."
                : "Welcome Ahmed — Choose the identity closest to your sound."}
            </h1>
            <p className="sc-lead">
              {isAr
                ? "جهّزنا لك ١٠ تصاميم مختلفة تماماً في الألوان والخطوط والتخطيط—كلها تجمع بين الرقي والهدوء والحداثة. افتح أي تصميم للمعاينة، وجرّب زرّ التبديل بين الوضع الليلي والنهاري داخل كل موقع."
                : "Ten completely distinct website directions—each modern, calm, and refined in its own palette, typography, and layout. Open any live preview, explore the inner pages, and test each site's Light and Dark mode."}
            </p>

            <div className="sc-tips">
              <div>
                <strong>{isAr ? "١. وضع نهاري وليلي في كل موقع" : "1. Light & Dark on every site"}</strong>
                <span>
                  {isAr
                    ? "٥ مواقع تبدأ نهاري و٥ تبدأ ليلي، ويمكنك قلب الوضع من الزر العلوي."
                    : "5 default to Light and 5 default to Dark—toggle any site from its header."}
                </span>
              </div>
              <div>
                <strong>{isAr ? "٢. صفحات كاملة وتجربة صوتية" : "2. Complete 5-page experiences"}</strong>
                <span>
                  {isAr
                    ? "تصفّح الرئيسية والأعمال والقصة والتواصل، وجرّب تشغيل الفيديوهات مباشرة."
                    : "Explore Home, Works, Story, Contact, and inline YouTube release playback."}
                </span>
              </div>
              <div>
                <strong>{isAr ? "٣. احفظ مفضلتك بنقرة واحدة" : "3. Shortlist your favorites"}</strong>
                <span>
                  {isAr
                    ? "اضغط على القلب في أفضل ٢–٣ تصاميم ثم انسخ اختياراتك لإرسالها مباشرة."
                    : "Heart your top 2–3 directions and copy your shortlist back in one tap."}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="sc-gallery">
          <div className="sc-wrap">
            <div className="sc-filters" role="tablist" aria-label={isAr ? "تصفية الخيارات" : "Filter options"}>
              <button
                type="button"
                role="tab"
                aria-selected={filter === "all"}
                className={`sc-filter-pill ${filter === "all" ? "is-active" : ""}`}
                onClick={() => setFilter("all")}
              >
                {isAr ? "الكل (١٠)" : "All (10)"}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === "light"}
                className={`sc-filter-pill ${filter === "light" ? "is-active" : ""}`}
                onClick={() => setFilter("light")}
              >
                <Sun size={14} aria-hidden="true" />
                <span>{isAr ? "نهاري افتراضياً (٥)" : "Light Default (5)"}</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === "dark"}
                className={`sc-filter-pill ${filter === "dark" ? "is-active" : ""}`}
                onClick={() => setFilter("dark")}
              >
                <Moon size={14} aria-hidden="true" />
                <span>{isAr ? "ليلي افتراضياً (٥)" : "Dark Default (5)"}</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === "picks"}
                className={`sc-filter-pill ${filter === "picks" ? "is-active" : ""}`}
                onClick={() => setFilter("picks")}
              >
                <Heart size={14} aria-hidden="true" />
                <span>
                  {isAr ? `مفضلتي (${picks.length})` : `Shortlist (${picks.length})`}
                </span>
              </button>
            </div>

            {visibleItems.length === 0 ? (
              <div className="sc-empty">
                <p>
                  {isAr
                    ? "لم تضف أي تصميم إلى المفضلة بعد. اضغط على أيقونة القلب في التصاميم التي تعجبك."
                    : "No designs shortlisted yet. Tap the heart icon on any directions you love."}
                </p>
                <button
                  type="button"
                  className="sc-btn sc-btn--secondary"
                  onClick={() => setFilter("all")}
                >
                  {isAr ? "عرض كل التصاميم" : "Show all 10 designs"}
                </button>
              </div>
            ) : (
              <div className="sc-grid">
                {visibleItems.map((item) => {
                  const picked = picks.includes(item.id);
                  const num = String(item.id).padStart(2, "0");
                  return (
                    <article
                      key={item.id}
                      className={`sc-card ${picked ? "is-picked" : ""}`}
                    >
                      <div className="sc-card__preview">
                        <MiniWireframe variant={item.wireframe} colors={item.colors} />
                        <span className="sc-card__num">{num}</span>
                        <span className="sc-card__mode-tag">
                          {item.defaultMode === "light"
                            ? isAr
                              ? "نهاري + ليلي"
                              : "Light + Dark"
                            : isAr
                              ? "ليلي + نهاري"
                              : "Dark + Light"}
                        </span>
                        <button
                          type="button"
                          className={`sc-heart-btn ${picked ? "is-picked" : ""}`}
                          onClick={() => togglePick(item.id)}
                          aria-pressed={picked}
                          aria-label={
                            isAr
                              ? picked
                                ? `إزالة رقم ${item.id} من المفضلة`
                                : `إضافة رقم ${item.id} إلى المفضلة`
                              : picked
                                ? `Remove #${item.id} from shortlist`
                                : `Shortlist #${item.id}`
                          }
                        >
                          <Heart
                            size={16}
                            fill={picked ? "currentColor" : "none"}
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      <div className="sc-card__body">
                        <div className="sc-card__head">
                          <div>
                            <h2>{isAr ? item.arName : item.enName}</h2>
                            <p className="sc-card__sub">
                              {isAr ? item.enName : item.arName}
                            </p>
                          </div>
                          <div className="sc-swatches" aria-hidden="true">
                            <span style={{ background: item.colors.bg }} />
                            <span style={{ background: item.colors.surface }} />
                            <span style={{ background: item.colors.accent }} />
                          </div>
                        </div>

                        <p className="sc-card__vibe">
                          {isAr ? item.arVibe : item.enVibe}
                        </p>

                        <div className="sc-card__meta">
                          <span>{isAr ? item.arLayout : item.enLayout}</span>
                          <small>{isAr ? item.arFont : item.enFont}</small>
                        </div>

                        <div className="sc-card__actions">
                          <a
                            className="sc-btn sc-btn--primary"
                            href={isAr ? item.url : `${item.url}/en`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>{isAr ? "افتح المعاينة" : "Open Preview"}</span>
                            <ExternalLink size={14} aria-hidden="true" />
                          </a>

                          <a
                            className="sc-btn sc-btn--secondary"
                            href={isAr ? `${item.url}/en` : item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>{isAr ? "English" : "العربية"}</span>
                            <ExternalLink size={13} aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="sc-footer">
        <div className="sc-wrap sc-footer__inner">
          <span>
            {isAr
              ? "معرض خاص لاختيار تصميم الموقع الرسمي للفنان أحمد سيف · A7MD Studio"
              : "Private design selection showcase for Ahmed Saif · A7MD Studio"}
          </span>
        </div>
      </footer>

      {picks.length > 0 && (
        <div className="sc-shortlist-bar" role="region" aria-live="polite">
          <div className="sc-shortlist-bar__inner">
            <div className="sc-shortlist-bar__text">
              <Heart size={16} fill="currentColor" aria-hidden="true" />
              <span>
                {isAr
                  ? `اختياراتك المفضلة (${picks.length}): ${picks.map((n) => `#${n}`).join("، ")}`
                  : `Your shortlist (${picks.length}): ${picks.map((n) => `#${n}`).join(", ")}`}
              </span>
            </div>

            <div className="sc-shortlist-bar__actions">
              <button
                type="button"
                className="sc-btn sc-btn--primary sc-btn--sm"
                onClick={copyPicks}
              >
                {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                <span>
                  {copied
                    ? isAr
                      ? "تم النسخ — الصقها في واتساب"
                      : "Copied — paste in WhatsApp"
                    : isAr
                      ? "نسخ اختياراتي"
                      : "Copy my picks"}
                </span>
              </button>
              <button
                type="button"
                className="sc-icon-btn sc-icon-btn--sm"
                onClick={clearPicks}
                aria-label={isAr ? "مسح المفضلة" : "Clear shortlist"}
              >
                <X size={15} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
