import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Disc } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function WorksPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="works">
      <div className="tape-page-header">
        <div className="tape-container">
          <div className="tape-session-badge">
            <Disc size={14} className="tape-amber-icon tape-spin-slow" />
            <span>{isAr ? "شريط الإصدارات الكامل // A7MD" : "COMPLETE MASTER TAPE VAULT"}</span>
          </div>
          <h1 className="tape-page-title">
            {isAr ? "أرشيف الأشرطة والأعمال الموسيقية" : "Master Tape Archive & Discography"}
          </h1>
          <p className="tape-page-desc">
            {isAr
              ? "مجموعة الألحان والتترات والأغاني المستقلة التي لحنها وغناها أحمد سيف وسُجلت بأعلى معايير الصوت الأنالوج."
              : "Complete chronological analog master catalog, soundtrack recordings, and studio releases by Ahmed Saif."}
          </p>
        </div>
      </div>

      <section className="tape-section">
        <div className="tape-container">
          <div className="tape-catalog-grid">
            {works.map((work, index) => (
              <article key={work.slug} className="tape-catalog-card">
                <div className="tape-catalog-top-bar">
                  <span className="tape-catalog-reel-id">REEL #{String(index + 1).padStart(2, "0")}</span>
                  <span className="tape-catalog-year">{work.year}</span>
                </div>

                <div className="tape-catalog-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="tape-catalog-img"
                  />
                  <div className="tape-catalog-tint" />
                </div>

                <div className="tape-catalog-body">
                  <span className="tape-catalog-cat">
                    {isAr ? work.category : work.categoryEn}
                  </span>

                  <h2 className="tape-catalog-title">
                    <Link href={`${getLocalePath(locale, "works")}/${work.slug}`}>
                      {isAr ? work.arTitle : work.enTitle}
                    </Link>
                  </h2>

                  <p className="tape-catalog-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="tape-catalog-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="tape-catalog-btn"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{isAr ? "تشغيل الشريط" : "Audition Master"}</span>
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
