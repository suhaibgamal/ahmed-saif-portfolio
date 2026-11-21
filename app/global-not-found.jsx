import "./globals.css";
import Link from "next/link";
import { Cairo } from "next/font/google";
import { ArrowUpRight, Home } from "lucide-react";

const sansFont = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
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
        <main className="bn-not-found" dir="rtl" lang="ar">
          <div className="bn-tile bn-not-found__card">
            <span className="bn-pill">404</span>
            <h1>الصفحة غير موجودة</h1>
            <p>Page not found</p>
            <div className="bn-actions">
              <Link className="bn-btn bn-btn--primary" href="/">
                <Home size={15} aria-hidden="true" />
                <span>الرئيسية</span>
              </Link>
              <Link className="bn-btn bn-btn--soft" href="/en">
                <span>English Home</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
