import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Compass, FileText } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function WorksPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="works">
      <div className="atelier-page-header">
        <div className="atelier-container">
          <div className="atelier-index-badge">
            <Compass size={14} className="atelier-sage-icon" />
            <span>{isAr ? "الفهرس الموسيقي المتكامل // سجل التوثيق" : "ARCHITECTURAL INDEX // COMPLETE LEDGER"}</span>
          </div>
          <h1 className="atelier-page-title">
            {isAr ? "فهرس الأعمال الموسيقية والتترات" : "Architectural Score Index & Repertoire"}
          </h1>
          <p className="atelier-page-desc">
            {isAr
              ? "سجل توثيقي شامل للألحان، الأعمال الغنائية، وتترات الدراما التي صاغها ونفذها أحمد سيف في استوديو A7MD."
              : "Comprehensive architectural ledger documenting musical compositions, television soundtracks, and independent releases by Ahmed Saif."}
          </p>
        </div>
      </div>

      <section className="atelier-section">
        <div className="atelier-container">
          <div className="atelier-ledger-table">
            {works.map((work, index) => (
              <article key={work.slug} className="atelier-ledger-row">
                <div className="atelier-row-index">
                  <span>INDEX</span>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                </div>

                <div className="atelier-row-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="120px"
                    className="atelier-thumb-img"
                  />
                </div>

                <div className="atelier-row-main">
                  <div className="atelier-row-meta">
                    <span className="atelier-row-cat">{isAr ? work.category : work.categoryEn}</span>
                    <span className="atelier-row-year">{work.year}</span>
                  </div>
                  <h2 className="atelier-row-title">
                    <Link href={`${getLocalePath(locale, "works")}/${work.slug}`}>
                      {isAr ? work.arTitle : work.enTitle}
                    </Link>
                  </h2>
                  <p className="atelier-row-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>
                </div>

                <div className="atelier-row-action">
                  <Link
                    href={`${getLocalePath(locale, "works")}/${work.slug}`}
                    className="atelier-row-btn"
                  >
                    <span>{isAr ? "فحص النوتة والتسجيل" : "Audition"}</span>
                    <ArrowIcon size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
