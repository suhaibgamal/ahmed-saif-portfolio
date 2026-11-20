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
import ScrollHeader from "./ScrollHeader";
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

export function SocialIcon({ name, size = 17 }) {
  const Icon = socialIconMap[name] || ExternalLink;
  return <Icon aria-hidden="true" size={size} strokeWidth={1.7} />;
}

export function emailHref(email, subject) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export default function SiteChrome({
  children,
  headerMode = "solid",
  locale,
  page,
  work = null
}) {
  const t = content[locale];
  const isAr = locale === "ar";
  const structuredData = JSON.stringify(
    getStructuredData(locale, page, work)
  ).replace(/</g, "\\u003c");

  const streamingLinks = socialLinks.filter((s) =>
    ["youtube", "spotify", "appleMusic", "anghami", "soundcloud"].includes(s.icon)
  );

  return (
    <div
      className={`site-shell ${
        headerMode === "overlay" ? "site-shell--overlay" : ""
      }`}
      dir={t.dir}
      lang={t.locale}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a className="skip-link" href="#main">
        {isAr ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      <ScrollHeader overlay={headerMode === "overlay"} label={t.navLabel}>
        <div className="sov-header__inner">
          <Link className="sov-brand" href={getLocalePath(locale, "home")}>
            <span className="sov-brand__name">{t.brandName}</span>
            <span className="sov-brand__sub">A7MD Studio</span>
          </Link>

          <nav className="sov-nav" aria-label={t.navLabel}>
            {t.nav.map((item) => (
              <Link
                key={item.page}
                href={getLocalePath(locale, item.page)}
                aria-current={item.page === page ? "page" : undefined}
                className={`sov-nav__link ${
                  item.page === page ? "is-active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="sov-header__actions">
            <ThemeToggle locale={locale} />
            <Link
              className="sov-lang-link"
              href={getSwitchPath(locale, page)}
              aria-label={t.switchLabel}
            >
              <Languages aria-hidden="true" size={15} strokeWidth={1.7} />
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
      </ScrollHeader>

      <main id="main" className="site-main">
        {children}
      </main>

      <footer className="sov-footer">
        <div className="sov-container">
          <div className="sov-footer__grid">
            <div className="sov-footer__col sov-footer__col--brand">
              <p className="sov-footer__monogram">{t.brandName}</p>
              <p className="sov-footer__note">
                {isAr
                  ? "مغنٍ وملحن وموزع موسيقي يمني. أعمال أصلية، ألحان درامية، وإنتاج استوديو متكامل من A7MD Studio."
                  : "Yemeni singer, composer, and producer. Original repertoire, screen scores, and full-cycle production from A7MD Studio."}
              </p>
            </div>

            <div className="sov-footer__col">
              <h2 className="sov-footer__heading">
                {isAr ? "الفهرس" : "Directory"}
              </h2>
              <ul className="sov-footer__list">
                {t.nav.map((item) => (
                  <li key={item.page}>
                    <Link href={getLocalePath(locale, item.page)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sov-footer__col">
              <h2 className="sov-footer__heading">
                {isAr ? "منصات الاستماع" : "Listening"}
              </h2>
              <ul className="sov-footer__list">
                {streamingLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sov-footer__col">
              <h2 className="sov-footer__heading">
                {isAr ? "التواصل الرسمي" : "Representation"}
              </h2>
              <ul className="sov-footer__list">
                <li>
                  <a
                    href={emailHref(
                      t.contactPage.primaryEmail,
                      t.contactPage.subject
                    )}
                  >
                    {t.contactPage.primaryEmail}
                  </a>
                </li>
                <li>
                  <a
                    href={emailHref(
                      t.contactPage.secondaryEmail,
                      t.contactPage.subject
                    )}
                  >
                    {t.contactPage.secondaryEmail}
                  </a>
                </li>
                <li className="sov-footer__location">
                  {isAr ? "صنعاء، اليمن · A7MD Studio" : "Sana'a, Yemen · A7MD Studio"}
                </li>
              </ul>
            </div>
          </div>

          <div className="sov-footer__bottom">
            <span>{t.footer.credit}</span>
            <div className="sov-footer__icons" aria-label={t.socialLabel}>
              {socialLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} - ${t.external}`}
                >
                  <SocialIcon name={link.icon} size={15} />
                </a>
              ))}
              <a
                href={emailHref(
                  t.contactPage.primaryEmail,
                  t.contactPage.subject
                )}
                aria-label={t.contactPage.primaryAction}
              >
                <Mail aria-hidden="true" size={15} strokeWidth={1.7} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
