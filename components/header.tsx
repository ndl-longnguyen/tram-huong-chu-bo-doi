"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Search, Phone } from "lucide-react"

const navigation = [
  { name: "GIỚI THIỆU", href: "/gioi-thieu" },
  { name: "TRANG SỨC", href: "/trang-suc" },
  { name: "VÒNG TAY", href: "/vong-tay" },
  { name: "NHANG TRẦM", href: "/nhang-tram" },
  { name: "MỸ NGHỆ", href: "/my-nghe" },
  { name: "QUÀ TẶNG", href: "/qua-tang" },
  { name: "BLOG", href: "/blog" },
  { name: "LIÊN HỆ", href: "/lien-he" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-primary-foreground font-serif text-xl font-bold">CBD</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-sm -z-10" />
              </div>
              <div className="hidden sm:block">
                <p className="text-primary font-serif text-xl font-bold leading-tight tracking-wide">
                  TRẦM HƯƠNG CHÚ BỘ ĐỘI
                </p>
                <p className="text-muted-foreground text-xs tracking-widest">Tinh Hoa Trầm Việt</p>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full px-5 py-2.5 pr-12 border border-border rounded-full bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-card transition-all"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Contact & Actions */}
            <div className="flex items-center gap-6">
              <a 
                href="tel:0818348368" 
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <Phone className="w-4 h-4 group-hover:animate-pulse" />
                <span className="font-semibold">0818.348.368</span>
              </a>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-foreground hover:text-primary transition-colors"
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
                    href={item.href}
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

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96" : "max-h-0"}`}>
          <nav className="border-t border-border bg-card">
            <ul className="py-4 px-4 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 text-sm font-medium rounded-lg transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* Mobile Phone */}
              <li className="pt-4 border-t border-border mt-4">
                <a 
                  href="tel:0818348368" 
                  className="flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>0818.348.368</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
