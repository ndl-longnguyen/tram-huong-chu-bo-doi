import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogDetailClient } from "@/components/blog/blog-detail-client"
import { blogPosts, getBlogPostBySlug } from "@/data/blog-content"

type PageProps = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const locales = ['vi', 'en', 'zh']
  const params: { locale: string; slug: string }[] = []

  for (const locale of locales) {
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

  const l = locale as 'vi' | 'en' | 'zh'

  return {
    title: post.title[l],
    description: post.excerpt[l],
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        'vi-VN': `/vi/blog/${slug}`,
        'en-US': `/en/blog/${slug}`,
        'zh-CN': `/zh/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title[l],
      description: post.excerpt[l],
      url: `https://tramhuongchubodoi.com/${locale}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author[l]],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title[l] }],
    },
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { locale, slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const l = locale as 'vi' | 'en' | 'zh'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title[l],
    description: post.excerpt[l],
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author[l],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trầm Hương Chú Bộ Đội',
      logo: { '@type': 'ImageObject', url: 'https://tramhuongchubodoi.com/logo.png' },
    },
    url: `https://tramhuongchubodoi.com/${locale}/blog/${slug}`,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <BlogDetailClient post={post} />
      </main>
      <Footer />
    </div>
  )
}
