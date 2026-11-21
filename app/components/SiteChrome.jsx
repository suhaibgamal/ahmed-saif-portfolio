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

  return (
    <div className="sw-canvas" dir={t.dir} lang={t.locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a className="skip-link" href="#main">
        {isAr ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      <div className="sw-frame">
        {/* Swiss Architectural Top Ledger */}
        <header className="sw-header" aria-label={t.navLabel}>
          <div className="sw-meta-strip">
            <span className="sw-meta-strip__coord">
              {isAr
                ? "صنعاء، اليمن · استوديو A7MD · الأرشيف الرسمي"
                : "Sana'a, Yemen · A7MD Studio · Official Monograph"}
            </span>
            <div className="sw-meta-strip__tools">
              <ThemeToggle locale={locale} />
              <Link className="sw-tool-btn" href={getSwitchPath(locale, page)}>
                <Languages size={14} aria-hidden="true" />
                <span>{t.switchLabel}</span>
              </Link>
            </div>
          </div>

          <div className="sw-nav-ledger">
            <Link className="sw-brand-cell" href={getLocalePath(locale, "home")}>
              <strong>{t.brandName}</strong>
              <span>{t.hero.role}</span>
            </Link>

            <nav className="sw-nav-cells" aria-label={t.navLabel}>
              {t.nav.map((item) => (
                <Link
                  key={item.page}
                  href={getLocalePath(locale, item.page)}
                  aria-current={item.page === page ? "page" : undefined}
                  className={`sw-nav-cell ${item.page === page ? "is-active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="sw-mobile-cell">
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
                socialLinks={socialLinks.slice(0, 6)}
              />
            </div>
          </div>
        </header>

        <main id="main" className="sw-main">
          {children}
        </main>

        <footer className="sw-footer">
          <div className="sw-footer__grid">
            <div className="sw-footer__cell">
              <strong>{t.brandName}</strong>
              <p>{t.footer.line}</p>
            </div>
            <div className="sw-footer__cell">
              <div className="sw-footer__links">
                {t.nav.map((item) => (
                  <Link key={item.page} href={getLocalePath(locale, item.page)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="sw-footer__cell sw-footer__cell--end">
              <div className="sw-footer__socials" aria-label={t.socialLabel}>
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
          </div>
        </footer>
      </div>
    </div>
  );
}
