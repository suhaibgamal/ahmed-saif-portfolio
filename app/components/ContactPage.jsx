import { ArrowUpRight, Mail } from "lucide-react";
import { content, socialLinks } from "../data";
import CopyEditorialButton from "./CopyEditorialButton";
import SiteChrome, { emailHref, SocialIcon } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";

  return (
    <SiteChrome locale={locale} page="contact">
      <section className="ed-page-head">
        <div className="ed-wrap">
          <p className="ed-kicker">{t.contactPage.eyebrow}</p>
          <h1 className="ed-page-title">{t.contactPage.title}</h1>
          <p className="ed-cover__deck">{t.contactPage.body}</p>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-wrap">
          <div className="ed-contact-pair">
            <div className="ed-contact-sheet">
              <p className="ed-kicker">
                {isAr ? "مكتب الإنتاج والتعاون" : "Production & Commissions"}
              </p>
              <h2 dir="ltr">{t.contactPage.primaryEmail}</h2>
              <p>
                {isAr
                  ? "لتترات المسلسلات، التلحين، الإنتاج الموسيقي، والتراخيص."
                  : "For screen themes, original composition, studio production, and licensing."}
              </p>
              <div className="ed-actions">
                <a
                  className="ed-btn ed-btn--primary"
                  href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <CopyEditorialButton email={t.contactPage.primaryEmail} locale={locale} />
              </div>
            </div>

            <div className="ed-contact-sheet">
              <p className="ed-kicker">
                {isAr ? "التواصل المباشر والصحافة" : "Artist Desk & Press"}
              </p>
              <h2 dir="ltr">{t.contactPage.secondaryEmail}</h2>
              <p>
                {isAr
                  ? "للمهرجانات الدولية، الحفلات، واللقاءات الإعلامية."
                  : "For festival appearances, live performances, and press."}
              </p>
              <div className="ed-actions">
                <a
                  className="ed-btn ed-btn--primary"
                  href={emailHref(t.contactPage.secondaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
                <CopyEditorialButton email={t.contactPage.secondaryEmail} locale={locale} />
              </div>
            </div>
          </div>

          <div className="ed-scopes">
            {t.contactPage.cards.map((scope) => (
              <div key={scope}>{scope}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="ed-section ed-section--tint">
        <div className="ed-wrap">
          <p className="ed-kicker">{t.socialLabel}</p>
          <div className="ed-platforms">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ed-platform-link"
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
