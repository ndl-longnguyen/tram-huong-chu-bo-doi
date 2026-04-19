"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, MapPin, Phone, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const mainStores = [
  {
    name: "AGARWOOD ART GALLERY HỒ CHÍ MINH",
    address: "20 – 20A Nguyễn Trãi, Phường Cư Quán  (Phường 2, Quận 5, TP. Hồ Chí Minh cũ)",
    hours: "Giờ mở cửa: 8h00 – 22h00 (T2-CN)",
    phone: "0933.348.368",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    name: "TRUNG TÂM CHĂM SÓC KHÁCH HÀNG VÀ BẢO HÀNH",
    address: "71 Nguyễn Khắc Nhu, Phường Cầu Ông Lãnh (Phường Cô Giang, Quận 1, TP. Hồ Chí Minh cũ)",
    hours: "Giờ mở cửa: 8h00 – 22h00 (T2-T7)",
    phone: "0933.348.368",
  },
  {
    name: "FLAGSHIP STORE HÀ NỘI",
    address: "Flagship Store: 11 Kim Mã, Phường Ngọc Hà (Quận Ba Đình, Hà Nội cũ)",
    hours: "Giờ mở cửa: 8h00 – 22h00 (T2-CN)",
    phone: "0818.348.368",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
]

const branches = [
  {
    name: "Gia Lai",
    address: "Cảng Hàng Không Pleiku, Đường 17/3, P.Thống Nhất, TP.Pleiku, Tỉnh Gia Lai",
  },
  {
    name: "Buôn Ma Thuột",
    address: "Sân Bay Buôn Ma Thuột, Thôn 8, Xã Hòa Thắng, TP.Buôn Ma Thuột, Tỉnh Đắk Lắk",
  },
]

const galleryImages = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80",
  "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?w=600&q=80",
]

export default function ContactPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phone: "",
    address: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Cảm ơn bạn đã gửi yêu cầu. Chúng tôi sẽ liên hệ lại sớm nhất!")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Trang chủ
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Liên hệ</span>
            </div>
          </div>
        </div>

        {/* Store System */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="font-serif text-2xl md:text-3xl text-primary mb-8">
              Hệ Thống Cửa Hàng
            </h1>

            {/* Main Stores */}
            <div className="space-y-8">
              {mainStores.map((store, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-primary font-semibold">{store.name}</h3>
                      <p className="text-muted-foreground text-sm">{store.address}</p>
                      <p className="text-muted-foreground text-sm">{store.hours}</p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Hotline: </span>
                        <a href={`tel:${store.phone}`} className="text-primary hover:underline">
                          {store.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                  {store.image && (
                    <img
                      src={store.image}
                      alt={store.name}
                      className="w-full h-64 md:h-80 object-cover rounded-lg"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Gallery Carousel */}
            <div className="mt-12">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-video">
                  <img
                    src={galleryImages[currentImage]}
                    alt={`Gallery ${currentImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6 rotate-180" />
                </button>
                <button
                  onClick={() => setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImage ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Branch Locations */}
            <div className="mt-12">
              <h2 className="font-serif text-xl md:text-2xl text-foreground mb-6">
                Hệ Thống Chi Nhánh
              </h2>
              <div className="space-y-4">
                {branches.map((branch, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-primary font-semibold">{branch.name}</h3>
                      <p className="text-muted-foreground text-sm">{branch.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-serif text-xl md:text-2xl text-foreground mb-8">
              Gửi Yêu Cầu Của Bạn
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Chủ đề"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="text"
                  placeholder="Địa chỉ"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <textarea
                  placeholder="Nội dung"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent transition-colors"
              >
                Gửi liên hệ
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
