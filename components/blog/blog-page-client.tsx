"use client"

import Link from "next/link"
import { ChevronRight, Calendar, ArrowRight, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

type LocaleKey = "vi" | "en" | "zh"

const blogPosts = [
  { id: "1", title: { vi: "Hướng Dẫn Phân Biệt Trầm Hương Thật - Giả", en: "Guide to Distinguish Real vs Fake Agarwood", zh: "如何辨别真假沉香指南" }, excerpt: { vi: "Trầm hương là một loại gỗ quý hiếm, có giá trị cao...", en: "Agarwood is a rare and valuable wood...", zh: "沉香是一种稀有珍贵的木材..." }, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", date: "15/04/2024", readTime: { vi: "8 phút đọc", en: "8 min read", zh: "8分钟阅读" }, category: { vi: "Kiến thức", en: "Knowledge", zh: "知识" } },
  { id: "2", title: { vi: "Ý Nghĩa Phong Thủy Của Vòng Tay Trầm Hương", en: "Feng Shui Meaning of Agarwood Bracelets", zh: "沉香手链的风水意义" }, excerpt: { vi: "Khám phá những ý nghĩa phong thủy sâu sắc...", en: "Discover the profound feng shui meanings...", zh: "探索深刻的风水意义..." }, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80", date: "12/04/2024", readTime: { vi: "5 phút đọc", en: "5 min read", zh: "5分钟阅读" }, category: { vi: "Phong thủy", en: "Feng Shui", zh: "风水" } },
  { id: "3", title: { vi: "Cách Bảo Quản Trầm Hương Đúng Cách", en: "How to Properly Store Agarwood", zh: "如何正确保存沉香" }, excerpt: { vi: "Những lưu ý quan trọng khi bảo quản...", en: "Important notes when storing...", zh: "保存时的重要注意事项..." }, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80", date: "10/04/2024", readTime: { vi: "4 phút đọc", en: "4 min read", zh: "4分钟阅读" }, category: { vi: "Hướng dẫn", en: "Guide", zh: "指南" } },
  { id: "4", title: { vi: "Lịch Sử Trầm Hương Việt Nam", en: "History of Vietnamese Agarwood", zh: "越南沉香历史" }, excerpt: { vi: "Tìm hiểu về lịch sử hình thành và phát triển...", en: "Learn about the history and development...", zh: "了解形成和发展的历史..." }, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80", date: "08/04/2024", readTime: { vi: "10 phút đọc", en: "10 min read", zh: "10分钟阅读" }, category: { vi: "Lịch sử", en: "History", zh: "历史" } },
  { id: "5", title: { vi: "Top 5 Vùng Trầm Hương Nổi Tiếng Việt Nam", en: "Top 5 Famous Agarwood Regions in Vietnam", zh: "越南五大著名沉香产区" }, excerpt: { vi: "Khám phá những vùng đất nổi tiếng...", en: "Discover the famous regions...", zh: "探索著名的产区..." }, image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=500&q=80", date: "05/04/2024", readTime: { vi: "6 phút đọc", en: "6 min read", zh: "6分钟阅读" }, category: { vi: "Khám phá", en: "Explore", zh: "探索" } },
  { id: "6", title: { vi: "Trầm Hương Trong Y Học Cổ Truyền", en: "Agarwood in Traditional Medicine", zh: "沉香在传统医学中的应用" }, excerpt: { vi: "Vai trò của trầm hương trong y học cổ truyền...", en: "The role of agarwood in traditional medicine...", zh: "沉香在传统医学中的作用..." }, image: "https://images.unsplash.com/photo-1616169227523-5f66a24f0735?w=500&q=80", date: "02/04/2024", readTime: { vi: "7 phút đọc", en: "7 min read", zh: "7分钟阅读" }, category: { vi: "Sức khỏe", en: "Health", zh: "健康" } },
]

export function BlogPageClient() {
  const { locale, getLocalizedPath } = useLanguage()
  const l = locale as LocaleKey

  const content = {
    home: { vi: "Trang chủ", en: "Home", zh: "首页" },
    breadcrumb: { vi: "Blog", en: "Blog", zh: "博客" },
    blogCategory: { vi: "BLOG & TIN TỨC", en: "BLOG & NEWS", zh: "博客与新闻" },
    title1: { vi: "Khám Phá Thế Giới", en: "Discover the World", zh: "探索世界" },
    title2: { vi: "Trầm Hương", en: "of Agarwood", zh: "沉香" },
    description: {
      vi: "Chia sẻ kiến thức, kinh nghiệm và những câu chuyện thú vị về trầm hương Việt Nam từ đội ngũ chuyên gia của chúng tôi.",
      en: "Sharing knowledge, experience and interesting stories about Vietnamese agarwood from our team of experts.",
      zh: "分享我们专家团队关于越南沉香的知识、经验和有趣故事。"
    },
    readMore: { vi: "Đọc tiếp", en: "Read more", zh: "阅读更多" },
    loadMore: { vi: "Xem thêm bài viết", en: "Load more posts", zh: "加载更多文章" },
    newsletter: { vi: "NEWSLETTER", en: "NEWSLETTER", zh: "通讯" },
    newsletterTitle: { vi: "Đăng Ký Nhận Bài Viết Mới", en: "Subscribe to New Posts", zh: "订阅新文章" },
    newsletterDesc: { vi: "Nhận thông báo khi có bài viết mới về trầm hương, phong thủy và sức khỏe", en: "Get notified when there are new posts about agarwood, feng shui and health", zh: "当有关于沉香、风水和健康的新文章时收到通知" },
    enterEmail: { vi: "Nhập email của bạn", en: "Enter your email", zh: "输入您的邮箱" },
    subscribe: { vi: "Đăng ký", en: "Subscribe", zh: "订阅" },
  }

  return (
    <>
      <section className="relative pb-16 lg:pb-24 pt-6 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
              {content.home[l]}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{content.breadcrumb[l]}</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
              {content.blogCategory[l]}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground mb-6 uppercase tracking-tight">
              {content.title1[l]}
              <span className="block text-primary mt-2">{content.title2[l]}</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              {content.description[l]}
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
                    <img src={post.image} alt={post.title[l]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
                      {content.readMore[l]}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary/10 text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors uppercase tracking-wider text-sm">
              {content.loadMore[l]}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider uppercase text-xs font-bold">
            {content.newsletter[l]}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 uppercase">
            {content.newsletterTitle[l]}
          </h2>
          <p className="text-muted-foreground mb-8">
            {content.newsletterDesc[l]}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={content.enterEmail[l]}
              className="flex-1 px-5 py-3 border border-border rounded-full bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors uppercase text-sm tracking-wider">
              {content.subscribe[l]}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
