"use client"

import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { getFeaturedProducts } from "@/lib/products"

export function FeaturedProducts() {
  const { t, getLocalizedPath, locale } = useLanguage()
  const localeKey = locale as "vi" | "en" | "zh"

  const featuredProducts = getFeaturedProducts(8)

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider uppercase font-bold text-xs">
            {t("home.featured.subtitle")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 uppercase">
            {t("home.featured.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("home.featured.desc")}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name[localeKey]}
              image={product.image}
              originalPrice={product.originalPrice}
              salePrice={product.salePrice ?? undefined}
              rating={product.rating}
              badgeType={product.badgeType ?? undefined}
              priority={index < 4}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href={getLocalizedPath("/vong-tay")}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group uppercase tracking-wider text-sm font-bold"
          >
            {t("home.featured.viewAll")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
