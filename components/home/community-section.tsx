"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const testimonials = [
  {
    name: "Anh Minh Hoàng",
    role: "Doanh nhân",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content: "Tôi đã mua vòng tay trầm hương tại Chú Bộ Đội được 2 năm, chất lượng rất tốt, mùi hương thơm tự nhiên. Dịch vụ chăm sóc khách hàng tuyệt vời!",
    rating: 5,
  },
  {
    name: "Chị Thu Hà",
    role: "Giáo viên",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content: "Mình đã tặng bố vòng tay trầm hương nhân dịp sinh nhật, bố rất thích. Sản phẩm đẹp, đóng gói cẩn thận, giao hàng nhanh chóng.",
    rating: 5,
  },
  {
    name: "Anh Quốc Trường",
    role: "Kiến trúc sư",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    content: "Đây là lần thứ 3 tôi mua sản phẩm ở đây. Trầm hương chính hãng, giá cả hợp lý. Nhân viên tư vấn nhiệt tình, chuyên nghiệp.",
    rating: 5,
  },
  {
    name: "Chị Thảo Ngọc",
    role: "Nhà thiết kế",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    content: "Rất hài lòng với dây chuyền trầm hương đã mua. Thiết kế tinh tế, sang trọng. Sẽ tiếp tục ủng hộ Trầm Hương Chú Bộ Đội!",
    rating: 5,
  },
]

export function CommunitySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const stats = [
    { value: "10,000+", label: t("hero.customers") },
    { value: "15+", label: t("hero.experience") },
    { value: "100%", label: t("about.natural") },
    { value: "5/5", label: t("about.commitmentTitle") },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 border border-primary/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-accent/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider uppercase font-bold text-xs">
            {t("home.community.subtitle")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 uppercase">
            {t("home.community.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("home.community.desc")}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-10 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                <div>
                  <h4 className="font-serif text-xl text-foreground font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? "w-8 bg-primary" 
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-2xl border border-border">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
