import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PolicyPageClient } from "@/components/policy/policy-page-client"

type PageProps = { params: Promise<{ locale: string }> }

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const meta = metaByLocale[locale] || metaByLocale.vi
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://tramhuongchubodoi.com/${locale}/chinh-sach-van-chuyen`,
      languages: {
        'vi': '/vi/chinh-sach-van-chuyen',
        'en': '/en/chinh-sach-van-chuyen',
        'zh': '/zh/chinh-sach-van-chuyen',
      },
    },
  }
}

export default async function ShippingPage({ params }: PageProps) {
  return (
    <>
      <Header />
      <PolicyPageClient type="shipping" />
      <Footer />
    </>
  )
}
