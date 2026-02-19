import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import categories from "../data/categories.js";

import { 
  FaShieldAlt, 
  FaCapsules, 
  FaTruck, 
  FaHandHoldingMedical,
  FaRegHeart,
  FaShoppingCart,
  FaFileMedical,
  FaCheckCircle,
  FaFilePrescription,
  FaPlus,
  FaMinus,
  FaTimes,
  FaTrashAlt,
  FaMobileAlt,
  FaGooglePlay,
  FaApple,
  FaCheck,
  FaSearch,
  FaBars,
  FaUser
} from "react-icons/fa";
import {
    FaRegClock,
    FaBalanceScale,
    FaLaptopMedical,
    FaHeart,
    FaTags,
    FaHome
} from 'react-icons/fa';
import { MdLocalPharmacy, MdLocationOn } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";

const LandingPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Deliver to");
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [uploadedPrescription, setUploadedPrescription] = useState(null);
  const [showScan, setShowScan] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const popularItems = [
    { id: 1, name: "Paracetamol 650mg", mrp: "₹30", price: "₹28", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKy95SWXBLbsWHBUSFqZxML9vh9G72J8_hA&s", badge: "16% OFF", prescription: false },
    { id: 2, name: "M Torr 800 Capsule 10", mrp: "₹324.79", price: "₹259.83", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwb8u_E-sV8Vno520RhiBrQT17v7FF7ImIpg&s", badge: "20% OFF", prescription: true },
    { id: 3, name: "A To Z Woman Capsule 15", mrp: "₹383.52", price: "₹306.82", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mnv1fq3Ckz9uR83cAq4DoCTGy2AdgJ9mpw&s", badge: "20% OFF", prescription: false },
    { id: 4, name: "Naturolax Powder 300gm", mrp: "₹486", price: "₹403.87", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5bOvFV7BW4ffSZ3-Bnqw_mKT24STHGq43g&s", badge: "17% OFF", prescription: true },
    { id: 5, name: "Reffron Tablet 15", mrp: "₹347.03", price: "₹277.62", img: "https://via.placeholder.com/300x300?text=Medicine", badge: "20% OFF", prescription: true }
  ];

  const faqs = [
    { q: "Do you provide express delivery for medicines?", a: "Yes! DP  Pharmacy offers fast doorstep delivery for all medicines and wellness items." },
    { q: "Is a prescription required for ordering medicines?", a: "Prescription is required only for prescription drugs. OTC and wellness items do not require one." },
    { q: "Do you sell genuine and verified products?", a: "Absolutely. We source directly from licensed distributors and verified pharmaceutical companies." },
    { q: "Can I track my order in real-time?", a: "Yes, once your order is confirmed, you can track it from the Orders section." },
    { q: "Do you offer 24/7 customer support?", a: "Our support team is available from 8 AM – 11 PM daily to assist you." }
  ];

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateCartQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const toggleWishlist = (item) => {
    setWishlist(prev => {
      const isInWishlist = prev.find(wishItem => wishItem.id === item.id);
      if (isInWishlist) {
        return prev.filter(wishItem => wishItem.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(category.route);
  };

  const handleUploadPrescription = () => {
    setUploadedPrescription({
      name: "prescription.jpg",
      date: new Date().toLocaleDateString()
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedPrescription({
        name: file.name,
        date: new Date().toLocaleDateString()
      });
    }
  };

  const getCartTotal = () => {
    if (!cart || cart.length === 0) return 0;
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace('₹', '').replace(',', ''));
      return total + (price * (item.quantity || 1));
    }, 0);
  };

  const ArticleCard = ({ article }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <img 
          src={article.img} 
          alt={article.title} 
          className="w-full h-40 sm:h-48 object-cover" 
        />
        <div className="p-4 sm:p-5">
          <h3 className="font-bold text-gray-800 mb-3 text-base sm:text-lg">{article.title}</h3>
          
          {isExpanded && (
            <div className="mb-4">
              <ul className="space-y-2 text-sm text-gray-600">
                {article.content.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span className="text-xs sm:text-sm">{article.readTime} read</span>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 font-semibold hover:text-blue-700 transition text-xs sm:text-sm"
            >
              {isExpanded ? "Show Less" : "Read →"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const healthArticles = [
    { 
      title: "5 Ways to Boost Immunity", 
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop", 
      readTime: "3 min",
      content: [
        "1. Eat a balanced diet rich in fruits and vegetables",
        "2. Get adequate sleep (7-9 hours per night)",
        "3. Exercise regularly to boost circulation",
        "4. Stay hydrated with plenty of water",
        "5. Manage stress through meditation or yoga"
      ]
    },
    { 
      title: "Managing Diabetes Naturally", 
      img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&h=250&fit=crop", 
      readTime: "5 min",
      content: [
        "• Monitor blood sugar levels regularly",
        "• Follow a low-glycemic index diet",
        "• Include fiber-rich foods in your meals",
        "• Engage in daily physical activity",
        "• Maintain a healthy weight",
        "• Get regular health check-ups"
      ]
    },
    { 
      title: "Seasonal Allergy Relief", 
      img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop", 
      readTime: "4 min",
      content: [
        "Keep windows closed during high pollen days",
        "Use air purifiers with HEPA filters",
        "Shower after being outdoors",
        "Wear sunglasses to protect eyes",
        "Consider over-the-counter antihistamines",
        "Consult doctor for persistent symptoms"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Adjust content padding for mobile header */}
      <div className="">
        {/* ====== HERO SECTION ====== */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-8 md:p-12 mb-8 sm:mb-10 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full -translate-y-16 sm:-translate-y-32 translate-x-16 sm:translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-white rounded-full translate-y-12 sm:translate-y-24 -translate-x-12 sm:-translate-x-24"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <motion.div 
                className="flex flex-col gap-4 sm:gap-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Health, <br />
                  <span className="text-blue-200">Our Priority</span>
                </h1>
                <p className="text-blue-100 text-sm sm:text-lg md:text-xl">Fast, reliable medicine delivery with expert care</p>

                {/* Hide search on mobile since we have it in header */}
                <div className="hidden sm:flex flex-col gap-4">
                  <div className="flex-1 min-w-0">
                    <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
                      <input 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm outline-none w-full text-gray-800" 
                        placeholder="Search for medicines & healthcare products" 
                      />
                      <button 
                        type="submit"
                        className="bg-blue-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full m-1 flex-shrink-0 hover:bg-blue-400 transition text-xs sm:text-sm flex items-center gap-2"
                      >
                        <FaSearch />
                        <span>Search</span>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-4">
                  {[
                    { icon: FaShieldAlt, text: "100% Genuine" },
                    { icon: FaCapsules, text: "Expert Advice" },
                    { icon: FaTruck, text: "Fast Delivery" },
                    { icon: FaHandHoldingMedical, text: "Pharma Care" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <feature.icon />
                      <span>{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="flex justify-center mt-6 sm:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative w-full max-w-md mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1580281657529-557a6abb6387?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBoYXJtYWNpc3R8ZW58MHx8MHx8fDA%3D" 
                    alt="Healthcare Professional" 
                    className="relative w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl max-w-full" 
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          {/* ====== ANAND PHARMA VISION SECTION ====== */}
          <section className="mb-8 sm:mb-12 bg-blue-50 rounded-xl sm:rounded-xl p-4 sm:p-8 shadow-sm border border-gray-200">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <MdLocalPharmacy className="text-2xl sm:text-3xl text-blue-600" />
                <h2 className="text-xl sm:text-3xl font-bold text-gray-800">About DP  Pharma</h2>
              </div>
              <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-lg mb-3 sm:mb-4">
                At DP  Pharma, our vision is to make healthcare truly accessible where
                genuine medicines reach every doorstep in just 15 to 30 minutes. We believe that
                when it comes to health, every moment matters, and timely access to medication
                should never be a privilege, but a right.
              </p>
              <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-lg mb-3 sm:mb-4">
                Our innovative platform empowers users with real choices, offering equivalent
                medicines with the same formula across multiple trusted brands, complete with
                transparent pricing. This ensures that every customer can choose confidently
                balancing quality, affordability, and trust.
              </p>

              <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-lg mb-3 sm:mb-4">
                By combining advanced technology, licensed pharmacy expertise, and intelligent
                logistics, we are building a healthcare ecosystem that's faster, safer, and more
                reliable than ever before.
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-4 sm:p-6 text-white mt-4">
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center justify-center gap-2">
                  <FaHeart className="text-white" />
                  <span>Our Commitment</span>
                </h4>
                <p className="text-sm sm:text-base leading-relaxed">
                  At DP  Pharma, we don't just deliver medicines we deliver trust,
                  transparency, and timely care to every home, every time.
                </p>
              </div>
            </div>
          </section>

          {/* ====== CATEGORIES ====== */}
          <section className="mb-8 sm:mb-14">
            <div className="flex items-center justify-between mb-4 sm:mb-8">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">Shop by Categories</h2>
              <button 
                className="text-blue-600 hover:underline font-medium text-xs sm:text-base"
                onClick={() => navigate('/products')}
              >
                View all
              </button>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  className={`p-2 sm:p-4 rounded-lg sm:rounded-2xl flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    selectedCategory?.id === category.id 
                      ? 'bg-blue-100 border-2 border-blue-500 shadow-lg' 
                      : `${category.color} hover:bg-blue-50`
                  }`}
                  onClick={() => handleCategoryClick(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-full h-16 sm:h-24 md:h-32 mb-1 sm:mb-4 overflow-hidden rounded-lg sm:rounded-xl">
                    <img 
                      src={category.img} 
                      alt={category.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 max-w-full" 
                    />
                  </div>
                  <div className="text-center font-medium text-gray-700 text-xs sm:text-sm md:text-base line-clamp-2">
                    {category.name}
                  </div>
                  {selectedCategory?.id === category.id && (
                    <motion.div 
                      className="mt-1 text-xs text-blue-600 font-semibold flex items-center gap-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <FaCheck />
                      <span className="hidden sm:inline">Selected</span>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </section>

          {/* ====== UPLOAD PRESCRIPTION ====== */}
          <section className="mb-8 sm:mb-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-white overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Upload Prescription</h2>
                <p className="text-green-100 mb-3 sm:mb-6 text-sm sm:text-base md:text-lg">Get your prescribed medicines delivered safely to your doorstep</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <button 
                    className="bg-white text-green-600 px-3 sm:px-6 md:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 text-xs sm:text-base"
                    onClick={handleUploadPrescription}
                  >
                    <FaFileMedical />
                    <span>Upload Now</span>
                  </button>
                  <button className="border border-white text-white px-3 sm:px-6 md:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition text-xs sm:text-base">
                    Learn More
                  </button>
                </div>
                {uploadedPrescription && (
                  <motion.div 
                    className="mt-2 sm:mt-4 p-2 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <p className="text-white text-xs sm:text-sm flex items-center gap-2">
                      <FaCheckCircle />
                      <span>Prescription uploaded: {uploadedPrescription.name}</span>
                    </p>
                    <p className="text-green-100 text-xs">Uploaded on {uploadedPrescription.date}</p>
                  </motion.div>
                )}
              </motion.div>
              <motion.div 
                className="flex justify-center mt-4 sm:mt-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl w-full max-w-xs">
                  <div className="border-2 border-dashed border-white/30 rounded-lg sm:rounded-xl p-3 sm:p-6 md:p-8 text-center">
                    <div className="text-3xl sm:text-5xl mb-2 sm:mb-4 flex justify-center">
                      <FaFilePrescription />
                    </div>
                    <p className="text-white/80 text-xs sm:text-sm mb-2 sm:mb-4">Upload prescription image</p>
                    <input 
                      type="file" 
                      id="prescription-upload"
                      className="hidden"
                      onChange={handleFileUpload}
                      accept="image/*"
                    />
                    <label 
                      htmlFor="prescription-upload"
                      className="bg-white text-green-600 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer inline-block text-xs sm:text-sm"
                    >
                      Browse Files
                    </label>
                    {uploadedPrescription && (
                      <p className="mt-1 sm:mt-3 text-xs text-green-200">File selected: {uploadedPrescription.name}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ====== POPULAR ITEMS ====== */}
          <section className="mb-8 sm:mb-14">
            <div className="flex items-center justify-between mb-4 sm:mb-8">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">Popular Items</h2>
              <button 
                className="text-blue-600 hover:underline font-medium text-xs sm:text-base"
                onClick={() => navigate('/products')}
              >
                View all
              </button>
            </div>

            <div className="relative">
              <div className="flex gap-3 sm:gap-6 overflow-x-auto pb-4 sm:pb-6 scrollbar-hide px-1 sm:px-2">
                {popularItems.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    className="min-w-[160px] sm:min-w-[280px] bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-6 flex-shrink-0 border border-gray-100 hover:shadow-lg transition-all duration-300 relative"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button 
                      onClick={() => toggleWishlist(item)}
                      className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 p-1 sm:p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-red-50 transition"
                    >
                      {wishlist.find(wishItem => wishItem.id === item.id) ? 
                        <FaHeart className="text-red-500 text-xs sm:text-base" /> : 
                        <FaRegHeart className="text-gray-400 text-xs sm:text-base" />
                      }
                    </button>

                    <div className="relative mb-3 sm:mb-5">
                      <div className="absolute top-1 sm:top-3 left-1 sm:left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        {item.badge}
                      </div>
                      {item.prescription && (
                        <div className="absolute top-1 sm:top-3 right-1 sm:right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <FaFilePrescription className="text-xs" />
                          <span className="hidden sm:inline">Prescription</span>
                          <span className="sm:hidden">Rx</span>
                        </div>
                      )}
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="h-24 sm:h-40 w-full object-contain rounded-lg sm:rounded-xl bg-gray-50 p-2 sm:p-4 max-w-full" 
                      />
                    </div>
                    
                    <h3 className="text-xs sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3 line-clamp-2 min-h-[2.5rem] leading-tight">
                      {item.name}
                    </h3>
                    
                    <div className="mb-3 sm:mb-5">
                      <div className="text-gray-400 text-xs sm:text-sm line-through">{item.mrp}</div>
                      <div className="text-sm sm:text-xl font-bold text-gray-800">{item.price}</div>
                    </div>
                    
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-full bg-blue-600 text-white border border-blue-600 rounded-lg sm:rounded-xl py-2 sm:py-3 text-xs sm:text-sm font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-1 sm:gap-2"
                    >
                      <FaShoppingCart className="text-xs sm:text-base" />
                      <span>Add to Cart</span>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ====== WHY CHOOSE US ====== */}
          <section className="mb-8 sm:mb-14 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-sm overflow-hidden">
              <div className="text-center mb-6 sm:mb-12">
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">Why Choose DP  Pharmacy?</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-base">We're committed to providing the best healthcare experience with genuine products and expert service</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
                  {[
                      {
                          icon: <FaRegClock className="w-5 h-5 sm:w-8 sm:h-8" />,
                          title: "15-30 Minute Delivery",
                          desc: "Genuine medicines at your doorstep in just 15 to 30 minutes"
                      },
                      {
                          icon: <FaBalanceScale className="w-5 h-5 sm:w-8 sm:h-8" />,
                          title: "Transparent Choices",
                          desc: "Equivalent medicines with same formula across trusted brands"
                      },
                      {
                          icon: <FaLaptopMedical className="w-5 h-5 sm:w-8 sm:h-8" />,
                          title: "Advanced Technology",
                          desc: "Combining tech, pharmacy expertise & intelligent logistics"
                      },
                      {
                          icon: <FaHeart className="w-5 h-5 sm:w-8 sm:h-8" />,
                          title: "Trust & Care",
                          desc: "We deliver trust, transparency and timely care to every home"
                      },
                      {
                          icon: <FaHandHoldingMedical className="w-5 h-5 sm:w-8 sm:h-8" />,
                          title: "Accessible Healthcare",
                          desc: "Timely access to medication is a right, not a privilege"
                      },
                      {
                          icon: <FaTags className="w-5 h-5 sm:w-8 sm:h-8" />,
                          title: "Fair Pricing",
                          desc: "Complete transparent pricing across all medicine brands"
                      },
                      {
                          icon: <FaShieldAlt className="w-5 h-5 sm:w-8 sm:h-8" />,
                          title: "Genuine Products",
                          desc: "100% licensed and verified pharmaceutical products"
                      },
                      {
                          icon: <FaHome className="w-5 h-5 sm:w-8 sm:h-8" />,
                          title: "Doorstep Service",
                          desc: "Building a faster, safer healthcare ecosystem for all"
                      }
                  ].map((item, idx) => (
                      <motion.div
                          key={idx}
                          className="text-center p-3 sm:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-md"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                      >
                          <div className="text-2xl sm:text-4xl mb-2 sm:mb-4 text-blue-600 flex items-center justify-center">
                              {item.icon}
                          </div>
                          <h3 className="font-bold text-gray-800 mb-1 sm:mb-3 text-xs sm:text-lg">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </motion.div>
                  ))}
              </div>
          </section>

          {/* ====== HEALTH ARTICLES ====== */}
          <section className="mb-8 sm:mb-14">
            <div className="flex items-center justify-between mb-4 sm:mb-8">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">Health & Wellness Tips</h2>
              <button className="text-blue-600 hover:underline font-medium text-xs sm:text-base">
                View all articles
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {healthArticles.map((article, idx) => (
                <ArticleCard key={idx} article={article} />
              ))}
            </div>
          </section>

          {/* ====== FAQ ====== */}
          <section className="mb-8 sm:mb-14">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-2 sm:space-y-4 max-w-4xl mx-auto px-2">
              {faqs.map((item, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 rounded-lg sm:rounded-2xl p-3 sm:p-6 bg-white shadow-sm cursor-pointer hover:shadow-md transition-all duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 pr-3 sm:pr-4">{item.q}</h3>
                    <span className="text-base sm:text-xl text-gray-600 font-medium flex-shrink-0">
                      {openFaq === index ? 
                        <FaMinus /> : 
                        <FaPlus />
                      }
                    </span>
                  </div>

                  {openFaq === index && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-2 sm:mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-2 sm:pt-4 text-xs sm:text-sm"
                    >
                      {item.a}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* ====== DOWNLOAD APP ====== */}
          <section className="mb-8 sm:mb-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-white overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Get the App</h2>
                <p className="mb-3 sm:mb-6 text-blue-100 text-sm sm:text-base md:text-lg">Order medicines faster with our mobile app. Get exclusive app-only discounts!</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <button className="bg-white text-blue-600 px-3 sm:px-6 md:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <FaGooglePlay className="text-lg sm:text-2xl" />
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-sm sm:text-lg font-bold">Google Play</div>
                    </div>
                  </button>
                  <button className="bg-white text-blue-600 px-3 sm:px-6 md:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <FaApple className="text-lg sm:text-2xl" />
                    <div className="text-left">
                      <div className="text-xs">Download on</div>
                      <div className="text-sm sm:text-lg font-bold">App Store</div>
                    </div>
                  </button>
                </div>
              </motion.div>
              <motion.div 
                className="flex justify-center mt-4 sm:mt-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white/10 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm max-w-full">
                  <FaMobileAlt className="text-white text-6xl sm:text-9xl mx-auto" />
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>

      {/* ====== MOBILE CART SIDEBAR ====== */}
      {showCart && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setShowCart(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 h-3/4 bg-white rounded-t-2xl z-50 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold text-gray-800">Your Cart ({cart.length})</h3>
              <button 
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {(!cart || cart.length === 0) ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-3">
                    <FaShoppingCart className="text-gray-300" />
                  </div>
                  <h4 className="text-gray-600 mb-1">Your cart is empty</h4>
                  <p className="text-gray-500 text-sm">Add some medicines to get started</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-14 h-14 object-contain rounded-lg bg-gray-50 max-w-full"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-xs line-clamp-2">{item.name}</h4>
                        <p className="text-green-600 font-bold text-sm">{item.price}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <button 
                            onClick={() => updateCartQuantity(item.id, (item.quantity || 1) - 1)}
                            className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center"
                          >
                            <FaMinus className="text-xs" />
                          </button>
                          <span className="w-6 text-center text-sm">{item.quantity || 1}</span>
                          <button 
                            onClick={() => updateCartQuantity(item.id, (item.quantity || 1) + 1)}
                            className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center"
                          >
                            <FaPlus className="text-xs" />
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart && cart.length > 0 && (
              <div className="border-t p-4 space-y-3">
                <div className="flex justify-between items-center text-base font-semibold">
                  <span>Total:</span>
                  <span>₹{getCartTotal()}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Proceed to Checkout
                </button>
                <button 
                  onClick={() => setShowCart(false)}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* ====== MOBILE FLOATING CART BUTTON ====== */}
      {cart.length > 0 && !showCart && (
        <button 
          onClick={() => setShowCart(true)}
          className="lg:hidden fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-40 flex items-center gap-2"
        >
          <FaShoppingCart />
          <span className="text-sm">₹{getCartTotal()}</span>
        </button>
      )}
    </div>
  )
}

export default LandingPage