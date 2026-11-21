import "./globals.css";
import Link from "next/link";
import { Amiri, Vazirmatn } from "next/font/google";
import { ArrowUpRight, Home } from "lucide-react";

const sansFont = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap"
});

const serifFont = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata = {
  title: "404 | Ahmed Saif",
  description: "الصفحة غير موجودة — Page not found",
  robots: { index: false, follow: false }
};

export default function GlobalNotFound() {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-mode="dark"
      className={`${sansFont.variable} ${serifFont.variable}`}
    >
      <body>
        <main className="zn-not-found" dir="rtl" lang="ar">
          <p className="zn-label">404</p>
          <h1>الصفحة غير موجودة</h1>
          <p>Page not found</p>
          <div className="zn-actions">
            <Link className="zn-btn zn-btn--sand" href="/">
              <Home size={15} aria-hidden="true" />
              <span>الرئيسية</span>
            </Link>
            <Link className="zn-btn zn-btn--quiet" href="/en">
              <span>English Home</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
