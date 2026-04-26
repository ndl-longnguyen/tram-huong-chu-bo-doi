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
    <section className="py-12 lg:py-16 bg-background relative overflow-hidden w-full">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

        {/* CTA */}
        <div className="text-center mt-12">
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
