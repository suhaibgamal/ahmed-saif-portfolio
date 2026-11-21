import Link from "next/link";
import {
  Cloud,
  Disc3,
  ExternalLink,
  Facebook,
  Ghost,
  Instagram,
  Languages,
  Mail,
  Music2,
  Radio,
  Twitter,
  Youtube
} from "lucide-react";
import {
  content,
  getLocalePath,
  getStructuredData,
  getSwitchPath,
  socialLinks
} from "../data";
import ThemeToggle from "./ThemeToggle";

const socialIconMap = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  snapchat: Ghost,
  spotify: Disc3,
  anghami: Radio,
  appleMusic: Music2,
  soundcloud: Cloud
};

export function SocialIcon({ name, size = 15 }) {
  const Icon = socialIconMap[name] || ExternalLink;
  return <Icon aria-hidden="true" size={size} strokeWidth={1.6} />;
}

export function emailHref(email, subject) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export default function SiteChrome({ children, locale, page, work = null }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const structuredData = JSON.stringify(
    getStructuredData(locale, page, work)
  ).replace(/</g, "\\u003c");

  return (
    <div className="zn-shell" dir={t.dir} lang={t.locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a className="skip-link" href="#main">
        {isAr ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      {/* Ultra-Minimal Top Line */}
      <header className="zn-top">
        <div className="zn-col zn-top__inner">
          <Link className="zn-brand" href={getLocalePath(locale, "home")}>
            <strong>{t.brandName}</strong>
            <span>A7MD Studio</span>
          </Link>

          <div className="zn-top__tools">
            <ThemeToggle locale={locale} />
            <Link className="zn-lang" href={getSwitchPath(locale, page)}>
              <Languages size={14} aria-hidden="true" />
              <span>{t.switchLabel}</span>
            </Link>
          </div>
        </div>
      </header>

      <main id="main" className="zn-main">
        {children}
      </main>

      <footer className="zn-footer">
        <div className="zn-col zn-footer__inner">
          <p>{t.footer.line}</p>
          <div className="zn-footer__socials" aria-label={t.socialLabel}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} - ${t.external}`}
              >
                <SocialIcon name={link.icon} size={15} />
              </a>
            ))}
            <a
              href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
              aria-label={t.contactPage.primaryAction}
            >
              <Mail size={15} aria-hidden="true" />
            </a>
          </div>
          <small>{t.footer.credit}</small>
        </div>
      </footer>

      {/* Calm Floating Bottom Navigation Pill (Works cleanly on Desktop & Mobile) */}
      <nav className="zn-bottom-nav" aria-label={t.navLabel}>
        <div className="zn-bottom-pill">
          {t.nav.map((item) => (
            <Link
              key={item.page}
              href={getLocalePath(locale, item.page)}
              aria-current={item.page === page ? "page" : undefined}
              className={`zn-bottom-pill__link ${item.page === page ? "is-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
