"use client"
// Updated branding logo and text alignment

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Search, Phone, Heart, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageSwitcher } from "./language-switcher"
import { WishlistDrawer } from "./wishlist-drawer"
import { useWishlist } from "@/lib/wishlist-context"

import { categories, products, searchProducts } from "@/lib/products"
import { Product } from "@/lib/products"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { t, getLocalizedPath, locale } = useLanguage()
  const { wishlist } = useWishlist()
  const localeKey = locale as "vi" | "en" | "zh"
  const router = useRouter()
  const pathname = usePathname()

  const navigation = [
    { name: t("nav.about"), href: "/gioi-thieu" },
    ...categories.map(cat => ({
      name: cat.name[localeKey],
      href: `/${cat.slug}`
    })),
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/lien-he" },
  ]

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      document.documentElement.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
      document.documentElement.style.overflow = "unset"
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      // Show mini header after scrolling down 100px
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filtered = searchProducts(searchQuery, localeKey).slice(0, 20)
      setSearchResults(filtered)
      setIsSearchOpen(true)
    } else {
      setSearchResults([])
      setIsSearchOpen(false)
    }
  }, [searchQuery, localeKey])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleProductClick = (productId: string) => {
    router.push(getLocalizedPath(`/san-pham/${productId}`))
    setSearchQuery("")
    setIsSearchOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Sticky Mini Header (Temporary Header) - Desktop Only */}
      <div
        className={`hidden lg:block fixed top-0 left-0 right-0 z-[60] bg-card/95 backdrop-blur-md border-b border-border shadow-lg transition-all duration-500 ease-in-out ${isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href={getLocalizedPath("/")} className="flex items-center gap-2 group flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain transition-transform group-hover:scale-110 logo-primary"
            />
          </Link>

          <nav className="hidden lg:block overflow-hidden">
            <ul className="flex items-center gap-4 xl:gap-4 px-4">
              {navigation.map((item) => {
                const localizedPath = getLocalizedPath(item.href)
                const isActive = pathname === localizedPath || (item.href !== "/" && pathname.startsWith(localizedPath))
                return (
                  <li key={item.name} className="flex-shrink-0">
                    <Link
                      href={localizedPath}
                      className={`text-xs xl:text-sm font-medium transition-colors relative group whitespace-nowrap ${isActive ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                    >
                      {item.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`} />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:0765942942"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:shadow-lg transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">0765.942.942</span>
            </a>
            <button
              className="lg:hidden text-foreground hover:text-primary p-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header - Fixed on Mobile, Relative on Desktop */}
      <header
        className={`w-full z-40 transition-all duration-300 
          fixed top-0 left-0 right-0 lg:relative 
          ${isScrolled ? "shadow-md bg-card/95 backdrop-blur-md" : "bg-card"}
        `}
      >
        <div className="bg-card/95 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-3 md:py-4">
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

              <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
                <form onSubmit={handleSearchSubmit} className="w-full group">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                      onFocus={() => searchQuery.length > 1 && setIsSearchOpen(true)}
                      placeholder={t("header.search")}
                      className="w-full px-5 py-2.5 pr-12 border border-border rounded-full bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-card transition-all"
                    />
                    <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </form>

                {isSearchOpen && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-card/95 backdrop-blur-xl border border-border rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="p-3 max-h-[60vh] overflow-y-auto custom-scrollbar">
                      {searchResults.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductClick(product.id)}
                          className="w-full flex items-center gap-4 p-3 hover:bg-muted rounded-xl transition-colors text-left group"
                        >
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={product.image}
                              alt={product.name[localeKey]}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                              {product.name[localeKey]}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {new Intl.NumberFormat('vi-VN').format(product.salePrice || product.originalPrice)} đ
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 md:gap-4">
                <div className="hidden lg:block">
                  <LanguageSwitcher />
                </div>

                <WishlistDrawer>
                  <button className="p-2.5 text-foreground hover:text-primary transition-colors relative group">
                    <Heart className={`w-6 h-6 ${wishlist.length > 0 ? "fill-primary text-primary" : ""}`} />
                    {wishlist.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-card animate-in zoom-in duration-300">
                        {wishlist.length}
                      </span>
                    )}
                  </button>
                </WishlistDrawer>
                <a
                  href="tel:0765942942"
                  className="hidden md:flex items-center gap-2 px-4 py-2 border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md transition-all duration-300 group"
                >
                  <Phone className="w-4 h-4 group-hover:animate-pulse" />
                  <span className="font-semibold">0765.942.942</span>
                </a>

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

          <nav className="hidden lg:block border-t border-border/50 bg-gradient-to-r from-transparent via-muted/30 to-transparent">
            <div className="max-w-7xl mx-auto px-4">
              <ul className="flex items-center justify-center gap-1 py-2">
                {navigation.map((item) => {
                  const localizedPath = getLocalizedPath(item.href)
                  const isActive = pathname === localizedPath || (item.href !== "/" && pathname.startsWith(localizedPath))
                  return (
                    <li key={item.name}>
                      <Link
                        href={localizedPath}
                        className={`relative px-3 py-2 text-xs xl:text-sm font-medium transition-colors group uppercase tracking-wide ${isActive ? "text-primary" : "text-foreground hover:text-primary"
                          }`}
                      >
                        {item.name}
                        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all ${isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                          }`} />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer for Fixed Mobile Header */}
      <div className="h-[64px] md:h-[80px] lg:hidden" />

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-all duration-300 ${isMenuOpen ? "visible" : "invisible pointer-events-none"
          }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-card shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="p-4 border-b border-border flex items-center justify-between bg-muted/20">
            <Link href={getLocalizedPath("/")} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={32} height={32} className="h-8 w-auto logo-primary" />
              <span className="font-serif font-bold text-sm text-primary">TRẦM HƯƠNG CHÚ BỘ ĐỘI</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4 border-b border-border bg-card">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("header.search")}
                  className="w-full px-4 py-2.5 pr-10 border border-border rounded-xl bg-muted/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

            {searchQuery.length > 1 && searchResults.length > 0 && (
              <div className="mt-4 space-y-3 max-h-[40vh] overflow-y-auto custom-scrollbar">
                {searchResults.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="w-full flex items-center gap-3 p-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors text-left"
                  >
                    <div className="relative w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                      <Image src={product.image} alt="" fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{product.name[localeKey]}</p>
                      <p className="text-[10px] text-muted-foreground">
                        {new Intl.NumberFormat('vi-VN').format(product.salePrice || product.originalPrice)} đ
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav className="p-4">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const localizedPath = getLocalizedPath(item.href)
                  const isActive = pathname === localizedPath || (item.href !== "/" && pathname.startsWith(localizedPath))
                  return (
                    <li key={item.name}>
                      <Link
                        href={localizedPath}
                        className={`flex items-center justify-between py-3.5 px-4 text-base font-medium rounded-xl transition-all group ${isActive ? "text-primary bg-primary/5" : "text-foreground hover:text-primary hover:bg-primary/5"
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                        <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-primary translate-x-1" : "text-muted-foreground group-hover:text-primary group-hover:translate-x-1"
                          }`} />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          <div className="p-4 border-t border-border space-y-4 bg-muted/10">
            <div className="flex items-center justify-between px-4">
              <span className="text-sm font-medium text-muted-foreground">{t("header.language")}</span>
              <LanguageSwitcher />
            </div>
            <a
              href="tel:0765942942"
              className="flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>0765.942.942</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
