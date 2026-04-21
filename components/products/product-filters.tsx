"use client"

import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function ProductFilters() {
  const { t } = useLanguage()

  const filterGroups = [
    {
      label: t("products.filter.price"),
      options: [
        t("products.filter.price.under5m"),
        t("products.filter.price.5-10m"),
        t("products.filter.price.10-20m"),
        t("products.filter.price.over20m")
      ],
    },
    {
      label: t("products.filter.size"),
      options: ["8mm", "10mm", "12mm", "14mm", "16mm"],
    },
    {
      label: t("products.filter.charm"),
      options: [
        t("products.filter.charm.gold"),
        t("products.filter.charm.silver"),
        t("products.filter.charm.none")
      ],
    },
    {
      label: t("products.filter.type"),
      options: [
        t("products.filter.type.toc"),
        t("products.filter.type.song"),
        t("products.filter.type.chim")
      ],
    },
    {
      label: t("products.filter.age"),
      options: [
        t("products.filter.age.10y"),
        t("products.filter.age.20y"),
        t("products.filter.age.30y"),
        t("products.filter.age.over50y")
      ],
    },
  ]

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-card rounded-lg p-4 border border-border text-xs">
        <h3 className="text-foreground font-bold mb-4 uppercase tracking-wider">{t("products.filters")}</h3>
        
        <div className="space-y-4">
          {filterGroups.map((group, index) => (
            <div key={index} className="border-b border-border pb-4 last:border-0">
              <button className="flex items-center justify-between w-full text-left group">
                <span className="text-foreground font-bold uppercase group-hover:text-primary transition-colors">{group.label}</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="mt-6 flex items-center gap-4 text-xs">
        <span className="text-muted-foreground font-bold">{t("products.sort")}</span>
        <select className="flex-1 px-3 py-2 border border-border rounded bg-card text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
          <option>{t("products.sort.priceLowHigh")}</option>
          <option>{t("products.sort.priceHighLow")}</option>
          <option>{t("products.sort.newest")}</option>
          <option>{t("products.sort.bestSelling")}</option>
        </select>
      </div>

      <div className="mt-4 text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">
        {t("products.results").replace("{start}", "1").replace("{end}", "24").replace("{total}", "130")}
      </div>
    </aside>
  )
}
