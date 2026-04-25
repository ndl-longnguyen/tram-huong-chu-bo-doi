"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/i18n/language-context"
import { products, getFeaturedProducts, getProductsByCategory, getCategoryBySlug } from "@/lib/products"
import { ChevronDown, SlidersHorizontal, X, Phone, MessageCircle, MessageSquare, Search } from "lucide-react"
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
  const [visibleCount, setVisibleCount] = useState(24)
  
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
      const sizeValue = sizeFilter.replace("mm", "")
      items = items.filter(p => 
        p.specs.size.vi.includes(sizeValue) || 
        p.specs.size.en.includes(sizeValue) || 
        p.specs.size.zh.includes(sizeValue)
      )
    }

    if (typeFilter) {
      const searchTerms = {
        toc: ["tốc", "toc"],
        song: ["sống", "live"],
        chim: ["chìm", "sinking"]
      }[typeFilter as "toc" | "song" | "chim"] || [typeFilter]

      items = items.filter(p => 
        searchTerms.some(term => 
          p.name[localeKey].toLowerCase().includes(term.toLowerCase()) || 
          p.description[localeKey].toLowerCase().includes(term.toLowerCase())
        )
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
      <div className="mb-6">
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-xl md:text-2xl text-foreground uppercase tracking-wider">
              {categorySlug 
                ? (getCategoryBySlug(categorySlug)?.name[localeKey] || categorySlug)
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
                .replace("{end}", Math.min(visibleCount, sortedProducts.length).toString())
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
                        {t("products.showResults")} ({sortedProducts.length})
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {sortedProducts.slice(0, visibleCount).map((product) => (
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
            {visibleCount < sortedProducts.length && (
              <div className="text-center mt-8">
                <button 
                  onClick={() => setVisibleCount(prev => prev + 12)}
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-widest text-sm"
                >
                  {t("common.viewMore")}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 px-6 bg-muted/20 rounded-3xl border-2 border-dashed border-border/50 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-primary/50" />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-4 uppercase tracking-wider">
              {t("products.noFound")}
            </h3>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              {t("products.noFoundDesc")}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:0765942942"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:shadow-lg transition-all active:scale-95 text-sm uppercase tracking-widest"
              >
                <Phone className="w-4 h-4" />
                Hotline
              </a>
              <a 
                href="https://zalo.me/0765942942"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0068ff] text-white rounded-full font-bold hover:shadow-lg transition-all active:scale-95 text-sm uppercase tracking-widest"
              >
                <svg viewBox="0 0 48 48" className="w-5 h-5">
                  <path fill="#eee" d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z" />
                  <path fill="#0068ff" d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z" />
                  <path fill="#0068ff" d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z" />
                  <path fill="#0068ff" d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z" />
                  <path fill="#0068ff" d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z" />
                </svg>
                Zalo
              </a>
              <a 
                href="https://m.me/tramhuongchubodoi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0084ff] text-white rounded-full font-bold hover:shadow-lg transition-all active:scale-95 text-sm uppercase tracking-widest"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.504 3.688 7.203V22l3.405-1.867c.91.252 1.873.388 2.907.388 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm.994 12.442l-2.545-2.716-4.97 2.716 5.467-5.804 2.609 2.716 4.906-2.716-5.467 5.804z" />
                </svg>
                Messenger
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
