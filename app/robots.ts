import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: 'https://tramhuongchubodoi.com/sitemap.xml',
    host: 'https://tramhuongchubodoi.com',
  }
}
