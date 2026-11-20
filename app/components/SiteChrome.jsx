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
  return <Icon aria-hidden="true" size={size} strokeWidth={1.75} />;
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
    <div className="air-shell" dir={t.dir} lang={t.locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a className="skip-link" href="#main">
        {isAr ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      <header className="air-nav-bar" aria-label={t.navLabel}>
        <div className="air-container air-nav-bar__inner">
          <Link className="air-brand" href={getLocalePath(locale, "home")}>
            <span className="air-brand__dot" aria-hidden="true" />
            <strong>{t.brandName}</strong>
          </Link>

          <nav className="air-nav" aria-label={t.navLabel}>
            {t.nav.map((item) => (
              <Link
                key={item.page}
                href={getLocalePath(locale, item.page)}
                aria-current={item.page === page ? "page" : undefined}
                className={`air-nav__link ${item.page === page ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="air-nav-tools">
            <ThemeToggle locale={locale} />
            <Link className="air-lang-pill" href={getSwitchPath(locale, page)}>
              <Languages size={14} aria-hidden="true" />
              <span>{t.switchLabel}</span>
            </Link>
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

      <main id="main" className="air-main">
        {children}
      </main>

      <footer className="air-footer">
        <div className="air-container">
          <div className="air-footer__top">
            <div>
              <strong className="air-footer__brand">{t.brandName}</strong>
              <p className="air-footer__desc">
                {isAr
                  ? "صوت يمني معاصر، تلحين وإنتاج موسيقي من A7MD Studio."
                  : "Contemporary Yemeni voice, composition & studio production from A7MD Studio."}
              </p>
            </div>

            <div className="air-footer__links">
              {t.nav.map((item) => (
                <Link key={item.page} href={getLocalePath(locale, item.page)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="air-footer__socials" aria-label={t.socialLabel}>
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
          </div>

          <div className="air-footer__bottom">
            <span>{t.footer.line}</span>
            <span>{t.footer.credit}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
