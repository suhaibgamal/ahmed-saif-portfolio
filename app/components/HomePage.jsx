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
import KinfolkTracklist from "./KinfolkTracklist";
import SiteChrome, { SocialIcon } from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const DirectionalArrow = isAr ? ArrowLeft : ArrowRight;

  const selectedWorks = [works[0], works[1], works[3], works[4], works[5]].map(
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
      {/* 1. Sunlit Studio Diptych Opening */}
      <section className="kin-hero">
        <div className="kin-wrap">
          <div className="kin-hero__header">
            <p className="kin-eyebrow">
              {isAr
                ? "استوديو أحمد · سجلّ صوتي ومرئي"
                : "A7MD Studio · Acoustic Journal"}
            </p>
            <h1 className="kin-hero__title">
              {isAr
                ? "دفء اللحن اليمني، حين يُصاغ على مهل."
                : "Warm Yemeni melody, shaped without hurry."}
            </h1>
            <p className="kin-hero__lead">{t.hero.lead}</p>
            <div className="kin-actions">
              <a className="kin-btn kin-btn--primary" href="#sessions">
                <span>{isAr ? "استمع للجلسات المختارة" : "Listen to sessions"}</span>
                <DirectionalArrow size={15} aria-hidden="true" />
              </a>
              <Link
                className="kin-btn kin-btn--outline"
                href={getLocalePath(locale, "works")}
              >
                <span>{t.hero.explore}</span>
              </Link>
            </div>
          </div>

          <div className="kin-diptych">
            <figure className="kin-diptych__wide">
              <Image
                src="/visual-sunlit-oud.webp"
                alt={isAr ? "العود في ضوء الاستوديو الدافئ" : "Handcrafted oud in sunlit studio"}
                width={1200}
                height={670}
                priority
                sizes="(max-width: 1040px) 100vw, 62vw"
              />
              <figcaption>
                {isAr
                  ? "مساحة التأليف والعود — A7MD Studio"
                  : "Composition room & oud — A7MD Studio"}
              </figcaption>
            </figure>

            <figure className="kin-diptych__portrait">
              <Image
                src="/ahmed-saif-profile.webp"
                alt={t.hero.title}
                width={480}
                height={560}
                priority
                sizes="(max-width: 1040px) 100vw, 28vw"
              />
              <figcaption>
                <strong>{t.hero.title}</strong>
                <span>{t.hero.role}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 2. Intimate Accordion Listening Sessions */}
      <section className="kin-section" id="sessions">
        <div className="kin-wrap">
          <div className="kin-section-head">
            <div>
              <p className="kin-eyebrow">{t.featuredWorks.eyebrow}</p>
              <h2 className="kin-h2">{t.featuredWorks.title}</h2>
            </div>
            <Link className="kin-link" href={getLocalePath(locale, "works")}>
              <span>{isAr ? "فهرس الأعمال الكامل" : "Full discography index"}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <KinfolkTracklist tracks={selectedWorks} locale={locale} />
        </div>
      </section>

      {/* 3. Poetic Calligraphic / Literary Interlude */}
      <section className="kin-quote-section">
        <div className="kin-wrap">
          <blockquote className="kin-poetic-quote">
            “{t.aboutPage.statement}”
          </blockquote>
          <p className="kin-poetic-attr">— {t.hero.title}</p>
        </div>
      </section>

      {/* 4. Studio Notes Narrative & Craft Chapters */}
      <section className="kin-section">
        <div className="kin-wrap">
          <div className="kin-editorial-split">
            <div>
              <p className="kin-eyebrow">{t.studio.eyebrow}</p>
              <h2 className="kin-h2">{t.studio.title}</h2>
              <p className="kin-body">{t.studio.body}</p>
              <p className="kin-body">{t.credits.body}</p>
              <Link className="kin-link" href={getLocalePath(locale, "about")}>
                <span>{isAr ? "تابع القصة والمحطات" : "Continue to artist story"}</span>
                <DirectionalArrow size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="kin-chapters">
              {t.studio.cards.map((item) => (
                <article className="kin-chapter" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Listening Channels & Correspondence Strip */}
      <section className="kin-section kin-section--oat">
        <div className="kin-wrap kin-closing">
          <div>
            <p className="kin-eyebrow">{t.strip.label}</p>
            <h2 className="kin-h3">{t.strip.title}</h2>
            <div className="kin-platforms">
              {streaming.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kin-platform-link"
                >
                  <SocialIcon name={item.icon} size={15} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="kin-closing__box">
            <p className="kin-eyebrow">{t.contactPage.eyebrow}</p>
            <h3>{t.contactPage.title}</h3>
            <p>{t.contactPage.body}</p>
            <Link
              className="kin-btn kin-btn--primary"
              href={getLocalePath(locale, "contact")}
            >
              <span>{t.contactPage.primaryAction}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
