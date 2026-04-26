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
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl hidden lg:block" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl hidden lg:block" />

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

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <ProductFilters />
              <ProductGrid categorySlug={categorySlug} />
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}
