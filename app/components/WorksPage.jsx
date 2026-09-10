import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Bookmark } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function WorksPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="works">
      <div className="lookbook-page-header">
        <div className="lookbook-container">
          <div className="lookbook-cover-badge">
            <span className="lookbook-crimson-dot" />
            <span>{isAr ? "أرشيف اللوك بوك الكامل // استوديو A7MD" : "COMPLETE HAUTE ARCHIVE // LOOKBOOK"}</span>
          </div>
          <h1 className="lookbook-page-title">
            {isAr ? "لوك بوك الأعمال والمؤلفات" : "Haute Repertoire & Score Collection"}
          </h1>
          <p className="lookbook-page-desc">
            {isAr
              ? "مجموعة الألحان والتترات والأغاني المستقلة التي أبدعها أحمد سيف، معروضة بتنسيق بصري فخم يليق بالقيمة الفنية."
              : "Comprehensive editorial lookbook cataloging television soundtracks, studio master singles, and acoustic compositions by Ahmed Saif."}
          </p>
        </div>
      </div>

      <section className="lookbook-section">
        <div className="lookbook-container">
          <div className="lookbook-catalog-grid">
            {works.map((work, index) => (
              <article key={work.slug} className="lookbook-catalog-card">
                <div className="lookbook-catalog-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="lookbook-catalog-img"
                  />
                  <div className="lookbook-catalog-overlay" />
                  <div className="lookbook-catalog-tag">LOOK #{String(index + 1).padStart(2, "0")}</div>
                  <div className="lookbook-catalog-year">{work.year}</div>
                </div>

                <div className="lookbook-catalog-body">
                  <span className="lookbook-catalog-cat">
                    {isAr ? work.category : work.categoryEn}
                  </span>

                  <h2 className="lookbook-catalog-title">
                    <Link href={`${getLocalePath(locale, "works")}/${work.slug}`}>
                      {isAr ? work.arTitle : work.enTitle}
                    </Link>
                  </h2>

                  <p className="lookbook-catalog-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="lookbook-catalog-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="lookbook-catalog-btn"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{isAr ? "الاستماع والتفاصيل" : "View Look"}</span>
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
