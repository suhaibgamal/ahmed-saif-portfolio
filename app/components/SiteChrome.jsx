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
  return "mailto:" + email + "?subject=" + encodeURIComponent(subject);
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
  const isAr = locale === "ar";
  const switchPath = getSwitchPath(locale, page, work?.slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#070708] text-[#f8fafc] selection:bg-white/20 selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#070708] focus:font-bold focus:rounded-lg"
      >
        {t.skipLink}
      </a>

      {/* Ultra Minimal Zen Top Bar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070708]/90 backdrop-blur-md" aria-label={t.navLabel}>
        <div className="zen-container h-16 flex items-center justify-between">
          {/* Subtle Monogram Brand */}
          <Link href={getLocalePath(locale, "home")} className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-serif font-light text-[#e2e8f0] group-hover:border-white transition-colors">
              س
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide text-white group-hover:text-[#e2e8f0] transition-colors">
                {t.siteTitle}
              </div>
              <div className="text-[10px] text-[#64748b] font-light">
                {isAr ? "موسيقى وتأليف أصيل" : "Acoustic Music & Compositions"}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label={t.navLabel}>
            {t.nav.map((item) => {
              const active =
                (item.page === "home" && page === "home") ||
                (item.page === "works" && (page === "works" || page === "work")) ||
                (item.page === "about" && page === "about") ||
                (item.page === "contact" && page === "contact");

              return (
                <Link
                  key={item.page}
                  href={getLocalePath(locale, item.page)}
                  className={"text-xs tracking-wide transition-colors relative py-1 " + (
                    active
                      ? "text-white font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-white"
                      : "text-[#94a3b8] hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href={switchPath}
              className="text-xs text-[#94a3b8] hover:text-white px-2.5 py-1 rounded border border-white/10 hover:border-white/25 transition-colors flex items-center gap-1.5"
            >
              <Languages size={13} />
              <span>{t.switchLabel}</span>
            </Link>

            <Link
              href={getLocalePath(locale, "contact")}
              className="hidden sm:inline-block px-3.5 py-1.5 rounded-full border border-white/20 hover:border-white text-xs text-white transition-all hover:bg-white/5"
            >
              {isAr ? "تواصل" : "Connect"}
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
              switchHref={switchPath}
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

      {/* Main Content */}
      <main id="main" className="flex-1 relative z-10">
        {children}
      </main>

      {/* Ultra Minimal Zen Footer */}
      <footer className="border-t border-white/[0.06] bg-[#050506] py-12 relative">
        <div className="zen-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
            <div className="space-y-1 text-center md:text-start">
              <div className="text-sm font-semibold text-white">{t.siteTitle}</div>
              <p className="text-xs text-[#64748b] max-w-sm">
                {isAr
                  ? "سكون الفكرة، ونقاء اللحن، وأصالة النغم اليمني بأبسط صورة ممكنة."
                  : "Contemplative acoustic serenity, melodic purity, and Yemeni heritage in its essential form."}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.slice(0, 5).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-white/30 transition-all"
                  aria-label={s.label}
                >
                  <SocialIcon name={s.icon} size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748b] gap-2">
            <div>© {new Date().getFullYear()} {t.siteTitle} · Zen Acoustic Canvas.</div>
            <div className="font-mono text-[11px]">ACOUSTIC PURITY // ESSENTIAL AUDIO</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
