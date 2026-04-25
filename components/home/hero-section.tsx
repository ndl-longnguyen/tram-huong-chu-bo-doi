"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const { t, getLocalizedPath } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Background with Parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px) scale(1.15)`,
        }}
      >
        <Image
          src="/images/sections/tram-huong-chu-bo-doi-section-7.webp"
          alt="Agarwood Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{ left: 0, top: '-40px' }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Decorative Elements — clamped to stay inside viewport */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-x-1/2" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 min-h-[90vh] flex flex-col items-center justify-center text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm mb-6 tracking-widest uppercase">
            {t("hero.subtitle")}
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-wide drop-shadow-2xl animate-fade-in-up animation-delay-100 uppercase">
          <span className="block">{t("hero.title")}</span>
          <span className="block text-primary mt-2">{t("hero.title2")}</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
          <Link
            href={getLocalizedPath("/vong-tay")}
            className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            {t("hero.explore")}
          </Link>
          <Link
            href={getLocalizedPath("/gioi-thieu")}
            className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            {t("nav.about")}
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
