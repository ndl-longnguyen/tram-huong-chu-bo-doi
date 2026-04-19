"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductFilters } from "@/components/products/product-filters"
import { ProductGrid } from "@/components/products/product-grid"
import { WhyChooseUs } from "@/components/products/why-choose-us"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

const braceletTypes = [
  { 
    icon: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=100&q=80", 
    label: { vi: "Vòng Tay 108 Hạt", en: "108 Beads Bracelet", zh: "108颗珠子手链" }, 
    count: 45 
  },
  { 
    icon: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&q=80", 
    label: { vi: "Vòng Tay Phong Thủy", en: "Feng Shui Bracelet", zh: "风水手链" }, 
    count: 38 
  },
  { 
    icon: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=100&q=80", 
    label: { vi: "Vòng Tay Bọc Vàng", en: "Gold-wrapped Bracelet", zh: "包金手链" }, 
    count: 28 
  },
  { 
    icon: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=100&q=80", 
    label: { vi: "Vòng Tay Đơn Giản", en: "Simple Bracelet", zh: "简约手链" }, 
    count: 52 
  },
]

export default function BraceletPage() {
  const { locale, getLocalizedPath } = useLanguage()

  const content = {
    home: { vi: "Trang chủ", en: "Home", zh: "首页" },
    breadcrumb: { vi: "Vòng Tay Trầm Hương", en: "Agarwood Bracelets", zh: "沉香手链" },
    collection: { vi: "BO SUU TAP", en: "COLLECTION", zh: "产品系列" },
    title1: { vi: "Vong Tay Tram Huong", en: "Agarwood Bracelets", zh: "沉香手链" },
    title2: { vi: "Cao Cap", en: "Premium", zh: "高端系列" },
    description: {
      vi: "Vong tay tram huong cao cap, duoc che tac tu 100% tram huong tu nhien, mang den nang luong tich cuc va binh an cho nguoi deo.",
      en: "Premium agarwood bracelets, crafted from 100% natural agarwood, bringing positive energy and peace to the wearer.",
      zh: "高端沉香手链，采用100%天然沉香制作，为佩戴者带来正能量和平安。"
    },
    products: { vi: "san pham", en: "products", zh: "件产品" },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 text-sm mb-8">
              <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
                {content.home[locale]}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{content.breadcrumb[locale]}</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                {content.collection[locale]}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                {content.title1[locale]}
                <span className="block text-primary mt-2">{content.title2[locale]}</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {content.description[locale]}
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {braceletTypes.map((type, index) => (
                <Link
                  key={index}
                  href={getLocalizedPath(`/vong-tay/${type.label.vi.toLowerCase().replace(/ /g, '-')}`)}
                  className="group flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-muted/50 rounded-2xl hover:bg-primary/5 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-4 ring-border group-hover:ring-primary/30 transition-all">
                    <img
                      src={type.icon}
                      alt={type.label[locale]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-foreground font-semibold block group-hover:text-primary transition-colors text-sm md:text-base">
                      {type.label[locale]}
                    </span>
                    <span className="text-muted-foreground text-xs md:text-sm">{type.count} {content.products[locale]}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <ProductFilters />
              <ProductGrid />
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}
