import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Sliders, Activity } from "lucide-react";
import { content, getLocalePath, works } from "../data";
import SiteChrome from "./SiteChrome";

export default function WorksPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <SiteChrome locale={locale} page="works">
      <div className="console-page-header">
        <div className="console-container">
          <div className="console-strip-badge">
            <Activity size={14} className="console-green-icon" />
            <span>{isAr ? "مصفوفة قنوات الماستر الكاملة // استوديو A7MD" : "MASTER CONSOLE REPERTOIRE // COMPLETE DESK"}</span>
          </div>
          <h1 className="console-page-title">
            {isAr ? "أرشيف قنوات الإنتاج والتترات" : "Master Audio Channels & Soundtracks"}
          </h1>
          <p className="console-page-desc">
            {isAr
              ? "مستودع الألحان والتترات والأغاني المستقلة التي تم تلحينها وغناؤها ومعالجتها هندسياً في استوديو A7MD."
              : "Complete chronological catalog of television soundtracks, master singles, and studio compositions by Ahmed Saif."}
          </p>
        </div>
      </div>

      <section className="console-section">
        <div className="console-container">
          <div className="console-catalog-grid">
            {works.map((work, index) => (
              <article key={work.slug} className="console-catalog-card">
                <div className="console-catalog-top">
                  <span className="console-catalog-ch">CH_{String(index + 1).padStart(2, "0")}</span>
                  <div className="console-catalog-leds">
                    <span className="led-sm-green on" />
                    <span className="led-sm-amber" />
                  </div>
                  <span className="console-catalog-year">{work.year}</span>
                </div>

                <div className="console-catalog-media">
                  <Image
                    src={work.image}
                    alt={isAr ? work.arTitle : work.enTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="console-catalog-img"
                  />
                  <div className="console-catalog-overlay" />
                </div>

                <div className="console-catalog-body">
                  <span className="console-catalog-cat">
                    {isAr ? work.category : work.categoryEn}
                  </span>

                  <h2 className="console-catalog-title">
                    <Link href={`${getLocalePath(locale, "works")}/${work.slug}`}>
                      {isAr ? work.arTitle : work.enTitle}
                    </Link>
                  </h2>

                  <p className="console-catalog-desc">
                    {isAr ? work.description : work.descriptionEn}
                  </p>

                  <div className="console-catalog-footer">
                    <Link
                      href={`${getLocalePath(locale, "works")}/${work.slug}`}
                      className="console-catalog-btn"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{isAr ? "سولو القناة" : "Solo Channel"}</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
