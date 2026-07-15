import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.seo.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
