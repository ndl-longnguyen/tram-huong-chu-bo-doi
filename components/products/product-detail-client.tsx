"use client"

import { useState } from "react"
import { Star, Truck, ShieldCheck, Clock, ArrowLeft, Plus, Minus, ShoppingCart, Heart, Share2, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"
import { Product } from "@/lib/data/products"
import { ProductCard } from "@/components/product-card"

interface ProductDetailClientProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { locale, t, getLocalizedPath } = useLanguage()
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === 'vi' ? 'vi-VN' : locale === 'zh' ? 'zh-CN' : 'en-US').format(price) + ' đ'
  }

  const discountPercent = Math.round((1 - product.price / product.originalPrice) * 100)

  const handleQuantityChange = (type: "inc" | "dec") => {
    if (type === "inc") setQuantity(prev => prev + 1)
    else if (quantity > 1) setQuantity(prev => prev - 1)
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href={getLocalizedPath("/")} className="hover:text-primary transition-colors">
            {t("nav.home")}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={getLocalizedPath(`/${product.category}`)} className="hover:text-primary transition-colors uppercase">
            {t(`nav.${product.category === 'trang-suc' ? 'jewelry' : 
                   product.category === 'vong-tay' ? 'bracelet' : 
                   product.category === 'nhang-tram' ? 'incense' : 
                   product.category === 'my-nghe' ? 'art' : 
                   product.category === 'qua-tang' ? 'gift' : 
                   product.category}`)}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium line-clamp-1">{product.name[locale]}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted border border-border group">
              <img
                src={product.images[activeImage]}
                alt={product.name[locale]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {product.price < product.originalPrice && (
                <div className="absolute top-4 left-4 bg-red-500 text-white font-bold px-3 py-1.5 rounded-full text-sm shadow-lg">
                  -{discountPercent}%
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? "border-primary shadow-md scale-95" : "border-transparent hover:border-primary/50"
                    }`}
                >
                  <img src={img} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                {product.badge[locale]}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 uppercase tracking-tight leading-tight">
                {product.name[locale]}
              </h1>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < product.rating ? "fill-accent text-accent" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">({product.rating}.0 {t("product.details.rating")})</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <span className="text-sm text-primary font-bold uppercase tracking-wider">{t("product.details.authentic")}</span>
              </div>
            </div>

            <div className="mb-10 pb-8 border-b border-border">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-serif font-bold text-primary tracking-tight">
                  {formatPrice(product.price)}
                </span>
                {product.price < product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through opacity-70">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                &ldquo;{product.shortDescription[locale]}&rdquo;
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-6 mb-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-primary text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group uppercase tracking-widest text-sm">
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {t("product.details.contactAction")}
                </button>
                <div className="flex gap-4">
                  <button className="w-16 h-16 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all hover:scale-105 active:scale-95 shadow-sm">
                    <Heart className="w-6 h-6" />
                  </button>
                  <a href="tel:0765942942" className="w-16 h-16 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center hover:bg-primary/10 transition-all hover:scale-105 active:scale-95 shadow-sm">
                    <Clock className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>
              <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-medium opacity-60">
                {t("product.details.directSupport")}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30 border border-border">
                <Truck className="w-5 h-5 text-primary" />
                <div className="text-xs">
                  <p className="font-bold uppercase">{t("product.details.freeShipping")}</p>
                  <p className="text-muted-foreground">{t("product.details.shippingNote")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30 border border-border">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <div className="text-xs">
                  <p className="font-bold uppercase">{t("product.details.warranty")}</p>
                  <p className="text-muted-foreground">{t("product.details.qualityVerified")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Tabs */}
        <div className="mt-20">
          <div className="flex border-b border-border mb-8 overflow-x-auto no-scrollbar">
            {[
              { id: "description", label: t("product.details.tab.description") },
              { id: "specifications", label: t("product.details.tab.specifications") },
              { id: "shipping", label: t("product.details.tab.shipping") },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-bold text-sm uppercase tracking-widest whitespace-nowrap transition-all border-b-2 ${activeTab === tab.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-4xl">
            {activeTab === "description" && (
              <div className="prose prose-stone max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description[locale]}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-muted/30 rounded-3xl p-8 border border-border">
                    <h4 className="font-serif text-xl mb-4 text-foreground">{t("product.details.origin")}</h4>
                    <p className="text-sm text-muted-foreground">{t("product.details.originDesc")}</p>
                  </div>
                  <div className="bg-muted/30 rounded-3xl p-8 border border-border">
                    <h4 className="font-serif text-xl mb-4 text-foreground">{t("product.details.crafting")}</h4>
                    <p className="text-sm text-muted-foreground">{t("product.details.craftingDesc")}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="space-y-0 border border-border rounded-3xl overflow-hidden">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className={`grid grid-cols-2 p-6 ${idx % 2 === 0 ? "bg-muted/30" : "bg-transparent"}`}>
                    <span className="font-bold text-sm uppercase tracking-wider text-muted-foreground">{spec.label[locale]}</span>
                    <span className="text-foreground font-medium">{spec.value[locale]}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 uppercase tracking-tight">{t("product.details.delivery")}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t("product.details.deliveryDesc")}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 uppercase tracking-tight">{t("product.details.warranty")}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t("product.details.warrantyDesc")}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 uppercase tracking-tight">
              {t("product.details.relatedProducts")}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map(p => (
              <ProductCard
                key={p.id}
                id={p.slug} // Use slug for detail page link
                name={p.name[locale]}
                image={p.images[0]}
                originalPrice={p.originalPrice}
                salePrice={p.price}
                rating={p.rating}
                badge={p.badge[locale]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
