import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, LayoutGrid, Sparkles } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function WorksPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="works">
      <div className="bento-page-header">
        <div className="bento-container">
          <div className="bento-badge">
            <LayoutGrid size={14} className="bento-indigo-icon" />
            <span>{isAr ? "مصفوفة الإصدارات الموسيقية // A7MD" : "BENTO AUDIO VAULT // COMPLETE CATALOG"}</span>
          </div>
          <h1 className="bento-page-title">
            {isAr ? "الأعمال الموسيقية والتترات" : "Musical Repertoire & Soundtracks"}
          </h1>
          <p className="bento-page-desc">
            {isAr
              ? "مجموعة الألحان والتترات والأغاني المستقلة التي أنتجها ولحنها أحمد سيف في استوديو A7MD."
              : "Comprehensive digital bento archive of television scores, independent releases, and original melodies by Ahmed Saif."}
          </p>
        </div>
      </div>

      <section className="bento-section">
        <div className="bento-container">
          <div className="bento-catalog-grid">
            {works.map((work, index) => (
              <article key={work.slug} className="bento-catalog-card">
                <div className="bento-catalog-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="bento-catalog-img"
                  />
                  <div className="bento-catalog-overlay" />
                  <div className="bento-catalog-pill">ITEM #{String(index + 1).padStart(2, "0")}</div>
                  <div className="bento-catalog-year">{work.year}</div>
                </div>

                <div className="bento-catalog-body">
                  <span className="bento-catalog-cat">
                    {isAr ? work.category : work.categoryEn}
                  </span>

                  <h2 className="bento-catalog-title">
                    <Link href={`${getLocalePath(locale, "works")}/${work.slug}`}>
                      {isAr ? work.arTitle : work.enTitle}
                    </Link>
                  </h2>

                  <p className="bento-catalog-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="bento-catalog-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="bento-catalog-btn"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{isAr ? "الاستماع والتفاصيل" : "Stream Details"}</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
