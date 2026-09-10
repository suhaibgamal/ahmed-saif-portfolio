import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Activity, Cpu, Sliders, Zap, Terminal } from "lucide-react";
import { content, getLocalePath } from "../data";
import SiteChrome from "./SiteChrome";

export default function AboutPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="about">
      <div className="cyber-page-header">
        <div className="cyber-container">
          <div className="cyber-terminal-badge">
            <Terminal size={14} className="cyber-cyan-icon" />
            <span>{isAr ? "ملف الفنان // سيرة ورؤية تقنية" : "ARTIST LOG // DSP BIOGRAPHY"}</span>
          </div>
          <h1 className="cyber-page-title">
            {isAr ? "عن أحمد سيف وفلسفته الصوتية" : "About Ahmed Saif & Acoustic Telemetry"}
          </h1>
          <p className="cyber-page-desc">
            {isAr
              ? "استكشاف في أبعاد الصوت اليمني الحديث، يجمع بين أصالة التراث المقامي وهندسة الإنتاج الرقمي المتطورة."
              : "Bridging ancient Arabian melodic scales with contemporary digital signal processing and sound design."}
          </p>
        </div>
      </div>

      <section className="cyber-section">
        <div className="cyber-container">
          <div className="cyber-about-grid">
            {/* Sidebar: Portrait + Studio Telemetry Specs */}
            <div className="cyber-about-sidebar">
              <div className="cyber-hologram-frame">
                <div className="cyber-portrait-inner">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="cyber-portrait-img"
                  />
                  <div className="cyber-scanline-overlay" />
                </div>
              </div>

              <div className="cyber-specs-panel">
                <div className="cyber-spec-row">
                  <span>{isAr ? "المقر والاستوديو" : "HQ & Facility"}</span>
                  <strong>A7MD Studio (96kHz)</strong>
                </div>
                <div className="cyber-spec-row">
                  <span>{isAr ? "محاور العمل" : "Disciplines"}</span>
                  <strong>{isAr ? "غناء • تلحين • مكس وماستر" : "Vocals • Scoring • DSP"}</strong>
                </div>
                <div className="cyber-spec-row">
                  <span>{isAr ? "الآلة المفضلة" : "Acoustic Anchor"}</span>
                  <strong>{isAr ? "العود الشرقي الكهربائي والصوتي" : "Acoustic & Electro Oud"}</strong>
                </div>
              </div>
            </div>

            {/* Main Bio Content */}
            <div className="cyber-about-content">
              <h2 className="cyber-cyan-title">
                {isAr ? "أنا والموسيقى: نبض يماني يلتقي بهندسة العصر" : "Sound Crafting: Ancient Resonance Meets Modern Physics"}
              </h2>

              <p className="cyber-lead">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أحب الأغنية البسيطة الصادقة اللي تدخل القلب وتعلّق في البال بدون تكلف. نشأت في بيئة مشبعة بالألحان الشعبية والتراثية العميقة، وقررت أن أطور هذا التراث ليواكب المعايير العالمية المعاصرة."
                  : "Welcome.. I am Ahmed Saif. Born from Yemen's deep melodic traditions, I believe in raw, heartfelt songcraft that cuts through noise and touches the soul with emotional purity."}
              </p>

              <p className="cyber-body">
                {isAr
                  ? "أشتغل من الاستوديو حقي (A7MD Studio) على كل تفصيلة في العمل: من أول دندنة لحن وجلسة عود، لحد ما يكتمل التوزيع، تسجيل الوتريات والإيقاعات الحية، والماستر النهائي بأعلى جودة تضمن نقاء الصوت في كل سماعة وسيارة ومنصة."
                  : "From my dedicated A7MD Studio, I oversee the complete signal chain: from initial acoustic oud improvisations to complex orchestrations, live percussion capture, and pristine digital mastering."}
              </p>

              {/* Interactive Circuit Milestones */}
              <div className="cyber-circuits">
                <h3 className="cyber-circuits-title">
                  {isAr ? "محطات التطور الموسيقي" : "System Development Milestones"}
                </h3>

                <div className="cyber-circuit-card">
                  <div className="cyber-circuit-node">2026</div>
                  <div className="cyber-circuit-detail">
                    <h4>{isAr ? "تتر مسلسل (الضايعة) - يا مدوّر الحاجة" : "Al-Dhayeh Theme - Ya Mdawer Al-Hajah"}</h4>
                    <p>
                      {isAr
                        ? "تلحين وأداء تتر المسلسل الدرامي، محققاً صدى كبيراً بفضل التوزيع الحي المبتكر والكلمات القريبة من نبض الناس."
                        : "Composed and performed the television serial theme song, combining folk vocal delivery with dynamic bass and strings."}
                    </p>
                  </div>
                </div>

                <div className="cyber-circuit-card">
                  <div className="cyber-circuit-node">2025</div>
                  <div className="cyber-circuit-detail">
                    <h4>{isAr ? "تمثيل اليمن في إكسبو أوساكا - اليابان" : "Yemen Pavillion at Expo Osaka 2025 (Japan)"}</h4>
                    <p>
                      {isAr
                        ? "تقديم ألوان الغناء اليمني أمام جمهور عالمي في اليابان، والاحتفاء بالهوية الموسيقية الحضرمية والصنعانية بتوزيعات جديدة."
                        : "Performed signature Yemeni melodies for global audiences at Expo 2025 Osaka, bridging cultures with acoustic brilliance."}
                    </p>
                  </div>
                </div>

                <div className="cyber-circuit-card">
                  <div className="cyber-circuit-node">2024</div>
                  <div className="cyber-circuit-detail">
                    <h4>{isAr ? "إصدار الأغاني الفردية (شلني إب، محد داري، فقدتش)" : "Independent Releases (Shallani Ibb, Mahad Dari)"}</h4>
                    <p>
                      {isAr
                        ? "مجموعة من الأغاني التي لاقت انتشاراً واسعاً على يوتيوب ومنصات البث، وحققت ملايين المشاهدات والاستماعات."
                        : "Released a celebrated string of original singles capturing millions of streams across Spotify, YouTube, and Anghami."}
                    </p>
                  </div>
                </div>

                <div className="cyber-circuit-card">
                  <div className="cyber-circuit-node">SYS</div>
                  <div className="cyber-circuit-detail">
                    <h4>{isAr ? "تأسيس معمل A7MD Studio" : "A7MD Studio Foundation"}</h4>
                    <p>
                      {isAr
                        ? "بناء الاستوديو المتخصص للتحكم الكامل في جودة الصوت، من التسجيل وحتى التسليم النهائي للشركات والقنوات."
                        : "Built a fully treated studio listening environment equipped for precision tracking, mixing, and multichannel authoring."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="cyber-about-actions">
                <Link href={getLocalePath(locale, "contact")} className="cyber-btn-cyan">
                  <span>{isAr ? "تواصل معي للعمل الفني" : "Connect With Ahmed"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link href={getLocalePath(locale, "works")} className="cyber-btn-glass">
                  <span>{isAr ? "استكشف قائمة الأعمال" : "Audio Works Catalog"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
