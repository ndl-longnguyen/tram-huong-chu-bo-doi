import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPageClient } from "@/components/blog/blog-page-client"

type PageProps = { params: Promise<{ locale: string }> }

const metaByLocale: Record<string, { title: string; description: string; keywords: string[] }> = {
  vi: {
    title: 'Blog Trầm Hương | Kiến Thức Phong Thủy & Sức Khỏe Trầm Hương Việt Nam',
    description: 'Chia sẻ kiến thức chuyên sâu về trầm hương Việt Nam - cách phân biệt trầm thật giả, ý nghĩa phong thủy, cách bảo quản và lịch sử trầm hương. Bài viết từ chuyên gia Trầm Hương Chú Bộ Đội.',
    keywords: ['blog trầm hương', 'kiến thức trầm hương', 'phong thủy trầm hương', 'phân biệt trầm hương thật giả', 'bảo quản trầm hương', 'lịch sử trầm hương việt nam'],
  },
  en: {
    title: 'Agarwood Blog | Knowledge, Feng Shui & Health Tips - Chu Bo Doi',
    description: 'In-depth knowledge about Vietnamese agarwood - how to distinguish real vs fake, feng shui meaning, storage tips and history. Expert articles from Chu Bo Doi Agarwood.',
    keywords: ['agarwood blog', 'agarwood knowledge', 'agarwood feng shui', 'identify fake agarwood', 'agarwood storage tips', 'vietnamese agarwood history'],
  },
  zh: {
    title: '沉香博客 | 沉香知识、风水与健康 - 朱伯队',
    description: '关于越南沉香的深入知识 - 如何辨别真假沉香、风水意义、保存技巧和历史。朱伯队沉香专家文章。',
    keywords: ['沉香博客', '沉香知识', '沉香风水', '辨别真假沉香', '沉香保存', '越南沉香历史'],
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const meta = metaByLocale[locale] || metaByLocale.vi

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        'vi-VN': '/vi/blog',
        'en-US': '/en/blog',
        'zh-CN': '/zh/blog',
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://tramhuongchubodoi.com/${locale}/blog`,
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: meta.title }],
    },
  }
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: metaByLocale[locale]?.title || metaByLocale.vi.title,
    description: metaByLocale[locale]?.description || metaByLocale.vi.description,
    url: `https://tramhuongchubodoi.com/${locale}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Trầm Hương Chú Bộ Đội',
      logo: { '@type': 'ImageObject', url: 'https://tramhuongchubodoi.com/logo.png' },
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
        <BlogPageClient />
      </main>
      <Footer />
    </div>
  )
}
