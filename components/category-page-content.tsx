"use client"
import { Suspense } from 'react'
import { useParams } from 'next/navigation'

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

interface CategoryPageProps {
  categorySlug: string;
}

export default function CategoryPage({ categorySlug }: CategoryPageProps) {
  const { locale, getLocalizedPath } = useLanguage()
  const localeKey = locale as "vi" | "en" | "zh"
  
  const category = categories.find(c => c.slug === categorySlug)
  
  if (!category) {
    return <div>Category not found</div>
  }

  const categoryTypes = categories.map(cat => ({
    icon: cat.image,
    label: cat.name,
    slug: cat.slug,
    count: products.filter(p => p.categorySlug === cat.slug).length
  }))

  const content = {
    home: { vi: "Trang chủ", en: "Home", zh: "首页" },
    collection: { vi: "BỘ SƯU TẬP", en: "COLLECTION", zh: "产品系列" },
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
              <span className="text-foreground font-medium">{category.name[localeKey]}</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                {content.collection[locale]}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 uppercase tracking-tight">
                {category.name[localeKey]}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                {category.description[localeKey]}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
              {categoryTypes.map((type, index) => (
                <Link
                  key={index}
                  href={getLocalizedPath(`/${type.slug}`)}
                  className={`group flex flex-col items-center gap-3 md:gap-4 p-4 rounded-2xl transition-all duration-300 ${
                    type.slug === categorySlug ? "bg-primary/10 ring-1 ring-primary/30" : "bg-muted/50 hover:bg-primary/5 hover:shadow-lg"
                  }`}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary/30 transition-all relative">
                    <Image
                      src={type.icon}
                      alt={type.label[localeKey]}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <span className={`font-semibold block transition-colors text-xs md:text-sm ${
                      type.slug === categorySlug ? "text-primary" : "text-foreground group-hover:text-primary"
                    }`}>
                      {type.label[localeKey]}
                    </span>
                    <span className="text-muted-foreground text-[10px] md:text-xs">{type.count} {content.products[locale]}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
                <ProductGrid categorySlug={categorySlug} />
              </Suspense>
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}
