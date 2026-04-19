"use client"

import { useLanguage } from "@/lib/i18n/language-context"

const statsData = {
  vi: [
    { value: "300,000", suffix: "+", label: "Khach hang" },
    { value: "20", suffix: "+", label: "Quoc Gia" },
    { value: "50", suffix: "+", label: "Nhan su" },
    { value: "45", suffix: "+", label: "Nam kinh nghiem" },
  ],
  en: [
    { value: "300,000", suffix: "+", label: "Customers" },
    { value: "20", suffix: "+", label: "Countries" },
    { value: "50", suffix: "+", label: "Staff members" },
    { value: "45", suffix: "+", label: "Years experience" },
  ],
  zh: [
    { value: "300,000", suffix: "+", label: "客户" },
    { value: "20", suffix: "+", label: "国家" },
    { value: "50", suffix: "+", label: "员工" },
    { value: "45", suffix: "+", label: "年经验" },
  ],
}

export function StatsSection() {
  const { locale } = useLanguage()
  const stats = statsData[locale]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
