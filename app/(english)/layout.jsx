import "../globals.css";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { siteName, siteUrl, studioName } from "../data";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap"
});

export const viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#151618" },
    { media: "(prefers-color-scheme: light)", color: "#e9ebee" }
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
    var saved = localStorage.getItem("a7md-mode-style-8");
    var mode = (saved === "light" || saved === "dark") ? saved : "dark";
    document.documentElement.setAttribute("data-mode", mode);
  } catch (e) {
    document.documentElement.setAttribute("data-mode", "dark");
  }
})();
`;

export default function EnglishRootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-mode="dark"
      suppressHydrationWarning
      className={`${displayFont.variable} ${monoFont.variable}`}
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
