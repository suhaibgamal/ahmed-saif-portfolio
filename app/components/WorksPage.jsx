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
      <section className="sw-page-head">
        <span className="sw-tag">{t.worksPage.eyebrow}</span>
        <h1 className="sw-page-title">{t.worksPage.title}</h1>
        <p className="sw-body">{t.worksPage.body}</p>
      </section>

      <WorkVideoCatalog
        tracks={tracks}
        locale={locale}
        detailLabel={isAr ? "بطاقة العمل" : "Dossier"}
      />

      <section className="sw-band sw-cta-row">
        <div>
          <span className="sw-tag">{t.contactPage.eyebrow}</span>
          <h2 className="sw-h3">{t.worksPage.cta}</h2>
        </div>
        <Link className="sw-btn sw-btn--primary" href={getLocalePath(locale, "contact")}>
          <span>{t.contactPage.primaryAction}</span>
          <DirectionalArrow size={15} aria-hidden="true" />
        </Link>
      </section>
    </SiteChrome>
  );
}
