import { ProductCard } from "@/components/product-card"
import Link from "next/link"

const products = [
  {
    id: "p1",
    name: "Vòng Trầm Bọc Tay 108 hạt cao cấp - Trầm Hương Philip VIP 62mm",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    originalPrice: 25500000,
    salePrice: 22000000,
    rating: 5,
    badge: "Bán chạy",
    badgeColor: "bg-red-600",
  },
  {
    id: "p2",
    name: "Vòng Trầm Đeo Tay - Trầm Hương Phổng Châu",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    originalPrice: 16900000,
    rating: 4,
  },
  {
    id: "p3",
    name: "Vòng Tay Trầm Hương Trầm Đen - Trầm Tốc Việt Nam",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    originalPrice: 980000,
    salePrice: 850000,
    rating: 5,
    badge: "Sale",
    badgeColor: "bg-orange-500",
  },
  {
    id: "p4",
    name: "Nhẫn Trầm Hương Việt Nam Mọc Ngọc Thật",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    originalPrice: 1250000,
    rating: 5,
  },
  {
    id: "p5",
    name: "Vòng Tay Trầm Hương Cao Cấp Hoàng Ngọc - Trầm Tốc Việt Nam",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80",
    originalPrice: 1990000,
    rating: 5,
    badge: "Bán chạy",
    badgeColor: "bg-red-600",
  },
  {
    id: "p6",
    name: "Vòng Đá Trầm Hương Bảo Minh Trầm - Trầm Tốc Việt Nam Vàng",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    originalPrice: 1790000,
    rating: 4,
    badge: "Bán chạy",
    badgeColor: "bg-red-600",
  },
  {
    id: "p7",
    name: "Vòng Bọc Tay Trầm Hương Trầm Bản Thị Huân Thần - Trầm TL",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    originalPrice: 1990000,
    rating: 5,
    badge: "Bán chạy",
    badgeColor: "bg-red-600",
  },
  {
    id: "p8",
    name: "Vòng Đeo Tay Trầm Hương Tự Trầm Sơn - Trầm Tốc Việt Nam",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    originalPrice: 1990000,
    rating: 5,
    badge: "Bán chạy",
    badgeColor: "bg-red-600",
  },
  {
    id: "p9",
    name: "Vòng Đeo Tay Trầm Hương Minh Nguyên - Trầm Tốc Việt Nam",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    originalPrice: 2290000,
    rating: 5,
    badge: "Bán chạy",
    badgeColor: "bg-red-600",
  },
  {
    id: "p10",
    name: "Vòng tay Trầm Hương Lộ Bảo Tây Tạng - Trầm Tốc Việt Nam",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80",
    originalPrice: 2790000,
    rating: 4,
    badge: "Bán chạy",
    badgeColor: "bg-red-600",
  },
  {
    id: "p11",
    name: "Nhẫn Trầm Hương Kim Trấn Bảo - Trầm Hương Việt Nam VIP Bậc",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    originalPrice: 2790000,
    rating: 5,
    badge: "Sản phẩm mới",
    badgeColor: "bg-green-600",
  },
  {
    id: "p12",
    name: "Vòng Trầm Hương 108 hạt Đeo - Trầm Tốc Việt Nam",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    originalPrice: 2990000,
    rating: 5,
    badge: "Sản phẩm mới",
    badgeColor: "bg-green-600",
  },
]

export function ProductGrid() {
  return (
    <div className="flex-1">
      {/* Featured Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl md:text-2xl text-foreground">Sản phẩm nổi bật</h2>
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
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            XEM THÊM
          </Link>
        </div>
      </div>
    </div>
  )
}
