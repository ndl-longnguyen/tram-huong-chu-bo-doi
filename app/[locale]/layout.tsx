import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/language-context'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ContactButtons } from '@/components/contact-buttons'
import { Toaster } from '@/components/ui/sonner'
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
  title: {
    default: 'Trầm Hương Chú Bộ Đội - Trang Sức Trầm Hương Cao Cấp | Vòng Tay Trầm Hương Chính Hãng',
    template: '%s | Trầm Hương Chú Bộ Đội'
  },
  description: 'Trầm Hương Chú Bộ Đội - Thương hiệu trang sức trầm hương uy tín hàng đầu Việt Nam. Chuyên vòng tay trầm hương, nhang trầm, mỹ nghệ trầm hương 100% tự nhiên. Bảo hành trọn đời. Giao hàng toàn quốc. Hotline: 0765.942.942',
  keywords: [
    'trầm hương',
    'trầm hương chú bộ đội',
    'vòng tay trầm hương',
    'trang sức trầm hương',
    'trầm hương cao cấp',
    'vòng trầm hương',
    'nhang trầm hương',
    'trầm hương tự nhiên',
    'trầm hương việt nam',
    'mua trầm hương',
    'giá trầm hương',
    'trầm hương chính hãng',
    'vòng tay trầm hương phong thủy',
    'trầm hương đà nẵng',
    'trầm hương quảng nam',
    'trầm hương tiên phước',
    'mỹ nghệ trầm hương',
    'quà tặng trầm hương',
    'vòng tay 108 hạt trầm hương',
    'trầm hương bọc vàng',
  ],
  authors: [{ name: 'Trầm Hương Chú Bộ Đội' }],
  creator: 'Trầm Hương Chú Bộ Đội',
  publisher: 'Trầm Hương Chú Bộ Đội',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tramhuongchubodoi.com'),
  alternates: {
    languages: {
      'vi-VN': '/vi',
      'en-US': '/en',
      'zh-CN': '/zh',
    },
  },
  openGraph: {
    title: 'Trầm Hương Chú Bộ Đội - Trang Sức Trầm Hương Cao Cấp',
    description: 'Thương hiệu trang sức trầm hương uy tín hàng đầu Việt Nam. Vòng tay trầm hương, nhang trầm, mỹ nghệ trầm hương 100% tự nhiên. Bảo hành trọn đời.',
    url: 'https://tramhuongchubodoi.com',
    siteName: 'Trầm Hương Chú Bộ Đội',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trầm Hương Chú Bộ Đội - Trang Sức Trầm Hương Cao Cấp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trầm Hương Chú Bộ Đội - Trang Sức Trầm Hương Cao Cấp',
    description: 'Thương hiệu trang sức trầm hương uy tín hàng đầu Việt Nam. Vòng tay trầm hương, nhang trầm, mỹ nghệ 100% tự nhiên.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-code',
  },
  category: 'ecommerce',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export function generateStaticParams() {
  return [{ locale: 'vi' }, { locale: 'en' }, { locale: 'zh' }]
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://tramhuongchubodoi.com/#organization',
      name: 'Trầm Hương Chú Bộ Đội',
      url: 'https://tramhuongchubodoi.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tramhuongchubodoi.com/logo.png',
        width: 200,
        height: 200,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+84-765-942-942',
        contactType: 'customer service',
        areaServed: 'VN',
        availableLanguage: ['Vietnamese', 'English', 'Chinese'],
      },
      sameAs: [
        'https://facebook.com/tramhuongchubodoi',
        'https://zalo.me/0765942942',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://tramhuongchubodoi.com/#localbusiness',
      name: 'Trầm Hương Chú Bộ Đội',
      image: 'https://tramhuongchubodoi.com/og-image.png',
      '@type': ['Store', 'JewelryStore'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Tiên Phước',
        addressLocality: 'Đà Nẵng',
        addressRegion: 'Quảng Nam',
        addressCountry: 'VN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 15.5689,
        longitude: 108.4728,
      },
      telephone: '+84-765-942-942',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '22:00',
      },
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://tramhuongchubodoi.com/#website',
      url: 'https://tramhuongchubodoi.com',
      name: 'Trầm Hương Chú Bộ Đội',
      description: 'Thương hiệu trang sức trầm hương uy tín hàng đầu Việt Nam',
      publisher: {
        '@id': 'https://tramhuongchubodoi.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://tramhuongchubodoi.com/vi/tim-kiem?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  return (
    <html lang={locale} className="bg-background" suppressHydrationWarning style={{ scrollbarGutter: 'stable' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${beVietnamPro.variable} ${playfairDisplay.variable} font-sans antialiased overflow-x-hidden`}>
        <LanguageProvider>
          {children}
          <ScrollToTop />
          <ContactButtons />
        </LanguageProvider>
        <Toaster position="bottom-right" richColors />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
