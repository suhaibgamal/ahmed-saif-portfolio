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
  Youtube,
  Zap
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
    "\u003c"
  );
  const isAr = locale === "ar";
  const switchPath = getSwitchPath(locale, page, work?.slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#06080d] text-[#f0f6fc] selection:bg-[#00f0ff]/30 selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00f0ff] focus:text-[#06080d] focus:font-bold focus:rounded-lg"
      >
        {t.skipLink}
      </a>

      {/* Stadium Top Bar */}
      <header className="sticky top-0 z-50 border-b border-[#38bdf8]/20 bg-[#070a12]/90 backdrop-blur-md" aria-label={t.navLabel}>
        <div className="stage-container h-16 flex items-center justify-between">
          {/* Brand & Live Beacon */}
          <Link href={getLocalePath(locale, "home")} className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#0284c7]/20 border border-[#00f0ff]/40 text-[#00f0ff]">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] stage-strobe" />
            </div>
            <div>
              <div className="font-bold tracking-tight text-white group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                <span>{t.siteTitle}</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30">
                  {isAr ? "عرض حي" : "LIVE"}
                </span>
              </div>
              <p className="text-[10px] font-mono text-[#94a3b8]">
                {isAr ? "قيادة أوركسترا ومسارح دولية" : "Live Orchestral & Stage Direction"}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0b101c] p-1 rounded-xl border border-[#38bdf8]/20" aria-label={t.navLabel}>
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
                  className={"px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all " + (
                    active
                      ? "bg-[#0284c7] text-white shadow-[0_0_12px_rgba(2,132,199,0.5)]"
                      : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Top Actions: Language Switch & Mobile Nav */}
          <div className="flex items-center gap-3">
            <Link
              href={switchPath}
              className="text-xs font-mono text-[#94a3b8] hover:text-[#00f0ff] px-2.5 py-1 rounded border border-white/10 hover:border-[#00f0ff]/40 transition-all flex items-center gap-1.5"
            >
              <Languages size={13} />
              <span>{t.switchLabel}</span>
            </Link>

            <Link
              href={getLocalePath(locale, "contact")}
              className="hidden sm:relative sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#0284c7] to-[#00f0ff] text-[#06080d] text-xs font-bold uppercase tracking-wider hover:opacity-90 shadow-[0_0_16px_rgba(0,240,255,0.35)] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#06080d]" />
              {isAr ? "تنسيق حفل مباشر" : "Book Concert"}
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

      {/* Main Content Area */}
      <main id="main" className="flex-1 relative z-10">
        {children}
      </main>

      {/* Stadium Concert Footer */}
      <footer className="border-t border-[#38bdf8]/15 bg-[#040609] py-12 relative overflow-hidden">
        <div className="stage-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/5">
            {/* Col 1 */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2 text-[#00f0ff] font-mono text-xs uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] stage-strobe" />
                {isAr ? "المسرح الحي والإنتاج المسرحي" : "Live Stage & Orchestral Direction"}
              </div>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-md">
                {isAr
                  ? "قيادة الأوركسترا المباشرة، وتوزيع الأعمال التراثية والحديثة لكبرى المهرجانات الوطنية والعربية والمسارح العالمية (إكسبو أوساكا، بابل، جرش، عدن)."
                  : "Live orchestral conducting and master arrangement for premier Arab cultural festivals and international stages (Expo Osaka, Babylon, Jarash, Aden)."}
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <div className="text-xs font-mono uppercase text-[#38bdf8] mb-3">
                {isAr ? "المهرجانات الحالية" : "Active Festivals"}
              </div>
              <ul className="text-xs text-[#94a3b8] space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                  {isAr ? "إكسبو أوساكا اليابان 2025" : "Expo Osaka Japan 2025"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                  {isAr ? "مهرجان بابل الدولي" : "Babylon International"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                  {isAr ? "مواسم الدراما الرمضانية" : "Ramadan Orchestral Themes"}
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <div className="text-xs font-mono uppercase text-[#38bdf8] mb-3">
                {isAr ? "قنوات التواصل الفني" : "Artist Channels"}
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {socialLinks.slice(0, 5).map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#0b101c] border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-[#00f0ff] hover:border-[#00f0ff]/40 transition-all"
                    aria-label={s.label}
                  >
                    <SocialIcon name={s.icon} size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748b] gap-4">
            <div className="font-mono">
              © {new Date().getFullYear()} {t.siteTitle} · Live Concert & Stage Direction.
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span>LATENCY: 0.8ms</span>
              <span>•</span>
              <span>DSP: 64-BIT DUAL CORE</span>
              <span>•</span>
              <span className="text-[#00f0ff]">FOH ONLINE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
