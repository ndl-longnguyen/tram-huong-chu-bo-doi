import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PolicyPageClient } from "@/components/policy/policy-page-client"
import type { LocalizedPageProps } from '@/lib/i18n/config'
import { createPageMetadata } from '@/lib/seo'

const metaByLocale: Record<string, { title: string; description: string }> = {
  vi: {
    title: 'Chính Sách Vận Chuyển | Trầm Hương Chú Bộ Đội',
    description: 'Chính sách vận chuyển của Trầm Hương Chú Bộ Đội. Giao hàng thần tốc Đà Nẵng, Nội thành 1-2 ngày, Toàn quốc 2-5 ngày.',
  },
  en: {
    title: 'Shipping Policy | Tram Huong Chu Bo Doi',
    description: 'Shipping Policy of Tram Huong Chu Bo Doi. Fast delivery in Da Nang, Inner city 1-2 days, Nationwide 2-5 days.',
  },
  zh: {
    title: '配送政策 | 朱伯队沉香',
    description: '朱伯队沉香的配送政策。岘港极速配送，市区1-2天，全国2-5天。',
  },
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale } = await params
  const meta = metaByLocale[locale] || metaByLocale.vi
  return createPageMetadata({
    locale,
    pathname: '/chinh-sach-van-chuyen',
    title: meta.title,
    description: meta.description,
  })
}

export default async function ShippingPage({ params }: LocalizedPageProps) {
  return (
    <>
      <Header />
      <PolicyPageClient type="shipping" />
      <Footer />
    </>
  )
}
