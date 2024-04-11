import type { Paths, I18n, Translate } from 'next-translate'

export interface TranslationsKeys {
  common: Paths<typeof import('./locales/en/common.json')>
  home: Paths<typeof import('./locales/en/home.json')>
  about: Paths<typeof import('./locales/en/about.json')>
  navigation: Paths<typeof import('./locales/en/navigation.json')>
  ranks: Paths<typeof import('./locales/en/ranks.json')>
}

export interface TypeSafeTranslate<Namespace extends keyof TranslationsKeys>
  extends Omit<I18n, 't'> {
  t: {
    (
      key: TranslationsKeys[Namespace],
      ...rest: Tail<Parameters<Translate>>
    ): string
    <T extends string>(template: TemplateStringsArray): string
  }
}

declare module 'next-translate/useTranslation' {
  export default function useTranslation<
    Namespace extends keyof TranslationsKeys
  >(namespace: Namespace): TypeSafeTranslate<Namespace>
}