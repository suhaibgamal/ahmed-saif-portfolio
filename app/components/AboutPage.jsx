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
      <section className="air-page-intro air-page-intro--centered">
        <div className="air-container air-container--narrow">
          <div className="air-story-portrait">
            <Image
              src="/ahmed-saif-profile.webp"
              alt={t.hero.title}
              width={200}
              height={200}
              priority
            />
          </div>
          <p className="air-kicker">{t.aboutPage.eyebrow}</p>
          <h1 className="air-page-title">{t.aboutPage.title}</h1>
          <p className="air-page-lead">{t.aboutPage.body}</p>
        </div>
      </section>

      <section className="air-section air-section--tinted">
        <div className="air-container air-container--narrow">
          <blockquote className="air-quote-card">
            “{t.aboutPage.statement}”
          </blockquote>

          <div className="air-principles-grid">
            {t.aboutPage.principles.map((item) => (
              <div className="air-principle-card" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="air-section">
        <div className="air-container">
          <div className="air-section-head">
            <div>
              <p className="air-kicker">{isAr ? "المسيرة" : "Timeline"}</p>
              <h2 className="air-h2">
                {isAr ? "محطات مختارة (٢٠٢٠ – ٢٠٢٦)" : "Key Chapters (2020 – 2026)"}
              </h2>
            </div>
          </div>

          <div className="air-timeline-cards">
            {t.timeline.map((step) => (
              <div className="air-timeline-card" key={step.year}>
                <span className="air-chip">{step.year}</span>
                <p>{step.label}</p>
              </div>
            ))}
          </div>

          <div className="air-actions air-actions--spaced">
            <Link className="air-btn air-btn--primary" href={getLocalePath(locale, "works")}>
              <span>{t.hero.explore}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
            <Link className="air-btn air-btn--secondary" href={getLocalePath(locale, "contact")}>
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
