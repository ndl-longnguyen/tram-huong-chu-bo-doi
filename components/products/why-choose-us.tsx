"use client"

import { Truck, Shield, Award, HeartHandshake } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function WhyChooseUs() {
  const { t } = useLanguage()

  const reasons = [
    {
      icon: Truck,
      title: t("why.reason1.title"),
      description: t("why.reason1.desc"),
    },
    {
      icon: Shield,
      title: t("why.reason2.title"),
      description: t("why.reason2.desc"),
    },
    {
      icon: Award,
      title: t("why.reason3.title"),
      description: t("why.reason3.desc"),
    },
    {
      icon: HeartHandshake,
      title: t("why.reason4.title"),
      description: t("why.reason4.desc"),
    },
  ]

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 tracking-widest uppercase">
            {t("why.subtitle")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground uppercase tracking-wider">
            {t("why.title")}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group text-center p-3 lg:p-8 bg-card rounded-3xl border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <reason.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-lg mb-3 uppercase tracking-tight">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
