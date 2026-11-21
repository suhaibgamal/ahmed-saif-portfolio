import "./globals.css";
import Link from "next/link";
import { Almarai, Noto_Kufi_Arabic } from "next/font/google";
import { ArrowUpRight, Home } from "lucide-react";

const displayFont = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap"
});

const sansFont = Almarai({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
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
      className={`${displayFont.variable} ${sansFont.variable}`}
    >
      <body>
        <main className="gal-not-found" dir="rtl" lang="ar">
          <p className="gal-caption">404</p>
          <h1>الصفحة غير موجودة</h1>
          <p>Page not found</p>
          <div className="gal-actions">
            <Link className="gal-btn gal-btn--solid" href="/">
              <Home size={15} aria-hidden="true" />
              <span>الرئيسية</span>
            </Link>
            <Link className="gal-btn gal-btn--line" href="/en">
              <span>English Home</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
