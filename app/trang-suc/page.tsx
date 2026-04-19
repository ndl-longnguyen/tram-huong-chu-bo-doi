import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductFilters } from "@/components/products/product-filters"
import { ProductGrid } from "@/components/products/product-grid"
import { WhyChooseUs } from "@/components/products/why-choose-us"
import { StatsSection } from "@/components/products/stats-section"
import { TestimonialsSection } from "@/components/products/testimonials-section"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Trang chủ
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Trang Sức Trầm Hương</span>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { icon: "💎", label: "Bông Tai" },
                { icon: "💍", label: "Nhẫn" },
                { icon: "📿", label: "Vòng Tay Trầm Hương" },
                { icon: "✝️", label: "Chuỗi Cổ" },
                { icon: "🔗", label: "Mặt Dây Chuyền" },
              ].map((category, index) => (
                <Link
                  key={index}
                  href={`/trang-suc/${category.label.toLowerCase().replace(/ /g, '-')}`}
                  className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-sm font-medium">{category.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Filters and Products */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <ProductFilters />
            <ProductGrid />
          </div>
        </div>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Stats Section */}
        <StatsSection />

        {/* Testimonials */}
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
