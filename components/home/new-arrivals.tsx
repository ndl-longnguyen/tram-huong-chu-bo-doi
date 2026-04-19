"use client"

import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/i18n/language-context"

const newProductsData = {
  vi: [
    { id: "5", name: "Vong Da Quy Kim Cuong Phu Quy - Tram Huong Philio VIP 62mm", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 35000000, rating: 5, badge: "Moi", badgeColor: "bg-green-600" },
    { id: "6", name: "Vong Tay Tram Luu Quang Phoi Phuc - Tram song", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 16500000, salePrice: 14500000, rating: 5, badge: "Ban chay", badgeColor: "bg-red-600" },
    { id: "7", name: "Nhan Tram Huong Viet Nam Moc Ngoc That", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", originalPrice: 8500000, rating: 4 },
    { id: "8", name: "Vong Tay Tram Huong Cao Cap - Huong Phac Hoang Kim", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", originalPrice: 22000000, salePrice: 19500000, rating: 5, badge: "Hot", badgeColor: "bg-orange-500" },
    { id: "9", name: "Vong Deo Tay Tram Huong Tu Nhien 108 hat", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80", originalPrice: 12000000, rating: 5 },
    { id: "10", name: "Day Chuyen Tram Huong Boc Vang", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 28000000, salePrice: 25500000, rating: 5, badge: "Moi", badgeColor: "bg-green-600" },
  ],
  en: [
    { id: "5", name: "Diamond Gemstone Agarwood Bracelet - Philio VIP 62mm", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 35000000, rating: 5, badge: "New", badgeColor: "bg-green-600" },
    { id: "6", name: "Luu Quang Natural Agarwood Bracelet", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 16500000, salePrice: 14500000, rating: 5, badge: "Best Seller", badgeColor: "bg-red-600" },
    { id: "7", name: "Vietnamese Agarwood Ring with Real Jade", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", originalPrice: 8500000, rating: 4 },
    { id: "8", name: "Premium Agarwood Bracelet - Golden Fragrance", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", originalPrice: 22000000, salePrice: 19500000, rating: 5, badge: "Hot", badgeColor: "bg-orange-500" },
    { id: "9", name: "Natural Agarwood 108-Bead Bracelet", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80", originalPrice: 12000000, rating: 5 },
    { id: "10", name: "Gold-wrapped Agarwood Necklace", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 28000000, salePrice: 25500000, rating: 5, badge: "New", badgeColor: "bg-green-600" },
  ],
  zh: [
    { id: "5", name: "钻石宝石沉香手链 - Philio VIP 62mm", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 35000000, rating: 5, badge: "新品", badgeColor: "bg-green-600" },
    { id: "6", name: "流光天然沉香手链", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 16500000, salePrice: 14500000, rating: 5, badge: "畅销", badgeColor: "bg-red-600" },
    { id: "7", name: "越南沉香翡翠戒指", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", originalPrice: 8500000, rating: 4 },
    { id: "8", name: "高端沉香手链 - 黄金香", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", originalPrice: 22000000, salePrice: 19500000, rating: 5, badge: "热门", badgeColor: "bg-orange-500" },
    { id: "9", name: "天然沉香108颗手链", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80", originalPrice: 12000000, rating: 5 },
    { id: "10", name: "包金沉香项链", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 28000000, salePrice: 25500000, rating: 5, badge: "新品", badgeColor: "bg-green-600" },
  ],
}

const sectionContent = {
  title: { vi: "SAN PHAM MOI VE", en: "NEW ARRIVALS", zh: "新品到货" },
  cta: { vi: "XEM THEM", en: "VIEW MORE", zh: "查看更多" },
}

export function NewArrivals() {
  const { locale, getLocalizedPath } = useLanguage()
  const newProducts = newProductsData[locale]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-primary" />
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              {sectionContent.title[locale]}
            </h2>
            <div className="h-px w-16 bg-primary" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {newProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={getLocalizedPath("/trang-suc")}
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {sectionContent.cta[locale]}
          </Link>
        </div>
      </div>
    </section>
  )
}
