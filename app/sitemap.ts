import type { MetadataRoute } from "next";
import {
  FEATURED,
  TRENDING,
  NEW_WALLPAPERS,
} from "../data/wallpapers";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://mrdragocreations.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified },
    { url: `${SITE_URL}/wallpapers`, lastModified },
    { url: `${SITE_URL}/featured`, lastModified },
    { url: `${SITE_URL}/trending`, lastModified },
    { url: `${SITE_URL}/new`, lastModified },
    { url: `${SITE_URL}/contact`, lastModified },
  ];

  const wallpapers = [
    ...FEATURED,
    ...TRENDING,
    ...NEW_WALLPAPERS,
  ];

  const unique = Array.from(
    new Map(
      wallpapers.map((wallpaper) => [
        wallpaper.id,
        wallpaper,
      ])
    ).values()
  );

  const wallpaperRoutes: MetadataRoute.Sitemap =
    unique.map((wallpaper) => ({
      url: `${SITE_URL}/wallpapers/${wallpaper.id}`,
      lastModified,
    }));

  return [...staticRoutes, ...wallpaperRoutes];
}
