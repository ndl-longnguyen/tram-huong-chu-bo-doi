import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"

const artProducts = [
  {
    id: "1",
    name: "Tượng Phật Di Lặc Trầm Hương",
    price: 15000000,
    originalPrice: 18000000,
    image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=500&q=80",
    badge: "Độc đáo",
  },
  {
    id: "2",
    name: "Tượng Quan Âm Trầm Hương",
    price: 12000000,
    image: "https://images.unsplash.com/photo-1600618528161-fe7e4e98c8a1?w=500&q=80",
  },
  {
    id: "3",
    name: "Lư Đốt Trầm Cao Cấp",
    price: 3500000,
    originalPrice: 4200000,
    image: "https://images.unsplash.com/photo-1616169227523-5f66a24f0735?w=500&q=80",
    badge: "Bán chạy",
  },
  {
    id: "4",
    name: "Hộp Đựng Trang Sức Trầm Hương",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1605651531144-51381895e23e?w=500&q=80",
  },
  {
    id: "5",
    name: "Bút Ký Trầm Hương",
    price: 4500000,
    originalPrice: 5500000,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&q=80",
    badge: "Premium",
  },
  {
    id: "6",
    name: "Cây Trầm Hương Phong Thủy",
    price: 8500000,
    image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=500&q=80",
  },
]

const categories = [
  { name: "Tượng Phật", count: 25, image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=300&q=80" },
  { name: "Lư Đốt Trầm", count: 18, image: "https://images.unsplash.com/photo-1616169227523-5f66a24f0735?w=300&q=80" },
  { name: "Vật Phẩm Phong Thủy", count: 32, image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=300&q=80" },
  { name: "Đồ Decor", count: 22, image: "https://images.unsplash.com/photo-1605651531144-51381895e23e?w=300&q=80" },
]

export default function ArtworksPage() {
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
              <span className="text-foreground font-medium">Mỹ Nghệ Trầm Hương</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                MỸ NGHỆ CAO CẤP
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Mỹ Nghệ Trầm Hương
                <span className="block text-primary mt-2">Thủ Công Tinh Xảo</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Bộ sưu tập mỹ nghệ trầm hương được chế tác thủ công bởi những nghệ nhân 
                lành nghề, mang đậm nét văn hóa truyền thống Việt Nam.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/my-nghe/${category.name.toLowerCase().replace(/ /g, '-')}`}
                  className="group relative overflow-hidden rounded-2xl aspect-square"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.count} sản phẩm</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Sản Phẩm Nổi Bật
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Những tác phẩm nghệ thuật trầm hương được chế tác tinh xảo từ tay nghệ nhân
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {artProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Craftsmanship */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80"
                  alt="Nghệ nhân chế tác"
                  className="relative w-full h-[400px] object-cover rounded-3xl"
                />
              </div>
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                  NGHỆ THUẬT CHẾ TÁC
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Tay Nghề Thủ Công
                  <span className="block text-primary mt-2">Truyền Thống</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mỗi sản phẩm mỹ nghệ trầm hương của chúng tôi đều được chế tác thủ công 
                  bởi những nghệ nhân có hơn 20 năm kinh nghiệm. Từ việc chọn lọc nguyên liệu 
                  đến từng chi tiết hoàn thiện, tất cả đều được thực hiện với sự tỉ mỉ và 
                  tâm huyết cao nhất.
                </p>
                <ul className="space-y-3">
                  {[
                    "100% thủ công từ nghệ nhân lành nghề",
                    "Nguyên liệu trầm hương tự nhiên cao cấp",
                    "Thiết kế độc đáo, mang đậm văn hóa Việt",
                    "Bảo hành trọn đời cho tất cả sản phẩm",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
