"use client"
import { Suspense } from 'react'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductFilters } from "@/components/products/product-filters"
import { ProductGrid } from "@/components/products/product-grid"
import { WhyChooseUs } from "@/components/products/why-choose-us"
import { ChevronRight, ShieldCheck, Flame, Wind, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"
import { categories, products } from "@/lib/products"

interface CategoryPageProps {
  categorySlug: string;
}

export default function CategoryPage({ categorySlug }: CategoryPageProps) {
  const { t, locale, getLocalizedPath } = useLanguage()
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

  const renderGuide = () => {
    let guideKey = ""
    let icon = <Sparkles className="w-8 h-8 text-primary" />

    if (categorySlug === "vong-tay") {
      guideKey = "bracelet"
      icon = <ShieldCheck className="w-8 h-8 text-primary" />
    } else if (categorySlug === "nhang-nu") {
      guideKey = "incense"
      icon = <Flame className="w-8 h-8 text-primary" />
    } else if (categorySlug === "dot-xong-lu") {
      guideKey = "burner"
      icon = <Wind className="w-8 h-8 text-primary" />
    }

    if (!guideKey) return null

    return (
      <section className="py-12 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-20 h-20 bg-card rounded-[24px] flex items-center justify-center mb-8 shadow-xl shadow-primary/10 border border-primary/10 rotate-3">
              {icon}
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground uppercase tracking-[0.2em] mb-4">
              {t(`products.guide.${guideKey}.title`)}
            </h2>
            <div className="w-24 h-1.5 bg-primary/20 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => {
              const titleKey = `products.guide.${guideKey}.g${i}.title`
              const descKey = `products.guide.${guideKey}.g${i}.desc`

              return (
                <div key={i} className="bg-card p-10 rounded-[40px] border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                  <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center text-primary font-serif text-xl font-bold mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 relative z-10">
                    {i.toString().padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 relative z-10 group-hover:text-primary transition-colors uppercase tracking-tight">
                    {t(titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
                    {t(descKey)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
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
                {t('category.home')}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{category.name[localeKey]}</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                {t('category.collection')}
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
              <Suspense fallback={<div className="w-full h-24 rounded-lg bg-muted/30 animate-pulse" />}>
                <ProductFilters />
              </Suspense>
              <Suspense fallback={<div className="flex-1 h-96 rounded-lg bg-muted/30 animate-pulse" />}>
                <ProductGrid categorySlug={categorySlug} />
              </Suspense>
            </div>
          </div>
        </section>

        {renderGuide()}

        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}
