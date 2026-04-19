"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import type { Locale } from "@/lib/i18n/translations"

const collections: Record<Locale, string[]> = {
  vi: [
    "Vòng Tay Trầm Hương Cao Cấp",
    "Quà Tặng Trầm Hương",
    "Vòng Trầm Hương 108 Hạt",
    "Vòng Tay Phong Thủy",
    "Nữ Trầm Hương Cao Cấp",
    "Nhang Trầm Hương Cao Cấp",
    "Vòng Trầm Hương Bọc Vàng",
  ],
  en: [
    "Premium Agarwood Bracelets",
    "Agarwood Gifts",
    "108-Bead Agarwood Bracelet",
    "Feng Shui Bracelets",
    "Premium Incense Cones",
    "Premium Agarwood Incense",
    "Gold-wrapped Agarwood Bracelet",
  ],
  zh: [
    "高端沉香手链",
    "沉香礼品",
    "108颗沉香手链",
    "风水手链",
    "高级香塔",
    "高级沉香",
    "包金沉香手链",
  ],
}

const policies: Record<Locale, string[]> = {
  vi: [
    "Chính Sách Bảo Hành",
    "Chính Sách Đổi Trả",
    "Chính Sách Vận Chuyển",
    "FAQ - Câu Hỏi Thường Gặp",
    "Hướng Dẫn Thanh Toán",
  ],
  en: [
    "Warranty Policy",
    "Return Policy",
    "Shipping Policy",
    "FAQ",
    "Payment Guide",
  ],
  zh: [
    "保修政策",
    "退货政策",
    "运输政策",
    "常见问题",
    "付款指南",
  ],
}

const policies: Record<Locale, string[]> = {
  vi: [
    "Chinh sach bao hanh",
    "Chinh sach doi tra",
    "Chinh sach van chuyen",
    "FAQ - Cau hoi thuong gap",
    "Huong dan thanh toan",
  ],
  en: [
    "Warranty Policy",
    "Return Policy",
    "Shipping Policy",
    "FAQ",
    "Payment Guide",
  ],
  zh: [
    "保修政策",
    "退换货政策",
    "运输政策",
    "常见问题",
    "付款指南",
  ],
}

const aboutLinks: Record<Locale, { label: string; href: string }[]> = {
  vi: [
    { label: "Gioi thieu", href: "/gioi-thieu" },
    { label: "Cau chuyen thuong hieu", href: "/gioi-thieu" },
    { label: "Lien he", href: "/lien-he" },
    { label: "Dieu khoan dich vu", href: "#" },
  ],
  en: [
    { label: "About Us", href: "/gioi-thieu" },
    { label: "Brand Story", href: "/gioi-thieu" },
    { label: "Contact", href: "/lien-he" },
    { label: "Terms of Service", href: "#" },
  ],
  zh: [
    { label: "关于我们", href: "/gioi-thieu" },
    { label: "品牌故事", href: "/gioi-thieu" },
    { label: "联系我们", href: "/lien-he" },
    { label: "服务条款", href: "#" },
  ],
}

const content = {
  newsletter: { vi: "Dang ky nhan tin", en: "Subscribe to Newsletter", zh: "订阅通讯" },
  newsletterDesc: { vi: "Nhan thong tin uu dai va san pham moi nhat", en: "Get the latest updates and promotions", zh: "获取最新优惠和产品信息" },
  enterEmail: { vi: "Nhap email cua ban", en: "Enter your email", zh: "输入您的邮箱" },
  subscribe: { vi: "Dang ky", en: "Subscribe", zh: "订阅" },
  workingHours: { vi: "8:00 - 22:00 (Thu 2 - Chu nhat)", en: "8:00 - 22:00 (Mon - Sun)", zh: "8:00 - 22:00 (周一至周日)" },
  address: { vi: "Tien Phuoc, TP. Da Nang (Quang Nam cu)", en: "Tien Phuoc, Da Nang City (former Quang Nam)", zh: "前光南省 (现岘港市) 先福" },
  policies: { vi: "Chinh sach", en: "Policies", zh: "政策" },
  aboutUs: { vi: "Ve chung toi", en: "About Us", zh: "关于我们" },
  collections: { vi: "Bo suu tap", en: "Collections", zh: "产品系列" },
  copyright: { vi: "Tat ca quyen duoc bao luu.", en: "All rights reserved.", zh: "版权所有。" },
}

export function Footer() {
  const { locale, getLocalizedPath } = useLanguage()

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-white">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif text-primary mb-2">{content.newsletter[locale]}</h3>
              <p className="text-gray-400 text-sm">{content.newsletterDesc[locale]}</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder={content.enterEmail[locale]}
                className="flex-1 md:w-80 px-5 py-3 bg-gray-900 border border-gray-700 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all">
                {content.subscribe[locale]}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-lg font-bold">CBD</span>
              </div>
              <div>
                <h3 className="text-primary font-serif text-lg font-semibold">
                  TRAM HUONG CHU BO DOI
                </h3>
              </div>
            </div>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>{content.address[locale]}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:0765942942" className="font-medium hover:text-primary transition-colors">0765.942.942</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>contact@tramhuongchubodoi.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{content.workingHours[locale]}</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-primary font-serif text-lg font-semibold mb-6">{content.policies[locale]}</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {policies[locale].map((policy) => (
                <li key={policy}>
                  <Link href="#" className="hover:text-primary hover:pl-2 transition-all inline-block">
                    {policy}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-primary font-serif text-lg font-semibold mb-6">{content.aboutUs[locale]}</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {aboutLinks[locale].map((link) => (
                <li key={link.label}>
                  <Link href={getLocalizedPath(link.href)} className="hover:text-primary hover:pl-2 transition-all inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-primary font-serif text-lg font-semibold mb-6">{content.collections[locale]}</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {collections[locale].map((collection) => (
                <li key={collection}>
                  <Link href="#" className="hover:text-primary hover:pl-2 transition-all inline-block">
                    {collection}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <p>© 2024 Tram Huong Chu Bo Doi. {content.copyright[locale]}</p>
        </div>
      </div>
    </footer>
  )
}
