import { ArrowUpRight, Mail } from "lucide-react";
import { content, socialLinks } from "../data";
import CopyStageButton from "./CopyStageButton";
import SiteChrome, { emailHref, SocialIcon } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";

  return (
    <SiteChrome locale={locale} page="contact">
      <section className="sym-page-head">
        <div className="sym-wrap">
          <p className="sym-kicker">{t.contactPage.eyebrow}</p>
          <h1 className="sym-page-title">{t.contactPage.title}</h1>
          <p className="sym-page-lead">{t.contactPage.body}</p>
        </div>
      </section>

      <section className="sym-section">
        <div className="sym-wrap">
          <div className="sym-contact-pair">
            <div className="sym-contact-card">
              <p className="sym-kicker">
                {isAr ? "الإنتاج وتترات الدراما" : "Production & Soundtracks"}
              </p>
              <h2 dir="ltr">{t.contactPage.primaryEmail}</h2>
              <p>
                {isAr
                  ? "لتترات المسلسلات، التلحين، الإنتاج الموسيقي، والتراخيص."
                  : "For TV themes, original scores, studio production, and licensing."}
              </p>
              <div className="sym-actions">
                <a
                  className="sym-btn sym-btn--gold"
                  href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <CopyStageButton email={t.contactPage.primaryEmail} locale={locale} />
              </div>
            </div>

            <div className="sym-contact-card">
              <p className="sym-kicker">
                {isAr ? "الحفلات والمهرجانات الدولية" : "Live Stages & Festivals"}
              </p>
              <h2 dir="ltr">{t.contactPage.secondaryEmail}</h2>
              <p>
                {isAr
                  ? "للدعوات الدولية، الأمسيات الموسيقية، واللقاءات الإعلامية."
                  : "For international galas, cultural showcases, and press."}
              </p>
              <div className="sym-actions">
                <a
                  className="sym-btn sym-btn--gold"
                  href={emailHref(t.contactPage.secondaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
                <CopyStageButton email={t.contactPage.secondaryEmail} locale={locale} />
              </div>
            </div>
          </div>

          <div className="sym-scopes">
            {t.contactPage.cards.map((scope) => (
              <div key={scope}>{scope}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sym-section sym-section--surface">
        <div className="sym-wrap">
          <p className="sym-kicker">{t.socialLabel}</p>
          <div className="sym-platforms">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="sym-platform-chip"
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
