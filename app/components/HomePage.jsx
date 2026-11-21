import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import {
  content,
  getLocalePath,
  getWorkCopy,
  getWorkPath,
  socialLinks,
  works
} from "../data";
import SiteChrome, { SocialIcon } from "./SiteChrome";
import SymphonyProgram from "./SymphonyProgram";

function mapTrack(work, locale) {
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
}

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const DirectionalArrow = isAr ? ArrowLeft : ArrowRight;

  const actOne = [works[0], works[1], works[2]].map((w) => mapTrack(w, locale));
  const actTwo = [works[3], works[4], works[5]].map((w) => mapTrack(w, locale));
  const marqueePair = [works[0], works[1]];

  const streaming = socialLinks.filter((s) =>
    ["youtube", "spotify", "appleMusic", "anghami", "soundcloud"].includes(s.icon)
  );

  return (
    <SiteChrome headerMode="overlay" locale={locale} page="home">
      {/* 1. Centered Concert Hall Spotlight Hero */}
      <section className="sym-hero">
        <div className="sym-hero__bg" aria-hidden="true">
          <Image
            src="/visual-concert-hall.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="sym-hero__img"
          />
          <div className="sym-hero__vignette" />
        </div>

        <div className="sym-wrap sym-hero__content">
          <div className="sym-medallion">
            <Image
              src="/ahmed-saif-profile.webp"
              alt={t.hero.title}
              width={112}
              height={112}
              priority
            />
          </div>

          <p className="sym-hero__season">
            {isAr
              ? "إكسبو أوساكا ٢٠٢٥ · مسلسل الضايعة ٢٠٢٦ · A7MD Studio"
              : "Expo Osaka 2025 · Al-Dhayeh Theme 2026 · A7MD Studio"}
          </p>

          <h1 className="sym-hero__title">{t.hero.title}</h1>
          <p className="sym-hero__role">{t.hero.role}</p>
          <p className="sym-hero__lead">{t.hero.lead}</p>

          <div className="sym-actions sym-actions--center">
            <a className="sym-btn sym-btn--gold" href="#program">
              <Play size={15} fill="currentColor" aria-hidden="true" />
              <span>{isAr ? "شاهد برنامج الأمسية" : "View concert program"}</span>
            </a>
            <Link
              className="sym-btn sym-btn--hero-line"
              href={getLocalePath(locale, "works")}
            >
              <span>{t.hero.explore}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Marquee Dual Spotlight Cards (Al-Dhayeh 2026 + Expo Osaka 2025) */}
      <section className="sym-section sym-section--marquee">
        <div className="sym-wrap">
          <div className="sym-marquee-grid">
            {marqueePair.map((work) => {
              const copy = getWorkCopy(work, locale);
              return (
                <Link
                  key={work.youtubeId}
                  href={getWorkPath(locale, work)}
                  className="sym-marquee-card"
                >
                  <div className="sym-marquee-card__art">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg`}
                      alt={copy.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="sym-marquee-card__body">
                    <span className="sym-kicker">
                      {work.year} · {copy.type}
                    </span>
                    <h2>{copy.title}</h2>
                    <p>{copy.note}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Two-Act Concert Repertoire Program */}
      <section className="sym-section" id="program">
        <div className="sym-wrap">
          <div className="sym-section-head">
            <div>
              <p className="sym-kicker">{t.featuredWorks.eyebrow}</p>
              <h2 className="sym-h2">
                {isAr ? "برنامج الأعمال المختارة" : "Evening Repertoire Program"}
              </h2>
            </div>
            <Link className="sym-link" href={getLocalePath(locale, "works")}>
              <span>{isAr ? "الأرشيف الكامل (١٨)" : "Full repertoire (18)"}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <SymphonyProgram actOne={actOne} actTwo={actTwo} locale={locale} />
        </div>
      </section>

      {/* 4. Program Notes (Studio Craft & Quote) */}
      <section className="sym-section sym-section--surface">
        <div className="sym-wrap">
          <blockquote className="sym-quote">“{t.aboutPage.statement}”</blockquote>
          <div className="sym-notes-grid">
            {t.studio.cards.map((card) => (
              <div className="sym-note-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Streaming & Live Bookings Invitation */}
      <section className="sym-section">
        <div className="sym-wrap sym-closing">
          <div>
            <p className="sym-kicker">{t.strip.label}</p>
            <h2 className="sym-h2">{t.strip.title}</h2>
            <div className="sym-platforms">
              {streaming.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sym-platform-chip"
                >
                  <SocialIcon name={item.icon} size={15} />
                  <span>{item.label}</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="sym-closing__card">
            <p className="sym-kicker">{t.contactPage.eyebrow}</p>
            <h3>
              {isAr
                ? "للمهرجانات الدولية، الأمسيات الموسيقية، وتترات الدراما"
                : "For live festivals, gala stages & screen commissions"}
            </h3>
            <p>{t.contactPage.body}</p>
            <Link className="sym-btn sym-btn--gold" href={getLocalePath(locale, "contact")}>
              <span>{t.contactPage.primaryAction}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
