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
      <section className="ed-page-head">
        <div className="ed-wrap">
          <p className="ed-kicker">{t.aboutPage.eyebrow}</p>
          <h1 className="ed-page-title">{t.aboutPage.title}</h1>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-wrap">
          <div className="ed-article-layout">
            <div className="ed-article-body">
              <p className="ed-dropcap">{t.aboutPage.body}</p>
              <blockquote className="ed-pullquote ed-pullquote--inline">
                “{t.aboutPage.statement}”
              </blockquote>
              <p className="ed-prose">{t.studio.body}</p>
              <p className="ed-prose">{t.credits.body}</p>

              <div className="ed-principles">
                {t.aboutPage.principles.map((p) => (
                  <div className="ed-principle" key={p.title}>
                    <h2>{p.title}</h2>
                    <p>{p.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="ed-article-sidebar">
              <figure className="ed-cover__portrait">
                <Image
                  src="/ahmed-saif-profile.webp"
                  alt={t.hero.title}
                  width={480}
                  height={580}
                  priority
                />
                <figcaption>
                  <span>{t.hero.title}</span>
                  <span>{isAr ? "صنعاء، اليمن" : "Sana'a, Yemen"}</span>
                </figcaption>
              </figure>

              <div className="ed-sidebar-chronicle">
                <p className="ed-kicker">{isAr ? "السجل الزمني" : "Chronicle"}</p>
                <ol>
                  {t.timeline.map((step) => (
                    <li key={step.year}>
                      <strong>{step.year}</strong>
                      <span>{step.label}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>

          <div className="ed-actions ed-actions--mt">
            <Link className="ed-btn ed-btn--primary" href={getLocalePath(locale, "works")}>
              <span>{t.hero.explore}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
            <Link className="ed-btn ed-btn--outline" href={getLocalePath(locale, "contact")}>
              <span>{t.contactPage.primaryAction}</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
