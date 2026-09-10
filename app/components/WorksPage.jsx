import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Sparkles } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function WorksPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="works">
      <div className="sultani-page-header">
        <div className="sultani-container">
          <div className="sultani-hero-badge">
            <Sparkles size={14} className="sultani-gold-icon" />
            <span>{isAr ? "الأرشيف الصوتي الكامل" : "Complete Audio Catalog"}</span>
          </div>
          <h1 className="sultani-page-title">
            {isAr ? "الأعمال الموسيقية والتترات" : "Musical Compositions & Scores"}
          </h1>
          <p className="sultani-page-desc">
            {isAr
              ? "مجموعة مختارة من الألحان، الأغاني المستقلة، وتترات الدراما التي لحنها وغناها أحمد سيف عبر مسيرته الفنية."
              : "A curated collection of original melodies, independent single releases, and television serial soundtracks crafted by Ahmed Saif."}
          </p>
        </div>
      </div>

      <section className="sultani-section">
        <div className="sultani-container">
          <div className="sultani-catalog-grid">
            {works.map((work, index) => (
              <article key={work.slug} className="sultani-catalog-card">
                <div className="sultani-catalog-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="sultani-catalog-img"
                  />
                  <div className="sultani-catalog-overlay" />
                  <div className="sultani-catalog-opus-badge">
                    OPUS #{String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="sultani-catalog-body">
                  <div className="sultani-catalog-meta">
                    <span className="sultani-catalog-category">
                      {isAr ? work.category : work.categoryEn}
                    </span>
                    <span className="sultani-catalog-year">{work.year}</span>
                  </div>

                  <h2 className="sultani-catalog-title">
                    <Link href={`${getLocalePath(locale, "works")}/${work.slug}`}>
                      {isAr ? work.arTitle : work.enTitle}
                    </Link>
                  </h2>

                  <p className="sultani-catalog-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="sultani-catalog-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="sultani-catalog-btn"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{isAr ? "الاستماع والتفاصيل" : "Audition & Notes"}</span>
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
