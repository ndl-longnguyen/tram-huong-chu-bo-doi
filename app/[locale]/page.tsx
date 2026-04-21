import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { IntroSection } from "@/components/home/intro-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { NewArrivals } from "@/components/home/new-arrivals"
import { CollectionBanner } from "@/components/home/collection-banner"
import { CommunitySection } from "@/components/home/community-section"
import { ExploreSection } from "@/components/home/explore-section"
import { PressSection } from "@/components/home/press-section"

type PageProps = { params: Promise<{ locale: string }> }

const metaByLocale: Record<string, { title: string; description: string; keywords: string[] }> = {
  vi: {
    title: 'Trầm Hương Chú Bộ Đội - Trang Sức Trầm Hương Cao Cấp Chính Hãng',
    description: 'Thương hiệu trầm hương uy tín hàng đầu Việt Nam. Chuyên vòng tay trầm hương, nhang trầm, mỹ nghệ trầm hương 100% tự nhiên. Bảo hành trọn đời. Hotline: 0765.942.942',
    keywords: ['trầm hương chú bộ đội', 'vòng tay trầm hương', 'trang sức trầm hương', 'trầm hương việt nam', 'nhang trầm hương cao cấp'],
  },
  en: {
    title: 'Tram Huong Chu Bo Doi - Premium Vietnamese Agarwood Jewelry',
    description: 'Vietnam\'s leading authentic agarwood brand. Specializing in agarwood bracelets, incense, and artworks - 100% natural. Lifetime warranty. Hotline: 0765.942.942',
    keywords: ['agarwood jewelry', 'vietnamese agarwood', 'agarwood bracelet', 'natural agarwood', 'chu bo doi agarwood'],
  },
  zh: {
    title: '朱伯队沉香 - 越南高端沉香珠宝',
    description: '越南领先的正品沉香品牌。专注沉香手链、沉香线香、工艺品 - 100%天然。终身保修。热线：0765.942.942',
    keywords: ['沉香珠宝', '越南沉香', '沉香手链', '天然沉香', '朱伯队沉香'],
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
      canonical: `/${locale}`,
      languages: {
        'vi-VN': '/vi',
        'en-US': '/en',
        'zh-CN': '/zh',
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://tramhuongchubodoi.com/${locale}`,
      locale: locale === 'vi' ? 'vi_VN' : locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-image.png'],
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params

  // JSON-LD — Localized BreadcrumbList
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'en' ? 'Home' : locale === 'zh' ? '首页' : 'Trang Chủ',
        item: `https://tramhuongchubodoi.com/${locale}`,
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <IntroSection />
        <FeaturedProducts />
        <NewArrivals />
        <CollectionBanner />
        <CommunitySection />
        <ExploreSection />
        <PressSection />
      </main>
      <Footer />
    </div>
  )
}
