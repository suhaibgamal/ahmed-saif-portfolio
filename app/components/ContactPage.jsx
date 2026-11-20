import { ArrowUpRight } from "lucide-react";
import { content, socialLinks } from "../data";
import CopyEmailCard from "./CopyEmailCard";
import SiteChrome, { emailHref, SocialIcon } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";

  return (
    <SiteChrome locale={locale} page="contact">
      <section className="sov-page-head">
        <div className="sov-container">
          <p className="eyebrow">{t.contactPage.eyebrow}</p>
          <h1 className="sov-page-title">{t.contactPage.title}</h1>
          <p className="sov-page-lead">{t.contactPage.body}</p>
        </div>
      </section>

      <section className="sov-section">
        <div className="sov-container">
          <div className="sov-contact-grid">
            <CopyEmailCard
              label={
                isAr ? "التعاونات والإنتاج والتترات" : "Collaborations & Production"
              }
              email={t.contactPage.primaryEmail}
              description={
                isAr
                  ? "لطلبات التلحين، أغاني المسلسلات، الإنتاج الموسيقي، والتراخيص التجارية."
                  : "For composition commissions, series themes, studio production, and licensing."
              }
              mailtoHref={emailHref(
                t.contactPage.primaryEmail,
                t.contactPage.subject
              )}
              actionLabel={t.contactPage.primaryAction}
              locale={locale}
            />

            <CopyEmailCard
              label={isAr ? "التواصل المباشر مع الفنان" : "Direct Artist Desk"}
              email={t.contactPage.secondaryEmail}
              description={
                isAr
                  ? "للدعوات الفنية، المهرجانات الدولية، واللقاءات الإعلامية الخاصة."
                  : "For cultural invitations, festival bookings, and direct press correspondence."
              }
              mailtoHref={emailHref(
                t.contactPage.secondaryEmail,
                t.contactPage.subject
              )}
              actionLabel={t.contactPage.secondaryAction}
              locale={locale}
            />
          </div>

          <div className="sov-scope-strip">
            <p className="eyebrow">
              {isAr ? "مجالات التعاون" : "Commission Scope"}
            </p>
            <div className="sov-scope-grid">
              {t.contactPage.cards.map((scope) => (
                <div className="sov-scope-item" key={scope}>
                  <span>{scope}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sov-directory-band">
            <p className="eyebrow">{t.socialLabel}</p>
            <div className="sov-platform-list">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sov-platform-pill"
                >
                  <SocialIcon name={link.icon} size={16} />
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
