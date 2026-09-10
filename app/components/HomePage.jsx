import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Sparkles } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function HomePage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const featuredWorks = works.slice(0, 5);

  return (
    <SiteChrome locale={locale} page="home">
      <div className="relative overflow-hidden">
        {/* Serene Zen Hero */}
        <section className="pt-12 pb-20 md:pt-20 md:pb-28">
          <div className="zen-container">
            {/* Top Minimal Pill */}
            <div className="flex justify-center mb-10">
              <div className="zen-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                <span>{isAr ? "مساحة هادئة للألحان الصادقة" : "Quiet Acoustic Sanctuary"}</span>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Text */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.2] tracking-tight">
                  {isAr ? (
                    <>
                      سكونُ الفكرة.. <br />
                      <span className="font-serif italic text-[#e2e8f0]">ونقاءُ ارتعاش الوتر</span>
                    </>
                  ) : (
                    <>
                      Silence of Mind.. <br />
                      <span className="font-serif italic text-[#e2e8f0]">Purity of the Trembling String</span>
                    </>
                  )}
                </h1>

                {/* Human Quote */}
                <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                  {isAr
                    ? "الموسيقى الحقيقية لا تحتاج صخباً لتصل. عندما يكون اللحن صادقاً، يكفي وتر عود واحد في غرفة هادئة ليعيد ترتيب الروح. هنا أشارككم أعمالي بأبسط وأنقى شكل ممكن."
                    : "True music needs no clamor to be felt. When a melody is honest, a single oud string in a quiet room is enough to restore the spirit. Here I share my works in their purest form."}
                </p>

                {/* Zen Audio Wave Indicator */}
                <div className="flex items-center justify-center lg:justify-start gap-1 py-2">
                  <div className="w-[2px] h-3 bg-white/40 zen-wave-1" />
                  <div className="w-[2px] h-6 bg-white/60 zen-wave-2" />
                  <div className="w-[2px] h-9 bg-white/80 zen-wave-3" />
                  <div className="w-[2px] h-5 bg-white/50 zen-wave-4" />
                  <div className="w-[2px] h-7 bg-white/70 zen-wave-5" />
                  <span className="text-[11px] text-[#64748b] ml-3 mr-3 font-mono">
                    {isAr ? "نقاء صوتي متجرد" : "RAW ACOUSTIC PURITY"}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link
                    href={getLocalePath(locale, "works")}
                    className="px-6 py-2.5 rounded-full bg-white text-[#070708] font-medium text-xs tracking-wide hover:bg-[#e2e8f0] transition-all flex items-center gap-2 shadow-sm"
                  >
                    <span>{isAr ? "استمع للأعمال المختارة" : "Listen to Selected Works"}</span>
                    <ArrowIcon size={14} />
                  </Link>

                  <Link
                    href={getLocalePath(locale, "about")}
                    className="px-6 py-2.5 rounded-full border border-white/20 text-white text-xs hover:border-white/50 transition-colors"
                  >
                    {isAr ? "تأمّل السيرة الفنية" : "Read Artistic Philosophy"}
                  </Link>
                </div>
              </div>

              {/* Photo Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[340px]">
                  <div className="relative rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/10 shadow-2xl">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src="/ahmed-saif-profile.webp"
                        alt={t.siteTitle}
                        fill
                        priority
                        className="object-cover object-top filter contrast-[1.05] grayscale-[25%]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-transparent opacity-70" />
                    </div>

                    <div className="p-4 border-t border-white/[0.06] bg-[#0c0c0e] flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium text-white">{t.siteTitle}</div>
                        <div className="text-[11px] text-[#64748b]">{isAr ? "عازف عود وملحن يمني" : "Oud Soloist & Composer"}</div>
                      </div>
                      <span className="text-[10px] font-mono text-[#94a3b8] px-2 py-0.5 rounded border border-white/10">
                        ACOUSTIC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works Minimal List */}
        <section className="py-16 border-t border-white/[0.06] bg-[#050506]">
          <div className="zen-container">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="zen-badge mb-2">
                  <span>{isAr ? "أعمال مختارة" : "Selected Compositions"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  {isAr ? "ألحان خرجت من عمق الذاكرة" : "Melodies from Deep Memory"}
                </h2>
              </div>
              <Link
                href={getLocalePath(locale, "works")}
                className="text-xs text-[#94a3b8] hover:text-white flex items-center gap-1 group"
              >
                <span>{isAr ? "تصفح الأرشيف الكامل" : "Explore Archive"}</span>
                <ArrowIcon size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* List */}
            <div className="divide-y divide-white/[0.06]">
              {featuredWorks.map((work, idx) => (
                <Link
                  key={work.slug}
                  href={getLocalePath(locale, "works", work.slug)}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:px-2 transition-all"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-[#64748b]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-white group-hover:text-[#e2e8f0] transition-colors">
                        {isAr ? work.titleAr : work.titleEn}
                      </h3>
                      <p className="text-xs text-[#64748b] line-clamp-1 max-w-xl">
                        {isAr ? work.summaryAr : work.summaryEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <span className="text-xs font-mono text-[#64748b]">{work.year}</span>
                    <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <span>{isAr ? "استمع" : "Listen"}</span>
                      <ArrowIcon size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Minimal Connect Callout */}
        <section className="py-20 border-t border-white/[0.06]">
          <div className="zen-container text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light text-white">
              {isAr ? "هل تبحث عن لحن خاص لعملك القادم؟" : "Seeking a Bespoke Melody for Your Project?"}
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
              {isAr
                ? "سواء كان تتر عمل درامي، أو مقطوعة أوركسترالية متفردة، يسعدني دائماً الاستماع لفكرتك وصياغتها نغماً."
                : "Whether for a television drama score or a standalone acoustic commission, I am always open to hearing your vision."}
            </p>
            <div className="pt-2">
              <Link
                href={getLocalePath(locale, "contact")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 hover:border-white text-xs text-white transition-colors"
              >
                <span>{isAr ? "افتح محادثة خاصة" : "Begin Conversation"}</span>
                <ArrowIcon size={13} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteChrome>
  );
}
