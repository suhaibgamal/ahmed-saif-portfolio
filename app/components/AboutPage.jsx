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
      <section className="hf-section">
        <div className="hf-wrap hf-detail-stack">
          <div className="hf-chassis hf-faceplate">
            <div className="hf-faceplate__copy">
              <p className="hf-kicker">{t.aboutPage.eyebrow}</p>
              <h1 className="hf-title">{t.aboutPage.title}</h1>
              <p className="hf-lead">{t.aboutPage.body}</p>
            </div>
            <div className="hf-portrait-bezel">
              <Image
                src="/ahmed-saif-profile.webp"
                alt={t.hero.title}
                width={380}
                height={380}
                priority
              />
            </div>
          </div>

          <div className="hf-chassis hf-quote-module hf-quote-module--wide">
            <blockquote>“{t.aboutPage.statement}”</blockquote>
            <span>— {t.hero.title}</span>
          </div>

          <div className="hf-principles">
            {t.aboutPage.principles.map((p) => (
              <div className="hf-chassis hf-principle" key={p.title}>
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </div>
            ))}
          </div>

          <div className="hf-chassis">
            <p className="hf-kicker">{isAr ? "السجل الزمني" : "Studio Log"}</p>
            <h2 className="hf-h2">
              {isAr ? "محطات الأعمال (٢٠٢٠ – ٢٠٢٦)" : "Milestones (2020 – 2026)"}
            </h2>
            <ol className="hf-log">
              {t.timeline.map((step) => (
                <li key={step.year}>
                  <span className="hf-mono hf-brass-text">{step.year}</span>
                  <p>{step.label}</p>
                </li>
              ))}
            </ol>
            <div className="hf-actions hf-actions--mt">
              <Link className="hf-btn hf-btn--brass" href={getLocalePath(locale, "works")}>
                <span>{t.hero.explore}</span>
                <DirectionalArrow size={15} aria-hidden="true" />
              </Link>
              <Link className="hf-btn hf-btn--metal" href={getLocalePath(locale, "contact")}>
                <span>{t.contactPage.primaryAction}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
