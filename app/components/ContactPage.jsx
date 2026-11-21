import { ArrowUpRight, Mail } from "lucide-react";
import { content, socialLinks } from "../data";
import CopyZenButton from "./CopyZenButton";
import SiteChrome, { emailHref } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";

  return (
    <SiteChrome locale={locale} page="contact">
      <section className="zn-page-head">
        <div className="zn-col">
          <p className="zn-label">{t.contactPage.eyebrow}</p>
          <h1 className="zn-page-title">{t.contactPage.title}</h1>
          <p className="zn-hero__lead">{t.contactPage.body}</p>
        </div>
      </section>

      <section className="zn-section zn-section--tight">
        <div className="zn-col">
          <div className="zn-letter-list">
            <div className="zn-letter">
              <p className="zn-label">
                {isAr ? "التعاونات والإنتاج" : "Production & Commissions"}
              </p>
              <h2 dir="ltr">{t.contactPage.primaryEmail}</h2>
              <p>
                {isAr
                  ? "لتترات المسلسلات، الألحان الأصلية، التوزيع، والتراخيص."
                  : "For screen themes, original composition, studio production, and licensing."}
              </p>
              <div className="zn-actions">
                <a
                  className="zn-btn zn-btn--sand"
                  href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <CopyZenButton email={t.contactPage.primaryEmail} locale={locale} />
              </div>
            </div>

            <div className="zn-letter">
              <p className="zn-label">
                {isAr ? "التواصل المباشر" : "Direct Artist Note"}
              </p>
              <h2 dir="ltr">{t.contactPage.secondaryEmail}</h2>
              <p>
                {isAr
                  ? "للدعوات الثقافية، المهرجانات الدولية، واللقاءات."
                  : "For cultural showcases, live invitations, and press."}
              </p>
              <div className="zn-actions">
                <a
                  className="zn-btn zn-btn--sand"
                  href={emailHref(t.contactPage.secondaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
                <CopyZenButton email={t.contactPage.secondaryEmail} locale={locale} />
              </div>
            </div>
          </div>

          <div className="zn-scopes">
            {t.contactPage.cards.map((scope) => (
              <span key={scope}>{scope}</span>
            ))}
          </div>

          <div className="zn-directory">
            <p className="zn-label">{t.socialLabel}</p>
            <div className="zn-text-platforms">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
