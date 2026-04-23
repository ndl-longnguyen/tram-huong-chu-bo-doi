import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductFilters } from "@/components/products/product-filters"
import { ProductGrid } from "@/components/products/product-grid"
import { WhyChooseUs } from "@/components/products/why-choose-us"
import { StatsSection } from "@/components/products/stats-section"
import { TestimonialsSection } from "@/components/products/testimonials-section"
import { ProductsHero } from "@/components/products/products-hero"

type PageProps = { params: Promise<{ locale: string }> }

const metaByLocale: Record<string, { title: string; description: string; keywords: string[] }> = {
  vi: {
    title: 'Trang Sức Trầm Hương Cao Cấp | Vòng Tay, Nhẫn, Dây Chuyền Trầm Hương Chính Hãng',
    description: 'Bộ sưu tập trang sức trầm hương 100% tự nhiên - Vòng tay trầm hương, nhẫn trầm hương, dây chuyền trầm hương. Chế tác thủ công, bảo hành trọn đời. Hotline: 0765.942.942',
    keywords: ['trang sức trầm hương', 'vòng tay trầm hương cao cấp', 'nhẫn trầm hương', 'dây chuyền trầm hương', 'mua trang sức trầm hương', 'trầm hương 100% tự nhiên'],
  },
  en: {
    title: 'Premium Agarwood Jewelry | Bracelets, Rings & Necklaces - Chu Bo Doi',
    description: '100% natural agarwood jewelry collection - Bracelets, rings, necklaces. Handcrafted with lifetime warranty. Shop authentic Vietnamese agarwood jewelry. Hotline: 0765.942.942',
    keywords: ['agarwood jewelry', 'agarwood bracelet', 'agarwood ring', 'agarwood necklace', 'buy agarwood jewelry', 'natural agarwood'],
  },
  zh: {
    title: '高端沉香珠宝 | 手链、戒指、项链 - 朱伯队',
    description: '100%天然沉香珠宝系列 - 手链、戒指、项链。手工制作，终身保修。购买正品越南沉香珠宝。热线：0765.942.942',
    keywords: ['沉香珠宝', '沉香手链', '沉香戒指', '沉香项链', '购买沉香珠宝', '天然沉香'],
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
      canonical: `/${locale}/trang-suc`,
      languages: {
        'vi-VN': '/vi/trang-suc',
        'en-US': '/en/trang-suc',
        'zh-CN': '/zh/trang-suc',
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://tramhuongchubodoi.com/${locale}/trang-suc`,
      locale: locale === 'vi' ? 'vi_VN' : locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: meta.title }],
    },
  }
}

export default async function ProductsPage({ params }: PageProps) {
  const { locale } = await params

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: metaByLocale[locale]?.title || metaByLocale.vi.title,
    description: metaByLocale[locale]?.description || metaByLocale.vi.description,
    url: `https://tramhuongchubodoi.com/${locale}/trang-suc`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: locale === 'en' ? 'Home' : locale === 'zh' ? '首页' : 'Trang chủ', item: `https://tramhuongchubodoi.com/${locale}` },
        { '@type': 'ListItem', position: 2, name: locale === 'en' ? 'Jewelry' : locale === 'zh' ? '珠宝' : 'Trang Sức', item: `https://tramhuongchubodoi.com/${locale}/trang-suc` },
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
        {/* Client component handles locale-based content display */}
        <ProductsHero />

        {/* Filters and Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <Suspense fallback={<div className="w-64 h-96 bg-muted animate-pulse rounded-xl" />}>
                <ProductFilters />
              </Suspense>
              <Suspense fallback={<div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-muted rounded-xl" />
                ))}
              </div>}>
                <ProductGrid categorySlug="trang-suc" />
              </Suspense>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <StatsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
