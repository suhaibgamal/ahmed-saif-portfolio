import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Award, Compass, Music, Sparkles } from "lucide-react";
import { content, getLocalePath } from "../data";
import SiteChrome from "./SiteChrome";

export default function AboutPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="about">
      {/* 1. Monograph Hero */}
      <div className="sultani-page-header">
        <div className="sultani-container">
          <div className="sultani-hero-badge">
            <Sparkles size={14} className="sultani-gold-icon" />
            <span>{isAr ? "السيرة الفنية والمسيرة" : "Artistic Monograph & Legacy"}</span>
          </div>
          <h1 className="sultani-page-title">
            {isAr ? "عن أحمد سيف وعالمه الموسيقي" : "About Ahmed Saif & His Soundscape"}
          </h1>
          <p className="sultani-page-desc">
            {isAr
              ? "رحلة في أروقة النغم اليمني الأصيل، من أول دندنة لحن في صنعاء إلى المحافل الدولية واستوديوهات الإنتاج الحديثة."
              : "A journey through the depths of authentic Yemeni melody, from intimate Sana'ani maqam sessions to world stages and high-definition studio engineering."}
          </p>
        </div>
      </div>

      <section className="sultani-section">
        <div className="sultani-container">
          <div className="sultani-about-grid">
            {/* Portrait & Royal Crest Sidebar */}
            <div className="sultani-about-sidebar">
              <div className="sultani-portrait-frame">
                <div className="sultani-portrait-inner">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="sultani-portrait-img"
                  />
                  <div className="sultani-portrait-overlay" />
                </div>
              </div>

              <div className="sultani-about-specs">
                <div className="sultani-spec-item">
                  <span className="sultani-spec-label">{isAr ? "الموقع والاستوديو" : "Base & Studio"}</span>
                  <strong className="sultani-spec-val">A7MD Studio</strong>
                </div>
                <div className="sultani-spec-item">
                  <span className="sultani-spec-label">{isAr ? "التخصص" : "Specialization"}</span>
                  <strong className="sultani-spec-val">
                    {isAr ? "غناء، تلحين، وتوزيع موسيقي" : "Vocals, Composition & Mastering"}
                  </strong>
                </div>
                <div className="sultani-spec-item">
                  <span className="sultani-spec-label">{isAr ? "الآلة الأساسية" : "Primary Instrument"}</span>
                  <strong className="sultani-spec-val">
                    {isAr ? "العود والوتريات الشرقية" : "Acoustic Oud & Strings"}
                  </strong>
                </div>
              </div>
            </div>

            {/* Monograph Narrative Content */}
            <div className="sultani-about-narrative">
              <h2 className="sultani-heading-gold">
                {isAr ? "أنا والموسيقى.. قصة شغف بدأت من النغمة البسيطة" : "The Philosophy of Authentic Yemeni Resonance"}
              </h2>

              <p className="sultani-lead-text">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أحب الأغنية البسيطة الصادقة اللي تدخل القلب وتعلّق في البال بدون تكلف. نشأت وسط تراث غنائي ثري جداً، علّمني كيف أحترم الكلمة الأصيلة وأمنحها اللحن اللي يعيش مع الناس."
                  : "I am Ahmed Saif, an artist and composer anchored in the profound acoustic heritage of Yemen. I craft melodies that bridge historical modal poetry with modern cinematic clarity."}
              </p>

              <p className="sultani-body-text">
                {isAr
                  ? "أشتغل من الاستوديو حقي (A7MD Studio) على كل تفصيلة في العمل الفني: من أول جلسة عود ودندنة، مروراً بكتابة التوزيع والتنسيق مع العازفين، وصولاً إلى مرحلة المكس والماستر النهائي بأعلى المعايير التقنية العالمية."
                  : "From A7MD Studio, I direct every acoustic parameter: from the initial wooden resonance of the acoustic oud to multi-channel orchestration and pristine digital mastering."}
              </p>

              {/* Milestones Timeline */}
              <div className="sultani-timeline">
                <h3 className="sultani-timeline-title">
                  {isAr ? "محطات بارزة في المسيرة" : "Pivotal Milestones"}
                </h3>

                <div className="sultani-timeline-item">
                  <span className="sultani-timeline-year">2026</span>
                  <div className="sultani-timeline-content">
                    <h4>{isAr ? "تتر مسلسل (الضايعة) - يا مدوّر الحاجة" : "Al-Dhayeh Theme - Ya Mdawer Al-Hajah"}</h4>
                    <p>
                      {isAr
                        ? "تلحين وغناء التتر الرسمي للعمل الدرامي، محققاً تفاعلاً جماهيرياً واسعاً بفضل المزج بين الطابع التراثي والروح المعاصرة."
                        : "Composed and performed the official television drama soundtrack, blending regional folk cadences with modern orchestration."}
                    </p>
                  </div>
                </div>

                <div className="sultani-timeline-item">
                  <span className="sultani-timeline-year">2025</span>
                  <div className="sultani-timeline-content">
                    <h4>{isAr ? "تمثيل اليمن في إكسبو أوساكا - اليابان" : "Osaka World Expo - Japan Representation"}</h4>
                    <p>
                      {isAr
                        ? "تقديم عروض موسيقية حية ومقطوعات تحتفي بالهوية اليمنية أمام جمهور دولي في جناح اليمن بإكسبو 2025."
                        : "Represented Yemeni music culture on world stages at Expo 2025 Osaka with live acoustic performances and orchestral themes."}
                    </p>
                  </div>
                </div>

                <div className="sultani-timeline-item">
                  <span className="sultani-timeline-year">2024</span>
                  <div className="sultani-timeline-content">
                    <h4>{isAr ? "سلسلة الأغاني الفردية الخاصة" : "Independent Singles & Studio Releases"}</h4>
                    <p>
                      {isAr
                        ? "إطلاق أعمال ناجحة مثل (شلني إب)، (محد داري)، و(فقدتش)، والتي رسخت مكانة أحمد سيف كصوت يمني معاصر يحظى بتقدير الجمهور."
                        : "Released celebrated singles including 'Shallani Ibb', 'Mahad Dari', and 'Faqadtish', reaching millions across digital platforms."}
                    </p>
                  </div>
                </div>

                <div className="sultani-timeline-item">
                  <span className="sultani-timeline-year">A7MD</span>
                  <div className="sultani-timeline-content">
                    <h4>{isAr ? "تأسيس A7MD Studio" : "Establishment of A7MD Studio"}</h4>
                    <p>
                      {isAr
                        ? "بناء مساحة صوتية خاصة ومجهزة بمعدات تسجيل متقدمة تتيح إنتاج أعمال متكاملة من التلحين حتى الماستر النهائي."
                        : "Engineered a dedicated acoustic recording control room equipped for full-spectrum production, mixing, and mastering."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Banner */}
              <div className="sultani-about-actions">
                <Link href={getLocalePath(locale, "contact")} className="sultani-btn-primary">
                  <span>{isAr ? "بدء محادثة للتعاون الفني" : "Initiate Artistic Collaboration"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link href={getLocalePath(locale, "works")} className="sultani-btn-secondary">
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
