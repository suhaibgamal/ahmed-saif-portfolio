import { ArrowUpRight, Mail } from "lucide-react";
import { content, socialLinks } from "../data";
import CopyTileButton from "./CopyTileButton";
import SiteChrome, { emailHref, SocialIcon } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";

  return (
    <SiteChrome locale={locale} page="contact">
      <section className="bn-section">
        <div className="bn-wrap">
          <div className="bn-mosaic">
            <div className="bn-tile bn-col-12 bn-page-banner">
              <span className="bn-pill">{t.contactPage.eyebrow}</span>
              <h1 className="bn-hero-title">{t.contactPage.title}</h1>
              <p className="bn-hero-lead">{t.contactPage.body}</p>
            </div>

            <div className="bn-tile bn-col-6 bn-contact-tile">
              <span className="bn-label">
                {isAr ? "التعاونات والإنتاج" : "Production & Collaborations"}
              </span>
              <h2 dir="ltr">{t.contactPage.primaryEmail}</h2>
              <p className="bn-tile-body">
                {isAr
                  ? "لتترات المسلسلات، التلحين، الإنتاج الموسيقي، والتراخيص."
                  : "For TV themes, original composition, studio production, and licensing."}
              </p>
              <div className="bn-actions">
                <a
                  className="bn-btn bn-btn--primary"
                  href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <CopyTileButton email={t.contactPage.primaryEmail} locale={locale} />
              </div>
            </div>

            <div className="bn-tile bn-col-6 bn-contact-tile">
              <span className="bn-label">
                {isAr ? "تواصل مباشر مع الفنان" : "Direct Artist Desk"}
              </span>
              <h2 dir="ltr">{t.contactPage.secondaryEmail}</h2>
              <p className="bn-tile-body">
                {isAr
                  ? "للدعوات الثقافية، المهرجانات الدولية، واللقاءات الإعلامية."
                  : "For festival appearances, live performances, and press."}
              </p>
              <div className="bn-actions">
                <a
                  className="bn-btn bn-btn--primary"
                  href={emailHref(t.contactPage.secondaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
                <CopyTileButton email={t.contactPage.secondaryEmail} locale={locale} />
              </div>
            </div>

            {t.contactPage.cards.map((scope) => (
              <div className="bn-tile bn-col-3 bn-scope-tile" key={scope}>
                <strong>{scope}</strong>
              </div>
            ))}

            <div className="bn-tile bn-col-12">
              <span className="bn-label">{t.socialLabel}</span>
              <div className="bn-platform-pills">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bn-platform-chip"
                  >
                    <SocialIcon name={link.icon} size={15} />
                    <span>{link.label}</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
