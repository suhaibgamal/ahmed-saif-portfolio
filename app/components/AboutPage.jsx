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
      <section className="sym-page-head">
        <div className="sym-wrap sym-story-grid">
          <div>
            <p className="sym-kicker">{t.aboutPage.eyebrow}</p>
            <h1 className="sym-page-title">{t.aboutPage.title}</h1>
            <p className="sym-page-lead">{t.aboutPage.body}</p>
          </div>
          <figure className="sym-portrait-card">
            <Image
              src="/ahmed-saif-profile.webp"
              alt={t.hero.title}
              width={460}
              height={520}
              priority
            />
            <figcaption>
              <strong>{t.hero.title}</strong>
              <span>{isAr ? "صنعاء، اليمن · A7MD Studio" : "Sana'a, Yemen · A7MD Studio"}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sym-section sym-section--surface">
        <div className="sym-wrap">
          <blockquote className="sym-quote">“{t.aboutPage.statement}”</blockquote>
          <div className="sym-notes-grid">
            {t.aboutPage.principles.map((p) => (
              <div className="sym-note-card" key={p.title}>
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sym-section">
        <div className="sym-wrap">
          <p className="sym-kicker">{isAr ? "المواسم والمحطات" : "Season Chronicle"}</p>
          <h2 className="sym-h2">
            {isAr ? "مسيرة فنية (٢٠٢٠ – ٢٠٢٦)" : "Artistic Journey (2020 – 2026)"}
          </h2>

          <ol className="sym-timeline">
            {t.timeline.map((step) => (
              <li key={step.year}>
                <span>{step.year}</span>
                <p>{step.label}</p>
              </li>
            ))}
          </ol>

          <div className="sym-actions sym-actions--mt">
            <Link className="sym-btn sym-btn--gold" href={getLocalePath(locale, "works")}>
              <span>{t.hero.explore}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
            <Link className="sym-btn sym-btn--outline" href={getLocalePath(locale, "contact")}>
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
