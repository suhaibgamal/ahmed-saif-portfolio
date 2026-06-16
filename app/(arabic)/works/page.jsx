import WorksPage from "../../components/WorksPage";
import { getMetadata } from "../../data";

export const dynamic = "force-static";

export const metadata = getMetadata("ar", "works");

export default function Page() {
  return <WorksPage locale="ar" />;
}
