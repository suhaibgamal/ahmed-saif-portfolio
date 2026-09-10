import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Sparkles, Disc, Music, Award } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const featuredWorks = works.slice(0, 4);

  return (
    <SiteChrome locale={locale} page="home">
      {/* 1. Sultani Royal Hero */}
      <section className="sultani-hero">
        <div className="sultani-hero-container">
          <div className="sultani-hero-grid">
            <div className="sultani-hero-content">
              <div className="sultani-hero-badge">
                <Sparkles size={14} className="sultani-gold-icon" />
                <span>{isAr ? "صوت وموسيقى يمنية أصيلة" : "Authentic Yemeni Voice & Melody"}</span>
              </div>

              <h1 className="sultani-hero-title">
                {isAr ? (
                  <>
                    نغمٌ يماني يعبر القلوب.. <br />
                    <span className="sultani-gold-text">أحمد سيف</span>
                  </>
                ) : (
                  <>
                    A Yemeni Soul in Harmony.. <br />
                    <span className="sultani-gold-text">Ahmed Saif</span>
                  </>
                )}
              </h1>

              <p className="sultani-hero-bio">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أحب الأغنية البسيطة الصادقة اللي تدخل القلب وتعلّق في البال. أشتغل من الاستوديو حقي (A7MD Studio) على كل تفصيلة: من أول دندنة لحن لحد ما يكتمل التوزيع والماستر بأعلى جودة."
                  : "Welcome.. I am Ahmed Saif, a Yemeni singer, composer, and producer. I believe in music that resonates from the heart. From my own A7MD Studio, I craft every detail from initial melodic conception to final orchestral mastery."}
              </p>

              <div className="sultani-hero-actions">
                <Link
                  href={getLocalePath(locale, "works")}
                  className="sultani-btn-primary"
                >
                  <span>{isAr ? "استكشف الأعمال المختارة" : "Explore Selected Works"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link
                  href={getLocalePath(locale, "contact")}
                  className="sultani-btn-secondary"
                >
                  <span>{isAr ? "طلب عمل أو حجز حفل" : "Inquire for Booking"}</span>
                </Link>
              </div>

              {/* Royal Stats */}
              <div className="sultani-stats-row">
                <div className="sultani-stat-item">
                  <span className="sultani-stat-number">18+</span>
                  <span className="sultani-stat-label">{isAr ? "عمل موسيقي وتتر" : "Original Works"}</span>
                </div>
                <div className="sultani-stat-divider" />
                <div className="sultani-stat-item">
                  <span className="sultani-stat-number">2025</span>
                  <span className="sultani-stat-label">{isAr ? "إكسبو أوساكا - اليابان" : "Osaka Expo Japan"}</span>
                </div>
                <div className="sultani-stat-divider" />
                <div className="sultani-stat-item">
                  <span className="sultani-stat-number">A7MD</span>
                  <span className="sultani-stat-label">{isAr ? "استوديو خاص متكامل" : "Dedicated Studio"}</span>
                </div>
              </div>
            </div>

            {/* Asymmetric Profile Frame with Royal Crest */}
            <div className="sultani-hero-media">
              <div className="sultani-portrait-frame">
                <div className="sultani-frame-decor sultani-frame-decor-tl" />
                <div className="sultani-frame-decor sultani-frame-decor-tr" />
                <div className="sultani-frame-decor sultani-frame-decor-bl" />
                <div className="sultani-frame-decor sultani-frame-decor-br" />

                <div className="sultani-portrait-inner">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 480px"
                    className="sultani-portrait-img"
                  />
                  <div className="sultani-portrait-overlay" />
                </div>

                <div className="sultani-portrait-badge">
                  <span className="sultani-crest-icon">✦</span>
                  <div>
                    <strong>AHMED SAIF</strong>
                    <small>{isAr ? "مايسترو وملحن يمني" : "Composer & Vocalist"}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curated Works Museum Showcase */}
      <section className="sultani-section sultani-section-works">
        <div className="sultani-container">
          <div className="sultani-section-header">
            <span className="sultani-pretitle">{isAr ? "المؤلفات المختارة" : "Curated Repertoire"}</span>
            <h2 className="sultani-title">{isAr ? "أعمال نالت قلوب الجماهير" : "Signature Compositions"}</h2>
            <p className="sultani-subtitle">
              {isAr
                ? "مزيج من التراث اليمني والروح المعاصرة، مسجلة وموزعة بأحدث تقنيات الصوت."
                : "A masterly synthesis of Yemeni maqam traditions and contemporary acoustic production."}
            </p>
          </div>

          <div className="sultani-works-grid">
            {featuredWorks.map((work) => (
              <div key={work.slug} className="sultani-work-card">
                <div className="sultani-work-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="sultani-work-img"
                  />
                  <div className="sultani-work-overlay" />
                  <div className="sultani-work-year-pill">{work.year}</div>
                </div>

                <div className="sultani-work-content">
                  <span className="sultani-work-category">
                    {isAr ? work.category : work.categoryEn}
                  </span>
                  <h3 className="sultani-work-title">
                    {isAr ? work.arTitle : work.enTitle}
                  </h3>
                  <p className="sultani-work-excerpt">
                    {isAr ? work.description : work.descriptionEn}
                  </p>
                  <div className="sultani-work-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="sultani-work-link"
                    >
                      <span>{isAr ? "استمع وشاهد التفاصيل" : "Listen & View Details"}</span>
                      <ArrowIcon size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sultani-center-action">
            <Link href={getLocalePath(locale, "works")} className="sultani-btn-outline-gold">
              <span>{isAr ? "عرض أرشيف الأعمال الكامل (18+ عمل)" : "View Complete Catalog (18+ Works)"}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Maestro Philosophy / Monograph */}
      <section className="sultani-section sultani-section-philosophy">
        <div className="sultani-container">
          <div className="sultani-philosophy-box">
            <div className="sultani-philosophy-quote-mark">“</div>
            <p className="sultani-philosophy-text">
              {isAr
                ? "الموسيقى عندي مش مجرد نغمات تُعزف، بل إحساس يمني صادق يربط بين أصالة الماضي وإيقاع العصر.. في كل عمل، أحرص أن تصل الكلمة واللحن إلى عمق المستمع بدون تكلف."
                : "Music to me is not merely arranged notes, but an authentic emotion uniting timeless Yemeni heritage with contemporary resonance."}
            </p>
            <div className="sultani-philosophy-author">
              <strong>{isAr ? "أحمد سيف" : "Ahmed Saif"}</strong>
              <span>{isAr ? "ملحن ومغنٍ، استوديو A7MD" : "Composer & Producer, A7MD Studio"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Royal VIP Concierge Protocol */}
      <section className="sultani-section sultani-section-cta">
        <div className="sultani-container">
          <div className="sultani-cta-card">
            <div className="sultani-cta-content">
              <span className="sultani-cta-tag">{isAr ? "التعاون الفني والإنتاج" : "Artistic Commissioning"}</span>
              <h2 className="sultani-cta-title">
                {isAr ? "هل تبحث عن عمل فني أو موسيقى تصويرية خاصة؟" : "Seeking Custom Composition or Event Performance?"}
              </h2>
              <p className="sultani-cta-text">
                {isAr
                  ? "أنا متاح للتعاون في تلحين تترات المسلسلات، إنتاج الأغاني الفردية، وحفلات المهرجانات الدولية والمناسبات الراقية."
                  : "Available for soundtrack scoring, television themes, international cultural showcases, and bespoke live recitals."}
              </p>
              <div className="sultani-cta-actions">
                <Link href={getLocalePath(locale, "contact")} className="sultani-btn-primary">
                  <span>{isAr ? "تواصل مباشرة عبر المكتب" : "Direct Liaison & Booking"}</span>
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
