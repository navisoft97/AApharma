import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/content';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.seo.url;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
