import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Sliders, Activity, Radio, Cpu, Volume2 } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const featuredWorks = works.slice(0, 4);

  return (
    <SiteChrome locale={locale} page="home">
      {/* 1. Hardware Console Hero */}
      <section className="console-hero">
        <div className="console-container">
          <div className="console-hero-grid">
            <div className="console-hero-content">
              <div className="console-strip-badge">
                <span className="console-led-green" />
                <span>{isAr ? "مكتب التحكم والمكس الماستر // A7MD STUDIO" : "MASTER CHANNEL STRIP // 96kHz ANALOG BUS"}</span>
              </div>

              <h1 className="console-hero-title">
                {isAr ? (
                  <>
                    هندسة النغم.. ودفء الأوتار <br />
                    <span className="console-green-text">أحمد سيف</span>
                  </>
                ) : (
                  <>
                    Acoustic Precision & Warmth.. <br />
                    <span className="console-green-text">Ahmed Saif</span>
                  </>
                )}
              </h1>

              <p className="console-hero-bio">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن وموزع موسيقي، أحب الأغنية البسيطة الصادقة اللي تدخل القلب وتعلّق في البال. في استوديو A7MD أتحكم في كل تردد ومسار صوتي: من أول لمسة على أوتار العود وحتى معالجة الماستر النهائي لتسمع النغم بأعلى درجات النقاء."
                  : "Welcome.. I am Ahmed Saif, composer, vocalist, and mix architect. Behind the analog console at A7MD Studio, I shape raw acoustic Yemeni melodies with precision hardware analog saturation and broadcast mastering."}
              </p>

              <div className="console-hero-actions">
                <Link
                  href={getLocalePath(locale, "works")}
                  className="console-btn-green"
                >
                  <Volume2 size={16} />
                  <span>{isAr ? "استمع لقنوات الأعمال" : "Audition Master Tracks"}</span>
                </Link>
                <Link
                  href={getLocalePath(locale, "contact")}
                  className="console-btn-metal"
                >
                  <span>{isAr ? "حجز جلسة إنتاج وتلحين" : "Book Console Session"}</span>
                  <ArrowIcon size={16} />
                </Link>
              </div>

              {/* Console Meter Strip */}
              <div className="console-meters-row">
                <div className="console-meter-ch">
                  <div className="console-meter-leds">
                    <span className="led-red" />
                    <span className="led-amber" />
                    <span className="led-green on" />
                    <span className="led-green on" />
                    <span className="led-green on" />
                  </div>
                  <span className="console-meter-tag">L_BUS (0dB)</span>
                </div>
                <div className="console-meter-ch">
                  <div className="console-meter-leds">
                    <span className="led-red" />
                    <span className="led-amber" />
                    <span className="led-green on" />
                    <span className="led-green on" />
                    <span className="led-green on" />
                  </div>
                  <span className="console-meter-tag">R_BUS (0dB)</span>
                </div>
                <div className="console-spec-chip">
                  <strong>18+</strong>
                  <small>{isAr ? "مقطوعة وتتر مسجل" : "Mastered Tracks"}</small>
                </div>
                <div className="console-spec-chip">
                  <strong>OSAKA</strong>
                  <small>{isAr ? "إكسبو 2025 اليابان" : "Expo '25 Japan"}</small>
                </div>
              </div>
            </div>

            {/* Hardware Rack Monitor Frame */}
            <div className="console-hero-media">
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
                    priority
                    sizes="(max-width: 768px) 90vw, 440px"
                    className="console-portrait-img"
                  />
                  <div className="console-monitor-overlay" />
                </div>

                <div className="console-channel-readout">
                  <span className="console-led-green" />
                  <span>CH. MASTER // AHMED SAIF // GAIN: +4.2dB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Channel Strip Works Catalog */}
      <section className="console-section">
        <div className="console-container">
          <div className="console-section-header">
            <span className="console-pretitle">{isAr ? "قنوات الإخراج والإنتاج" : "CONSOLE OUTPUT CHANNELS"}</span>
            <h2 className="console-title">{isAr ? "أعمال نُفذت بمواصفات الماستر" : "Selected Master Sessions"}</h2>
            <p className="console-subtitle">
              {isAr
                ? "مقطوعات وتترات درامية مسجلة ومعالجة بأحدث أجهزة الهندسة الصوتية والماسترينغ."
                : "Acoustic repertoire and drama serial themes tracked and mastered with analog console precision."}
            </p>
          </div>

          <div className="console-channel-grid">
            {featuredWorks.map((work, index) => (
              <div key={work.slug} className="console-work-strip">
                <div className="console-strip-header">
                  <span className="console-strip-num">STRIP #{String(index + 1).padStart(2, "0")}</span>
                  <div className="console-knobs-preview">
                    <span className="console-knob" />
                    <span className="console-knob" />
                    <span className="console-knob" />
                  </div>
                  <span className="console-strip-year">{work.year}</span>
                </div>

                <div className="console-strip-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="console-strip-img"
                  />
                  <div className="console-strip-tint" />
                </div>

                <div className="console-strip-body">
                  <span className="console-strip-cat">{isAr ? work.category : work.categoryEn}</span>

                  <h3 className="console-strip-title">
                    {isAr ? work.arTitle : work.enTitle}
                  </h3>

                  <p className="console-strip-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="console-strip-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="console-strip-btn"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{isAr ? "استماع للقناة" : "Solo Channel"}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="console-center-action">
            <Link href={getLocalePath(locale, "works")} className="console-btn-metal">
              <span>{isAr ? "استعراض جميع القنوات (18+ عمل)" : "Open Full Console Desk (18+ Works)"}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Studio Signal Flow Philosophy */}
      <section className="console-section console-section-alt">
        <div className="console-container">
          <div className="console-flow-card">
            <div className="console-flow-header">
              <Sliders size={20} className="console-green-icon" />
              <h3>{isAr ? "سلسلة الإشارة الصوتية // فلسفة الإنتاج" : "SIGNAL CHAIN & MASTERING PHILOSOPHY"}</h3>
            </div>
            <p className="console-flow-text">
              {isAr
                ? "في استوديو A7MD، نؤمن بأن الأغنية الصادقة تبدأ من خامة الصوت الطبيعية بدون تشويه، ثم تُبنى بعناية على طاولة المكس عبر أجهزة أنالوج حقيقية تمنح العود والوتريات عمقاً ودفئاً لا يمكن محاكاته برمجياً."
                : "At A7MD Studio, authentic sound craft starts with pristine acoustic source capture, routed through analog channel strips to imbue strings and vocals with palpable harmonic richness."}
            </p>
            <div className="console-flow-signature">
              <strong>{isAr ? "أحمد سيف" : "Ahmed Saif"}</strong>
              <span>A7MD Studio // Master Console Desk</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Patchbay Booking CTA */}
      <section className="console-section">
        <div className="console-container">
          <div className="console-patchbay-cta">
            <div className="console-patchbay-top">
              <span className="console-led-green" />
              <span>PATCHBAY_INPUT // COMMISSION_BUS</span>
            </div>
            <h2>{isAr ? "جاهز لبدء جلسة إنتاج وتلحين مشتركة؟" : "Ready to Patch into A7MD Studio?"}</h2>
            <p>
              {isAr
                ? "أنا متاح للتعاون الفني في تلحين تترات المسلسلات، إنتاج الأعمال الغنائية، وإحياء الحفلات الموسيقية والمهرجانات."
                : "Direct dispatch is available for original soundtrack commissions, singles production, and international stage recitals."}
            </p>
            <div className="console-patchbay-actions">
              <Link href={getLocalePath(locale, "contact")} className="console-btn-green">
                <span>{isAr ? "فتح خط اتصال مباشر" : "Route Signal to Desk"}</span>
                <ArrowIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
