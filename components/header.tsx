"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Search, Phone, Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import type { Locale } from "@/lib/i18n/translations"

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

const languageFlags: Record<Locale, string> = {
  vi: "🇻🇳",
  en: "🇬🇧",
  zh: "🇨🇳",
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { locale, setLocale, t, localeNames, getLocalizedPath } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isLangOpen && !(e.target as Element).closest(".lang-dropdown")) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isLangOpen])

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
      {/* Main Header */}
      <div className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <Link href={getLocalizedPath("/")} className="flex items-center gap-2 md:gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-primary-foreground font-serif text-base md:text-xl font-bold">CBD</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-sm -z-10" />
              </div>
              <div className="hidden sm:block">
                <p className="text-primary font-serif text-base md:text-xl font-bold leading-tight tracking-wide">
                  TRAM HUONG CHU BO DOI
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
              {/* Language Switcher */}
              <div className="relative lang-dropdown">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 bg-muted/50 border border-border rounded-full text-xs md:text-sm text-foreground hover:border-primary/50 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  <span>{languageFlags[locale]}</span>
                  <span className="hidden md:inline">{localeNames[locale]}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-2 w-40 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50">
                    {(Object.keys(localeNames) as Locale[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLocale(lang)
                          setIsLangOpen(false)
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                          locale === lang 
                            ? "bg-primary/10 text-primary" 
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        <span className="text-lg">{languageFlags[lang]}</span>
                        <span>{localeNames[lang]}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a 
                href="tel:0765942942" 
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <Phone className="w-4 h-4 group-hover:animate-pulse" />
                <span className="font-semibold">0765.942.942</span>
              </a>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-foreground hover:text-primary transition-colors p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-[600px]" : "max-h-0"}`}>
          <nav className="border-t border-border bg-card">
            <ul className="py-4 px-4 space-y-1">
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
              {/* Mobile Language Switcher */}
              <li className="pt-4 border-t border-border mt-4">
                <div className="px-4 pb-2 text-xs text-muted-foreground uppercase tracking-wider">
                  {locale === "vi" ? "Ngon ngu" : locale === "en" ? "Language" : "语言"}
                </div>
                <div className="flex flex-wrap gap-2 px-4">
                  {(Object.keys(localeNames) as Locale[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLocale(lang)
                        setIsMenuOpen(false)
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        locale === lang 
                          ? "bg-primary text-white" 
                          : "bg-muted text-foreground hover:bg-primary/10"
                      }`}
                    >
                      <span>{languageFlags[lang]}</span>
                      <span className="hidden xs:inline">{localeNames[lang]}</span>
                    </button>
                  ))}
                </div>
              </li>
              {/* Mobile Phone */}
              <li className="pt-4">
                <a 
                  href="tel:0765942942" 
                  className="flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
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
