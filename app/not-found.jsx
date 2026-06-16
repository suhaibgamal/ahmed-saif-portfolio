import Link from "next/link";
import { Home, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "404 | Ahmed Saif",
  description: "الصفحة غير موجودة — Page not found",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <div className="site-shell site-shell--inner" dir="rtl" lang="ar">
      <main className="not-found">
        <p className="eyebrow">404</p>
        <h1>الصفحة غير موجودة</h1>
        <p>Page not found</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">
            <Home aria-hidden="true" size={18} />
            <span>الرئيسية</span>
          </Link>
          <Link className="button button-secondary" href="/en">
            <span>English Home</span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </main>
    </div>
  );
}
