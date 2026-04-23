"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, Leaf, Wind, Heart, Shield } from "lucide-react"
import Link from "next/link"
import { ProductGrid } from "@/components/products/product-grid"
import { useLanguage } from "@/lib/i18n/language-context"

export default function IncensePage() {
  const { locale, getLocalizedPath } = useLanguage()

  const content = {
    home: { vi: "Trang chủ", en: "Home", zh: "首页" },
    breadcrumb: { vi: "Nhang Trầm Hương", en: "Agarwood Incense", zh: "沉香" },
    product: { vi: "SẢN PHẨM", en: "PRODUCTS", zh: "产品" },
    title1: { vi: "Nhang Trầm Hương", en: "Agarwood Incense", zh: "沉香" },
    title2: { vi: "Nguyên Chất", en: "Pure Natural", zh: "纯天然" },
    description: {
      vi: "Nhang trầm hương cao cấp, được sản xuất từ 100% bột trầm hương tự nhiên, mang lại hương thơm thanh khiết và năng lượng tích cực cho không gian sống.",
      en: "Premium agarwood incense, produced from 100% natural agarwood powder, bringing pure fragrance and positive energy to your living space.",
      zh: "高级沉香，采用100%天然沉香粉制作，为您的生活空间带来纯净的香气和正能量。"
    },
    natural: { vi: "100% Tự Nhiên", en: "100% Natural", zh: "100%天然" },
    naturalDesc: { vi: "Được làm từ bột trầm hương nguyên chất, không hóa chất độc hại", en: "Made from pure agarwood powder, no harmful chemicals", zh: "采用纯沉香粉制作，无有害化学物质" },
    fragrance: { vi: "Hương Thơm Dịu Nhẹ", en: "Gentle Fragrance", zh: "温和香气" },
    fragranceDesc: { vi: "Hương trầm tự nhiên, thanh tao, giúp thư giãn tinh thần", en: "Natural agarwood fragrance, elegant, helps relax the mind", zh: "天然沉香香气，优雅，有助于放松身心" },
    health: { vi: "Tốt Cho Sức Khỏe", en: "Good for Health", zh: "有益健康" },
    healthDesc: { vi: "Giúp thanh lọc không khí, mang lại cảm giác bình an", en: "Helps purify the air, brings a sense of peace", zh: "有助于净化空气，带来平静感" },
    safe: { vi: "An Toàn", en: "Safe", zh: "安全" },
    safeDesc: { vi: "Không khói độc, an toàn cho cả gia đình và trẻ nhỏ", en: "No toxic smoke, safe for the whole family and children", zh: "无毒烟，对全家和儿童都安全" },
    productsTitle: { vi: "Sản Phẩm Nhang Trầm", en: "Incense Products", zh: "沉香产品" },
    productsDesc: { vi: "Khám phá bộ sưu tập nhang trầm hương cao cấp của chúng tôi", en: "Discover our premium agarwood incense collection", zh: "探索我们的高端沉香系列" },
    howToUse: { vi: "HƯỚNG DẪN SỬ DỤNG", en: "HOW TO USE", zh: "使用方法" },
    howToUseTitle: { vi: "Cách Sử Dụng Nhang Trầm", en: "How to Use Incense", zh: "如何使用沉香" },
    step1: { vi: "Chuẩn bị", en: "Prepare", zh: "准备" },
    step1Desc: { vi: "Đặt nhang vào đế đốt hoặc lư hương phù hợp", en: "Place incense in a suitable holder or censer", zh: "将香放入合适的香座或香炉中" },
    step2: { vi: "Thắp nhang", en: "Light", zh: "点燃" },
    step2Desc: { vi: "Chạm lửa đầu nhang và để cháy vài giây", en: "Light the tip and let it burn for a few seconds", zh: "点燃顶端，让其燃烧几秒钟" },
    step3: { vi: "Thưởng thức", en: "Enjoy", zh: "享受" },
    step3Desc: { vi: "Thổi tắt lửa, để nhang tỏa hương tự nhiên", en: "Blow out the flame, let the incense release its natural fragrance", zh: "吹灭火焰，让香自然散发香气" },
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
                {content.product[locale]}
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

        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 uppercase tracking-tight">
                {content.productsTitle[locale]}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {content.productsDesc[locale]}
              </p>
            </div>

            <ProductGrid categorySlug="nhang-tram" />
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 tracking-widest uppercase">
                {content.howToUse[locale]}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground uppercase tracking-tight">
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
