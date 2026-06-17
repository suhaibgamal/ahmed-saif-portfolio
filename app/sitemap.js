import {
  getAbsoluteUrl,
  getWorkPath,
  getYoutubeThumbnailUrl,
  pageRoutes,
  siteImage,
  siteLastModified,
  works
} from "./data";

const lastModified = new Date(siteLastModified);
const pages = [
  { page: "home", changeFrequency: "weekly", priority: 1 },
  { page: "works", changeFrequency: "weekly", priority: 0.9 },
  { page: "about", changeFrequency: "monthly", priority: 0.8 },
  { page: "contact", changeFrequency: "monthly", priority: 0.7 }
];

export default function sitemap() {
  const pageEntries = pages.flatMap(({ page, changeFrequency, priority }) => {
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

  const workEntries = works.flatMap((work) => {
    const arUrl = getAbsoluteUrl(getWorkPath("ar", work));
    const enUrl = getAbsoluteUrl(getWorkPath("en", work));
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
        changeFrequency: "monthly",
        priority: 0.72,
        alternates,
        images: [getYoutubeThumbnailUrl(work)]
      },
      {
        url: enUrl,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.68,
        alternates,
        images: [getYoutubeThumbnailUrl(work)]
      }
    ];
  });

  return [...pageEntries, ...workEntries];
}
