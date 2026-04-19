"use client"

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,251,245,0.3), rgba(255,251,245,0.8)), url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32 flex flex-col items-center text-center">
        <div className="mb-4">
          <span className="text-primary font-serif italic text-lg">Bộ sưu tập</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-4 tracking-wide">
          KIM TÂM BẢO
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          Bộ sưu tập thiên nhiên - Nghệ thuật về đôi tay người Việt
        </p>
        <Link
          href="/bo-suu-tap/kim-tam-bao"
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-accent transition-colors"
        >
          XEM NGAY
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
