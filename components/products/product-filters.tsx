"use client"

import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const filterGroupsData = {
  vi: [
    { label: "Gia", options: ["Duoi 5 trieu", "5 - 10 trieu", "10 - 20 trieu", "Tren 20 trieu"] },
    { label: "Kich thuoc", options: ["8mm", "10mm", "12mm", "14mm", "16mm"] },
    { label: "Loai Charm", options: ["Charm Vang", "Charm Bac", "Khong Charm"] },
    { label: "Kich Thuoc Hat", options: ["6mm", "8mm", "10mm", "12mm"] },
    { label: "Loai Tram", options: ["Tram Toc", "Tram Song", "Tram Chim"] },
    { label: "Tuoi Tram", options: ["10 nam", "20 nam", "30 nam", "Tren 50 nam"] },
  ],
  en: [
    { label: "Price", options: ["Under 5M VND", "5 - 10M VND", "10 - 20M VND", "Over 20M VND"] },
    { label: "Size", options: ["8mm", "10mm", "12mm", "14mm", "16mm"] },
    { label: "Charm Type", options: ["Gold Charm", "Silver Charm", "No Charm"] },
    { label: "Bead Size", options: ["6mm", "8mm", "10mm", "12mm"] },
    { label: "Agarwood Type", options: ["Oud", "Live Agarwood", "Sunken Agarwood"] },
    { label: "Agarwood Age", options: ["10 years", "20 years", "30 years", "Over 50 years"] },
  ],
  zh: [
    { label: "价格", options: ["5百万越盾以下", "5 - 10百万越盾", "10 - 20百万越盾", "20百万越盾以上"] },
    { label: "尺寸", options: ["8mm", "10mm", "12mm", "14mm", "16mm"] },
    { label: "配件类型", options: ["金配件", "银配件", "无配件"] },
    { label: "珠子尺寸", options: ["6mm", "8mm", "10mm", "12mm"] },
    { label: "沉香类型", options: ["乌沉", "活沉", "沉水"] },
    { label: "沉香年龄", options: ["10年", "20年", "30年", "50年以上"] },
  ],
}

const sortOptions = {
  vi: ["Sap xep theo gia: thap den cao", "Sap xep theo gia: cao den thap", "Moi nhat", "Ban chay nhat"],
  en: ["Price: Low to High", "Price: High to Low", "Newest", "Best Selling"],
  zh: ["价格：从低到高", "价格：从高到低", "最新", "最畅销"],
}

const labels = {
  filter: { vi: "BO LOC", en: "FILTERS", zh: "筛选" },
  sort: { vi: "SAP XEP", en: "SORT BY", zh: "排序" },
  results: { vi: "Hien thi 1 - 24 cua 130 ket qua", en: "Showing 1 - 24 of 130 results", zh: "显示 1 - 24，共130个结果" },
}

export function ProductFilters() {
  const { locale } = useLanguage()
  const filterGroups = filterGroupsData[locale]

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-card rounded-lg p-4 border border-border">
        <h3 className="text-foreground font-semibold mb-4">{labels.filter[locale]}</h3>
        <div className="space-y-4">
          {filterGroups.map((group, index) => (
            <div key={index} className="border-b border-border pb-4 last:border-0">
              <button className="flex items-center justify-between w-full text-left">
                <span className="text-foreground font-medium text-sm">{group.label}</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <span className="text-sm text-muted-foreground">{labels.sort[locale]}</span>
        <select className="flex-1 px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          {sortOptions[locale].map((opt, i) => <option key={i}>{opt}</option>)}
        </select>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        {labels.results[locale]}
      </div>
    </aside>
  )
}
