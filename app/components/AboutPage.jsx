import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Activity, Cpu, Sliders, Volume2 } from "lucide-react";
import { content, getLocalePath } from "../data";
import SiteChrome from "./SiteChrome";

export default function AboutPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="about">
      <div className="console-page-header">
        <div className="console-container">
          <div className="console-strip-badge">
            <Sliders size={14} className="console-green-icon" />
            <span>{isAr ? "سجل المهندس والمؤلف // استوديو A7MD" : "ENGINEERING SPEC & BIOGRAPHY // CONSOLE"}</span>
          </div>
          <h1 className="console-page-title">
            {isAr ? "عن أحمد سيف وفلسفة الاستوديو" : "About Ahmed Saif & Mixing Architecture"}
          </h1>
          <p className="console-page-desc">
            {isAr
              ? "مسيرة فنية تجمع بين إحساس المغني والمؤلف الموسيقي، ودقة مهندس الصوت الذي يشرف على كل تفصيلة في مسار الإنتاج."
              : "The acoustic trajectory of an artist who unites evocative vocal storytelling with meticulous control room signal engineering."}
          </p>
        </div>
      </div>

      <section className="console-section">
        <div className="console-container">
          <div className="console-about-grid">
            {/* Rack Monitor Sidebar */}
            <div className="console-about-sidebar">
              <div className="console-rack-frame">
                <div className="console-rack-ears">
                  <span className="rack-bolt top-left" />
                  <span className="rack-bolt top-right" />
                  <span className="rack-bolt bottom-left" />
                  <span className="rack-bolt bottom-right" />
                </div>
                <div className="console-portrait-inner">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="console-portrait-img"
                  />
                  <div className="console-monitor-overlay" />
                </div>
              </div>

              <div className="console-specs-board">
                <div className="console-spec-entry">
                  <span>{isAr ? "غرفة التحكم" : "Control Desk"}</span>
                  <strong>A7MD Studio (96kHz)</strong>
                </div>
                <div className="console-spec-entry">
                  <span>{isAr ? "مجالات الإتقان" : "Capabilities"}</span>
                  <strong>{isAr ? "غناء • تلحين • مكس وماستر" : "Vocals • Scoring • Mastering"}</strong>
                </div>
                <div className="console-spec-entry">
                  <span>{isAr ? "الآلة الأساسية" : "Primary Instrument"}</span>
                  <strong>{isAr ? "العود اليمني والوتريات" : "Yemeni Oud & Strings"}</strong>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="console-about-content">
              <h2 className="console-green-heading">
                {isAr ? "أنا والموسيقى.. قصة شغف بدأت من النغمة البسيطة" : "Acoustic Truth Through Pure Signal Chains"}
              </h2>

              <p className="console-lead">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أحب الأغنية البسيطة الصادقة اللي تدخل القلب وتعلّق في البال بدون تكلف. نشأت وسط تراث غنائي ثري جداً، علّمني كيف أحترم الكلمة الأصيلة وأمنحها اللحن اللي يعيش مع الناس."
                  : "Welcome.. I am Ahmed Saif. Rooted in Yemen's vibrant melodic heritage, I create music that honors traditional acoustic modes while speaking a modern visual and sonic language."}
              </p>

              <p className="console-body">
                {isAr
                  ? "أشتغل من الاستوديو حقي (A7MD Studio) على كل تفصيلة في العمل الفني: من أول جلسة عود ودندنة، مروراً بكتابة التوزيع والتنسيق مع العازفين، وصولاً إلى مرحلة المكس والماستر النهائي بأعلى المعايير التقنية العالمية."
                  : "From A7MD Studio, I direct every facet of production: from solo oud compositions to multi-layered string arrangements, live percussion capture, and broadcast mastering."}
              </p>

              {/* Milestones List */}
              <div className="console-milestones">
                <h3 className="console-milestones-title">
                  {isAr ? "محطات بارزة في المسيرة" : "Pivotal Milestones"}
                </h3>

                <div className="console-milestone-strip">
                  <span className="console-m-year">2026</span>
                  <div className="console-m-info">
                    <h4>{isAr ? "تتر مسلسل (الضايعة) - يا مدوّر الحاجة" : "Al-Dhayeh Theme - Ya Mdawer Al-Hajah"}</h4>
                    <p>
                      {isAr
                        ? "تلحين وغناء التتر الرسمي للعمل الدرامي، محققاً تفاعلاً جماهيرياً واسعاً بفضل المزج بين الطابع التراثي والروح المعاصرة."
                        : "Composed and performed the television drama soundtrack, blending regional folk cadences with modern orchestration."}
                    </p>
                  </div>
                </div>

                <div className="console-milestone-strip">
                  <span className="console-m-year">2025</span>
                  <div className="console-m-info">
                    <h4>{isAr ? "تمثيل اليمن في إكسبو أوساكا - اليابان" : "Osaka World Expo - Japan Representation"}</h4>
                    <p>
                      {isAr
                        ? "تقديم عروض موسيقية حية ومقطوعات تحتفي بالهوية اليمنية أمام جمهور دولي في جناح اليمن بإكسبو 2025."
                        : "Represented Yemeni music culture on world stages at Expo 2025 Osaka with live acoustic performances and orchestral themes."}
                    </p>
                  </div>
                </div>

                <div className="console-milestone-strip">
                  <span className="console-m-year">2024</span>
                  <div className="console-m-info">
                    <h4>{isAr ? "سلسلة الأغاني الفردية الخاصة" : "Independent Singles & Studio Releases"}</h4>
                    <p>
                      {isAr
                        ? "إطلاق أعمال ناجحة مثل (شلني إب)، (محد داري)، و(فقدتش)، والتي رسخت مكانة أحمد سيف كصوت يمني معاصر يحظى بتقدير الجمهور."
                        : "Released celebrated singles including 'Shallani Ibb', 'Mahad Dari', and 'Faqadtish', reaching millions across digital platforms."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="console-about-actions">
                <Link href={getLocalePath(locale, "contact")} className="console-btn-green">
                  <span>{isAr ? "تواصل للتعاون الفني" : "Initiate Collaboration"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link href={getLocalePath(locale, "works")} className="console-btn-metal">
                  <span>{isAr ? "استمع لجميع القنوات" : "Inspect All Channels"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
