"use client"

import { useLanguage } from "@/lib/i18n/language-context"

const testimonialsData = {
  vi: [
    { name: "CHI THU", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80", content: "Minh da mua vong tay tram huong cho ba lam qua sinh nhat. Chat luong tuyet voi, huong thom diu nhe, ba minh rat thich. Se tiep tuc ung ho Tram Huong Chu Bo Doi." },
    { name: "CHI HA", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80", content: "San pham dung nhu mo ta, dong goi can than. Nhan vien tu van nhiet tinh, giao hang nhanh. Rat hai long voi dich vu cua shop." },
  ],
  en: [
    { name: "MS. THU", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80", content: "I bought an agarwood bracelet for my father as a birthday gift. Excellent quality, gentle fragrance, he loved it. Will continue to support Tram Huong Chu Bo Doi." },
    { name: "MS. HA", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80", content: "Product exactly as described, carefully packaged. Enthusiastic staff, fast delivery. Very satisfied with the shop's service." },
  ],
  zh: [
    { name: "秋女士", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80", content: "我给父亲买了一款沉香手链作为生日礼物。品质极佳，香气温和，他非常喜欢。将继续支持朱伯队沉香。" },
    { name: "霞女士", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80", content: "产品与描述一致，包装细心。店员热情，发货快速。对店铺服务非常满意。" },
  ],
}

const sectionContent = {
  title: { vi: "Cam Nhan Khach Hang", en: "Customer Reviews", zh: "客户感受" },
}

export function TestimonialsSection() {
  const { locale } = useLanguage()
  const testimonials = testimonialsData[locale]

  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl text-center text-foreground mb-12">
          {sectionContent.title[locale]}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-card rounded-lg overflow-hidden">
              <div className="flex">
                <div className="w-1/3">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div className="w-2/3 p-6">
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
                    {testimonial.name}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-8">{testimonial.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
