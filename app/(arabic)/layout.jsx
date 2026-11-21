import "../globals.css";
import { Amiri, Vazirmatn } from "next/font/google";
import { siteName, siteUrl, studioName } from "../data";

const sansFont = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

const serifFont = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap"
});

export const viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#121210" },
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" }
  ],
  width: "device-width",
  initialScale: 1
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  creator: siteName,
  publisher: studioName,
  manifest: "/manifest.webmanifest",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-square.webp", sizes: "512x512", type: "image/webp" }
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem("a7md-mode-style-10");
    var mode = (saved === "light" || saved === "dark") ? saved : "dark";
    document.documentElement.setAttribute("data-mode", mode);
  } catch (e) {
    document.documentElement.setAttribute("data-mode", "dark");
  }
})();
`;

export default function ArabicRootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-mode="dark"
      suppressHydrationWarning
      className={`${sansFont.variable} ${serifFont.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
