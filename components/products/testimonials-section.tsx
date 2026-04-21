"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: t("testimonials.1.name"),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      content: t("testimonials.1.content"),
      role: t("about.customers"),
    },
    {
      name: t("testimonials.2.name"),
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      content: t("testimonials.2.content"),
      role: t("about.customers"),
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 tracking-widest uppercase">
            {t("home.community.subtitle")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground uppercase tracking-wider">
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row">
              <div className="w-full sm:w-2/5 aspect-[4/5] sm:aspect-auto overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 -rotate-12" />
                <div className="mb-4">
                  <h4 className="text-foreground font-bold text-lg uppercase tracking-tight">{testimonial.name}</h4>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
