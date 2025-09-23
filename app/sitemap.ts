import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
        url: 'https://dhuniconstructions.com/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://dhuniconstructions.com/projects',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: 'https://dhuniconstructions.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://dhuniconstructions.com/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://dhuniconstructions.com/artic',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: 'https://dhuniconstructions.com/atlantic',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: 'https://dhuniconstructions.com/neptune',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: 'https://dhuniconstructions.com/uranus',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
    ]
  }