import {
  getAbsoluteUrl,
  getWorkCopy,
  getWorkPath,
  getYoutubeEmbedUrl,
  getYoutubeThumbnailUrl,
  siteName,
  youtubeChannelUrl,
  works
} from "../data";

export const dynamic = "force-static";

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function videoEntry(locale, work) {
  const copy = getWorkCopy(work, locale);

  return `<url>
<loc>${escapeXml(getAbsoluteUrl(getWorkPath(locale, work)))}</loc>
<video:video>
<video:thumbnail_loc>${escapeXml(getYoutubeThumbnailUrl(work))}</video:thumbnail_loc>
<video:title>${escapeXml(copy.title)}</video:title>
<video:description>${escapeXml(copy.note)}</video:description>
<video:player_loc allow_embed="yes">${escapeXml(getYoutubeEmbedUrl(work))}</video:player_loc>
<video:publication_date>${escapeXml(work.uploadDate)}</video:publication_date>
<video:family_friendly>yes</video:family_friendly>
<video:uploader info="${escapeXml(youtubeChannelUrl)}">${escapeXml(siteName)}</video:uploader>
</video:video>
</url>`;
}

export function GET() {
  const entries = works
    .flatMap((work) => [videoEntry("ar", work), videoEntry("en", work)])
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
