import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Compass, FileText, Grid, Layers } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const featuredWorks = works.slice(0, 4);

  return (
    <SiteChrome locale={locale} page="home">
      {/* 1. Swiss Architectural Hero */}
      <section className="atelier-hero">
        <div className="atelier-container">
          <div className="atelier-hero-grid">
            <div className="atelier-hero-content">
              <div className="atelier-index-badge">
                <span className="atelier-crosshair">+</span>
                <span>{isAr ? "أتيليه الموسيقى والتأليف // وثيقة فنية" : "ARCHITECTURAL COMPOSITION // ATELIER 01"}</span>
              </div>

              <h1 className="atelier-hero-title">
                {isAr ? (
                  <>
                    هندسة النغم وأصالة الروح.. <br />
                    <span className="atelier-sage-text">أحمد سيف</span>
                  </>
                ) : (
                  <>
                    Acoustic Geometry & Soul.. <br />
                    <span className="atelier-sage-text">Ahmed Saif</span>
                  </>
                )}
              </h1>

              <p className="atelier-hero-bio">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أرى في اللحن عمارة فنية تبدأ من النغمة الصادقة البسيطة وتكتمل بتوزيع متماسك يدخل الوجدان. من استوديو A7MD نصمم كل عمل بدقة متناهية تحترم أصول المقامات وتواكب أحدث معايير الصوت العالمية."
                  : "Welcome.. I am Ahmed Saif, composer and vocalist. I treat musical composition as acoustic architecture: structured around authentic Yemeni modal foundations and elevated by meticulous production."}
              </p>

              <div className="atelier-hero-actions">
                <Link
                  href={getLocalePath(locale, "works")}
                  className="atelier-btn-sage"
                >
                  <span>{isAr ? "استعراض سجل الأعمال" : "Inspect Works Catalog"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link
                  href={getLocalePath(locale, "contact")}
                  className="atelier-btn-outline"
                >
                  <span>{isAr ? "تكليف عمل أو استفسار" : "Commission Brief"}</span>
                </Link>
              </div>

              {/* Swiss Metrics Strip */}
              <div className="atelier-metrics-strip">
                <div className="atelier-metric-unit">
                  <span className="atelier-metric-num">18+</span>
                  <span className="atelier-metric-tag">{isAr ? "مقطوعة وتتر درامي" : "Cataloged Scores"}</span>
                </div>
                <div className="atelier-metric-unit">
                  <span className="atelier-metric-num">A7MD</span>
                  <span className="atelier-metric-tag">{isAr ? "أتيليه واستوديو خاص" : "Private Atelier"}</span>
                </div>
                <div className="atelier-metric-unit">
                  <span className="atelier-metric-num">OSAKA</span>
                  <span className="atelier-metric-tag">{isAr ? "مشاركات دولية رسمية" : "World Expo '25"}</span>
                </div>
              </div>
            </div>

            {/* Precision Architectural Frame */}
            <div className="atelier-hero-media">
              <div className="atelier-blueprint-frame">
                <div className="atelier-corner-marker top-left">+</div>
                <div className="atelier-corner-marker top-right">+</div>
                <div className="atelier-corner-marker bottom-left">+</div>
                <div className="atelier-corner-marker bottom-right">+</div>

                <div className="atelier-portrait-inner">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 440px"
                    className="atelier-portrait-img"
                  />
                  <div className="atelier-grid-overlay" />
                </div>

                <div className="atelier-portrait-caption">
                  <span className="atelier-fig-num">FIG. 01</span>
                  <span>AHMED SAIF // COMPOSER & VOCALIST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Numbered Ledger Catalog */}
      <section className="atelier-section">
        <div className="atelier-container">
          <div className="atelier-section-header">
            <span className="atelier-pretitle">{isAr ? "فهرس المؤلفات الموسيقية" : "NUMBERED LEDGER ARCHIVE"}</span>
            <h2 className="atelier-title">{isAr ? "أعمال مختارة بحساب فني دقيق" : "Curated Architectural Compositions"}</h2>
            <p className="atelier-subtitle">
              {isAr
                ? "توليفات لحنية تجمع بين عراقة التراث الحضرمي والصنعاني والتوزيع الوتري العصري."
                : "A rigorous acoustic catalog synthesizing regional maqam roots with contemporary spatial harmony."}
            </p>
          </div>

          <div className="atelier-ledger-table">
            {featuredWorks.map((work, index) => (
              <div key={work.slug} className="atelier-ledger-row">
                <div className="atelier-row-index">
                  <span>INDEX</span>
                  <strong>0{index + 1}</strong>
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
                  <h3 className="atelier-row-title">
                    {isAr ? work.arTitle : work.enTitle}
                  </h3>
                  <p className="atelier-row-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>
                </div>

                <div className="atelier-row-action">
                  <Link
                    href={`${getLocalePath(locale, "works")}/${work.slug}`}
                    className="atelier-row-btn"
                  >
                    <span>{isAr ? "فحص العمل" : "Examine"}</span>
                    <ArrowIcon size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="atelier-center-action">
            <Link href={getLocalePath(locale, "works")} className="atelier-btn-outline">
              <span>{isAr ? "فتح الفهرس الكامل (18+ عمل)" : "Open Complete Ledger (18+ Works)"}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Architectural Blueprint Manifesto */}
      <section className="atelier-section atelier-section-alt">
        <div className="atelier-container">
          <div className="atelier-manifesto-box">
            <div className="atelier-manifesto-header">
              <span className="atelier-crosshair">+</span>
              <h3>{isAr ? "بيان الأتيليه الموسيقي // فلسفة التلحين" : "ATELIER MANIFESTO // ACOUSTIC ETHOS"}</h3>
            </div>
            <div className="atelier-manifesto-grid">
              <div className="atelier-manifesto-col">
                <h4>{isAr ? "البناء اللحني الصادق" : "Structural Purity"}</h4>
                <p>
                  {isAr
                    ? "أبدأ دائماً من أصل النغمة وبساطتها، فاللحن الذي لا يعلق في الذاكرة بصوت العود المجرد لن تنفعه كثرة الآلات والتوزيع."
                    : "Every melody begins with raw acoustic truth on the solo oud; superfluous orchestration can never rescue a weak motif."}
                </p>
              </div>
              <div className="atelier-manifesto-col">
                <h4>{isAr ? "إتقان الهندسة الصوتية" : "Engineering Discipline"}</h4>
                <p>
                  {isAr
                    ? "التسجيل في استوديو A7MD يخضع لمعايير هندسية صارمة تضمن وضوح الطبقات الصوتية وتوازن الترددات بأعلى دقة ممكنة."
                    : "Studio capture adheres to precise spatial acoustics, harmonic balance, and rigorous dynamic headroom preservation."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Swiss Dispatch CTA */}
      <section className="atelier-section">
        <div className="atelier-container">
          <div className="atelier-dispatch-card">
            <span className="atelier-dispatch-ref">DISPATCH_PROTOCOL // 2026</span>
            <h2>{isAr ? "هل لديك رؤية موسيقية تحتاج إلى تنفيذ فني متقن؟" : "Commission a Bespoke Composition"}</h2>
            <p>
              {isAr
                ? "متاح لتلحين التترات التلفزيونية، المشاريع الغنائية الفردية، والعروض الحية في المناسبات الكبرى."
                : "Open for score commissions, cultural festivals, and bespoke vocal master recordings."}
            </p>
            <div className="atelier-dispatch-action">
              <Link href={getLocalePath(locale, "contact")} className="atelier-btn-sage">
                <span>{isAr ? "إرسال طلب مشروع للأتيليه" : "Initiate Atelier Commission"}</span>
                <ArrowIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
