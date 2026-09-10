import Link from "next/link";
import { ArrowLeft, ArrowRight, Activity, Play, Sparkles } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function WorksPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="works">
      <div className="py-12 md:py-20">
        <div className="stage-container">
          {/* Header */}
          <div className="mb-12">
            <div className="stage-badge mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] stage-strobe" />
              <span>{isAr ? "الريبرتوار المسرحي وقائمة العروض" : "CONCERT REPERTOIRE & SETLIST"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
              {isAr ? "الأعمال الموسيقية والتوزيع الحي" : "Master Repertoire & Live Sets"}
            </h1>
            <p className="text-base text-[#94a3b8] max-w-2xl">
              {isAr
                ? "تصفح قائمة الأعمال الموسيقية التي قادها وأعاد توزيعها أحمد سيف للمسارح، وشارات المسلسلات، والمهرجانات العربية والدولية."
                : "Explore the complete setlist of compositions, orchestral arrangements, and stage pieces directed by Ahmed Saif."}
            </p>
          </div>

          {/* Setlist List */}
          <div className="space-y-4">
            {works.map((work, idx) => (
              <div
                key={work.slug}
                className="stage-card p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                {/* Number & Info */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0284c7]/15 border border-[#38bdf8]/30 flex flex-col items-center justify-center font-mono">
                    <span className="text-[10px] text-[#38bdf8]">SET</span>
                    <span className="text-sm font-black text-white">{String(idx + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                        {isAr ? work.titleAr : work.titleEn}
                      </h2>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#94a3b8] border border-white/10">
                        {work.year}
                      </span>
                      {work.category && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30">
                          {work.category}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#94a3b8] max-w-3xl leading-relaxed">
                      {isAr ? work.summaryAr : work.summaryEn}
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="flex items-center gap-3 self-end md:self-center">
                  <Link
                    href={getLocalePath(locale, "works", work.slug)}
                    className="px-4 py-2 rounded-lg bg-[#0b1324] border border-[#38bdf8]/30 text-xs font-bold text-white hover:bg-[#00f0ff] hover:text-[#06080d] hover:border-[#00f0ff] transition-all flex items-center gap-1.5"
                  >
                    <span>{isAr ? "عرض بيانات العمل" : "View Track Data"}</span>
                    <ArrowIcon size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
