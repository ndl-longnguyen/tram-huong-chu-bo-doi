import { Metadata } from 'next'
import CategoryPageContent from "@/components/category-page-content"
import { generateCategoryMetadata } from '@/lib/seo'

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return generateCategoryMetadata({ locale, slug: 'nhang-nu', translationKey: 'incense' })
}

export default function Page() {
  return <CategoryPageContent categorySlug="nhang-nu" />
}
