import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetailClient } from "@/components/product/product-detail-client"
import { products, getProductById, getRelatedProducts } from "@/lib/products"

type PageProps = {
  params: Promise<{ locale: string; id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, id } = await params
  const product = getProductById(id)
  
  if (!product) {
    return {
      title: 'Sản phẩm không tồn tại',
    }
  }

  const localeKey = locale as 'vi' | 'en' | 'zh'
  const name = product.name[localeKey] || product.name.vi
  const description = product.description[localeKey] || product.description.vi

  return {
    title: name,
    description: description,
    openGraph: {
      title: name,
      description: description,
      images: [{ url: product.image, width: 600, height: 600, alt: name }],
    },
  }
}

export function generateStaticParams() {
  return products.flatMap((product) => 
    ['vi', 'en', 'zh'].map((locale) => ({
      locale,
      id: product.id,
    }))
  )
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  const product = getProductById(id)
  
  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(id, 4)

  // JSON-LD for product
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name.vi,
    image: product.images,
    description: product.description.vi,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: 'Trầm Hương Chú Bộ Đội',
    },
    offers: {
      '@type': 'Offer',
      url: `https://tramhuongchubodoi.com/vi/san-pham/${product.id}`,
      priceCurrency: 'VND',
      price: product.salePrice || product.originalPrice,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      </main>
      <Footer />
    </div>
  )
}
