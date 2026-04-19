import Link from "next/link"

export function IntroSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
            Thiên Mộc Hương ~ Tinh Hoa Trầm Việt ~ Di sản Á Đông
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chúng tôi tin rằng <span className="text-primary font-medium">Thiên Hương</span> không chỉ đơn thuần là sản phẩm phong thủy hay bùa mệnh quá xưa cũ, mà còn là một số cảm tình thầm - sự đẹp tình thiên - chân trời, đời sống với Thiên nhiên và văn hóa mang giá trị thuyền thống.
          </p>
          <p className="text-primary italic mt-4">
            &quot;Tinh Hoa Trầm Việt - Di sản Á Đông&quot;
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left - Image with overlay */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80"
                alt="Người mẹ và con gái"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-serif text-xl mb-2">VÒNG TAY TRẦM HƯƠNG</h3>
                <p className="text-white/80 text-sm">
                  Vòng tay trầm hương phong thủy mang lại may mắn, bình an cho gia đình.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80"
                alt="Vòng tay trầm hương"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80"
                alt="Sản phẩm trầm hương"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80"
                alt="Nghệ nhân chế tác"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80"
                alt="Trầm hương cao cấp"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/gioi-thieu"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            TÌM HIỂU THÊM
          </Link>
        </div>
      </div>
    </section>
  )
}
