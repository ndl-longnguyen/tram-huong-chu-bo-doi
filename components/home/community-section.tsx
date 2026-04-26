"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star, User, UserRound, CircleUser, UserCircle } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

export function CommunitySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const testimonialsList = [
    {
      name: t("testimonials.1.name"),
      role: t("testimonials.role.business"),
      gender: "male",
      icon: User,
      color: "bg-blue-100 text-blue-600",
      content: t("testimonials.1.content"),
      rating: 5,
    },
    {
      name: t("testimonials.2.name"),
      role: t("testimonials.role.teacher"),
      gender: "female",
      icon: UserRound,
      color: "bg-pink-100 text-pink-600",
      content: t("testimonials.2.content"),
      rating: 5,
    },
    {
      name: t("testimonials.3.name"),
      role: t("testimonials.role.architect"),
      gender: "male",
      icon: CircleUser,
      color: "bg-emerald-100 text-emerald-600",
      content: t("testimonials.3.content"),
      rating: 5,
    },
    {
      name: t("testimonials.4.name"),
      role: t("testimonials.role.designer"),
      gender: "female",
      icon: UserCircle,
      color: "bg-purple-100 text-purple-600",
      content: t("testimonials.4.content"),
      rating: 5,
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsList.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length)
  }

  const stats = [
    { value: "1,000+", label: t("hero.customers") },
    { value: "10+", label: t("hero.experience") },
    { value: "100%", label: t("about.natural") },
    { value: "200+", label: t("about.products") || "Sản phẩm" },
  ]

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 border border-primary/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-accent/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
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
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <div className={`w-full h-full rounded-full flex items-center justify-center border-4 border-primary/20 ${testimonialsList[currentIndex].color}`}>
                    {(() => {
                      const Icon = testimonialsList[currentIndex].icon
                      return <Icon className="w-12 h-12 md:w-16 md:h-16" />
                    })()}
                  </div>
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
                  {Array.from({ length: testimonialsList[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 italic">
                  &ldquo;{testimonialsList[currentIndex].content}&rdquo;
                </p>

                <div>
                  <h4 className="font-serif text-xl text-foreground font-semibold">
                    {testimonialsList[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">{testimonialsList[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-card border-2 border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsList.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-border hover:bg-primary/50"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-card border-2 border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
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
