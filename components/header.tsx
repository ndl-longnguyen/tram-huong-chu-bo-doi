"use client"
// Updated branding logo and text alignment

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Search, Phone, Heart } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageSwitcher } from "./language-switcher"
import { WishlistDrawer } from "./wishlist-drawer"
import { useWishlist } from "@/lib/wishlist-context"

import { categories, products } from "@/lib/products"
import { Product } from "@/lib/products"
import { useRouter } from "next/navigation"

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

  const navigation = [
    { name: t("nav.about"), href: "/gioi-thieu" },
    ...categories.map(cat => ({
      name: cat.name[localeKey],
      href: `/${cat.slug}`
    })),
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/lien-he" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filtered = products.filter(product =>
        product.name[localeKey].toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
      setSearchResults(filtered)
      setIsSearchOpen(true)
    } else {
      setSearchResults([])
      setIsSearchOpen(false)
    }
  }, [searchQuery, localeKey])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Optional: navigate to a dedicated search page
    // router.push(getLocalizedPath(`/search?q=${searchQuery}`))
  }

  const handleProductClick = (productId: string) => {
    router.push(getLocalizedPath(`/san-pham/${productId}`))
    setSearchQuery("")
    setIsSearchOpen(false)
    setIsMenuOpen(false)
  }

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

              {/* Search Results Dropdown */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
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
                  <div className="bg-muted/30 p-2 border-t border-border">
                    <button
                      className="w-full py-2 text-center text-xs font-semibold text-primary hover:underline"
                      onClick={handleSearchSubmit}
                    >
                      {t("common.viewMore")}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact & Actions */}
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
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-3/4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out relative z-[60] ${isMenuOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
          <nav className="border-t border-border bg-card">
            {/* Mobile Search */}
            <div className="p-4 border-b border-border bg-muted/20">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("header.search")}
                  className="w-full px-4 py-2.5 pr-10 border border-border rounded-xl bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

                {/* Mobile Search Results */}
                {searchQuery.length > 1 && searchResults.length > 0 && (
                  <div className="mt-2 space-y-2 max-h-60 overflow-y-auto">
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
            </div>
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
                    {item.name}
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
