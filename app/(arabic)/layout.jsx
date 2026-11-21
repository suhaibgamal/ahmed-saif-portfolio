import "../globals.css";
import { Cairo } from "next/font/google";
import { siteName, siteUrl, studioName } from "../data";

const sansFont = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap"
});

export const viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f3f5" },
    { media: "(prefers-color-scheme: dark)", color: "#101114" }
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
    var saved = localStorage.getItem("a7md-mode-style-6");
    var mode = (saved === "light" || saved === "dark") ? saved : "light";
    document.documentElement.setAttribute("data-mode", mode);
  } catch (e) {
    document.documentElement.setAttribute("data-mode", "light");
  }
})();
`;

export default function ArabicRootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-mode="light"
      suppressHydrationWarning
      className={sansFont.variable}
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
