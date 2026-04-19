import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductFilters } from "@/components/products/product-filters"
import { ProductGrid } from "@/components/products/product-grid"
import { WhyChooseUs } from "@/components/products/why-choose-us"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const braceletTypes = [
  { 
    icon: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=100&q=80", 
    label: "Vòng Tay 108 Hạt", 
    count: 45 
  },
  { 
    icon: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&q=80", 
    label: "Vòng Tay Phong Thủy", 
    count: 38 
  },
  { 
    icon: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=100&q=80", 
    label: "Vòng Tay Bọc Vàng", 
    count: 28 
  },
  { 
    icon: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=100&q=80", 
    label: "Vòng Tay Đơn Giản", 
    count: 52 
  },
]

export default function BraceletPage() {
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
              <span className="text-foreground font-medium">Vòng Tay Trầm Hương</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                BỘ SƯU TẬP
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Vòng Tay Trầm Hương
                <span className="block text-primary mt-2">Cao Cấp</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Vòng tay trầm hương cao cấp, được chế tác từ 100% trầm hương tự nhiên, 
                mang đến năng lượng tích cực và bình an cho người đeo.
              </p>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-12 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {braceletTypes.map((type, index) => (
                <Link
                  key={index}
                  href={`/vong-tay/${type.label.toLowerCase().replace(/ /g, '-')}`}
                  className="group flex flex-col items-center gap-4 p-6 bg-muted/50 rounded-2xl hover:bg-primary/5 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-border group-hover:ring-primary/30 transition-all">
                    <img
                      src={type.icon}
                      alt={type.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-foreground font-semibold block group-hover:text-primary transition-colors">
                      {type.label}
                    </span>
                    <span className="text-muted-foreground text-sm">{type.count} sản phẩm</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <ProductFilters />
              <ProductGrid />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}
