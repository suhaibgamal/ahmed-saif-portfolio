import "./globals.css";
import Link from "next/link";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { ArrowUpRight, Home } from "lucide-react";

const sansFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="ar" dir="rtl" data-mode="light" className={sansFont.variable}>
      <body>
        <main className="sw-not-found" dir="rtl" lang="ar">
          <span className="sw-tag">404</span>
          <h1>الصفحة غير موجودة</h1>
          <p>Page not found</p>
          <div className="sw-actions">
            <Link className="sw-btn sw-btn--primary" href="/">
              <Home size={15} aria-hidden="true" />
              <span>الرئيسية</span>
            </Link>
            <Link className="sw-btn sw-btn--outline" href="/en">
              <span>English Home</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
