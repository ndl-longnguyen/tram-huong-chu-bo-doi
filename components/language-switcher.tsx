"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe, Check } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, setLocale, localeNames } = useLanguage()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2 px-3 hover:bg-primary/10 hover:text-primary transition-all w-[110px] justify-start overflow-hidden">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline-block font-medium text-xs tracking-wider transition-all duration-300">{localeNames[locale]}</span>
          <span className="sm:hidden font-medium uppercase font-bold text-xs">{locale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[140px] bg-card border-border">
        {Object.entries(localeNames).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLocale(code as any)}
            className="flex items-center justify-between cursor-pointer hover:bg-primary/5 focus:bg-primary/5"
          >
            <span className={locale === code ? "font-bold text-primary" : ""}>{name}</span>
            {locale === code && <Check className="w-4 h-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
