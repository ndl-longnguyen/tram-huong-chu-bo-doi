"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, Award, Shield, Leaf, Users } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

const timeline = [
  { year: "2015", event: { vi: "Khởi nghiệp với đam mê trầm hương", en: "Started with passion for agarwood", zh: "带着对沉香的热情开始创业" } },
  { year: "2019", event: { vi: "Mở xưởng sản xuất tại Tiên Phước", en: "Open factory in Tien Phuoc", zh: "在仙福开设工厂" } },
  { year: "2022", event: { vi: "Mở rộng đa dạng sản phẩm", en: "Expanded product range", zh: "扩大产品范围" } },
  { year: "2023", event: { vi: "Phát triển kênh bán hàng online", en: "Developed online sales channel", zh: "发展线上销售渠道" } },
  { year: "2024", event: { vi: "Hơn 10,000 khách hàng tin tưởng", en: "Over 10,000 trusted customers", zh: "超过10,000位信赖的客户" } },
]

const values = [
  {
    title: { vi: "TINH", en: "EXCELLENCE", zh: "精" },
    subtitle: { vi: "Tinh hoa nghề truyền thống", en: "Traditional craftsmanship excellence", zh: "传统工艺精华" },
    description: {
      vi: "Kế thừa và phát huy tinh hoa nghề chế tác trầm hương truyền thống hàng trăm năm của Việt Nam.",
      en: "Inheriting and promoting the traditional Vietnamese agarwood craftsmanship of hundreds of years.",
      zh: "继承和发扬越南数百年传统沉香工艺精华。"
    },
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    icon: Leaf,
  },
  {
    title: { vi: "TÍN", en: "TRUST", zh: "信" },
    subtitle: { vi: "Uy tín và chất lượng", en: "Trust and quality", zh: "信誉与品质" },
    description: {
      vi: "Cam kết 100% sản phẩm trầm hương tự nhiên, không pha trộn, không hóa chất.",
      en: "Committed to 100% natural agarwood products, no mixing, no chemicals.",
      zh: "承诺100%天然沉香产品，无掺杂，无化学品。"
    },
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    icon: Shield,
  },
  {
    title: { vi: "TÂM", en: "DEDICATION", zh: "心" },
    subtitle: { vi: "Tâm huyết với nghề", en: "Dedication to the craft", zh: "对工艺的专注" },
    description: {
      vi: "Mỗi sản phẩm đều được chế tác với tâm huyết, sự tỉ mỉ và đam mê của nghệ nhân.",
      en: "Each product is crafted with dedication, meticulousness and passion of artisans.",
      zh: "每件产品都凝聚着工匠的心血、细致和热情。"
    },
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    icon: Users,
  },
]

const stores = [
  {
    name: { vi: "SHOWROOM CHÍNH", en: "MAIN SHOWROOM", zh: "主展厅" },
    address: "Tiên Phước, TP. Đà Nẵng (Quảng Nam cũ)",
    phone: "0765.942.942",
    hours: "8:00 - 22:00",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  },
]

export default function AboutPage() {
  const { locale, t, getLocalizedPath } = useLanguage()

  const content = {
    breadcrumb: { vi: "Về Chúng Tôi", en: "About Us", zh: "关于我们" },
    home: { vi: "Trang chủ", en: "Home", zh: "首页" },
    brandStory: { vi: "CÂU CHUYỆN THƯƠNG HIỆU", en: "BRAND STORY", zh: "品牌故事" },
    quote: {
      vi: "Từ ngàn xưa, trầm hương đã được ông bà tổ tiên chúng ta phát hiện và sử dụng - tôn vinh là thứ gỗ quý, mang trong mình linh khí của thiên nhiên để mang lại bình an và may mắn.",
      en: "Since ancient times, agarwood has been discovered and cherished by our ancestors - revered as precious wood carrying the spirit of nature, bringing peace and fortune.",
      zh: "自古以来，沉香被我们的祖先发现和珍视——被尊为珍贵的木材，承载着大自然的灵气，带来平安和好运。"
    },
    yearsExp: { vi: "Năm kinh nghiệm", en: "Years experience", zh: "年经验" },
    customers: { vi: "Khách hàng", en: "Customers", zh: "客户" },
    natural: { vi: "Tự nhiên", en: "Natural", zh: "天然" },
    philosophy: { vi: "TRIẾT LÝ KINH DOANH", en: "BUSINESS PHILOSOPHY", zh: "经营理念" },
    philosophyTitle: { vi: "Tinh - Tín - Tâm", en: "Excellence - Trust - Dedication", zh: "精 - 信 - 心" },
    journey: { vi: "HÀNH TRÌNH", en: "OUR JOURNEY", zh: "我们的旅程" },
    journeyTitle: { vi: "Chặng Đường Phát Triển", en: "Development Milestones", zh: "发展里程碑" },
    commitment: { vi: "CAM KẾT CỦA CHÚNG TÔI", en: "OUR COMMITMENT", zh: "我们的承诺" },
    commitmentTitle: { vi: "Chất Lượng Là Ưu Tiên Hàng Đầu", en: "Quality Is Our Top Priority", zh: "品质是我们的首要任务" },
    commitmentDesc: {
      vi: "Tại Trầm Hương Chú Bộ Đội, chúng tôi cam kết mang đến cho khách hàng những sản phẩm trầm hương tự nhiên 100%, được chọn lọc kỹ càng từ những vùng trầm nổi tiếng của Việt Nam.",
      en: "At Trầm Hương Chú Bộ Đội, we are committed to providing customers with 100% natural agarwood products, carefully selected from famous agarwood regions of Vietnam.",
      zh: "在朱伯队沉香，我们承诺为客户提供100%天然沉香产品，精心挑选自越南著名沉香产区。"
    },
    warranty: { vi: "Bảo hành trọn đời cho tất cả sản phẩm", en: "Lifetime warranty for all products", zh: "所有产品终身保修" },
    natural100: { vi: "100% trầm hương tự nhiên, không hóa chất", en: "100% natural agarwood, no chemicals", zh: "100%天然沉香，无化学品" },
    isoCert: { vi: "Chứng nhận chất lượng ISO", en: "ISO quality certification", zh: "ISO质量认证" },
    artisans: { vi: "Đội ngũ nghệ nhân lành nghề 20+ năm", en: "Team of skilled artisans 20+ years", zh: "20多年经验的熟练工匠团队" },
    storeSystem: { vi: "HỆ THỐNG CỬA HÀNG", en: "STORE SYSTEM", zh: "门店系统" },
    visitUs: { vi: "Ghé Thăm Chúng Tôi", en: "Visit Us", zh: "欢迎光临" },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary">
                {content.home[locale]}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{content.breadcrumb[locale]}</span>
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
                {content.brandStory[locale]}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
                {locale === "zh" ? "沉香" : locale === "en" ? "Agarwood" : "Trầm Hương"}
                <span className="block text-primary mt-2">{locale === "zh" ? "朱伯队" : locale === "en" ? "Chu Bo Doi" : "Chú Bộ Đội"}</span>
              </h1>

              <blockquote className="relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-serif text-3xl">&ldquo;</span>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed pt-8 max-w-3xl mx-auto">
                  {content.quote[locale]}
                </p>
              </blockquote>

              <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-primary">15+</div>
                  <p className="text-sm text-muted-foreground mt-1">{content.yearsExp[locale]}</p>
                </div>
                <div className="w-px h-12 bg-border hidden sm:block" />
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-primary">10,000+</div>
                  <p className="text-sm text-muted-foreground mt-1">{content.customers[locale]}</p>
                </div>
                <div className="w-px h-12 bg-border hidden sm:block" />
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-primary">100%</div>
                  <p className="text-sm text-muted-foreground mt-1">{content.natural[locale]}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Tinh Tin Tam */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
                {content.philosophy[locale]}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                {content.philosophyTitle[locale]}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title[locale]}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-serif text-3xl text-white font-bold">{value.title[locale]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-foreground font-semibold text-lg mb-2">{value.subtitle[locale]}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description[locale]}</p>
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
                {content.journey[locale]}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                {content.journeyTitle[locale]}
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
                          <p className="text-foreground">{item.event[locale]}</p>
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
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
                  {content.commitment[locale]}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  {content.commitmentTitle[locale]}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {content.commitmentDesc[locale]}
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Shield, text: content.warranty[locale] },
                    { icon: Leaf, text: content.natural100[locale] },
                    { icon: Award, text: content.isoCert[locale] },
                    { icon: Users, text: content.artisans[locale] },
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
                  alt="Tram huong cao cap"
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
                {content.storeSystem[locale]}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                {content.visitUs[locale]}
              </h2>
            </div>

            <div className="max-w-xl mx-auto">
              {stores.map((store, index) => (
                <div key={index} className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={store.image}
                      alt={store.name[locale]}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                        {store.name[locale]}
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
