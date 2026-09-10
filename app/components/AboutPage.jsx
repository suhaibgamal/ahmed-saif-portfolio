import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass, Layers, Music, Grid } from "lucide-react";
import { content, getLocalePath } from "../data";
import SiteChrome from "./SiteChrome";

export default function AboutPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="about">
      <div className="atelier-page-header">
        <div className="atelier-container">
          <div className="atelier-index-badge">
            <Compass size={14} className="atelier-sage-icon" />
            <span>{isAr ? "وثيقة السيرة والرؤية الفنية" : "ARCHITECTURAL DOSSIER // BIOGRAPHY"}</span>
          </div>
          <h1 className="atelier-page-title">
            {isAr ? "عن أحمد سيف وفلسفة الأتيليه" : "About Ahmed Saif & The Atelier Blueprint"}
          </h1>
          <p className="atelier-page-desc">
            {isAr
              ? "استعراض منهجي لمسيرة فنان يبني الألحان على أسس مقامية راسخة ويطورها بوعي موسيقي معاصر."
              : "Methodological overview of an artist crafting enduring song structures grounded in Yemeni modal mastery."}
          </p>
        </div>
      </div>

      <section className="atelier-section">
        <div className="atelier-container">
          <div className="atelier-about-grid">
            {/* Sidebar with Blueprint Frame */}
            <div className="atelier-about-sidebar">
              <div className="atelier-blueprint-frame">
                <div className="atelier-corner-marker top-left">+</div>
                <div className="atelier-corner-marker top-right">+</div>
                <div className="atelier-corner-marker bottom-left">+</div>
                <div className="atelier-corner-marker bottom-right">+</div>

                <div className="atelier-portrait-inner">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt="Ahmed Saif - الفنان أحمد سيف"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="atelier-portrait-img"
                  />
                  <div className="atelier-grid-overlay" />
                </div>
              </div>

              <div className="atelier-dossier-specs">
                <div className="atelier-dossier-row">
                  <span>{isAr ? "الأتيليه الصوتي" : "Acoustic Atelier"}</span>
                  <strong>A7MD Studio</strong>
                </div>
                <div className="atelier-dossier-row">
                  <span>{isAr ? "مجالات الإتقان" : "Disciplines"}</span>
                  <strong>{isAr ? "غناء • تلحين • توزيع وهندسة" : "Vocals • Scoring • Audio Design"}</strong>
                </div>
                <div className="atelier-dossier-row">
                  <span>{isAr ? "المرتكز اللحني" : "Modal Anchor"}</span>
                  <strong>{isAr ? "المقامات اليمنية والعود" : "Yemeni Maqam & Acoustic Oud"}</strong>
                </div>
              </div>
            </div>

            {/* Main Narrative */}
            <div className="atelier-about-content">
              <h2 className="atelier-sage-heading">
                {isAr ? "عمارة النغم: قصة فنان يؤمن بصدق اللحن" : "Architectural Integrity: The Geometry of Yemeni Song"}
              </h2>

              <p className="atelier-lead">
                {isAr
                  ? "أهلاً بكم.. أنا أحمد سيف. مغنٍ وملحّن يمني، أحب الأغنية البسيطة الصادقة اللي تدخل القلب وتعلّق في البال بدون تكلف. نشأت محاطاً بتراث غنائي غني وعريق، علّمني أن اللحن القوي يبدأ من جملة موسيقية متقنة ومدروسة كبناء معماري متين."
                  : "Welcome.. I am Ahmed Saif. In my composition process, every musical sentence is treated with architectural rigor: balancing authentic cultural identity with melodic accessibility."}
              </p>

              <p className="atelier-body">
                {isAr
                  ? "أشتغل من الاستوديو حقي (A7MD Studio) على كل تفصيلة في المشروع الفني: من أول دندنة لحن وجلسة عود، مروراً بكتابة النوتات والتوزيع، وحتى الماستر النهائي بأعلى جودة تلائم شاشات التلفزيون ومنصات البث العالمية."
                  : "From A7MD Studio, I direct every design phase: from acoustic oud themes to multi-instrumental voicing, string sections, and precision mastering."}
              </p>

              {/* Structural Timeline */}
              <div className="atelier-timeline">
                <h3 className="atelier-timeline-title">
                  {isAr ? "سجل المراحل والمحطات" : "Chronological Milestones"}
                </h3>

                <div className="atelier-timeline-node">
                  <div className="atelier-node-year">2026</div>
                  <div className="atelier-node-info">
                    <h4>{isAr ? "تتر مسلسل (الضايعة) - يا مدوّر الحاجة" : "Al-Dhayeh Theme - Ya Mdawer Al-Hajah"}</h4>
                    <p>
                      {isAr
                        ? "تلحين وغناء شارة المسلسل التلفزيوني الرسمي، حاصداً إشادات واسعة لجمعه بين التوزيع الحي وصدق الكلمة."
                        : "Composed and sang the original television soundtrack, setting modern broadcast production standards."}
                    </p>
                  </div>
                </div>

                <div className="atelier-timeline-node">
                  <div className="atelier-node-year">2025</div>
                  <div className="atelier-node-info">
                    <h4>{isAr ? "تمثيل اليمن في إكسبو أوساكا - اليابان" : "Osaka World Expo '25 Performance"}</h4>
                    <p>
                      {isAr
                        ? "تمثيل الهوية الموسيقية اليمنية في المحفل العالمي في أوساكا، وتقديم عروض حية نالت استحسان الجمهور الدولي."
                        : "Represented Yemeni music culture on world stages at Expo 2025 Osaka with live acoustic performances."}
                    </p>
                  </div>
                </div>

                <div className="atelier-timeline-node">
                  <div className="atelier-node-year">2024</div>
                  <div className="atelier-node-info">
                    <h4>{isAr ? "سلسلة الأغاني الفردية (شلني إب، محد داري، فقدتش)" : "Studio Master Singles"}</h4>
                    <p>
                      {isAr
                        ? "إطلاق مجموعة من الأعمال الغنائية المستقلة التي حققت انتشاراً جماهيرياً كبيراً وملايين الاستماعات."
                        : "Released acclaimed studio singles capturing millions of listeners across streaming networks."}
                    </p>
                  </div>
                </div>

                <div className="atelier-timeline-node">
                  <div className="atelier-node-year">BASE</div>
                  <div className="atelier-node-info">
                    <h4>{isAr ? "تأسيس معمل A7MD Studio" : "A7MD Studio Foundation"}</h4>
                    <p>
                      {isAr
                        ? "تأسيس الاستوديو المتخصص للإنتاج والتسجيل الحي، ليكون منصة متكاملة لصناعة الموسيقى المعاصرة."
                        : "Constructed dedicated acoustic control rooms optimized for pristine vocal tracking and mastering."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="atelier-about-actions">
                <Link href={getLocalePath(locale, "contact")} className="atelier-btn-sage">
                  <span>{isAr ? "بدء محادثة للتعاون الفني" : "Initiate Collaboration"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link href={getLocalePath(locale, "works")} className="atelier-btn-outline">
                  <span>{isAr ? "استعراض سجل الأعمال" : "Browse Works Ledger"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
