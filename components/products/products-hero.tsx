"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const categories = [
  { icon: "/products/p1.jpg", label: { vi: "Vòng Tay", en: "Bracelets", zh: "手链" }, count: 120 },
  { icon: "/products/p2.jpg", label: { vi: "Nhẫn", en: "Rings", zh: "戒指" }, count: 45 },
  { icon: "/products/p3.jpg", label: { vi: "Chuỗi Cổ", en: "Necklaces", zh: "项链" }, count: 38 },
  { icon: "/products/p4.jpg", label: { vi: "Mặt Dây Chuyền", en: "Pendants", zh: "吊坠" }, count: 56 },
]

export function ProductsHero() {
  const { locale, getLocalizedPath } = useLanguage()

  const content = {
    home: { vi: "Trang Chủ", en: "Home", zh: "首页" },
    breadcrumb: { vi: "Trang Sức Trầm Hương", en: "Agarwood Jewelry", zh: "沉香珠宝" },
    collection: { vi: "BỘ SƯU TẬP", en: "COLLECTION", zh: "产品系列" },
    title1: { vi: "Trang Sức Trầm Hương", en: "Agarwood Jewelry", zh: "沉香珠宝" },
    title2: { vi: "Cao Cấp", en: "Premium", zh: "高端系列" },
    description: {
      vi: "Khám phá bộ sưu tập trang sức trầm hương tự nhiên 100%, được chế tác thủ công bởi những nghệ nhân lành nghề với hơn 20 năm kinh nghiệm.",
      en: "Discover our collection of 100% natural agarwood jewelry, handcrafted by skilled artisans with over 20 years of experience.",
      zh: "探索我们100%天然沉香珠宝系列，由拥有20多年经验的熟练工匠手工制作。"
    },
    products: { vi: "sản phẩm", en: "products", zh: "件产品" },
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pb-16 lg:pb-24 pt-6 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
              {content.home[locale as keyof typeof content.home]}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{content.breadcrumb[locale as keyof typeof content.breadcrumb]}</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
              {content.collection[locale as keyof typeof content.collection]}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 uppercase tracking-tight">
              {content.title1[locale as keyof typeof content.title1]}
              <span className="block text-primary mt-2">{content.title2[locale as keyof typeof content.title2]}</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              {content.description[locale as keyof typeof content.description]}
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={getLocalizedPath(`/trang-suc/${category.label.vi.toLowerCase().replace(/ /g, '-')}`)}
                className="group flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-muted/50 rounded-2xl hover:bg-primary/5 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-4 ring-border group-hover:ring-primary/30 transition-all">
                  <img
                    src={category.icon}
                    alt={category.label[locale as keyof typeof category.label]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <span className="text-foreground font-semibold block group-hover:text-primary transition-colors text-sm md:text-base">
                    {category.label[locale as keyof typeof category.label]}
                  </span>
                  <span className="text-muted-foreground text-xs md:text-sm">{category.count} {content.products[locale as keyof typeof content.products]}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
