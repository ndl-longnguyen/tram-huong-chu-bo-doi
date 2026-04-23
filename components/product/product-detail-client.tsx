"use client"

import { useState } from "react"
import Link from "next/link"
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
  Package
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
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
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { locale, getLocalizedPath } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

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
      <section className="bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link href={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
              {content.home[localeKey]}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link href={getLocalizedPath(`/${product.categorySlug}`)} className="text-muted-foreground hover:text-primary transition-colors">
              {product.category[localeKey]}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium line-clamp-1">{product.name[localeKey]}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name[localeKey]}
                  className="w-full h-full object-cover"
                />
                {badgeText && (
                  <span className={`absolute top-4 left-4 ${badgeClass} text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg`}>
                    {badgeText}
                  </span>
                )}
                {product.salePrice && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-md">
                    -{discountPercent}%
                  </span>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-border"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category & SKU */}
              <div className="flex items-center gap-4 text-sm">
                <Link 
                  href={getLocalizedPath(`/${product.categorySlug}`)}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
                >
                  {product.category[localeKey]}
                </Link>
                <span className="text-muted-foreground">
                  {content.sku[localeKey]}: {product.sku}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
                {product.name[localeKey]}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < product.rating ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-foreground font-medium">{product.rating}.0</span>
                <span className="text-muted-foreground">({product.reviewCount} {content.reviews[localeKey]})</span>
                <span className={`ml-auto flex items-center gap-1 text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-500"}`}>
                  <Package className="w-4 h-4" />
                  {product.inStock ? content.inStock[localeKey] : content.outOfStock[localeKey]}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 py-4 border-y border-border">
                {product.salePrice ? (
                  <>
                    <span className="text-3xl md:text-4xl font-bold text-primary">
                      {formatPrice(product.salePrice)}
                    </span>
                    <span className="text-xl text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-bold rounded">
                      -{discountPercent}%
                    </span>
                  </>
                ) : (
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-muted-foreground leading-relaxed">
                {product.description[localeKey]}
              </p>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <span className="text-foreground font-medium">{content.quantity[localeKey]}:</span>
                  <div className="flex items-center border border-border rounded-full">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-muted transition-colors rounded-l-full"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-muted transition-colors rounded-r-full"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:0765942942"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:shadow-lg transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    {content.contactOrder[localeKey]}
                  </a>
                  <button className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Heart className="w-5 h-5" />
                    <span className="hidden sm:inline">{content.addToWishlist[localeKey]}</span>
                  </button>
                  <button className="flex items-center justify-center px-4 py-4 border border-border rounded-full hover:bg-muted transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{content.shipping[localeKey]}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{content.warranty[localeKey]}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <RefreshCw className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{content.return[localeKey]}</span>
                </div>
              </div>

              {/* Hotline */}
              <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-xl border border-accent/20">
                <Phone className="w-6 h-6 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">{content.hotline[localeKey]}</p>
                  <a href="tel:0765942942" className="text-xl font-bold text-accent hover:underline">
                    0765.942.942
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Features */}
            <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-primary" />
                {content.features[localeKey]}
              </h2>
              <ul className="space-y-4">
                {product.features[localeKey].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-medium">
                      {idx + 1}
                    </span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-foreground mb-6">
                {content.specifications[localeKey]}
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">{content.material[localeKey]}</span>
                  <span className="text-foreground font-medium">{product.specs.material[localeKey]}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">{content.origin[localeKey]}</span>
                  <span className="text-foreground font-medium">{product.specs.origin[localeKey]}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">{content.size[localeKey]}</span>
                  <span className="text-foreground font-medium">{product.specs.size}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">{content.weight[localeKey]}</span>
                  <span className="text-foreground font-medium">{product.specs.weight}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-muted-foreground">{content.age[localeKey]}</span>
                  <span className="text-foreground font-medium">{product.specs.age[localeKey]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="mt-8 bg-card rounded-2xl p-6 lg:p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-6">
              {content.description[localeKey]}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {product.description[localeKey]}
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center uppercase">
              {content.relatedProducts[localeKey]}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
