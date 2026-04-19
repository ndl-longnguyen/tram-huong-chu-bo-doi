import Link from "next/link"
import { ProductCard } from "@/components/product-card"

const featuredProducts = [
  {
    id: "1",
    name: "Vòng Tay Bảo Linh Trầm Tốc - Trầm Hương Philip VIP 15mm",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    originalPrice: 21500000,
    salePrice: 18500000,
    rating: 5,
  },
  {
    id: "2",
    name: "Vòng Tay Bảo Hương - Trầm Tốc",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    originalPrice: 15900000,
    rating: 5,
  },
  {
    id: "3",
    name: "Vòng Tay Lưu Quang Phối Phục - Trầm sống",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    originalPrice: 18500000,
    salePrice: 16500000,
    rating: 5,
  },
  {
    id: "4",
    name: "Vòng Tay Trầm Hương Việt Nam Mọc Thật",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    originalPrice: 12900000,
    rating: 4,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-primary" />
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              SẢN PHẨM ĐƯỢC YÊU THÍCH
            </h2>
            <div className="h-px w-16 bg-primary" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
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
