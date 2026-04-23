"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

export function CollectionBanner() {
  const { t, getLocalizedPath } = useLanguage()

  return (
    <section className="relative">
      {/* Full Width Image Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative h-[400px] lg:h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
            alt="Sản phẩm trầm hương"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="relative h-[400px] lg:h-[600px] bg-secondary flex items-center justify-center">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
              alt="Background pattern"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center px-8 max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 uppercase">
              {t("home.banner.title")}
              <span className="block text-primary mt-2 text-2xl md:text-3xl">{t("home.banner.title2")}</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("home.banner.desc")}
            </p>
            <Link
              href={getLocalizedPath("/trang-suc")}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-wider text-sm font-bold"
            >
              {t("home.banner.cta")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="relative h-48 md:h-64">
          <Image
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80"
            alt="Gallery 1"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-48 md:h-64">
          <Image
            src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80"
            alt="Gallery 2"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-48 md:h-64">
          <Image
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80"
            alt="Gallery 3"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-48 md:h-64">
          <Image
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80"
            alt="Gallery 4"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
