import { ArrowUpRight, Mail } from "lucide-react";
import { content, socialLinks } from "../data";
import CopyNoteButton from "./CopyNoteButton";
import SiteChrome, { emailHref, SocialIcon } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";

  return (
    <SiteChrome locale={locale} page="contact">
      <section className="kin-page-head">
        <div className="kin-wrap">
          <p className="kin-eyebrow">{t.contactPage.eyebrow}</p>
          <h1 className="kin-page-title">{t.contactPage.title}</h1>
          <p className="kin-hero__lead">{t.contactPage.body}</p>
        </div>
      </section>

      <section className="kin-section">
        <div className="kin-wrap">
          <div className="kin-stationery-grid">
            <div className="kin-stationery">
              <p className="kin-eyebrow">
                {isAr ? "مكتب الإنتاج والتلحين" : "Production & Composition"}
              </p>
              <h2 dir="ltr">{t.contactPage.primaryEmail}</h2>
              <p>
                {isAr
                  ? "للمشاريع الغنائية، تترات المسلسلات، الألحان الخاصة، والتراخيص."
                  : "For original songs, drama themes, studio commissions, and licensing."}
              </p>
              <div className="kin-actions">
                <a
                  className="kin-btn kin-btn--primary"
                  href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <CopyNoteButton email={t.contactPage.primaryEmail} locale={locale} />
              </div>
            </div>

            <div className="kin-stationery">
              <p className="kin-eyebrow">
                {isAr ? "التواصل الشخصي" : "Direct Artist Note"}
              </p>
              <h2 dir="ltr">{t.contactPage.secondaryEmail}</h2>
              <p>
                {isAr
                  ? "للمشاركات الدولية، الأمسيات الموسيقية، والحوارات الإعلامية."
                  : "For festival appearances, live performances, and cultural press."}
              </p>
              <div className="kin-actions">
                <a
                  className="kin-btn kin-btn--primary"
                  href={emailHref(t.contactPage.secondaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
                <CopyNoteButton email={t.contactPage.secondaryEmail} locale={locale} />
              </div>
            </div>
          </div>

          <div className="kin-scopes">
            {t.contactPage.cards.map((item) => (
              <span className="kin-scope-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="kin-section kin-section--oat">
        <div className="kin-wrap">
          <p className="kin-eyebrow">{t.socialLabel}</p>
          <div className="kin-platforms">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="kin-platform-link"
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
