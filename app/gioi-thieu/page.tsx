import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const timeline = [
  { year: "1980", event: "Khởi nghiệp gia công Trầm Hương" },
  { year: "1995", event: "Mở rộng quy mô sản xuất" },
  { year: "2005", event: "Thành lập thương hiệu Thiên Mộc Hương" },
  { year: "2015", event: "Mở showroom đầu tiên tại Hà Nội" },
  { year: "2020", event: "Phát triển kênh bán hàng online" },
  { year: "2024", event: "Mở rộng thị trường quốc tế" },
]

const values = [
  {
    title: "TINH",
    subtitle: "Tinh hoa nghề truyền thống",
    description: "Kế thừa và phát huy tinh hoa nghề chế tác trầm hương truyền thống hàng trăm năm của Việt Nam.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
  },
  {
    title: "TÍN",
    subtitle: "Uy tín và chất lượng",
    description: "Cam kết 100% sản phẩm trầm hương tự nhiên, không pha trộn, không hóa chất.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
  },
  {
    title: "TÂM",
    subtitle: "Tâm huyết với nghề",
    description: "Mỗi sản phẩm đều được chế tác với tâm huyết, sự tỉ mỉ và đam mê của nghệ nhân.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
  },
]

const awards = [
  {
    year: "2017",
    title: "THƯƠNG HIỆU TRẦM HƯƠNG VIỆT NAM DUY NHẤT ĐẠT CHỨNG NHẬN TỪ HỘI ĐỒNG THỊ QUỐC TẾ",
  },
  {
    year: "2022",
    title: "UNESCO VINH DANH \"THƯƠNG HIỆU BẢN SẮC VIỆT NAM ĐANG ĐỂ GIÁ TRỊ TOÀN CẦU\"",
  },
  {
    year: "2024",
    title: "NHẬN CHỨNG NHẬN QUẢN LÝ CHẤT LƯỢNG XÂY DỰNG ISO",
  },
]

const stores = [
  {
    name: "FLAGSHIP STORE HÀ NỘI",
    address: "11 Kim Mã, Ba Đình, Hà Nội",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  },
  {
    name: "AGARWOOD ART GALLERY",
    address: "20 - 20A Nguyễn Trãi, Quận 5, TP.HCM",
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

        {/* Brand Introduction */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-primary" />
                <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground">
                  GIỚI THIỆU THƯƠNG HIỆU
                </h1>
                <div className="h-px w-16 bg-primary" />
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <blockquote className="border-l-4 border-primary pl-6 mb-8">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  Từ ngàn xưa, trầm hương đã được ông bà tổ tiên chúng ta phát hiện và sử dụng - tôn vinh là thứ gỗ quý, 
                  mang trong mình linh khí của thiên nhiên để xua đuổi tà ma và mang lại bình an.
                </p>
              </blockquote>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Trầm hương là một sản phẩm thiên nhiên, được kết tinh bởi năm số 25 đến năm 40 tuổi cây gió. Vì thứ phòng thành khí phú 
                của cây gió, Trầm hương tuy quý nhưng thủ có tác tính siêu vượng năng của cây để mang tiếp chọn vị đẹp có sản xuất 
                những thiết kế đặc phù hợp với phong cách của mọi người, từ cổ điển đến hiện đại. Sử dụng trầm hương không chỉ giúp 
                bạn cảm nhận được sự thanh tịnh, mà còn mang lại những giá trị phong thủy tốt đẹp.
              </p>

              <div className="flex items-center justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">200 NĂM</div>
                  <p className="text-sm text-muted-foreground">Truyền Thống</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">300 TRIỆU</div>
                  <p className="text-sm text-muted-foreground">Tuổi Trầm</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-primary font-serif italic text-lg">
                  Thiên Mộc Hương ~ Tinh Hoa Trầm Việt ~ Di sản Á Đông
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Tinh Tín Tâm */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                TRIẾT LÝ: TINH - TÍN - TÂM
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-2xl text-primary mb-2">{value.title}</h3>
                    <p className="text-foreground font-medium mb-2">{value.subtitle}</p>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                HÀNH TRÌNH 45 NĂM XÂY DỰNG THƯƠNG HIỆU
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-1/2" />

                {/* Timeline Items */}
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                        <div className="bg-card p-4 rounded-lg border border-border">
                          <span className="text-primary font-bold text-lg">{item.year}</span>
                          <p className="text-muted-foreground text-sm mt-1">{item.event}</p>
                        </div>
                      </div>
                      {/* Dot */}
                      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Standards */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                CHUẨN MỰC KHÁC BIỆT CỦA TRẦM HƯƠNG THIÊN MỘC HƯƠNG
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80"
                  alt="Trầm Hương"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl text-primary mb-4">TRẦM HƯƠNG TINH TUYỀN - KHOÁNG VÀNG MỘC CHẤT</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Trầm hương Thiên Mộc Hương được tuyển chọn từ những rừng gió lâu năm, qua quy trình kiểm định chất lượng nghiêm ngặt, 
                    đảm bảo 100% trầm hương tự nhiên, không pha trộn hay xử lý hóa chất.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80"
                  alt="Chế Tác"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl text-primary mb-4">CHẾ TÁC THỦ CÔNG - THIẾT KẾ ĐỘC ĐÁO</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Mỗi sản phẩm đều được các nghệ nhân lành nghề chế tác thủ công tỉ mỉ, kết hợp giữa nghệ thuật truyền thống 
                    và thiết kế hiện đại, tạo nên những tác phẩm độc đáo và có hồn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                THÀNH TỰU ĐÁNG TỰ HÀO & GIẢI THƯỞNG
              </h2>
            </div>

            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded font-bold text-sm flex-shrink-0">
                    {award.year}
                  </div>
                  <p className="text-foreground font-medium">{award.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Store System */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                HỆ THỐNG CỬA HÀNG THIÊN MỘC HƯƠNG CHÍNH HÃNG
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stores.map((store, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-serif text-lg text-primary mb-2">{store.name}</h3>
                    <p className="text-muted-foreground text-sm">{store.address}</p>
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
