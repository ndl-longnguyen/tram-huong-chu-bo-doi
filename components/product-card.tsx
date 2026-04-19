import Link from "next/link"
import { Star, Eye } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  image: string
  originalPrice: number
  salePrice?: number
  rating: number
  badge?: string
}

export function ProductCard({
  id,
  name,
  image,
  originalPrice,
  salePrice,
  rating,
  badge,
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' đ'
  }

  const discountPercent = salePrice 
    ? Math.round((1 - salePrice / originalPrice) * 100) 
    : 0

  return (
    <Link href={`/san-pham/${id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-muted aspect-square">
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Quick view button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-foreground text-sm font-medium rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-4 h-4" />
            Xem nhanh
          </span>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badge && (
            <span className={`${
              badge === "Sale" 
                ? "bg-red-500" 
                : badge === "Best Seller" 
                ? "bg-gradient-to-r from-primary to-accent" 
                : "bg-primary"
            } text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg`}>
              {badge}
            </span>
          )}
          {salePrice && (
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
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
        <div className="flex items-center gap-3">
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
