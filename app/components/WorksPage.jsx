import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  content,
  getLocalePath,
  getWorkCopy,
  getWorkKey,
  getWorkPath,
  works
} from "../data";
import SiteChrome from "./SiteChrome";
import WorkVideoCatalog from "./WorkVideoCatalog";

function classify(work) {
  const type = work.enType.toLowerCase();
  if (type.includes("series") || type.includes("live") || type.includes("collaborative")) {
    return "stage";
  }
  if (type.includes("video") || type.includes("gharaa") || type.includes("medley")) {
    return "visual";
  }
  return "singles";
}

export default function WorksPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const DirectionalArrow = isAr ? ArrowLeft : ArrowRight;

  const tracks = works.map((work) => {
    const copy = getWorkCopy(work, locale);
    return {
      key: getWorkKey(work),
      year: work.year,
      youtubeId: work.youtubeId,
      durationSeconds: work.durationSeconds,
      category: classify(work),
      title: copy.title,
      subtitle: copy.subtitle,
      type: copy.type,
      mood: copy.mood,
      note: copy.note,
      href: getWorkPath(locale, work)
    };
  });

  return (
    <SiteChrome locale={locale} page="works">
      <section className="air-page-intro">
        <div className="air-container">
          <p className="air-kicker">{t.worksPage.eyebrow}</p>
          <h1 className="air-page-title">{t.worksPage.title}</h1>
          <p className="air-page-lead">{t.worksPage.body}</p>
        </div>
      </section>

      <WorkVideoCatalog
        tracks={tracks}
        locale={locale}
        detailLabel={isAr ? "صفحة العمل" : "Release details"}
        closeLabel={isAr ? "إغلاق" : "Close"}
      />

      <section className="air-section air-section--tinted">
        <div className="air-container">
          <div className="air-cta-bar">
            <div>
              <p className="air-kicker">{t.contactPage.eyebrow}</p>
              <h2 className="air-h3">{t.worksPage.cta}</h2>
            </div>
            <Link className="air-btn air-btn--primary" href={getLocalePath(locale, "contact")}>
              <span>{t.contactPage.primaryAction}</span>
              <DirectionalArrow size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
