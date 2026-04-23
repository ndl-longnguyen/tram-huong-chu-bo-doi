"use client"

import React from "react"
import { Drawer } from "vaul"
import { Heart, X, ShoppingBag, Trash2 } from "lucide-react"
import { useWishlist } from "@/lib/wishlist-context"
import { useLanguage } from "@/lib/i18n/language-context"
import Image from "next/image"
import Link from "next/link"

export function WishlistDrawer({ children }: { children: React.ReactNode }) {
  const { wishlistItems, toggleWishlist } = useWishlist()
  const { t, locale, getLocalizedPath } = useLanguage()
  const localeKey = locale as "vi" | "en" | "zh"

  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        {children}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[100]" />
        <Drawer.Content className="bg-card flex flex-col rounded-l-[32px] h-full w-[400px] max-w-[90vw] fixed bottom-0 right-0 z-[101] outline-none shadow-2xl border-l border-border">
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary fill-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground">
                    {locale === 'en' ? 'Wishlist' : locale === 'zh' ? '收藏夹' : 'Danh sách yêu thích'}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {wishlistItems.length} {locale === 'en' ? 'items' : locale === 'zh' ? '件商品' : 'sản phẩm'}
                  </p>
                </div>
              </div>
              <Drawer.Close asChild>
                <button className="p-2 hover:bg-muted rounded-full transition-colors">
                  <X className="w-6 h-6 text-muted-foreground" />
                </button>
              </Drawer.Close>
            </div>

            {wishlistItems.length > 0 ? (
              <div className="space-y-6">
                {wishlistItems.map((product) => (
                  <div key={product.id} className="flex gap-4 group">
                    <Link 
                      href={getLocalizedPath(`/san-pham/${product.id}`)}
                      className="relative w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0"
                    >
                      <Image
                        src={product.image}
                        alt={product.name[localeKey]}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                    </Link>
                    <div className="flex-1 min-w-0 py-1 flex flex-col justify-between">
                      <div>
                        <Link 
                          href={getLocalizedPath(`/san-pham/${product.id}`)}
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors line-clamp-1 block"
                        >
                          {product.name[localeKey]}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">
                          {product.category[localeKey]}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-primary font-bold text-sm">
                          {new Intl.NumberFormat('vi-VN').format(product.salePrice || product.originalPrice)} đ
                        </span>
                        <button 
                          onClick={() => toggleWishlist(product.id)}
                          className="p-1.5 text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-all rounded-md"
                          title="Xóa khỏi yêu thích"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-10 h-10 text-muted-foreground/30" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {locale === 'en' ? 'Your wishlist is empty' : locale === 'zh' ? '收藏夹是空的' : 'Danh sách trống'}
                </h3>
                <p className="text-sm text-muted-foreground mb-8 max-w-[200px]">
                  {locale === 'en' ? 'Add products you love to your wishlist to see them later.' : 
                   locale === 'zh' ? '添加您喜欢的产品到收藏夹以便稍后查看。' : 
                   'Hãy thêm những sản phẩm bạn yêu thích vào danh sách để xem lại sau nhé.'}
                </p>
                <Drawer.Close asChild>
                  <Link 
                    href={getLocalizedPath("/trang-suc")}
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    {locale === 'en' ? 'Shop Now' : locale === 'zh' ? '现在去购物' : 'Mua sắm ngay'}
                  </Link>
                </Drawer.Close>
              </div>
            )}
          </div>
          
          {wishlistItems.length > 0 && (
            <div className="p-6 bg-muted/30 border-t border-border">
              <Link 
                href={getLocalizedPath("/lien-he")}
                className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:shadow-xl transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                {locale === 'en' ? 'Inquiry All' : locale === 'zh' ? '全部咨询' : 'Nhận tư vấn ngay'}
              </Link>
            </div>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
