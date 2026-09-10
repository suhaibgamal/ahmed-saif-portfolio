import { ArrowLeft, ArrowRight, Mail, Send, Terminal, Zap, MessageSquare } from "lucide-react";
import { content, socialLinks } from "../data";
import SiteChrome, { SocialIcon, emailHref } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="contact">
      <div className="cyber-page-header">
        <div className="cyber-container">
          <div className="cyber-terminal-badge">
            <Terminal size={14} className="cyber-cyan-icon" />
            <span>{isAr ? "بوابة الاتصال // التكليف الفني والإنتاج" : "COMMS GATEWAY // ARTISTIC COMMISSIONS"}</span>
          </div>
          <h1 className="cyber-page-title">
            {isAr ? "طلب عمل فني أو حجز حفل" : "Studio Booking & Live Commissioning"}
          </h1>
          <p className="cyber-page-desc">
            {isAr
              ? "خط اتصال مباشر لشركات الإنتاج التلفزيوني، منظمي المهرجانات، والمشاريع الغنائية الخاصة."
              : "Direct production dispatch line for broadcasting networks, festival curators, and custom composition sync."}
          </p>
        </div>
      </div>

      <section className="cyber-section">
        <div className="cyber-container">
          <div className="cyber-contact-grid">
            {/* Terminal Main Channel */}
            <div className="cyber-terminal-card-main">
              <div className="cyber-terminal-header">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
                <span className="cyber-terminal-address">STATION://DIRECT_DISPATCH</span>
              </div>

              <div className="cyber-terminal-content">
                <h3 className="cyber-comm-title">
                  {isAr ? "المراسلات والإنتاج الفني" : "Primary Comms Stream"}
                </h3>
                <p className="cyber-comm-desc">
                  {isAr
                    ? "أرسل تفاصيل مشروعك (تتر درامي، تلحين خاص، حفل مباشر) وسيتم الرد عليك مع كافة التفاصيل التقنية والمالية."
                    : "Transmit your project brief for immediate scheduling, stems delivery specs, or performance fee schedules."}
                </p>

                <div className="cyber-channel-row">
                  <Mail size={16} className="cyber-cyan-icon" />
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="cyber-channel-link"
                  >
                    {t.contactPage.primaryEmail}
                  </a>
                </div>

                <div className="cyber-channel-row">
                  <MessageSquare size={16} className="cyber-cyan-icon" />
                  <a
                    href="https://wa.me/967770000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-channel-link"
                  >
                    {isAr ? "محادثة فورية عبر واتساب المكتب" : "Direct WhatsApp Comms Channel"}
                  </a>
                </div>

                <div className="cyber-terminal-cta">
                  <a
                    href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                    className="cyber-btn-cyan"
                  >
                    <span>{isAr ? "إرسال رسالة رسمية للإنتاج" : "Transmit Project Brief"}</span>
                    <Send size={15} />
                  </a>
                </div>
              </div>

              {/* Social Telemetry Grid */}
              <div className="cyber-social-section">
                <h4>{isAr ? "شبكات البث والتواصل الاجتماعي" : "Digital Feeds & Streaming Nodes"}</h4>
                <div className="cyber-social-tiles">
                  {socialLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-social-tile"
                    >
                      <SocialIcon name={link.icon} size={16} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Studio Telemetry Status Box */}
            <div className="cyber-status-sidebar">
              <div className="cyber-status-box">
                <div className="cyber-status-header">
                  <span className="cyber-pulse-dot" />
                  <h4>{isAr ? "معايير الاستوديو والتسليم" : "Production Turnaround"}</h4>
                </div>
                <ul className="cyber-status-list">
                  <li>
                    <strong>24-BIT / 96kHz</strong>
                    <span>{isAr ? "جودة الصوت المصدرة" : "Master Export Audio Format"}</span>
                  </li>
                  <li>
                    <strong>STEMS INCLUDED</strong>
                    <span>{isAr ? "توفير تراكات التوزيع المنفصلة" : "Full Multi-track Stems Included"}</span>
                  </li>
                  <li>
                    <strong>48H RESPONSE</strong>
                    <span>{isAr ? "زمن الرد على الاستفسارات" : "Inquiry Response Time"}</span>
                  </li>
                  <li>
                    <strong>GLOBAL ISRC</strong>
                    <span>{isAr ? "توثيق وحماية الملكية الفكرية" : "Worldwide Digital Licensing"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
