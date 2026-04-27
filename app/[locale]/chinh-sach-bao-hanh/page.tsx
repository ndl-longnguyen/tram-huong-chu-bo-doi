import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PolicyPageClient } from "@/components/policy/policy-page-client"
import type { LocalizedPageProps } from '@/lib/i18n/config'
import { createPageMetadata } from '@/lib/seo'

const metaByLocale: Record<string, { title: string; description: string }> = {
  vi: {
    title: 'Chính Sách Bảo Hành | Trầm Hương Chú Bộ Đội',
    description: 'Chính sách bảo hành của Trầm Hương Chú Bộ Đội. Bảo hành trọn đời sản phẩm trầm hương. Đổi trả trong 30 ngày nếu sản phẩm có lỗi từ nhà sản xuất.',
  },
  en: {
    title: 'Warranty Policy | Tram Huong Chu Bo Doi',
    description: 'Warranty Policy of Tram Huong Chu Bo Doi. Lifetime warranty on agarwood products. 30-day exchange for manufacturer defects.',
  },
  zh: {
    title: '保修政策 | 朱伯队沉香',
    description: '朱伯队沉香的保修政策。沉香产品终身保修。如有制造商缺陷，30天内可更换。',
  },
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale } = await params
  const meta = metaByLocale[locale] || metaByLocale.vi
  return createPageMetadata({
    locale,
    pathname: '/chinh-sach-bao-hanh',
    title: meta.title,
    description: meta.description,
  })
}

export default async function WarrantyPage({ params }: LocalizedPageProps) {
  return (
    <>
      <Header />
      <PolicyPageClient type="warranty" />
      <Footer />
    </>
  )
}
