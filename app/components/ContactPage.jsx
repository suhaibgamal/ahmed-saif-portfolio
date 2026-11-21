import { ArrowUpRight, Mail } from "lucide-react";
import { content, socialLinks } from "../data";
import CopyLineButton from "./CopyLineButton";
import SiteChrome, { emailHref, SocialIcon } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";

  return (
    <SiteChrome locale={locale} page="contact">
      <section className="gal-page-head">
        <div className="gal-wrap">
          <p className="gal-caption">{t.contactPage.eyebrow}</p>
          <h1 className="gal-page-title">{t.contactPage.title}</h1>
          <p className="gal-lead">{t.contactPage.body}</p>
        </div>
      </section>

      <section className="gal-section">
        <div className="gal-wrap">
          <div className="gal-contact-grid">
            <div className="gal-contact-box">
              <p className="gal-caption">
                {isAr ? "التعاونات والإنتاج" : "Production & Commissions"}
              </p>
              <h2 dir="ltr">{t.contactPage.primaryEmail}</h2>
              <p>
                {isAr
                  ? "لتترات المسلسلات، التلحين، الإنتاج الموسيقي، والتراخيص."
                  : "For screen themes, original composition, studio production, and licensing."}
              </p>
              <div className="gal-actions">
                <a
                  className="gal-btn gal-btn--solid"
                  href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <CopyLineButton email={t.contactPage.primaryEmail} locale={locale} />
              </div>
            </div>

            <div className="gal-contact-box">
              <p className="gal-caption">
                {isAr ? "تواصل مباشر مع الفنان" : "Direct Artist Desk"}
              </p>
              <h2 dir="ltr">{t.contactPage.secondaryEmail}</h2>
              <p>
                {isAr
                  ? "للدعوات الثقافية، المهرجانات، واللقاءات الإعلامية."
                  : "For international showcases, cultural invitations, and press."}
              </p>
              <div className="gal-actions">
                <a
                  className="gal-btn gal-btn--solid"
                  href={emailHref(t.contactPage.secondaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
                <CopyLineButton email={t.contactPage.secondaryEmail} locale={locale} />
              </div>
            </div>
          </div>

          <div className="gal-scope-list">
            {t.contactPage.cards.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="gal-section gal-section--plinth">
        <div className="gal-wrap">
          <p className="gal-caption">{t.socialLabel}</p>
          <div className="gal-platforms">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="gal-platform-item"
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
