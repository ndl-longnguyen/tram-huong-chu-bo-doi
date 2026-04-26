"use client"

import { Phone, MessageCircle, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export function ContactButtons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const PAGE_ID = '122094725762008027'
  const [messengerUrl, setMessengerUrl] = useState(`https://m.me/${PAGE_ID}`)

  useEffect(() => {
    const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile) {
      setMessengerUrl(`fb-messenger://user-thread/${PAGE_ID}`)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 sm:gap-4 pointer-events-none">
      {/* Phone Call */}
      <a
        href="tel:0765942942"
        className="group pointer-events-auto relative w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Gọi ngay"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Gọi ngay
        </span>
      </a>

      {/* Messenger */}
      <a
        href={messengerUrl}
        className="group pointer-events-auto relative w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Messenger"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
        >
          <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.504 3.688 7.203V22l3.405-1.867c.91.252 1.873.388 2.907.388 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm.994 12.442l-2.545-2.716-4.97 2.716 5.467-5.804 2.609 2.716 4.906-2.716-5.467 5.804z" />
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Messenger
        </span>
      </a>

      <div className="flex items-center gap-2">
        {/* Scroll To Top - Small and next to Zalo */}
        <button
          onClick={scrollToTop}
          className={`w-8 h-8 pointer-events-auto bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-500 flex items-center justify-center cursor-pointer ${
            isVisible ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-50 translate-x-10 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* Zalo */}
        <a
          href="https://zalo.me/0765942942"
          className="group pointer-events-auto relative w-12 h-12 bg-[#0068FF] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Zalo"
        >
          <svg viewBox="0 0 48 48" className="w-7 h-7">
            <path fill="#2962ff" d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z" />
            <path fill="#eee" d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z" />
            <path fill="#2962ff" d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z" />
            <path fill="#2962ff" d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z" />
            <path fill="#2962ff" d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z" />
            <path fill="#2962ff" d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z" />
          </svg>
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
            Zalo
          </span>
        </a>
      </div>
    </div>
  )
}
