import "./globals.css";
import Link from "next/link";
import { Amiri, IBM_Plex_Sans_Arabic } from "next/font/google";
import { ArrowUpRight, Home } from "lucide-react";

const displayFont = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap"
});

const sansFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata = {
  title: "404 | Ahmed Saif",
  description: "الصفحة غير موجودة — Page not found",
  robots: {
    index: false,
    follow: false
  }
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
        <div className="site-shell" dir="rtl" lang="ar">
          <main className="not-found">
            <p className="eyebrow">404</p>
            <h1>الصفحة غير موجودة</h1>
            <p className="not-found__sub">Page not found</p>
            <div className="action-row">
              <Link className="btn btn-primary" href="/">
                <Home aria-hidden="true" size={16} />
                <span>العودة للرئيسية</span>
              </Link>
              <Link className="btn btn-secondary" href="/en">
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
