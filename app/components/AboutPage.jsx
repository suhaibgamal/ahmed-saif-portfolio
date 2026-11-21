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
      <section className="gal-page-head">
        <div className="gal-wrap">
          <div className="gal-hero-split">
            <div>
              <p className="gal-caption">{t.aboutPage.eyebrow}</p>
              <h1 className="gal-page-title">{t.aboutPage.title}</h1>
              <p className="gal-lead">{t.aboutPage.body}</p>
            </div>

            <figure className="gal-portrait-frame">
              <Image
                src="/ahmed-saif-profile.webp"
                alt={t.hero.title}
                width={500}
                height={560}
                priority
                className="gal-silver-img"
              />
              <figcaption>
                <span>{t.hero.title}</span>
                <span>{isAr ? "صنعاء، اليمن" : "Sana'a, Yemen"}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="gal-section gal-section--plinth">
        <div className="gal-wrap">
          <blockquote className="gal-statement">
            “{t.aboutPage.statement}”
          </blockquote>

          <div className="gal-studio-notes">
            {t.aboutPage.principles.map((p) => (
              <div className="gal-studio-note" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gal-section">
        <div className="gal-wrap">
          <p className="gal-caption">{isAr ? "الفهرس الزمني" : "Chronology"}</p>
          <h2 className="gal-h2">
            {isAr ? "محطات مختارة (٢٠٢٠ – ٢٠٢٦)" : "Selected Milestones (2020 – 2026)"}
          </h2>

          <ol className="gal-timeline">
            {t.timeline.map((step) => (
              <li key={step.year}>
                <span>{step.year}</span>
                <p>{step.label}</p>
              </li>
            ))}
          </ol>

          <div className="gal-actions gal-actions--mt">
            <Link className="gal-btn gal-btn--solid" href={getLocalePath(locale, "works")}>
              <span>{t.hero.explore}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
            <Link className="gal-btn gal-btn--line" href={getLocalePath(locale, "contact")}>
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
