"use client"

import { ChevronRight, Award, Shield, Leaf, Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

import { timeline, philosophyContent, stores, commitmentFeatures } from "@/data/about-content"


type LocaleKey = "vi" | "en" | "zh"

export function AboutPageClient() {
  const { locale, t, getLocalizedPath } = useLanguage()
  const l = locale as LocaleKey

  return (
    <>
      {/* Hero */}
      <section className="relative pb-16 lg:pb-20 pt-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 relative z-10 mb-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary">
              {t("nav.home") || (l === "zh" ? "首页" : "Trang chủ")}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{t("about.breadcrumb")}</span>
          </div>
        </div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
              {t("about.brandStory")}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl text-foreground font-bold uppercase tracking-[0.2em] leading-tight">
              {t("about.title1")}
              <span className="block text-primary mt-2">{t("about.title2")}</span>
            </h1>

            <blockquote className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-serif text-3xl">&ldquo;</span>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed pt-8 max-w-3xl mx-auto">
                {t("about.quote")}
              </p>
            </blockquote>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-serif font-bold text-primary">10+</div>
                <p className="text-[10px] md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">{t("about.yearsExperience")}</p>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-serif font-bold text-primary">1,000+</div>
                <p className="text-[10px] md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">{t("about.customers")}</p>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-serif font-bold text-primary">100%</div>
                <p className="text-[10px] md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">{t("about.natural")}</p>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-serif font-bold text-primary">200+</div>
                <p className="text-[10px] md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">{t("about.products") || "Sản phẩm"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - Zen Minimalist */}
      <section className="py-16 lg:py-20 bg-secondary/30 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header - Centered & Poetic */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
              {t("about.philosophy")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 tracking-tight">
              <span className="block md:inline">{philosophyContent.header[l].line1}</span>
              <span className="hidden md:inline"> — </span>
              <span className="block md:inline">{philosophyContent.header[l].line2}</span>
            </h2>
            <div className="w-16 h-px bg-primary/40 mx-auto my-6" />
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {philosophyContent.intro[l]}
            </p>
          </div>

          {/* Three Pillars - Journey Layout */}
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
              {philosophyContent.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 h-full">
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-8 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {pillar.number}
                    </div>

                    {/* Content */}
                    <div className="pt-4">
                      <h3 className="font-serif text-xl md:text-2xl text-foreground font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                        {pillar.title[l]}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {pillar.description[l]}
                      </p>
                    </div>

                    {/* Decorative accent line at bottom */}
                    <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Journey Arrow - Between cards on desktop */}
                  {index < philosophyContent.pillars.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 bg-background border border-border rounded-full flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Quote - Message Box */}
          <div className="mt-20 relative">
            <div className="max-w-2xl mx-auto">
              <div className="relative bg-foreground text-white rounded-2xl p-8 md:p-10 text-center">
                {/* Quote marks */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="font-serif text-xl text-white leading-none">&ldquo;</span>
                </div>

                <p className="text-xs uppercase tracking-widest text-white/40 mb-4 pt-2">
                  {t("about.message")}
                </p>
                <p className="font-serif text-lg md:text-xl text-white/90 italic leading-relaxed">
                  {philosophyContent.quote[l]}
                </p>
                <div className="mt-6 w-12 h-px bg-primary mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 tracking-widest uppercase">
              {t("about.journey")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground uppercase tracking-tight">
              {t("about.journeyTitle")}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                      <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-lg rounded-full mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                          {item.year}
                        </span>
                        <p className="text-foreground">{item.event[l]}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 ring-4 ring-background" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 tracking-widest uppercase">
                {t("about.commitment")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 uppercase tracking-tight">
                {t("about.commitmentTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("about.commitmentDesc")}
              </p>
              <div className="space-y-4">
                {commitmentFeatures.map((item, index) => {
                  const Icon = item.icon === "Shield" ? Shield : item.icon === "Leaf" ? Leaf : item.icon === "Award" ? Award : Users
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{item.text[l as keyof typeof item.text]}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src="/images/sections/tram-huong-chu-bo-doi-section-7.webp"
                alt="Tram huong cao cap"
                className="relative w-full h-[500px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Store System */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider uppercase">
              {t("about.storeSystem")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground uppercase">
              {t("about.visitUs")}
            </h2>
          </div>

          <div className="max-w-xl mx-auto">
            {stores.map((store, index) => (
              <div key={index} className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img src={store.image} alt={store.name[l]} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      {store.name[l]}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-foreground flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {store.address}
                  </p>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {store.phone}
                  </p>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {store.hours[l]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
