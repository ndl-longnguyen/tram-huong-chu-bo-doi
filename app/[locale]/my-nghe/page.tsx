"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/i18n/language-context"

const artProducts = [
  { id: "1", name: { vi: "Tượng Phật Di Lạc", en: "Buddha Statue", zh: "弥勒佛像" }, price: 15000000, originalPrice: 18000000, image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=500&q=80", badge: { vi: "Độc Đáo", en: "Unique", zh: "独特" } },
  { id: "2", name: { vi: "Tượng Quan Âm", en: "Guanyin Statue", zh: "观音像" }, price: 12000000, image: "https://images.unsplash.com/photo-1600618528161-fe7e4e98c8a1?w=500&q=80" },
  { id: "3", name: { vi: "Lư Đốt Trầm Cao Cấp", en: "Premium Censer", zh: "高级香炉" }, price: 3500000, originalPrice: 4200000, image: "https://images.unsplash.com/photo-1616169227523-5f66a24f0735?w=500&q=80", badge: { vi: "Bán chạy", en: "Best Seller", zh: "畅销" } },
  { id: "4", name: { vi: "Hộp Đựng Trang Sức", en: "Jewelry Box", zh: "首饰盒" }, price: 2800000, image: "https://images.unsplash.com/photo-1605651531144-51381895e23e?w=500&q=80" },
  { id: "5", name: { vi: "Bút Ký Trầm Hương", en: "Agarwood Pen", zh: "沉香钢笔" }, price: 4500000, originalPrice: 5500000, image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&q=80", badge: { vi: "Premium", en: "Premium", zh: "高端" } },
  { id: "6", name: { vi: "Cây Trầm Phong Thủy", en: "Feng Shui Tree", zh: "风水树" }, price: 8500000, image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=500&q=80" },
]

const categories = [
  { name: { vi: "Tượng Phật", en: "Buddha Statues", zh: "佛像" }, count: 25, image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=300&q=80" },
  { name: { vi: "Lư Đốt Trầm", en: "Censers", zh: "香炉" }, count: 18, image: "https://images.unsplash.com/photo-1616169227523-5f66a24f0735?w=300&q=80" },
  { name: { vi: "Vật Phẩm Phong Thủy", en: "Feng Shui Items", zh: "风水物品" }, count: 32, image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=300&q=80" },
  { name: { vi: "Đồ Decor", en: "Decor Items", zh: "装饰品" }, count: 22, image: "https://images.unsplash.com/photo-1605651531144-51381895e23e?w=300&q=80" },
]

export default function ArtworksPage() {
  const { locale, getLocalizedPath } = useLanguage()

  const content = {
    home: { vi: "Trang chủ", en: "Home", zh: "首页" },
    breadcrumb: { vi: "Mỹ Nghệ Trầm Hương", en: "Agarwood Artworks", zh: "沉香工艺品" },
    artCategory: { vi: "MỸ NGHỆ CAO CẤP", en: "PREMIUM ARTWORKS", zh: "高端工艺品" },
    title1: { vi: "Mỹ Nghệ Trầm Hương", en: "Agarwood Artworks", zh: "沉香工艺品" },
    title2: { vi: "Thủ Công Tinh Xảo", en: "Exquisite Craftsmanship", zh: "精湛工艺" },
    description: {
      vi: "Bộ sưu tập mỹ nghệ trầm hương được chế tác thủ công bởi những nghệ nhân lành nghề, mang đầm nét văn hóa truyền thống Việt Nam.",
      en: "Agarwood artwork collection handcrafted by skilled artisans, featuring traditional Vietnamese cultural elements.",
      zh: "沉香工艺品系列由熟练工匠手工制作，融入越南传统文化元素。"
    },
    products: { vi: "sản phẩm", en: "products", zh: "件产品" },
    featuredTitle: { vi: "Sản Phẩm Nổi Bật", en: "Featured Products", zh: "精选产品" },
    featuredDesc: { vi: "Những tác phẩm nghệ thuật trầm hương được chế tác tinh xảo từ tay nghề nhân", en: "Exquisite agarwood artworks crafted by skilled artisans", zh: "由熟练工匠精心制作的沉香工艺品" },
    craftsmanship: { vi: "NGHỆ THUẬT CHẾ TÁC", en: "CRAFTSMANSHIP", zh: "工艺艺术" },
    craftTitle1: { vi: "Tay Nghề Thủ Công", en: "Handcraft Skills", zh: "手工技艺" },
    craftTitle2: { vi: "Truyền Thống", en: "Traditional", zh: "传统" },
    craftDesc: {
      vi: "Mỗi sản phẩm mỹ nghệ trầm hương của chúng tôi đều được chế tác thủ công bởi những nghệ nhân có hơn 20 năm kinh nghiệm. Từ việc chọn lọc nguyên liệu đến từng chi tiết hoàn thiện, tất cả đều được thực hiện với sự tỉ mỉ và tâm huyết cao nhất.",
      en: "Every agarwood artwork is handcrafted by artisans with over 20 years of experience. From material selection to every finishing detail, everything is done with the utmost care and dedication.",
      zh: "每件沉香工艺品都由拥有20多年经验的工匠手工制作。从原材料选择到每个细节的完成，一切都以最大的关怀和奉献精神完成。"
    },
    feature1: { vi: "100% thủ công từ nghệ nhân lành nghề", en: "100% handcrafted by skilled artisans", zh: "100%由熟练工匠手工制作" },
    feature2: { vi: "Nguyên liệu trầm hương tự nhiên cao cấp", en: "Premium natural agarwood materials", zh: "高级天然沉香原料" },
    feature3: { vi: "Thiết kế độc đáo, mang đầm văn hóa Việt", en: "Unique design with Vietnamese culture", zh: "融入越南文化的独特设计" },
    feature4: { vi: "Bảo hành trọn đời cho tất cả sản phẩm", en: "Lifetime warranty for all products", zh: "所有产品终身保修" },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 text-sm mb-8">
              <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
                {content.home[locale]}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{content.breadcrumb[locale]}</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                {content.artCategory[locale]}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                {content.title1[locale]}
                <span className="block text-primary mt-2">{content.title2[locale]}</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {content.description[locale]}
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {categories.map((category, index) => (
                <Link key={index} href={getLocalizedPath(`/my-nghe/${category.name.vi.toLowerCase().replace(/ /g, '-')}`)} className="group relative overflow-hidden rounded-2xl aspect-square">
                  <img src={category.image} alt={category.name[locale]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-base md:text-lg">{category.name[locale]}</h3>
                    <p className="text-white/80 text-xs md:text-sm">{category.count} {content.products[locale]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{content.featuredTitle[locale]}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{content.featuredDesc[locale]}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {artProducts.map((product) => (
                <ProductCard key={product.id} product={{ ...product, name: product.name[locale], badge: product.badge?.[locale] }} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80" alt="Craftsmanship" className="relative w-full h-[400px] object-cover rounded-3xl" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                  {content.craftsmanship[locale]}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  {content.craftTitle1[locale]}
                  <span className="block text-primary mt-2">{content.craftTitle2[locale]}</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{content.craftDesc[locale]}</p>
                <ul className="space-y-3">
                  {[content.feature1[locale], content.feature2[locale], content.feature3[locale], content.feature4[locale]].map((item, index) => (
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
