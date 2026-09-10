import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bookmark, Heart, Sparkles, Star } from "lucide-react";
import { content, getLocalePath } from "../data";
import SiteChrome from "./SiteChrome";

export default function AboutPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="about">
      <div className="lookbook-page-header">
        <div className="lookbook-container">
          <div className="lookbook-cover-badge">
            <span className="lookbook-crimson-dot" />
            <span>{isAr ? "المقابلة الحصرية // سيرة الفنان" : "EXCLUSIVE FEATURE // ARTIST MONOGRAPH"}</span>
          </div>
          <h1 className="lookbook-page-title">
            {isAr ? "عن أحمد سيف وفلسفته الفنية" : "About Ahmed Saif & Haute Musicality"}
          </h1>
          <p className="lookbook-page-desc">
            {isAr
              ? "حوار متعمق مع الفنان أحمد سيف حول مسيرته الموسيقية، فلسفته في التلحين، ورؤيته لتطوير التراث اليمني."
              : "An in-depth editorial profile exploring Ahmed Saif's musical trajectory, compositional philosophy, and contemporary revival of Yemeni acoustic heritage."}
          </p>
        </div>
      </div>

      <section className="lookbook-section">
        <div className="lookbook-container">
          <div className="lookbook-about-grid">
            {/* Sidebar Portrait Frame */}
            <div className="lookbook-about-sidebar">
              <div className="lookbook-cover-frame">
                <div className="lookbook-portrait-inner">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="lookbook-portrait-img"
                  />
                  <div className="lookbook-cover-gradient" />
                </div>
              </div>

              <div className="lookbook-manifest-card">
                <div className="lookbook-manifest-row">
                  <span>{isAr ? "الاستوديو والمقر" : "Atelier Base"}</span>
                  <strong>A7MD Studio</strong>
                </div>
                <div className="lookbook-manifest-row">
                  <span>{isAr ? "مجالات الإبداع" : "Craft"}</span>
                  <strong>{isAr ? "غناء • تلحين • مكس وماستر" : "Vocals • Scoring • Audio Design"}</strong>
                </div>
                <div className="lookbook-manifest-row">
                  <span>{isAr ? "الآلة المفضلة" : "Primary Medium"}</span>
                  <strong>{isAr ? "العود اليمني والوتريات" : "Acoustic Oud & Strings"}</strong>
                </div>
              </div>
            </div>

            {/* Editorial Interview Content */}
            <div className="lookbook-about-content">
              <h2 className="lookbook-crimson-heading">
                {isAr ? "أنا والموسيقى.. قصة شغف بدأت من النغمة البسيطة" : "The Art of Yemeni Melodic Elegance"}
              </h2>

              <p className="lookbook-lead">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أحب الأغنية البسيطة الصادقة اللي تدخل القلب وتعلّق في البال بدون تكلف. نشأت وسط تراث غنائي ثري جداً، علّمني كيف أحترم الكلمة الأصيلة وأمنحها اللحن اللي يعيش مع الناس."
                  : "Welcome.. I am Ahmed Saif. Rooted in Yemen's vibrant melodic heritage, I create music that honors traditional acoustic modes while speaking a modern visual and sonic language."}
              </p>

              <p className="lookbook-body">
                {isAr
                  ? "أشتغل من الاستوديو حقي (A7MD Studio) على كل تفصيلة في العمل الفني: من أول جلسة عود ودندنة، مروراً بكتابة التوزيع والتنسيق مع العازفين، وصولاً إلى مرحلة المكس والماستر النهائي بأعلى المعايير التقنية العالمية."
                  : "From A7MD Studio, I direct every facet of production: from solo oud compositions to multi-layered string arrangements, live percussion capture, and broadcast mastering."}
              </p>

              {/* Milestones List */}
              <div className="lookbook-milestones">
                <h3 className="lookbook-milestones-title">
                  {isAr ? "محطات بارزة في المسيرة" : "Pivotal Milestones"}
                </h3>

                <div className="lookbook-milestone-card">
                  <span className="lookbook-m-year">2026</span>
                  <div className="lookbook-m-info">
                    <h4>{isAr ? "تتر مسلسل (الضايعة) - يا مدوّر الحاجة" : "Al-Dhayeh Theme - Ya Mdawer Al-Hajah"}</h4>
                    <p>
                      {isAr
                        ? "تلحين وغناء التتر الرسمي للعمل الدرامي، محققاً تفاعلاً جماهيرياً واسعاً بفضل المزج بين الطابع التراثي والروح المعاصرة."
                        : "Composed and performed the television drama soundtrack, blending regional folk cadences with modern orchestration."}
                    </p>
                  </div>
                </div>

                <div className="lookbook-milestone-card">
                  <span className="lookbook-m-year">2025</span>
                  <div className="lookbook-m-info">
                    <h4>{isAr ? "تمثيل اليمن في إكسبو أوساكا - اليابان" : "Osaka World Expo - Japan Representation"}</h4>
                    <p>
                      {isAr
                        ? "تقديم عروض موسيقية حية ومقطوعات تحتفي بالهوية اليمنية أمام جمهور دولي في جناح اليمن بإكسبو 2025."
                        : "Represented Yemeni music culture on world stages at Expo 2025 Osaka with live acoustic performances and orchestral themes."}
                    </p>
                  </div>
                </div>

                <div className="lookbook-milestone-card">
                  <span className="lookbook-m-year">2024</span>
                  <div className="lookbook-m-info">
                    <h4>{isAr ? "سلسلة الأغاني الفردية الخاصة" : "Independent Singles & Studio Releases"}</h4>
                    <p>
                      {isAr
                        ? "إطلاق أعمال ناجحة مثل (شلني إب)، (محد داري)، و(فقدتش)، والتي رسخت مكانة أحمد سيف كصوت يمني معاصر يحظى بتقدير الجمهور."
                        : "Released celebrated singles including 'Shallani Ibb', 'Mahad Dari', and 'Faqadtish', reaching millions across digital platforms."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lookbook-about-actions">
                <Link href={getLocalePath(locale, "contact")} className="lookbook-btn-crimson">
                  <span>{isAr ? "تواصل للتعاون الفني" : "Initiate Collaboration"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link href={getLocalePath(locale, "works")} className="lookbook-btn-outline">
                  <span>{isAr ? "استمع لجميع الأعمال" : "Browse Lookbook"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
