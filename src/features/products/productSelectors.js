// // productSelectors.js - Updated selectors
// import { createSelector } from '@reduxjs/toolkit';

// export const selectProducts = (state) => state.products.filteredProducts;
// export const selectSelectedProduct = (state) => state.products.selectedProduct;
// export const selectLoading = (state) => state.products.loading;
// export const selectError = (state) => state.products.error;
// export const selectSelectedCategory = (state) => state.products.selectedCategory;
// export const selectSortBy = (state) => state.products.sortBy;
// export const selectCategories = (state) => state.products.categories;

// // Selector for filtered and sorted products
// export const selectFilteredProducts = createSelector(
//   [selectProducts, selectSortBy],
//   (products, sortBy) => {
//     if (!products || products.length === 0) return [];
    
//     const sortedProducts = [...products];
    
//     switch (sortBy) {
//       case 'name':
//         return sortedProducts.sort((a, b) => 
//           a.name?.localeCompare(b.name || '')
//         );
      
//       case 'price-low':
//         return sortedProducts.sort((a, b) => {
//           const priceA = parseFloat(a.priceNumeric || a.price || a.final_price || 0);
//           const priceB = parseFloat(b.priceNumeric || b.price || b.final_price || 0);
//           return priceA - priceB;
//         });
      
//       case 'price-high':
//         return sortedProducts.sort((a, b) => {
//           const priceA = parseFloat(a.priceNumeric || a.price || a.final_price || 0);
//           const priceB = parseFloat(b.priceNumeric || b.price || b.final_price || 0);
//           return priceB - priceA;
//         });
      
//       case 'rating':
//         return sortedProducts.sort((a, b) => {
//           const ratingA = parseFloat(a.rating || 0);
//           const ratingB = parseFloat(b.rating || 0);
//           return ratingB - ratingA;
//         });
      
//       default:
//         return sortedProducts;
//     }
//   }
// );























// // productSelectors.js - UPDATED WITH PROPER MEMOIZATION
// import { createSelector } from '@reduxjs/toolkit';

// // Base selectors
// export const selectProducts = (state) => state.products.filteredProducts;
// export const selectSelectedProduct = (state) => state.products.selectedProduct;
// export const selectLoading = (state) => state.products.loading;
// export const selectError = (state) => state.products.error;
// export const selectSelectedCategory = (state) => state.products.selectedCategory;
// export const selectSortBy = (state) => state.products.sortBy;
// export const selectCategories = (state) => state.products.categories;

// // Memoized selector for filtered and sorted products
// export const selectFilteredProducts = createSelector(
//   [selectProducts, selectSortBy],
//   (products, sortBy) => {
//     if (!products || products.length === 0) return [];
    
//     // Create a new array for sorting (avoid mutating original)
//     const sortedProducts = [...products];
    
//     switch (sortBy) {
//       case 'name':
//         return sortedProducts.sort((a, b) => 
//           (a.name || '').localeCompare(b.name || '')
//         );
      
//       case 'price-low':
//         return sortedProducts.sort((a, b) => {
//           const priceA = a.price || 0;
//           const priceB = b.price || 0;
//           return priceA - priceB;
//         });
      
//       case 'price-high':
//         return sortedProducts.sort((a, b) => {
//           const priceA = a.price || 0;
//           const priceB = b.price || 0;
//           return priceB - priceA;
//         });
      
//       case 'rating':
//         return sortedProducts.sort((a, b) => {
//           const ratingA = a.rating || 0;
//           const ratingB = b.rating || 0;
//           return ratingB - ratingA;
//         });
      
//       default:
//         return sortedProducts;
//     }
//   }
// );

// // Memoized selector for product count
// export const selectProductCount = createSelector(
//   [selectProducts],
//   (products) => products?.length || 0
// );



























// productSelectors.js - UPDATED WITH MEMOIZATION
import { createSelector } from '@reduxjs/toolkit';

// Base selectors
const selectProductsState = state => state.products;

// Memoized selectors
export const selectFilteredProducts = createSelector(
  [selectProductsState],
  (productsState) => productsState.filteredProducts || []
);

export const selectSelectedProduct = createSelector(
  [selectProductsState],
  (productsState) => productsState.selectedProduct
);

export const selectLoading = createSelector(
  [selectProductsState],
  (productsState) => productsState.loading
);

export const selectSortBy = createSelector(
  [selectProductsState],
  (productsState) => productsState.sortBy
);

export const selectCategories = createSelector(
  [selectProductsState],
  (productsState) => productsState.categories || []
);

export const selectError = createSelector(
  [selectProductsState],
  (productsState) => productsState.error
);