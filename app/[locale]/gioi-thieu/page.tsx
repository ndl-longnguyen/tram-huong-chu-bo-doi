import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutPageClient } from "@/components/about/about-page-client"
import { buildAbsoluteUrl, createPageMetadata } from '@/lib/seo'
import type { LocalizedPageProps } from '@/lib/i18n/config'

const metaByLocale: Record<string, { title: string; description: string; keywords: string[] }> = {
  vi: {
    title: 'Giới Thiệu Trầm Hương Chú Bộ Đội | Câu Chuyện Thương Hiệu Trầm Hương Việt Nam',
    description: 'Tìm hiểu về thương hiệu Trầm Hương Chú Bộ Đội - 10 năm kinh nghiệm chế tác trầm hương tự nhiên. Triết lý Tinh - Tín - Tâm. Hơn 1,000 khách hàng tin tưởng khắp Việt Nam.',
    keywords: ['trầm hương chú bộ đội giới thiệu', 'thương hiệu trầm hương việt nam', 'trầm hương tiên phước', 'mỹ nghệ trầm hương quảng nam', 'trầm hương tự nhiên 100%'],
  },
  en: {
    title: 'About Tram Huong Chu Bo Doi | Our Brand Story',
    description: 'Learn about Tram Huong Chu Bo Doi - 10 years of experience crafting natural agarwood. Philosophy of Excellence - Trust - Dedication. Over 1,000 satisfied customers.',
    keywords: ['about chu bo doi agarwood', 'vietnamese agarwood brand', 'agarwood tien phuoc', 'natural agarwood vietnam'],
  },
  zh: {
    title: '关于朱伯队沉香 | 品牌故事',
    description: '了解朱伯队沉香 - 10年天然沉香工艺经验。精·信·心的经营理念。超过1,000名满意客户。',
    keywords: ['朱伯队沉香介绍', '越南沉香品牌', '天然沉香越南'],
  },
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale } = await params
  const meta = metaByLocale[locale] || metaByLocale.vi

  return createPageMetadata({
    locale,
    pathname: '/gioi-thieu',
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  })
}

export default async function AboutPage({ params }: LocalizedPageProps) {
  const { locale } = await params

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: metaByLocale[locale]?.title || metaByLocale.vi.title,
    description: metaByLocale[locale]?.description || metaByLocale.vi.description,
    url: buildAbsoluteUrl(`/${locale}/gioi-thieu`),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: locale === 'en' ? 'Home' : locale === 'zh' ? '首页' : 'Trang chủ', item: buildAbsoluteUrl(`/${locale}`) },
        { '@type': 'ListItem', position: 2, name: locale === 'en' ? 'About Us' : locale === 'zh' ? '关于我们' : 'Giới Thiệu', item: buildAbsoluteUrl(`/${locale}/gioi-thieu`) },
      ],
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <AboutPageClient />
      </main>
      <Footer />
    </div>
  )
}
