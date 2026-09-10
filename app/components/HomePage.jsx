import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Disc, Mic2, Radio, Sliders } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const featuredWorks = works.slice(0, 4);

  return (
    <SiteChrome locale={locale} page="home">
      {/* 1. Analog Tape Hero */}
      <section className="tape-hero">
        <div className="tape-container">
          <div className="tape-hero-grid">
            <div className="tape-hero-content">
              <div className="tape-session-badge">
                <span className="tape-rec-dot" />
                <span>{isAr ? "شريط أنالوج حي // استوديو A7MD" : "RAW TAPE SESSION // 15 IPS REEL"}</span>
              </div>

              <h1 className="tape-hero-title">
                {isAr ? (
                  <>
                    دفءٌ يماني بأوتارٍ حية.. <br />
                    <span className="tape-amber-text">أحمد سيف</span>
                  </>
                ) : (
                  <>
                    Warm Tape Resonance.. <br />
                    <span className="tape-amber-text">Ahmed Saif</span>
                  </>
                )}
              </h1>

              <p className="tape-hero-bio">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أحب الأغنية الصادقة اللي تشبه جلسات السمر، تدخل القلب وتعلّق في البال. من استوديو A7MD أسجل أوتار العود والإيقاعات الحية بدفء الأنالوج المشبع، لنقدم لكم عملاً فنياً يلامس الروح."
                  : "Welcome.. I am Ahmed Saif, a Yemeni singer and composer. I craft songs with the intimate warmth of vintage analog tape, bringing authentic acoustic wood and organic vocal resonance to every track."}
              </p>

              <div className="tape-hero-actions">
                <Link
                  href={getLocalePath(locale, "works")}
                  className="tape-btn-amber"
                >
                  <Play size={16} fill="currentColor" />
                  <span>{isAr ? "تشغيل شريط الأعمال" : "Play Tape Master"}</span>
                </Link>
                <Link
                  href={getLocalePath(locale, "contact")}
                  className="tape-btn-wood"
                >
                  <span>{isAr ? "حجز جلسة إنتاج وتلحين" : "Book Studio Session"}</span>
                  <ArrowIcon size={16} />
                </Link>
              </div>

              {/* Dual Analog VU Meters */}
              <div className="tape-vu-console">
                <div className="tape-vu-meter">
                  <div className="tape-vu-header">
                    <span>CH 1 (LEFT)</span>
                    <small>VU</small>
                  </div>
                  <div className="tape-vu-scale">
                    <span>-20</span>
                    <span>-7</span>
                    <span>0</span>
                    <span className="vu-red">+3</span>
                  </div>
                  <div className="tape-needle tape-needle-left" />
                </div>
                <div className="tape-vu-meter">
                  <div className="tape-vu-header">
                    <span>CH 2 (RIGHT)</span>
                    <small>VU</small>
                  </div>
                  <div className="tape-vu-scale">
                    <span>-20</span>
                    <span>-7</span>
                    <span>0</span>
                    <span className="vu-red">+3</span>
                  </div>
                  <div className="tape-needle tape-needle-right" />
                </div>
              </div>
            </div>

            {/* Vintage Polaroid Framed Portrait */}
            <div className="tape-hero-media">
              <div className="tape-polaroid-card">
                <div className="tape-strip-top">A7MD_STUDIO_TAPE_01</div>
                <div className="tape-polaroid-photo">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 440px"
                    className="tape-polaroid-img"
                  />
                  <div className="tape-warm-vignette" />
                </div>
                <div className="tape-polaroid-caption">
                  <span className="tape-handwritten">
                    {isAr ? "أحمد سيف — جلسة العود الحي" : "Ahmed Saif — Live Acoustic Session"}
                  </span>
                  <span className="tape-roll-no">TAKE #04</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Cassette Discography Cards */}
      <section className="tape-section">
        <div className="tape-container">
          <div className="tape-section-header">
            <span className="tape-pretitle">{isAr ? "إصدارات الشريط والتسجيل الحي" : "MASTER CASSETTE CATALOG"}</span>
            <h2 className="tape-title">{isAr ? "أعمال نُقشت في الذاكرة" : "Selected Master Sessions"}</h2>
            <p className="tape-subtitle">
              {isAr
                ? "مقطوعات مسجلة وموزعة بأحدث تقنيات الصوت مع الحفاظ على روح الجلسة اليمنية الحية."
                : "Handcrafted master recordings blending traditional Yemeni maqam with organic tube saturation."}
            </p>
          </div>

          <div className="tape-works-grid">
            {featuredWorks.map((work, index) => (
              <div key={work.slug} className="tape-work-card">
                <div className="tape-card-spools">
                  <Disc size={28} className="tape-amber-icon tape-spin-slow" />
                  <span className="tape-spool-counter">REC_{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="tape-card-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="tape-card-img"
                  />
                  <div className="tape-card-sepia" />
                </div>

                <div className="tape-card-content">
                  <div className="tape-card-meta">
                    <span className="tape-card-year">{work.year}</span>
                    <span className="tape-card-cat">{isAr ? work.category : work.categoryEn}</span>
                  </div>

                  <h3 className="tape-card-title">
                    {isAr ? work.arTitle : work.enTitle}
                  </h3>

                  <p className="tape-card-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="tape-card-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="tape-card-link"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{isAr ? "استمع للجلسة والتفاصيل" : "Play Master Tape"}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tape-center-action">
            <Link href={getLocalePath(locale, "works")} className="tape-btn-wood">
              <span>{isAr ? "استكشف أرشيف الأشرطة الكامل (18+ عمل)" : "Open Complete Master Vault (18+ Works)"}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Handcrafted Studio Philosophy */}
      <section className="tape-section tape-section-warm">
        <div className="tape-container">
          <div className="tape-monograph-card">
            <div className="tape-tape-label">MASTER PHILOSOPHY</div>
            <p className="tape-monograph-text">
              {isAr
                ? "في عصر السرعة والإنتاج الآلي، أؤمن أن الروح الحقيقية للأغنية اليمنية تكمن في دفء الخشب، حفيف أوتار العود، واللحظة الصادقة التي تسجلها الميكروفونات الحية.. هذا هو سر بقاء العمل الفني في وجدان المستمع."
                : "In an era of automated synthesis, I preserve the organic warmth of aged wood, acoustic string resonance, and live room ambiance."}
            </p>
            <div className="tape-monograph-footer">
              <strong>{isAr ? "أحمد سيف" : "Ahmed Saif"}</strong>
              <span>A7MD Studio // 15 IPS Acoustic Tape</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Letterpress Booking CTA */}
      <section className="tape-section">
        <div className="tape-container">
          <div className="tape-letterpress-cta">
            <div className="tape-stamp-box">
              <span>OFFICIAL SEAL</span>
              <strong>A7MD</strong>
            </div>
            <h2>{isAr ? "هل لديك عمل درامي أو مشروع لحن ترغب في تنفيذه؟" : "Commission a Soundtrack or Studio Production?"}</h2>
            <p>
              {isAr
                ? "أنا متاح للتعاون الفني في تلحين تترات المسلسلات، إنتاج الأعمال الغنائية، وإحياء الحفلات الموسيقية والمهرجانات."
                : "Direct booking channels are open for scoring commissions, festival headline sessions, and single production."}
            </p>
            <div className="tape-cta-actions">
              <Link href={getLocalePath(locale, "contact")} className="tape-btn-amber">
                <span>{isAr ? "تواصل لحجز موعد" : "Schedule Studio Comms"}</span>
                <ArrowIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
