import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Eye } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function WorksPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="works">
      <div className="gallery-page-header">
        <div className="gallery-container">
          <div className="gallery-curatorial-tag">
            <span className="gallery-tag-sq" />
            <span>{isAr ? "الأرشيف المتحفي الكامل // المعروضات" : "COMPLETE PERMANENT EXHIBITION ARCHIVE"}</span>
          </div>
          <h1 className="gallery-page-title">
            {isAr ? "أرشيف المعرض والأعمال الموسيقية" : "Exhibition Catalog & Archival Scores"}
          </h1>
          <p className="gallery-page-desc">
            {isAr
              ? "مجموعة المقطوعات الموسيقية والأغاني الفردية وتترات الدراما المسجلة في استوديو A7MD، موثقة بأعلى معايير التنسيق المتحفي."
              : "The complete archival catalog of musical compositions, television soundtracks, and studio master recordings by Ahmed Saif."}
          </p>
        </div>
      </div>

      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-catalog-grid">
            {works.map((work, index) => (
              <article key={work.slug} className="gallery-catalog-card">
                <div className="gallery-catalog-top">
                  <span className="gallery-catalog-plate">PLATE #{String(index + 1).padStart(2, "0")}</span>
                  <span className="gallery-catalog-year">{work.year}</span>
                </div>

                <div className="gallery-catalog-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="gallery-catalog-img"
                  />
                  <div className="gallery-catalog-mask" />
                </div>

                <div className="gallery-catalog-body">
                  <span className="gallery-catalog-cat">
                    {isAr ? work.category : work.categoryEn}
                  </span>

                  <h2 className="gallery-catalog-title">
                    <Link href={`${getLocalePath(locale, "works")}/${work.slug}`}>
                      {isAr ? work.arTitle : work.enTitle}
                    </Link>
                  </h2>

                  <p className="gallery-catalog-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="gallery-catalog-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="gallery-catalog-btn"
                    >
                      <span>{isAr ? "معاينة الوثيقة الفنية" : "Examine Plate"}</span>
                      <ArrowIcon size={14} />
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
