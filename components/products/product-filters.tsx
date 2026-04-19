"use client"

import { ChevronDown } from "lucide-react"

const filterGroups = [
  {
    label: "Giá",
    options: ["Dưới 5 triệu", "5 - 10 triệu", "10 - 20 triệu", "Trên 20 triệu"],
  },
  {
    label: "Kích thước",
    options: ["8mm", "10mm", "12mm", "14mm", "16mm"],
  },
  {
    label: "Loại Charm",
    options: ["Charm Vàng", "Charm Bạc", "Không Charm"],
  },
  {
    label: "Kích Thước Hạt",
    options: ["6mm", "8mm", "10mm", "12mm"],
  },
  {
    label: "Loại Trầm",
    options: ["Trầm Tốc", "Trầm Sống", "Trầm Chìm"],
  },
  {
    label: "Tuổi Trầm",
    options: ["10 năm", "20 năm", "30 năm", "Trên 50 năm"],
  },
]

export function ProductFilters() {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-card rounded-lg p-4 border border-border">
        <h3 className="text-foreground font-semibold mb-4">BỘ LỌC</h3>
        
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

      {/* Sort */}
      <div className="mt-6 flex items-center gap-4">
        <span className="text-sm text-muted-foreground">SẮP XẾP</span>
        <select className="flex-1 px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Sắp xếp theo giá: thấp đến cao</option>
          <option>Sắp xếp theo giá: cao đến thấp</option>
          <option>Mới nhất</option>
          <option>Bán chạy nhất</option>
        </select>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        Hiển thị 1 - 24 của 130 kết quả
      </div>
    </aside>
  )
}
