import { ArrowLeft, ArrowRight, Mail, Send, Sliders, MessageCircle } from "lucide-react";
import { content, socialLinks } from "../data";
import SiteChrome, { SocialIcon, emailHref } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="contact">
      <div className="console-page-header">
        <div className="console-container">
          <div className="console-strip-badge">
            <Sliders size={14} className="console-green-icon" />
            <span>{isAr ? "مكتب التوجيه والتكليف الفني // استوديو A7MD" : "PATCHBAY ROUTING & COMMISSIONS // CONSOLE"}</span>
          </div>
          <h1 className="console-page-title">
            {isAr ? "تواصل للتعاون الفني والإنتاج" : "Artistic Commissioning & Inquiries"}
          </h1>
          <p className="console-page-desc">
            {isAr
              ? "لطلبات تلحين تترات الدراما، إنتاج الأغاني الفردية، وحجز الحفلات والمهرجانات الموسيقية."
              : "Direct channels for television drama scoring commissions, bespoke musical productions, concert appearances, and press inquiries."}
          </p>
        </div>
      </div>

      <section className="console-section">
        <div className="console-container">
          <div className="console-contact-grid">
            {/* Main Patchbay Box */}
            <div className="console-patch-box">
              <div className="console-patch-top">
                <span className="console-led-green" />
                <span className="console-patch-label">SIGNAL BUS // DIRECT DISPATCH</span>
              </div>

              <div className="console-patch-body">
                <h3 className="console-patch-heading">
                  {isAr ? "المكتب الفني والمراسلات" : "Direct Production Dispatch"}
                </h3>
                <p className="console-patch-desc">
                  {isAr
                    ? "أرسل تفاصيل مشروعك وسيقوم فريق الاستوديو بالرد عليك في غضون 48 ساعة."
                    : "Transmit your project brief for immediate scheduling, stems delivery specs, or performance fee schedules."}
                </p>

                <div className="console-channel-row">
                  <Mail size={16} className="console-green-icon" />
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="console-channel-link"
                  >
                    {t.contactPage.primaryEmail}
                  </a>
                </div>

                <div className="console-channel-row">
                  <MessageCircle size={16} className="console-green-icon" />
                  <a
                    href="https://wa.me/967770000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="console-channel-link"
                  >
                    {isAr ? "محادثة مباشرة عبر واتساب الاستوديو" : "Direct WhatsApp Office Channel"}
                  </a>
                </div>

                <div className="console-patch-cta">
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="console-btn-green"
                  >
                    <span>{isAr ? "إرسال رسالة رسمية" : "Dispatch Inquiry"}</span>
                    <Send size={15} />
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="console-social-section">
                <h4>{isAr ? "المنصات الرقمية والتواصل" : "Digital Channels & Streaming"}</h4>
                <div className="console-social-grid">
                  {socialLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="console-social-chip"
                    >
                      <SocialIcon name={link.icon} size={15} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Studio Guarantee Box */}
            <div className="console-guarantee-box">
              <span className="console-pretitle">{isAr ? "معايير الاستوديو" : "CONSOLE SLA"}</span>
              <h3 className="console-guarantee-title">
                {isAr ? "معايير الإنتاج في استوديو A7MD" : "A7MD Production Standards"}
              </h3>
              <p className="console-guarantee-body">
                {isAr
                  ? "يتم التعامل مع كافة المشاريع بسرية واحترافية، مع توفير تراكات التوزيع المنفصلة وحقوق الملكية الفكرية."
                  : "All commissioned works receive bespoke artistic treatment, full acoustic orchestration, live session musicianship, and master delivery in broadcast-ready formats."}
              </p>

              <div className="console-guarantee-metrics">
                <div className="console-g-metric">
                  <strong>48h</strong>
                  <small>{isAr ? "متوسط سرعة الرد" : "Response Time"}</small>
                </div>
                <div className="console-g-metric">
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
