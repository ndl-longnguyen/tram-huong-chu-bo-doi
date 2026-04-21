const pressLogos = [
  { name: "Đà Nẵng", color: "from-blue-700 to-blue-800", link: "https://baodanang.vn/bo-doi-xuat-ngu-khoi-nghiep-voi-den-trang-tri-tram-canh-3140715.html" },
  { name: "Tiền Phong", color: "from-red-700 to-red-800", link: "https://baodanang.vn/doi-ban-than-xuat-ngu-ve-mo-xuong-tram-huong-3320268.html" },
  { name: "VnExpress", color: "from-red-600 to-red-700", link: "https://vnexpress.net/lam-den-ngu-bang-tram-huong-4794276.html" },
  { name: "Vietnamnet", color: "from-orange-500 to-orange-600", link: "https://vietnamnet.vn/doi-ban-than-o-quang-nam-che-tac-den-ngu-doc-la-toa-mui-thom-giup-ngu-ngon-2347044.html" },
]

export function PressSection() {
  return (
    <section className="py-16 lg:py-20 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
            TRUYỀN THÔNG
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">
            Báo Chí Nói Về Trầm Hương Chú Bộ Đội
          </h2>
        </div>

        {/* Press Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {pressLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-r ${logo.color} text-white px-6 py-3 rounded-xl font-bold text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer block`}
            >
              {logo.name}
            </a>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Chứng nhận ISO</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Bảo hành trọn đời</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">100% tự nhiên</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Giao hàng toàn quốc</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
