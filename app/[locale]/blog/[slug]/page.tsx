import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogDetailClient } from "@/components/blog/blog-detail-client"
import { blogPosts, getBlogPostBySlug } from "@/data/blog-content"
import { getProductsByCategory } from "@/lib/products"
import { resolveLocale, SUPPORTED_LOCALES } from '@/lib/i18n/config'
import { buildAbsoluteUrl, createPageMetadata, toIsoDateString } from '@/lib/seo'

type PageProps = { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []

  for (const locale of SUPPORTED_LOCALES) {
    for (const post of blogPosts) {
      params.push({ locale, slug: post.slug })
    }
  }

  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  const l = resolveLocale(locale)

  return createPageMetadata({
    locale,
    pathname: `/blog/${slug}`,
    title: post.title[l],
    description: post.excerpt[l],
    type: 'article',
    image: post.image,
  })
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { locale, slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const l = resolveLocale(locale)
  const publishedDate = toIsoDateString(post.date)
  const recommendedCategorySlug =
    slug.includes('hit') ? 'nhang-nu' :
    slug.includes('sanh-chim') ? 'vong-tay' :
    slug.includes('phong-thuy') ? 'vong-tay' :
    'dot-xong-lu'
  const recommendedProducts = getProductsByCategory(recommendedCategorySlug).slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: buildAbsoluteUrl(`/${locale}/blog/${slug}`),
    headline: post.title[l],
    alternativeHeadline: post.excerpt[l],
    description: post.excerpt[l],
    image: post.image,
    datePublished: publishedDate,
    dateModified: publishedDate,
    inLanguage: locale,
    articleSection: post.category[l],
    keywords: [post.category[l], 'trầm hương', 'agarwood', post.title[l]],
    author: {
      '@type': 'Organization',
      name: post.author[l],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trầm Hương Chú Bộ Đội',
      logo: { '@type': 'ImageObject', url: buildAbsoluteUrl('/logo.png') },
    },
    url: buildAbsoluteUrl(`/${locale}/blog/${slug}`),
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <BlogDetailClient post={post} recommendedProducts={recommendedProducts} />
      </main>
      <Footer />
    </div>
  )
}
