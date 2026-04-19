import Link from "next/link"

const exploreItems = [
  {
    title: "NHANG TRẦM HƯƠNG",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    href: "/nhang-tram",
  },
  {
    title: "VÒNG TAY TRẦM VÒNG DÂY",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    href: "/trang-suc/vong-tay",
  },
  {
    title: "VÒNG TRẦM HƯƠNG 108 HẠT",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    href: "/trang-suc/vong-108-hat",
  },
  {
    title: "NHẪN TRẦM HƯƠNG",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    href: "/trang-suc/nhan",
  },
]

export function ExploreSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-primary" />
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              KHÁM PHÁ THÊM
            </h2>
            <div className="h-px w-16 bg-primary" />
          </div>
        </div>

        {/* Explore Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {exploreItems.map((item, index) => (
            <Link key={index} href={item.href} className="group block">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-4">
                  <h3 className="text-white text-sm md:text-base font-medium text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
