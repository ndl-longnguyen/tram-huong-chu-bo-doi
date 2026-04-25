"use client"

import { ChevronDown, Check, Minus, Plus, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useCallback, useState } from "react"

export function ProductFilters({ isMobile = false }: { isMobile?: boolean }) {
  const { t, locale } = useLanguage()
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  
  const [openGroups, setOpenGroups] = useState<string[]>(["price", "size", "type"])

  const toggleGroup = (id: string) => {
    setOpenGroups(prev => 
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    )
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (params.get(name) === value) {
        params.delete(name)
      } else {
        params.set(name, value)
      }
      return params.toString()
    },
    [searchParams]
  )

  const activePrice = searchParams.get("price")
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "")
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "")

  const handleManualPriceApply = () => {
    const params = new URLSearchParams(searchParams.toString())
    if (minPrice) params.set("minPrice", minPrice)
    else params.delete("minPrice")
    
    if (maxPrice) params.set("maxPrice", maxPrice)
    else params.delete("maxPrice")

    // If manual price is set, clear the preset range filter
    params.delete("price")
    
    router.push(pathname + "?" + params.toString(), { scroll: false })
  }

  const filterGroups = [
    {
      id: "price",
      label: t("products.filter.price"),
      options: [
        { label: t("products.filter.price.under5m"), value: "under-5m" },
        { label: t("products.filter.price.5-10m"), value: "5-10m" },
        { label: t("products.filter.price.10-20m"), value: "10-20m" },
        { label: t("products.filter.price.over20m"), value: "over-20m" }
      ],
    }
  ]

  return (
    <aside className={`${isMobile ? "w-full" : "hidden lg:block w-64"} flex-shrink-0`}>
      <div className={`${isMobile ? "" : "bg-card rounded-lg p-4 border border-border"} text-xs`}>
        {!isMobile && (
          <h3 className="text-foreground font-bold mb-4 uppercase tracking-wider">{t("products.filters")}</h3>
        )}
        
        <div className="space-y-4">
          {filterGroups.map((group) => {
            const isOpen = openGroups.includes(group.id)
            return (
              <div key={group.id} className="border-b border-border pb-4 last:border-0">
                <button 
                  onClick={() => toggleGroup(group.id)}
                  className="flex items-center justify-between w-full text-left mb-3 group"
                >
                  <span className="text-foreground font-bold uppercase group-hover:text-primary transition-colors">{group.label}</span>
                  {isOpen ? (
                    <Minus className="w-3 h-3 text-muted-foreground" />
                  ) : (
                    <Plus className="w-3 h-3 text-muted-foreground" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-1 duration-200">
                    {/* Manual Price Range */}
                    <div className="space-y-3 px-1">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">{t("products.filter.price.from")} (VNĐ)</label>
                          <input 
                            type="number" 
                            placeholder="0"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            className="w-full px-2 py-1.5 rounded-md border border-border bg-muted/50 focus:outline-none focus:ring-1 focus:ring-primary text-xs"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">{t("products.filter.price.to")} (VNĐ)</label>
                          <input 
                            type="number" 
                            placeholder="999..."
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="w-full px-2 py-1.5 rounded-md border border-border bg-muted/50 focus:outline-none focus:ring-1 focus:ring-primary text-xs"
                          />
                        </div>
                      </div>
                      <button 
                        onClick={handleManualPriceApply}
                        className="w-full py-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-md font-bold transition-all text-[10px] uppercase tracking-widest"
                      >
                        {t("products.filter.price.apply")}
                      </button>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-[10px] uppercase">
                        <span className="bg-card px-2 text-muted-foreground font-medium">{t("products.filter.price.orQuickSelect")}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {group.options.map((option) => {
                        const isActive = searchParams.get(group.id) === option.value
                        return (
                          <button
                            key={option.value}
                            onClick={() => {
                              const params = new URLSearchParams(searchParams.toString())
                              params.delete("minPrice")
                              params.delete("maxPrice")
                              setMinPrice("")
                              setMaxPrice("")
                              
                              if (params.get(group.id) === option.value) {
                                params.delete(group.id)
                              } else {
                                params.set(group.id, option.value)
                              }
                              router.push(pathname + "?" + params.toString(), { scroll: false })
                            }}
                            className={`flex items-center justify-between w-full text-left py-1.5 px-3 rounded-lg transition-all ${
                              isActive 
                                ? "bg-primary text-primary-foreground font-bold shadow-sm" 
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            <span>{option.label}</span>
                            {isActive && <Check className="w-3 h-3" />}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Clear Filters */}
      {(activePrice || searchParams.get("minPrice") || searchParams.get("maxPrice")) && (
        <button 
          onClick={() => {
            setMinPrice("")
            setMaxPrice("")
            router.push(pathname)
          }}
          className="mt-4 w-full py-3 text-xs font-bold text-red-500 hover:bg-red-50 rounded-xl border border-red-200 transition-all flex items-center justify-center gap-2"
        >
          <X className="w-3 h-3" />
          {t("products.filter.clearAll")}
        </button>
      )}

      {!isMobile && (
        <div className="mt-6 flex items-center gap-4 text-xs">
          <span className="text-muted-foreground font-bold">{t("products.sort")}</span>
          <div className="flex-1 relative">
            <select 
              value={searchParams.get("sort") || "newest"}
              onChange={(e) => {
                router.push(pathname + "?" + createQueryString("sort", e.target.value), { scroll: false })
              }}
              className="w-full px-3 py-2 border border-border rounded bg-card text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
            >
              <option value="newest">{t("products.sort.newest")}</option>
              <option value="price-low-high">{t("products.sort.priceLowHigh")}</option>
              <option value="price-high-low">{t("products.sort.priceHighLow")}</option>
              <option value="best-selling">{t("products.sort.bestSelling")}</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      )}


    </aside>
  )
}
