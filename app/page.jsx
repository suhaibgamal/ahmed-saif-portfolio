import HomePage from "./components/HomePage";
import { getMetadata } from "./data";

export const dynamic = "force-static";

export const metadata = getMetadata("ar", "home");

export default function Page() {
  return <HomePage locale="ar" />;
}
