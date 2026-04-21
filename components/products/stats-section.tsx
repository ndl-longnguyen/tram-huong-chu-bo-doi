"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    { value: "300,000", suffix: "+", label: t("about.customers") },
    { value: "20", suffix: "+", label: t("nav.incense") === "NHANG TRẦM" ? "Quốc Gia" : t("nav.about") === "ABOUT US" ? "Countries" : "国家" },
    { value: "50", suffix: "+", label: t("nav.incense") === "NHANG TRẦM" ? "Nhân sự" : t("nav.about") === "ABOUT US" ? "Personnel" : "人员" },
    { value: "45", suffix: "+", label: t("about.yearsExperience") },
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-500">
                {stat.value}
                <span className="text-accent ml-1">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px] md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle border line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  )
}
