import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Sparkles, LayoutGrid, Zap, Disc, Award, Headphones } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const featuredWorks = works.slice(0, 4);

  return (
    <SiteChrome locale={locale} page="home">
      {/* 1. Bento Hero Grid */}
      <section className="bento-hero">
        <div className="bento-container">
          <div className="bento-grid-hero">
            {/* Tile A: Main Statement & Bio (Span 2 col on desktop) */}
            <div className="bento-tile bento-tile-main">
              <div className="bento-badge">
                <Sparkles size={14} className="bento-indigo-icon" />
                <span>{isAr ? "موسيقى وصوت يمني معاصر // استوديو A7MD" : "CONTEMPORARY YEMENI SOUND // BENTO MATRIX"}</span>
              </div>

              <h1 className="bento-title-main">
                {isAr ? (
                  <>
                    نغمٌ يماني بأبعادٍ حديثة.. <br />
                    <span className="bento-gradient-text">أحمد سيف</span>
                  </>
                ) : (
                  <>
                    Contemporary Yemeni Soul.. <br />
                    <span className="bento-gradient-text">Ahmed Saif</span>
                  </>
                )}
              </h1>

              <p className="bento-bio-main">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أحب الأغنية البسيطة الصادقة اللي تدخل القلب وتعلّق في البال. في استوديو A7MD أصمم كل مقطوعة برؤية بصرية وصوتية تجمع بين أصالة المقامات الشرقية وحداثة الإنتاج العالمي."
                  : "Welcome.. I am Ahmed Saif, composer and vocalist. Inside A7MD Studio, I design acoustic landscapes fusing ancient Arabian maqam roots with modern cinematic production."}
              </p>

              <div className="bento-hero-actions">
                <Link
                  href={getLocalePath(locale, "works")}
                  className="bento-btn-primary"
                >
                  <Headphones size={16} />
                  <span>{isAr ? "استكشف مصفوفة الأعمال" : "Explore Repertoire"}</span>
                </Link>
                <Link
                  href={getLocalePath(locale, "contact")}
                  className="bento-btn-secondary"
                >
                  <span>{isAr ? "تواصل للتعاون الفني" : "Commission Work"}</span>
                  <ArrowIcon size={16} />
                </Link>
              </div>
            </div>

            {/* Tile B: Portrait Frame with Violet Glow */}
            <div className="bento-tile bento-tile-portrait">
              <div className="bento-portrait-wrap">
                <Image
                  src="/ahmed-saif-profile.webp"
                  alt="Ahmed Saif - الفنان أحمد سيف"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="bento-portrait-img"
                />
                <div className="bento-portrait-gradient" />
                <div className="bento-portrait-tag">
                  <span className="bento-dot-purple" />
                  <strong>AHMED SAIF</strong>
                  <small>{isAr ? "ملحن ومغنٍ" : "Composer"}</small>
                </div>
              </div>
            </div>

            {/* Tile C: Stat - 18+ Works */}
            <div className="bento-tile bento-tile-stat">
              <div className="bento-stat-icon">
                <Disc size={20} className="bento-indigo-icon" />
              </div>
              <span className="bento-stat-num">18+</span>
              <span className="bento-stat-label">{isAr ? "عمل موسيقي وتتر مسجل" : "Archived Releases"}</span>
            </div>

            {/* Tile D: Stat - A7MD Studio */}
            <div className="bento-tile bento-tile-stat">
              <div className="bento-stat-icon">
                <Zap size={20} className="bento-indigo-icon" />
              </div>
              <span className="bento-stat-num">A7MD</span>
              <span className="bento-stat-label">{isAr ? "استوديو إنتاج مكس وماستر" : "Private Studio Lab"}</span>
            </div>

            {/* Tile E: Stat - Expo Osaka */}
            <div className="bento-tile bento-tile-stat">
              <div className="bento-stat-icon">
                <Award size={20} className="bento-indigo-icon" />
              </div>
              <span className="bento-stat-num">OSAKA</span>
              <span className="bento-stat-label">{isAr ? "تمثيل اليمن - إكسبو 2025" : "World Expo '25"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bento Works Matrix */}
      <section className="bento-section">
        <div className="bento-container">
          <div className="bento-section-header">
            <span className="bento-pretitle">{isAr ? "مصفوفة الأعمال والإصدارات" : "BENTO REPERTOIRE MATRIX"}</span>
            <h2 className="bento-title">{isAr ? "أعمال نالت قلوب الجماهير" : "Featured Sonic Releases"}</h2>
            <p className="bento-subtitle">
              {isAr
                ? "مختارات من تترات المسلسلات والأغاني الفردية المسجلة بأعلى مواصفات الصوت العالمية."
                : "Curated collection of television soundtracks and independent singles engineered by Ahmed Saif."}
            </p>
          </div>

          <div className="bento-works-grid">
            {featuredWorks.map((work, index) => (
              <div key={work.slug} className={`bento-work-card ${index === 0 ? "bento-card-featured" : ""}`}>
                <div className="bento-work-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="bento-work-img"
                  />
                  <div className="bento-work-overlay" />
                  <div className="bento-year-pill">{work.year}</div>
                </div>

                <div className="bento-work-body">
                  <span className="bento-category-pill">
                    {isAr ? work.category : work.categoryEn}
                  </span>

                  <h3 className="bento-work-title">
                    {isAr ? work.arTitle : work.enTitle}
                  </h3>

                  <p className="bento-work-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="bento-work-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="bento-work-link"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{isAr ? "استمع للتفاصيل" : "Audition Track"}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bento-center-action">
            <Link href={getLocalePath(locale, "works")} className="bento-btn-secondary">
              <span>{isAr ? "عرض أرشيف الأعمال الكامل (18+ عمل)" : "Open Complete Bento Catalog (18+ Works)"}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Studio Methodology Bento */}
      <section className="bento-section bento-section-alt">
        <div className="bento-container">
          <div className="bento-method-grid">
            <div className="bento-method-card">
              <span className="bento-method-icon">✦</span>
              <h3>{isAr ? "أصالة المقام اليمني" : "Maqam Integrity"}</h3>
              <p>
                {isAr
                  ? "الانطلاق من روح التراث الصنعاني والحضرمي، وتقديمه بجمل لحنية بسيطة ومؤثرة."
                  : "Preserving historical modal intonations with authentic acoustic oud voicing."}
              </p>
            </div>
            <div className="bento-method-card">
              <span className="bento-method-icon">⚡</span>
              <h3>{isAr ? "هندسة صوتية متقدمة" : "Modern Production"}</h3>
              <p>
                {isAr
                  ? "تسجيل ومكس وماستر في استوديو A7MD باستخدام أحدث تقنيات المعالجة الصوتية."
                  : "High-resolution recording, analog outboard processing, and spatial audio authoring."}
              </p>
            </div>
            <div className="bento-method-card">
              <span className="bento-method-icon">★</span>
              <h3>{isAr ? "تكامل فني وإنتاجي" : "Full-Spectrum Delivery"}</h3>
              <p>
                {isAr
                  ? "توفير تراكات التوزيع المنفصلة وتوثيق حقوق الملكية للشركات والقنوات الفضائية."
                  : "Complete stems delivery and international copyright documentation for broadcasters."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Creative Booking Bento CTA */}
      <section className="bento-section">
        <div className="bento-container">
          <div className="bento-cta-box">
            <div className="bento-cta-content">
              <span className="bento-cta-badge">{isAr ? "التكليف الفني والإنتاج" : "ARTISTIC COMMISSIONS"}</span>
              <h2>{isAr ? "جاهز لإطلاق عمل فني استثنائي؟" : "Ready to Create Something Memorable?"}</h2>
              <p>
                {isAr
                  ? "متاح للتعاون في تلحين تترات المسلسلات، إنتاج الأغاني الفردية، وإحياء الحفلات الموسيقية."
                  : "Direct liaison available for soundtrack scoring, television themes, and headline concerts."}
              </p>
              <div className="bento-cta-actions">
                <Link href={getLocalePath(locale, "contact")} className="bento-btn-primary">
                  <span>{isAr ? "تواصل معي مباشرة" : "Initiate Direct Contact"}</span>
                  <ArrowIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
