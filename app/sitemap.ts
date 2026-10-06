import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog-content'
import { products } from '@/lib/products'
import { SUPPORTED_LOCALES } from '@/lib/i18n/config'
import { buildAbsoluteUrl, parseLocalizedDate } from '@/lib/seo'

const STATIC_PAGES = [
  '',
  '/vong-tay',
  '/nhang-nu',
  '/dot-xong-lu',
  '/tieu-canh',
  '/my-nghe',
  '/qua-tang',
  '/gioi-thieu',
  '/lien-he',
  '/blog',
  '/chinh-sach-dieu-khoan',
  '/chinh-sach-bao-mat',
  '/chinh-sach-van-chuyen',
  '/chinh-sach-bao-hanh',
  '/chinh-sach-doi-tra',
] as const

function buildAlternates(pathname: string) {
  return {
    languages: Object.fromEntries(
      SUPPORTED_LOCALES.map((locale) => [
        locale === 'vi' ? 'vi-VN' : locale === 'en' ? 'en-US' : 'zh-CN',
        buildAbsoluteUrl(`/${locale}${pathname}`),
      ])
    ),
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const locale of SUPPORTED_LOCALES) {
    for (const page of STATIC_PAGES) {
      entries.push({
        url: buildAbsoluteUrl(`/${locale}${page}`),
        lastModified: now,
        changeFrequency: page === '' ? 'daily' : page === '/blog' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : page === '/vong-tay' ? 0.9 : page === '/blog' ? 0.8 : 0.7,
        alternates: buildAlternates(page),
      })
    }

    for (const post of blogPosts) {
      entries.push({
        url: buildAbsoluteUrl(`/${locale}/blog/${post.slug}`),
        lastModified: parseLocalizedDate(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: buildAlternates(`/blog/${post.slug}`),
      })
    }

    for (const product of products) {
      entries.push({
        url: buildAbsoluteUrl(`/${locale}/san-pham/${product.id}`),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: buildAlternates(`/san-pham/${product.id}`),
      })
    }
  }

  return entries
}
