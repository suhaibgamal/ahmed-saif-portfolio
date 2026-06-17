import { notFound } from "next/navigation";
import WorkDetailPage from "../../../components/WorkDetailPage";
import { getWorkBySlug, getWorkMetadata, getWorkSlug, works } from "../../../data";

export const dynamic = "force-static";

export function generateStaticParams() {
  return works.map((work) => ({
    slug: getWorkSlug(work)
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return {};
  }

  return getWorkMetadata("ar", work);
}

export default async function Page({ params }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return <WorkDetailPage locale="ar" work={work} />;
}
