"use client"

import Link from "next/link"
import Image from "next/image"
import { Sparkles, Shield, Heart } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function IntroSection() {
  const { t, getLocalizedPath } = useLanguage()

  const features = [
    {
      icon: Sparkles,
      title: t("home.intro.feature1.title"),
      description: t("home.intro.feature1.desc"),
    },
    {
      icon: Shield,
      title: t("home.intro.feature2.title"),
      description: t("home.intro.feature2.desc"),
    },
    {
      icon: Heart,
      title: t("home.intro.feature3.title"),
      description: t("home.intro.feature3.desc"),
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden w-full">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider uppercase">
            {t("nav.about")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance uppercase">
            {t("home.intro.title")}
            <span className="block text-primary mt-2">{t("home.intro.subtitle")}</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            {t("home.intro.description")}
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
              <Image
                src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80"
                alt={t("home.intro.bracelet")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3 uppercase tracking-wider">
                  {t("home.intro.newCollection")}
                </span>
                <h3 className="text-white font-serif text-2xl mb-2">{t("home.intro.bracelet")}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t("home.intro.braceletDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80"
                  alt="Vòng tay trầm hương"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
              <div className="relative group overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80"
                  alt="Sản phẩm trầm hương"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="relative group overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80"
                  alt="Nghệ nhân chế tác"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
              <div className="relative group overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80"
                  alt="Trầm hương cao cấp"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
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
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group uppercase tracking-wider text-sm"
          >
            {t("home.intro.learnMore")}
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
