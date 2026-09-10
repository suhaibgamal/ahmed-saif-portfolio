import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Eye, Square, Minus } from "lucide-react";
import { content, getLocalePath } from "../data";
import SiteChrome from "./SiteChrome";

export default function AboutPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="about">
      <div className="gallery-page-header">
        <div className="gallery-container">
          <div className="gallery-curatorial-tag">
            <span className="gallery-tag-sq" />
            <span>{isAr ? "الدراسة الفنية والتوثيقية // سيرة أحمد سيف" : "CURATORIAL MONOGRAPH // BIOGRAPHICAL ESSAY"}</span>
          </div>
          <h1 className="gallery-page-title">
            {isAr ? "السيرة التوثيقية والفلسفة الموسيقية" : "Biographical Monograph & Curatorial Vision"}
          </h1>
          <p className="gallery-page-desc">
            {isAr
              ? "نظرة متعمقة في مسيرة فنان اختار بساطة اللحن الصادق كمنهج فني، يدمج التراث اليمني بالحداثة الموسيقية العالمية."
              : "A critical examination of Ahmed Saif's acoustic trajectory: grounding timeless Yemeni maqam in contemporary artistic clarity."}
          </p>
        </div>
      </div>

      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-about-grid">
            {/* Sidebar: Monochrome Frame & Archival Card */}
            <div className="gallery-about-sidebar">
              <div className="gallery-monochrome-frame">
                <div className="gallery-portrait-inner">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="gallery-portrait-img"
                  />
                  <div className="gallery-portrait-tint" />
                </div>
              </div>

              <div className="gallery-archival-data">
                <div className="gallery-data-row">
                  <span>{isAr ? "الموقع والاستوديو" : "Base Archive"}</span>
                  <strong>A7MD Studio</strong>
                </div>
                <div className="gallery-data-row">
                  <span>{isAr ? "التصنيف الفني" : "Classification"}</span>
                  <strong>{isAr ? "غناء • تلحين • تأليف درامي" : "Vocals • Scoring • Composition"}</strong>
                </div>
                <div className="gallery-data-row">
                  <span>{isAr ? "المرتكز الصوتي" : "Acoustic Medium"}</span>
                  <strong>{isAr ? "العود اليمني المعاصر" : "Contemporary Yemeni Oud"}</strong>
                </div>
              </div>
            </div>

            {/* Curatorial Essay Content */}
            <div className="gallery-about-content">
              {/* Essay I */}
              <div className="gallery-essay-chapter">
                <span className="gallery-chapter-num">I. {isAr ? "الجذور والانطلاق" : "ORIGINS & ETHOS"}</span>
                <h2 className="gallery-chapter-title">
                  {isAr ? "أنا والموسيقى.. صدق النغمة قبل كل شيء" : "The Core Truth of Song"}
                </h2>
                <p className="gallery-lead">
                  {isAr
                    ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أحب الأغنية البسيطة الصادقة اللي تدخل القلب وتعلّق في البال بدون تكلف. نشأت في بيئة غنية بالألحان التراثية المتوارثة، وتعلمت أن قوة العمل الفني تكمن في قدرته على ملامسة وجدان المستمع العادي قبل المتخصص."
                    : "Welcome.. I am Ahmed Saif. Raised within Yemen's profound vocal traditions, I believe in melodies that require no artificial ornamentation to leave an indelible mark on the listener's heart."}
                </p>
                <p className="gallery-body">
                  {isAr
                    ? "أشتغل من الاستوديو حقي (A7MD Studio) على كل تفصيلة: من أول دندنة لحن لحد ما يكتمل التوزيع والماستر بأعلى جودة تليق بذائقة الجمهور وبالمعايير الصوتية الرفيعة."
                    : "From A7MD Studio, I direct the complete production lifecycle: from raw acoustic conception on the oud to orchestral scoring, recording live rhythm sections, and final high-fidelity mastering."}
                </p>
              </div>

              {/* Essay II: Milestones */}
              <div className="gallery-essay-chapter">
                <span className="gallery-chapter-num">II. {isAr ? "السجل التاريخي للمحطات" : "HISTORICAL CHRONOLOGY"}</span>
                <div className="gallery-chrono-list">
                  <div className="gallery-chrono-row">
                    <span className="gallery-chrono-year">2026</span>
                    <div className="gallery-chrono-desc">
                      <h4>{isAr ? "تتر مسلسل (الضايعة) - يا مدوّر الحاجة" : "Al-Dhayeh Theme - Ya Mdawer Al-Hajah"}</h4>
                      <p>
                        {isAr
                          ? "التأليف والتلحين والغناء للشارة الدرامية الرسمية، التي حققت انتشاراً واسعاً وأثبتت قدرة الأغنية التراثية على قيادة الأعمال الدرامية الحديثة."
                          : "Composed and sang the original drama soundtrack, earning widespread regional acclaim for its synthesis of folk lyrical depth and modern orchestration."}
                      </p>
                    </div>
                  </div>

                  <div className="gallery-chrono-row">
                    <span className="gallery-chrono-year">2025</span>
                    <div className="gallery-chrono-desc">
                      <h4>{isAr ? "إكسبو أوساكا - اليابان (المشاركة الدولية)" : "Expo 2025 Osaka (Japan) Cultural Performance"}</h4>
                      <p>
                        {isAr
                          ? "تمثيل الهوية الموسيقية لليمن في المحفل الدولي في اليابان، وتقديم عروض حية احتفت بالمقامات اليمنية العريقة أمام جمهور من مختلف دول العالم."
                          : "Presented Yemeni acoustic compositions to international audiences at the world expo in Osaka, showcasing cultural heritage on global stages."}
                      </p>
                    </div>
                  </div>

                  <div className="gallery-chrono-row">
                    <span className="gallery-chrono-year">2024</span>
                    <div className="gallery-chrono-desc">
                      <h4>{isAr ? "سلسلة الأغاني الفردية (شلني إب، محد داري، فقدتش)" : "Archival Singles (Shallani Ibb, Mahad Dari, Faqadtish)"}</h4>
                      <p>
                        {isAr
                          ? "إطلاق عدد من الأغاني المنفردة التي حققت ملايين المشاهدات والاستماعات عبر المنصات الرقمية، ورسخت اسمه كصوت يمني مميز."
                          : "Released an acclaimed series of original singles capturing millions of streams and solidifying his presence across digital platforms."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gallery-about-actions">
                <Link href={getLocalePath(locale, "contact")} className="gallery-btn-white">
                  <span>{isAr ? "التواصل للتكليف الفني" : "Artistic Commission"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link href={getLocalePath(locale, "works")} className="gallery-btn-outline">
                  <span>{isAr ? "فهرس الأعمال المعروضة" : "Exhibition Catalog"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
