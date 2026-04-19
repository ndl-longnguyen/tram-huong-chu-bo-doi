import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

const featuredPost = {
  id: "1",
  title: "Hướng Dẫn Phân Biệt Trầm Hương Thật - Giả: Kiến Thức Cơ Bản",
  excerpt: "Trầm hương là một loại gỗ quý hiếm, có giá trị cao. Tuy nhiên, trên thị trường hiện nay có rất nhiều sản phẩm trầm hương giả. Bài viết này sẽ hướng dẫn bạn cách phân biệt...",
  image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
  author: "Admin",
  date: "15/04/2024",
  readTime: "8 phút đọc",
  category: "Kiến thức",
}

const blogPosts = [
  {
    id: "2",
    title: "Ý Nghĩa Phong Thủy Của Vòng Tay Trầm Hương",
    excerpt: "Khám phá những ý nghĩa phong thủy sâu sắc của vòng tay trầm hương và cách đeo đúng cách...",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80",
    author: "Admin",
    date: "12/04/2024",
    readTime: "5 phút đọc",
    category: "Phong thủy",
  },
  {
    id: "3",
    title: "Cách Bảo Quản Trầm Hương Đúng Cách",
    excerpt: "Những lưu ý quan trọng khi bảo quản các sản phẩm trầm hương để giữ hương thơm lâu bền...",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80",
    author: "Admin",
    date: "10/04/2024",
    readTime: "4 phút đọc",
    category: "Hướng dẫn",
  },
  {
    id: "4",
    title: "Lịch Sử Trầm Hương Việt Nam Qua Các Thời Kỳ",
    excerpt: "Tìm hiểu về lịch sử hình thành và phát triển của nghề trầm hương tại Việt Nam...",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80",
    author: "Admin",
    date: "08/04/2024",
    readTime: "10 phút đọc",
    category: "Lịch sử",
  },
  {
    id: "5",
    title: "Top 5 Vùng Trầm Hương Nổi Tiếng Việt Nam",
    excerpt: "Khám phá những vùng đất nổi tiếng với trầm hương chất lượng cao tại Việt Nam...",
    image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=500&q=80",
    author: "Admin",
    date: "05/04/2024",
    readTime: "6 phút đọc",
    category: "Khám phá",
  },
  {
    id: "6",
    title: "Trầm Hương Trong Y Học Cổ Truyền",
    excerpt: "Vai trò của trầm hương trong y học cổ truyền và những công dụng chữa bệnh...",
    image: "https://images.unsplash.com/photo-1616169227523-5f66a24f0735?w=500&q=80",
    author: "Admin",
    date: "02/04/2024",
    readTime: "7 phút đọc",
    category: "Sức khỏe",
  },
]

const categories = [
  { name: "Tất cả", count: 45 },
  { name: "Kiến thức", count: 12 },
  { name: "Phong thủy", count: 8 },
  { name: "Hướng dẫn", count: 10 },
  { name: "Lịch sử", count: 5 },
  { name: "Sức khỏe", count: 6 },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Trang chủ
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Blog</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                BLOG & TIN TỨC
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Khám Phá Thế Giới
                <span className="block text-primary mt-2">Trầm Hương</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Chia sẻ kiến thức, kinh nghiệm và những câu chuyện thú vị 
                về trầm hương Việt Nam từ đội ngũ chuyên gia của chúng tôi.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? "bg-primary text-white" 
                      : "bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <Link href={`/blog/${featuredPost.id}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Đọc tiếp
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                  <article className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 group-hover:gap-3 transition-all">
                        Đọc tiếp
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-primary/10 text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors">
                Xem thêm bài viết
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
              NEWSLETTER
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Đăng Ký Nhận Bài Viết Mới
            </h2>
            <p className="text-muted-foreground mb-8">
              Nhận thông báo khi có bài viết mới về trầm hương, phong thủy và sức khỏe
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-5 py-3 border border-border rounded-full bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors">
                Đăng ký
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
