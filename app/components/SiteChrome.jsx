import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  Disc3,
  ExternalLink,
  Facebook,
  Ghost,
  Instagram,
  Languages,
  LayoutGrid,
  Mail,
  Menu,
  Music2,
  Radio,
  Sparkles,
  Twitter,
  X,
  Youtube
} from "lucide-react";
import {
  content,
  getLocalePath,
  getStructuredData,
  getSwitchPath,
  socialLinks
} from "../data";
import MobileNav from "./MobileNav";

export function OutboundIcon({ label }) {
  return (
    <>
      <ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} />
      <span className="sr-only">{label}</span>
    </>
  );
}

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

export function SocialIcon({ name, size = 18 }) {
  const Icon = socialIconMap[name] || ExternalLink;
  return <Icon aria-hidden="true" size={size} strokeWidth={1.8} />;
}

export function emailHref(email, subject) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export { Menu, X, Languages };

export default function SiteChrome({
  children,
  locale,
  page,
  work = null
}) {
  const t = content[locale];
  const structuredData = JSON.stringify(getStructuredData(locale, page, work)).replace(
    /</g,
    "\\u003c"
  );

  return (
    <div className="bento-shell" dir={t.dir} lang={t.locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a className="skip-link" href="#main">
        {locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      <header className="bento-header" aria-label={t.navLabel}>
        <div className="bento-header-inner">
          <Link className="bento-brand" href={getLocalePath(locale, "home")}>
            <div className="bento-brand-icon">
              <LayoutGrid size={18} className="bento-indigo-icon" />
            </div>
            <div className="bento-brand-info">
              <span className="bento-brand-name">{t.brandName}</span>
              <span className="bento-brand-badge">BENTO // A7MD STUDIO</span>
            </div>
          </Link>

          <nav className="bento-nav" aria-label={t.navLabel}>
            {t.nav.map((item) => (
              <Link
                aria-current={item.page === page ? "page" : undefined}
                className={`bento-nav-link ${item.page === page ? "is-active" : ""}`}
                href={getLocalePath(locale, item.page)}
                key={item.page}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="bento-header-actions">
            <Link className="bento-lang-btn" href={getSwitchPath(locale, page)}>
              <Languages aria-hidden="true" size={15} strokeWidth={1.8} />
              <span>{t.switchLabel}</span>
            </Link>

            <MobileNav
              closeLabel={locale === "ar" ? "إغلاق القائمة" : "Close menu"}
              openLabel={locale === "ar" ? "فتح القائمة" : "Open menu"}
              externalLabel={t.external}
              brandName={t.brandName}
              navLabel={t.navLabel}
              switchLabel={t.switchLabel}
              locale={locale}
              page={page}
              switchHref={getSwitchPath(locale, page)}
              navLinks={t.nav.map((item) => ({
                page: item.page,
                label: item.label,
                href: getLocalePath(locale, item.page)
              }))}
              socialLinks={socialLinks.slice(0, 5)}
            />
          </div>
        </div>
      </header>

      <main id="main" className="bento-main">{children}</main>

      <footer className="bento-footer">
        <div className="bento-footer-inner">
          <div className="bento-footer-info">
            <div className="bento-pill-live">
              <span className="bento-dot-purple" />
              <span>MODULAR BENTO REPERTOIRE // 2026</span>
            </div>
            <p className="bento-footer-quote">{t.footer.line}</p>
            <p className="bento-footer-sub">{t.footer.credit}</p>
          </div>

          <div className="bento-footer-social" aria-label={t.socialLabel}>
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} - ${t.external}`}
                className="bento-social-btn"
              >
                <SocialIcon name={link.icon} size={16} />
              </a>
            ))}
            <a
              href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
              aria-label={t.contactPage.primaryAction}
              className="bento-social-btn"
            >
              <Mail aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
