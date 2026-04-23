"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

import { categories } from "@/lib/products"

export function Footer() {
  const { t, getLocalizedPath, locale } = useLanguage()
  const localeKey = locale as "vi" | "en" | "zh"

  const collections = categories.map(cat => ({
    name: cat.name[localeKey],
    href: `/${cat.slug}`
  }))

  const policies = [
    { name: t("footer.policy.terms"), href: "/chinh-sach-dieu-khoan" },
    { name: t("footer.policy.privacy"), href: "/chinh-sach-bao-mat" },
    { name: t("footer.policy.shipping"), href: "/chinh-sach-van-chuyen" },
    { name: t("footer.policy.warranty"), href: "/chinh-sach-bao-hanh" },
  ]

  const aboutLinks = [
    { name: t("nav.about"), href: "/gioi-thieu" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/lien-he" },
  ]

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-white">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif text-primary mb-2 uppercase tracking-wide">{t("footer.newsletter")}</h3>
              <p className="text-gray-400 text-sm">{t("footer.newsletterDesc")}</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto min-w-0">
              <input
                type="email"
                placeholder={t("footer.enterEmail")}
                className="flex-1 min-w-0 md:w-80 px-5 py-3 bg-gray-900 border border-gray-700 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 hover:shadow-md transition-all duration-300 shrink-0 uppercase text-xs tracking-widest">
                {t("footer.subscribe")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Company Info - Span 2 columns on large screens for better balance */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Trầm Hương Chú Bộ Đội"
                width={200}
                height={80}
                className="h-14 w-auto object-contain logo-primary"
              />
              <div>
                <h3 className="text-primary font-serif text-lg font-bold tracking-tight uppercase">
                  TRẦM HƯƠNG CHÚ BỘ ĐỘI
                </h3>
              </div>
            </div>
            <ul className="space-y-4 text-sm text-gray-300 mb-8">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">Tiên Phước, TP. Đà Nẵng</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-semibold group-hover:text-white transition-colors">0765.942.942</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">tramhuongchubodoi@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">8:00 - 22:00</span>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/tramhuongchubodoivn" className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg overflow-hidden relative group">
                <Facebook className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a href="https://www.instagram.com/tramhuongchubodoi" className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all shadow-lg overflow-hidden relative group">
                <Instagram className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a href="https://www.youtube.com/@tramhuongchubodoi" className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-lg overflow-hidden relative group">
                <Youtube className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-primary font-serif font-bold mb-8 uppercase tracking-widest text-xs">{t("footer.policies")}</h3>
            <ul className="space-y-4 text-xs text-gray-400 uppercase tracking-wider font-medium">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <Link href={getLocalizedPath(policy.href)} className="hover:text-primary transition-all flex items-center gap-2 group">
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-primary font-serif font-bold mb-8 uppercase tracking-widest text-xs">{t("footer.aboutUs")}</h3>
            <ul className="space-y-4 text-xs text-gray-400 uppercase tracking-wider font-medium">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link href={getLocalizedPath(link.href)} className="hover:text-primary transition-all flex items-center gap-2 group">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-primary font-serif font-bold mb-8 uppercase tracking-widest text-xs">{t("footer.collections")}</h3>
            <ul className="space-y-4 text-xs text-gray-400 uppercase tracking-wider font-medium">
              {collections.map((collection) => (
                <li key={collection.name}>
                  <Link href={getLocalizedPath(collection.href)} className="hover:text-primary transition-all flex items-center gap-2 group">
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-[10px] text-gray-500 tracking-widest uppercase font-bold">
          <p>© 2022 TRẦM HƯƠNG CHÚ BỘ ĐỘI. {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
