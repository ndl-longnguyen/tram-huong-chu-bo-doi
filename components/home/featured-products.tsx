"use client"

import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function FeaturedProducts() {
  const { t, getLocalizedPath } = useLanguage()

  const featuredProducts = [
    {
      id: "1",
      name: t("product.1.name"),
      image: "/products/vong-tay/vong-tay-1.jpg",
      originalPrice: 21500000,
      salePrice: 18500000,
      rating: 5,
      badgeType: "best" as const,
    },
    {
      id: "2",
      name: t("product.2.name"),
      image: "/products/vong-tay/vong-tay-2.jpg",
      originalPrice: 15900000,
      rating: 5,
    },
    {
      id: "3",
      name: t("product.3.name"),
      image: "/products/vong-tay/vong-tay-3.jpg",
      originalPrice: 18500000,
      salePrice: 16500000,
      rating: 5,
      badgeType: "sale" as const,
    },
    {
      id: "4",
      name: t("product.4.name"),
      image: "/products/vong-tay/vong-tay-4.jpg",
      originalPrice: 12900000,
      rating: 4,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href={getLocalizedPath("/trang-suc")}
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
