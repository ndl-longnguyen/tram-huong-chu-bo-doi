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

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
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
