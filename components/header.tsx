"use client"
// Updated branding logo and text alignment

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Search, Phone } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageSwitcher } from "./language-switcher"

const navigation = [
  { name: "nav.about", href: "/gioi-thieu" },
  { name: "nav.jewelry", href: "/trang-suc" },
  { name: "nav.bracelet", href: "/vong-tay" },
  { name: "nav.incense", href: "/nhang-tram" },
  { name: "nav.art", href: "/my-nghe" },
  { name: "nav.gift", href: "/qua-tang" },
  { name: "nav.blog", href: "/blog" },
  { name: "nav.contact", href: "/lien-he" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, getLocalizedPath } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
      {/* Main Header */}
      <div className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <Link href={getLocalizedPath("/")} className="flex items-center gap-2 md:gap-3 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Trầm Hương Chú Bộ Đội"
                  width={200}
                  height={80}
                  className="h-10 w-auto md:h-14 object-contain transition-transform group-hover:scale-105 logo-primary"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-primary font-serif text-base md:text-xl font-bold leading-tight tracking-wide">
                  TRẦM HƯƠNG CHÚ BỘ ĐỘI
                </p>
                <p className="text-muted-foreground text-xs tracking-widest">{t("header.tagline")}</p>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder={t("header.search")}
                  className="w-full px-5 py-2.5 pr-12 border border-border rounded-full bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-card transition-all"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Contact & Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>
              <a
                href="tel:0765942942"
                className="hidden md:flex items-center gap-2 px-4 py-2 border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 group-hover:animate-pulse" />
                <span className="font-semibold">0765.942.942</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-foreground hover:text-primary transition-colors p-2 relative z-[70] cursor-pointer touch-manipulation"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:block border-t border-border/50 bg-gradient-to-r from-transparent via-muted/30 to-transparent">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center justify-center gap-1 py-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={getLocalizedPath(item.href)}
                    className="relative px-5 py-2.5 text-foreground hover:text-primary text-sm font-medium transition-colors group"
                  >
                    {t(item.name)}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-3/4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out relative z-[60] ${isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
          <nav className="border-t border-border bg-card">
            <div className="p-4 border-b border-border flex justify-between items-center bg-muted/30">
              <span className="text-sm font-medium text-muted-foreground px-4">Ngôn ngữ:</span>
              <LanguageSwitcher />
            </div>
            <ul className="py-2 px-4 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={getLocalizedPath(item.href)}
                    className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 text-sm font-medium rounded-lg transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.name)}
                  </Link>
                </li>
              ))}
              {/* Mobile Phone */}
              <li className="pt-4">
                <a
                  href="tel:0765942942"
                  className="flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 hover:shadow-md transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>0765.942.942</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
