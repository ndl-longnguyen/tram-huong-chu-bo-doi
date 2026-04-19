import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/language-context'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ContactButtons } from '@/components/contact-buttons'
import '../globals.css'

const beVietnamPro = Be_Vietnam_Pro({ 
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Trầm Hương Chú Bộ Đội - Trang Sức Trầm Hương Cao Cấp',
  description: 'Trầm Hương Chú Bộ Đội - Thương hiệu trang sức trầm hương uy tín hàng đầu Việt Nam. Tinh Hoa Trầm Việt - Di Sản Á Đông.',
}

export function generateStaticParams() {
  return [{ locale: 'vi' }, { locale: 'en' }, { locale: 'zh' }]
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale} className="bg-background" suppressHydrationWarning>
      <body className={`${beVietnamPro.variable} ${playfairDisplay.variable} font-sans antialiased overflow-x-hidden`}>
        <LanguageProvider>
          {children}
          <ScrollToTop />
          <ContactButtons />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
