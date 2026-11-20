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
      <section className="kin-page-head">
        <div className="kin-wrap">
          <p className="kin-eyebrow">{t.aboutPage.eyebrow}</p>
          <h1 className="kin-page-title">{t.aboutPage.title}</h1>
          <p className="kin-hero__lead">{t.aboutPage.body}</p>
        </div>
      </section>

      <section className="kin-section">
        <div className="kin-wrap">
          <div className="kin-diptych">
            <figure className="kin-diptych__portrait">
              <Image
                src="/ahmed-saif-profile.webp"
                alt={t.hero.title}
                width={480}
                height={560}
                priority
              />
              <figcaption>
                <strong>{t.hero.title}</strong>
                <span>{isAr ? "صنعاء، اليمن" : "Sana'a, Yemen"}</span>
              </figcaption>
            </figure>

            <figure className="kin-diptych__wide">
              <Image
                src="/visual-sunlit-oud.webp"
                alt={t.studio.eyebrow}
                width={1000}
                height={580}
              />
              <figcaption>{t.studio.title}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="kin-quote-section">
        <div className="kin-wrap">
          <blockquote className="kin-poetic-quote">
            “{t.aboutPage.statement}”
          </blockquote>
        </div>
      </section>

      <section className="kin-section">
        <div className="kin-wrap">
          <div className="kin-editorial-split">
            <div>
              <p className="kin-eyebrow">{t.credits.eyebrow}</p>
              <h2 className="kin-h2">{t.credits.title}</h2>
              <p className="kin-body">{t.credits.body}</p>
            </div>
            <div className="kin-chapters">
              {t.aboutPage.principles.map((p) => (
                <article className="kin-chapter" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="kin-section kin-section--oat">
        <div className="kin-wrap">
          <p className="kin-eyebrow">{isAr ? "الخط الزمني" : "Chronology"}</p>
          <h2 className="kin-h2">
            {isAr ? "محطات العمل (٢٠٢٠ – ٢٠٢٦)" : "Selected Milestones (2020 – 2026)"}
          </h2>

          <ol className="kin-chronology">
            {t.timeline.map((step) => (
              <li key={step.year}>
                <span>{step.year}</span>
                <p>{step.label}</p>
              </li>
            ))}
          </ol>

          <div className="kin-actions kin-actions--mt">
            <Link className="kin-btn kin-btn--primary" href={getLocalePath(locale, "works")}>
              <span>{t.hero.explore}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
            <Link className="kin-btn kin-btn--outline" href={getLocalePath(locale, "contact")}>
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
