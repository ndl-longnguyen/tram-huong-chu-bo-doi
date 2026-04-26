"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, Eye, Heart } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useWishlist } from "@/lib/wishlist-context"

interface ProductCardProps {
  id: string
  name: string
  image: string
  originalPrice: number
  salePrice?: number
  rating: number
  badge?: string
  badgeType?: "new" | "best" | "hot" | "sale" | "soldout"
  priority?: boolean
}

export function ProductCard({
  id,
  name,
  image,
  originalPrice,
  salePrice,
  rating,
  badge,
  badgeType,
  priority,
}: ProductCardProps) {
  const { t } = useLanguage()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const isFavorite = isInWishlist(id)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' đ'
  }

  const discountPercent = salePrice 
    ? Math.round((1 - salePrice / originalPrice) * 100) 
    : 0

  // Determine badge text and style
  let badgeText = badge
  let badgeClass = "bg-primary"

  if (badgeType === "soldout") {
    badgeText = t("products.badge.soldout")
    badgeClass = "bg-gray-500"
  } else if (badgeType === "sale" || badge === "Sale") {
    badgeText = badge || "Sale"
    badgeClass = "bg-red-500"
  } else if (badgeType === "best") {
    badgeText = t("products.badge.best")
    badgeClass = "bg-gradient-to-r from-primary to-accent"
  } else if (badgeType === "new") {
    badgeText = t("products.badge.new")
    badgeClass = "bg-green-600"
  } else if (badgeType === "hot") {
    badgeText = t("products.badge.hot")
    badgeClass = "bg-orange-500"
  }

  return (
    <Link href={`/san-pham/${id}`} className="group block relative hover:z-50 transition-all">
      <div className="relative overflow-hidden rounded-2xl bg-muted aspect-square">
        {/* Image */}
        <Image
          src={image}
          alt={name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Quick view button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-4 py-2 bg-white/90 text-foreground text-sm font-medium rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
            <Eye className="w-4 h-4" />
            {t("product.quickView") || "Xem nhanh"}
          </span>
        </div>
        
        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleWishlist(id)
          }}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-all duration-300 z-10 ${
            isFavorite 
              ? "bg-red-500 text-white" 
              : "bg-white/90 text-muted-foreground hover:text-red-500 hover:bg-white"
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badgeText && (
            <span className={`${badgeClass} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap`}>
              {badgeText}
            </span>
          )}
          {salePrice && salePrice < originalPrice && (
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
              -{discountPercent}%
            </span>
          )}
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        {/* Product Name */}
        <h3 className="text-foreground font-medium line-clamp-2 group-hover:text-primary transition-colors leading-snug">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating 
                  ? 'fill-accent text-accent' 
                  : 'fill-gray-200 text-gray-200'
              }`}
            />
          ))}
          <span className="text-muted-foreground text-sm ml-1">({rating}.0)</span>
        </div>
        
        {/* Price */}
        <div className="flex flex-col gap-0.5">
          {salePrice ? (
            <>
              <span className="text-primary font-bold text-lg">
                {formatPrice(salePrice)}
              </span>
              <span className="text-muted-foreground text-sm line-through">
                {formatPrice(originalPrice)}
              </span>
            </>
          ) : (
            <span className="text-primary font-bold text-lg">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
