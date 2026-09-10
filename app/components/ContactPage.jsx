import { ArrowLeft, ArrowRight, Mail, Send, LayoutGrid, MessageCircle } from "lucide-react";
import { content, socialLinks } from "../data";
import SiteChrome, { SocialIcon, emailHref } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="contact">
      <div className="bento-page-header">
        <div className="bento-container">
          <div className="bento-badge">
            <LayoutGrid size={14} className="bento-indigo-icon" />
            <span>{isAr ? "مكتب التكليف الفني والاتصال // A7MD" : "COMMISSION DESK // BENTO PROTOCOL"}</span>
          </div>
          <h1 className="bento-page-title">
            {isAr ? "تواصل للتعاون الفني والإنتاج" : "Artistic Commissioning & Inquiries"}
          </h1>
          <p className="bento-page-desc">
            {isAr
              ? "متاح للتعاون الفني في تلحين التترات الدرامية، إنتاج الأغاني الفردية، وحفلات المهرجانات والمناسبات الكبرى."
              : "Direct channels for television drama scoring commissions, bespoke musical productions, concert appearances, and press inquiries."}
          </p>
        </div>
      </div>

      <section className="bento-section">
        <div className="bento-container">
          <div className="bento-contact-grid">
            {/* Main Bento Contact Card */}
            <div className="bento-contact-card-main">
              <div className="bento-card-header">
                <span className="bento-dot-purple" />
                <span className="bento-card-tag">DIRECT CHANNEL // A7MD STUDIO</span>
              </div>

              <div className="bento-card-content">
                <h3 className="bento-contact-title">
                  {isAr ? "المكتب الفني والمراسلات" : "Direct Production Dispatch"}
                </h3>
                <p className="bento-contact-desc">
                  {isAr
                    ? "أرسل تفاصيل مشروعك وسيقوم فريق الاستوديو بالرد عليك في غضون 48 ساعة."
                    : "Transmit your project brief for immediate scheduling, stems delivery specs, or performance fee schedules."}
                </p>

                <div className="bento-contact-row">
                  <Mail size={16} className="bento-indigo-icon" />
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="bento-contact-link"
                  >
                    {t.contactPage.primaryEmail}
                  </a>
                </div>

                <div className="bento-contact-row">
                  <MessageCircle size={16} className="bento-indigo-icon" />
                  <a
                    href="https://wa.me/967770000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-contact-link"
                  >
                    {isAr ? "محادثة مباشرة عبر واتساب الاستوديو" : "Direct WhatsApp Office Channel"}
                  </a>
                </div>

                <div className="bento-contact-cta">
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="bento-btn-primary"
                  >
                    <span>{isAr ? "إرسال رسالة رسمية" : "Dispatch Inquiry"}</span>
                    <Send size={15} />
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="bento-social-section">
                <h4>{isAr ? "المنصات الرقمية والتواصل" : "Digital Channels & Streaming"}</h4>
                <div className="bento-social-grid">
                  {socialLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bento-social-tile"
                    >
                      <SocialIcon name={link.icon} size={15} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Studio Guarantee Box */}
            <div className="bento-guarantee-box">
              <span className="bento-pretitle">{isAr ? "ضمانات الاستوديو" : "STUDIO SLA"}</span>
              <h3 className="bento-guarantee-title">
                {isAr ? "معايير الإنتاج في استوديو A7MD" : "A7MD Production Standards"}
              </h3>
              <p className="bento-guarantee-body">
                {isAr
                  ? "يتم التعامل مع كافة المشاريع بسرية واحترافية، مع توفير تراكات التوزيع المنفصلة وحقوق الملكية الفكرية."
                  : "All commissioned works receive bespoke artistic treatment, full acoustic orchestration, live session musicianship, and master delivery in broadcast-ready formats."}
              </p>

              <div className="bento-guarantee-metrics">
                <div className="bento-g-metric">
                  <strong>48h</strong>
                  <small>{isAr ? "متوسط سرعة الرد" : "Response Time"}</small>
                </div>
                <div className="bento-g-metric">
                  <strong>100%</strong>
                  <small>{isAr ? "توثيق ملكية وحقوق" : "Full Rights"}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
