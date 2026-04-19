"use client"

import { Phone, MessageCircle } from "lucide-react"

export function ContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone Call */}
      <a
        href="tel:0818348368"
        className="group relative w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none"
        aria-label="Gọi ngay"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Gọi ngay
        </span>
      </a>

      {/* Messenger */}
      <a
        href="https://m.me/tramhuongchubodoi"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Messenger"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
        >
          <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.504 3.688 7.203V22l3.405-1.867c.91.252 1.873.388 2.907.388 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm.994 12.442l-2.545-2.716-4.97 2.716 5.467-5.804 2.609 2.716 4.906-2.716-5.467 5.804z" />
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Messenger
        </span>
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0818348368"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Zalo"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
        >
          <path d="M12.49 10.272v-.45h1.347v6.322h-.77l-.144-.412a2.077 2.077 0 01-1.548.607c-1.477 0-2.503-1.171-2.503-2.792 0-1.621 1.026-2.792 2.503-2.792.617 0 1.14.209 1.54.607l-.019-.007.019-.007-.015.011-.41-.087zm-.502 4.625c.887 0 1.527-.694 1.527-1.64 0-.946-.64-1.64-1.527-1.64s-1.526.694-1.526 1.64c0 .946.64 1.64 1.526 1.64zm4.913-2.467v3.714h-1.345V9.822h1.346v2.62l-.001-.012zm6.147 0v3.714h-1.346V9.822h1.346v2.62l-.001-.012zM7.467 14.357H4.081V10.27h1.346v2.82h2.04v1.267zm10.47-1.1c0 1.62-1.048 2.894-2.62 2.894-1.57 0-2.618-1.274-2.618-2.893 0-1.62 1.048-2.895 2.619-2.895 1.571 0 2.619 1.275 2.619 2.895zm-1.345 0c0-.945-.528-1.64-1.274-1.64-.747 0-1.275.695-1.275 1.64s.528 1.64 1.275 1.64c.746 0 1.274-.695 1.274-1.64z" />
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fillOpacity="0" />
          <path d="M19.777 4.223A9.955 9.955 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10a9.955 9.955 0 007.777-3.723" fillOpacity="0" stroke="currentColor" strokeWidth="0" />
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Zalo
        </span>
      </a>
    </div>
  )
}
