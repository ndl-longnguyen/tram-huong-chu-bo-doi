import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/language-context'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ContactButtons } from '@/components/contact-buttons'
import './globals.css'

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
  title: 'Tram Huong Chu Bo Doi - Trang Suc Tram Huong Cao Cap',
  description: 'Tram Huong Chu Bo Doi - Thuong hieu trang suc tram huong uy tin hang dau Viet Nam. Tinh hoa Tram Viet - Di san A Dong.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-background" suppressHydrationWarning>
      <body className={`${beVietnamPro.variable} ${playfairDisplay.variable} font-sans antialiased`}>
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
