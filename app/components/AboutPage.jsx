import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Disc, Mic2, Music, Sparkles } from "lucide-react";
import { content, getLocalePath } from "../data";
import SiteChrome from "./SiteChrome";

export default function AboutPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="about">
      <div className="tape-page-header">
        <div className="tape-container">
          <div className="tape-session-badge">
            <Mic2 size={14} className="tape-amber-icon" />
            <span>{isAr ? "دفتر الجلسات الفنية // سيرة مسجلة" : "ACOUSTIC LOGBOOK // A7MD"}</span>
          </div>
          <h1 className="tape-page-title">
            {isAr ? "عن أحمد سيف ورحلته مع النغم" : "About Ahmed Saif & Handcrafted Sound"}
          </h1>
          <p className="tape-page-desc">
            {isAr
              ? "حكاية فنان يعشق بساطة اللحن وصدق الكلمة، يعزف العود بروح التراث اليمني ويوزع بأحدث تقنيات الأنالوج."
              : "The acoustic journey of an artist passionate about honest songcraft, traditional Yemeni maqam, and organic reel-to-reel warmth."}
          </p>
        </div>
      </div>

      <section className="tape-section">
        <div className="tape-container">
          <div className="tape-about-grid">
            {/* Polaroid Sidebar */}
            <div className="tape-about-sidebar">
              <div className="tape-polaroid-card">
                <div className="tape-strip-top">ARCHIVE_PORTRAIT_01</div>
                <div className="tape-polaroid-photo">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="tape-polaroid-img"
                  />
                  <div className="tape-warm-vignette" />
                </div>
                <div className="tape-polaroid-caption">
                  <span className="tape-handwritten">
                    {isAr ? "أحمد سيف في الاستوديو" : "Ahmed Saif Studio Session"}
                  </span>
                </div>
              </div>

              <div className="tape-gear-manifest">
                <div className="tape-manifest-row">
                  <span>{isAr ? "غرفة التحكم" : "Control Room"}</span>
                  <strong>A7MD Studio</strong>
                </div>
                <div className="tape-manifest-row">
                  <span>{isAr ? "سرعة التسجيل" : "Tape Speed"}</span>
                  <strong>15 IPS Master Tape</strong>
                </div>
                <div className="tape-manifest-row">
                  <span>{isAr ? "الآلة الأساسية" : "Core Acoustic"}</span>
                  <strong>{isAr ? "العود اليمني والصنعاني" : "Custom Yemeni Oud"}</strong>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="tape-about-content">
              <h2 className="tape-amber-title">
                {isAr ? "أنا والموسيقى.. حب النغمة الصادقة ودفء الجلسة" : "Raw Soul: Honoring the Living Room Session"}
              </h2>

              <p className="tape-lead">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أحب الأغنية البسيطة الصادقة اللي تدخل القلب وتعلّق في البال بدون تكلف. نشأت بين جلسات الطرب الصنعاني والحضرمي، حيث للكلمة وزن وللنغمة هيبة لا تحتاج إلى بهرجة زائفة."
                  : "Welcome.. I am Ahmed Saif. Raised amidst Yemen's living acoustic traditions, I compose songs that preserve the unhurried intimacy of late-night acoustic gatherings."}
              </p>

              <p className="tape-body">
                {isAr
                  ? "أشتغل من الاستوديو حقي (A7MD Studio) على كل تفصيلة: من أول دندنة لحن لحد ما يكتمل التوزيع والماستر بأعلى جودة. أسعى دائماً لأن يكون التسجيل حياً ومليئاً بالدفء العضوي، بحيث تشعر وكأن الآلات تُعزف أمامك مباشرة في الغرفة."
                  : "From A7MD Studio, I shape each piece by hand: from raw oud chords to lush organic instrumentation and tube-driven master delivery."}
              </p>

              {/* Milestones Log */}
              <div className="tape-milestones">
                <h3 className="tape-milestones-title">
                  {isAr ? "سجل المحطات الفنية" : "Studio Tape Chronicles"}
                </h3>

                <div className="tape-milestone-item">
                  <span className="tape-milestone-tag">2026</span>
                  <div className="tape-milestone-text">
                    <h4>{isAr ? "تتر مسلسل (الضايعة) - يا مدوّر الحاجة" : "Al-Dhayeh Theme - Ya Mdawer Al-Hajah"}</h4>
                    <p>
                      {isAr
                        ? "تلحين وأداء التتر الرسمي للعمل التلفزيوني، جامعا بين النبض الشعبي والتوزيع الموسيقي الحي."
                        : "Composed and sang the original television soundtrack, blending folk storytelling with rich live acoustic orchestration."}
                    </p>
                  </div>
                </div>

                <div className="tape-milestone-item">
                  <span className="tape-milestone-tag">2025</span>
                  <div className="tape-milestone-text">
                    <h4>{isAr ? "تمثيل اليمن في إكسبو أوساكا - اليابان" : "Expo 2025 Osaka (Japan) Performances"}</h4>
                    <p>
                      {isAr
                        ? "إحياء حفلات موسيقية حية في اليابان لتقديم المقامات اليمنية الأصيلة والعود أمام جمهور عالمي متعدد الثقافات."
                        : "Showcased Yemeni acoustic music on international stages at the world expo in Osaka."}
                    </p>
                  </div>
                </div>

                <div className="tape-milestone-item">
                  <span className="tape-milestone-tag">2024</span>
                  <div className="tape-milestone-text">
                    <h4>{isAr ? "سلسلة الأغاني الفردية (شلني إب، محد داري، فقدتش)" : "Studio Singles (Shallani Ibb, Mahad Dari, Faqadtish)"}</h4>
                    <p>
                      {isAr
                        ? "أعمال غنائية حظيت بانتشار جماهيري واسع وتفاعلت معها ملايين الأسماع عبر مختلف المنصات."
                        : "Released acclaimed studio singles earning wide praise and streaming milestones across the Arab region."}
                    </p>
                  </div>
                </div>

                <div className="tape-milestone-item">
                  <span className="tape-milestone-tag">TAPE</span>
                  <div className="tape-milestone-text">
                    <h4>{isAr ? "تأسيس استوديو A7MD" : "A7MD Studio Control Room Built"}</h4>
                    <p>
                      {isAr
                        ? "إنشاء الاستوديو الخاص المجهز بوحدات أنالوج وميكروفونات تسجيل احترافية لضمان أعلى معايير الجودة الموسيقية."
                        : "Engineered dedicated studio acoustics tailored for acoustic strings, live vocals, and analog tape saturation."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="tape-about-actions">
                <Link href={getLocalePath(locale, "contact")} className="tape-btn-amber">
                  <span>{isAr ? "تواصل لحجز موعد" : "Contact Studio Office"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link href={getLocalePath(locale, "works")} className="tape-btn-wood">
                  <span>{isAr ? "استمع لجميع التسجيلات" : "Explore All Master Tracks"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
