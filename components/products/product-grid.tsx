"use client"

import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/i18n/language-context"

export function ProductGrid() {
  const { t } = useLanguage()

  const products = [
    {
      id: "p1",
      name: "Vòng Trầm Bọc Tay 108 hạt cao cấp - Trầm Hương Philip VIP 62mm",
      image: "/products/p1.jpg",
      originalPrice: 25500000,
      salePrice: 22000000,
      rating: 5,
      badgeType: "best" as const,
    },
    {
      id: "p2",
      name: "Vòng Trầm Đeo Tay - Trầm Hương Phổng Châu",
      image: "/products/p2.jpg",
      originalPrice: 16900000,
      rating: 4,
    },
    {
      id: "p3",
      name: "Vòng Tay Trầm Hương Trầm Đen - Trầm Tốc Việt Nam",
      image: "/products/p3.jpg",
      originalPrice: 980000,
      salePrice: 850000,
      rating: 5,
      badgeType: "sale" as const,
    },
    {
      id: "p4",
      name: "Nhẫn Trầm Hương Việt Nam Mọc Ngọc Thật",
      image: "/products/p4.jpg",
      originalPrice: 1250000,
      rating: 5,
    },
    {
      id: "p5",
      name: "Vòng Tay Trầm Hương Cao Cấp Hoàng Ngọc - Trầm Tốc Việt Nam",
      image: "/products/p5.jpg",
      originalPrice: 1990000,
      rating: 5,
      badgeType: "best" as const,
    },
    {
      id: "p6",
      name: "Vòng Đá Trầm Hương Bảo Minh Trầm - Trầm Tốc Việt Nam Vàng",
      image: "/products/p6.jpg",
      originalPrice: 1790000,
      rating: 4,
      badgeType: "best" as const,
    },
    {
      id: "p7",
      name: "Vòng Bọc Tay Trầm Hương Trầm Bản Thị Huân Thần - Trầm TL",
      image: "/products/p7.jpg",
      originalPrice: 1990000,
      rating: 5,
      badgeType: "best" as const,
    },
    {
      id: "p8",
      name: "Vòng Đeo Tay Trầm Hương Tự Trầm Sơn - Trầm Tốc Việt Nam",
      image: "/products/p8.jpg",
      originalPrice: 1990000,
      rating: 5,
      badgeType: "best" as const,
    },
    {
      id: "p9",
      name: "Vòng Đeo Tay Trầm Hương Minh Nguyên - Trầm Tốc Việt Nam",
      image: "/products/p1.jpg",
      originalPrice: 2290000,
      rating: 5,
      badgeType: "best" as const,
    },
    {
      id: "p10",
      name: "Vòng tay Trầm Hương Lộ Bảo Tây Tạng - Trầm Tốc Việt Nam",
      image: "/products/p2.jpg",
      originalPrice: 2790000,
      rating: 4,
      badgeType: "best" as const,
    },
    {
      id: "p11",
      name: "Nhẫn Trầm Hương Kim Trấn Bảo - Trầm Hương Việt Nam VIP Bậc",
      image: "/products/p3.jpg",
      originalPrice: 2790000,
      rating: 5,
      badgeType: "new" as const,
    },
    {
      id: "p12",
      name: "Vòng Trầm Hương 108 hạt Đeo - Trầm Tốc Việt Nam",
      image: "/products/p4.jpg",
      originalPrice: 2990000,
      rating: 5,
      badgeType: "new" as const,
    },
  ]

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
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* All Products */}
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-widest text-sm"
          >
            {t("common.viewMore")}
          </button>
        </div>
      </div>
    </div>
  )
}
