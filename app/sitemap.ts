/*
 * @Author: zuo
 * @Date: 2026-01-17 15:12:03
 */
import type {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'http://localhost:3000';

  const pages = ['', '/about'];
  const locales = ['zh', 'en'];

  return locales.flatMap((locale) =>
    pages.map((p) => ({
      url: `${baseUrl}/${locale}${p}`,
      lastModified: new Date()
    }))
  );
}