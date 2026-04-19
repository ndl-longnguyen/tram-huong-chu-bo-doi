import Link from "next/link"
import { Star } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  image: string
  originalPrice: number
  salePrice?: number
  rating: number
  badge?: string
  badgeColor?: string
}

export function ProductCard({
  id,
  name,
  image,
  originalPrice,
  salePrice,
  rating,
  badge,
  badgeColor = "bg-primary"
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' đ'
  }

  return (
    <Link href={`/san-pham/${id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-muted aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge && (
          <span className={`absolute top-2 left-2 ${badgeColor} text-white text-xs font-medium px-2 py-1 rounded`}>
            {badge}
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1.5">
        <h3 className="text-foreground text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          {salePrice ? (
            <>
              <span className="text-muted-foreground text-sm line-through">
                {formatPrice(originalPrice)}
              </span>
              <span className="text-primary font-semibold">
                {formatPrice(salePrice)}
              </span>
            </>
          ) : (
            <span className="text-primary font-semibold">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
