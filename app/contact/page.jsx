import ContactPage from "../components/ContactPage";
import { getMetadata } from "../data";

export const dynamic = "force-static";

export const metadata = getMetadata("ar", "contact");

export default function Page() {
  return <ContactPage locale="ar" />;
}
