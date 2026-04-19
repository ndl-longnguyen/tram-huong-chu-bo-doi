import Link from "next/link"
import { ProductCard } from "@/components/product-card"

const newProducts = [
  {
    id: "5",
    name: "Vòng Đá Quý Kim Cương Phú Quý Tủi Túi - Trầm Hương Philio VIP 62mm",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    originalPrice: 35000000,
    rating: 5,
    badge: "Mới",
    badgeColor: "bg-green-600",
  },
  {
    id: "6",
    name: "Vòng Tay Trầm Lưu Quang Phối Phục - Trầm sống",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    originalPrice: 16500000,
    salePrice: 14500000,
    rating: 5,
    badge: "Bán chạy",
    badgeColor: "bg-red-600",
  },
  {
    id: "7",
    name: "Nhẫn Trầm Hương Việt Nam Mọc Ngọc Thật",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    originalPrice: 8500000,
    rating: 4,
  },
  {
    id: "8",
    name: "Vòng Tay Trầm Hương Cao Cấp - Hương Phác Hoàng Kim",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    originalPrice: 22000000,
    salePrice: 19500000,
    rating: 5,
    badge: "Hot",
    badgeColor: "bg-orange-500",
  },
  {
    id: "9",
    name: "Vòng Đeo Tay Trầm Hương Tự Nhiên 108 hạt",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80",
    originalPrice: 12000000,
    rating: 5,
  },
  {
    id: "10",
    name: "Dây Chuyền Trầm Hương Bọc Vàng",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    originalPrice: 28000000,
    salePrice: 25500000,
    rating: 5,
    badge: "Mới",
    badgeColor: "bg-green-600",
  },
]

export function NewArrivals() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-primary" />
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              SẢN PHẨM MỚI VỀ
            </h2>
            <div className="h-px w-16 bg-primary" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {newProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/trang-suc"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            XEM THÊM
          </Link>
        </div>
      </div>
    </section>
  )
}
