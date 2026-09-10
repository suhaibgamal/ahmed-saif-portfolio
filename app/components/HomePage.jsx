import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Sparkles, Bookmark, Heart, Star } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const featuredWorks = works.slice(0, 4);

  return (
    <SiteChrome locale={locale} page="home">
      {/* 1. Haute Editorial Cover Hero */}
      <section className="lookbook-hero">
        <div className="lookbook-container">
          <div className="lookbook-hero-grid">
            <div className="lookbook-hero-content">
              <div className="lookbook-cover-badge">
                <span className="lookbook-crimson-dot" />
                <span>{isAr ? "غلاف العدد الفني // إصدار 2026" : "COVER STORY // HAUTE REPERTOIRE"}</span>
              </div>

              <h1 className="lookbook-hero-title">
                {isAr ? (
                  <>
                    أصواتٌ من وادي النغم.. <br />
                    <span className="lookbook-crimson-text">أحمد سيف</span>
                  </>
                ) : (
                  <>
                    The Haute Melodic Voice.. <br />
                    <span className="lookbook-crimson-text">Ahmed Saif</span>
                  </>
                )}
              </h1>

              <p className="lookbook-hero-bio">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أرى في الأغنية لوحة بصرية ومشاعر حية تدخل القلب وتعلّق في البال. من استوديو A7MD نصنع كل نغمة بشغف يجمع بين فخامة التراث اليمني وأناقة التوزيع الموسيقي العصري."
                  : "Welcome.. I am Ahmed Saif, composer and vocalist. I craft music as haute couture soundscapes: weaving historic Yemeni modal poetry with modern cinematic grandeur."}
              </p>

              <div className="lookbook-hero-actions">
                <Link
                  href={getLocalePath(locale, "works")}
                  className="lookbook-btn-crimson"
                >
                  <span>{isAr ? "تصفح لوك بوك الأعمال" : "Open Lookbook Collection"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link
                  href={getLocalePath(locale, "contact")}
                  className="lookbook-btn-outline"
                >
                  <span>{isAr ? "حجز موعد واستفسار" : "VIP Commission"}</span>
                </Link>
              </div>

              {/* Lookbook Specs Strip */}
              <div className="lookbook-specs-strip">
                <div className="lookbook-spec-unit">
                  <span className="lookbook-spec-val">18+</span>
                  <span className="lookbook-spec-lbl">{isAr ? "إصدار وتتر مسجل" : "Cataloged Releases"}</span>
                </div>
                <div className="lookbook-spec-unit">
                  <span className="lookbook-spec-val">A7MD</span>
                  <span className="lookbook-spec-lbl">{isAr ? "استوديو الإنتاج الخاص" : "Private Sound Lab"}</span>
                </div>
                <div className="lookbook-spec-unit">
                  <span className="lookbook-spec-val">OSAKA</span>
                  <span className="lookbook-spec-lbl">{isAr ? "إكسبو 2025 اليابان" : "World Expo '25"}</span>
                </div>
              </div>
            </div>

            {/* Editorial Portrait Spread */}
            <div className="lookbook-hero-media">
              <div className="lookbook-cover-frame">
                <div className="lookbook-portrait-inner">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 440px"
                    className="lookbook-portrait-img"
                  />
                  <div className="lookbook-cover-gradient" />
                </div>
                <div className="lookbook-cover-callout">
                  <span className="lookbook-issue-tag">ISSUE 26</span>
                  <strong>{isAr ? "أحمد سيف: فخامة النغم اليمني" : "AHMED SAIF: HAUTE COUTURE ACOUSTICS"}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Lookbook Works Collection */}
      <section className="lookbook-section">
        <div className="lookbook-container">
          <div className="lookbook-section-header">
            <span className="lookbook-pretitle">{isAr ? "مجموعة الأعمال الفنية" : "THE LOOKBOOK COLLECTION"}</span>
            <h2 className="lookbook-title">{isAr ? "أعمال بتوقيع فني متميز" : "Selected Repertoire Looks"}</h2>
            <p className="lookbook-subtitle">
              {isAr
                ? "مقطوعات موسيقية وتترات درامية مسجلة بأعلى معايير الإنتاج الموسيقي العالمي."
                : "A showcase of signature compositions marrying traditional Yemeni acoustic soul with contemporary orchestral luxury."}
            </p>
          </div>

          <div className="lookbook-grid">
            {featuredWorks.map((work, index) => (
              <div key={work.slug} className="lookbook-card">
                <div className="lookbook-card-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="lookbook-card-img"
                  />
                  <div className="lookbook-card-overlay" />
                  <div className="lookbook-look-tag">LOOK #{String(index + 1).padStart(2, "0")}</div>
                </div>

                <div className="lookbook-card-body">
                  <div className="lookbook-card-meta">
                    <span className="lookbook-card-cat">{isAr ? work.category : work.categoryEn}</span>
                    <span className="lookbook-card-year">{work.year}</span>
                  </div>

                  <h3 className="lookbook-card-title">
                    {isAr ? work.arTitle : work.enTitle}
                  </h3>

                  <p className="lookbook-card-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="lookbook-card-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="lookbook-card-link"
                    >
                      <span>{isAr ? "استمع واقرأ القصة" : "View Look Story"}</span>
                      <ArrowIcon size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lookbook-center-action">
            <Link href={getLocalePath(locale, "works")} className="lookbook-btn-outline">
              <span>{isAr ? "عرض أرشيف اللوك بوك الكامل (18+ عمل)" : "Open Complete Lookbook Vault (18+ Works)"}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Haute Interview Monograph */}
      <section className="lookbook-section lookbook-section-alt">
        <div className="lookbook-container">
          <div className="lookbook-quote-box">
            <div className="lookbook-quote-mark">“</div>
            <p className="lookbook-quote-text">
              {isAr
                ? "الأغنية الحقيقية مثل الثوب الفاخر المتقن.. ليست بحاجة إلى كثرة الزخارف، بل إلى خطوط نقية وأقمشة نادرة. وفي موسيقاي، النغمة الصادقة والعود اليمني هما الخامة الأساسية التي لا تبلى."
                : "Authentic music is akin to haute couture: it demands no superfluous ornamentation, only pure melodic lines and timeless emotional textures."}
            </p>
            <div className="lookbook-quote-author">
              <strong>{isAr ? "أحمد سيف" : "Ahmed Saif"}</strong>
              <span>{isAr ? "مؤلف ومغنٍ، استوديو A7MD" : "Composer & Artist, A7MD Studio"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VIP Salon Booking CTA */}
      <section className="lookbook-section">
        <div className="lookbook-container">
          <div className="lookbook-salon-card">
            <span className="lookbook-salon-tag">{isAr ? "صالون التكليف والإنتاج" : "HAUTE SALON // 2026"}</span>
            <h2>{isAr ? "هل تبحث عن عمل فني استثنائي؟" : "Inquire for Bespoke Commissions"}</h2>
            <p>
              {isAr
                ? "متاح للتعاون الفني في تلحين تترات المسلسلات، إنتاج الأغاني الفردية، وحفلات المهرجانات والمناسبات الراقية."
                : "Direct booking channels are open for scoring commissions, festival headline sessions, and single production."}
            </p>
            <div className="lookbook-salon-actions">
              <Link href={getLocalePath(locale, "contact")} className="lookbook-btn-crimson">
                <span>{isAr ? "حجز جلسة عمل في الصالون" : "Book Salon Session"}</span>
                <ArrowIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
