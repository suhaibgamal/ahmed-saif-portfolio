import { ArrowLeft, ArrowRight, Mail, Send, Square, MessageCircle } from "lucide-react";
import { content, socialLinks } from "../data";
import SiteChrome, { SocialIcon, emailHref } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="contact">
      <div className="gallery-page-header">
        <div className="gallery-container">
          <div className="gallery-curatorial-tag">
            <span className="gallery-tag-sq" />
            <span>{isAr ? "مكتب التنسيق الفني والتكليف // المراسلات" : "CURATORIAL INQUIRY // ARTISTIC LIAISON"}</span>
          </div>
          <h1 className="gallery-page-title">
            {isAr ? "طلب عمل فني أو تنسيق حفل" : "Artistic Commission & Performance Liaison"}
          </h1>
          <p className="gallery-page-desc">
            {isAr
              ? "مكتب التنسيق متاح للجهات الثقافية، شركات الإنتاج الدرامي، ومنظمي المهرجانات لبحث سبل التعاون الفني."
              : "Open for institutional commissioning, television drama scoring briefs, and international festival curation."}
          </p>
        </div>
      </div>

      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-contact-grid">
            {/* Main Curatorial Card */}
            <div className="gallery-inquiry-card">
              <div className="gallery-inquiry-top">
                <span className="gallery-inquiry-tag">DIRECT INQUIRY // A7MD</span>
                <span className="gallery-inquiry-status">STATUS: ACCEPTING COMMISSIONS</span>
              </div>

              <div className="gallery-inquiry-body">
                <h3 className="gallery-inquiry-heading">
                  {isAr ? "المكتب الفني والاتصال المباشر" : "Artistic Liaison Office"}
                </h3>
                <p className="gallery-inquiry-desc">
                  {isAr
                    ? "أرسل تفاصيل مشروعك أو فكرتك الموسيقية، وسيقوم فريق العمل بدراسة الطلب والرد بكافة التفاصيل الفنية والجدول الزمني."
                    : "Transmit your project prospectus for review regarding soundtrack scoring scope, live performance arrangements, or licensing terms."}
                </p>

                <div className="gallery-inquiry-row">
                  <Mail size={16} className="gallery-icon-white" />
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="gallery-inquiry-link"
                  >
                    {t.contactPage.primaryEmail}
                  </a>
                </div>

                <div className="gallery-inquiry-row">
                  <MessageCircle size={16} className="gallery-icon-white" />
                  <a
                    href="https://wa.me/967770000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gallery-inquiry-link"
                  >
                    {isAr ? "محادثة فورية عبر واتساب المكتب" : "Direct WhatsApp Office Channel"}
                  </a>
                </div>

                <div className="gallery-inquiry-cta">
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="gallery-btn-white"
                  >
                    <span>{isAr ? "إرسال خطاب التكليف الفني" : "Dispatch Formal Commission"}</span>
                    <Send size={15} />
                  </a>
                </div>
              </div>

              {/* Digital Channels */}
              <div className="gallery-social-section">
                <h4>{isAr ? "المنصات الرسمية وشبكات البث" : "Official Digital Catalog & Platforms"}</h4>
                <div className="gallery-social-grid">
                  {socialLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gallery-social-pill"
                    >
                      <SocialIcon name={link.icon} size={15} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Curatorial Protocol Standards */}
            <div className="gallery-protocol-box">
              <span className="gallery-protocol-tag">{isAr ? "ميثاق الجودة" : "ARCHIVAL PROTOCOL"}</span>
              <h3 className="gallery-protocol-title">
                {isAr ? "معايير الإنتاج في استوديو A7MD" : "A7MD Curatorial Production Standards"}
              </h3>
              <p className="gallery-protocol-body">
                {isAr
                  ? "يخضع كل عمل فني لمعايير إنتاجية صارمة، مع توثيق كافة الحقوق الفكرية وتسليم ملفات التوزيع الموسيقي المفتوحة (Stems) للجهات المتعاقدة."
                  : "Every musical piece adheres to meticulous scoring standards, delivering broadcast-ready stems, sheet music arrangements, and global copyright documentation."}
              </p>

              <div className="gallery-protocol-stats">
                <div className="gallery-p-stat">
                  <strong>48h</strong>
                  <small>{isAr ? "الرد على الاستفسارات" : "Response Time"}</small>
                </div>
                <div className="gallery-p-stat">
                  <strong>100%</strong>
                  <small>{isAr ? "توثيق ملكية فكرية" : "ISRC Documented"}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
