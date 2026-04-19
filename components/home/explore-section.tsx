import Link from "next/link"
import { ArrowRight } from "lucide-react"

const exploreItems = [
  {
    title: "Nhang Trầm Hương",
    description: "Hương thơm thanh tịnh",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    href: "/nhang-tram",
  },
  {
    title: "Vòng Tay Trầm Dây",
    description: "Phong cách hiện đại",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    href: "/trang-suc/vong-tay",
  },
  {
    title: "Vòng 108 Hạt",
    description: "Truyền thống Phật giáo",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    href: "/trang-suc/vong-108-hat",
  },
  {
    title: "Nhẫn Trầm Hương",
    description: "Sang trọng & độc đáo",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    href: "/trang-suc/nhan",
  },
]

export function ExploreSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
            DANH MỤC SẢN PHẨM
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Khám Phá Thêm
          </h2>
        </div>

        {/* Explore Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreItems.map((item, index) => (
            <Link key={index} href={item.href} className="group block">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-square object-cover transition-all duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                  <h3 className="text-white font-serif text-lg md:text-xl font-semibold text-center mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm text-center mb-3">
                    {item.description}
                  </p>
                  <span className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Xem thêm <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
