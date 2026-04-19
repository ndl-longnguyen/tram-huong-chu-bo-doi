import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, Leaf, Wind, Heart, Shield } from "lucide-react"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"

const incenseProducts = [
  {
    id: "1",
    name: "Nhang Trầm Hương Cao Cấp",
    price: 450000,
    originalPrice: 550000,
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=500&q=80",
    badge: "Bán chạy",
  },
  {
    id: "2",
    name: "Nụ Trầm Hương Thiên Nhiên",
    price: 380000,
    originalPrice: 450000,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&q=80",
    badge: "Mới",
  },
  {
    id: "3",
    name: "Nhang Vòng Trầm Hương",
    price: 520000,
    originalPrice: 650000,
    image: "https://images.unsplash.com/photo-1616169227523-5f66a24f0735?w=500&q=80",
  },
  {
    id: "4",
    name: "Nhang Trầm Hương Đặc Biệt",
    price: 780000,
    originalPrice: 900000,
    image: "https://images.unsplash.com/photo-1600618528161-fe7e4e98c8a1?w=500&q=80",
    badge: "Premium",
  },
  {
    id: "5",
    name: "Nụ Trầm Mini",
    price: 280000,
    image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=500&q=80",
  },
  {
    id: "6",
    name: "Nhang Trầm Hương Gift Set",
    price: 1200000,
    originalPrice: 1500000,
    image: "https://images.unsplash.com/photo-1605651531144-51381895e23e?w=500&q=80",
    badge: "Quà tặng",
  },
]

const benefits = [
  {
    icon: Leaf,
    title: "100% Tự Nhiên",
    description: "Được làm từ bột trầm hương nguyên chất, không hóa chất độc hại",
  },
  {
    icon: Wind,
    title: "Hương Thơm Dịu Nhẹ",
    description: "Hương trầm tự nhiên, thanh tao, giúp thư giãn tinh thần",
  },
  {
    icon: Heart,
    title: "Tốt Cho Sức Khỏe",
    description: "Giúp thanh lọc không khí, mang lại cảm giác bình an",
  },
  {
    icon: Shield,
    title: "An Toàn",
    description: "Không khói độc, an toàn cho cả gia đình và trẻ nhỏ",
  },
]

export default function IncensePage() {
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
              <span className="text-foreground font-medium">Nhang Trầm Hương</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                SẢN PHẨM
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Nhang Trầm Hương
                <span className="block text-primary mt-2">Nguyên Chất</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nhang trầm hương cao cấp, được sản xuất từ 100% bột trầm hương tự nhiên, 
                mang lại hương thơm thanh khiết và năng lượng tích cực cho không gian sống.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-2xl hover:bg-primary/5 transition-colors"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Sản Phẩm Nhang Trầm
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Khám phá bộ sưu tập nhang trầm hương cao cấp của chúng tôi
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {incenseProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
                HƯỚNG DẪN SỬ DỤNG
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Cách Sử Dụng Nhang Trầm
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Chuẩn bị", desc: "Đặt nhang vào đế đốt hoặc lư hương phù hợp" },
                { step: "02", title: "Thắp nhang", desc: "Châm lửa đầu nhang và để cháy vài giây" },
                { step: "03", title: "Thưởng thức", desc: "Thổi tắt lửa, để nhang tỏa hương tự nhiên" },
              ].map((item, index) => (
                <div key={index} className="relative bg-card p-8 rounded-2xl border border-border text-center">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
                    {item.step}
                  </span>
                  <h3 className="text-foreground font-semibold text-lg mt-4 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
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
