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
        <div className="relative h-[300px] lg:h-[450px]">
          <Image
            src="/images/sections/tram-huong-chu-bo-doi-section-1.webp"
            alt="Sản phẩm trầm hương"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="relative h-[300px] lg:h-[450px] bg-secondary flex items-center justify-center">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/sections/tram-huong-chu-bo-doi-section-2.webp"
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
              href={getLocalizedPath("/vong-tay")}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-wider text-sm font-bold"
            >
              {t("home.banner.cta")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="relative h-40 md:h-52">
          <Image
            src="/images/sections/tram-huong-chu-bo-doi-section-3.webp"
            alt="Gallery 1"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-40 md:h-52">
          <Image
            src="/images/sections/tram-huong-chu-bo-doi-section-4.webp"
            alt="Gallery 2"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-40 md:h-52">
          <Image
            src="/images/sections/tram-huong-chu-bo-doi-section-5.webp"
            alt="Gallery 3"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-40 md:h-52">
          <Image
            src="/images/sections/tram-huong-chu-bo-doi-section-6.webp"
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
