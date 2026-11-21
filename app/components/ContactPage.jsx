import { ArrowUpRight, Mail } from "lucide-react";
import { content, socialLinks } from "../data";
import CopyDeckButton from "./CopyDeckButton";
import SiteChrome, { emailHref, SocialIcon } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";

  return (
    <SiteChrome locale={locale} page="contact">
      <section className="hf-section">
        <div className="hf-wrap hf-detail-stack">
          <div className="hf-chassis">
            <p className="hf-kicker">{t.contactPage.eyebrow}</p>
            <h1 className="hf-title">{t.contactPage.title}</h1>
            <p className="hf-lead">{t.contactPage.body}</p>
          </div>

          <div className="hf-contact-pair">
            <div className="hf-chassis hf-contact-card">
              <span className="hf-kicker">
                {isAr ? "الإنتاج والتعاونات" : "Production & Commissions"}
              </span>
              <h2 dir="ltr">{t.contactPage.primaryEmail}</h2>
              <p>
                {isAr
                  ? "لتترات المسلسلات، التلحين، التوزيع، والتراخيص."
                  : "For screen themes, composition, arrangement, and licensing."}
              </p>
              <div className="hf-actions">
                <a
                  className="hf-btn hf-btn--brass"
                  href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <CopyDeckButton email={t.contactPage.primaryEmail} locale={locale} />
              </div>
            </div>

            <div className="hf-chassis hf-contact-card">
              <span className="hf-kicker">
                {isAr ? "تواصل مباشر مع الفنان" : "Direct Artist Desk"}
              </span>
              <h2 dir="ltr">{t.contactPage.secondaryEmail}</h2>
              <p>
                {isAr
                  ? "للدعوات الدولية، المهرجانات، واللقاءات الإعلامية."
                  : "For festival appearances, live invitations, and press."}
              </p>
              <div className="hf-actions">
                <a
                  className="hf-btn hf-btn--brass"
                  href={emailHref(t.contactPage.secondaryEmail, t.contactPage.subject)}
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
                <CopyDeckButton email={t.contactPage.secondaryEmail} locale={locale} />
              </div>
            </div>
          </div>

          <div className="hf-channels">
            {t.contactPage.cards.map((scope) => (
              <div className="hf-chassis hf-scope" key={scope}>
                <strong>{scope}</strong>
              </div>
            ))}
          </div>

          <div className="hf-chassis">
            <p className="hf-kicker">{t.socialLabel}</p>
            <div className="hf-platforms">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hf-platform-btn"
                >
                  <SocialIcon name={link.icon} size={15} />
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
