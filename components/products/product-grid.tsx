"use client"

import { ProductCard } from "@/components/product-card"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

const productsData = {
  vi: [
    { id: "p1", name: "Vong Tram Boc Tay 108 hat cao cap - Tram Huong Philip VIP 62mm", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 25500000, salePrice: 22000000, rating: 5, badge: "Ban chay", badgeColor: "bg-red-600" },
    { id: "p2", name: "Vong Tram Deo Tay - Tram Huong Phong Chau", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 16900000, rating: 4 },
    { id: "p3", name: "Vong Tay Tram Huong Tram Den - Tram Toc Viet Nam", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", originalPrice: 980000, salePrice: 850000, rating: 5, badge: "Sale", badgeColor: "bg-orange-500" },
    { id: "p4", name: "Nhan Tram Huong Viet Nam Moc Ngoc That", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", originalPrice: 1250000, rating: 5 },
    { id: "p5", name: "Vong Tay Tram Huong Cao Cap Hoang Ngoc - Tram Toc Viet Nam", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80", originalPrice: 1990000, rating: 5, badge: "Ban chay", badgeColor: "bg-red-600" },
    { id: "p6", name: "Vong Da Tram Huong Bao Minh Tram - Tram Toc Viet Nam Vang", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 1790000, rating: 4, badge: "Ban chay", badgeColor: "bg-red-600" },
    { id: "p7", name: "Vong Boc Tay Tram Huong Tram Ban Thi - Tram TL", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 1990000, rating: 5, badge: "Ban chay", badgeColor: "bg-red-600" },
    { id: "p8", name: "Vong Deo Tay Tram Huong Tu Tram Son - Tram Toc Viet Nam", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", originalPrice: 1990000, rating: 5, badge: "Ban chay", badgeColor: "bg-red-600" },
    { id: "p9", name: "Vong Deo Tay Tram Huong Minh Nguyen - Tram Toc Viet Nam", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", originalPrice: 2290000, rating: 5, badge: "Ban chay", badgeColor: "bg-red-600" },
    { id: "p10", name: "Vong tay Tram Huong Lo Bao Tay Tang - Tram Toc Viet Nam", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80", originalPrice: 2790000, rating: 4, badge: "Ban chay", badgeColor: "bg-red-600" },
    { id: "p11", name: "Nhan Tram Huong Kim Tran Bao - Tram Huong Viet Nam VIP Bac", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 2790000, rating: 5, badge: "San pham moi", badgeColor: "bg-green-600" },
    { id: "p12", name: "Vong Tram Huong 108 hat Deo - Tram Toc Viet Nam", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 2990000, rating: 5, badge: "San pham moi", badgeColor: "bg-green-600" },
  ],
  en: [
    { id: "p1", name: "Premium 108-Bead Agarwood Bracelet - Philip VIP 62mm", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 25500000, salePrice: 22000000, rating: 5, badge: "Best Seller", badgeColor: "bg-red-600" },
    { id: "p2", name: "Agarwood Bracelet - Phong Chau Style", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 16900000, rating: 4 },
    { id: "p3", name: "Dark Agarwood Bracelet - Vietnamese Oud", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", originalPrice: 980000, salePrice: 850000, rating: 5, badge: "Sale", badgeColor: "bg-orange-500" },
    { id: "p4", name: "Vietnamese Agarwood Ring with Real Jade", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", originalPrice: 1250000, rating: 5 },
    { id: "p5", name: "Premium Hoang Ngoc Agarwood Bracelet - Vietnamese Oud", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80", originalPrice: 1990000, rating: 5, badge: "Best Seller", badgeColor: "bg-red-600" },
    { id: "p6", name: "Bao Minh Agarwood Gemstone Bracelet - Gold Oud", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 1790000, rating: 4, badge: "Best Seller", badgeColor: "bg-red-600" },
    { id: "p7", name: "Agarwood Wrapped Bracelet - Ban Thi Style", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 1990000, rating: 5, badge: "Best Seller", badgeColor: "bg-red-600" },
    { id: "p8", name: "Natural Mountain Agarwood Bracelet - Vietnamese Oud", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", originalPrice: 1990000, rating: 5, badge: "Best Seller", badgeColor: "bg-red-600" },
    { id: "p9", name: "Minh Nguyen Agarwood Bracelet - Vietnamese Oud", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", originalPrice: 2290000, rating: 5, badge: "Best Seller", badgeColor: "bg-red-600" },
    { id: "p10", name: "Tibetan Agarwood Bracelet - Vietnamese Oud", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80", originalPrice: 2790000, rating: 4, badge: "Best Seller", badgeColor: "bg-red-600" },
    { id: "p11", name: "Kim Tran Bao Agarwood Ring - Vietnamese VIP Grade", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 2790000, rating: 5, badge: "New", badgeColor: "bg-green-600" },
    { id: "p12", name: "108-Bead Agarwood Bracelet - Vietnamese Oud", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 2990000, rating: 5, badge: "New", badgeColor: "bg-green-600" },
  ],
  zh: [
    { id: "p1", name: "高端108颗沉香手链 - Philip VIP 62mm", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 25500000, salePrice: 22000000, rating: 5, badge: "畅销", badgeColor: "bg-red-600" },
    { id: "p2", name: "沉香手链 - 凤洲风格", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 16900000, rating: 4 },
    { id: "p3", name: "黑沉香手链 - 越南乌沉", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", originalPrice: 980000, salePrice: 850000, rating: 5, badge: "特价", badgeColor: "bg-orange-500" },
    { id: "p4", name: "越南沉香翡翠戒指", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", originalPrice: 1250000, rating: 5 },
    { id: "p5", name: "皇玉高端沉香手链 - 越南乌沉", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80", originalPrice: 1990000, rating: 5, badge: "畅销", badgeColor: "bg-red-600" },
    { id: "p6", name: "宝明沉香宝石手链 - 金乌沉", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 1790000, rating: 4, badge: "畅销", badgeColor: "bg-red-600" },
    { id: "p7", name: "沉香缠绕手链 - 班氏风格", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 1990000, rating: 5, badge: "畅销", badgeColor: "bg-red-600" },
    { id: "p8", name: "天然山区沉香手链 - 越南乌沉", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", originalPrice: 1990000, rating: 5, badge: "畅销", badgeColor: "bg-red-600" },
    { id: "p9", name: "明元沉香手链 - 越南乌沉", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", originalPrice: 2290000, rating: 5, badge: "畅销", badgeColor: "bg-red-600" },
    { id: "p10", name: "西藏沉香手链 - 越南乌沉", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80", originalPrice: 2790000, rating: 4, badge: "畅销", badgeColor: "bg-red-600" },
    { id: "p11", name: "金镇宝沉香戒指 - 越南VIP级", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", originalPrice: 2790000, rating: 5, badge: "新品", badgeColor: "bg-green-600" },
    { id: "p12", name: "108颗沉香手链 - 越南乌沉", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80", originalPrice: 2990000, rating: 5, badge: "新品", badgeColor: "bg-green-600" },
  ],
}

const labels = {
  featured: { vi: "San pham noi bat", en: "Featured Products", zh: "精选产品" },
  viewMore: { vi: "XEM THEM", en: "VIEW MORE", zh: "查看更多" },
}

export function ProductGrid() {
  const { locale } = useLanguage()
  const products = productsData[locale]

  return (
    <div className="flex-1">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl md:text-2xl text-foreground">{labels.featured[locale]}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#" className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-primary-foreground transition-colors">
            {labels.viewMore[locale]}
          </Link>
        </div>
      </div>
    </div>
  )
}
