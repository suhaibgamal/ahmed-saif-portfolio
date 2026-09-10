import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  Disc,
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
  Sliders,
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
    <div className="tape-shell" dir={t.dir} lang={t.locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a className="skip-link" href="#main">
        {locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      <header className="tape-header" aria-label={t.navLabel}>
        <div className="tape-header-inner">
          <Link className="tape-brand" href={getLocalePath(locale, "home")}>
            <div className="tape-brand-spool">
              <Disc size={20} className="tape-amber-icon tape-spin" />
            </div>
            <div className="tape-brand-info">
              <span className="tape-brand-name">{t.brandName}</span>
              <span className="tape-brand-label">REEL TAPE SESSIONS // A7MD</span>
            </div>
          </Link>

          <nav className="tape-nav" aria-label={t.navLabel}>
            {t.nav.map((item) => (
              <Link
                aria-current={item.page === page ? "page" : undefined}
                className={`tape-nav-link ${item.page === page ? "is-active" : ""}`}
                href={getLocalePath(locale, item.page)}
                key={item.page}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="tape-header-actions">
            <Link className="tape-lang-btn" href={getSwitchPath(locale, page)}>
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

      <main id="main" className="tape-main">{children}</main>

      <footer className="tape-footer">
        <div className="tape-footer-inner">
          <div className="tape-footer-analog">
            <div className="tape-counter-badge">
              <span className="tape-dot-red" />
              <span>SIDE A // TAPE COUNTER: 04:20</span>
            </div>
            <p className="tape-footer-quote">{t.footer.line}</p>
            <p className="tape-footer-sub">{t.footer.credit}</p>
          </div>

          <div className="tape-footer-social" aria-label={t.socialLabel}>
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} - ${t.external}`}
                className="tape-social-icon"
              >
                <SocialIcon name={link.icon} size={16} />
              </a>
            ))}
            <a
              href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
              aria-label={t.contactPage.primaryAction}
              className="tape-social-icon"
            >
              <Mail aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
