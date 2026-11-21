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
      <section className="bn-section">
        <div className="bn-wrap">
          <div className="bn-mosaic">
            <div className="bn-tile bn-tile--hero">
              <div>
                <span className="bn-pill">{t.aboutPage.eyebrow}</span>
                <h1 className="bn-hero-title">{t.aboutPage.title}</h1>
                <p className="bn-hero-lead">{t.aboutPage.body}</p>
              </div>
              <div className="bn-actions">
                <Link className="bn-btn bn-btn--primary" href={getLocalePath(locale, "works")}>
                  <span>{t.hero.explore}</span>
                  <DirectionalArrow size={15} aria-hidden="true" />
                </Link>
                <Link className="bn-btn bn-btn--soft" href={getLocalePath(locale, "contact")}>
                  <span>{t.contactPage.primaryAction}</span>
                </Link>
              </div>
            </div>

            <figure className="bn-tile bn-tile--portrait">
              <div className="bn-portrait-box">
                <Image
                  src="/ahmed-saif-profile.webp"
                  alt={t.hero.title}
                  width={500}
                  height={500}
                  priority
                />
              </div>
              <figcaption className="bn-portrait-cap">
                <div>
                  <strong>{t.hero.title}</strong>
                  <span>{isAr ? "صنعاء، اليمن" : "Sana'a, Yemen"}</span>
                </div>
                <span className="bn-pill">A7MD Studio</span>
              </figcaption>
            </figure>

            <div className="bn-tile bn-tile--accent bn-col-12 bn-quote-banner">
              <blockquote>“{t.aboutPage.statement}”</blockquote>
              <span>— {t.hero.title}</span>
            </div>

            {t.aboutPage.principles.map((p) => (
              <div className="bn-tile bn-col-4" key={p.title}>
                <h2 className="bn-tile-h2">{p.title}</h2>
                <p className="bn-tile-body">{p.body}</p>
              </div>
            ))}

            <div className="bn-tile bn-col-12">
              <span className="bn-label">{isAr ? "المسار الزمني" : "Timeline"}</span>
              <h2 className="bn-tile-h2">
                {isAr ? "محطات مختارة (٢٠٢٠ – ٢٠٢٦)" : "Selected Chapters (2020 – 2026)"}
              </h2>
              <div className="bn-timeline-grid">
                {t.timeline.map((step) => (
                  <div className="bn-timeline-item" key={step.year}>
                    <span className="bn-pill">{step.year}</span>
                    <p>{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
