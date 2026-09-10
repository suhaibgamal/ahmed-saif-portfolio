import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Award, Compass, Music, Sparkles, LayoutGrid, Zap } from "lucide-react";
import { content, getLocalePath } from "../data";
import SiteChrome from "./SiteChrome";

export default function AboutPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="about">
      <div className="bento-page-header">
        <div className="bento-container">
          <div className="bento-badge">
            <Sparkles size={14} className="bento-indigo-icon" />
            <span>{isAr ? "السيرة الفنية والمسيرة الموسيقية" : "ARTIST DOSSIER // BENTO BIOGRAPHY"}</span>
          </div>
          <h1 className="bento-page-title">
            {isAr ? "عن أحمد سيف ومسيرته الفنية" : "About Ahmed Saif & Sonic Vision"}
          </h1>
          <p className="bento-page-desc">
            {isAr
              ? "رحلة في تطور الصوت اليمني الحديث، من أول دندنة عود إلى كبرى المهرجانات الدولية وشاشات الدراما."
              : "An exploratory journey tracing contemporary Yemeni melody from intimate acoustic sessions to world expos and television screens."}
          </p>
        </div>
      </div>

      <section className="bento-section">
        <div className="bento-container">
          <div className="bento-about-grid">
            {/* Sidebar Bento Card */}
            <div className="bento-about-sidebar">
              <div className="bento-portrait-card">
                <div className="bento-portrait-wrap">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="bento-portrait-img"
                  />
                  <div className="bento-portrait-gradient" />
                </div>
              </div>

              <div className="bento-specs-card">
                <div className="bento-spec-item">
                  <span>{isAr ? "الاستوديو الخاص" : "Studio Lab"}</span>
                  <strong>A7MD Studio</strong>
                </div>
                <div className="bento-spec-item">
                  <span>{isAr ? "مجالات الإتقان" : "Capabilities"}</span>
                  <strong>{isAr ? "غناء • تلحين • مكس وماستر" : "Vocals • Scoring • Audio Design"}</strong>
                </div>
                <div className="bento-spec-item">
                  <span>{isAr ? "الآلة الأساسية" : "Core Instrument"}</span>
                  <strong>{isAr ? "العود والوتريات الشرقية" : "Acoustic Oud & Strings"}</strong>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="bento-about-content">
              <h2 className="bento-gradient-title">
                {isAr ? "أنا والموسيقى.. قصة شغف بدأت من النغمة البسيطة" : "Acoustic Modernism: Heritage Reimagined"}
              </h2>

              <p className="bento-lead">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أحب الأغنية البسيطة الصادقة اللي تدخل القلب وتعلّق في البال بدون تكلف. نشأت وسط تراث غنائي ثري جداً، علّمني كيف أحترم الكلمة الأصيلة وأمنحها اللحن اللي يعيش مع الناس."
                  : "Welcome.. I am Ahmed Saif. Rooted in Yemen's vibrant melodic heritage, I create music that honors traditional acoustic modes while speaking a modern visual and sonic language."}
              </p>

              <p className="bento-body">
                {isAr
                  ? "أشتغل من الاستوديو حقي (A7MD Studio) على كل تفصيلة في العمل الفني: من أول جلسة عود ودندنة، مروراً بكتابة التوزيع والتنسيق مع العازفين، وصولاً إلى مرحلة المكس والماستر النهائي بأعلى المعايير التقنية العالمية."
                  : "From A7MD Studio, I direct every facet of production: from solo oud compositions to multi-layered string arrangements, live percussion capture, and broadcast mastering."}
              </p>

              {/* Bento Milestones */}
              <div className="bento-milestones">
                <h3 className="bento-milestones-title">
                  {isAr ? "محطات بارزة في المسيرة" : "Pivotal Milestones"}
                </h3>

                <div className="bento-milestone-tile">
                  <span className="bento-m-year">2026</span>
                  <div className="bento-m-info">
                    <h4>{isAr ? "تتر مسلسل (الضايعة) - يا مدوّر الحاجة" : "Al-Dhayeh Theme - Ya Mdawer Al-Hajah"}</h4>
                    <p>
                      {isAr
                        ? "تلحين وغناء التتر الرسمي للعمل الدرامي، محققاً تفاعلاً جماهيرياً واسعاً بفضل المزج بين الطابع التراثي والروح المعاصرة."
                        : "Composed and performed the television drama soundtrack, blending regional folk cadences with modern orchestration."}
                    </p>
                  </div>
                </div>

                <div className="bento-milestone-tile">
                  <span className="bento-m-year">2025</span>
                  <div className="bento-m-info">
                    <h4>{isAr ? "تمثيل اليمن في إكسبو أوساكا - اليابان" : "Osaka World Expo - Japan Representation"}</h4>
                    <p>
                      {isAr
                        ? "تقديم عروض موسيقية حية ومقطوعات تحتفي بالهوية اليمنية أمام جمهور دولي في جناح اليمن بإكسبو 2025."
                        : "Represented Yemeni music culture on world stages at Expo 2025 Osaka with live acoustic performances and orchestral themes."}
                    </p>
                  </div>
                </div>

                <div className="bento-milestone-tile">
                  <span className="bento-m-year">2024</span>
                  <div className="bento-m-info">
                    <h4>{isAr ? "سلسلة الأغاني الفردية الخاصة" : "Independent Singles & Studio Releases"}</h4>
                    <p>
                      {isAr
                        ? "إطلاق أعمال ناجحة مثل (شلني إب)، (محد داري)، و(فقدتش)، والتي رسخت مكانة أحمد سيف كصوت يمني معاصر يحظى بتقدير الجمهور."
                        : "Released celebrated singles including 'Shallani Ibb', 'Mahad Dari', and 'Faqadtish', reaching millions across digital platforms."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bento-about-actions">
                <Link href={getLocalePath(locale, "contact")} className="bento-btn-primary">
                  <span>{isAr ? "تواصل للتعاون الفني" : "Initiate Collaboration"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link href={getLocalePath(locale, "works")} className="bento-btn-secondary">
                  <span>{isAr ? "استمع لجميع الأعمال" : "Browse All Compositions"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
