"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, Phone, Heart, ShoppingCart, User } from "lucide-react"

const navigation = [
  { name: "GIỚI THIỆU", href: "/gioi-thieu" },
  { name: "BST KIM VÂN SẮC", href: "/bo-suu-tap" },
  { name: "TRANG SỨC", href: "/trang-suc" },
  { name: "NHANG TRẦM", href: "/nhang-tram" },
  { name: "MỸ NGHỆ", href: "/my-nghe" },
  { name: "QUÀ TẶNG", href: "/qua-tang" },
  { name: "TRẦM HƯƠNG ĐỐT", href: "/tram-huong-dot" },
  { name: "BLOG", href: "/blog" },
  { name: "LIÊN HỆ", href: "/lien-he" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-[#8b1a1a] text-white text-center py-2 px-4 text-sm">
        <span className="font-medium">
          CƠ HỘI SỞ HỮU 1 CHỈ VÀNG KHI MUA TẠI THIÊN MỘC HƯƠNG
        </span>
        <span className="mx-4">|</span>
        <span>THỜI GIAN: 13/04 - 30/04</span>
      </div>

      {/* Main Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">TMH</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-primary font-serif text-lg font-semibold leading-tight">THIÊN MỘC HƯƠNG</p>
                <p className="text-muted-foreground text-xs">Tinh Hoa Trầm Việt</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Tìm kiếm nhanh..."
                  className="w-full px-4 py-2 pr-10 border border-border rounded-full bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Contact & Actions */}
            <div className="flex items-center gap-4">
              <a href="tel:0818348368" className="hidden md:flex items-center gap-2 text-foreground hover:text-primary">
                <Phone className="w-5 h-5" />
                <span className="font-medium">0818348368</span>
              </a>
              <span className="hidden md:inline text-muted-foreground text-sm">Lịch sử đơn hàng</span>
              <div className="flex items-center gap-3">
                <button className="text-foreground hover:text-primary">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="text-foreground hover:text-primary relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
                </button>
                <button className="text-foreground hover:text-primary">
                  <User className="w-5 h-5" />
                </button>
              </div>
              {/* Language */}
              <div className="hidden md:flex items-center gap-1">
                <span className="w-6 h-4 bg-red-600 rounded-sm"></span>
                <span className="w-6 h-4 bg-blue-800 rounded-sm"></span>
                <span className="w-6 h-4 bg-yellow-400 rounded-sm"></span>
              </div>
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:block border-t border-border">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center justify-center gap-8 py-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-foreground hover:text-primary text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-border bg-card">
            <ul className="py-4 px-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="block py-2 text-foreground hover:text-primary text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
