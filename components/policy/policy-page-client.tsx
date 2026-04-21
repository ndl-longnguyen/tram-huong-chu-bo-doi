"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Shield, Truck, FileText, ChevronRight } from "lucide-react"

interface PolicyPageClientProps {
  type: "terms" | "privacy" | "shipping" | "warranty"
}

export function PolicyPageClient({ type }: PolicyPageClientProps) {
  const { t } = useLanguage()

  const config = {
    terms: {
      title: t("footer.policy.terms"),
      icon: FileText,
      contentKey: "policy.terms",
    },
    privacy: {
      title: t("footer.policy.privacy"),
      icon: Shield,
      contentKey: "policy.privacy",
    },
    shipping: {
      title: t("footer.policy.shipping"),
      icon: Truck,
      contentKey: "policy.shipping",
    },
    warranty: {
      title: t("footer.policy.warranty"),
      icon: Shield,
      contentKey: "policy.warranty",
    },
  }

  const currentConfig = config[type]
  const Icon = currentConfig.icon

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Breadcrumb */}
      <div className="pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">
              {t("nav.home") || "Trang Chủ"}
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{currentConfig.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-4">

        {/* Header */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border mb-8 shadow-sm">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground font-bold uppercase tracking-widest mb-4">
            {currentConfig.title}
          </h1>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Content */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-sm">
          <div
            className="space-y-6 text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t(`${currentConfig.contentKey}.content`) }}
          />

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {t("policy.lastUpdated")} <a href="tel:0765942942" className="text-primary font-bold">0765.942.942</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
