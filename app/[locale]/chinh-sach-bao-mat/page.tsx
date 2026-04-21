import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PolicyPageClient } from "@/components/policy/policy-page-client"

type PageProps = { params: Promise<{ locale: string }> }

const metaByLocale: Record<string, { title: string; description: string }> = {
  vi: {
    title: 'Chính Sách Bảo Mật | Trầm Hương Chú Bộ Đội',
    description: 'Chính sách bảo mật thông tin khách hàng của Trầm Hương Chú Bộ Đội. Chúng tôi cam kết bảo vệ dữ liệu cá nhân của bạn.',
  },
  en: {
    title: 'Privacy Policy | Tram Huong Chu Bo Doi',
    description: 'Privacy Policy of Tram Huong Chu Bo Doi. We are committed to protecting your personal data and information.',
  },
  zh: {
    title: '隐私政策 | 朱伯队沉香',
    description: '朱伯队沉香的隐私政策。我们致力于保护您的个人数据和信息。',
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const meta = metaByLocale[locale] || metaByLocale.vi
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://tramhuongchubodoi.com/${locale}/chinh-sach-bao-mat`,
      languages: {
        'vi': '/vi/chinh-sach-bao-mat',
        'en': '/en/chinh-sach-bao-mat',
        'zh': '/zh/chinh-sach-bao-mat',
      },
    },
  }
}

export default async function PrivacyPage({ params }: PageProps) {
  return (
    <>
      <Header />
      <PolicyPageClient type="privacy" />
      <Footer />
    </>
  )
}
