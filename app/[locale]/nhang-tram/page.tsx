"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, Leaf, Wind, Heart, Shield } from "lucide-react"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/i18n/language-context"

const incenseProducts = [
  { id: "1", name: { vi: "Nhang Tram Huong Cao Cap", en: "Premium Incense", zh: "高级沉香" }, price: 450000, originalPrice: 550000, image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=500&q=80", badge: { vi: "Ban chay", en: "Best Seller", zh: "畅销" } },
  { id: "2", name: { vi: "Nu Tram Huong Thien Nhien", en: "Natural Incense Cones", zh: "天然沉香塔" }, price: 380000, originalPrice: 450000, image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&q=80", badge: { vi: "Moi", en: "New", zh: "新品" } },
  { id: "3", name: { vi: "Nhang Vong Tram Huong", en: "Coil Incense", zh: "盘香" }, price: 520000, originalPrice: 650000, image: "https://images.unsplash.com/photo-1616169227523-5f66a24f0735?w=500&q=80" },
  { id: "4", name: { vi: "Nhang Tram Huong Dac Biet", en: "Special Incense", zh: "特级沉香" }, price: 780000, originalPrice: 900000, image: "https://images.unsplash.com/photo-1600618528161-fe7e4e98c8a1?w=500&q=80", badge: { vi: "Premium", en: "Premium", zh: "高端" } },
  { id: "5", name: { vi: "Nu Tram Mini", en: "Mini Cones", zh: "迷你香塔" }, price: 280000, image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=500&q=80" },
  { id: "6", name: { vi: "Nhang Tram Gift Set", en: "Gift Set", zh: "礼盒装" }, price: 1200000, originalPrice: 1500000, image: "https://images.unsplash.com/photo-1605651531144-51381895e23e?w=500&q=80", badge: { vi: "Qua tang", en: "Gift", zh: "礼品" } },
]

export default function IncensePage() {
  const { locale, getLocalizedPath } = useLanguage()

  const content = {
    home: { vi: "Trang chu", en: "Home", zh: "首页" },
    breadcrumb: { vi: "Nhang Tram Huong", en: "Agarwood Incense", zh: "沉香" },
    product: { vi: "SAN PHAM", en: "PRODUCTS", zh: "产品" },
    title1: { vi: "Nhang Tram Huong", en: "Agarwood Incense", zh: "沉香" },
    title2: { vi: "Nguyen Chat", en: "Pure Natural", zh: "纯天然" },
    description: {
      vi: "Nhang tram huong cao cap, duoc san xuat tu 100% bot tram huong tu nhien, mang lai huong thom thanh khiet va nang luong tich cuc cho khong gian song.",
      en: "Premium agarwood incense, produced from 100% natural agarwood powder, bringing pure fragrance and positive energy to your living space.",
      zh: "高级沉香，采用100%天然沉香粉制作，为您的生活空间带来纯净的香气和正能量。"
    },
    natural: { vi: "100% Tu Nhien", en: "100% Natural", zh: "100%天然" },
    naturalDesc: { vi: "Duoc lam tu bot tram huong nguyen chat, khong hoa chat doc hai", en: "Made from pure agarwood powder, no harmful chemicals", zh: "采用纯沉香粉制作，无有害化学物质" },
    fragrance: { vi: "Huong Thom Diu Nhe", en: "Gentle Fragrance", zh: "温和香气" },
    fragranceDesc: { vi: "Huong tram tu nhien, thanh tao, giup thu gian tinh than", en: "Natural agarwood fragrance, elegant, helps relax the mind", zh: "天然沉香香气，优雅，有助于放松身心" },
    health: { vi: "Tot Cho Suc Khoe", en: "Good for Health", zh: "有益健康" },
    healthDesc: { vi: "Giup thanh loc khong khi, mang lai cam giac binh an", en: "Helps purify the air, brings a sense of peace", zh: "有助于净化空气，带来平静感" },
    safe: { vi: "An Toan", en: "Safe", zh: "安全" },
    safeDesc: { vi: "Khong khoi doc, an toan cho ca gia dinh va tre nho", en: "No toxic smoke, safe for the whole family and children", zh: "无毒烟，对全家和儿童都安全" },
    productsTitle: { vi: "San Pham Nhang Tram", en: "Incense Products", zh: "沉香产品" },
    productsDesc: { vi: "Kham pha bo suu tap nhang tram huong cao cap cua chung toi", en: "Discover our premium agarwood incense collection", zh: "探索我们的高端沉香系列" },
    howToUse: { vi: "HUONG DAN SU DUNG", en: "HOW TO USE", zh: "使用方法" },
    howToUseTitle: { vi: "Cach Su Dung Nhang Tram", en: "How to Use Incense", zh: "如何使用沉香" },
    step1: { vi: "Chuan bi", en: "Prepare", zh: "准备" },
    step1Desc: { vi: "Dat nhang vao de dot hoac lu huong phu hop", en: "Place incense in a suitable holder or censer", zh: "将香放入合适的香座或香炉中" },
    step2: { vi: "Thap nhang", en: "Light", zh: "点燃" },
    step2Desc: { vi: "Cham lua dau nhang va de chay vai giay", en: "Light the tip and let it burn for a few seconds", zh: "点燃顶端，让其燃烧几秒钟" },
    step3: { vi: "Thuong thuc", en: "Enjoy", zh: "享受" },
    step3Desc: { vi: "Thoi tat lua, de nhang toa huong tu nhien", en: "Blow out the flame, let the incense release its natural fragrance", zh: "吹灭火焰，让香自然散发香气" },
  }

  const benefits = [
    { icon: Leaf, title: content.natural[locale], description: content.naturalDesc[locale] },
    { icon: Wind, title: content.fragrance[locale], description: content.fragranceDesc[locale] },
    { icon: Heart, title: content.health[locale], description: content.healthDesc[locale] },
    { icon: Shield, title: content.safe[locale], description: content.safeDesc[locale] },
  ]

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
                {content.product[locale]}
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
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 md:p-6 bg-muted/50 rounded-2xl hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-1 md:mb-2 text-sm md:text-base">{benefit.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                {content.productsTitle[locale]}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {content.productsDesc[locale]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {incenseProducts.map((product) => (
                <ProductCard key={product.id} product={{
                  ...product,
                  name: product.name[locale],
                  badge: product.badge?.[locale]
                }} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
                {content.howToUse[locale]}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                {content.howToUseTitle[locale]}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: content.step1[locale], desc: content.step1Desc[locale] },
                { step: "02", title: content.step2[locale], desc: content.step2Desc[locale] },
                { step: "03", title: content.step3[locale], desc: content.step3Desc[locale] },
              ].map((item, index) => (
                <div key={index} className="relative bg-card p-8 rounded-2xl border border-border text-center">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
                    {item.step}
                  </span>
                  <h3 className="text-foreground font-semibold text-lg mt-4 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
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
