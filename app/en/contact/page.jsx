import ContactPage from "../../components/ContactPage";
import { getMetadata } from "../../data";

export const dynamic = "force-static";

export const metadata = getMetadata("en", "contact");

export default function Page() {
  return <ContactPage locale="en" />;
}
