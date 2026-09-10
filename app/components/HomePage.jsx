import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Eye, Minus, Square } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const romanNumerals = ["I", "II", "III", "IV"];
  const featuredWorks = works.slice(0, 4);

  return (
    <SiteChrome locale={locale} page="home">
      {/* 1. Stark Brutalist Hero */}
      <section className="gallery-hero">
        <div className="gallery-container">
          <div className="gallery-hero-grid">
            <div className="gallery-hero-content">
              <div className="gallery-curatorial-tag">
                <span className="gallery-tag-sq" />
                <span>{isAr ? "معرض فني ومتحف موسيقي // استوديو A7MD" : "CURATORIAL ARCHIVE // PERMANENT COLLECTION"}</span>
              </div>

              <h1 className="gallery-hero-title">
                {isAr ? (
                  <>
                    أصالة اللحن في مساحة بيضاء وسوداء.. <br />
                    <span className="gallery-white-text">أحمد سيف</span>
                  </>
                ) : (
                  <>
                    Stark Acoustic Purity.. <br />
                    <span className="gallery-white-text">Ahmed Saif</span>
                  </>
                )}
              </h1>

              <p className="gallery-hero-bio">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أؤمن بالأغنية الصادقة الخالية من الزوائد، التي تدخل القلب مباشرة. من استوديو A7MD نصنع كل نغمة بحساب فني دقيق، لنقدم التراث اليمني برؤية معاصرة رفيعة المستوى."
                  : "Welcome.. I am Ahmed Saif, a contemporary Yemeni sound artist and composer. I strip away the superfluous to arrive at raw melodic truth: honoring ancient Arabian maqam traditions within an uncompromising modern frame."}
              </p>

              <div className="gallery-hero-actions">
                <Link
                  href={getLocalePath(locale, "works")}
                  className="gallery-btn-white"
                >
                  <span>{isAr ? "معاينة المعرض الموسيقي" : "View Exhibition Catalog"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link
                  href={getLocalePath(locale, "contact")}
                  className="gallery-btn-outline"
                >
                  <span>{isAr ? "طلب تكليف فني رسمي" : "Artistic Commission"}</span>
                </Link>
              </div>

              {/* Museum Metrics */}
              <div className="gallery-metrics-row">
                <div className="gallery-metric-box">
                  <span className="gallery-m-num">18+</span>
                  <span className="gallery-m-lbl">{isAr ? "مؤلفة مسجلة" : "Archived Works"}</span>
                </div>
                <div className="gallery-metric-box">
                  <span className="gallery-m-num">A7MD</span>
                  <span className="gallery-m-lbl">{isAr ? "استوديو خاص" : "Private Studio"}</span>
                </div>
                <div className="gallery-metric-box">
                  <span className="gallery-m-num">2025</span>
                  <span className="gallery-m-lbl">{isAr ? "إكسبو أوساكا اليابان" : "Osaka Expo '25"}</span>
                </div>
              </div>
            </div>

            {/* Stark Gallery Frame */}
            <div className="gallery-hero-media">
              <div className="gallery-monochrome-frame">
                <div className="gallery-portrait-inner">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 440px"
                    className="gallery-portrait-img"
                  />
                  <div className="gallery-portrait-tint" />
                </div>
                <div className="gallery-caption-bar">
                  <span className="gallery-fig">FIG. 01</span>
                  <span>AHMED SAIF — SOUND ARTIST & VOCALIST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curatorial Exhibition Grid */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-section-header">
            <span className="gallery-pretitle">{isAr ? "المعروضات الفنية المختارة" : "PERMANENT EXHIBITION PLATES"}</span>
            <h2 className="gallery-title">{isAr ? "أعمال نُقشت في الوجدان" : "Selected Archival Compositions"}</h2>
            <p className="gallery-subtitle">
              {isAr
                ? "مقطوعات تمثل خلاصة التجربة اللحنية والغنائية لأحمد سيف، معروضة بتوثيقها الفني الكامل."
                : "Masterworks representing the pinnacle of Yemeni vocal composition, presented in full curatorial detail."}
            </p>
          </div>

          <div className="gallery-plates-grid">
            {featuredWorks.map((work, index) => (
              <div key={work.slug} className="gallery-plate-card">
                <div className="gallery-plate-top">
                  <span className="gallery-plate-roman">{romanNumerals[index] || `NO. ${index + 1}`}</span>
                  <span className="gallery-plate-year">{work.year}</span>
                </div>

                <div className="gallery-plate-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="gallery-plate-img"
                  />
                  <div className="gallery-plate-mask" />
                </div>

                <div className="gallery-plate-body">
                  <span className="gallery-plate-cat">{isAr ? work.category : work.categoryEn}</span>
                  <h3 className="gallery-plate-title">
                    {isAr ? work.arTitle : work.enTitle}
                  </h3>
                  <p className="gallery-plate-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="gallery-plate-action">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="gallery-plate-link"
                    >
                      <span>{isAr ? "فحص اللوحة الصوتية" : "Inspect Plate"}</span>
                      <ArrowIcon size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-center-action">
            <Link href={getLocalePath(locale, "works")} className="gallery-btn-outline">
              <span>{isAr ? "معاينة أرشيف المعرض بالكامل (18+ عمل)" : "Open Complete Museum Archive (18+ Works)"}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Curatorial Essay */}
      <section className="gallery-section gallery-section-alt">
        <div className="gallery-container">
          <div className="gallery-essay-box">
            <span className="gallery-essay-num">ESSAY // I</span>
            <h3 className="gallery-essay-title">
              {isAr ? "في نقد الزوائد: جمالية النغمة البسيطة" : "On the Abolition of Fluff: The Power of Honest Song"}
            </h3>
            <p className="gallery-essay-text">
              {isAr
                ? "في عالم يعج بالضجيج والمؤثرات المصطنعة، تنبع قوة الفن من الشجاعة في التجريد.. عندما تعزف العود بصوت نقي وتغني بصدق، تصل الرسالة إلى أعمق زوايا القلب دون الحاجة إلى طبقات متراكمة من الإبهار البصري أو الصوتي الزائف."
                : "In a landscape cluttered with digital noise, true artistic authority lies in deliberate restraint. Stripped to its core acoustic resonance, Yemeni melody possesses a timeless emotional clarity."}
            </p>
            <div className="gallery-essay-author">
              <strong>{isAr ? "أحمد سيف" : "Ahmed Saif"}</strong>
              <span>{isAr ? "موسيقي ومؤلف، استوديو A7MD" : "Composer & Producer, A7MD Studio"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gallery Liaison Desk CTA */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-liaison-card">
            <span className="gallery-liaison-tag">COMMISSION DESK // 2026</span>
            <h2>{isAr ? "هل تبحث عن عمل فني بتوقيع موسيقي خاص؟" : "Commission a Curated Sound Piece"}</h2>
            <p>
              {isAr
                ? "المكتب الفني متاح للمؤسسات الثقافية، شركات الإنتاج التلفزيوني، والمهرجانات الدولية لتنسيق المشاريع والأعمال الخاصة."
                : "The curatorial liaison office is open for cultural institutions, television networks, and international festival commissions."}
            </p>
            <div className="gallery-liaison-action">
              <Link href={getLocalePath(locale, "contact")} className="gallery-btn-white">
                <span>{isAr ? "التواصل مع مكتب الأرشيف" : "Initiate Curatorial Dialogue"}</span>
                <ArrowIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
