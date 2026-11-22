import "../globals.css";
import { Readex_Pro } from "next/font/google";

const sansFont = Readex_Pro({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

export const viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1012" }
  ],
  width: "device-width",
  initialScale: 1
};

export const metadata = {
  title: "أحمد سيف — معرض خيارات تصميم الموقع الرسمي",
  description: "استعرض ١٠ تصاميم مختلفة وحديثة للموقع الرسمي للفنان أحمد سيف واختر الأنسب.",
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-square.webp", sizes: "512x512", type: "image/webp" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

const initScript = `
(function() {
  try {
    var saved = localStorage.getItem("a7md-showcase-mode");
    var mode = (saved === "light" || saved === "dark") ? saved : "light";
    document.documentElement.setAttribute("data-mode", mode);
  } catch (e) {
    document.documentElement.setAttribute("data-mode", "light");
  }
})();
`;

export default function ArabicShowcaseLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-mode="light"
      suppressHydrationWarning
      className={sansFont.variable}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
