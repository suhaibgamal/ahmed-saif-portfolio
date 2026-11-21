import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  content,
  getLocalePath,
  getWorkCopy,
  getWorkPath,
  socialLinks,
  works
} from "../data";
import SiteChrome from "./SiteChrome";
import ZenTrackList from "./ZenTrackList";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const DirectionalArrow = isAr ? ArrowLeft : ArrowRight;

  const selectedTracks = works.slice(0, 6).map((work) => {
    const copy = getWorkCopy(work, locale);
    return {
      youtubeId: work.youtubeId,
      year: work.year,
      durationSeconds: work.durationSeconds,
      title: copy.title,
      type: copy.type,
      mood: copy.mood,
      note: copy.note,
      href: getWorkPath(locale, work)
    };
  });

  const streaming = socialLinks.filter((s) =>
    ["youtube", "spotify", "appleMusic", "anghami", "soundcloud"].includes(s.icon)
  );

  return (
    <SiteChrome locale={locale} page="home">
      {/* 1. Quiet Single-Column Meditative Opening */}
      <section className="zn-hero">
        <div className="zn-col">
          <p className="zn-label">
            {isAr ? "صنعاء · A7MD Studio" : "Sana'a · A7MD Studio"}
          </p>
          <h1 className="zn-hero__title">
            {isAr
              ? "أغنية هادئة، ولحن يبقى في الذاكرة."
              : "Quiet songs, shaped to linger."}
          </h1>
          <p className="zn-hero__lead">{t.hero.lead}</p>

          <div className="zn-actions">
            <a className="zn-btn zn-btn--sand" href="#listen">
              <span>{isAr ? "استمع بهدوء" : "Begin listening"}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </a>
            <Link className="zn-btn zn-btn--quiet" href={getLocalePath(locale, "works")}>
              <span>{t.hero.explore}</span>
            </Link>
          </div>

          <div className="zn-still-pair">
            <figure className="zn-still-pair__portrait">
              <Image
                src="/ahmed-saif-profile.webp"
                alt={t.hero.title}
                width={320}
                height={380}
                priority
              />
            </figure>
            <figure className="zn-still-pair__space">
              <Image
                src="/visual-botanical-acoustic.webp"
                alt={t.studio.eyebrow}
                width={900}
                height={520}
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 2. Poetic Pause */}
      <section className="zn-pause">
        <div className="zn-col">
          <blockquote className="zn-quote">“{t.aboutPage.statement}”</blockquote>
        </div>
      </section>

      {/* 3. Inline Expandable Listening Index */}
      <section className="zn-section" id="listen">
        <div className="zn-col">
          <div className="zn-head">
            <div>
              <p className="zn-label">{t.featuredWorks.eyebrow}</p>
              <h2 className="zn-h2">{t.featuredWorks.title}</h2>
            </div>
            <Link className="zn-link" href={getLocalePath(locale, "works")}>
              <span>{isAr ? "الأرشيف الكامل (١٨)" : "Full archive (18)"}</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <p className="zn-hint">
            {isAr
              ? "اضغط على أي عمل لفتح نافذة الاستماع في مكانه."
              : "Select any release below to open its listening frame in place."}
          </p>

          <ZenTrackList tracks={selectedTracks} locale={locale} />
        </div>
      </section>

      {/* 4. Distilled Studio Ethos */}
      <section className="zn-section">
        <div className="zn-col">
          <p className="zn-label">{t.studio.eyebrow}</p>
          <h2 className="zn-h2">{t.studio.title}</h2>
          <p className="zn-prose">{t.studio.body}</p>

          <div className="zn-ethos">
            {t.studio.cards.map((card) => (
              <div className="zn-ethos__item" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>

          <Link className="zn-link" href={getLocalePath(locale, "about")}>
            <span>{isAr ? "اقرأ القصة والمحطات" : "Read the story & timeline"}</span>
            <DirectionalArrow size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 5. Quiet Streaming & Direct Note */}
      <section className="zn-section">
        <div className="zn-col zn-closing">
          <div>
            <p className="zn-label">{t.strip.label}</p>
            <div className="zn-text-platforms">
              {streaming.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="zn-closing__contact">
            <p className="zn-label">{t.contactPage.eyebrow}</p>
            <p className="zn-prose">{t.contactPage.body}</p>
            <Link className="zn-btn zn-btn--sand" href={getLocalePath(locale, "contact")}>
              <span>{t.contactPage.primaryAction}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
