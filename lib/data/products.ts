import productsData from './products.json'

export interface Product {
  id: string
  category: string
  slug: string
  images: string[]
  name: Record<string, string>
  price: number
  originalPrice: number
  rating: number
  badge: Record<string, string>
  shortDescription: Record<string, string>
  description: Record<string, string>
  specifications: Array<{
    label: Record<string, string>
    value: Record<string, string>
  }>
}

export const getProducts = (): Product[] => {
  return productsData.products
}

export const getProductById = (id: string): Product | undefined => {
  return productsData.products.find(p => p.id === id)
}

export const getProductBySlug = (slug: string): Product | undefined => {
  return productsData.products.find(p => p.slug === slug)
}

export const getProductsByCategory = (category: string): Product[] => {
  return productsData.products.filter(p => p.category === category)
}
