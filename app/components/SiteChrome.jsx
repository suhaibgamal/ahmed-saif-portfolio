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
import MobileNav from "./MobileNav";
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

export function SocialIcon({ name, size = 16 }) {
  const Icon = socialIconMap[name] || ExternalLink;
  return <Icon aria-hidden="true" size={size} strokeWidth={1.7} />;
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

  const railSocials = socialLinks.slice(0, 6);

  return (
    <div className="kin-layout" dir={t.dir} lang={t.locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a className="skip-link" href="#main">
        {isAr ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      {/* Persistent Desktop Side-Rail */}
      <aside className="kin-rail" aria-label={t.navLabel}>
        <div className="kin-rail__top">
          <Link className="kin-rail__brand" href={getLocalePath(locale, "home")}>
            <strong>{t.brandName}</strong>
            <span>{isAr ? "صنعاء · استوديو A7MD" : "Sana'a · A7MD Studio"}</span>
          </Link>

          <nav className="kin-rail__nav" aria-label={t.navLabel}>
            {t.nav.map((item) => (
              <Link
                key={item.page}
                href={getLocalePath(locale, item.page)}
                aria-current={item.page === page ? "page" : undefined}
                className={`kin-rail__link ${item.page === page ? "is-active" : ""}`}
              >
                <span className="kin-rail__dot" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="kin-rail__bottom">
          <div className="kin-rail__controls">
            <ThemeToggle locale={locale} showLabel />
            <Link className="kin-rail-lang" href={getSwitchPath(locale, page)}>
              <Languages size={14} aria-hidden="true" />
              <span>{t.switchLabel}</span>
            </Link>
          </div>

          <div className="kin-rail-socials" aria-label={t.socialLabel}>
            {railSocials.map((link) => (
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
          <p className="kin-rail__credit">{t.footer.credit}</p>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <header className="kin-mobile-bar" aria-label={t.navLabel}>
        <Link className="kin-mobile-bar__brand" href={getLocalePath(locale, "home")}>
          <strong>{t.brandName}</strong>
          <span>A7MD Studio</span>
        </Link>
        <div className="kin-mobile-bar__actions">
          <ThemeToggle locale={locale} />
          <MobileNav
            closeLabel={isAr ? "إغلاق القائمة" : "Close menu"}
            openLabel={isAr ? "فتح القائمة" : "Open menu"}
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
            socialLinks={railSocials}
          />
        </div>
      </header>

      <div className="kin-content-column">
        <main id="main" className="kin-main">
          {children}
        </main>

        <footer className="kin-footer">
          <div className="kin-wrap kin-footer__inner">
            <div>
              <strong>{t.footer.line}</strong>
              <p>{t.footer.credit}</p>
            </div>
            <div className="kin-footer__links">
              {t.nav.map((item) => (
                <Link key={item.page} href={getLocalePath(locale, item.page)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
