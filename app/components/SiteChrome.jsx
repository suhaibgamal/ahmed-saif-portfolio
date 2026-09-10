import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  Cloud,
  Disc3,
  ExternalLink,
  Facebook,
  Ghost,
  Instagram,
  Languages,
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
    <div className="lookbook-shell" dir={t.dir} lang={t.locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a className="skip-link" href="#main">
        {locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      {/* Top Issue Ticker */}
      <div className="lookbook-ticker">
        <div className="lookbook-ticker-inner">
          <span>HAUTE EDITION // VOL. 26</span>
          <span>AHMED SAIF: THE YEMENI MAQAM REVIVAL</span>
          <span>A7MD STUDIO EXCLUSIVE</span>
        </div>
      </div>

      <header className="lookbook-header" aria-label={t.navLabel}>
        <div className="lookbook-header-inner">
          <Link className="lookbook-brand" href={getLocalePath(locale, "home")}>
            <span className="lookbook-brand-name">{t.brandName}</span>
            <span className="lookbook-brand-issue">LOOKBOOK // COMPOSER</span>
          </Link>

          <nav className="lookbook-nav" aria-label={t.navLabel}>
            {t.nav.map((item) => (
              <Link
                aria-current={item.page === page ? "page" : undefined}
                className={`lookbook-nav-link ${item.page === page ? "is-active" : ""}`}
                href={getLocalePath(locale, item.page)}
                key={item.page}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="lookbook-header-actions">
            <Link className="lookbook-lang-btn" href={getSwitchPath(locale, page)}>
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

      <main id="main" className="lookbook-main">{children}</main>

      <footer className="lookbook-footer">
        <div className="lookbook-footer-inner">
          <div className="lookbook-footer-editorial">
            <span className="lookbook-footer-colophon">COLOPHON // HAUTE EDITORIAL 2026</span>
            <p className="lookbook-footer-quote">{t.footer.line}</p>
            <p className="lookbook-footer-sub">{t.footer.credit}</p>
          </div>

          <div className="lookbook-footer-social" aria-label={t.socialLabel}>
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} - ${t.external}`}
                className="lookbook-social-icon"
              >
                <SocialIcon name={link.icon} size={15} />
              </a>
            ))}
            <a
              href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
              aria-label={t.contactPage.primaryAction}
              className="lookbook-social-icon"
            >
              <Mail aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
