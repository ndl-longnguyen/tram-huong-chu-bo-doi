"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const exploreData = {
  vi: [
    { title: "Nhang Tram Huong", description: "Huong thom thanh tinh", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", href: "/nhang-tram" },
    { title: "Vong Tay Tram Day", description: "Phong cach hien dai", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", href: "/vong-tay" },
    { title: "Vong 108 Hat", description: "Truyen thong Phat giao", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", href: "/vong-tay" },
    { title: "Nhan Tram Huong", description: "Sang trong & doc dao", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", href: "/trang-suc" },
  ],
  en: [
    { title: "Agarwood Incense", description: "Pure fragrance", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", href: "/nhang-tram" },
    { title: "Cord Bracelets", description: "Modern style", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", href: "/vong-tay" },
    { title: "108-Bead Bracelets", description: "Buddhist tradition", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", href: "/vong-tay" },
    { title: "Agarwood Rings", description: "Elegant & unique", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", href: "/trang-suc" },
  ],
  zh: [
    { title: "沉香", description: "纯净香气", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", href: "/nhang-tram" },
    { title: "绳结手链", description: "现代风格", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", href: "/vong-tay" },
    { title: "108颗手链", description: "佛教传统", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", href: "/vong-tay" },
    { title: "沉香戒指", description: "优雅独特", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", href: "/trang-suc" },
  ],
}

const sectionContent = {
  tag: { vi: "DANH MUC SAN PHAM", en: "PRODUCT CATEGORIES", zh: "产品类别" },
  title: { vi: "Kham Pha Them", en: "Explore More", zh: "探索更多" },
  viewMore: { vi: "Xem them", en: "View more", zh: "查看更多" },
}

export function ExploreSection() {
  const { locale, getLocalizedPath } = useLanguage()
  const exploreItems = exploreData[locale]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
            {sectionContent.tag[locale]}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {sectionContent.title[locale]}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreItems.map((item, index) => (
            <Link key={index} href={getLocalizedPath(item.href)} className="group block">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={item.image} alt={item.title} className="w-full aspect-square object-cover transition-all duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                  <h3 className="text-white font-serif text-lg md:text-xl font-semibold text-center mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm text-center mb-3">{item.description}</p>
                  <span className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {sectionContent.viewMore[locale]} <ArrowRight className="w-4 h-4" />
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
