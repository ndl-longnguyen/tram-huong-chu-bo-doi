"use client"

import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const featuredProductsData = {
  vi: [
    { id: "1", name: "Vong Tay Bao Linh Tram Toc - Tram Huong Philip VIP 15mm", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 21500000, salePrice: 18500000, rating: 5, badge: "Best Seller" },
    { id: "2", name: "Vong Tay Bao Huong - Tram Toc Cao Cap", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 15900000, rating: 5 },
    { id: "3", name: "Vong Tay Luu Quang Phoi Phuc - Tram Song", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", originalPrice: 18500000, salePrice: 16500000, rating: 5, badge: "Sale" },
    { id: "4", name: "Vong Tay Tram Huong Viet Nam Moc That", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", originalPrice: 12900000, rating: 4 },
  ],
  en: [
    { id: "1", name: "Bao Linh Agarwood Bracelet - Philip VIP 15mm", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 21500000, salePrice: 18500000, rating: 5, badge: "Best Seller" },
    { id: "2", name: "Bao Huong Premium Agarwood Bracelet", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 15900000, rating: 5 },
    { id: "3", name: "Luu Quang Natural Agarwood Bracelet", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", originalPrice: 18500000, salePrice: 16500000, rating: 5, badge: "Sale" },
    { id: "4", name: "Vietnamese Natural Agarwood Bracelet", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", originalPrice: 12900000, rating: 4 },
  ],
  zh: [
    { id: "1", name: "宝灵沉香手链 - Philip VIP 15mm", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 21500000, salePrice: 18500000, rating: 5, badge: "Best Seller" },
    { id: "2", name: "宝香高端沉香手链", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 15900000, rating: 5 },
    { id: "3", name: "流光天然沉香手链", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", originalPrice: 18500000, salePrice: 16500000, rating: 5, badge: "Sale" },
    { id: "4", name: "越南天然沉香手链", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", originalPrice: 12900000, rating: 4 },
  ],
}

const sectionContent = {
  tag: { vi: "BEST SELLERS", en: "BEST SELLERS", zh: "热销产品" },
  title: { vi: "San Pham Duoc Yeu Thich", en: "Most Loved Products", zh: "最受欢迎的产品" },
  desc: { vi: "Nhung san pham tram huong duoc khach hang tin tuong va lua chon nhieu nhat", en: "The agarwood products most trusted and chosen by customers", zh: "客户最信赖和选择的沉香产品" },
  cta: { vi: "XEM TAT CA SAN PHAM", en: "VIEW ALL PRODUCTS", zh: "查看所有产品" },
}

export function FeaturedProducts() {
  const { locale, getLocalizedPath } = useLanguage()
  const products = featuredProductsData[locale]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
            {sectionContent.tag[locale]}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            {sectionContent.title[locale]}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {sectionContent.desc[locale]}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href={getLocalizedPath("/trang-suc")}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
          >
            {sectionContent.cta[locale]}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
