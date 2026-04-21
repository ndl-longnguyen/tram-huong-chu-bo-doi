import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PolicyPageClient } from "@/components/policy/policy-page-client"

type PageProps = { params: Promise<{ locale: string }> }

const metaByLocale: Record<string, { title: string; description: string }> = {
  vi: {
    title: 'Điều Khoản Dịch Vụ | Trầm Hương Chú Bộ Đội',
    description: 'Điều khoản dịch vụ của Trầm Hương Chú Bộ Đội. Đọc kỹ các điều khoản trước khi sử dụng dịch vụ và mua hàng tại website.',
  },
  en: {
    title: 'Terms of Service | Tram Huong Chu Bo Doi',
    description: 'Terms of Service for Tram Huong Chu Bo Doi. Please read these terms carefully before using our services and making purchases.',
  },
  zh: {
    title: '服务条款 | 朱伯队沉香',
    description: '朱伯队沉香的服务条款。在使用我们的服务和进行购买之前，请仔细阅读这些条款。',
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const meta = metaByLocale[locale] || metaByLocale.vi
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://tramhuongchubodoi.com/${locale}/chinh-sach-dieu-khoan`,
      languages: {
        'vi': '/vi/chinh-sach-dieu-khoan',
        'en': '/en/chinh-sach-dieu-khoan',
        'zh': '/zh/chinh-sach-dieu-khoan',
      },
    },
  }
}

export default async function TermsPage({ params }: PageProps) {
  return (
    <>
      <Header />
      <PolicyPageClient type="terms" />
      <Footer />
    </>
  )
}
