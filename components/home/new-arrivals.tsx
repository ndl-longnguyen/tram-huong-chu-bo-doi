"use client"

import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/i18n/language-context"

export function NewArrivals() {
  const { t, getLocalizedPath } = useLanguage()

  const newProducts = [
    {
      id: "5",
      name: t("product.5.name"),
      image: "/products/p5.jpg",
      originalPrice: 35000000,
      rating: 5,
      badgeType: "new" as const,
    },
    {
      id: "6",
      name: t("product.6.name"),
      image: "/products/p6.jpg",
      originalPrice: 16500000,
      salePrice: 14500000,
      rating: 5,
      badgeType: "best" as const,
    },
    {
      id: "7",
      name: t("product.7.name"),
      image: "/products/p7.jpg",
      originalPrice: 850000,
      rating: 4,
    },
    {
      id: "8",
      name: t("product.8.name"),
      image: "/products/p8.jpg",
      originalPrice: 22000000,
      salePrice: 19500000,
      rating: 5,
      badgeType: "hot" as const,
    },
    {
      id: "9",
      name: t("product.9.name"),
      image: "/products/p1.jpg",
      originalPrice: 12000000,
      rating: 5,
    },
    {
      id: "10",
      name: t("product.10.name"),
      image: "/products/p2.jpg",
      originalPrice: 28000000,
      salePrice: 25500000,
      rating: 5,
      badgeType: "new" as const,
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
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
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
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
