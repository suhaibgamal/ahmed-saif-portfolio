import "./globals.css";
import Link from "next/link";
import { El_Messiri, Readex_Pro } from "next/font/google";
import { ArrowUpRight, Home } from "lucide-react";

const displayFont = El_Messiri({
  subsets: ["arabic", "latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap"
});

const sansFont = Readex_Pro({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
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
        <main className="sym-not-found" dir="rtl" lang="ar">
          <p className="sym-kicker">404</p>
          <h1>الصفحة غير موجودة</h1>
          <p>Page not found</p>
          <div className="sym-actions">
            <Link className="sym-btn sym-btn--gold" href="/">
              <Home size={15} aria-hidden="true" />
              <span>الرئيسية</span>
            </Link>
            <Link className="sym-btn sym-btn--outline" href="/en">
              <span>English Home</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
