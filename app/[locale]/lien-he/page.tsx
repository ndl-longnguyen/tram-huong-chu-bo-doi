import type { Metadata } from 'next'
import { ContactPageClient } from "@/components/contact/contact-page-client"
import { getTranslations, type LocalizedPageProps } from '@/lib/i18n/config'
import { createPageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale)

  return createPageMetadata({
    locale,
    pathname: '/lien-he',
    title: t['meta.contact.title'],
    description: t['meta.contact.description'],
  })
}

export default async function ContactPage({ params }: LocalizedPageProps) {
  const { locale } = await params
  const t = getTranslations(locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: t['meta.contact.title'],
    description: t['meta.contact.description'],
    url: `https://tramhuongchubodoi.com/${locale}/lien-he`,
    mainEntity: {
      '@type': 'Organization',
      name: 'Trầm Hương Chú Bộ Đội',
      telephone: '0765.942.942',
      email: 'tramhuongchubodoi@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Đà Nẵng',
        addressCountry: 'VN',
      },
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPageClient />
    </div>
  )
}
