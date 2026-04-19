import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, Award, Shield, Leaf, Users } from "lucide-react"
import Link from "next/link"

const timeline = [
  { year: "2005", event: "Khởi nghiệp với đam mê trầm hương" },
  { year: "2010", event: "Mở cửa hàng đầu tiên tại Hà Nội" },
  { year: "2015", event: "Mở rộng ra thị trường miền Nam" },
  { year: "2018", event: "Đạt chứng nhận ISO về chất lượng" },
  { year: "2022", event: "Phát triển kênh bán hàng online" },
  { year: "2024", event: "Hơn 10,000 khách hàng tin tưởng" },
]

const values = [
  {
    title: "TINH",
    subtitle: "Tinh hoa nghề truyền thống",
    description: "Kế thừa và phát huy tinh hoa nghề chế tác trầm hương truyền thống hàng trăm năm của Việt Nam.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    icon: Leaf,
  },
  {
    title: "TÍN",
    subtitle: "Uy tín và chất lượng",
    description: "Cam kết 100% sản phẩm trầm hương tự nhiên, không pha trộn, không hóa chất.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    icon: Shield,
  },
  {
    title: "TÂM",
    subtitle: "Tâm huyết với nghề",
    description: "Mỗi sản phẩm đều được chế tác với tâm huyết, sự tỉ mỉ và đam mê của nghệ nhân.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    icon: Users,
  },
]

const stores = [
  {
    name: "FLAGSHIP STORE HÀ NỘI",
    address: "11 Kim Mã, Ba Đình, Hà Nội",
    phone: "0818.348.368",
    hours: "8:00 - 22:00",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  },
  {
    name: "CHI NHÁNH TP.HCM",
    address: "20 - 20A Nguyễn Trãi, Quận 5, TP.HCM",
    phone: "0933.348.368",
    hours: "8:00 - 22:00",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Trang chủ
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Về Chúng Tôi</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 tracking-wider">
                CÂU CHUYỆN THƯƠNG HIỆU
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
                Trầm Hương
                <span className="block text-primary mt-2">Chú Bộ Đội</span>
              </h1>
              
              <blockquote className="relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-serif text-3xl">&ldquo;</span>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed pt-8 max-w-3xl mx-auto">
                  Từ ngàn xưa, trầm hương đã được ông bà tổ tiên chúng ta phát hiện và sử dụng - 
                  tôn vinh là thứ gỗ quý, mang trong mình linh khí của thiên nhiên để mang lại bình an và may mắn.
                </p>
              </blockquote>

              <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-primary">15+</div>
                  <p className="text-sm text-muted-foreground mt-1">Năm kinh nghiệm</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-primary">10,000+</div>
                  <p className="text-sm text-muted-foreground mt-1">Khách hàng</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-primary">100%</div>
                  <p className="text-sm text-muted-foreground mt-1">Tự nhiên</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Tinh Tín Tâm */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
                TRIẾT LÝ KINH DOANH
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Tinh - Tín - Tâm
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-serif text-3xl text-white font-bold">{value.title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-foreground font-semibold text-lg mb-2">{value.subtitle}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
                HÀNH TRÌNH
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Chặng Đường Phát Triển
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

                {/* Timeline Items */}
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                        <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-lg rounded-full mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                            {item.year}
                          </span>
                          <p className="text-foreground">{item.event}</p>
                        </div>
                      </div>
                      {/* Dot */}
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 ring-4 ring-background" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
                  CAM KẾT CỦA CHÚNG TÔI
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Chất Lượng Là Ưu Tiên Hàng Đầu
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Tại Trầm Hương Chú Bộ Đội, chúng tôi cam kết mang đến cho khách hàng những sản phẩm 
                  trầm hương tự nhiên 100%, được chọn lọc kỹ càng từ những vùng trầm nổi tiếng của Việt Nam.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: "Bảo hành trọn đời cho tất cả sản phẩm" },
                    { icon: Leaf, text: "100% trầm hương tự nhiên, không hóa chất" },
                    { icon: Award, text: "Chứng nhận chất lượng ISO" },
                    { icon: Users, text: "Đội ngũ nghệ nhân lành nghề 20+ năm" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80"
                  alt="Trầm hương cao cấp"
                  className="relative w-full h-[500px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Store System */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
                HỆ THỐNG CỬA HÀNG
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Ghé Thăm Chúng Tôi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stores.map((store, index) => (
                <div key={index} className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={store.image}
                      alt={store.name}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                        {store.name}
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
                      {store.hours}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
