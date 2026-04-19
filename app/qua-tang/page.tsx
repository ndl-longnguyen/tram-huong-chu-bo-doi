import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, Gift, Award, Heart, Sparkles } from "lucide-react"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"

const giftProducts = [
  {
    id: "1",
    name: "Set Quà Tặng VIP Trầm Hương",
    price: 5500000,
    originalPrice: 6500000,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Hộp Quà Nhang Trầm Premium",
    price: 2800000,
    originalPrice: 3500000,
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=500&q=80",
    badge: "Mới",
  },
  {
    id: "3",
    name: "Set Vòng Tay Cặp Đôi",
    price: 3800000,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80",
  },
  {
    id: "4",
    name: "Quà Tặng Doanh Nghiệp",
    price: 8500000,
    originalPrice: 10000000,
    image: "https://images.unsplash.com/photo-1605651531144-51381895e23e?w=500&q=80",
    badge: "Corporate",
  },
  {
    id: "5",
    name: "Set Quà Tặng Sinh Nhật",
    price: 1800000,
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80",
  },
  {
    id: "6",
    name: "Quà Tặng Tết Luxury",
    price: 12000000,
    originalPrice: 15000000,
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&q=80",
    badge: "Limited",
  },
]

const giftOccasions = [
  { icon: Gift, title: "Quà Tặng Sinh Nhật", desc: "Món quà ý nghĩa cho người thân yêu" },
  { icon: Award, title: "Quà Tặng Doanh Nghiệp", desc: "Phong cách đẳng cấp và chuyên nghiệp" },
  { icon: Heart, title: "Quà Tặng Cưới Hỏi", desc: "Lời chúc bình an cho cặp đôi" },
  { icon: Sparkles, title: "Quà Tặng Tết", desc: "Tinh hoa đầu năm mới may mắn" },
]

const priceRanges = [
  { range: "Dưới 2 triệu", count: 25 },
  { range: "2 - 5 triệu", count: 42 },
  { range: "5 - 10 triệu", count: 18 },
  { range: "Trên 10 triệu", count: 12 },
]

export default function GiftPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Trang chủ
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Quà Tặng Trầm Hương</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                QUÀ TẶNG Ý NGHĨA
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Quà Tặng Trầm Hương
                <span className="block text-primary mt-2">Đẳng Cấp & Tinh Tế</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Tặng quà trầm hương - tặng sức khỏe và bình an. Bộ sưu tập quà tặng 
                cao cấp phù hợp cho mọi dịp đặc biệt trong cuộc sống.
              </p>
            </div>
          </div>
        </section>

        {/* Gift Occasions */}
        <section className="py-12 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {giftOccasions.map((occasion, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-2xl hover:bg-primary/5 transition-colors cursor-pointer group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <occasion.icon className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-2">{occasion.title}</h3>
                  <p className="text-muted-foreground text-sm">{occasion.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Range Filter */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-muted-foreground font-medium">Mức giá:</span>
              {priceRanges.map((range, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {range.range} ({range.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Bộ Sưu Tập Quà Tặng
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Những món quà trầm hương tinh tế, được đóng gói sang trọng
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {giftProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Gift Services */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
                DỊCH VỤ QUÀ TẶNG
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Dịch Vụ Đặc Biệt
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Gói Quà Cao Cấp", 
                  desc: "Dịch vụ đóng gói quà tặng sang trọng với hộp gỗ trầm và thiệp chúc mừng",
                  image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&q=80"
                },
                { 
                  title: "Khắc Tên Miễn Phí", 
                  desc: "Khắc tên hoặc thông điệp cá nhân lên sản phẩm hoàn toàn miễn phí",
                  image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&q=80"
                },
                { 
                  title: "Giao Hàng Express", 
                  desc: "Giao hàng nhanh trong 24h tại Hà Nội và TP.HCM, có dịch vụ giao đến tận nơi",
                  image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80"
                },
              ].map((service, index) => (
                <div key={index} className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-foreground font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
