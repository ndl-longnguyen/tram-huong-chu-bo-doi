"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, MapPin, Phone, Clock, Mail, Send } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { stores } from "@/data/about-content"
import { GoogleMapSection } from "@/components/google-map-section"
import { toast } from "sonner"

export function ContactPageClient() {
  const { locale, t, getLocalizedPath } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)


  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.hotline'),
      value: "0765.942.942",
      description: t('contact.support247'),
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: "info@tramhuongchubodoi.com",
      description: t('contact.emailResponse'),
    },
    {
      icon: Clock,
      title: t('common.workingHours'),
      value: "8:00 - 22:00",
      description: t('footer.hours'),
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success(t('contact.thankYou') || "Cảm ơn bạn! Chúng tôi đã nhận được thông tin và sẽ liên hệ sớm nhất.")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        const data = await response.json().catch(() => ({}))
        toast.error(data.error || "Gửi thất bại, vui lòng thử lại sau.")
      }
    } catch (err) {
      console.error(err)
      toast.error("Không thể kết nối đến máy chủ, vui lòng liên hệ hotline 0765.942.942")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pb-16 lg:pb-24 pt-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-8">
              <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.home')}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{t('contact.breadcrumb')}</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                {t('contact.subtitle')}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                {t('contact.title')}
                <span className="block text-primary mt-2">{t('contact.title2')}</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('contact.description')}
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
        <section className="py-12 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
                {t('contact.storeSystem')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                {t('contact.visitShowroom')}
              </h2>
            </div>

            <div className="max-w-xl mx-auto">
              {stores.map((store, index) => (
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

        {/* Google Maps Section */}
        <GoogleMapSection className="bg-background" />

        {/* Contact Form */}
        <section className="py-12 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Info */}
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                  {t('contact.sendMessage')}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  {t('contact.needHelp')}
                  <span className="block text-primary mt-2">{t('contact.contactNow')}</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t('contact.formDesc')}
                </p>

                <div className="relative hidden lg:block">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
                  <img
                    src="/images/sections/tram-huong-chu-bo-doi-section-7.webp"
                    alt="Tram huong"
                    className="relative w-full h-100 object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Right - Form */}
              <div className="bg-card p-6 md:p-8 lg:p-10 rounded-3xl border border-border shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t('contact.fullName')} *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder={t('contact.enterName')}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t('contact.phoneNumber')} *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder={t('contact.enterPhone')}
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
                      placeholder={t('contact.enterEmail')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t('contact.subject')} *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      required
                    >
                      <option value="">{t('contact.selectSubject')}</option>
                      <option value="tu-van">{t('contact.consultation')}</option>
                      <option value="bao-hanh">{t('contact.warranty')}</option>
                      <option value="khieu-nai">{t('contact.complaint')}</option>
                      <option value="hop-tac">{t('contact.partnership')}</option>
                      <option value="khac">{t('contact.other')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t('contact.messageContent')} *</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder={t('contact.enterMessage')}
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
                        {t('contact.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('contact.send')}
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
    </>
  )
}
