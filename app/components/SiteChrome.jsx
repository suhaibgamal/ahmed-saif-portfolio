import Image from "next/image";
import Link from "next/link";
import {
  Activity,
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
  Sliders,
  SlidersHorizontal,
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
    <div className="console-shell" dir={t.dir} lang={t.locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a className="skip-link" href="#main">
        {locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      {/* Meter Bridge Ticker */}
      <div className="console-meter-bar">
        <div className="console-meter-inner">
          <div className="console-power-led">
            <span className="console-led-green" />
            <span>CONSOLE BUS // 48V PHANTOM ON</span>
          </div>
          <span className="console-clock-rate">SAMPLE CLOCK: 96.0 kHz // MASTER CLOCK LOCK</span>
          <span className="console-session-label">A7MD STUDIO // ANALOG DESK</span>
        </div>
      </div>

      <header className="console-header" aria-label={t.navLabel}>
        <div className="console-header-inner">
          <Link className="console-brand" href={getLocalePath(locale, "home")}>
            <div className="console-brand-fader">
              <SlidersHorizontal size={18} className="console-green-icon" />
            </div>
            <div className="console-brand-info">
              <span className="console-brand-name">{t.brandName}</span>
              <span className="console-brand-strip">CH. MASTER // COMPOSER</span>
            </div>
          </Link>

          <nav className="console-nav" aria-label={t.navLabel}>
            {t.nav.map((item, idx) => (
              <Link
                aria-current={item.page === page ? "page" : undefined}
                className={`console-nav-link ${item.page === page ? "is-active" : ""}`}
                href={getLocalePath(locale, item.page)}
                key={item.page}
              >
                <span className="console-ch-badge">CH{idx + 1}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="console-header-actions">
            <Link className="console-lang-btn" href={getSwitchPath(locale, page)}>
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

      <main id="main" className="console-main">{children}</main>

      <footer className="console-footer">
        <div className="console-footer-inner">
          <div className="console-footer-monitor">
            <div className="console-monitor-led">
              <span className="console-led-green" />
              <span>DESK ACTIVE // MONITOR LEVEL: +4 dBu</span>
            </div>
            <p className="console-footer-quote">{t.footer.line}</p>
            <p className="console-footer-sub">{t.footer.credit}</p>
          </div>

          <div className="console-footer-social" aria-label={t.socialLabel}>
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} - ${t.external}`}
                className="console-social-btn"
              >
                <SocialIcon name={link.icon} size={15} />
              </a>
            ))}
            <a
              href={emailHref(t.contactPage.primaryEmail, t.contactPage.subject)}
              aria-label={t.contactPage.primaryAction}
              className="console-social-btn"
            >
              <Mail aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
