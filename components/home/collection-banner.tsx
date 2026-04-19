"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

const bannerContent = {
  title: { vi: "BO SUU TAP KIM TAM BAO", en: "KIM TAM BAO COLLECTION", zh: "金心宝系列" },
  desc: {
    vi: "Bo suu tap dac biet voi nhung thiet ke tinh xao, ket hop tinh hoa nghe thuat thu cong truyen thong va phong cach hien dai.",
    en: "A special collection with exquisite designs, combining traditional handcraft artistry with modern style.",
    zh: "特别系列，设计精致，融合传统手工艺与现代风格。",
  },
  cta: { vi: "KHAM PHA", en: "EXPLORE", zh: "探索" },
}

export function CollectionBanner() {
  const { locale } = useLanguage()

  return (
    <section className="relative">
      {/* Full Width Image Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative h-[400px] lg:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
            alt="San pham tram huong"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="relative h-[400px] lg:h-[600px] bg-secondary flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80')`,
            }}
          />
          <div className="relative z-10 text-center px-8 max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              {bannerContent.title[locale]}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {bannerContent.desc[locale]}
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {bannerContent.cta[locale]}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {[
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
          "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80",
          "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
        ].map((src, i) => (
          <div key={i} className="relative h-48 md:h-64">
            <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
