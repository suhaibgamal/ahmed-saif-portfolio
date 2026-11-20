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

function classifyWork(work) {
  const type = work.enType.toLowerCase();
  if (type.includes("series") || type.includes("live") || type.includes("collaborative")) {
    return "milestones";
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
      category: classifyWork(work),
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
      <section className="sov-page-head">
        <div className="sov-container">
          <p className="eyebrow">{t.worksPage.eyebrow}</p>
          <h1 className="sov-page-title">{t.worksPage.title}</h1>
          <p className="sov-page-lead">{t.worksPage.body}</p>
        </div>
      </section>

      <WorkVideoCatalog
        tracks={tracks}
        locale={locale}
        featuredLabel={t.worksPage.featuredLabel}
        catalogLabel={t.worksPage.catalogLabel}
        detailLabel={isAr ? "تفاصيل العمل" : "Release details"}
        closeLabel={isAr ? "إغلاق المشغل" : "Close player"}
      />

      <section className="sov-section sov-section--subtle-band">
        <div className="sov-container sov-inline-cta">
          <div>
            <p className="eyebrow">{t.contactPage.eyebrow}</p>
            <h2 className="sov-h3">{t.worksPage.cta}</h2>
          </div>
          <Link
            className="btn btn-primary"
            href={getLocalePath(locale, "contact")}
          >
            <span>{t.contactPage.primaryAction}</span>
            <DirectionalArrow size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
