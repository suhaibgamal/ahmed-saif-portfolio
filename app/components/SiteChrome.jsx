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
  headerMode = "solid",
  locale,
  page
}) {
  const t = content[locale];
  const structuredData = JSON.stringify(getStructuredData(locale, page)).replace(
    /</g,
    "\\u003c"
  );

  return (
    <div
      className={`site-shell ${headerMode === "solid" ? "site-shell--inner" : ""}`}
      dir={t.dir}
      lang={t.locale}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a className="skip-link" href="#main">
        {locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      <header
        className={`site-header ${headerMode === "solid" ? "site-header--solid" : ""}`}
        aria-label={t.navLabel}
      >
        <Link className="brand-link" href={getLocalePath(locale, "home")}>
          <span className="brand-mark brand-mark--logo" aria-hidden="true">
            <Image
              alt=""
              className="brand-logo-image"
              height={28}
              sizes="84px"
              src="/favicon.webp"
              width={84}
            />
          </span>
          <span>
            <strong>{t.brandName}</strong>
            <small>{t.brandLine}</small>
          </span>
        </Link>

        <nav className="nav-links">
          {t.nav.map((item) => (
            <Link
              aria-current={item.page === page ? "page" : undefined}
              className={item.page === page ? "is-active" : undefined}
              href={getLocalePath(locale, item.page)}
              key={item.page}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="language-link language-link--desktop" href={getSwitchPath(locale, page)}>
          <Languages aria-hidden="true" size={17} strokeWidth={1.8} />
          <span>{t.switchLabel}</span>
        </Link>

        <MobileNav locale={locale} page={page} />
      </header>

      <main id="main" className="site-main">{children}</main>

      <footer className="site-footer">
        <div>
          <strong>{t.footer.line}</strong>
          <span>{t.footer.credit}</span>
        </div>
        <div className="footer-social" aria-label={t.socialLabel}>
          {socialLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} - ${t.external}`}
            >
              <SocialIcon name={link.icon} size={16} />
            </a>
          ))}
          <a
            href={emailHref(
              t.contactPage.primaryEmail,
              t.contactPage.subject
            )}
            aria-label={t.contactPage.primaryAction}
          >
            <Mail aria-hidden="true" size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}

