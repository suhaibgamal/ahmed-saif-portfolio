import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function WorksPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="works">
      <div className="py-14 md:py-24">
        <div className="zen-container">
          {/* Header */}
          <div className="mb-14 max-w-2xl">
            <div className="zen-badge mb-3">
              <span>{isAr ? "الأرشيف الصوتي المتكامل" : "Acoustic Archive"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-light text-white mb-4">
              {isAr ? "سجل الألحان والأعمال" : "Compositions & Recordings"}
            </h1>
            <p className="text-sm text-[#94a3b8] font-light leading-relaxed">
              {isAr
                ? "تصفح الأعمال الموسيقية وتترات المسلسلات والمشاركات الدولية التي لحنها وسجلها أحمد سيف."
                : "Complete chronological catalog of musical scores, drama anthems, and independent releases by Ahmed Saif."}
            </p>
          </div>

          {/* Minimal Works List */}
          <div className="divide-y divide-white/[0.06]">
            {works.map((work, idx) => (
              <Link
                key={work.slug}
                href={getLocalePath(locale, "works", work.slug)}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:px-2 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-[#64748b] pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-lg font-medium text-white group-hover:text-[#e2e8f0] transition-colors">
                      {isAr ? work.titleAr : work.titleEn}
                    </h2>
                    <p className="text-xs text-[#94a3b8] max-w-2xl font-light leading-relaxed mt-1">
                      {isAr ? work.summaryAr : work.summaryEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end md:self-center">
                  <span className="text-xs font-mono text-[#64748b]">{work.year}</span>
                  {work.category && (
                    <span className="text-[11px] font-mono text-[#94a3b8] px-2 py-0.5 rounded border border-white/10">
                      {work.category}
                    </span>
                  )}
                  <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <span>{isAr ? "تفاصيل" : "Details"}</span>
                    <ArrowIcon size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
