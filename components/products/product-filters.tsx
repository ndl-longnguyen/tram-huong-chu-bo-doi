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
  const activeSize = searchParams.get("size")
  const activeType = searchParams.get("type")

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
    },
    {
      id: "size",
      label: t("products.filter.size"),
      options: [
        { label: "8mm", value: "8mm" },
        { label: "10mm", value: "10mm" },
        { label: "12mm", value: "12mm" },
        { label: "14mm", value: "14mm" },
        { label: "16mm", value: "16mm" }
      ],
    },
    {
      id: "type",
      label: t("products.filter.type"),
      options: [
        { label: t("products.filter.type.toc"), value: "toc" },
        { label: t("products.filter.type.song"), value: "song" },
        { label: t("products.filter.type.chim"), value: "chim" }
      ],
    },
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
                  <div className="space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    {group.options.map((option) => {
                      const isActive = searchParams.get(group.id) === option.value
                      return (
                        <button
                          key={option.value}
                          onClick={() => {
                            router.push(pathname + "?" + createQueryString(group.id, option.value), { scroll: false })
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
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Clear Filters */}
      {(activePrice || activeSize || activeType) && (
        <button 
          onClick={() => router.push(pathname)}
          className="mt-4 w-full py-3 text-xs font-bold text-red-500 hover:bg-red-50 rounded-xl border border-red-200 transition-all flex items-center justify-center gap-2"
        >
          <X className="w-3 h-3" />
          {locale === 'en' ? 'CLEAR ALL FILTERS' : locale === 'zh' ? '清除所有筛选' : 'XÓA TẤT CẢ BỘ LỌC'}
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
