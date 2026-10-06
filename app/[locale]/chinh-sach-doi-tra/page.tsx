import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PolicyPageClient } from "@/components/policy/policy-page-client"
import type { LocalizedPageProps } from '@/lib/i18n/config'
import { createPageMetadata } from '@/lib/seo'

const metaByLocale: Record<string, { title: string; description: string }> = {
  vi: {
    title: 'Chính Sách Đổi Trả | Trầm Hương Chú Bộ Đội',
    description: 'Chính sách đổi trả minh bạch của Trầm Hương Chú Bộ Đội. Hỗ trợ đổi trả trong vòng 7 - 30 ngày, bảo đảm quyền lợi tối đa cho khách hàng.',
  },
  en: {
    title: 'Return & Refund Policy | Tram Huong Chu Bo Doi',
    description: 'Transparent Return & Refund Policy of Tram Huong Chu Bo Doi. 7 to 30-day exchange and replacement for full customer satisfaction.',
  },
  zh: {
    title: '退换货政策 | 朱伯队沉香',
    description: '朱伯队沉香透明周到的退换货政策。7至30天内支持换货与换新，全面保障客户权益。',
  },
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale } = await params
  const meta = metaByLocale[locale] || metaByLocale.vi
  return createPageMetadata({
    locale,
    pathname: '/chinh-sach-doi-tra',
    title: meta.title,
    description: meta.description,
  })
}

export default async function ReturnsPage({ params }: LocalizedPageProps) {
  return (
    <>
      <Header />
      <PolicyPageClient type="returns" />
      <Footer />
    </>
  )
}
