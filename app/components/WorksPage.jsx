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
      <section className="gal-page-head">
        <div className="gal-wrap">
          <p className="gal-caption">{t.worksPage.eyebrow}</p>
          <h1 className="gal-page-title">{t.worksPage.title}</h1>
          <p className="gal-lead">{t.worksPage.body}</p>
        </div>
      </section>

      <WorkVideoCatalog
        tracks={tracks}
        locale={locale}
        detailLabel={isAr ? "صفحة العمل" : "Release sheet"}
      />

      <section className="gal-section gal-section--plinth">
        <div className="gal-wrap gal-cta-inline">
          <div>
            <p className="gal-caption">{t.contactPage.eyebrow}</p>
            <h2 className="gal-h2">{t.worksPage.cta}</h2>
          </div>
          <Link className="gal-btn gal-btn--solid" href={getLocalePath(locale, "contact")}>
            <span>{t.contactPage.primaryAction}</span>
            <DirectionalArrow size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
