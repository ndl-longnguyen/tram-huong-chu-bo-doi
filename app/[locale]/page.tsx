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

import { getTranslations, type LocalizedPageProps } from '@/lib/i18n/config'
import { createPageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale)

  return createPageMetadata({
    locale,
    pathname: '',
    title: t['meta.home.title'],
    description: t['meta.home.description'],
  })
}

export default async function HomePage({ params }: LocalizedPageProps) {
  const { locale } = await params

  const t = getTranslations(locale)

  // JSON-LD — Localized BreadcrumbList
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t['nav.home'],
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
