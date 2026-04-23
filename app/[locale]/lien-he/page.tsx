"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, MapPin, Phone, Clock, Mail, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"

const mainStores = [
  {
    name: { vi: "SHOWROOM CHÍNH", en: "MAIN SHOWROOM", zh: "主展厅" },
    address: "Tiên Phước, TP. Đà Nẵng (Quảng Nam cũ)",
    hours: { vi: "8:00 - 22:00 (Thứ 2 - Chủ nhật)", en: "8:00 - 22:00 (Mon - Sun)", zh: "8:00 - 22:00 (周一至周日)" },
    phone: "0765.942.942",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
]

export default function ContactPage() {
  const { locale, t, getLocalizedPath } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const content = {
    home: { vi: "Trang chủ", en: "Home", zh: "首页" },
    breadcrumb: { vi: "Liên hệ", en: "Contact", zh: "联系我们" },
    subtitle: { vi: "LIÊN HỆ VỚI CHÚNG TÔI", en: "CONTACT US", zh: "联系我们" },
    title1: { vi: "Chúng Tôi Luôn Sẵn Sàng", en: "We Are Always Ready", zh: "我们随时准备" },
    title2: { vi: "Hỗ Trợ Bạn", en: "To Support You", zh: "为您服务" },
    description: {
      vi: "Hãy liên hệ với Trầm Hương Chú Bộ Đội để được tư vấn về sản phẩm trầm hương chính hãng và nhận những ưu đãi tốt nhất.",
      en: "Contact Trầm Hương Chú Bộ Đội for consultation on authentic agarwood products and best offers.",
      zh: "联系朱伯队沉香，获取正品沉香产品咨询和最优惠价格。"
    },
    hotline: { vi: "Hotline", en: "Hotline", zh: "热线电话" },
    support247: { vi: "Hỗ trợ 24/7", en: "24/7 Support", zh: "24/7支持" },
    email: { vi: "Email", en: "Email", zh: "电子邮件" },
    emailResponse: { vi: "Phản hồi trong 24h", en: "Response within 24h", zh: "24小时内回复" },
    workingHours: { vi: "Giờ làm việc", en: "Working hours", zh: "工作时间" },
    monSun: { vi: "Thứ 2 - Chủ nhật", en: "Mon - Sun", zh: "周一至周日" },
    storeSystem: { vi: "HỆ THỐNG CỬA HÀNG", en: "STORE SYSTEM", zh: "门店系统" },
    visitShowroom: { vi: "Ghé Thăm Showroom", en: "Visit Our Showroom", zh: "参观展厅" },
    sendMessage: { vi: "GỬI TIN NHẮN", en: "SEND MESSAGE", zh: "发送消息" },
    needHelp: { vi: "Bạn Cần Hỗ Trợ?", en: "Need Help?", zh: "需要帮助？" },
    contactNow: { vi: "Hãy Liên Hệ Ngay", en: "Contact Us Now", zh: "立即联系我们" },
    formDesc: {
      vi: "Điền thông tin vào form bên cạnh, đội ngũ tư vấn của Trầm Hương Chú Bộ Đội sẽ liên hệ lại với bạn trong thời gian sớm nhất.",
      en: "Fill in the form, our consulting team will contact you as soon as possible.",
      zh: "填写表格，我们的咨询团队将尽快与您联系。"
    },
    fullName: { vi: "Họ và tên", en: "Full name", zh: "姓名" },
    phoneNumber: { vi: "Số điện thoại", en: "Phone number", zh: "电话号码" },
    enterName: { vi: "Nhập họ tên", en: "Enter your name", zh: "输入姓名" },
    enterPhone: { vi: "Nhập số điện thoại", en: "Enter phone number", zh: "输入电话号码" },
    enterEmail: { vi: "Nhập email của bạn", en: "Enter your email", zh: "输入您的邮箱" },
    subject: { vi: "Chủ đề", en: "Subject", zh: "主题" },
    selectSubject: { vi: "Chọn chủ đề", en: "Select subject", zh: "选择主题" },
    consultation: { vi: "Tư vấn sản phẩm", en: "Product consultation", zh: "产品咨询" },
    warranty: { vi: "Bảo hành", en: "Warranty", zh: "保修" },
    complaint: { vi: "Khiếu nại", en: "Complaint", zh: "投诉" },
    partnership: { vi: "Hợp tác kinh doanh", en: "Business partnership", zh: "商业合作" },
    other: { vi: "Khác", en: "Other", zh: "其他" },
    messageContent: { vi: "Nội dung", en: "Content", zh: "内容" },
    enterMessage: { vi: "Nhập nội dung tin nhắn...", en: "Enter your message...", zh: "输入您的留言..." },
    sending: { vi: "Đang gửi...", en: "Sending...", zh: "发送中..." },
    send: { vi: "Gửi tin nhắn", en: "Send message", zh: "发送消息" },
    thankYou: {
      vi: "Cảm ơn bạn đã gửi yêu cầu. Chúng tôi sẽ liên hệ lại sớm nhất!",
      en: "Thank you for your request. We will contact you soon!",
      zh: "感谢您的请求。我们将尽快与您联系！"
    },
  }

  const contactInfo = [
    {
      icon: Phone,
      title: content.hotline[locale],
      value: "0765.942.942",
      description: content.support247[locale],
    },
    {
      icon: Mail,
      title: content.email[locale],
      value: "tramhuongchubodoi@gmail.com",
      description: content.emailResponse[locale],
    },
    {
      icon: Clock,
      title: content.workingHours[locale],
      value: "8:00 - 22:00",
      description: content.monSun[locale],
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert(content.thankYou[locale])
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pb-16 lg:pb-24 pt-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-8">
              <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
                {content.home[locale]}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{content.breadcrumb[locale]}</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                {content.subtitle[locale]}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                {content.title1[locale]}
                <span className="block text-primary mt-2">{content.title2[locale]}</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {content.description[locale]}
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
                  className="group bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider mb-2">{info.title}</h3>
                  <p className="text-foreground font-semibold text-lg md:text-xl mb-1 break-all md:break-normal">{info.value}</p>
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
                {content.storeSystem[locale]}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                {content.visitShowroom[locale]}
              </h2>
            </div>

            <div className="max-w-xl mx-auto">
              {mainStores.map((store, index) => (
                <div key={index} className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={store.image}
                      alt={store.name[locale]}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-4 py-1.5 bg-primary text-white text-sm font-medium rounded-full">
                        {store.name[locale]}
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
                      <p className="text-muted-foreground">{store.hours[locale]}</p>
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
                  {content.sendMessage[locale]}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  {content.needHelp[locale]}
                  <span className="block text-primary mt-2">{content.contactNow[locale]}</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {content.formDesc[locale]}
                </p>

                <div className="relative hidden lg:block">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
                  <img
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80"
                    alt="Tram huong"
                    className="relative w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Right - Form */}
              <div className="bg-card p-6 md:p-8 lg:p-10 rounded-3xl border border-border shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{content.fullName[locale]} *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder={content.enterName[locale]}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{content.phoneNumber[locale]} *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder={content.enterPhone[locale]}
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
                      placeholder={content.enterEmail[locale]}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{content.subject[locale]} *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      required
                    >
                      <option value="">{content.selectSubject[locale]}</option>
                      <option value="tu-van">{content.consultation[locale]}</option>
                      <option value="bao-hanh">{content.warranty[locale]}</option>
                      <option value="khieu-nai">{content.complaint[locale]}</option>
                      <option value="hop-tac">{content.partnership[locale]}</option>
                      <option value="khac">{content.other[locale]}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{content.messageContent[locale]} *</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder={content.enterMessage[locale]}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 hover:shadow-md transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {content.sending[locale]}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {content.send[locale]}
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
