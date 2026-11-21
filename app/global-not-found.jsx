import "./globals.css";
import Link from "next/link";
import { IBM_Plex_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { ArrowUpRight, Home } from "lucide-react";

const displayFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
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
      className={`${displayFont.variable} ${monoFont.variable}`}
    >
      <body>
        <main className="hf-not-found" dir="rtl" lang="ar">
          <div className="hf-chassis hf-not-found__box">
            <span className="hf-mono">404</span>
            <h1>الصفحة غير موجودة</h1>
            <p>Page not found</p>
            <div className="hf-actions">
              <Link className="hf-btn hf-btn--brass" href="/">
                <Home size={15} aria-hidden="true" />
                <span>الرئيسية</span>
              </Link>
              <Link className="hf-btn hf-btn--metal" href="/en">
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
