"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/i18n/language-context"
import { products, getFeaturedProducts, getProductsByCategory } from "@/lib/products"
import { ChevronDown, SlidersHorizontal, X } from "lucide-react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Drawer } from "vaul"
import { ProductFilters } from "./product-filters"

interface ProductGridProps {
  categorySlug?: string
}

export function ProductGrid({ categorySlug }: ProductGridProps) {
  const { t, locale } = useLanguage()
  const localeKey = locale as "vi" | "en" | "zh"
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  
  const sortBy = searchParams.get("sort") || "newest"
  const priceFilter = searchParams.get("price")
  const sizeFilter = searchParams.get("size")
  const typeFilter = searchParams.get("type")

  const activeFilterCount = [priceFilter, sizeFilter, typeFilter].filter(Boolean).length
  
  const baseProducts = useMemo(() => {
    let items = categorySlug 
      ? getProductsByCategory(categorySlug) 
      : products

    // Apply Filters
    if (priceFilter) {
      items = items.filter(p => {
        const price = p.salePrice || p.originalPrice
        if (priceFilter === "under-5m") return price < 5000000
        if (priceFilter === "5-10m") return price >= 5000000 && price <= 10000000
        if (priceFilter === "10-20m") return price >= 10000000 && price <= 20000000
        if (priceFilter === "over-20m") return price > 20000000
        return true
      })
    }

    if (sizeFilter) {
      items = items.filter(p => p.specs.size.includes(sizeFilter.replace("mm", "")))
    }

    if (typeFilter) {
      items = items.filter(p => 
        p.name.vi.toLowerCase().includes(typeFilter.toLowerCase()) || 
        p.description.vi.toLowerCase().includes(typeFilter.toLowerCase())
      )
    }

    return items
  }, [categorySlug, priceFilter, sizeFilter, typeFilter])

  const sortedProducts = useMemo(() => {
    const items = [...baseProducts]
    switch (sortBy) {
      case "price-low-high":
        return items.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
      case "price-high-low":
        return items.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
      case "best-selling":
        return items.sort((a, b) => b.reviewCount - a.reviewCount)
      case "newest":
      default:
        return items
    }
  }, [baseProducts, sortBy])

  const featuredProducts = categorySlug
    ? sortedProducts.filter(p => p.badgeType === "best" || p.badgeType === "hot").slice(0, 4)
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

      {/* All Products Section with Header */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-xl md:text-2xl text-foreground uppercase tracking-wider">
              {categorySlug 
                ? t(`nav.${categorySlug === 'trang-suc' ? 'jewelry' : 
                          categorySlug === 'vong-tay' ? 'bracelet' : 
                          categorySlug === 'nhang-tram' ? 'incense' : 
                          categorySlug === 'my-nghe' ? 'art' : 
                          categorySlug === 'qua-tang' ? 'gift' : 
                          categorySlug.replace("-", "")}`) 
                : t("products.title")}
            </h2>
            <span className="text-xs text-muted-foreground font-medium bg-muted px-2 py-1 rounded-full">
              {sortedProducts.length} {t("products.items")}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Result Counter */}
            <div className="hidden md:block text-xs text-muted-foreground font-medium">
              {t("products.results")
                .replace("{start}", "1")
                .replace("{end}", Math.min(24, sortedProducts.length).toString())
                .replace("{total}", sortedProducts.length.toString())}
            </div>
            {/* Sort Dropdown - Synced with Sidebar */}
            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => {
                  const params = new URLSearchParams(searchParams.toString())
                  params.set("sort", e.target.value)
                  window.history.pushState(null, "", "?" + params.toString())
                }}
                className="appearance-none bg-card border border-border rounded-full pl-4 pr-10 py-2 text-xs font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer hover:border-primary transition-colors"
              >
                <option value="newest">{t("products.sort.newest")}</option>
                <option value="price-low-high">{t("products.sort.priceLowHigh")}</option>
                <option value="price-high-low">{t("products.sort.priceHighLow")}</option>
                <option value="best-selling">{t("products.sort.bestSelling")}</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none group-hover:text-primary transition-colors" />
            </div>

            {/* Mobile Filter Trigger */}
            <Drawer.Root>
              <Drawer.Trigger asChild>
                <button className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-full hover:bg-muted transition-colors relative">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">{t("products.filters")}</span>
                  {activeFilterCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center rounded-full">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm" />
                <Drawer.Content className="bg-background flex flex-col rounded-t-[32px] h-[85vh] mt-24 fixed bottom-0 left-0 right-0 z-50 outline-none">
                  <div className="p-4 bg-background rounded-t-[32px] flex-1 overflow-y-auto">
                    <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted mb-8" />
                    <div className="flex items-center justify-between mb-6 px-2">
                      <Drawer.Title className="text-xl font-serif text-foreground uppercase tracking-widest">
                        {t("products.filters")}
                      </Drawer.Title>
                      <Drawer.Close asChild>
                        <button className="p-2 hover:bg-muted rounded-full transition-colors">
                          <X className="w-5 h-5" />
                        </button>
                      </Drawer.Close>
                    </div>
                    <div className="px-2">
                      <ProductFilters isMobile />
                    </div>
                  </div>
                  <div className="p-4 border-t border-border bg-muted/30">
                    <Drawer.Close asChild>
                      <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl uppercase tracking-widest text-sm shadow-lg shadow-primary/20">
                        {locale === 'en' ? 'Show Results' : locale === 'zh' ? '显示结果' : 'Xem kết quả'} ({sortedProducts.length})
                      </button>
                    </Drawer.Close>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </div>
        </div>

        {sortedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sortedProducts.map((product) => (
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
