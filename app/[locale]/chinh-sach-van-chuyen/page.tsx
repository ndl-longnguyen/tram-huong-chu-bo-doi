import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PolicyPageClient } from "@/components/policy/policy-page-client"

type PageProps = { params: Promise<{ locale: string }> }

const metaByLocale: Record<string, { title: string; description: string }> = {
  vi: {
    title: 'Chính Sách Vận Chuyển | Trầm Hương Chú Bộ Đội',
    description: 'Chính sách vận chuyển của Trầm Hương Chú Bộ Đội. Giao hàng toàn quốc, nội thành Đà Nẵng trong 2h. Miễn phí vận chuyển cho đơn hàng từ 500k.',
  },
  en: {
    title: 'Shipping Policy | Tram Huong Chu Bo Doi',
    description: 'Shipping Policy of Tram Huong Chu Bo Doi. Nationwide delivery, within 2h in Da Nang. Free shipping for orders over 500k VND.',
  },
  zh: {
    title: '配送政策 | 朱伯队沉香',
    description: '朱伯队沉香的配送政策。全国配送，岘港市内2小时送达。订单满500K越南盾免费配送。',
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
