import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Header } from "@/components/header"
import { HeroSection } from "@/components/home/hero-section"

// Lazy load components that are not immediately visible
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer))
const IntroSection = dynamic(() => import("@/components/home/intro-section").then(mod => mod.IntroSection))
const FeaturedProducts = dynamic(() => import("@/components/home/featured-products").then(mod => mod.FeaturedProducts))
const NewArrivals = dynamic(() => import("@/components/home/new-arrivals").then(mod => mod.NewArrivals))
const CollectionBanner = dynamic(() => import("@/components/home/collection-banner").then(mod => mod.CollectionBanner))
const CommunitySection = dynamic(() => import("@/components/home/community-section").then(mod => mod.CommunitySection))
const ExploreSection = dynamic(() => import("@/components/home/explore-section").then(mod => mod.ExploreSection))
const PressSection = dynamic(() => import("@/components/home/press-section").then(mod => mod.PressSection))

type PageProps = { params: Promise<{ locale: string }> }

const metaByLocale: Record<string, { title: string; description: string; keywords: string[] }> = {
  vi: {
    title: 'Trầm Hương Chú Bộ Đội - Vòng Tay Trầm Hương Cao Cấp Chính Hãng',
    description: 'Thương hiệu trầm hương uy tín hàng đầu Việt Nam. Chuyên vòng tay trầm hương, nhang trầm, mỹ nghệ trầm hương 100% tự nhiên. Bảo hành trọn đời. Hotline: 0765.942.942',
    keywords: ['trầm hương chú bộ đội', 'vòng tay trầm hương', 'vòng tay trầm hương cao cấp', 'trầm hương việt nam', 'nhang trầm hương cao cấp'],
  },
  en: {
    title: 'Tram Huong Chu Bo Doi - Premium Vietnamese Agarwood Bracelets',
    description: 'Vietnam\'s leading authentic agarwood brand. Specializing in agarwood bracelets, incense, and artworks - 100% natural. Lifetime warranty. Hotline: 0765.942.942',
    keywords: ['agarwood bracelets', 'vietnamese agarwood', 'agarwood bracelet', 'natural agarwood', 'chu bo doi agarwood'],
  },
  zh: {
    title: '朱伯队沉香 - 越南高端沉香手链',
    description: '越南领先的正品沉香品牌。专注沉香手链、沉香线香、工艺品 - 100%天然。终身保修。热线：0765.942.942',
    keywords: ['沉香手链', '越南沉香', '沉香手链', '天然沉香', '朱伯队沉香'],
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
        name: locale === 'en' ? 'Home' : locale === 'zh' ? '首页' : 'Trang chủ',
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
