"use client"

import { Truck, Shield, Award, HeartHandshake } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const reasonsData = {
  vi: [
    { icon: Truck, title: "Giao hang toc", description: "Giao toan quoc, nhanh chong" },
    { icon: Shield, title: "Bao hanh hau mai", description: "1 doi 1 trong 30 ngay" },
    { icon: Award, title: "100%", description: "Tram huong tu nhien" },
    { icon: HeartHandshake, title: "Bao hanh tron doi", description: "Vong deo - Vong trong doi" },
  ],
  en: [
    { icon: Truck, title: "Fast Delivery", description: "Nationwide delivery, quick" },
    { icon: Shield, title: "After-sale Warranty", description: "1-for-1 exchange within 30 days" },
    { icon: Award, title: "100%", description: "Natural agarwood" },
    { icon: HeartHandshake, title: "Lifetime Warranty", description: "Wear it for life" },
  ],
  zh: [
    { icon: Truck, title: "快速配送", description: "全国配送，快速到达" },
    { icon: Shield, title: "售后保修", description: "30天内以旧换新" },
    { icon: Award, title: "100%", description: "天然沉香" },
    { icon: HeartHandshake, title: "终身保修", description: "佩戴一生" },
  ],
}

const sectionContent = {
  tag: { vi: "TAI SAO CHON CHUNG TOI", en: "WHY CHOOSE US", zh: "为什么选择我们" },
  title: { vi: "Ly Do Nen Chon Tram Huong Chu Bo Doi", en: "Why Choose Tram Huong Chu Bo Doi", zh: "为什么选择朱伯队沉香" },
}

export function WhyChooseUs() {
  const { locale } = useLanguage()
  const reasons = reasonsData[locale]

  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
            {sectionContent.tag[locale]}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {sectionContent.title[locale]}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="group text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
