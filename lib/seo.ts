import type { Metadata } from 'next'
import type { Locale } from './i18n/translations'
import { getTranslations, resolveLocale, SUPPORTED_LOCALES } from './i18n/config'

export const BASE_URL = 'https://tramhuongchubodoi.com'

const LOCALE_LANGUAGE_MAP: Record<Locale, string> = {
  vi: 'vi-VN',
  en: 'en-US',
  zh: 'zh-CN',
}

const OPEN_GRAPH_LOCALE_MAP: Record<Locale, string> = {
  vi: 'vi_VN',
  en: 'en_US',
  zh: 'zh_CN',
}

type SeoInput = {
  locale: string
  pathname: string
  title: string
  description: string
  type?: 'website' | 'article'
  image?: string
  keywords?: string[]
}

type MetadataParams = {
  locale: string
  slug: string
  translationKey: string
}

export function buildAbsoluteUrl(pathname: string): string {
  return `${BASE_URL}${pathname.startsWith('/') ? pathname : `/${pathname}`}`
}

export function buildLanguageAlternates(pathname: string) {
  return Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => [
      LOCALE_LANGUAGE_MAP[locale],
      `/${locale}${pathname}`,
    ])
  )
}

export function createPageMetadata({
  locale,
  pathname,
  title,
  description,
  type = 'website',
  image = '/og-image.png',
  keywords,
}: SeoInput): Metadata {
  const normalizedLocale = resolveLocale(locale)
  const url = buildAbsoluteUrl(`/${normalizedLocale}${pathname}`)
  const alternates = buildLanguageAlternates(pathname)

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: `/${normalizedLocale}${pathname}`,
      languages: alternates,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: 'Trầm Hương Chú Bộ Đội',
      locale: OPEN_GRAPH_LOCALE_MAP[normalizedLocale],
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export function generateCategoryMetadata({ locale, slug, translationKey }: MetadataParams): Metadata {
  const normalizedLocale = resolveLocale(locale)
  const t = getTranslations(normalizedLocale)

  return createPageMetadata({
    locale: normalizedLocale,
    pathname: `/${slug}`,
    title: t[`meta.${translationKey}.title`],
    description: t[`meta.${translationKey}.description`],
  })
}

export function parseLocalizedDate(value: string): Date {
  const [day, month, year] = value.split('/')
  const parsed = new Date(`${year}-${month}-${day}T00:00:00.000Z`)
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed
}

export function toIsoDateString(value: string): string {
  return parseLocalizedDate(value).toISOString().slice(0, 10)
}
