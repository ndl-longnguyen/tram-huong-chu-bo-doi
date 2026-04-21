import type { MetadataRoute } from 'next'

const BASE_URL = 'https://tramhuongchubodoi.com'
const LOCALES = ['vi', 'en', 'zh']
const PAGES = ['', '/trang-suc', '/gioi-thieu', '/lien-he', '/blog', '/nhang-tram', '/vong-tay', '/my-nghe', '/qua-tang']

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    for (const page of PAGES) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : page === '/blog' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page === '/trang-suc' ? 0.9 : page === '/blog' ? 0.8 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map(l => [
              l === 'vi' ? 'vi-VN' : l === 'en' ? 'en-US' : 'zh-CN',
              `${BASE_URL}/${l}${page}`,
            ])
          ),
        },
      })
    }
  }

  return entries
}
