import { ArrowLeft, ArrowRight, Mail, Send, Bookmark, MessageCircle } from "lucide-react";
import { content, socialLinks } from "../data";
import SiteChrome, { SocialIcon, emailHref } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="contact">
      <div className="lookbook-page-header">
        <div className="lookbook-container">
          <div className="lookbook-cover-badge">
            <span className="lookbook-crimson-dot" />
            <span>{isAr ? "الصالون الفني ومكتب التكليف // A7MD" : "HAUTE SALON // COMMISSION DESK"}</span>
          </div>
          <h1 className="lookbook-page-title">
            {isAr ? "تواصل للتعاون الفني والإنتاج" : "Artistic Commissioning & Inquiries"}
          </h1>
          <p className="lookbook-page-desc">
            {isAr
              ? "لطلبات تلحين تترات الدراما، إنتاج الأغاني الفردية، وحجز الحفلات والمهرجانات الموسيقية."
              : "Direct channels for television drama scoring commissions, bespoke musical productions, concert appearances, and press inquiries."}
          </p>
        </div>
      </div>

      <section className="lookbook-section">
        <div className="lookbook-container">
          <div className="lookbook-contact-grid">
            {/* Main Salon Card */}
            <div className="lookbook-salon-box">
              <div className="lookbook-salon-top">
                <span className="lookbook-salon-code">VIP LIAISON // 2026</span>
                <span className="lookbook-salon-status">DIRECT DISPATCH</span>
              </div>

              <div className="lookbook-salon-body">
                <h3 className="lookbook-salon-heading">
                  {isAr ? "المكتب الفني والمراسلات" : "Direct Production Dispatch"}
                </h3>
                <p className="lookbook-salon-desc">
                  {isAr
                    ? "أرسل تفاصيل مشروعك وسيقوم فريق الاستوديو بالرد عليك في غضون 48 ساعة."
                    : "Transmit your project brief for immediate scheduling, stems delivery specs, or performance fee schedules."}
                </p>

                <div className="lookbook-contact-row">
                  <Mail size={16} className="lookbook-crimson-icon" />
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="lookbook-contact-link"
                  >
                    {t.contactPage.primaryEmail}
                  </a>
                </div>

                <div className="lookbook-contact-row">
                  <MessageCircle size={16} className="lookbook-crimson-icon" />
                  <a
                    href="https://wa.me/967770000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lookbook-contact-link"
                  >
                    {isAr ? "محادثة مباشرة عبر واتساب الاستوديو" : "Direct WhatsApp Office Channel"}
                  </a>
                </div>

                <div className="lookbook-salon-cta">
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="lookbook-btn-crimson"
                  >
                    <span>{isAr ? "إرسال رسالة رسمية" : "Dispatch Inquiry"}</span>
                    <Send size={15} />
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="lookbook-social-section">
                <h4>{isAr ? "المنصات الرقمية والتواصل" : "Digital Channels & Streaming"}</h4>
                <div className="lookbook-social-grid">
                  {socialLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lookbook-social-chip"
                    >
                      <SocialIcon name={link.icon} size={15} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Studio Guarantee Box */}
            <div className="lookbook-guarantee-box">
              <span className="lookbook-pretitle">{isAr ? "معايير الاستوديو" : "HAUTE STANDARDS"}</span>
              <h3 className="lookbook-guarantee-title">
                {isAr ? "معايير الإنتاج في استوديو A7MD" : "A7MD Production Standards"}
              </h3>
              <p className="lookbook-guarantee-body">
                {isAr
                  ? "يتم التعامل مع كافة المشاريع بسرية واحترافية، مع توفير تراكات التوزيع المنفصلة وحقوق الملكية الفكرية."
                  : "All commissioned works receive bespoke artistic treatment, full acoustic orchestration, live session musicianship, and master delivery in broadcast-ready formats."}
              </p>

              <div className="lookbook-guarantee-metrics">
                <div className="lookbook-g-metric">
                  <strong>48h</strong>
                  <small>{isAr ? "متوسط سرعة الرد" : "Response Time"}</small>
                </div>
                <div className="lookbook-g-metric">
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
