"use client"

import Link from "next/link"
import { Sparkles, Shield, Heart } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const featureData = {
  vi: [
    { icon: Sparkles, title: "100% Tu Nhien", description: "Tram huong nguyen chat, khong pha tron hoa chat" },
    { icon: Shield, title: "Bao Hanh Tron Doi", description: "Cam ket chat luong voi chinh sach bao hanh tot nhat" },
    { icon: Heart, title: "Che Tac Thu Cong", description: "Nghe nhan lanh nghe voi hon 20 nam kinh nghiem" },
  ],
  en: [
    { icon: Sparkles, title: "100% Natural", description: "Pure agarwood, no chemical additives" },
    { icon: Shield, title: "Lifetime Warranty", description: "Quality commitment with the best warranty policy" },
    { icon: Heart, title: "Handcrafted", description: "Skilled artisans with over 20 years of experience" },
  ],
  zh: [
    { icon: Sparkles, title: "100%天然", description: "纯沉香，无化学添加剂" },
    { icon: Shield, title: "终身保修", description: "以最佳保修政策承诺品质" },
    { icon: Heart, title: "手工制作", description: "拥有20多年经验的熟练工匠" },
  ],
}

const introContent = {
  tag: { vi: "GIOI THIEU", en: "INTRODUCTION", zh: "简介" },
  subtitle: { vi: "Tinh Hoa Tram Viet", en: "Essence of Vietnamese Agarwood", zh: "越南沉香精华" },
  description: {
    vi: "Chung toi tin rang tram huong khong chi la san pham phong thuy, ma con la bieu tuong cua su thanh tinh, may man va ket noi voi van hoa truyen thong Viet Nam ngan doi.",
    en: "We believe agarwood is not just a feng shui product, but a symbol of purity, luck, and connection to Vietnam's centuries-old traditional culture.",
    zh: "我们相信沉香不仅仅是一种风水产品，更是纯洁、幸运的象征，连接着越南数百年的传统文化。",
  },
  imageCaption: { vi: "Bo suu tap moi", en: "New Collection", zh: "新系列" },
  braceletTitle: { vi: "Vong Tay Tram Huong", en: "Agarwood Bracelets", zh: "沉香手链" },
  braceletDesc: {
    vi: "Thiet ke tinh xao, mang nang luong tich cuc va may man den cho nguoi deo.",
    en: "Exquisite design, bringing positive energy and good luck to the wearer.",
    zh: "设计精致，为佩戴者带来正能量和好运。",
  },
  cta: { vi: "TIM HIEU THEM VE CHUNG TOI", en: "LEARN MORE ABOUT US", zh: "了解更多关于我们" },
}

export function IntroSection() {
  const { locale, getLocalizedPath } = useLanguage()
  const features = featureData[locale]

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
            {introContent.tag[locale]}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Tram Huong Chu Bo Doi
            <span className="block text-primary mt-2">{introContent.subtitle[locale]}</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            {introContent.description[locale]}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image with overlay */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80"
                alt="Vong tay tram huong"
                className="w-full h-[450px] lg:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3">
                  {introContent.imageCaption[locale]}
                </span>
                <h3 className="text-white font-serif text-2xl mb-2">{introContent.braceletTitle[locale]}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {introContent.braceletDesc[locale]}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80"
                  alt="Vong tay tram huong"
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80"
                  alt="San pham tram huong"
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80"
                  alt="Nghe nhan che tac"
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80"
                  alt="Tram huong cao cap"
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href={getLocalizedPath("/gioi-thieu")}
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            {introContent.cta[locale]}
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
