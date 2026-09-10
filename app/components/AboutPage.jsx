import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Activity, Radio, Cpu, Volume2, Award } from "lucide-react";
import { content, getLocalePath } from "../data";
import SiteChrome from "./SiteChrome";

export default function AboutPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="about">
      <div className="py-12 md:py-20">
        <div className="stage-container">
          {/* Header */}
          <div className="mb-14 max-w-3xl">
            <div className="stage-badge mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] stage-strobe" />
              <span>{isAr ? "سيرة المسارح والمواسم" : "STAGE CHRONICLES & BIOGRAPHY"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
              {isAr ? "الموسيقى حين تتنفس أمام الجمهور" : "Music as a Living Dialogue on Stage"}
            </h1>
            <p className="text-base text-[#94a3b8] leading-relaxed">
              {isAr
                ? "بين حضرموت وعدن والقاهرة، إلى مسارح إكسبو أوساكا ومهرجان بابل: رحلة أحمد سيف في قيادة الأوركسترا وإحياء النغم اليمني الأصيل."
                : "From Hadhramaut and Aden to Cairo, Expo Osaka and Babylon: Ahmed Saif’s live journey conducting orchestras and reviving historic melodies."}
            </p>
          </div>

          {/* 2-Col Profile and Technical Rider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Photo & Live Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl bg-[#0a0f1c] border-2 border-[#38bdf8]/40 overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/5] w-full bg-[#06080d]">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt={t.siteTitle}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 bg-[#0a0f1c] border-t border-[#38bdf8]/20 space-y-2">
                  <div className="text-xs font-mono text-[#00f0ff] uppercase font-bold">
                    {isAr ? "المواصفات الفنية للعود المسرحي" : "Stage Oud Technical Specs"}
                  </div>
                  <div className="text-xs text-[#94a3b8] space-y-1 font-mono">
                    <div>• OUD: Custom Handcrafted Yemeni Rosewood</div>
                    <div>• PICKUP: Stereo Piezo + Cardioid Internal Mic</div>
                    <div>• MONITORING: Custom In-Ear Monitors (6-Driver)</div>
                    <div>• TUNING: F - C - G - D - A - F (Standard Concert)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-7 space-y-8 text-[#94a3b8] leading-relaxed">
              <div className="stage-card p-6 space-y-3">
                <h2 className="text-xl font-black text-white">
                  {isAr ? "أصالة التراث، ودقة الأوركسترا المعاصرة" : "Authentic Roots, Contemporary Stage Precision"}
                </h2>
                <p className="text-sm leading-relaxed">
                  {isAr
                    ? "لم يكن العود في مسيرة أحمد سيف مجرد آلة وترية تؤدي مقاماً أو تقسيماً، بل صوتاً يقود تشكيلات كاملة من الكمنجات والتشيلو والإيقاعات المركبة. بدأ شغفه من استماع عميق لمدارس الغناء الصنعاني واللحجي والحضرمي، ثم صقل هذه الموهبة بالدراسة الأكاديمية والتوزيع السيمفوني."
                    : "For Ahmed Saif, the oud has never been a passive solo instrument, but a commanding force guiding full sections of strings, woodwinds, and complex polyrhythms."}
                </p>
              </div>

              <div className="stage-card p-6 space-y-3">
                <h2 className="text-xl font-black text-white">
                  {isAr ? "محطات المهرجانات الكبرى والدراما" : "Major Festivals & Drama Milestones"}
                </h2>
                <p className="text-sm leading-relaxed">
                  {isAr
                    ? "تجلت بصمته في أعمال موسيقية خالدة شوهدت واستمع إليها ملايين المشاهدين، كمسلسل 'يا مداور الحاجة الضايعة' ومسلسل 'دروب المرجلة'، وصولاً إلى المشاركة الرسمية لتمثيل اليمن موسيقياً في معرض إكسبو الدولي في أوساكا اليابان 2025."
                    : "His mark shines across viral Ramadan TV drama themes and official international representations, including Expo 2025 Osaka Japan."}
                </p>
              </div>

              {/* Stage Direct Rider */}
              <div className="stage-card p-6 space-y-3">
                <h2 className="text-xl font-black text-white">
                  {isAr ? "متطلبات الرايدر الفني للحفلات" : "Concert Technical Rider Outline"}
                </h2>
                <ul className="text-xs space-y-2 font-mono text-[#94a3b8]">
                  <li>• FOH Console: Midas PRO / DiGiCo SD series preferred</li>
                  <li>• Front Fill & Side Monitor System: d&b audiotechnik or L-Acoustics</li>
                  <li>• 1x Wireless Handheld Talkback + 1x Hardwired XLR at Conductor Podium</li>
                  <li>• Dedicated rehearsal block: Minimum 6 hours with ensemble prior to showtime</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
