import { content, siteName, siteUrl, studioName } from "./data";

export default function manifest() {
  return {
    id: "/",
    name: `${siteName} | ${studioName}`,
    short_name: siteName,
    description: content.ar.meta.home.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#070a0a",
    theme_color: "#070a0a",
    dir: "rtl",
    lang: "ar",
    categories: ["music", "entertainment"],
    icons: [
      {
        src: "/favicon-square.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any"
      },
      {
        src: "/favicon-square.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "maskable"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any"
      }
    ]
  };
}
