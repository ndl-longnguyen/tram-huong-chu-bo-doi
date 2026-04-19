"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const heroContent = {
  tagline: {
    vi: "TINH HOA TRAM VIET",
    en: "ESSENCE OF VIETNAMESE AGARWOOD",
    zh: "越南沉香精华",
  },
  description: {
    vi: "Ke thua tinh hoa nghe tram huong truyen thong, mang den nhung san pham tram huong tu nhien 100% voi thiet ke doc dao va chat luong vuot troi.",
    en: "Inheriting traditional agarwood craftsmanship, delivering 100% natural agarwood products with unique designs and superior quality.",
    zh: "传承传统沉香工艺，提供100%天然沉香产品，设计独特，品质卓越。",
  },
  explore: {
    vi: "KHAM PHA BO SUU TAP",
    en: "EXPLORE COLLECTION",
    zh: "探索系列",
  },
  about: {
    vi: "VE CHUNG TOI",
    en: "ABOUT US",
    zh: "关于我们",
  },
}

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const { locale, getLocalizedPath } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80')`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 min-h-[90vh] flex flex-col items-center justify-center text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm mb-6 tracking-widest">
            {heroContent.tagline[locale]}
          </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-wide drop-shadow-2xl animate-fade-in-up animation-delay-100">
          <span className="block">TRAM HUONG</span>
          <span className="block text-primary mt-2">CHU BO DOI</span>
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
          {heroContent.description[locale]}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
          <Link
            href={getLocalizedPath("/trang-suc")}
            className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            {heroContent.explore[locale]}
          </Link>
          <Link
            href={getLocalizedPath("/gioi-thieu")}
            className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300"
          >
            {heroContent.about[locale]}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
