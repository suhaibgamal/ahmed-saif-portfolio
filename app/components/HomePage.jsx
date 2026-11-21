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
import EditorialLookbook from "./EditorialLookbook";
import SiteChrome, { SocialIcon } from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const DirectionalArrow = isAr ? ArrowLeft : ArrowRight;

  const lookbookTracks = [works[0], works[1], works[2], works[4]].map((work) => {
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
      {/* 1. Magazine Cover Spread Hero */}
      <section className="ed-cover">
        <div className="ed-wrap">
          <div className="ed-cover__grid">
            <div className="ed-cover__editorial">
              <p className="ed-kicker">
                {isAr
                  ? "ملف العدد · صوتٌ يمانيّ في فضاءٍ معاصر"
                  : "Cover Feature · A Yemeni Voice in Modern Form"}
              </p>
              <h1 className="ed-cover__title">
                {isAr
                  ? "حين يصبح اللحن الصادق لغةً تعبر المكان والزمن."
                  : "When an honest melody speaks beyond border and era."}
              </h1>
              <p className="ed-cover__deck">{t.hero.lead}</p>
              <div className="ed-actions">
                <a className="ed-btn ed-btn--primary" href="#lookbook">
                  <span>{isAr ? "افتح ملف الاستماع" : "Open listening folio"}</span>
                  <DirectionalArrow size={15} aria-hidden="true" />
                </a>
                <Link
                  className="ed-btn ed-btn--outline"
                  href={getLocalePath(locale, "works")}
                >
                  <span>{t.hero.explore}</span>
                </Link>
              </div>

              <div className="ed-cover__credits">
                {t.stats.map((stat) => (
                  <div key={stat.value}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <figure className="ed-cover__portrait">
              <Image
                src="/ahmed-saif-profile.webp"
                alt={t.hero.title}
                width={540}
                height={680}
                priority
                sizes="(max-width: 900px) 100vw, 440px"
              />
              <figcaption>
                <span>{t.hero.title}</span>
                <span>{isAr ? "بورتريه الاستوديو · صنعاء" : "Studio Portrait · Sana'a"}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 2. Double-Ruled Pull Quote & Feature Essay */}
      <section className="ed-section ed-section--tint">
        <div className="ed-wrap">
          <blockquote className="ed-pullquote">
            “{t.aboutPage.statement}”
          </blockquote>

          <div className="ed-essay-grid">
            <figure className="ed-essay-photo">
              <Image
                src="/visual-sunlit-oud.webp"
                alt={t.studio.eyebrow}
                width={1000}
                height={620}
                sizes="(max-width: 900px) 100vw, 560px"
              />
              <figcaption>{t.studio.title}</figcaption>
            </figure>

            <div className="ed-essay-copy">
              <p className="ed-kicker">{t.studio.eyebrow}</p>
              <h2 className="ed-h2">{t.credits.title}</h2>
              <p className="ed-dropcap">{t.studio.body}</p>
              <p className="ed-prose">{t.credits.body}</p>
              <Link className="ed-link" href={getLocalePath(locale, "about")}>
                <span>{isAr ? "اقرأ المقال والسيرة الكاملة" : "Read the full profile"}</span>
                <DirectionalArrow size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Discography Lookbook Spread */}
      <section className="ed-section" id="lookbook">
        <div className="ed-wrap">
          <div className="ed-section-head">
            <div>
              <p className="ed-kicker">{t.featuredWorks.eyebrow}</p>
              <h2 className="ed-h2">{t.featuredWorks.title}</h2>
            </div>
            <Link className="ed-link" href={getLocalePath(locale, "works")}>
              <span>{isAr ? "فهرس الأعمال الكامل (١٨)" : "Catalogue raisonné (18)"}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <EditorialLookbook tracks={lookbookTracks} locale={locale} />
        </div>
      </section>

      {/* 4. Listening Folio & Press Correspondence */}
      <section className="ed-section ed-section--tint">
        <div className="ed-wrap ed-closing">
          <div>
            <p className="ed-kicker">{t.strip.label}</p>
            <h2 className="ed-h2">{t.strip.title}</h2>
            <div className="ed-platforms">
              {streaming.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-platform-link"
                >
                  <SocialIcon name={item.icon} size={15} />
                  <span>{item.label}</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="ed-closing__sheet">
            <p className="ed-kicker">{t.contactPage.eyebrow}</p>
            <h3>{t.contactPage.title}</h3>
            <p>{t.contactPage.body}</p>
            <Link
              className="ed-btn ed-btn--primary"
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
