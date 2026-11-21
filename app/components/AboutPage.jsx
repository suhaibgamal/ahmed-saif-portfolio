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
      <section className="sw-hero">
        <div className="sw-hero__copy-col">
          <div className="sw-hero__copy-inner">
            <span className="sw-tag">{t.aboutPage.eyebrow}</span>
            <h1 className="sw-page-title">{t.aboutPage.title}</h1>
            <p className="sw-body">{t.aboutPage.body}</p>
            <blockquote className="sw-quote">“{t.aboutPage.statement}”</blockquote>
          </div>
        </div>
        <div className="sw-hero__media-col">
          <div className="sw-hero__portrait-cell">
            <Image
              src="/ahmed-saif-profile.webp"
              alt={t.hero.title}
              width={640}
              height={540}
              priority
            />
          </div>
          <div className="sw-hero__arch-cell">
            <Image
              src="/visual-botanical-acoustic.webp"
              alt={t.studio.eyebrow}
              width={800}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="sw-band">
        <div className="sw-band__header">
          <div>
            <span className="sw-tag">{t.credits.eyebrow}</span>
            <h2 className="sw-h2">{t.credits.title}</h2>
          </div>
        </div>

        <div className="sw-craft-grid">
          {t.aboutPage.principles.map((p) => (
            <article className="sw-craft-cell" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sw-band">
        <div className="sw-band__header">
          <div>
            <span className="sw-tag">{isAr ? "المسار الزمني" : "Chronology"}</span>
            <h2 className="sw-h2">
              {isAr ? "٢٠٢٠ — ٢٠٢٦" : "2020 — 2026"}
            </h2>
          </div>
          <div className="sw-actions">
            <Link className="sw-btn sw-btn--primary" href={getLocalePath(locale, "works")}>
              <span>{t.hero.explore}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
            <Link className="sw-btn sw-btn--outline" href={getLocalePath(locale, "contact")}>
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>
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
    </SiteChrome>
  );
}
