import HomePage from "../../components/HomePage";
import { getMetadata } from "../../data";

export const dynamic = "force-static";

export const metadata = getMetadata("en", "home");

export default function EnglishPage() {
  return <HomePage locale="en" />;
}
