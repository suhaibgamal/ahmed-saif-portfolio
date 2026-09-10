import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  Compass,
  Disc3,
  ExternalLink,
  Facebook,
  Ghost,
  Grid,
  Instagram,
  Languages,
  Mail,
  Menu,
  Music2,
  Radio,
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
    <div className="atelier-shell" dir={t.dir} lang={t.locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a className="skip-link" href="#main">
        {locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      {/* Top Coordinate Ticker */}
      <div className="atelier-top-bar">
        <div className="atelier-top-inner">
          <span className="atelier-mono-coord">LAT 15.3694° N // LONG 44.1910° E</span>
          <span className="atelier-mono-station">A7MD STUDIO // SWISS GRID ARCHIVE</span>
        </div>
      </div>

      <header className="atelier-header" aria-label={t.navLabel}>
        <div className="atelier-header-inner">
          <Link className="atelier-brand" href={getLocalePath(locale, "home")}>
            <div className="atelier-brand-icon">
              <Compass size={18} className="atelier-sage-icon" />
            </div>
            <div className="atelier-brand-info">
              <span className="atelier-brand-name">{t.brandName}</span>
              <span className="atelier-brand-sub">ATELIER & COMPOSER</span>
            </div>
          </Link>

          <nav className="atelier-nav" aria-label={t.navLabel}>
            {t.nav.map((item, idx) => (
              <Link
                aria-current={item.page === page ? "page" : undefined}
                className={`atelier-nav-link ${item.page === page ? "is-active" : ""}`}
                href={getLocalePath(locale, item.page)}
                key={item.page}
              >
                <span className="atelier-nav-idx">0{idx + 1}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="atelier-header-actions">
            <Link className="atelier-lang-btn" href={getSwitchPath(locale, page)}>
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

      <main id="main" className="atelier-main">{children}</main>

      <footer className="atelier-footer">
        <div className="atelier-footer-inner">
          <div className="atelier-footer-specs">
            <div className="atelier-ledger-tag">
              <span className="atelier-dot-sage" />
              <span>LEDGER SPEC // EDITION 2026</span>
            </div>
            <p className="atelier-footer-quote">{t.footer.line}</p>
            <p className="atelier-footer-sub">{t.footer.credit}</p>
          </div>

          <div className="atelier-footer-social" aria-label={t.socialLabel}>
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} - ${t.external}`}
                className="atelier-social-icon"
              >
                <SocialIcon name={link.icon} size={15} />
              </a>
            ))}
            <a
              href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
              aria-label={t.contactPage.primaryAction}
              className="atelier-social-icon"
            >
              <Mail aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
