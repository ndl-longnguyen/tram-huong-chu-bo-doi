"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Calendar,
  Clock,
  User,
  List,
  ArrowRight,
  ArrowLeft
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { Locale } from "@/lib/i18n/translations"
import { BlogPost, blogPosts } from "@/data/blog-content"
import ReactMarkdown from "react-markdown"

interface BlogDetailClientProps {
  post: BlogPost
}

export function BlogDetailClient({ post }: BlogDetailClientProps) {
  const { locale, getLocalizedPath, t } = useLanguage()
  const l = locale as Locale
  const [readingProgress, setReadingProgress] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setReadingProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener("scroll", updateReadingProgress)
    return () => window.removeEventListener("scroll", updateReadingProgress)
  }, [])

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3)

  // Dynamic Table of Contents extraction from Markdown
  const headings = post.content[l].match(/^#{2,3}\s+(.*)$/gm) || []
  const toc = headings.map(heading => {
    const level = heading.startsWith("###") ? 3 : 2
    const text = heading.replace(/^#{2,3}\s+/, "")
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    return { level, text, id }
  })

  const tocContent = toc.length > 0 ? (
    <>
      <h3 className="font-serif text-xl text-foreground font-bold mb-6 flex items-center gap-3">
        <List className="w-5 h-5 text-primary" />
        {t("blog.toc")}
      </h3>
      <nav className="space-y-3">
        {toc.map((item, index) => (
          <a
            key={index}
            href={`#${item.id}`}
            className={`block text-sm transition-all hover:text-primary ${item.level === 3 ? "ml-4 text-muted-foreground" : "font-medium text-foreground"
              }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </>
  ) : null

  return (
    <article className="pb-20 relative">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-[100] transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Hero Header */}
      <section className="relative pb-8 lg:pb-12 pt-6 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">

          <div className="flex items-center gap-2 text-sm mb-8 flex-wrap">
            <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
              {t("blog.home")}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
            <Link href={getLocalizedPath("/blog")} className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
              {t("blog.breadcrumb")}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
            <span className="text-foreground font-medium line-clamp-1">{post.title[l]}</span>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {post.category[l]}
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-bold leading-[1.1] tracking-tight mb-8">
              {post.title[l]}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent p-0.5 shadow-sm">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-primary overflow-hidden">
                    <User className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-foreground font-bold leading-none mb-1">{post.author[l]}</span>
                  <span className="text-[10px] uppercase tracking-widest">{t("blog.editor")}</span>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{post.readTime[l]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Content */}
          <div className="lg:w-2/3">
            {/* Featured Image */}
            <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden mb-16 shadow-2xl border-background group">
              <Image
                src={post.image}
                alt={post.title[l]}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Table of Contents (Mobile Only) */}
            {tocContent && (
              <div className="bg-card rounded-3xl p-6 border border-border shadow-sm mb-10 lg:hidden">
                {tocContent}
              </div>
            )}

            {/* Article Content */}
            <div
              ref={contentRef}
              className="prose prose-slate md:prose-lg dark:prose-invert max-w-none 
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
                prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-4xl
                prose-h3:py-[20px] prose-h3:text-3xl prose-h3:font-extrabold prose-h3:text-primary
                prose-a:text-primary hover:prose-a:text-primary/80 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:border prose-img:border-border
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
            >
              <ReactMarkdown
                components={{
                  h2: ({ node, ...props }) => {
                    const id = String(props.children).toLowerCase().replace(/[^a-z0-9]+/g, "-");
                    return <h2 id={id} className="scroll-mt-24 flex items-center group cursor-pointer" {...props}>
                      {props.children}
                      <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary transition-opacity no-underline">#</a>
                    </h2>
                  },
                  h3: ({ node, ...props }) => {
                    const id = String(props.children).toLowerCase().replace(/[^a-z0-9]+/g, "-");
                    return <h3 id={id} className="scroll-mt-24 flex items-center group cursor-pointer !py-5 !text-3xl !font-extrabold !text-primary" {...props}>
                      {props.children}
                      <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary transition-opacity no-underline">#</a>
                    </h3>
                  }
                }}
              >
                {post.content[l]}
              </ReactMarkdown>
            </div>
          </div>

          {/* Right: Sidebar */}
          <aside className="lg:w-1/3 space-y-12">
            <div className="space-y-8 sticky top-24">
              {/* Table of Contents (Desktop Only) */}
              {tocContent && (
                <div className="bg-card rounded-3xl p-8 border border-border shadow-sm hidden lg:block">
                  {tocContent}
                </div>
              )}

              {/* Related Posts */}
              <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
                <h3 className="font-serif text-xl text-foreground font-bold mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  {t("blog.relatedPosts")}
                </h3>

                <div className="space-y-6">
                  {relatedPosts.map(p => (
                    <Link key={p.id} href={getLocalizedPath(`/blog/${p.slug}`)} className="group flex gap-4">
                      <div className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden border border-border relative">
                        <Image src={p.image} alt={p.title[l]} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {p.title[l]}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest">
                          <span>{p.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Banner / CTA */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group shadow-xl">
                <Image
                  src={post.image}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={t("blog.promo")}
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{t("blog.promo")}</span>
                  <h4 className="text-white font-serif text-2xl mb-6 leading-tight">{t("blog.promoTitle")}</h4>
                  <Link href={getLocalizedPath("/vong-tay")} className="w-full py-4 bg-primary text-white text-center rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    {t("blog.discoverNow")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
