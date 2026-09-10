import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Sparkles, Activity, Radio, Cpu, Volume2, Calendar, MapPin } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const featuredWorks = works.slice(0, 6);

  return (
    <SiteChrome locale={locale} page="home">
      <div className="relative overflow-hidden">
        {/* Top Live Banner */}
        <section className="relative pt-8 pb-16 md:pt-14 md:pb-24">
          <div className="stage-container">
            {/* Live Ticker */}
            <div className="flex items-center justify-center mb-8">
              <div className="stage-badge">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] stage-strobe" />
                <span>{isAr ? "جولة الحفلات الحية والمهرجانات 2025 / 2026" : "WORLD STAGE TOUR // 2025-2026"}</span>
                <span className="text-[#64748b]">|</span>
                <span className="text-white font-semibold">{isAr ? "إكسبو أوساكا · بابل · دراما رمضان" : "Expo Osaka · Babylon"}</span>
              </div>
            </div>

            {/* Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
                <div className="inline-block">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-md border border-[#00f0ff]/30">
                    {isAr ? "قيادة وتوزيع أوركسترالي حي" : "LIVE ORCHESTRAL DIRECTION"}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
                  {isAr ? (
                    <>
                      الصوت الحيّ على{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#00f0ff] to-white">
                        مسارح العالم العربي
                      </span>
                    </>
                  ) : (
                    <>
                      The Live Acoustic Force on the{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#00f0ff] to-white">
                        World Arab Stage
                      </span>
                    </>
                  )}
                </h1>

                <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {isAr
                    ? "المسرح هو المحك الحقيقي للموسيقي. لا فلاتر ولا تعديلات رقمية: ضربة ريشة العود، وقيادة أوركسترا كاملة أمام آلاف الحضور، وتحويل التراث اليمني والعربي إلى ملحمة سمعية تهز القلوب."
                    : "The stage is the ultimate test. No digital filters: just the strike of the oud plectrum, conducting a full orchestra before thousands of listeners, turning heritage into living epics."}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link
                    href={getLocalePath(locale, "works")}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#00f0ff] text-[#06080d] font-black text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:scale-[1.02] transition-all flex items-center gap-2"
                  >
                    <span>{isAr ? "استكشف قائمة العروض (Setlist)" : "Explore Live Setlist"}</span>
                    <ArrowIcon size={16} />
                  </Link>

                  <Link
                    href={getLocalePath(locale, "contact")}
                    className="px-6 py-3 rounded-xl bg-[#0c1220] border border-[#38bdf8]/30 text-white font-bold text-xs tracking-wide hover:bg-[#38bdf8]/10 hover:border-[#00f0ff] transition-all"
                  >
                    {isAr ? "طلب تنظيم حفل أو رعاية مهرجان" : "Book Concert / Festival"}
                  </Link>
                </div>

                {/* Live Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
                  <div>
                    <div className="text-2xl font-black text-[#00f0ff] font-mono">18+</div>
                    <div className="text-xs text-[#94a3b8] font-mono uppercase">{isAr ? "عمل مسرحي وإذاعي" : "Stage & Broadcast"}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#38bdf8] font-mono">2025</div>
                    <div className="text-xs text-[#94a3b8] font-mono uppercase">{isAr ? "مشاركة إكسبو أوساكا" : "Expo Osaka Japan"}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white font-mono">108dB</div>
                    <div className="text-xs text-[#94a3b8] font-mono uppercase">{isAr ? "طاقة الصوت الحي" : "Live SPL Peak"}</div>
                  </div>
                </div>
              </div>

              {/* Right: Bespoke Concert Stage Photo Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#0284c7] via-[#00f0ff] to-transparent rounded-3xl opacity-30 blur-2xl animate-pulse" />

                  <div className="relative rounded-3xl bg-[#0a0f1c] border-2 border-[#38bdf8]/40 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                    {/* Top Monitor Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#060910] border-b border-[#38bdf8]/20">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] stage-strobe" />
                        <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                          STAGE MONITOR · FOH 01
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-3 bg-[#00f0ff] stage-eq-1" />
                        <div className="w-1 h-4 bg-[#00f0ff] stage-eq-2" />
                        <div className="w-1 h-2 bg-[#00f0ff] stage-eq-3" />
                        <div className="w-1 h-5 bg-[#00f0ff] stage-eq-4" />
                        <div className="w-1 h-3 bg-[#00f0ff] stage-eq-5" />
                      </div>
                    </div>

                    {/* Ahmed's Photo */}
                    <div className="relative aspect-[4/5] w-full bg-[#05070c]">
                      <Image
                        src="/ahmed-saif-profile.webp"
                        alt={t.siteTitle}
                        fill
                        priority
                        className="object-cover object-top filter brightness-105 contrast-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent opacity-90" />
                    </div>

                    {/* Bottom Monitor Tag */}
                    <div className="p-5 bg-[#0a0f1c] space-y-2 border-t border-[#38bdf8]/20">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase text-[#00f0ff] font-bold">
                          {isAr ? "عازف عود وقائد فرقة" : "Oud Virtuoso & Conductor"}
                        </span>
                        <span className="text-[10px] font-mono text-[#94a3b8] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          DSP 96kHz
                        </span>
                      </div>
                      <div className="text-sm font-bold text-white">
                        {t.siteTitle}
                      </div>
                      <p className="text-xs text-[#94a3b8] line-clamp-2">
                        {isAr
                          ? "موسيقي يمني ينقل التراث بأوتار العود الحيّة وتوزيع أوركسترالي على المسارح الدولية."
                          : "Yemeni musician channeling historic melodies with live oud strings and orchestral arrangements."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Setlist Section */}
        <section className="py-16 bg-[#040609] border-t border-b border-[#38bdf8]/15 relative">
          <div className="stage-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#00f0ff] tracking-widest mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                  {isAr ? "قائمة الأعمال المختارة" : "Featured Concert Setlist"}
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  {isAr ? "أعمال المسارح والشاشات" : "Stage Anthems & Premieres"}
                </h2>
              </div>
              <Link
                href={getLocalePath(locale, "works")}
                className="mt-4 md:mt-0 text-xs font-mono text-[#38bdf8] hover:text-[#00f0ff] flex items-center gap-1 group"
              >
                <span>{isAr ? "عرض كامل القائمة (18 عملاً)" : "View Complete Setlist (18 Tracks)"}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWorks.map((work, idx) => (
                <div
                  key={work.slug}
                  className="stage-card p-6 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-3">
                      <span className="text-[#00f0ff] font-bold">SET {String(idx + 1).padStart(2, "0")}</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">{work.year}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors mb-2">
                      {isAr ? work.titleAr : work.titleEn}
                    </h3>

                    <p className="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed mb-4">
                      {isAr ? work.summaryAr : work.summaryEn}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#38bdf8] uppercase">
                      {work.category || (isAr ? "توزيع مسرحي" : "Orchestral")}
                    </span>
                    <Link
                      href={getLocalePath(locale, "works", work.slug)}
                      className="text-xs font-bold text-white group-hover:text-[#00f0ff] flex items-center gap-1"
                    >
                      <span>{isAr ? "تفاصيل العمل" : "Details"}</span>
                      <ArrowIcon size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Stage Rider Callout */}
        <section className="py-16 bg-[#040609] border-t border-[#38bdf8]/20">
          <div className="stage-container">
            <div className="relative rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101a2e] border-2 border-[#00f0ff]/40 p-8 sm:p-12 overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.12)]">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-3 text-center md:text-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff] stage-strobe" />
                    {isAr ? "حجوزات المهرجانات والمواسم الحالية" : "PROMOTER & FESTIVAL BOOKINGS"}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {isAr ? "هل تخطط لمهرجان أو حفل أوركسترالي مباشر؟" : "Planning a Live Festival or Orchestral Concert?"}
                  </h3>
                  <p className="text-sm text-[#94a3b8] max-w-lg">
                    {isAr
                      ? "تواصل مباشرة مع إدارة أعمال أحمد سيف لاستلام الرايدر الفني وجدول الجولات الحية وتنسيق البروفات."
                      : "Contact Ahmed Saif management directly for technical riders, tour schedule availability, and stage booking."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={getLocalePath(locale, "contact")}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#00f0ff] text-[#06080d] font-bold text-xs uppercase tracking-wider hover:opacity-90 shadow-lg"
                  >
                    {isAr ? "طلب التنسيق الفني" : "Submit Stage Request"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteChrome>
  );
}
