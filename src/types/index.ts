export interface OptionsI {
  cookieName: string
  blockPage: boolean
  expires: number
  locale: string
  position: string
  autoIncludeJs: boolean
}

export interface PolicyI {
  id: string
  label: string
  description: string
  category: string
}

export interface CategoryI {
  id: string
  label: string
  description: string
}

export interface TranslationI {
  [key: string]: string
}