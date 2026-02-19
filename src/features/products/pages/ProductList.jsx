import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { 
  setSelectedCategory, 
  setSortBy,
  fetchProductsByCategory,
  clearFilteredProducts
} from '../productSlice.js'
import { 
  selectFilteredProducts, 
  selectLoading,
  selectSortBy,
  selectCategories 
} from '../productSelectors.js'
import ProductGrid from '../components/ProductGrid.jsx'
import CategoryFilter from '../components/CategoryFilter.jsx'

// Import React Icons
import { FaSort, FaBoxOpen, FaLightbulb, FaSpinner } from 'react-icons/fa'

const ProductList = () => {
  const { category = 'all' } = useParams()
  const dispatch = useDispatch()
  const products = useSelector(selectFilteredProducts)
  const loading = useSelector(selectLoading)
  const sortBy = useSelector(selectSortBy)
  const categories = useSelector(selectCategories)

  useEffect(() => {
    console.log('Current category from URL:', category);
    
    // Clean up previous products
    dispatch(clearFilteredProducts());
    
    // Set category and fetch products
    dispatch(setSelectedCategory(category));
    dispatch(fetchProductsByCategory(category));
    
    // Cleanup function
    return () => {
      dispatch(clearFilteredProducts());
    };
  }, [category, dispatch]);

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value))
  }

  // Get category display name
  const getCategoryName = (categoryId) => {
    if (categoryId === 'all') return 'All Products';
    
    const foundCategory = categories.find(cat => cat.id === categoryId);
    return foundCategory ? foundCategory.name : 
      categoryId.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600">
          <FaSpinner className="h-12 w-12 text-blue-600" />
        </div>
        <span className="ml-4 text-gray-600">Loading products...</span>
      </div>
    )
  }

  const categoryName = getCategoryName(category)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Debug info - remove in production */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
        <p className="text-sm text-yellow-800">
          <strong>Debug:</strong> Category: {category} | Products found: {products.length}
        </p>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
        <p className="text-gray-600 mt-2">
          {products.length} products available
        </p>
      </motion.div>

      {/* Category Filter */}
      <CategoryFilter currentCategory={category} />

      {/* Sort and Filters */}
      {products.length > 0 && (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <FaSort className="text-gray-500" />
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      )}

      {/* Products Grid */}
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <FaBoxOpen className="text-gray-300 text-6xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">Try selecting a different category</p>
          <button
            onClick={() => dispatch(fetchProductsByCategory('all'))}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            View All Products
          </button>
        </div>
      )}

      {/* Category Tips */}
      {category !== 'all' && products.length > 0 && (
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <FaLightbulb className="text-blue-600" />
            {categoryName} Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Safety First</h4>
              <p className="text-gray-600 text-sm">
                Always consult with your doctor before starting any new medication.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Storage Tips</h4>
              <p className="text-gray-600 text-sm">
                Store medicines in a cool, dry place away from direct sunlight.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Dosage</h4>
              <p className="text-gray-600 text-sm">
                Follow the prescribed dosage and do not self-medicate.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductList