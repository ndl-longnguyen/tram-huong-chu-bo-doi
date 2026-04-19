"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, MapPin, Phone, Clock, Mail, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const mainStores = [
  {
    name: "FLAGSHIP STORE HÀ NỘI",
    address: "11 Kim Mã, Phường Ngọc Hà, Quận Ba Đình, Hà Nội",
    hours: "8:00 – 22:00 (Thứ 2 - Chủ nhật)",
    phone: "0818.348.368",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    name: "CHI NHÁNH TP. HỒ CHÍ MINH",
    address: "20 – 20A Nguyễn Trãi, Quận 5, TP. Hồ Chí Minh",
    hours: "8:00 – 22:00 (Thứ 2 - Chủ nhật)",
    phone: "0933.348.368",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
]

const contactInfo = [
  {
    icon: Phone,
    title: "Hotline",
    value: "0818.348.368",
    description: "Hỗ trợ 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@tramhuongchubodoi.com",
    description: "Phản hồi trong 24h",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    value: "8:00 - 22:00",
    description: "Thứ 2 - Chủ nhật",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Cảm ơn bạn đã gửi yêu cầu. Chúng tôi sẽ liên hệ lại sớm nhất!")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Trang chủ
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Liên hệ</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                LIÊN HỆ VỚI CHÚNG TÔI
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Chúng Tôi Luôn Sẵn Sàng
                <span className="block text-primary mt-2">Hỗ Trợ Bạn</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hãy liên hệ với Trầm Hương Chú Bộ Đội để được tư vấn về sản phẩm trầm hương 
                chính hãng và nhận những ưu đãi tốt nhất.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-muted-foreground text-sm uppercase tracking-wider mb-2">{info.title}</h3>
                  <p className="text-foreground font-semibold text-xl mb-1">{info.value}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Store Locations */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
                HỆ THỐNG CỬA HÀNG
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Ghé Thăm Showroom
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mainStores.map((store, index) => (
                <div key={index} className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={store.image}
                      alt={store.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-4 py-1.5 bg-primary text-white text-sm font-medium rounded-full">
                        {store.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{store.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">{store.hours}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href={`tel:${store.phone}`} className="text-primary font-semibold hover:underline">
                        {store.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Info */}
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                  GỬI TIN NHẮN
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Bạn Cần Hỗ Trợ?
                  <span className="block text-primary mt-2">Hãy Liên Hệ Ngay</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Điền thông tin vào form bên cạnh, đội ngũ tư vấn của Trầm Hương Chú Bộ Đội 
                  sẽ liên hệ lại với bạn trong thời gian sớm nhất.
                </p>
                
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
                  <img
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80"
                    alt="Trầm hương"
                    className="relative w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Right - Form */}
              <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Họ và tên *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Nhập họ tên"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Số điện thoại *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Nhập số điện thoại"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Nhập email của bạn"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Chủ đề *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      required
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="tu-van">Tư vấn sản phẩm</option>
                      <option value="bao-hanh">Bảo hành</option>
                      <option value="khieu-nai">Khiếu nại</option>
                      <option value="hop-tac">Hợp tác kinh doanh</option>
                      <option value="khac">Khác</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nội dung *</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Nhập nội dung tin nhắn..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Gửi tin nhắn
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
