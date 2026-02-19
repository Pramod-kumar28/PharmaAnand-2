import axios from '../../app/config/axios.js'
import productsData from '../../data/products.js'

// Mock API service - Replace with real API calls
const productService = {
  // Get all products
  getProducts: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return productsData
  },

  // Get product by ID
  getProductById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const product = productsData.find(p => p.id === parseInt(id))
    if (!product) throw new Error('Product not found')
    return product
  },

  // Get products by category
  getProductsByCategory: async (category) => {
    await new Promise(resolve => setTimeout(resolve, 400))
    return productsData.filter(p => p.category === category)
  },

  // Search products
  searchProducts: async (query) => {
    await new Promise(resolve => setTimeout(resolve, 400))
    return productsData.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    )
  }
}

export default productService