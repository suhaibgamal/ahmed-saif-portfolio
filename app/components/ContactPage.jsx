import { ArrowLeft, ArrowRight, Mail, Send, Compass, MessageCircle } from "lucide-react";
import { content, socialLinks } from "../data";
import SiteChrome, { SocialIcon, emailHref } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="contact">
      <div className="atelier-page-header">
        <div className="atelier-container">
          <div className="atelier-index-badge">
            <Compass size={14} className="atelier-sage-icon" />
            <span>{isAr ? "بروتوكول التكليف والاتصال // مكتب الأتيليه" : "COMMISSION PROTOCOL // DISPATCH DESK"}</span>
          </div>
          <h1 className="atelier-page-title">
            {isAr ? "طلب مشروع فني أو حجز حفل" : "Artistic Inquiries & Production Briefs"}
          </h1>
          <p className="atelier-page-desc">
            {isAr
              ? "متاح للتعاون الفني في تلحين التترات الدرامية، إنتاج الأغاني الفردية، وحفلات المهرجانات والمناسبات الكبرى."
              : "Open for scoring commissions, festival master recitals, and independent vocal track production."}
          </p>
        </div>
      </div>

      <section className="atelier-section">
        <div className="atelier-container">
          <div className="atelier-contact-grid">
            {/* Main Dispatch Card */}
            <div className="atelier-dispatch-card-main">
              <div className="atelier-card-topbar">
                <span className="atelier-mono-ref">COMMISSION_DISPATCH // A7MD</span>
                <span className="atelier-mono-status">STATUS: OPEN</span>
              </div>

              <div className="atelier-card-body">
                <h3 className="atelier-dispatch-heading">
                  {isAr ? "المكتب الفني والتواصل المباشر" : "Direct Liaison Office"}
                </h3>
                <p className="atelier-dispatch-sub">
                  {isAr
                    ? "أرسل تفاصيل طلبك وموجز العمل، وسيقوم فريق الاستوديو بالتواصل معك لمناقشة كافة الجوانب الفنية والإنتاجية."
                    : "Transmit your project outline for direct review regarding scoring schedules, orchestration scope, and licensing."}
                </p>

                <div className="atelier-channel-row">
                  <Mail size={16} className="atelier-sage-icon" />
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="atelier-channel-link"
                  >
                    {t.contactPage.primaryEmail}
                  </a>
                </div>

                <div className="atelier-channel-row">
                  <MessageCircle size={16} className="atelier-sage-icon" />
                  <a
                    href="https://wa.me/967770000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="atelier-channel-link"
                  >
                    {isAr ? "محادثة مباشرة عبر واتساب الاستوديو" : "Direct WhatsApp Production Line"}
                  </a>
                </div>

                <div className="atelier-card-actions">
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="atelier-btn-sage"
                  >
                    <span>{isAr ? "إرسال خطاب التكليف الرسمي" : "Dispatch Commission"}</span>
                    <Send size={15} />
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="atelier-social-block">
                <h4>{isAr ? "الشبكات الرقمية والمنصات" : "Digital Channels & Streaming"}</h4>
                <div className="atelier-social-grid">
                  {socialLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="atelier-social-chip"
                    >
                      <SocialIcon name={link.icon} size={15} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Atelier Quality Specs */}
            <div className="atelier-quality-box">
              <span className="atelier-ref-tag">{isAr ? "معايير الأتيليه" : "Production Standards"}</span>
              <h3 className="atelier-quality-title">
                {isAr ? "ضوابط التنفيذ في استوديو A7MD" : "A7MD Atelier Execution Guarantees"}
              </h3>
              <p className="atelier-quality-desc">
                {isAr
                  ? "تلتزم كافة المشاريع الموسيقية بمعايير هندسية صارمة، مع تسليم كافة الملفات المفتوحة (Stems) وحقوق التوثيق الرسمية."
                  : "All commissioned master recordings adhere to precision acoustic modeling, delivering full multi-track stems and complete ISRC copyright documentation."}
              </p>

              <div className="atelier-quality-metrics">
                <div className="atelier-q-metric">
                  <strong>48h</strong>
                  <small>{isAr ? "سرعة الاستجابة" : "Turnaround"}</small>
                </div>
                <div className="atelier-q-metric">
                  <strong>100%</strong>
                  <small>{isAr ? "حقوق وتوثيق فني" : "Master Rights"}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
