import { ArrowLeft, ArrowRight, Mail, Phone, Send, Sparkles, MessageCircle } from "lucide-react";
import { content, socialLinks } from "../data";
import SiteChrome, { SocialIcon, emailHref } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="contact">
      <div className="sultani-page-header">
        <div className="sultani-container">
          <div className="sultani-hero-badge">
            <Sparkles size={14} className="sultani-gold-icon" />
            <span>{isAr ? "المكتب الفني والاتصال" : "Liaison & Artistic Protocol"}</span>
          </div>
          <h1 className="sultani-page-title">
            {isAr ? "تواصل للتعاون الفني والإنتاج" : "Artistic Commissioning & Inquiries"}
          </h1>
          <p className="sultani-page-desc">
            {isAr
              ? "سواء كان لديك مشروع تلحين درامي، إنتاج موسيقي خاص، أو رغبة في حجز حفل ومهرجان، يسعدني التواصل ومناقشة تفاصيل العمل."
              : "For television scoring commissions, bespoke musical productions, concert appearances, or press inquiries, direct channels are open below."}
          </p>
        </div>
      </div>

      <section className="sultani-section">
        <div className="sultani-container">
          <div className="sultani-contact-grid">
            {/* Direct Channel Cards */}
            <div className="sultani-contact-cards">
              <div className="sultani-concierge-card">
                <div className="sultani-concierge-seal">✦</div>
                <h3 className="sultani-concierge-title">
                  {isAr ? "المكتب والمراسلات المباشرة" : "Executive Office Dispatch"}
                </h3>
                <p className="sultani-concierge-desc">
                  {isAr
                    ? "لطلبات الإنتاج، تلحين التترات، وتفاصيل الحفلات الموسيقية الرسمية."
                    : "For official scoring inquiries, agency commissions, and concert engagements."}
                </p>

                <div className="sultani-concierge-row">
                  <Mail size={16} className="sultani-gold-icon" />
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="sultani-concierge-link"
                  >
                    {t.contactPage.primaryEmail}
                  </a>
                </div>

                <div className="sultani-concierge-row">
                  <MessageCircle size={16} className="sultani-gold-icon" />
                  <a
                    href="https://wa.me/967770000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sultani-concierge-link"
                  >
                    {isAr ? "محادثة واتساب سريعة للمكتب" : "Direct WhatsApp Liaison"}
                  </a>
                </div>

                <div className="sultani-concierge-footer">
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="sultani-btn-primary"
                  >
                    <span>{isAr ? "إرسال رسالة رسمية" : "Dispatch Email Inquiry"}</span>
                    <Send size={14} />
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="sultani-social-panel">
                <h4 className="sultani-social-heading">
                  {isAr ? "المنصات الرقمية والتواصل الاجتماعي" : "Digital Channels & Streaming"}
                </h4>
                <div className="sultani-social-grid">
                  {socialLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sultani-social-card"
                    >
                      <SocialIcon name={link.icon} size={18} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Studio Note / Representation Card */}
            <div className="sultani-representation-box">
              <span className="sultani-pretitle">{isAr ? "ملاحظة إنتاجية" : "Production Protocol"}</span>
              <h3 className="sultani-rep-title">
                {isAr ? "استوديو A7MD للإنتاج الفني" : "A7MD Studio Production Standards"}
              </h3>
              <p className="sultani-rep-body">
                {isAr
                  ? "يتم التعامل مع كافة المشاريع الفنية بسرية واحترافية عالية، مع ضمان أعلى درجات الجودة في كتابة النوتات الموسيقية، التسجيل الحي للآلات، والهندسة الصوتية."
                  : "All commissioned works receive bespoke artistic treatment, full acoustic orchestration, live session musicianship, and master delivery in broadcast-ready formats."}
              </p>

              <div className="sultani-rep-badges">
                <div className="sultani-rep-badge">
                  <strong>48h</strong>
                  <small>{isAr ? "متوسط الرد على الطلبات" : "Average Response"}</small>
                </div>
                <div className="sultani-rep-badge">
                  <strong>100%</strong>
                  <small>{isAr ? "حقوق ملكية وتوثيق" : "Copyright Protected"}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
