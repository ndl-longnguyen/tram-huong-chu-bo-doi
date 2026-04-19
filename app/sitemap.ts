import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tramhuongchubodoi.com'
  const locales = ['vi', 'en', 'zh']
  
  const routes = [
    '',
    '/gioi-thieu',
    '/trang-suc',
    '/vong-tay',
    '/nhang-tram',
    '/my-nghe',
    '/qua-tang',
    '/blog',
    '/lien-he',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add entries for each locale and route
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : route === '/trang-suc' || route === '/vong-tay' ? 0.9 : 0.8,
      })
    })
  })

  return sitemapEntries
}
