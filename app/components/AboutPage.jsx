import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { content, getLocalePath } from "../data";
import SiteChrome from "./SiteChrome";

export default function AboutPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const DirectionalArrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="about">
      <section className="sov-page-head">
        <div className="sov-container">
          <div className="sov-story-hero">
            <div>
              <p className="eyebrow">{t.aboutPage.eyebrow}</p>
              <h1 className="sov-page-title">{t.aboutPage.title}</h1>
              <p className="sov-page-lead">{t.aboutPage.body}</p>
            </div>

            <figure className="sov-portrait-plate">
              <div className="sov-portrait-plate__inner">
                <Image
                  src="/ahmed-saif-profile.webp"
                  alt={t.hero.title}
                  width={480}
                  height={480}
                  priority
                  sizes="(max-width: 900px) 100vw, 400px"
                  className="sov-portrait-plate__img"
                />
              </div>
              <figcaption className="sov-portrait-plate__cap">
                <span>{t.hero.title}</span>
                <span>{isAr ? "صنعاء، اليمن" : "Sana'a, Yemen"}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="sov-section sov-section--quote-band">
        <div className="sov-container">
          <blockquote className="sov-monument-quote">
            “{t.aboutPage.statement}”
          </blockquote>
        </div>
      </section>

      <section className="sov-section">
        <div className="sov-container">
          <div className="sov-section-head">
            <div>
              <p className="eyebrow">{t.credits.eyebrow}</p>
              <h2 className="sov-h2">{t.credits.title}</h2>
            </div>
          </div>

          <div className="sov-pillars">
            {t.aboutPage.principles.map((item) => (
              <div className="sov-pillar" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sov-section sov-section--subtle-band">
        <div className="sov-container">
          <div className="sov-section-head">
            <div>
              <p className="eyebrow">
                {isAr ? "المحطات الزمنية" : "Chronicle"}
              </p>
              <h2 className="sov-h2">
                {isAr ? "مسيرة أعمال من ٢٠٢٠ حتى ٢٠٢٦" : "Milestones from 2020 to 2026"}
              </h2>
            </div>
          </div>

          <ol className="sov-timeline">
            {t.timeline.map((step) => (
              <li className="sov-timeline__item" key={step.year}>
                <span className="sov-timeline__year">{step.year}</span>
                <p className="sov-timeline__label">{step.label}</p>
              </li>
            ))}
          </ol>

          <div className="sov-story-actions">
            <Link
              className="btn btn-primary"
              href={getLocalePath(locale, "works")}
            >
              <span>{t.hero.explore}</span>
              <DirectionalArrow size={16} aria-hidden="true" />
            </Link>
            <Link
              className="btn btn-ghost"
              href={getLocalePath(locale, "contact")}
            >
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
