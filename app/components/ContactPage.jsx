import { ArrowUpRight, Mail } from "lucide-react";
import { content, socialLinks } from "../data";
import CopyEmailButton from "./CopyEmailButton";
import SiteChrome, { emailHref, SocialIcon } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";

  return (
    <SiteChrome locale={locale} page="contact">
      <section className="air-page-intro">
        <div className="air-container">
          <p className="air-kicker">{t.contactPage.eyebrow}</p>
          <h1 className="air-page-title">{t.contactPage.title}</h1>
          <p className="air-page-lead">{t.contactPage.body}</p>
        </div>
      </section>

      <section className="air-section air-section--tinted">
        <div className="air-container">
          <div className="air-contact-pair">
            <div className="air-contact-tile">
              <span className="air-chip">
                {isAr ? "التعاونات والإنتاج" : "Production & Collaborations"}
              </span>
              <h2 dir="ltr">{t.contactPage.primaryEmail}</h2>
              <p>
                {isAr
                  ? "لتترات المسلسلات، الألحان الأصلية، الإعلانات، والتراخيص الموسيقية."
                  : "For TV soundtracks, original composition, brand scores, and music licensing."}
              </p>
              <div className="air-actions">
                <a
                  className="air-btn air-btn--primary"
                  href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                >
                  <Mail size={15} aria-hidden="true" />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <CopyEmailButton email={t.contactPage.primaryEmail} locale={locale} />
              </div>
            </div>

            <div className="air-contact-tile">
              <span className="air-chip">
                {isAr ? "تواصل مباشر" : "Direct Artist Contact"}
              </span>
              <h2 dir="ltr">{t.contactPage.secondaryEmail}</h2>
              <p>
                {isAr
                  ? "للمهرجانات الدولية، الحفلات الخاصة، واللقاءات الإعلامية."
                  : "For international showcases, private bookings, and press inquiries."}
              </p>
              <div className="air-actions">
                <a
                  className="air-btn air-btn--primary"
                  href={emailHref(t.contactPage.secondaryEmail, t.contactPage.subject)}
                >
                  <Mail size={15} aria-hidden="true" />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
                <CopyEmailButton email={t.contactPage.secondaryEmail} locale={locale} />
              </div>
            </div>
          </div>

          <div className="air-scopes">
            {t.contactPage.cards.map((item) => (
              <div className="air-scope-pill" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="air-section">
        <div className="air-container">
          <p className="air-kicker">{t.socialLabel}</p>
          <div className="air-platform-row air-platform-row--start">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="air-platform-chip"
              >
                <SocialIcon name={link.icon} size={15} />
                <span>{link.label}</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
