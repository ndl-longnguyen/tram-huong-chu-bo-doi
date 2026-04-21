"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, Gift, Award, Heart, Sparkles } from "lucide-react"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/i18n/language-context"

const giftProducts = [
  { id: "1", name: { vi: "Set Quà Tặng VIP", en: "VIP Gift Set", zh: "VIP礼品套装" }, price: 5500000, originalPrice: 6500000, image: "/products/p1.jpg", badge: { vi: "Best Seller", en: "Best Seller", zh: "畅销" } },
  { id: "2", name: { vi: "Hộp Quà Nhang Trầm Premium", en: "Premium Incense Gift Box", zh: "高级香礼盒" }, price: 2800000, originalPrice: 3500000, image: "/products/p2.jpg", badge: { vi: "Mới", en: "New", zh: "新品" } },
  { id: "3", name: { vi: "Set Vòng Tay Cặp Đôi", en: "Couple Bracelet Set", zh: "情侣手链套装" }, price: 3800000, image: "/products/p3.jpg" },
  { id: "4", name: { vi: "Quà Tặng Doanh Nghiệp", en: "Corporate Gift", zh: "企业礼品" }, price: 8500000, originalPrice: 10000000, image: "/products/p4.jpg", badge: { vi: "Corporate", en: "Corporate", zh: "企业" } },
  { id: "5", name: { vi: "Set Quà Tặng Sinh Nhật", en: "Birthday Gift Set", zh: "生日礼品套装" }, price: 1800000, image: "/products/p5.jpg" },
  { id: "6", name: { vi: "Quà Tặng Tết Luxury", en: "Luxury Tet Gift", zh: "豪华春节礼品" }, price: 12000000, originalPrice: 15000000, image: "/products/p6.jpg", badge: { vi: "Limited", en: "Limited", zh: "限量" } },
]

export default function GiftPage() {
  const { locale, getLocalizedPath } = useLanguage()

  const content = {
    home: { vi: "Trang Chủ", en: "Home", zh: "首页" },
    breadcrumb: { vi: "Quà Tặng Trầm Hương", en: "Agarwood Gifts", zh: "沉香礼品" },
    giftCategory: { vi: "QUÀ TẶNG Ý NGHĨA", en: "MEANINGFUL GIFTS", zh: "有意义的礼物" },
    title1: { vi: "Quà Tặng Trầm Hương", en: "Agarwood Gifts", zh: "沉香礼品" },
    title2: { vi: "Đẳng Cấp & Tinh Tế", en: "Elegant & Refined", zh: "优雅精致" },
    description: {
      vi: "Tặng quà trầm hương - tặng sức khỏe và bình an. Bộ sưu tập quà tặng cao cấp phù hợp cho mọi dịp đặc biệt trong cuộc sống.",
      en: "Give agarwood gifts - give health and peace. Premium gift collection suitable for all special occasions in life.",
      zh: "赠送沉香礼品 - 赠送健康与平安。适合生活中所有特殊场合的高端礼品系列。"
    },
    birthday: { vi: "Quà Tặng Sinh Nhật", en: "Birthday Gifts", zh: "生日礼物" },
    birthdayDesc: { vi: "Món quà ý nghĩa cho người thân yêu", en: "Meaningful gift for loved ones", zh: "给亲人的有意义礼物" },
    corporate: { vi: "Quà Tặng Doanh Nghiệp", en: "Corporate Gifts", zh: "企业礼品" },
    corporateDesc: { vi: "Phong cách đẳng cấp và chuyên nghiệp", en: "Elegant and professional style", zh: "优雅专业的风格" },
    wedding: { vi: "Quà Tặng Cưới Hỏi", en: "Wedding Gifts", zh: "婚礼礼物" },
    weddingDesc: { vi: "Lời chúc bình an cho cặp đôi", en: "Wishes of peace for the couple", zh: "对新人的平安祝福" },
    tet: { vi: "Quà Tặng Tết", en: "Tet Gifts", zh: "春节礼物" },
    tetDesc: { vi: "Tinh hoa đầu năm mới may mắn", en: "Essence of luck for the new year", zh: "新年好运精华" },
    priceRange: { vi: "Mức giá:", en: "Price range:", zh: "价格范围：" },
    collectionTitle: { vi: "Bộ Sưu Tập Quà Tặng", en: "Gift Collection", zh: "礼品系列" },
    collectionDesc: { vi: "Những món quà trầm hương tinh tế, được đóng gói sang trọng", en: "Exquisite agarwood gifts, elegantly packaged", zh: "精致的沉香礼品，包装精美" },
    servicesTitle: { vi: "DỊCH VỤ QUÀ TẶNG", en: "GIFT SERVICES", zh: "礼品服务" },
    servicesSubtitle: { vi: "Dịch Vụ Đặc Biệt", en: "Special Services", zh: "特别服务" },
    service1Title: { vi: "Gói Quà Cao Cấp", en: "Premium Packaging", zh: "高级包装" },
    service1Desc: { vi: "Dịch vụ đóng gói quà tặng sang trọng với hộp gỗ trầm và thiệp chúc mừng", en: "Premium gift packaging service with agarwood box and greeting card", zh: "高级礼品包装服务，配有沉香木盒和贺卡" },
    service2Title: { vi: "Khắc Tên Miễn Phí", en: "Free Engraving", zh: "免费刻字" },
    service2Desc: { vi: "Khắc tên hoặc thông điệp cá nhân lên sản phẩm hoàn toàn miễn phí", en: "Free engraving of name or personal message on products", zh: "产品免费刻字或个人信息" },
    service3Title: { vi: "Giao Hàng Express", en: "Express Delivery", zh: "快递服务" },
    service3Desc: { vi: "Giao hàng nhanh trong 24h, có dịch vụ giao đến tận nơi", en: "Fast delivery within 24h, door-to-door service available", zh: "24小时内快速送达，提供上门服务" },
  }

  const giftOccasions = [
    { icon: Gift, title: content.birthday[locale], desc: content.birthdayDesc[locale] },
    { icon: Award, title: content.corporate[locale], desc: content.corporateDesc[locale] },
    { icon: Heart, title: content.wedding[locale], desc: content.weddingDesc[locale] },
    { icon: Sparkles, title: content.tet[locale], desc: content.tetDesc[locale] },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative pb-16 lg:pb-24 pt-6 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-8">
              <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
                {content.home[locale]}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{content.breadcrumb[locale]}</span>
            </div>


            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                {content.giftCategory[locale]}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 uppercase tracking-tight">
                {content.title1[locale]}
                <span className="block text-primary mt-2">{content.title2[locale]}</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                {content.description[locale]}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {giftOccasions.map((occasion, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 md:p-6 bg-muted/50 rounded-2xl hover:bg-primary/5 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <occasion.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-1 md:mb-2 text-sm md:text-base">{occasion.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{occasion.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 uppercase tracking-tight">{content.collectionTitle[locale]}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{content.collectionDesc[locale]}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {giftProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  name={product.name[locale]}
                  badge={product.badge?.[locale]}
                  originalPrice={product.originalPrice || product.price}
                  salePrice={product.originalPrice ? product.price : undefined}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 tracking-widest uppercase">
                {content.servicesTitle[locale]}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground uppercase tracking-tight">{content.servicesSubtitle[locale]}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: content.service1Title[locale], desc: content.service1Desc[locale], image: "/products/p1.jpg" },
                { title: content.service2Title[locale], desc: content.service2Desc[locale], image: "/products/p2.jpg" },
                { title: content.service3Title[locale], desc: content.service3Desc[locale], image: "/products/p3.jpg" },
              ].map((service, index) => (
                <div key={index} className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-foreground font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
