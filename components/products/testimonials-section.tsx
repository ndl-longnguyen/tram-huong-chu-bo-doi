const testimonials = [
  {
    name: "CHỊ THU",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    content: "Mình đã mua vòng tay trầm hương cho ba làm quà sinh nhật. Chất lượng tuyệt vời, hương thơm dịu nhẹ, ba mình rất thích. Sẽ tiếp tục ủng hộ Thiên Mộc Hương.",
  },
  {
    name: "CHỊ HÀ",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
    content: "Sản phẩm đúng như mô tả, đóng gói cẩn thận. Nhân viên tư vấn nhiệt tình, giao hàng nhanh. Rất hài lòng với dịch vụ của shop.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl text-center text-foreground mb-12">
          Cảm Nhận Khách Hàng
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-card rounded-lg overflow-hidden">
              <div className="flex">
                <div className="w-1/3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
                    {testimonial.name}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-8">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
