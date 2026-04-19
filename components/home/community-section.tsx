"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const testimonialsData = {
  vi: [
    { name: "Anh Minh Hoang", role: "Doanh nhan", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80", content: "Toi da mua vong tay tram huong tai Chu Bo Doi duoc 2 nam, chat luong rat tot, mui huong thom tu nhien. Dich vu cham soc khach hang tuyet voi!", rating: 5 },
    { name: "Chi Thu Ha", role: "Giao vien", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80", content: "Minh da tang bo vong tay tram huong nhan dip sinh nhat, bo rat thich. San pham dep, dong goi can than, giao hang nhanh chong.", rating: 5 },
    { name: "Anh Quoc Truong", role: "Kien truc su", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80", content: "Day la lan thu 3 toi mua san pham o day. Tram huong chinh hang, gia ca hop ly. Nhan vien tu van nhiet tinh, chuyen nghiep.", rating: 5 },
    { name: "Chi Thao Ngoc", role: "Nha thiet ke", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80", content: "Rat hai long voi day chuyen tram huong da mua. Thiet ke tinh te, sang trong. Se tiep tuc ung ho Tram Huong Chu Bo Doi!", rating: 5 },
  ],
  en: [
    { name: "Mr. Minh Hoang", role: "Businessman", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80", content: "I have been buying agarwood bracelets at Chu Bo Doi for 2 years. The quality is excellent and the natural fragrance is wonderful. Outstanding customer service!", rating: 5 },
    { name: "Ms. Thu Ha", role: "Teacher", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80", content: "I gifted my father an agarwood bracelet for his birthday, he loved it. Beautiful product, carefully packaged, fast delivery.", rating: 5 },
    { name: "Mr. Quoc Truong", role: "Architect", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80", content: "This is my 3rd purchase here. Authentic agarwood, reasonable prices. Enthusiastic and professional consulting staff.", rating: 5 },
    { name: "Ms. Thao Ngoc", role: "Designer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80", content: "Very satisfied with the agarwood necklace I purchased. Delicate and elegant design. Will continue to support Tram Huong Chu Bo Doi!", rating: 5 },
  ],
  zh: [
    { name: "明皇先生", role: "商人", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80", content: "我在朱伯队购买沉香手链已有2年，品质极佳，天然香气怡人。客户服务非常出色！", rating: 5 },
    { name: "秋霞女士", role: "教师", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80", content: "我给父亲买了一款沉香手链作为生日礼物，他非常喜欢。产品精美，包装细心，快速送达。", rating: 5 },
    { name: "国璋先生", role: "建筑师", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80", content: "这是我第3次在这里购物。正品沉香，价格合理。咨询人员热情专业。", rating: 5 },
    { name: "草玉女士", role: "设计师", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80", content: "对购买的沉香项链非常满意。设计精致优雅。将继续支持朱伯队沉香！", rating: 5 },
  ],
}

const statsData = {
  vi: [
    { value: "10,000+", label: "Khach hang" },
    { value: "15+", label: "Nam kinh nghiem" },
    { value: "100%", label: "Tram huong tu nhien" },
    { value: "5/5", label: "Danh gia trung binh" },
  ],
  en: [
    { value: "10,000+", label: "Customers" },
    { value: "15+", label: "Years experience" },
    { value: "100%", label: "Natural agarwood" },
    { value: "5/5", label: "Average rating" },
  ],
  zh: [
    { value: "10,000+", label: "客户" },
    { value: "15+", label: "年经验" },
    { value: "100%", label: "天然沉香" },
    { value: "5/5", label: "平均评分" },
  ],
}

const sectionContent = {
  tag: { vi: "KHACH HANG NOI GI", en: "WHAT CUSTOMERS SAY", zh: "客户评价" },
  title: { vi: "Cam Nhan Tu Khach Hang", en: "Customer Reviews", zh: "客户感受" },
  desc: { vi: "Hon 10,000 khach hang da tin tuong va dong hanh cung Tram Huong Chu Bo Doi", en: "Over 10,000 customers have trusted and stayed with Tram Huong Chu Bo Doi", zh: "超过10,000位客户信赖并选择朱伯队沉香" },
}

export function CommunitySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { locale } = useLanguage()

  const testimonials = testimonialsData[locale]
  const stats = statsData[locale]

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 border border-primary/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-accent/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
            {sectionContent.tag[locale]}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            {sectionContent.title[locale]}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {sectionContent.desc[locale]}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border relative">
            <div className="absolute -top-6 left-10 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>
                <div>
                  <h4 className="font-serif text-xl text-foreground font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prevSlide} className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? "w-8 bg-primary" : "bg-border hover:bg-primary/50"}`} />
              ))}
            </div>
            <button onClick={nextSlide} className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-2xl border border-border">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
