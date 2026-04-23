"use client"

import { useState, useEffect } from "react"
import { toast } from "sonner"
import Link from "next/link"
import Image from "next/image"
import { 
  ChevronRight, 
  Star, 
  Minus, 
  Plus, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  RefreshCw, 
  Phone,
  Check,
  Package,
  MessageCircle
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useWishlist } from "@/lib/wishlist-context"
import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/products"

interface ProductDetailClientProps {
  product: Product
  relatedProducts: Product[]
}

const content = {
  home: { vi: "Trang chủ", en: "Home", zh: "首页" },
  products: { vi: "Sản phẩm", en: "Products", zh: "产品" },
  sku: { vi: "Mã SP", en: "SKU", zh: "产品编号" },
  inStock: { vi: "Còn hàng", en: "In Stock", zh: "有货" },
  outOfStock: { vi: "Hết hàng", en: "Out of Stock", zh: "缺货" },
  quantity: { vi: "Số lượng", en: "Quantity", zh: "数量" },
  addToCart: { vi: "Thêm vào giỏ hàng", en: "Add to Cart", zh: "加入购物车" },
  buyNow: { vi: "Mua ngay", en: "Buy Now", zh: "立即购买" },
  contactOrder: { vi: "Liên hệ đặt hàng", en: "Contact to Order", zh: "联系订购" },
  addToWishlist: { vi: "Thêm vào yêu thích", en: "Add to Wishlist", zh: "添加到愿望清单" },
  share: { vi: "Chia sẻ", en: "Share", zh: "分享" },
  description: { vi: "Mô tả sản phẩm", en: "Product Description", zh: "产品描述" },
  features: { vi: "Đặc điểm nổi bật", en: "Key Features", zh: "主要特点" },
  specifications: { vi: "Thông số kỹ thuật", en: "Specifications", zh: "规格" },
  material: { vi: "Chất liệu", en: "Material", zh: "材质" },
  origin: { vi: "Xuất xứ", en: "Origin", zh: "产地" },
  size: { vi: "Kích thước", en: "Size", zh: "尺寸" },
  weight: { vi: "Trọng lượng", en: "Weight", zh: "重量" },
  age: { vi: "Tuổi trầm", en: "Age", zh: "年份" },
  shipping: { vi: "Giao hàng nhanh 2h nội thành Đà Nẵng", en: "Fast 2h delivery in Da Nang city", zh: "岘港市内2小时快速配送" },
  warranty: { vi: "Bảo hành mùi hương trọn đời", en: "Lifetime fragrance warranty", zh: "终身香味保修" },
  return: { vi: "Đổi trả 1-1 trong 30 ngày", en: "1-1 exchange within 30 days", zh: "30天内1-1换货" },
  relatedProducts: { vi: "Sản phẩm liên quan", en: "Related Products", zh: "相关产品" },
  reviews: { vi: "đánh giá", en: "reviews", zh: "评价" },
  hotline: { vi: "Hotline tư vấn", en: "Consultation Hotline", zh: "咨询热线" },
  addedToWishlist: { vi: "Đã thêm vào danh sách yêu thích", en: "Added to wishlist", zh: "已添加到愿望清单" },
  removedFromWishlist: { vi: "Đã xóa khỏi danh sách yêu thích", en: "Removed from wishlist", zh: "已从愿望清单中删除" },
  linkCopied: { vi: "Đã sao chép đường dẫn", en: "Link copied to clipboard", zh: "链接已复制到剪贴板" },
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { locale, getLocalizedPath } = useLanguage()
  const { toggleWishlist: globalToggleWishlist, isInWishlist } = useWishlist()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isMounted, setIsMounted] = useState(false)
  
  const isWishlisted = isInWishlist(product.id)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const localeKey = locale as 'vi' | 'en' | 'zh'
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' đ'
  }

  const discountPercent = product.salePrice
    ? Math.round((1 - product.salePrice / product.originalPrice) * 100)
    : 0

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta))
  }

  // Generate Messenger URL with pre-filled message
  const getMessengerUrl = () => {
    if (!isMounted) return 'https://m.me/tramhuongchubodoivn'

    const baseUrl = window.location.origin
    const productUrl = `${baseUrl}/${locale}/san-pham/${product.id}`
    const productName = product.name[localeKey]
    const productPrice = product.salePrice 
      ? formatPrice(product.salePrice)
      : formatPrice(product.originalPrice)
    
    const messageTemplates = {
      vi: `Xin chào, tôi muốn đặt hàng sản phẩm:\n\n${productName}\nGiá: ${productPrice}\nSố lượng: ${quantity}\n\nLink sản phẩm: ${productUrl}`,
      en: `Hello, I would like to order:\n\n${productName}\nPrice: ${productPrice}\nQuantity: ${quantity}\n\nProduct link: ${productUrl}`,
      zh: `您好，我想订购产品：\n\n${productName}\n价格：${productPrice}\n数量：${quantity}\n\n产品链接：${productUrl}`
    }
    
    const message = encodeURIComponent(messageTemplates[localeKey])
    return `https://m.me/tramhuongchubodoivn?text=${message}`
  }

  const toggleWishlist = () => {
    globalToggleWishlist(product.id)
    if (isWishlisted) {
      toast.success(content.removedFromWishlist[localeKey])
    } else {
      toast.success(content.addedToWishlist[localeKey])
    }
  }

  const handleShare = async () => {
    const shareData = {
      title: product.name[localeKey],
      text: product.description[localeKey],
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(window.location.href)
        toast.success(content.linkCopied[localeKey])
      }
    } catch (err) {
      // In case user cancelled share or there was an error
      console.log('Share error or cancelled', err)
    }
  }

  // Badge display
  let badgeText = ""
  let badgeClass = "bg-primary"
  if (product.badgeType === "sale") {
    badgeText = locale === 'en' ? 'Sale' : locale === 'zh' ? '促销' : 'Sale'
    badgeClass = "bg-red-500"
  } else if (product.badgeType === "best") {
    badgeText = locale === 'en' ? 'Best Seller' : locale === 'zh' ? '畅销' : 'Bán chạy'
    badgeClass = "bg-gradient-to-r from-primary to-accent"
  } else if (product.badgeType === "new") {
    badgeText = locale === 'en' ? 'New' : locale === 'zh' ? '新品' : 'Mới'
    badgeClass = "bg-green-600"
  } else if (product.badgeType === "hot") {
    badgeText = locale === 'en' ? 'Hot' : locale === 'zh' ? '热门' : 'Hot'
    badgeClass = "bg-orange-500"
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-muted/30 border-b border-border relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4">
          <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm flex-wrap">
            <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
              {content.home[localeKey]}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
            <Link href={getLocalizedPath(`/${product.categorySlug}`)} className="text-muted-foreground hover:text-primary transition-colors">
              {product.category[localeKey]}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-foreground font-medium line-clamp-1">{product.name[localeKey]}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-6 md:py-8 lg:py-12 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-3 md:space-y-4 min-w-0">
              {/* Main Image */}
              <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name[localeKey]}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                {badgeText && (
                  <span className={`absolute top-3 left-3 md:top-4 md:left-4 ${badgeClass} text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg`}>
                    {badgeText}
                  </span>
                )}
                {product.salePrice && (
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 bg-red-500 text-white text-xs md:text-sm font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-md">
                    -{discountPercent}%
                  </span>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-border"
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={`${product.name[localeKey]} thumbnail ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 64px, 80px"
                        className="object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4 md:space-y-6 min-w-0">
              {/* Category & SKU */}
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
                <Link 
                  href={getLocalizedPath(`/${product.categorySlug}`)}
                  className="px-2.5 py-1 md:px-3 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
                >
                  {product.category[localeKey]}
                </Link>

              </div>

              {/* Title */}
              <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance">
                {product.name[localeKey]}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <div className="flex items-center gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 md:w-5 md:h-5 ${
                        i < product.rating ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm md:text-base text-foreground font-medium">{product.rating}.0</span>
                <span className="text-xs md:text-sm text-muted-foreground">({product.reviewCount} {content.reviews[localeKey]})</span>
                <span className={`ml-auto flex items-center gap-1 text-xs md:text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-500"}`}>
                  <Package className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  {product.inStock ? content.inStock[localeKey] : content.outOfStock[localeKey]}
                </span>
              </div>

              {/* Price */}
              <div className="py-3 md:py-4 border-y border-border">
                {product.salePrice ? (
                  <div className="flex flex-col gap-1 md:gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                        {formatPrice(product.salePrice)}
                      </span>
                      <span className="px-2 py-0.5 md:py-1 bg-red-100 text-red-600 text-xs md:text-sm font-bold rounded">
                        -{discountPercent}%
                      </span>
                    </div>
                    <span className="text-base md:text-xl text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {product.description[localeKey]}
              </p>

              {/* Quantity & Actions */}
              <div className="space-y-3 md:space-y-4">
                {/* Quantity Selector */}
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-sm md:text-base text-foreground font-medium">{content.quantity[localeKey]}:</span>
                  <div className="flex items-center border-2 border-border rounded-full">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-1.5 md:p-2 hover:bg-muted transition-all duration-300 rounded-l-full disabled:opacity-50"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <span className="w-10 md:w-12 text-center text-sm md:text-base font-medium">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-1.5 md:p-2 hover:bg-muted transition-all duration-300 rounded-r-full"
                    >
                      <Plus className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                  <a
                    href={getMessengerUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 bg-primary text-primary-foreground text-sm md:text-base font-semibold rounded-full hover:bg-primary/90 hover:shadow-md transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                    <span className="text-center">{content.contactOrder[localeKey]}</span>
                  </a>
                  <div className="flex gap-2 sm:w-auto">
                    <button 
                      onClick={toggleWishlist}
                      className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 border-2 ${
                        isWishlisted 
                          ? 'border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30' 
                          : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                      } text-sm md:text-base font-semibold rounded-full hover:shadow-md transition-all duration-300 min-w-0`}
                    >
                      <Heart className={`w-4 h-4 md:w-5 md:h-5 shrink-0 ${isWishlisted ? 'fill-current' : ''}`} />
                      <span className="hidden sm:inline truncate">{content.addToWishlist[localeKey]}</span>
                    </button>
                    <button 
                      onClick={handleShare}
                      className="flex items-center justify-center px-3 md:px-4 py-3 md:py-4 border-2 border-border rounded-full hover:bg-muted hover:border-primary/50 transition-all duration-300 shrink-0"
                    >
                      <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 gap-2 md:gap-3 pt-3 md:pt-4">
                <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-muted/50 rounded-lg md:rounded-xl">
                  <div className="p-1.5 md:p-2 bg-primary/10 rounded-full flex-shrink-0">
                    <Truck className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm text-foreground">{content.shipping[localeKey]}</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-muted/50 rounded-lg md:rounded-xl">
                  <div className="p-1.5 md:p-2 bg-primary/10 rounded-full flex-shrink-0">
                    <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm text-foreground">{content.warranty[localeKey]}</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-muted/50 rounded-lg md:rounded-xl">
                  <div className="p-1.5 md:p-2 bg-primary/10 rounded-full flex-shrink-0">
                    <RefreshCw className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm text-foreground">{content.return[localeKey]}</span>
                </div>
              </div>

              {/* Hotline */}
              <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-accent/10 rounded-lg md:rounded-xl border border-accent/20">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">{content.hotline[localeKey]}</p>
                  <a href="tel:0765942942" className="text-lg md:text-xl font-bold text-accent hover:underline">
                    0765.942.942
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {/* Features */}
            <div className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-sm">
              <h2 className="font-serif text-lg md:text-xl lg:text-2xl text-foreground mb-4 md:mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                {content.features[localeKey]}
              </h2>
              <ul className="space-y-3 md:space-y-4">
                {product.features[localeKey].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 md:gap-3">
                    <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs md:text-sm font-medium">
                      {idx + 1}
                    </span>
                    <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-sm">
              <h2 className="font-serif text-lg md:text-xl lg:text-2xl text-foreground mb-4 md:mb-6">
                {content.specifications[localeKey]}
              </h2>
              <div className="space-y-0">
                <div className="flex justify-between gap-4 py-2.5 md:py-3 border-b border-border">
                  <span className="text-sm md:text-base text-muted-foreground shrink-0">{content.material[localeKey]}</span>
                  <span className="text-sm md:text-base text-foreground font-medium text-right">{product.specs.material[localeKey]}</span>
                </div>
                <div className="flex justify-between gap-4 py-2.5 md:py-3 border-b border-border">
                  <span className="text-sm md:text-base text-muted-foreground shrink-0">{content.origin[localeKey]}</span>
                  <span className="text-sm md:text-base text-foreground font-medium text-right">{product.specs.origin[localeKey]}</span>
                </div>
                <div className="flex justify-between gap-4 py-2.5 md:py-3 border-b border-border">
                  <span className="text-sm md:text-base text-muted-foreground shrink-0">{content.size[localeKey]}</span>
                  <span className="text-sm md:text-base text-foreground font-medium text-right">{product.specs.size}</span>
                </div>
                <div className="flex justify-between gap-4 py-2.5 md:py-3 border-b border-border">
                  <span className="text-sm md:text-base text-muted-foreground shrink-0">{content.weight[localeKey]}</span>
                  <span className="text-sm md:text-base text-foreground font-medium text-right">{product.specs.weight}</span>
                </div>
                <div className="flex justify-between gap-4 py-2.5 md:py-3">
                  <span className="text-sm md:text-base text-muted-foreground shrink-0">{content.age[localeKey]}</span>
                  <span className="text-sm md:text-base text-foreground font-medium text-right">{product.specs.age[localeKey]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="mt-4 md:mt-6 lg:mt-8 bg-card rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-sm">
            <h2 className="font-serif text-lg md:text-xl lg:text-2xl text-foreground mb-4 md:mb-6">
              {content.description[localeKey]}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {product.description[localeKey]}
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-10 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-6 md:mb-8 text-center uppercase">
              {content.relatedProducts[localeKey]}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name[localeKey]}
                  image={relatedProduct.image}
                  originalPrice={relatedProduct.originalPrice}
                  salePrice={relatedProduct.salePrice}
                  rating={relatedProduct.rating}
                  badgeType={relatedProduct.badgeType}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
