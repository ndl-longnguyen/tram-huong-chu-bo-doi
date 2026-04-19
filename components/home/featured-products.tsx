import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: "1",
    name: "Vòng Tay Bảo Linh Trầm Tốc - Trầm Hương Philip VIP 15mm",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    originalPrice: 21500000,
    salePrice: 18500000,
    rating: 5,
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Vòng Tay Bảo Hương - Trầm Tốc Cao Cấp",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    originalPrice: 15900000,
    rating: 5,
  },
  {
    id: "3",
    name: "Vòng Tay Lưu Quang Phối Phục - Trầm Sống",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    originalPrice: 18500000,
    salePrice: 16500000,
    rating: 5,
    badge: "Sale",
  },
  {
    id: "4",
    name: "Vòng Tay Trầm Hương Việt Nam Mộc Thật",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    originalPrice: 12900000,
    rating: 4,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
            BEST SELLERS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Sản Phẩm Được Yêu Thích
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Những sản phẩm trầm hương được khách hàng tin tưởng và lựa chọn nhiều nhất
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/trang-suc"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
          >
            XEM TẤT CẢ SẢN PHẨM
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
