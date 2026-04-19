const pressLogos = [
  { name: "VN Express", className: "bg-red-600" },
  { name: "VTV", className: "bg-blue-700" },
  { name: "Vnexpress", className: "bg-orange-500" },
  { name: "Vietcetera", className: "bg-black" },
  { name: "Tiền Phong", className: "bg-red-700" },
  { name: "Dân Trí", className: "bg-blue-600" },
]

export function PressSection() {
  return (
    <section className="py-12 lg:py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-xl md:text-2xl text-foreground">
            BÁO CHÍ NÓI VỀ THIÊN MỘC HƯƠNG
          </h2>
        </div>

        {/* Press Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {pressLogos.map((logo, index) => (
            <div
              key={index}
              className={`${logo.className} text-white px-4 py-2 rounded font-bold text-sm md:text-base`}
            >
              {logo.name}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button className="text-primary hover:text-accent underline text-sm font-medium transition-colors">
            XEM TẤT CẢ THÔNG TIN CHI TIẾT
          </button>
        </div>
      </div>
    </section>
  )
}
