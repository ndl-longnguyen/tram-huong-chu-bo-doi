"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, Calendar, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

const blogPosts = [
  { id: "1", title: { vi: "Huong Dan Phan Biet Tram Huong That - Gia", en: "Guide to Distinguish Real vs Fake Agarwood", zh: "如何辨别真假沉香指南" }, excerpt: { vi: "Tram huong la mot loai go quy hiem, co gia tri cao...", en: "Agarwood is a rare and valuable wood...", zh: "沉香是一种稀有珍贵的木材..." }, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", date: "15/04/2024", readTime: { vi: "8 phut doc", en: "8 min read", zh: "8分钟阅读" }, category: { vi: "Kien thuc", en: "Knowledge", zh: "知识" } },
  { id: "2", title: { vi: "Y Nghia Phong Thuy Cua Vong Tay Tram Huong", en: "Feng Shui Meaning of Agarwood Bracelets", zh: "沉香手链的风水意义" }, excerpt: { vi: "Kham pha nhung y nghia phong thuy sau sac...", en: "Discover the profound feng shui meanings...", zh: "探索深刻的风水意义..." }, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80", date: "12/04/2024", readTime: { vi: "5 phut doc", en: "5 min read", zh: "5分钟阅读" }, category: { vi: "Phong thuy", en: "Feng Shui", zh: "风水" } },
  { id: "3", title: { vi: "Cach Bao Quan Tram Huong Dung Cach", en: "How to Properly Store Agarwood", zh: "如何正确保存沉香" }, excerpt: { vi: "Nhung luu y quan trong khi bao quan...", en: "Important notes when storing...", zh: "保存时的重要注意事项..." }, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80", date: "10/04/2024", readTime: { vi: "4 phut doc", en: "4 min read", zh: "4分钟阅读" }, category: { vi: "Huong dan", en: "Guide", zh: "指南" } },
  { id: "4", title: { vi: "Lich Su Tram Huong Viet Nam", en: "History of Vietnamese Agarwood", zh: "越南沉香历史" }, excerpt: { vi: "Tim hieu ve lich su hinh thanh va phat trien...", en: "Learn about the history and development...", zh: "了解形成和发展的历史..." }, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80", date: "08/04/2024", readTime: { vi: "10 phut doc", en: "10 min read", zh: "10分钟阅读" }, category: { vi: "Lich su", en: "History", zh: "历史" } },
  { id: "5", title: { vi: "Top 5 Vung Tram Huong Noi Tieng Viet Nam", en: "Top 5 Famous Agarwood Regions in Vietnam", zh: "越南五大著名沉香产区" }, excerpt: { vi: "Kham pha nhung vung dat noi tieng...", en: "Discover the famous regions...", zh: "探索著名的产区..." }, image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=500&q=80", date: "05/04/2024", readTime: { vi: "6 phut doc", en: "6 min read", zh: "6分钟阅读" }, category: { vi: "Kham pha", en: "Explore", zh: "探索" } },
  { id: "6", title: { vi: "Tram Huong Trong Y Hoc Co Truyen", en: "Agarwood in Traditional Medicine", zh: "沉香在传统医学中的应用" }, excerpt: { vi: "Vai tro cua tram huong trong y hoc co truyen...", en: "The role of agarwood in traditional medicine...", zh: "沉香在传统医学中的作用..." }, image: "https://images.unsplash.com/photo-1616169227523-5f66a24f0735?w=500&q=80", date: "02/04/2024", readTime: { vi: "7 phut doc", en: "7 min read", zh: "7分钟阅读" }, category: { vi: "Suc khoe", en: "Health", zh: "健康" } },
]

export default function BlogPage() {
  const { locale, getLocalizedPath } = useLanguage()

  const content = {
    home: { vi: "Trang chu", en: "Home", zh: "首页" },
    breadcrumb: { vi: "Blog", en: "Blog", zh: "博客" },
    blogCategory: { vi: "BLOG & TIN TUC", en: "BLOG & NEWS", zh: "博客与新闻" },
    title1: { vi: "Kham Pha The Gioi", en: "Discover the World", zh: "探索世界" },
    title2: { vi: "Tram Huong", en: "of Agarwood", zh: "沉香" },
    description: {
      vi: "Chia se kien thuc, kinh nghiem va nhung cau chuyen thu vi ve tram huong Viet Nam tu doi ngu chuyen gia cua chung toi.",
      en: "Sharing knowledge, experience and interesting stories about Vietnamese agarwood from our team of experts.",
      zh: "分享我们专家团队关于越南沉香的知识、经验和有趣故事。"
    },
    readMore: { vi: "Doc tiep", en: "Read more", zh: "阅读更多" },
    loadMore: { vi: "Xem them bai viet", en: "Load more posts", zh: "加载更多文章" },
    newsletter: { vi: "NEWSLETTER", en: "NEWSLETTER", zh: "通讯" },
    newsletterTitle: { vi: "Dang Ky Nhan Bai Viet Moi", en: "Subscribe to New Posts", zh: "订阅新文章" },
    newsletterDesc: { vi: "Nhan thong bao khi co bai viet moi ve tram huong, phong thuy va suc khoe", en: "Get notified when there are new posts about agarwood, feng shui and health", zh: "当有关于沉香、风水和健康的新文章时收到通知" },
    enterEmail: { vi: "Nhap email cua ban", en: "Enter your email", zh: "输入您的邮箱" },
    subscribe: { vi: "Dang ky", en: "Subscribe", zh: "订阅" },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 text-sm mb-8">
              <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
                {content.home[locale]}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{content.breadcrumb[locale]}</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                {content.blogCategory[locale]}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                {content.title1[locale]}
                <span className="block text-primary mt-2">{content.title2[locale]}</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {content.description[locale]}
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={getLocalizedPath(`/blog/${post.id}`)} className="group">
                  <article className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img src={post.image} alt={post.title[locale]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium rounded-full">
                          {post.category[locale]}
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
                          {post.readTime[locale]}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground text-base md:text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title[locale]}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1">
                        {post.excerpt[locale]}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 group-hover:gap-3 transition-all">
                        {content.readMore[locale]}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-primary/10 text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors">
                {content.loadMore[locale]}
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
              {content.newsletter[locale]}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              {content.newsletterTitle[locale]}
            </h2>
            <p className="text-muted-foreground mb-8">
              {content.newsletterDesc[locale]}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={content.enterEmail[locale]}
                className="flex-1 px-5 py-3 border border-border rounded-full bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors">
                {content.subscribe[locale]}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
