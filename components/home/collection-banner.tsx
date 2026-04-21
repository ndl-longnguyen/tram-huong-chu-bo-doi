"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

export function CollectionBanner() {
  const { t, getLocalizedPath } = useLanguage()

  return (
    <section className="relative">
      {/* Full Width Image Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative h-[400px] lg:h-[600px]">
          <img
            src="/assets/banner/1.png"
            alt="Sản phẩm trầm hương"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="relative h-[400px] lg:h-[600px] bg-secondary flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/assets/banner/2.png')`,
            }}
          />
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
          <img
            src="/assets/banner/3.png"
            alt="Gallery 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-48 md:h-64">
          <img
            src="/assets/banner/4.png"
            alt="Gallery 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-48 md:h-64">
          <img
            src="/assets/banner/5.png"
            alt="Gallery 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-48 md:h-64">
          <img
            src="/assets/banner/1.png"
            alt="Gallery 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
