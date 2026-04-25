import type { MetadataRoute } from 'next'

const BASE_URL = 'https://tramhuongchubodoi.com'
const LOCALES = ['vi', 'en', 'zh']
const PAGES = [
  '', 
  '/vong-tay', 
  '/nhang-nu', 
  '/dot-xong-lu', 
  '/tieu-canh', 
  '/den-ngu', 
  '/my-nghe', 
  '/qua-tang',
  '/gioi-thieu', 
  '/lien-he', 
  '/blog', 
  '/chinh-sach-dieu-khoan',
  '/chinh-sach-bao-mat',
  '/chinh-sach-van-chuyen',
  '/chinh-sach-bao-hanh'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    for (const page of PAGES) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : page === '/blog' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page === '/vong-tay' ? 0.9 : page === '/blog' ? 0.8 : 0.7,
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
