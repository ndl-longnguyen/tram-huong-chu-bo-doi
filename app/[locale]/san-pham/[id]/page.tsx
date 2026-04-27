import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetailClient } from "@/components/product/product-detail-client"
import { products, getProductById, getRelatedProducts } from "@/lib/products"
import { blogPosts } from "@/data/blog-content"
import { getTranslations, resolveLocale, SUPPORTED_LOCALES } from '@/lib/i18n/config'
import { buildAbsoluteUrl, createPageMetadata } from '@/lib/seo'

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

  const localeKey = resolveLocale(locale)
  const name = product.name[localeKey] || product.name.vi
  const description = product.description[localeKey] || product.description.vi

  return createPageMetadata({
    locale,
    pathname: `/san-pham/${id}`,
    title: name,
    description,
    image: product.image,
  })
}

export function generateStaticParams() {
  return products.flatMap((product) => 
    SUPPORTED_LOCALES.map((locale) => ({
      locale,
      id: product.id,
    }))
  )
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { locale, id } = await params
  const product = getProductById(id)
  
  if (!product) {
    notFound()
  }

  const t = getTranslations(locale)
  const localeKey = resolveLocale(locale)
  const name = product.name[localeKey] || product.name.vi
  const description = product.description[localeKey] || product.description.vi
  const relatedProducts = getRelatedProducts(id, 4)
  const relatedArticles = blogPosts
    .filter((post) => {
      const haystack = `${post.title.vi} ${post.excerpt.vi} ${post.content.vi}`.toLowerCase()
      return (
        haystack.includes(product.category.vi.toLowerCase()) ||
        haystack.includes(product.category.en.toLowerCase()) ||
        (product.categorySlug === 'vong-tay' && haystack.includes('phong thủy')) ||
        (product.categorySlug === 'nhang-nu' && (haystack.includes('hít') || haystack.includes('sức khỏe'))) ||
        (product.categorySlug === 'dot-xong-lu' && haystack.includes('đốt'))
      )
    })
    .slice(0, 3)

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': buildAbsoluteUrl(`/${locale}/san-pham/${product.id}#product`),
    name: name,
    image: product.images.map((image) => buildAbsoluteUrl(image)),
    description: description,
    sku: product.sku,
    category: product.category[localeKey],
    material: product.specs.material[localeKey],
    countryOfOrigin: product.specs.origin[localeKey],
    brand: {
      '@type': 'Brand',
      name: 'Trầm Hương Chú Bộ Đội',
    },
    seller: {
      '@type': 'Organization',
      name: 'Trầm Hương Chú Bộ Đội',
      url: buildAbsoluteUrl('/'),
    },
    offers: {
      '@type': 'Offer',
      url: buildAbsoluteUrl(`/${locale}/san-pham/${product.id}`),
      priceCurrency: 'VND',
      price: product.salePrice || product.originalPrice,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: t['product.detail.material'], value: product.specs.material[localeKey] },
      { '@type': 'PropertyValue', name: t['product.detail.origin'], value: product.specs.origin[localeKey] },
      { '@type': 'PropertyValue', name: t['product.detail.size'], value: product.specs.size[localeKey] },
      { '@type': 'PropertyValue', name: t['product.detail.weight'], value: product.specs.weight[localeKey] },
      { '@type': 'PropertyValue', name: t['product.detail.age'], value: product.specs.age[localeKey] },
    ],
  }

  // JSON-LD for Breadcrumbs
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t['nav.home'],
        item: buildAbsoluteUrl(`/${locale}`),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: product.category[localeKey],
        item: buildAbsoluteUrl(`/${locale}/${product.categorySlug}`),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: name,
        item: buildAbsoluteUrl(`/${locale}/san-pham/${product.id}`),
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <ProductDetailClient
          product={product}
          relatedProducts={relatedProducts}
          relatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </div>
  )
}
