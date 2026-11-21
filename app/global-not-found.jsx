import "./globals.css";
import Link from "next/link";
import { Noto_Naskh_Arabic, Tajawal } from "next/font/google";
import { ArrowUpRight, Home } from "lucide-react";

const serifFont = Noto_Naskh_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["500", "700"],
  variable: "--font-serif",
  display: "swap"
});

const sansFont = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
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
      data-mode="light"
      className={`${serifFont.variable} ${sansFont.variable}`}
    >
      <body>
        <main className="ed-not-found" dir="rtl" lang="ar">
          <p className="ed-kicker">404</p>
          <h1>الصفحة غير موجودة</h1>
          <p>Page not found</p>
          <div className="ed-actions">
            <Link className="ed-btn ed-btn--primary" href="/">
              <Home size={15} aria-hidden="true" />
              <span>الرئيسية</span>
            </Link>
            <Link className="ed-btn ed-btn--outline" href="/en">
              <span>English Home</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
