import { getAbsoluteUrl, pageRoutes, siteImage } from "./data";

// Build-time timestamp — automatically reflects the latest deploy date
const lastModified = new Date();
const pages = [
  { page: "home", changeFrequency: "weekly", priority: 1 },
  { page: "works", changeFrequency: "weekly", priority: 0.9 },
  { page: "about", changeFrequency: "monthly", priority: 0.8 },
  { page: "contact", changeFrequency: "monthly", priority: 0.7 }
];

export default function sitemap() {
  return pages.flatMap(({ page, changeFrequency, priority }) => {
    const arUrl = getAbsoluteUrl(pageRoutes.ar[page]);
    const enUrl = getAbsoluteUrl(pageRoutes.en[page]);
    const alternates = {
      languages: {
        ar: arUrl,
        en: enUrl,
        "x-default": arUrl
      }
    };

    return [
      {
        url: arUrl,
        lastModified,
        changeFrequency,
        priority,
        alternates,
        images: [getAbsoluteUrl(siteImage.path)]
      },
      {
        url: enUrl,
        lastModified,
        changeFrequency,
        priority: Math.max(priority - 0.05, 0.1),
        alternates,
        images: [getAbsoluteUrl(siteImage.path)]
      }
    ];
  });
}
