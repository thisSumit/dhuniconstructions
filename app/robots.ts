import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
    const baseUrl="https://dhuniconstructions.com";
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/contact', 
          '/projects',
          '/projects/*',
          '/legal/*'
        ],
        disallow: [
          '/api/*',
          '/_next/*',
          '/admin/*'
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}