import "./globals.css";
import Link from "next/link";
import { Readex_Pro } from "next/font/google";

const sansFont = Readex_Pro({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata = {
  title: "معرض التصاميم | Ahmed Saif",
  robots: { index: false, follow: false }
};

export default function GlobalNotFound() {
  return (
    <html lang="ar" dir="rtl" data-mode="light" className={sansFont.variable}>
      <body>
        <main className="sc-not-found" dir="rtl" lang="ar">
          <h1>هذه الصفحة غير موجودة</h1>
          <Link className="sc-btn sc-btn--primary" href="/">
            العودة إلى معرض التصاميم
          </Link>
        </main>
      </body>
    </html>
  );
}
