"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { categories } from "@/lib/products"

export function ExploreSection() {
  const { t, getLocalizedPath, locale } = useLanguage()
  const localeKey = locale as "vi" | "en" | "zh"

  const exploreItems = categories.map(cat => ({
    title: cat.name[localeKey],
    description: cat.description[localeKey],
    image: cat.image,
    href: `/${cat.slug}`,
  }))

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider uppercase font-bold text-xs">
            {t("home.explore.subtitle")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground uppercase">
            {t("home.explore.title")}
          </h2>
        </div>

        {/* Explore Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {exploreItems.map((item, index) => (
            <Link key={index} href={getLocalizedPath(item.href)} className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
                  <h3 className="text-white font-serif text-lg md:text-xl font-semibold text-center mb-1 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-xs text-center mb-3">
                    {item.description}
                  </p>
                  <span className="flex items-center gap-1 text-primary text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {t("common.viewMore")} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
