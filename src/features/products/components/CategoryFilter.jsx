import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { setSelectedCategory, fetchProductsByCategory } from '../productSlice'
import { selectCategories } from '../productSelectors'

// Import React Icons
import { 
  FaBoxes,
  FaBaby,
  FaShieldVirus,
  FaSyringe,
  FaHeart,
  FaLeaf,
  FaTooth,
  FaSpa,
  FaBox
} from 'react-icons/fa'

const CategoryFilter = ({ currentCategory = 'all' }) => {
  const dispatch = useDispatch()
  const categories = useSelector(selectCategories)

  const handleCategoryClick = (categoryId) => {
    dispatch(setSelectedCategory(categoryId))
    dispatch(fetchProductsByCategory(categoryId))
  }

  return (
    <div className="mb-8">
      <h3 className="font-semibold text-gray-700 mb-4">Browse Categories</h3>
      <div className="flex flex-wrap gap-3">
        {/* All Products */}
        <Link to="/products">
          <button
            onClick={() => handleCategoryClick('all')}
            className={`px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-2 ${
              currentCategory === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaBoxes className="text-sm" />
            All Products
          </button>
        </Link>

        {/* Category Filters */}
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/products/${category.id}`}
            className="flex-shrink-0"
          >
            <button
              onClick={() => handleCategoryClick(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-2 ${
                currentCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {getCategoryIcon(category.id)}
              {category.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Helper function to get icons for categories
const getCategoryIcon = (categoryId) => {
  const iconMap = {
    'baby': <FaBaby className="text-sm" />,
    'covid': <FaShieldVirus className="text-sm" />,
    'diabetes': <FaSyringe className="text-sm" />,
    'cardiology': <FaHeart className="text-sm" />,
    'liver': <FaLeaf className="text-sm" />,
    'oral': <FaTooth className="text-sm" />,
    'skincare': <FaSpa className="text-sm" />,
    'stomach': <FaTooth className="text-sm" /> // Using FaTooth as placeholder for stomach
  };
  return iconMap[categoryId] || <FaBox className="text-sm" />;
}

export default CategoryFilter