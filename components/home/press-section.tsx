"use client"

import { useLanguage } from "@/lib/i18n/language-context"

const pressLogos = [
  { name: "VnExpress", color: "from-red-600 to-red-700" },
  { name: "VTV", color: "from-blue-700 to-blue-800" },
  { name: "Tuoi Tre", color: "from-orange-500 to-orange-600" },
  { name: "Vietcetera", color: "from-gray-800 to-black" },
  { name: "Tien Phong", color: "from-red-700 to-red-800" },
  { name: "Dan Tri", color: "from-blue-600 to-blue-700" },
]

const sectionContent = {
  tag: { vi: "TRUYEN THONG", en: "MEDIA", zh: "媒体" },
  title: {
    vi: "Bao Chi Noi Ve Tram Huong Chu Bo Doi",
    en: "Media Coverage of Tram Huong Chu Bo Doi",
    zh: "媒体报道朱伯队沉香",
  },
  isoCert: { vi: "Chung nhan ISO", en: "ISO Certified", zh: "ISO认证" },
  warranty: { vi: "Bao hanh tron doi", en: "Lifetime Warranty", zh: "终身保修" },
  natural: { vi: "100% tu nhien", en: "100% Natural", zh: "100%天然" },
  delivery: { vi: "Giao hang toan quoc", en: "Nationwide Delivery", zh: "全国配送" },
}

export function PressSection() {
  const { locale } = useLanguage()

  return (
    <section className="py-16 lg:py-20 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
            {sectionContent.tag[locale]}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">
            {sectionContent.title[locale]}
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {pressLogos.map((logo, index) => (
            <div key={index} className={`bg-gradient-to-r ${logo.color} text-white px-6 py-3 rounded-xl font-bold text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`}>
              {logo.name}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              sectionContent.isoCert[locale],
              sectionContent.warranty[locale],
              sectionContent.natural[locale],
              sectionContent.delivery[locale],
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
