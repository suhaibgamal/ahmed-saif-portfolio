import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Radio, Activity, Cpu } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function WorksPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="works">
      <div className="cyber-page-header">
        <div className="cyber-container">
          <div className="cyber-terminal-badge">
            <Activity size={14} className="cyber-cyan-icon" />
            <span>{isAr ? "مصفوفة المسارات الصوتية // 96kHz" : "TELEMETRY AUDIO MATRIX // 96kHz"}</span>
          </div>
          <h1 className="cyber-page-title">
            {isAr ? "الأرشيف الصوتي والإصدارات" : "Acoustic Releases & Audio Telemetry"}
          </h1>
          <p className="cyber-page-desc">
            {isAr
              ? "مستودع المقطوعات الموسيقية، تترات الدراما التلفزيونية، والأغاني الفردية المسجلة في استوديو A7MD."
              : "Comprehensive digital audio archives, soundtrack themes, and independent musical works engineered by Ahmed Saif."}
          </p>
        </div>
      </div>

      <section className="cyber-section">
        <div className="cyber-container">
          <div className="cyber-catalog-grid">
            {works.map((work, index) => (
              <article key={work.slug} className="cyber-catalog-card">
                <div className="cyber-catalog-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="cyber-catalog-img"
                  />
                  <div className="cyber-catalog-tint" />
                  <div className="cyber-catalog-id">DSP_{String(index + 1).padStart(3, "0")}</div>
                  <div className="cyber-catalog-year">{work.year}</div>
                </div>

                <div className="cyber-catalog-body">
                  <div className="cyber-catalog-tags">
                    <span className="cyber-cat-pill">
                      {isAr ? work.category : work.categoryEn}
                    </span>
                    <span className="cyber-cat-spec">24-BIT MASTER</span>
                  </div>

                  <h2 className="cyber-catalog-title">
                    <Link href={`${getLocalePath(locale, "works")}/${work.slug}`}>
                      {isAr ? work.arTitle : work.enTitle}
                    </Link>
                  </h2>

                  <p className="cyber-catalog-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="cyber-catalog-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="cyber-catalog-link"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{isAr ? "فتح المسار" : "Stream File"}</span>
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
