"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Calendar, ArrowRight, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

import { Locale } from "@/lib/i18n/translations"

import { blogPosts } from "@/data/blog-content"

export function BlogPageClient() {
  const { locale, getLocalizedPath, t } = useLanguage()
  const l = locale as Locale

  return (
    <>
      <section className="relative pb-16 lg:pb-24 pt-6 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
              {t("blog.home")}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{t("blog.breadcrumb")}</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
              {t("blog.category")}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground mb-6 uppercase tracking-tight">
              {t("blog.title1")}
              <span className="block text-primary mt-2">{t("blog.title2")}</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              {t("blog.description")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={getLocalizedPath(`/blog/${post.slug}`)} className="group">
                <article className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.image} alt={post.title[l]} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium rounded-full">
                        {post.category[l]}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime[l]}
                      </span>
                    </div>
                    <h2 className="font-semibold text-foreground text-base md:text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title[l]}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1">
                      {post.excerpt[l]}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 group-hover:gap-3 transition-all">
                      {t("blog.readMore")}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
