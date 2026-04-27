import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPageClient } from "@/components/blog/blog-page-client"
import { generateCategoryMetadata } from '@/lib/seo'
import { translations, Locale } from '@/lib/i18n/translations'

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return generateCategoryMetadata({ locale, slug: 'blog', translationKey: 'blog' })
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params
  const t = translations[locale as Locale] || translations.vi

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: t['meta.blog.title'],
    description: t['meta.blog.description'],
    url: `https://tramhuongchubodoi.com/${locale}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Trầm Hương Chú Bộ Đội',
      logo: { '@type': 'ImageObject', url: 'https://tramhuongchubodoi.com/logo.png' },
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
        <BlogPageClient />
      </main>
      <Footer />
    </div>
  )
}
