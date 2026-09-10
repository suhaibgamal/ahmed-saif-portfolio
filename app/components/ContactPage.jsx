import { ArrowLeft, ArrowRight, Mail, Send, Disc, MessageCircle } from "lucide-react";
import { content, socialLinks } from "../data";
import SiteChrome, { SocialIcon, emailHref } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="contact">
      <div className="tape-page-header">
        <div className="tape-container">
          <div className="tape-session-badge">
            <Disc size={14} className="tape-amber-icon tape-spin-slow" />
            <span>{isAr ? "مكتب الحجز والتكليف الفني // استوديو A7MD" : "STUDIO BOOKING & COMMISSION DESK"}</span>
          </div>
          <h1 className="tape-page-title">
            {isAr ? "طلب عمل موسيقي أو حجز حفل" : "Studio Booking & Artistic Commissions"}
          </h1>
          <p className="tape-page-desc">
            {isAr
              ? "لطلبات تلحين تترات الدراما، إنتاج الأغاني الفردية، وحجز الحفلات والمهرجانات الموسيقية."
              : "Direct correspondence for original soundtrack scoring, bespoke singles production, and live stage appearances."}
          </p>
        </div>
      </div>

      <section className="tape-section">
        <div className="tape-container">
          <div className="tape-contact-grid">
            {/* Letterpress Card */}
            <div className="tape-letterpress-card">
              <div className="tape-stamp-decor">
                <span className="tape-stamp-text">OFFICIAL DESPATCH</span>
                <span className="tape-stamp-code">A7MD-01</span>
              </div>

              <h3 className="tape-contact-heading">
                {isAr ? "المكتب الفني والمراسلات" : "Official Studio Liaison"}
              </h3>
              <p className="tape-contact-sub">
                {isAr
                  ? "يسعدني استقبال استفساراتكم حول المشروعات الغنائية وتفاصيل الإنتاج الموسيقي."
                  : "We welcome direct correspondence regarding television themes, single releases, and concert curation."}
              </p>

              <div className="tape-contact-row">
                <Mail size={16} className="tape-amber-icon" />
                <a
                  href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                  className="tape-contact-link"
                >
                  {t.contactPage.primaryEmail}
                </a>
              </div>

              <div className="tape-contact-row">
                <MessageCircle size={16} className="tape-amber-icon" />
                <a
                  href="https://wa.me/967770000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tape-contact-link"
                >
                  {isAr ? "محادثة مباشرة عبر واتساب المكتب" : "Direct WhatsApp Booking Chat"}
                </a>
              </div>

              <div className="tape-contact-cta-block">
                <a
                  href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                  className="tape-btn-amber"
                >
                  <span>{isAr ? "إرسال رسالة رسمية للمكتب" : "Send Studio Telegram"}</span>
                  <Send size={15} />
                </a>
              </div>

              {/* Social channels */}
              <div className="tape-social-box">
                <h4>{isAr ? "منصات الاستماع والتواصل" : "Streaming & Social Repertoire"}</h4>
                <div className="tape-social-pills">
                  {socialLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tape-social-pill"
                    >
                      <SocialIcon name={link.icon} size={15} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Studio Guarantee Box */}
            <div className="tape-guarantee-box">
              <span className="tape-stamp-label">{isAr ? "معايير الجلسة" : "Session Quality"}</span>
              <h3 className="tape-guarantee-title">
                {isAr ? "ضمانات الإنتاج في استوديو A7MD" : "A7MD Studio Session Standards"}
              </h3>
              <p className="tape-guarantee-body">
                {isAr
                  ? "كل عمل ننتجه يتم تسجيله ومراجعته بدقة، مع توفير تراكات التوزيع المنفصلة (Stems)، نوتات العزف، وحقوق الملكية الفكرية الموثقة رسمياً."
                  : "All commissioned music is recorded with high-end analog preamps, offering full multi-track stems, arrangement sheets, and comprehensive copyright licensing."}
              </p>

              <div className="tape-guarantee-stats">
                <div className="tape-g-stat">
                  <strong>100%</strong>
                  <small>{isAr ? "تسجيل حي نقي" : "Acoustic Clarity"}</small>
                </div>
                <div className="tape-g-stat">
                  <strong>48h</strong>
                  <small>{isAr ? "سرعة الاستجابة" : "Office Response"}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
