import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetailClient } from "@/components/products/product-detail-client"
import { getProductBySlug, getProducts, getProductsByCategory } from "@/lib/data/products"

type PageProps = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const products = getProducts()
  const locales = ['vi', 'en', 'zh']
  
  return locales.flatMap(locale => 
    products.map(product => ({
      locale,
      slug: product.slug
    }))
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const product = getProductBySlug(slug)

  if (!product) return { title: 'Product Not Found' }

  return {
    title: `${product.name[locale]} | Trầm Hương Chú Bộ Đội`,
    description: product.shortDescription[locale],
    openGraph: {
      title: product.name[locale],
      description: product.shortDescription[locale],
      images: [product.images[0]],
    }
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { locale, slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProductDetailClient 
            product={product} 
            relatedProducts={relatedProducts} 
        />
      </main>
      <Footer />
    </div>
  )
}
