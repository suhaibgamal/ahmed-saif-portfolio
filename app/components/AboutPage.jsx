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
      <section className="zn-page-head">
        <div className="zn-col">
          <p className="zn-label">{t.aboutPage.eyebrow}</p>
          <h1 className="zn-page-title">{t.aboutPage.title}</h1>
          <p className="zn-hero__lead">{t.aboutPage.body}</p>

          <div className="zn-still-pair">
            <figure className="zn-still-pair__portrait">
              <Image
                src="/ahmed-saif-profile.webp"
                alt={t.hero.title}
                width={320}
                height={380}
                priority
              />
            </figure>
            <figure className="zn-still-pair__space">
              <Image
                src="/visual-botanical-acoustic.webp"
                alt={t.studio.eyebrow}
                width={900}
                height={520}
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="zn-pause">
        <div className="zn-col">
          <blockquote className="zn-quote">“{t.aboutPage.statement}”</blockquote>
        </div>
      </section>

      <section className="zn-section">
        <div className="zn-col">
          <p className="zn-label">{t.credits.eyebrow}</p>
          <h2 className="zn-h2">{t.credits.title}</h2>
          <p className="zn-prose">{t.credits.body}</p>

          <div className="zn-ethos">
            {t.aboutPage.principles.map((p) => (
              <div className="zn-ethos__item" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="zn-section">
        <div className="zn-col">
          <p className="zn-label">{isAr ? "الخط الزمني" : "Chronology"}</p>
          <h2 className="zn-h2">
            {isAr ? "٢٠٢٠ — ٢٠٢٦" : "2020 — 2026"}
          </h2>

          <ol className="zn-chronology">
            {t.timeline.map((step) => (
              <li key={step.year}>
                <span>{step.year}</span>
                <p>{step.label}</p>
              </li>
            ))}
          </ol>

          <div className="zn-actions zn-actions--mt">
            <Link className="zn-btn zn-btn--sand" href={getLocalePath(locale, "works")}>
              <span>{t.hero.explore}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
            <Link className="zn-btn zn-btn--quiet" href={getLocalePath(locale, "contact")}>
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
