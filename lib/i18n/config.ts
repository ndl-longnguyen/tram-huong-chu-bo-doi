import { translations, type Locale } from './translations'

export const DEFAULT_LOCALE: Locale = 'vi'
export const SUPPORTED_LOCALES: Locale[] = ['vi', 'en', 'zh']

export function isSupportedLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale)
}

export function resolveLocale(locale: string): Locale {
  return isSupportedLocale(locale) ? locale : DEFAULT_LOCALE
}

export function getTranslations(locale: string) {
  return translations[resolveLocale(locale)]
}

export type LocaleParams = Promise<{ locale: string }>
export type LocalizedPageProps = { params: LocaleParams }
