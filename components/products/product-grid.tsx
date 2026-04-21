"use client"

import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/i18n/language-context"
import { getProducts } from "@/lib/data/products"

export function ProductGrid() {
  const { locale, t } = useLanguage()
  const products = getProducts()

  return (
    <div className="flex-1">
      {/* Featured Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl md:text-2xl text-foreground uppercase tracking-wider">
            {t("home.featured.title")}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              id={product.slug}
              name={product.name[locale]}
              image={product.images[0]}
              originalPrice={product.originalPrice}
              salePrice={product.price < product.originalPrice ? product.price : undefined}
              rating={product.rating}
              badge={product.badge[locale]}
              badgeType={product.badgeType as any}
            />
          ))}
        </div>
      </div>

      {/* All Products */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl md:text-2xl text-foreground uppercase tracking-wider">
            {locale === 'en' ? 'ALL PRODUCTS' : locale === 'zh' ? '所有产品' : 'TẤT CẢ SẢN PHẨM'}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.slug}
              name={product.name[locale]}
              image={product.images[0]}
              originalPrice={product.originalPrice}
              salePrice={product.price < product.originalPrice ? product.price : undefined}
              rating={product.rating}
              badge={product.badge[locale]}
              badgeType={product.badgeType as any}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-sm"
          >
            {t("common.viewMore")}
          </button>
        </div>
      </div>
    </div>
  )
}
