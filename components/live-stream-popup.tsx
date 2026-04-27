"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Bell, ExternalLink, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const POPUP_KEY = "live-stream-popup-last-shown"
const SHOW_DELAY = 3000 // 3 seconds
const COOLDOWN = 6 * 60 * 60 * 1000 // 6 hours

export function LiveStreamPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkVisibility = () => {
      const lastShown = localStorage.getItem(POPUP_KEY)
      const now = Date.now()

      if (!lastShown || now - parseInt(lastShown) > COOLDOWN) {
        const timer = setTimeout(() => {
          setIsVisible(true)
        }, SHOW_DELAY)
        return () => clearTimeout(timer)
      }
    }

    checkVisibility()
  }, [])

  const handleClose = (dontShowAgain = false) => {
    setIsVisible(false)
    const now = Date.now()

    if (dontShowAgain) {
      // If they click "I've followed", don't show for 1 days
      localStorage.setItem(POPUP_KEY, (now + 1 * 24 * 60 * 60 * 1000).toString())
    } else {
      localStorage.setItem(POPUP_KEY, now.toString())
    }
  }

  const handleFollow = () => {
    window.open("https://www.facebook.com/tramhuongchubodoivn", "_blank")
    handleClose(true) // Consider it followed
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => handleClose()}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-card rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col md:flex-row min-h-[400px]"
          >
            {/* Close Button */}
            <button
              onClick={() => handleClose()}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-all z-20 backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Image/Visual */}
            <div className="relative w-full md:w-1/2 min-h-[250px] md:min-h-auto overflow-hidden">
              <Image
                src="/images/popup/live-stream-promo.png"
                alt="Live Stream Promo"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                <div className="text-white/70 text-xs font-medium backdrop-blur-sm bg-black/20 px-2 py-0.5 rounded-md inline-block w-fit">
                  @tramhuongchubodoivn
                </div>
              </div>
            </div>

            {/* Right: Text & Actions */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center bg-card relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Bell className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                    Thông báo ưu đãi
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 leading-[1.2] text-foreground tracking-tight">
                  Đừng bỏ lỡ các phiên Live <span className="text-primary italic">"giá đồng đội"</span> của Chú Bộ Đội!
                </h3>

                <p className="text-muted-foreground text-sm mb-8 leading-relaxed font-medium">
                  Hãy nhấn <span className="text-foreground font-bold">Theo dõi</span> và bật thông báo trên Fanpage ngay nha!
                </p>

                <div className="flex flex-col gap-3">
                  <Button
                    onClick={handleFollow}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-xl shadow-primary/20 transition-all active:scale-[0.98] group"
                  >
                    <span>Theo dõi Fanpage ngay</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>

                  <button
                    onClick={() => handleClose(true)}
                    className="text-[11px] text-muted-foreground/60 hover:text-primary transition-colors flex items-center justify-center gap-1.5 py-2 group"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                    <span>Tôi đã theo dõi rồi</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
