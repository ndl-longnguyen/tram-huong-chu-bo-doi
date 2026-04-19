"use client"

import { createContext, useContext, ReactNode } from "react"
import { useParams, useRouter, usePathname } from "next/navigation"
import { Locale, translations, localeNames } from "./translations"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  localeNames: typeof localeNames
  getLocalizedPath: (path: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()
  
  const locale = (params?.locale as Locale) || "vi"

  const setLocale = (newLocale: Locale) => {
    // Get current path without locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(vi|en|zh)/, "") || "/"
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  const t = (key: string): string => {
    return translations[locale]?.[key] || translations["vi"][key] || key
  }

  const getLocalizedPath = (path: string): string => {
    // Remove leading slash if present for consistency
    const cleanPath = path.startsWith("/") ? path : `/${path}`
    return `/${locale}${cleanPath}`
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, localeNames, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
