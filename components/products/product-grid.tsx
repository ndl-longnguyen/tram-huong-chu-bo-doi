"use client"

import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/i18n/language-context"
import { products, getFeaturedProducts, getProductsByCategory } from "@/lib/products"

interface ProductGridProps {
  categorySlug?: string
}

export function ProductGrid({ categorySlug }: ProductGridProps) {
  const { t, locale } = useLanguage()
  const localeKey = locale as "vi" | "en" | "zh"
  
  const displayProducts = categorySlug 
    ? getProductsByCategory(categorySlug) 
    : products

  const featuredProducts = categorySlug
    ? displayProducts.filter(p => p.badgeType === "best" || p.badgeType === "hot").slice(0, 4)
    : getFeaturedProducts(4)

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
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              id={product.id}
              name={product.name[localeKey]}
              image={product.image}
              originalPrice={product.originalPrice}
              salePrice={product.salePrice ?? undefined}
              rating={product.rating}
              badgeType={product.badgeType ?? undefined}
            />
          ))}
        </div>
      </div>

      {/* All Products */}
      <div>
        {displayProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {displayProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  id={product.id}
                  name={product.name[localeKey]}
                  image={product.image}
                  originalPrice={product.originalPrice}
                  salePrice={product.salePrice ?? undefined}
                  rating={product.rating}
                  badgeType={product.badgeType ?? undefined}
                />
              ))}
            </div>
            {/* Load More */}
            <div className="text-center mt-12">
              <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-widest text-sm">
                {t("common.viewMore")}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-20 bg-muted/30 rounded-2xl border-2 border-dashed border-border">
            <p className="text-muted-foreground">
              {locale === 'en' ? 'No products found in this category.' : 
               locale === 'zh' ? '该分类下暂无产品。' : 
               'Chưa có sản phẩm nào trong danh mục này.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
