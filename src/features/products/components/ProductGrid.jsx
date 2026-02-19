// ProductGrid.jsx - Update the key prop
import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} // Use the unique ID
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductGrid