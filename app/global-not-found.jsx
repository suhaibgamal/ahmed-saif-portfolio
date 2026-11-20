import "./globals.css";
import Link from "next/link";
import { Readex_Pro } from "next/font/google";
import { ArrowUpRight, Home } from "lucide-react";

const sansFont = Readex_Pro({
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
        <div className="air-shell" dir="rtl" lang="ar">
          <main className="air-not-found">
            <span className="air-chip">404</span>
            <h1>الصفحة غير موجودة</h1>
            <p>Page not found</p>
            <div className="air-actions">
              <Link className="air-btn air-btn--primary" href="/">
                <Home aria-hidden="true" size={16} />
                <span>العودة للرئيسية</span>
              </Link>
              <Link className="air-btn air-btn--secondary" href="/en">
                <span>English Home</span>
                <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
