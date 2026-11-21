import { ArrowUpRight, Mail } from "lucide-react";
import { content, socialLinks } from "../data";
import CopyCellButton from "./CopyCellButton";
import SiteChrome, { emailHref, SocialIcon } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";

  return (
    <SiteChrome locale={locale} page="contact">
      <section className="sw-page-head">
        <span className="sw-tag">{t.contactPage.eyebrow}</span>
        <h1 className="sw-page-title">{t.contactPage.title}</h1>
        <p className="sw-body">{t.contactPage.body}</p>
      </section>

      <section className="sw-band sw-contact-matrix">
        <div className="sw-contact-cell">
          <span className="sw-tag">
            {isAr ? "مكتب الإنتاج والتعاون" : "Production & Collaborations"}
          </span>
          <h2 dir="ltr">{t.contactPage.primaryEmail}</h2>
          <p className="sw-body">
            {isAr
              ? "لتترات المسلسلات، التلحين، الإنتاج الموسيقي، والتراخيص."
              : "For screen themes, original composition, studio production, and licensing."}
          </p>
          <div className="sw-actions">
            <a
              className="sw-btn sw-btn--primary"
              href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
            >
              <Mail size={14} aria-hidden="true" />
              <span>{t.contactPage.primaryAction}</span>
            </a>
            <CopyCellButton email={t.contactPage.primaryEmail} locale={locale} />
          </div>
        </div>

        <div className="sw-contact-cell">
          <span className="sw-tag">
            {isAr ? "التواصل المباشر مع الفنان" : "Direct Artist Desk"}
          </span>
          <h2 dir="ltr">{t.contactPage.secondaryEmail}</h2>
          <p className="sw-body">
            {isAr
              ? "للمشاركات الثقافية، المهرجانات الدولية، والحفلات."
              : "For cultural showcases, festival invitations, and direct press."}
          </p>
          <div className="sw-actions">
            <a
              className="sw-btn sw-btn--primary"
              href={emailHref(t.contactPage.secondaryEmail, t.contactPage.subject)}
            >
              <Mail size={14} aria-hidden="true" />
              <span>{t.contactPage.secondaryAction}</span>
            </a>
            <CopyCellButton email={t.contactPage.secondaryEmail} locale={locale} />
          </div>
        </div>
      </section>

      <section className="sw-band">
        <div className="sw-scope-row">
          {t.contactPage.cards.map((item) => (
            <div className="sw-scope-cell" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="sw-band sw-closing-cell">
        <span className="sw-tag">{t.socialLabel}</span>
        <div className="sw-platform-grid">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="sw-platform-btn"
            >
              <SocialIcon name={link.icon} size={15} />
              <span>{link.label}</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
