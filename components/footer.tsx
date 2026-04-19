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
  "Bảng Giá Trầm Hương Mới Nhất 2026",
]

const policies = [
  "Chính sách bảo vệ",
  "Chính sách thành viên",
  "Chính sách vận chuyển",
  "Đăng ký Đại Lý",
  "FAQ - Các câu hỏi thường gặp",
  "Đổi trả và bảo hành",
  "Hướng dẫn thanh toán",
  "Thiết kế và dịch vụ",
  "Thư - đổi charm vàng",
]

const aboutLinks = [
  "Giới thiệu",
  "Sơ đồ trang Web",
  "Tin Sức",
  "Liên hệ",
  "Tuyển dụng",
  "Điều khoản dịch vụ",
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Newsletter */}
      <div className="border-b border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="text-muted-foreground">Nhập email của bạn</span>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email của bạn"
              className="px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-accent transition-colors">
              Đăng ký
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-primary font-serif text-lg font-semibold mb-4">
              CÔNG TY CỔ PHẦN THIÊN MỘC HƯƠNG
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Flagship Store: 11 Kim Mã, Ba Đình, Hà Nội</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>0818348368</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Agarwood Gallery: 20 - 20A Nguyễn Trãi, Quận 5, TP.HCM</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>0933348368</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>thienmochuong@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>8h00 AM - 10h00 PM</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-primary font-serif text-lg font-semibold mb-4">CHÍNH SÁCH</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {policies.map((policy) => (
                <li key={policy}>
                  <Link href="#" className="hover:text-primary transition-colors">
                    {policy}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-primary font-serif text-lg font-semibold mb-4">VỀ CHÚNG TÔI</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-24 h-10 bg-red-700 rounded flex items-center justify-center text-white text-xs font-bold">
                  ĐÃ THÔNG BÁO
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-8 bg-white rounded flex items-center justify-center text-black text-xs font-bold">
                  DMCA
                </div>
              </div>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-primary font-serif text-lg font-semibold mb-4">BỘ SƯU TẬP</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {collections.map((collection) => (
                <li key={collection}>
                  <Link href="#" className="hover:text-primary transition-colors">
                    {collection}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Đăng Ký</p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-3 py-1.5 bg-gray-800 border border-gray-600 rounded text-sm text-white placeholder:text-gray-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© Bản quyền thuộc về Thiên Mộc Hương</p>
          <div className="flex items-center gap-4">
            <span className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs">VISA</span>
            <span className="w-10 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs">MC</span>
            <span className="w-10 h-6 bg-green-600 rounded flex items-center justify-center text-white text-xs">JCB</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
