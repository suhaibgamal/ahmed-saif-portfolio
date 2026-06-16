import AboutPage from "../../../components/AboutPage";
import { getMetadata } from "../../../data";

export const dynamic = "force-static";

export const metadata = getMetadata("en", "about");

export default function Page() {
  return <AboutPage locale="en" />;
}
