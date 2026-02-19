// // productSlice.js - COMPLETELY UPDATED
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import products from '../../data/products';

// const initialState = {
//   filteredProducts: [],
//   selectedProduct: null,
//   loading: false,
//   error: null,
//   selectedCategory: null,
//   sortBy: 'name',
//   categories: [
//     { id: 'baby', name: 'Baby Care', image: '/assets/Babyimg/baby-care.jpg' },
//     { id: 'covid', name: 'COVID Essentials', image: '/assets/Covidimg/covid-care.jpg' },
//     { id: 'diabetes', name: 'Diabetes Care', image: '/assets/DiabetesCare/diabetes-care.jpg' },
//     { id: 'cardiology', name: 'Cardiology', image: '/assets/Cardiology/cardiology-care.jpg' },
//     { id: 'liver', name: 'Liver Care', image: '/assets/LiverCare/liver-care.jpg' },
//     { id: 'oral', name: 'Oral Care', image: '/assets/Oralimg/oral-care.jpg' },
//     { id: 'skincare', name: 'Skincare', image: '/assets/Skincare/skincare-care.jpg' },
//     { id: 'stomach', name: 'Stomach Care', image: '/assets/StomachCare/stomach-care.jpg' }
//   ]
// };

// // Helper function to normalize product data
// const normalizeProduct = (product, category, subCategory = null) => {
//   const normalized = {
//     ...product,
//     category,
//     subCategory,
//     // Standardize price
//     price: parseFloat(
//       product.priceNumeric || 
//       product.price?.replace('₹', '') || 
//       product.final_price || 
//       product.cost || 
//       0
//     ),
//     // Standardize original price
//     originalPrice: parseFloat(
//       product.originalPriceNumeric || 
//       product.originalPrice?.replace('₹', '') || 
//       (product.cost && !product.final_price ? product.cost : 0) || 
//       0
//     ),
//     // Calculate savings if not present
//     savings: product.savings || 
//       (product.discount ? `${product.discount}%` : '0%'),
//     // Get rating
//     rating: product.rating || 4.0,
//     // Get image
//     image: product.image || product.images || '/placeholder.jpg'
//   };

//   // If originalPrice is 0 but cost exists, use cost as originalPrice
//   if (normalized.originalPrice === 0 && product.cost && product.final_price) {
//     normalized.originalPrice = parseFloat(product.cost);
//   }

//   // Ensure price is not greater than originalPrice
//   if (normalized.originalPrice < normalized.price) {
//     normalized.originalPrice = normalized.price;
//   }

//   return normalized;
// };

// // Get all products for a specific category
// const getCategoryProducts = (category) => {
//   switch (category) {
//     case 'baby':
//       return (products.baby || []).map(p => normalizeProduct(p, 'baby'));
    
//     case 'covid':
//       return (products.covid || []).map(p => normalizeProduct(p, 'covid'));
    
//     case 'diabetes':
//       // Flatten all diabetes subcategories
//       const diabetesProducts = [];
//       if (products.diabetes) {
//         Object.keys(products.diabetes).forEach(subCat => {
//           if (Array.isArray(products.diabetes[subCat])) {
//             products.diabetes[subCat].forEach(p => {
//               diabetesProducts.push(normalizeProduct(p, 'diabetes', subCat));
//             });
//           }
//         });
//       }
//       return diabetesProducts;
    
//     case 'cardiology':
//       const cardioProducts = (products.cardiology?.medications || []).map(p => 
//         normalizeProduct(p, 'cardiology')
//       );
//       return cardioProducts;
    
//     case 'liver':
//       // Flatten all liver subcategories
//       const liverProducts = [];
//       if (products.liver) {
//         Object.keys(products.liver).forEach(subCat => {
//           if (Array.isArray(products.liver[subCat])) {
//             products.liver[subCat].forEach(p => {
//               liverProducts.push(normalizeProduct(p, 'liver', subCat));
//             });
//           }
//         });
//       }
//       return liverProducts;
    
//     case 'oral':
//       return (products.oral || []).map(p => normalizeProduct(p, 'oral'));
    
//     case 'skincare':
//       return (products.skincare || []).map(p => normalizeProduct(p, 'skincare'));
    
//     case 'stomach':
//       // Flatten all stomach subcategories
//       const stomachProducts = [];
//       if (products.stomach?.product) {
//         Object.keys(products.stomach.product).forEach(subCat => {
//           if (Array.isArray(products.stomach.product[subCat])) {
//             products.stomach.product[subCat].forEach(p => {
//               stomachProducts.push(normalizeProduct(p, 'stomach', subCat));
//             });
//           }
//         });
//       }
//       return stomachProducts;
    
//     default:
//       return [];
//   }
// };

// // Get all products (for "all products" view)
// const getAllProducts = () => {
//   const allProducts = [];
  
//   // Get products from each category
//   const categories = ['baby', 'covid', 'diabetes', 'cardiology', 'liver', 'oral', 'skincare', 'stomach'];
  
//   categories.forEach(category => {
//     const categoryProds = getCategoryProducts(category);
//     allProducts.push(...categoryProds);
//   });
  
//   return allProducts;
// };

// // Find product by ID
// const findProductById = (productId) => {
//   const allProducts = getAllProducts();
//   const product = allProducts.find(p => 
//     String(p.id) === String(productId) || 
//     String(p._id) === String(productId)
//   );
//   return product || null;
// };

// // Async thunks
// export const fetchProductsByCategory = createAsyncThunk(
//   'products/fetchByCategory',
//   async (category) => {
//     try {
//       let products;
//       if (category === 'all' || !category) {
//         products = getAllProducts();
//       } else {
//         products = getCategoryProducts(category);
//       }
//       return products;
//     } catch (error) {
//       throw new Error(`Failed to fetch products: ${error.message}`);
//     }
//   }
// );

// export const fetchProductById = createAsyncThunk(
//   'products/fetchById',
//   async (productId) => {
//     try {
//       const product = findProductById(productId);
//       if (!product) {
//         throw new Error('Product not found');
//       }
//       return product;
//     } catch (error) {
//       throw new Error(`Failed to fetch product: ${error.message}`);
//     }
//   }
// );

// const productSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     setSelectedCategory: (state, action) => {
//       state.selectedCategory = action.payload;
//     },
//     setSortBy: (state, action) => {
//       state.sortBy = action.payload;
//     },
//     clearSelectedProduct: (state) => {
//       state.selectedProduct = null;
//     },
//     clearFilteredProducts: (state) => {
//       state.filteredProducts = [];
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       // Fetch products by category
//       .addCase(fetchProductsByCategory.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
//         state.loading = false;
//         state.filteredProducts = action.payload;
//       })
//       .addCase(fetchProductsByCategory.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//         state.filteredProducts = [];
//       })
//       // Fetch single product by ID
//       .addCase(fetchProductById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProductById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.selectedProduct = action.payload;
//       })
//       .addCase(fetchProductById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//         state.selectedProduct = null;
//       });
//   }
// });

// export const { 
//   setSelectedCategory, 
//   setSortBy, 
//   clearSelectedProduct,
//   clearFilteredProducts 
// } = productSlice.actions;

// export default productSlice.reducer;



































// productSlice.js - FIXED VERSION
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import products from '../../data/products';

const initialState = {
  filteredProducts: [],
  selectedProduct: null,
  loading: false,
  error: null,
  selectedCategory: null,
  sortBy: 'name',
  categories: [
    { id: 'baby', name: 'Baby Care', image: '/assets/Babyimg/baby-care.jpg' },
    { id: 'covid', name: 'COVID Essentials', image: '/assets/Covidimg/covid-care.jpg' },
    { id: 'diabetes', name: 'Diabetes Care', image: '/assets/DiabetesCare/diabetes-care.jpg' },
    { id: 'cardiology', name: 'Cardiology', image: '/assets/Cardiology/cardiology-care.jpg' },
    { id: 'liver', name: 'Liver Care', image: '/assets/LiverCare/liver-care.jpg' },
    { id: 'oral', name: 'Oral Care', image: '/assets/Oralimg/oral-care.jpg' },
    { id: 'skincare', name: 'Skincare', image: '/assets/Skincare/skincare-care.jpg' },
    { id: 'stomach', name: 'Stomach Care', image: '/assets/StomachCare/stomach-care.jpg' }
  ]
};

// Helper function to normalize product data - SIMPLIFIED
const normalizeProduct = (product, category, subCategory = null) => {
  try {
    const originalId = product.id || product._id || product.productId;
    
    // Use the original ID directly - it's already unique
    const normalized = {
      ...product,
      id: originalId, // Use original ID as is
      category,
      subCategory,
      // Standardize price
      price: parseFloat(
        product.priceNumeric || 
        product.price?.replace('₹', '') || 
        product.final_price || 
        product.cost || 
        0
      ),
      // Standardize original price
      originalPrice: parseFloat(
        product.originalPriceNumeric || 
        product.originalPrice?.replace('₹', '') || 
        (product.cost && !product.final_price ? product.cost : 0) || 
        0
      ),
      // Calculate savings if not present
      savings: product.savings || 
        (product.discount ? `${product.discount}%` : '0%'),
      // Get rating
      rating: product.rating || 4.0,
      // Get image
      image: product.image || product.images || '/placeholder.jpg',
      // Ensure required fields
      name: product.name || 'Unnamed Product',
      description: product.description || '',
      brand: product.brand || product.manufacturer || product.company_name || 'Unknown Brand'
    };

    // If originalPrice is 0 but cost exists, use cost as originalPrice
    if (normalized.originalPrice === 0 && product.cost && product.final_price) {
      normalized.originalPrice = parseFloat(product.cost);
    }

    // Ensure price is not greater than originalPrice
    if (normalized.originalPrice < normalized.price) {
      normalized.originalPrice = normalized.price;
    }

    return normalized;
  } catch (error) {
    console.error('Error normalizing product:', error, product);
    return null;
  }
};

// Get all products for a specific category
const getCategoryProducts = (category) => {
  console.log(`Getting products for category: ${category}`);
  
  try {
    switch (category) {
      case 'baby':
        const babyProducts = (products.baby || []).map(p => normalizeProduct(p, 'baby')).filter(p => p !== null);
        console.log(`Found ${babyProducts.length} baby products`);
        return babyProducts;
      
      case 'covid':
        const covidProducts = (products.covid || []).map(p => normalizeProduct(p, 'covid')).filter(p => p !== null);
        console.log(`Found ${covidProducts.length} covid products`);
        return covidProducts;
      
      case 'diabetes':
        // Flatten all diabetes subcategories
        const diabetesProducts = [];
        if (products.diabetes) {
          Object.keys(products.diabetes).forEach(subCat => {
            console.log(`Processing diabetes subcategory: ${subCat}`);
            if (Array.isArray(products.diabetes[subCat])) {
              products.diabetes[subCat].forEach(p => {
                const normalized = normalizeProduct(p, 'diabetes', subCat);
                if (normalized) diabetesProducts.push(normalized);
              });
            }
          });
        }
        console.log(`Found ${diabetesProducts.length} diabetes products`);
        return diabetesProducts;
      
      case 'cardiology':
        const cardioProducts = (products.cardiology?.medications || []).map(p => normalizeProduct(p, 'cardiology')).filter(p => p !== null);
        console.log(`Found ${cardioProducts.length} cardiology products`);
        return cardioProducts;
      
      case 'liver':
        // Flatten all liver subcategories
        const liverProducts = [];
        if (products.liver) {
          Object.keys(products.liver).forEach(subCat => {
            console.log(`Processing liver subcategory: ${subCat}`);
            if (Array.isArray(products.liver[subCat])) {
              products.liver[subCat].forEach(p => {
                const normalized = normalizeProduct(p, 'liver', subCat);
                if (normalized) liverProducts.push(normalized);
              });
            }
          });
        }
        console.log(`Found ${liverProducts.length} liver products`);
        return liverProducts;
      
      case 'oral':
        const oralProducts = (products.oral || []).map(p => normalizeProduct(p, 'oral')).filter(p => p !== null);
        console.log(`Found ${oralProducts.length} oral products`);
        return oralProducts;
      
      case 'skincare':
        const skincareProducts = (products.skincare || []).map(p => normalizeProduct(p, 'skincare')).filter(p => p !== null);
        console.log(`Found ${skincareProducts.length} skincare products`);
        return skincareProducts;
      
      case 'stomach':
        // Flatten all stomach subcategories
        const stomachProducts = [];
        if (products.stomach?.product) {
          Object.keys(products.stomach.product).forEach(subCat => {
            console.log(`Processing stomach subcategory: ${subCat}`);
            if (Array.isArray(products.stomach.product[subCat])) {
              products.stomach.product[subCat].forEach(p => {
                const normalized = normalizeProduct(p, 'stomach', subCat);
                if (normalized) stomachProducts.push(normalized);
              });
            }
          });
        }
        console.log(`Found ${stomachProducts.length} stomach products`);
        return stomachProducts;
      
      default:
        console.log(`Category ${category} not found`);
        return [];
    }
  } catch (error) {
    console.error(`Error getting products for category ${category}:`, error);
    return [];
  }
};

// Get all products (for "all products" view)
const getAllProducts = () => {
  console.log('Getting all products');
  const allProducts = [];
  
  // Get products from each category
  const categories = ['baby', 'covid', 'diabetes', 'cardiology', 'liver', 'oral', 'skincare', 'stomach'];
  
  categories.forEach(category => {
    const categoryProds = getCategoryProducts(category);
    allProducts.push(...categoryProds);
  });
  
  console.log(`Total products found: ${allProducts.length}`);
  return allProducts;
};

// Find product by ID - SIMPLIFIED
const findProductById = (productId) => {
  console.log(`Looking for product with ID: ${productId}`);
  
  const allProducts = getAllProducts();
  
  // Try to find by ID
  const product = allProducts.find(p => p && p.id === productId);
  
  if (product) {
    console.log('✅ Product found:', product.name);
    return product;
  }
  
  console.log('❌ Product not found');
  return null;
};

// Async thunks
export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (category) => {
    try {
      console.log(`fetchProductsByCategory called with: ${category}`);
      let productsList;
      if (category === 'all' || !category) {
        productsList = getAllProducts();
      } else {
        productsList = getCategoryProducts(category);
      }
      console.log(`Returning ${productsList.length} products`);
      return productsList;
    } catch (error) {
      console.error('Error in fetchProductsByCategory:', error);
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (productId) => {
    try {
      console.log(`fetchProductById called with ID: ${productId}`);
      const product = findProductById(productId);
      
      if (!product) {
        throw new Error(`Product with ID ${productId} not found`);
      }
      
      return product;
    } catch (error) {
      console.error('Error in fetchProductById:', error);
      throw new Error(`Failed to fetch product: ${error.message}`);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    clearFilteredProducts: (state) => {
      state.filteredProducts = [];
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch products by category
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredProducts = action.payload;
        console.log(`Products loaded: ${action.payload.length}`);
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.filteredProducts = [];
        console.error('Failed to fetch products:', action.error.message);
      })
      // Fetch single product by ID
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
        console.log('✅ Product loaded:', action.payload?.name);
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.selectedProduct = null;
        console.error('❌ Failed to fetch product:', action.error.message);
      });
  }
});

export const { 
  setSelectedCategory, 
  setSortBy, 
  clearSelectedProduct,
  clearFilteredProducts
} = productSlice.actions;

export default productSlice.reducer;