import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PolicyPageClient } from "@/components/policy/policy-page-client"

type PageProps = { params: Promise<{ locale: string }> }

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const meta = metaByLocale[locale] || metaByLocale.vi
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://tramhuongchubodoi.com/${locale}/chinh-sach-bao-hanh`,
      languages: {
        'vi': '/vi/chinh-sach-bao-hanh',
        'en': '/en/chinh-sach-bao-hanh',
        'zh': '/zh/chinh-sach-bao-hanh',
      },
    },
  }
}

export default async function WarrantyPage({ params }: PageProps) {
  return (
    <>
      <Header />
      <PolicyPageClient type="warranty" />
      <Footer />
    </>
  )
}
