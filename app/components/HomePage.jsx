import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Cpu, Radio, Zap, Sliders, AudioWaveform } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const featuredWorks = works.slice(0, 4);

  return (
    <SiteChrome locale={locale} page="home">
      {/* 1. Cyber Hero */}
      <section className="cyber-hero">
        <div className="cyber-container">
          <div className="cyber-hero-grid">
            <div className="cyber-hero-content">
              <div className="cyber-terminal-badge">
                <span className="cyber-pulse-dot" />
                <span>{isAr ? "نظام الإنتاج الموسيقي الحي // A7MD STUDIO" : "AUDIO DSP RUNTIME // A7MD STUDIO"}</span>
              </div>

              <h1 className="cyber-hero-title">
                {isAr ? (
                  <>
                    صوتٌ يماني بنبضٍ معاصر.. <br />
                    <span className="cyber-cyan-glow">أحمد سيف</span>
                  </>
                ) : (
                  <>
                    Future Acoustic Resonance.. <br />
                    <span className="cyber-cyan-glow">Ahmed Saif</span>
                  </>
                )}
              </h1>

              <p className="cyber-hero-bio">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن وموزع موسيقي. أحب التجريب ودمج الروح والمقام اليمني الأصيل مع أحدث هندسة صوتية وتوزيع إلكتروني. من استوديو A7MD أصنع كل تراك برؤية متطورة تلامس الوجدان."
                  : "Welcome.. I am Ahmed Saif, composer, vocalist, and audio architect. I fuse traditional Yemeni maqam with modern synthetic spatial textures and broadcast-tier mastering."}
              </p>

              <div className="cyber-hero-actions">
                <Link
                  href={getLocalePath(locale, "works")}
                  className="cyber-btn-cyan"
                >
                  <Zap size={16} />
                  <span>{isAr ? "استكشف الأعمال الصوتية" : "Initialize Audio Stream"}</span>
                </Link>
                <Link
                  href={getLocalePath(locale, "contact")}
                  className="cyber-btn-glass"
                >
                  <span>{isAr ? "طلب إنتاج وتلحين" : "Studio Commissioning"}</span>
                  <ArrowIcon size={16} />
                </Link>
              </div>

              {/* Telemetry Stats */}
              <div className="cyber-telemetry-grid">
                <div className="cyber-telemetry-card">
                  <span className="cyber-telemetry-val">96kHz</span>
                  <span className="cyber-telemetry-lbl">{isAr ? "دقة التسجيل الحي" : "Sample Resolution"}</span>
                </div>
                <div className="cyber-telemetry-card">
                  <span className="cyber-telemetry-val">18+</span>
                  <span className="cyber-telemetry-lbl">{isAr ? "أعمال م استريو وماستر" : "Mastered Tracks"}</span>
                </div>
                <div className="cyber-telemetry-card">
                  <span className="cyber-telemetry-val">OSAKA</span>
                  <span className="cyber-telemetry-lbl">{isAr ? "تمثيل اليمن الدولي" : "World Expo '25"}</span>
                </div>
              </div>
            </div>

            {/* Holographic Portrait with EQ Visualizer */}
            <div className="cyber-hero-media">
              <div className="cyber-hologram-frame">
                <div className="cyber-hologram-ring" />
                <div className="cyber-portrait-inner">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 460px"
                    className="cyber-portrait-img"
                  />
                  <div className="cyber-scanline-overlay" />
                </div>

                {/* Animated Frequency Bars */}
                <div className="cyber-eq-bars">
                  <span className="eq-bar eq-bar-1" />
                  <span className="eq-bar eq-bar-2" />
                  <span className="eq-bar eq-bar-3" />
                  <span className="eq-bar eq-bar-4" />
                  <span className="eq-bar eq-bar-5" />
                  <span className="eq-bar eq-bar-6" />
                  <span className="eq-bar eq-bar-7" />
                  <span className="eq-bar eq-bar-8" />
                </div>

                <div className="cyber-portrait-tag">
                  <span className="cyber-live-indicator" />
                  <span>AHMED SAIF // VOCALIST & PRODUCER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Audio Spectrum Works Grid */}
      <section className="cyber-section">
        <div className="cyber-container">
          <div className="cyber-section-header">
            <div className="cyber-terminal-badge">
              <span>{isAr ? "المكتبة الصوتية الرقمية" : "AUDIO REPOSITORY"}</span>
            </div>
            <h2 className="cyber-title">{isAr ? "أحدث الإصدارات والتترات" : "Selected Telemetry Releases"}</h2>
            <p className="cyber-subtitle">
              {isAr
                ? "مقطوعات تم إنتاجها بمواصفات البث العالمية، تجمع بين دفء العود وقوة التوزيع العصري."
                : "Acoustic pieces produced at broadcast mastering standards, pairing warm acoustic strings with modern dynamic depth."}
            </p>
          </div>

          <div className="cyber-works-grid">
            {featuredWorks.map((work) => (
              <div key={work.slug} className="cyber-work-card">
                <div className="cyber-work-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="cyber-work-img"
                  />
                  <div className="cyber-work-tint" />
                  <div className="cyber-bitdepth-tag">24-BIT MASTER</div>
                </div>

                <div className="cyber-work-content">
                  <div className="cyber-work-header">
                    <span className="cyber-category-tag">
                      {isAr ? work.category : work.categoryEn}
                    </span>
                    <span className="cyber-year-tag">{work.year}</span>
                  </div>

                  <h3 className="cyber-work-title">
                    {isAr ? work.arTitle : work.enTitle}
                  </h3>

                  <p className="cyber-work-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="cyber-work-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="cyber-work-btn"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{isAr ? "تشغيل المسار والتفاصيل" : "Stream Telemetry"}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cyber-center-action">
            <Link href={getLocalePath(locale, "works")} className="cyber-btn-glass">
              <span>{isAr ? "عرض سجل الإصدارات بالكامل (18+ عمل)" : "Open Complete Sound Archive"}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Studio Telemetry Architecture */}
      <section className="cyber-section cyber-section-alt">
        <div className="cyber-container">
          <div className="cyber-spec-board">
            <div className="cyber-board-header">
              <Cpu size={20} className="cyber-cyan-icon" />
              <h3>{isAr ? "مواصفات استوديو الإنتاج الفني (A7MD)" : "A7MD Studio Engineering Architecture"}</h3>
            </div>
            <div className="cyber-board-grid">
              <div className="cyber-board-col">
                <strong>{isAr ? "الهندسة الصوتية" : "Acoustic Engineering"}</strong>
                <p>
                  {isAr
                    ? "تسجيل صوتي فائق النقاء بدقة 96kHz، معالجة ديناميكية بمعدات أنالوج عالمية، وتقنيات مكس وماسترينغ متقدمة."
                    : "High-fidelity capture at 96kHz, analog channel strip processing, and spatial audio mastering."}
                </p>
              </div>
              <div className="cyber-board-col">
                <strong>{isAr ? "الرؤية التلحينية" : "Composition Method"}</strong>
                <p>
                  {isAr
                    ? "تطوير مقامات التراث اليمني (صنعاني، حضرمي، لحجي) ودمجها بإيقاعات عالمية تناسب منصات البث الحديثة."
                    : "Modern synthesis of classic Yemeni modes (Sana'ani, Hadhrami, Lahji) for international streaming."}
                </p>
              </div>
              <div className="cyber-board-col">
                <strong>{isAr ? "التراخيص والتوزيع" : "Licensing & Dispatch"}</strong>
                <p>
                  {isAr
                    ? "حقوق ملكية وتوثيق رقمي دولي لكل الألحان، وتوفير التراكات بتوزيعاتها وتراكات السيقونس للدراما والإعلانات."
                    : "Universal digital ISRC licensing, multi-track stems dispatch for television and film synchronization."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Terminal Booking Protocol */}
      <section className="cyber-section">
        <div className="cyber-container">
          <div className="cyber-cta-terminal">
            <div className="cyber-terminal-dots">
              <span className="dot-red" />
              <span className="dot-yellow" />
              <span className="dot-green" />
              <span className="terminal-title">STATION // PRODUCTION_BOOKING</span>
            </div>
            <div className="cyber-terminal-body">
              <h2>{isAr ? "جاهز لإطلاق مشروعك الموسيقي القادم؟" : "Ready to Engineer Your Next Soundscape?"}</h2>
              <p>
                {isAr
                  ? "تفضل بالتواصل المباشر لمناقشة أفكار التترات، إنتاج الأغاني المنفردة، أو العروض الحية في الفعاليات والمهرجانات."
                  : "Direct dispatch is available for original soundtrack commissions, singles production, and international stage recitals."}
              </p>
              <div className="cyber-terminal-actions">
                <Link href={getLocalePath(locale, "contact")} className="cyber-btn-cyan">
                  <span>{isAr ? "فتح خط اتصال مباشر" : "Connect Terminal"}</span>
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
