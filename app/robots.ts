import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
    const baseUrl="https://dhuniconstructions.com";
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/contact', '/projects', '/legal' ],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}