type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

// This matches our content model from our CMS (Contentful)

type Image = {
  title?: string
  url?: string
  width?: number
  height?: number
}

type Category = {
  id: Json
  slug?: string
  title?: string
  icon?: Image
  description?: string
  titleCeo?: string
  descriptionCeo?: string
  keywords?: string
  titleShow?: string
}

type RecommendedBlog = {
  id : Json
  pageUrl?: string
  title?: string
  intro?: string
  image?: Image
  conclucion?: string
  titleCeo?: string
  descripctionCep?: string
  category?: Category
  update: string
}

type RichText = Json
 
export type Blog = {
  id: Json
  title?: string
  pageUrl?: string
  intro?: string
  body?: RichText
  image?: Image
  recommendedPosts?: RecommendedBlog
  category?: Category
  conclucion?: string
  titleCeo?: string
  descripctionCep?: string
  keywords?: string
  urlCeo?: string
  urlCanonical?: string
  productT?: string
  productI?: string
  productD?: string
  productP?: number
  productUrl?: string
  productT2?: string
  productI2?: string
  productD2?: string
  productP2?: number
  productUrl2?: string
  update?: string
} | undefined

type RecommendedNews = {
  id : Json
  pageUrl?: string
  title?: string
  intro?: string
  image?: Image
  conclucion?: string
  titleCeo?: string
  descripctionCep?: string
  category?: Category
  type?: string
  update: string
}

export type News = {
  id: Json
  title?: string
  pageUrl?: string
  intro?: string
  body?: RichText
  image?: Image
  recommendedPosts?: RecommendedNews
  category?: Category
  conclucion?: string
  titleCeo?: string
  descripctionCep?: string
  keywords?: string
  urlCeo?: string
  urlCanonical?: string
  type?: string
  update?: string
} | undefined

type RecommendedTutorials = {
  id : Json
  pageUrl?: string
  title?: string
  intro?: string
  image?: Image
  conclucion?: string
  titleCeo?: string
  descripctionCep?: string
  category?: Category
  type?: string
  update: string
}

export type Tutorials = {
  id: Json
  title?: string
  pageUrl?: string
  intro?: string
  body?: RichText
  image?: Image
  recommendedPosts?: RecommendedNews
  category?: Category
  conclucion?: string
  titleCeo?: string
  descripctionCep?: string
  keywords?: string
  urlCeo?: string
  urlCanonical?: string
  type?: string
  update?: string
} | undefined

type PaginatedList<T> = {
  limit: number
  skip: number
  items: T[]
}
