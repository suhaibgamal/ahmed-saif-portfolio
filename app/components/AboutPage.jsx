import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { content, getLocalePath } from "../data";
import SiteChrome from "./SiteChrome";

export default function AboutPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="about">
      <div className="py-14 md:py-24">
        <div className="zen-container">
          {/* Header */}
          <div className="mb-14 max-w-2xl">
            <div className="zen-badge mb-3">
              <span>{isAr ? "السيرة الفنية والفلسفة" : "Artistic Philosophy"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-light text-white mb-4">
              {isAr ? "بين سكون الصمت ونبض الوتر" : "Between the Silence and the String"}
            </h1>
            <p className="text-sm text-[#94a3b8] font-light leading-relaxed">
              {isAr
                ? "رحلة أحمد سيف مع العود والموسيقى: من بيوت الطين في حضرموت إلى مسارح العالم."
                : "Ahmed Saif’s acoustic path with the oud: from Yemeni soil to international concert halls."}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden bg-[#0e0e11] border border-white/10">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/ahmed-saif-profile.webp"
                    alt={t.siteTitle}
                    fill
                    className="object-cover object-top filter grayscale-[20%]"
                  />
                </div>
                <div className="p-4 bg-[#0e0e11] border-t border-white/[0.06] text-xs text-[#64748b] font-light">
                  {isAr ? "أحمد سيف — الاستوديو الهادئ" : "Ahmed Saif — In Contemplation"}
                </div>
              </div>
            </div>

            {/* Essays */}
            <div className="lg:col-span-7 space-y-8 text-sm text-[#94a3b8] font-light leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-lg font-medium text-white">
                  {isAr ? "البداية: ذاكرة المكان وعذوبة النغمة" : "Origins: Place & Pure Resonance"}
                </h2>
                <p>
                  {isAr
                    ? "نشأ أحمد سيف في بيئة يمانية أصيلة تتنفس الشعر والغناء. لم تكن الموسيقى بالنسبة له مجرد ترفيه، بل وسيلة لتوثيق المشاعر الإنسانية النبيلة. منذ لمست يداه أوتار العود لأول مرة، أدرك أن النغمة الصادقة لا تتطلب استعراضاً معقداً، بل روحاً تصغي لما وراء الكلمات."
                    : "Raised in an environment rich in poetry and melodic tradition, Ahmed Saif found in the oud a vessel to articulate quiet human emotions without superfluous noise."}
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-medium text-white">
                  {isAr ? "التوزيع الأوركسترالي: احترام التراث وتحديثه" : "Arrangement: Honoring Acoustic Lineage"}
                </h2>
                <p>
                  {isAr
                    ? "عند كتابة التترات الدرامية كمسلسل 'يا مداور الحاجة الضايعة' و'دروب المرجلة'، اعتمد أحمد سيف فلسفة دمج المقامات الشرقية النادرة مع الهارموني الكلاسيكي الهادئ، محافظاً على النبرة الخشبية الدافئة لآلة العود."
                    : "Scoring major Ramadan drama productions, Ahmed weaves microtonal Arab scales into understated orchestral counterpoint, preserving the warm organic grain of raw wood."}
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-medium text-white">
                  {isAr ? "المحافل الدولية والمشاركات" : "International Presence"}
                </h2>
                <p>
                  {isAr
                    ? "مثّل اليمن في محافل كبرى من بينها إكسبو 2025 في أوساكا اليابان، مقدماً تجربة موسيقية ترقى بالهوية التراثية إلى مصاف الفنون الإنسانية العالمية."
                    : "Representing Yemen at Expo Osaka 2025, Ahmed brought historic regional melodies to a worldwide audience with quiet dignity and finesse."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
