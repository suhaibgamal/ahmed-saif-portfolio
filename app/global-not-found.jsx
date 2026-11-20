import "./globals.css";
import Link from "next/link";
import { Aref_Ruqaa, Tajawal } from "next/font/google";
import { ArrowUpRight, Home } from "lucide-react";

const sansFont = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap"
});

const poeticFont = Aref_Ruqaa({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-poetic",
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
      data-mode="light"
      className={`${sansFont.variable} ${poeticFont.variable}`}
    >
      <body>
        <main className="kin-not-found" dir="rtl" lang="ar">
          <p className="kin-eyebrow">404</p>
          <h1>الصفحة غير موجودة</h1>
          <p>Page not found</p>
          <div className="kin-actions">
            <Link className="kin-btn kin-btn--primary" href="/">
              <Home size={15} aria-hidden="true" />
              <span>الرئيسية</span>
            </Link>
            <Link className="kin-btn kin-btn--outline" href="/en">
              <span>English Home</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
