import AboutPage from "../../components/AboutPage";
import { getMetadata } from "../../data";

export const dynamic = "force-static";

export const metadata = getMetadata("ar", "about");

export default function Page() {
  return <AboutPage locale="ar" />;
}
