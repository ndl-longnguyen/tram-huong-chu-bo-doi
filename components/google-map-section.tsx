"use client"

import { MapPin, Navigation, Phone, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

interface GoogleMapSectionProps {
  className?: string
  showHeader?: boolean
}

export function GoogleMapSection({
  className = "",
  showHeader = true,
}: GoogleMapSectionProps) {
  const { t } = useLanguage()

  const MAP_EMBED_SRC =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.4880626859613!2d108.3230188!3d15.503161599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169e9965a70bae3%3A0x70a48fbae13e2df!2zVHLhuqdtIEjGsMahbmcgQ2jDuiBC4buZIMSQ4buZaQ!5e1!3m2!1svi!2s!4v1791290010554!5m2!1svi!2s"

  const DIRECT_MAP_URL =
    "https://www.google.com/maps/place/Tr%E1%BA%A7m+H%C6%B0%C6%A1ng+Ch%C3%BA+B%E1%BB%99+%C4%90%E1%BB%99i/@15.5031616,108.3230188,852m/data=!3m1!1e3!4m6!3m5!1s0x3169e9965a70bae3:0x70a48fbae13e2df!8m2!3d15.5031616!4d108.3230188!16s%2Fg%2F11zxv1j6h8?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"

  return (
    <section className={`py-12 lg:py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {showHeader && (
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 tracking-widest uppercase">
              {t("map.title") || "Bản Đồ Chỉ Đường"}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold tracking-tight">
              {t("map.subtitle") || "Vị Trí Xưởng Trầm Hương Chú Bộ Đội"}
            </h2>
          </div>
        )}

        <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
          {/* Top Quick Bar */}
          <div className="p-4 sm:p-6 bg-muted/40 border-b border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Tiên Phước, TP. Đà Nẵng (Quảng Nam cũ)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>8:00 - 22:00 (Thứ 2 - CN)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:0765942942" className="text-primary font-semibold hover:underline">
                  0765.942.942
                </a>
              </div>
            </div>

            <a
              href={DIRECT_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full hover:bg-primary/90 hover:shadow-md transition-all shrink-0"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{t("map.openGoogleMaps") || "Chỉ đường trên Google Maps"}</span>
            </a>
          </div>

          {/* Iframe Container */}
          <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] bg-muted/20">
            <iframe
              src={MAP_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Vị trí Trầm Hương Chú Bộ Đội trên Google Maps"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
