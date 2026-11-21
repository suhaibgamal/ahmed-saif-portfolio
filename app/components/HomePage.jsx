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
import HiFiListeningDeck from "./HiFiListeningDeck";
import SiteChrome, { SocialIcon } from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const DirectionalArrow = isAr ? ArrowLeft : ArrowRight;

  const masterTracks = [works[0], works[1], works[2], works[3], works[4]].map(
    (work) => {
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
  );

  const streaming = socialLinks.filter((s) =>
    ["youtube", "spotify", "appleMusic", "anghami", "soundcloud"].includes(s.icon)
  );

  return (
    <SiteChrome locale={locale} page="home">
      {/* 1. Tactile Hi-Fi Instrument Chassis Hero */}
      <section className="hf-section">
        <div className="hf-wrap">
          <div className="hf-chassis hf-hero-chassis">
            <div className="hf-faceplate">
              <div className="hf-faceplate__copy">
                <p className="hf-kicker">
                  {isAr
                    ? "A7MD Studio · هندسة الصوت واللحن"
                    : "A7MD Studio · Acoustic Craft & Production"}
                </p>
                <h1 className="hf-title">{t.hero.title}</h1>
                <p className="hf-role">{t.hero.role}</p>
                <p className="hf-lead">{t.hero.lead}</p>
                <div className="hf-actions">
                  <Link className="hf-btn hf-btn--brass" href={getLocalePath(locale, "works")}>
                    <span>{t.hero.explore}</span>
                    <DirectionalArrow size={15} aria-hidden="true" />
                  </Link>
                  <Link className="hf-btn hf-btn--metal" href={getLocalePath(locale, "contact")}>
                    <span>{t.contactPage.primaryAction}</span>
                  </Link>
                </div>
              </div>

              <div className="hf-faceplate__right">
                <div className="hf-portrait-bezel">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt={t.hero.title}
                    width={360}
                    height={360}
                    priority
                    sizes="(max-width: 900px) 100vw, 280px"
                  />
                </div>
                <dl className="hf-spec-list">
                  <div>
                    <dt>{isAr ? "الاستوديو" : "Studio"}</dt>
                    <dd>A7MD Studio</dd>
                  </div>
                  <div>
                    <dt>{isAr ? "الأرشيف" : "Catalog"}</dt>
                    <dd className="hf-mono">18</dd>
                  </div>
                  <div>
                    <dt>{isAr ? "المقر" : "Base"}</dt>
                    <dd>{isAr ? "صنعاء، اليمن" : "Sana'a, YE"}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="hf-chassis__divider" />

            <HiFiListeningDeck tracks={masterTracks} locale={locale} />
          </div>
        </div>
      </section>

      {/* 2. 4-Channel Acoustic Vision Matrix */}
      <section className="hf-section hf-section--compact">
        <div className="hf-wrap">
          <div className="hf-section-head">
            <div>
              <p className="hf-kicker">{t.console.eyebrow}</p>
              <h2 className="hf-h2">{t.console.title}</h2>
            </div>
            <p className="hf-head-note">{t.console.body}</p>
          </div>

          <div className="hf-channels">
            {t.console.channels.map((ch) => (
              <div className="hf-chassis hf-channel" key={ch.label}>
                <span className="hf-channel__label">{ch.label}</span>
                <strong className="hf-channel__val">{ch.value}</strong>
                <span className="hf-channel__bar" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Studio Disciplines & Listening Bay */}
      <section className="hf-section">
        <div className="hf-wrap">
          <div className="hf-studio-grid">
            <div className="hf-chassis hf-studio-box">
              <p className="hf-kicker">{t.studio.eyebrow}</p>
              <h2 className="hf-h2">{t.studio.title}</h2>
              <p className="hf-body">{t.studio.body}</p>
              <div className="hf-discipline-stack">
                {t.studio.cards.map((card) => (
                  <div className="hf-discipline" key={card.title}>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                ))}
              </div>
              <Link className="hf-link" href={getLocalePath(locale, "about")}>
                <span>{isAr ? "اقرأ قصة الاستوديو والمسيرة" : "Read studio story & timeline"}</span>
                <DirectionalArrow size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className="hf-right-col">
              <div className="hf-chassis hf-quote-module">
                <p className="hf-kicker">{t.credits.eyebrow}</p>
                <blockquote>“{t.aboutPage.statement}”</blockquote>
                <span>— {t.hero.title}</span>
              </div>

              <div className="hf-chassis hf-stream-module">
                <p className="hf-kicker">{t.strip.label}</p>
                <div className="hf-platforms">
                  {streaming.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hf-platform-btn"
                    >
                      <SocialIcon name={item.icon} size={15} />
                      <span>{item.label}</span>
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="hf-chassis hf-booking-module">
                <p className="hf-kicker">{t.contactPage.eyebrow}</p>
                <h3>{t.contactPage.title}</h3>
                <p>{t.contactPage.body}</p>
                <Link className="hf-btn hf-btn--brass" href={getLocalePath(locale, "contact")}>
                  <span>{t.contactPage.primaryAction}</span>
                  <DirectionalArrow size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
