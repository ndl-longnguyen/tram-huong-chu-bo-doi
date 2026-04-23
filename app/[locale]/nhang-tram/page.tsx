"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductFilters } from "@/components/products/product-filters"
import { ProductGrid } from "@/components/products/product-grid"
import { WhyChooseUs } from "@/components/products/why-choose-us"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"
import { categories, products } from "@/lib/products"

export default function BraceletPage() {
  const { locale, getLocalizedPath } = useLanguage()
  const localeKey = locale as "vi" | "en" | "zh"

  const braceletTypes = categories.map(cat => ({
    icon: cat.image,
    label: cat.name,
    slug: cat.slug,
    count: products.filter(p => p.categorySlug === cat.slug).length
  }))

  const content = {
    home: { vi: "Trang chủ", en: "Home", zh: "首页" },
    breadcrumb: { vi: "Nhang Trầm Hương", en: "Agarwood Incense", zh: "沉香香" },
    collection: { vi: "BỘ SƯU TẬP", en: "COLLECTION", zh: "产品系列" },
    title1: { vi: "Nhang Trầm", en: "Agarwood", zh: "沉香香" },
    title2: { vi: "Sạch", en: "Incense", zh: "清洁系列" },
    description: {
      vi: "Nhang trầm hương sạch, không hóa chất, mang lại không gian thanh tịnh và ấm cúng cho ngôi nhà của bạn.",
      en: "Clean agarwood incense, chemical-free, bringing a peaceful and cozy space to your home.",
      zh: "清洁沉香香，无化学添加，为您家带来祥和舒适的空间。"
    },
    products: { vi: "sản phẩm", en: "products", zh: "件产品" },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative pb-16 lg:pb-24 pt-6 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-8">
              <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
                {content.home[locale]}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{content.breadcrumb[locale]}</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                {content.collection[locale]}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 uppercase tracking-tight">
                {content.title1[locale]}
                <span className="block text-primary mt-2">{content.title2[locale]}</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                {content.description[locale]}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {braceletTypes.map((type, index) => (
                <Link
                  key={index}
                  href={getLocalizedPath(`/${type.slug}`)}
                  className="group flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-muted/50 rounded-2xl hover:bg-primary/5 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-4 ring-border group-hover:ring-primary/30 transition-all relative">
                    <Image
                      src={type.icon}
                      alt={type.label[localeKey]}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-foreground font-semibold block group-hover:text-primary transition-colors text-sm md:text-base">
                      {type.label[localeKey]}
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
              <ProductGrid categorySlug="nhang-tram" />
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}
