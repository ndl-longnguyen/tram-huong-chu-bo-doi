import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"

const collections = [
  "Vòng Tay Trầm Hương Cao Cấp",
  "Quà tặng trầm hương",
  "Vòng Trầm Hương 108 Hạt",
  "Vòng Tay Phong Thủy",
  "Nụ Trầm Hương Cao Cấp",
  "Nhang Trầm Hương Cao Cấp",
  "Vòng Trầm Hương Bọc Vàng",
]

const policies = [
  "Chính sách bảo hành",
  "Chính sách đổi trả",
  "Chính sách vận chuyển",
  "FAQ - Câu hỏi thường gặp",
  "Hướng dẫn thanh toán",
]

const aboutLinks = [
  "Giới thiệu",
  "Câu chuyện thương hiệu",
  "Liên hệ",
  "Điều khoản dịch vụ",
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-white">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif text-primary mb-2">Đăng ký nhận tin</h3>
              <p className="text-gray-400 text-sm">Nhận thông tin ưu đãi và sản phẩm mới nhất</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 md:w-80 px-5 py-3 bg-gray-900 border border-gray-700 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all">
                Đăng ký
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
                  TRẦM HƯƠNG CHÚ BỘ ĐỘI
                </h3>
              </div>
            </div>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>Tien Phuoc, TP. Da Nang (Quang Nam cu)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">0765.942.942</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>contact@tramhuongchubodoi.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span>8:00 - 22:00 (Thứ 2 - Chủ nhật)</span>
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
            <h3 className="text-primary font-serif text-lg font-semibold mb-6">Chính sách</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {policies.map((policy) => (
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
            <h3 className="text-primary font-serif text-lg font-semibold mb-6">Về chúng tôi</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-primary hover:pl-2 transition-all inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-primary font-serif text-lg font-semibold mb-6">Bộ sưu tập</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {collections.map((collection) => (
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
          <p>© 2024 Tram Huong Chu Bo Doi. Tat ca quyen duoc bao luu.</p>
        </div>
      </div>
    </footer>
  )
}
