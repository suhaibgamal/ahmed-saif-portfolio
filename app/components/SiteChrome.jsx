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
  return <Icon aria-hidden="true" size={size} strokeWidth={1.65} />;
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
    <div className="ed-shell" dir={t.dir} lang={t.locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a className="skip-link" href="#main">
        {isAr ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      {/* Classic Centered Print-Magazine Masthead */}
      <header className="ed-masthead" aria-label={t.navLabel}>
        <div className="ed-wrap">
          <div className="ed-masthead__top">
            <span className="ed-folio-note">
              {isAr ? "العدد السنوي ٢٠٢٦ · صنعاء" : "Annual Folio 2026 · Sana'a"}
            </span>

            <div className="ed-masthead__tools">
              <ThemeToggle locale={locale} />
              <Link className="ed-util-btn" href={getSwitchPath(locale, page)}>
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

          <div className="ed-masthead__plate">
            <Link className="ed-wordmark" href={getLocalePath(locale, "home")}>
              <span className="ed-wordmark__title">{t.brandName}</span>
              <span className="ed-wordmark__sub">
                {isAr
                  ? "مغنٍ وملحن وموزع موسيقي · A7MD Studio"
                  : "Singer, Composer & Producer · A7MD Studio"}
              </span>
            </Link>
          </div>

          <nav className="ed-nav" aria-label={t.navLabel}>
            {t.nav.map((item) => (
              <Link
                key={item.page}
                href={getLocalePath(locale, item.page)}
                aria-current={item.page === page ? "page" : undefined}
                className={`ed-nav__link ${item.page === page ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" className="ed-main">
        {children}
      </main>

      <footer className="ed-footer">
        <div className="ed-wrap">
          <div className="ed-colophon">
            <div>
              <strong className="ed-colophon__name">{t.brandName}</strong>
              <p>{t.footer.line}</p>
            </div>
            <div className="ed-colophon__nav">
              {t.nav.map((item) => (
                <Link key={item.page} href={getLocalePath(locale, item.page)}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="ed-colophon__socials" aria-label={t.socialLabel}>
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
          <p className="ed-colophon__copy">{t.footer.credit}</p>
        </div>
      </footer>
    </div>
  );
}
