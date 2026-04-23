"use client"

import Link from "next/link"
import { getNewArrivals } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/i18n/language-context"

export function NewArrivals() {
  const { t, getLocalizedPath, locale } = useLanguage()
  const localeKey = locale as "vi" | "en" | "zh"

  const newProducts = getNewArrivals(6)

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-primary" />
            <h2 className="font-serif text-2xl md:text-3xl text-foreground uppercase tracking-widest text-sm font-bold">
              {t("home.new.title")}
            </h2>
            <div className="h-px w-16 bg-primary" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {newProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product} 
              name={product.name[localeKey]}
              salePrice={product.salePrice ?? undefined}
              badgeType={product.badgeType ?? undefined}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href={getLocalizedPath("/trang-suc")}
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-wider text-sm font-bold"
          >
            {t("common.viewMore")}
          </Link>
        </div>
      </div>
    </section>
  )
}
