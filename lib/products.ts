import productsData from "@/data/products.json"

export interface Product {
  id: string
  sku: string
  slug: string
  name: {
    vi: string
    en: string
    zh: string
  }
  image: string
  images: string[]
  originalPrice: number
  salePrice?: number | null
  rating: number
  reviewCount: number
  badgeType?: "new" | "best" | "hot" | "sale" | null
  category: {
    vi: string
    en: string
    zh: string
  }
  categorySlug: string
  description: {
    vi: string
    en: string
    zh: string
  }
  features: {
    vi: string[]
    en: string[]
    zh: string[]
  }
  specs: {
    material: { vi: string; en: string; zh: string }
    origin: { vi: string; en: string; zh: string }
    size: { vi: string; en: string; zh: string }
    weight: { vi: string; en: string; zh: string }
    age: { vi: string; en: string; zh: string }
  }
  inStock: boolean
}

export interface Category {
  slug: string
  name: {
    vi: string
    en: string
    zh: string
  }
  description: {
    vi: string
    en: string
    zh: string
  }
  image: string
}

// Load products from JSON
export const products: Product[] = productsData.products as Product[]

// Load categories from JSON
export const categories: Category[] = productsData.categories as Category[]

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

// Get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

// Get products by category
export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug)
}

// Get related products (same category, excluding current product)
export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = getProductById(productId)
  if (!product) return products.slice(0, limit)
  
  return products
    .filter((p) => p.id !== productId && p.categorySlug === product.categorySlug)
    .slice(0, limit)
}

// Get featured products (Best Sellers - filtered by 'best' badge)
export function getFeaturedProducts(limit = 8): Product[] {
  return products
    .filter((p) => p.badgeType === "best")
    .slice(0, limit)
}

// Get new arrivals
export function getNewArrivals(limit = 6): Product[] {
  return products
    .filter((p) => p.badgeType === "new")
    .concat(products.filter((p) => p.badgeType !== "new"))
    .slice(0, limit)
}

// Get all products with pagination
export function getAllProducts(page = 1, perPage = 12): { products: Product[]; total: number; totalPages: number } {
  const start = (page - 1) * perPage
  const end = start + perPage
  
  return {
    products: products.slice(start, end),
    total: products.length,
    totalPages: Math.ceil(products.length / perPage)
  }
}

// Search products
export function searchProducts(query: string, locale: "vi" | "en" | "zh" = "vi"): Product[] {
  const lowercaseQuery = query.toLowerCase()
  
  return products.filter((p) => 
    p.name[locale].toLowerCase().includes(lowercaseQuery) ||
    p.description[locale].toLowerCase().includes(lowercaseQuery) ||
    p.sku.toLowerCase().includes(lowercaseQuery)
  )
}

// Get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

// Get all category slugs for static generation
export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug)
}

// Get all product IDs for static generation
export function getAllProductIds(): string[] {
  return products.map((p) => p.id)
}
