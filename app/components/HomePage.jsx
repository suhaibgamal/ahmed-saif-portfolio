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
import SiteChrome, { SocialIcon } from "./SiteChrome";
import SwissLedger from "./SwissLedger";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const DirectionalArrow = isAr ? ArrowLeft : ArrowRight;

  const ledgerWorks = works.slice(0, 6).map((work) => {
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
      {/* 1. 50/50 Vertical-Ruled Swiss Monograph Hero */}
      <section className="sw-hero">
        <div className="sw-hero__copy-col">
          <div className="sw-hero__copy-inner">
            <span className="sw-tag">
              {isAr ? "أرشيف موسيقي · ٢٠٢٠ – ٢٠٢٦" : "Musical Monograph · 2020 – 2026"}
            </span>
            <h1 className="sw-hero__title">
              {isAr
                ? "هندسة اللحن اليمني بصوتٍ هادئ ومعاصر."
                : "Yemeni song architecture, calm and contemporary."}
            </h1>
            <p className="sw-hero__lead">{t.hero.lead}</p>
            <div className="sw-actions">
              <a className="sw-btn sw-btn--primary" href="#repertoire">
                <span>{isAr ? "تصفح الفهرس المختار" : "Inspect repertoire"}</span>
                <DirectionalArrow size={15} aria-hidden="true" />
              </a>
              <Link
                className="sw-btn sw-btn--outline"
                href={getLocalePath(locale, "works")}
              >
                <span>{t.hero.explore}</span>
              </Link>
            </div>
          </div>

          <dl className="sw-hero__metrics">
            {t.stats.map((stat) => (
              <div key={stat.value}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="sw-hero__media-col">
          <div className="sw-hero__portrait-cell">
            <Image
              src="/ahmed-saif-profile.webp"
              alt={t.hero.title}
              width={640}
              height={540}
              priority
              sizes="(max-width: 960px) 100vw, 48vw"
            />
          </div>
          <div className="sw-hero__arch-cell">
            <Image
              src="/visual-botanical-acoustic.webp"
              alt={isAr ? "تفاصيل جدار استوديو صوتي معماري" : "Architectural cedar acoustic studio detail"}
              width={800}
              height={420}
              priority
              sizes="(max-width: 960px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      {/* 2. Interactive Ruled Discography Ledger */}
      <section className="sw-band" id="repertoire">
        <div className="sw-band__header">
          <div>
            <span className="sw-tag">{t.featuredWorks.eyebrow}</span>
            <h2 className="sw-h2">{t.featuredWorks.title}</h2>
          </div>
          <Link className="sw-inline-link" href={getLocalePath(locale, "works")}>
            <span>{isAr ? "كل الأعمال (١٨)" : "Full archive (18)"}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <SwissLedger tracks={ledgerWorks} locale={locale} />
      </section>

      {/* 3. Horizontal 6-Cell Architectural Chronology */}
      <section className="sw-band">
        <div className="sw-band__header">
          <div>
            <span className="sw-tag">{isAr ? "التسلسل الزمني" : "Chronology"}</span>
            <h2 className="sw-h2">
              {isAr ? "ستّ سنوات من الإصدارات والمشاركات" : "Six Years of Releases & Stages"}
            </h2>
          </div>
          <Link className="sw-inline-link" href={getLocalePath(locale, "about")}>
            <span>{isAr ? "اقرأ السيرة الكاملة" : "Read artist dossier"}</span>
            <DirectionalArrow size={15} aria-hidden="true" />
          </Link>
        </div>

        <ol className="sw-timeline-strip">
          {t.timeline.map((step) => (
            <li key={step.year}>
              <span className="sw-timeline-strip__year">{step.year}</span>
              <p>{step.label}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 4. 3-Cell Studio Craft Blueprint */}
      <section className="sw-band">
        <div className="sw-band__header">
          <div>
            <span className="sw-tag">{t.studio.eyebrow}</span>
            <h2 className="sw-h2">{t.studio.title}</h2>
          </div>
        </div>

        <div className="sw-craft-grid">
          {t.studio.cards.map((card) => (
            <article className="sw-craft-cell" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Streaming & Representation Split Band */}
      <section className="sw-band sw-closing-split">
        <div className="sw-closing-cell">
          <span className="sw-tag">{t.strip.label}</span>
          <h2 className="sw-h3">{t.strip.title}</h2>
          <div className="sw-platform-grid">
            {streaming.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="sw-platform-btn"
              >
                <SocialIcon name={item.icon} size={15} />
                <span>{item.label}</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="sw-closing-cell sw-closing-cell--tinted">
          <span className="sw-tag">{t.contactPage.eyebrow}</span>
          <h2 className="sw-h3">{t.contactPage.title}</h2>
          <p className="sw-body">{t.contactPage.body}</p>
          <Link className="sw-btn sw-btn--primary" href={getLocalePath(locale, "contact")}>
            <span>{t.contactPage.primaryAction}</span>
            <DirectionalArrow size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
