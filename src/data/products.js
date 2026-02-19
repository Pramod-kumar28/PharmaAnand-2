// const products = [

//   // Baby Care Products
//   {
//     id: 1,
//     name: "Gentle Baby Diaper Pack",
//     category: "baby-care",
//     brand: "Huggies",
//     price: 499,
//     originalPrice: 699,
//     savings: "29% OFF",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKy95SWXBLbsWHBUSFqZxML9vh9G72J8_hA&s",
//     description: "Keep your baby dry and happy all day with Huggies Gentle Baby Diapers. Soft, breathable, and super absorbent for up to 12 hours of protection.",
//     keyFeatures: [
//       "Ultra-soft and breathable material",
//       "Leak-lock technology",
//       "Hypoallergenic and dermatologically tested"
//     ],
//     prescriptionRequired: false,
//     rating: 4.5
//   },
//   {
//     id: 2,
//     name: "Baby Moisturizing Lotion",
//     category: "baby-care",
//     brand: "Johnson's",
//     price: 299,
//     originalPrice: 399,
//     savings: "25% OFF",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mnv1fq3Ckz9uR83cAq4DoCTGy2AdgJ9mpw&s",
//     description: "Gentle, non-sticky lotion to keep your baby's skin soft, smooth, and hydrated all day long.",
//     keyFeatures: [
//       "Moisturizes and softens delicate skin",
//       "Non-greasy and quick-absorbing",
//       "Dermatologically tested"
//     ],
//     prescriptionRequired: false,
//     rating: 4.3
//   },
//   {
//     id: 3,
//     name: "Paracetamol 650mg",
//     category: "baby-care",
//     brand: "Generic",
//     price: 28,
//     originalPrice: 30,
//     savings: "7% OFF",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKy95SWXBLbsWHBUSFqZxML9vh9G72J8_hA&s",
//     description: "Relieves fever and mild to moderate pain in children.",
//     keyFeatures: [
//       "Fever reducer",
//       "Pain reliever",
//       "Safe for children"
//     ],
//     prescriptionRequired: false,
//     rating: 4.7
//   },

//   // Heart Care Products
//   {
//     id: 4,
//     name: "Atorvastatin 20mg",
//     category: "cardiac-care",
//     brand: "Sun Pharma",
//     price: 450,
//     originalPrice: 550,
//     savings: "18% OFF",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlk2IqgXndDxGyo5oS_MvWB-kpo5_EihTxyw&s",
//     description: "Lowers cholesterol and reduces risk of heart attack and stroke.",
//     keyFeatures: [
//       "Lowers LDL cholesterol",
//       "Reduces cardiovascular risk",
//       "Once daily dosage"
//     ],
//     prescriptionRequired: true,
//     rating: 4.6
//   },
//   {
//     id: 5,
//     name: "Aspirin 75mg",
//     category: "cardiac-care",
//     brand: "Bayer",
//     price: 120,
//     originalPrice: 150,
//     savings: "20% OFF",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwb8u_E-sV8Vno520RhiBrQT17v7FF7ImIpg&s",
//     description: "Blood thinner to prevent heart attacks and strokes.",
//     keyFeatures: [
//       "Prevents blood clots",
//       "Reduces heart attack risk",
//       "Low dose aspirin"
//     ],
//     prescriptionRequired: true,
//     rating: 4.5
//   },

//   // Stomach Care Products
//   {
//     id: 6,
//     name: "Digene Acidity & Gas Relief Tablets",
//     category: "stomach-care",
//     brand: "Digene",
//     price: 85,
//     originalPrice: 100,
//     savings: "15% OFF",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VkEI9N23Td-O22z6Hwq4vG55-W84VSGddQ&s",
//     description: "Provides instant relief from acidity, heartburn, and gas.",
//     keyFeatures: [
//       "Instant relief from acidity",
//       "Relieves heartburn",
//       "Reduces gas formation"
//     ],
//     prescriptionRequired: false,
//     rating: 4.4
//   },
//   {
//     id: 7,
//     name: "Metformin Hydrochloride Tablets",
//     category: "diabetes-care",
//     brand: "Sun Pharma",
//     price: 250,
//     originalPrice: 300,
//     savings: "17% OFF",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlk2IqgXndDxGyo5oS_MvWB-kpo5_EihTxyw&s",
//     description: "Controls blood sugar levels in type 2 diabetes.",
//     keyFeatures: [
//       "Controls blood sugar",
//       "Improves insulin sensitivity",
//       "Twice daily dosage"
//     ],
//     prescriptionRequired: true,
//     rating: 4.6
//   },

//   // Add more products for other categories...
// ];

// export default products;































// // products.js - Consolidated Products Data

// const products = {
//     baby: [
//         {
//             "id": 1,
//             "name": "Gentle Baby Diaper Pack",
//             "category": "Diapers",
//             "brand": "Huggies",
//             "priceNumeric": 499,
//             "originalPriceNumeric": 699,
//             "savings": "29%",
//             "image": "/assets/Babyimg/huggies.jpg",
//             "description": "Keep your baby dry and happy all day with Huggies Gentle Baby Diapers. Soft, breathable, and super absorbent for up to 12 hours of protection.",
//             "keyFeatures": [
//                 "Ultra-soft and breathable material for sensitive skin",
//                 "Leak-lock technology keeps baby dry for up to 12 hours",
//                 "Hypoallergenic and dermatologically tested"
//             ],
//             "howToUse": "Change diapers every 3–4 hours or as needed. Dispose of used diapers properly.",
//             "ingredients": "Cotton blend, absorbent polymers",
//             "warnings": "For external use only. Keep out of reach of children."
//         },
//         {
//             "id": 2,
//             "name": "Baby Moisturizing Lotion",
//             "category": "Lotion",
//             "brand": "Johnson's",
//             "priceNumeric": 299,
//             "originalPriceNumeric": 399,
//             "savings": "25%",
//             "image": "/assets/Babyimg/sebamed.jpg",
//             "description": "Gentle, non-sticky lotion to keep your baby's skin soft, smooth, and hydrated all day long.",
//             "keyFeatures": [
//                 "Moisturizes and softens delicate baby skin",
//                 "Non-greasy and quick-absorbing",
//                 "Dermatologically tested for sensitive skin"
//             ],
//             "howToUse": "Apply a small amount to baby's body and massage gently until fully absorbed.",
//             "ingredients": "Water, Aloe Vera Extract, Vitamin E, Glycerin",
//             "warnings": "For external use only. Avoid contact with eyes."
//         },
//         {
//             "id": 3,
//             "name": "Baby Powder",
//             "category": "Powder",
//             "brand": "Pampers",
//             "priceNumeric": 199,
//             "originalPriceNumeric": 250,
//             "savings": "20%",
//             "image": "/assets/Babyimg/powder.jpg",
//             "description": "Keep your baby's skin fresh and dry throughout the day with Pampers Baby Powder.",
//             "keyFeatures": [
//                 "Absorbs moisture and prevents rashes",
//                 "Light fragrance suitable for babies",
//                 "Soft and smooth texture for delicate skin"
//             ],
//             "howToUse": "Apply gently on clean, dry skin. Avoid inhalation.",
//             "ingredients": "Talc, Cornstarch, Fragrance",
//             "warnings": "For external use only. Keep away from nose and mouth."
//         },
//         {
//             "id": 4,
//             "name": "Baby Shampoo",
//             "category": "Shampoo",
//             "brand": "Mamaearth",
//             "priceNumeric": 349,
//             "originalPriceNumeric": 450,
//             "savings": "22%",
//             "image": "/assets/Babyimg/shampoo.jpg",
//             "description": "Tear-free shampoo that gently cleanses hair and scalp while keeping baby's hair soft, shiny, and tangle-free.",
//             "keyFeatures": [
//                 "Tear-free formula for gentle cleansing",
//                 "Moisturizes scalp and hair",
//                 "Free from sulfates and parabens"
//             ],
//             "howToUse": "Apply on wet hair, lather gently, and rinse thoroughly.",
//             "ingredients": "Water, Aloe Vera Extract, Coconut Extract, Mild Surfactants",
//             "warnings": "For external use only. Avoid contact with eyes."
//         },
//         {
//             "id": 5,
//             "name": "Diaper Rash Cream",
//             "category": "Ointment",
//             "brand": "Sebamed",
//             "priceNumeric": 259,
//             "originalPriceNumeric": 320,
//             "savings": "19%",
//             "image": "/assets/Babyimg/rashcream.jpg",
//             "description": "Protect and soothe your baby's delicate skin from diaper rashes with Sebamed Diaper Rash Cream.",
//             "keyFeatures": [
//                 "Forms a protective barrier against moisture",
//                 "Soothes irritated skin with chamomile",
//                 "Dermatologically tested for sensitive skin"
//             ],
//             "howToUse": "Apply a thin layer on clean, dry skin during every diaper change.",
//             "ingredients": "Zinc Oxide, Chamomile Extract, Petrolatum",
//             "warnings": "For external use only. Avoid contact with eyes."
//         },
//         {
//             "id": 6,
//             "name": "Baby Wipes Pack",
//             "category": "Wipes",
//             "brand": "Himalaya Babycare",
//             "priceNumeric": 149,
//             "originalPriceNumeric": 200,
//             "savings": "26%",
//             "image": "/assets/Babyimg/babywipes.jpg",
//             "description": "Gentle, soft, and alcohol-free wipes to clean and refresh your baby's delicate skin anytime.",
//             "keyFeatures": [
//                 "Soft and gentle on delicate skin",
//                 "Moisturizes and cleans effectively",
//                 "Alcohol-free and hypoallergenic"
//             ],
//             "howToUse": "Wipe the baby's skin gently as needed. Dispose after single use.",
//             "ingredients": "Water, Aloe Vera Extract, Vitamin E, Mild Cleansing Agents",
//             "warnings": "For external use only. Keep out of reach of children."
//         },
//         {
//             "id": 7,
//             "name": "Baby Soap",
//             "category": "Soap",
//             "brand": "Dove Baby",
//             "priceNumeric": 99,
//             "originalPriceNumeric": 140,
//             "savings": "29%",
//             "image": "/assets/Babyimg/soap.jpg",
//             "description": "Mild, moisturizing, and gentle soap for newborns to keep their skin soft and hydrated.",
//             "keyFeatures": [
//                 "Gentle cleansing without drying",
//                 "Moisturizes baby's delicate skin",
//                 "Dermatologically tested and hypoallergenic"
//             ],
//             "howToUse": "Lather with water and apply gently on baby's body, then rinse.",
//             "ingredients": "Glycerin, Natural Oils, Mild Surfactants",
//             "warnings": "For external use only. Avoid contact with eyes."
//         },
//         {
//             "id": 8,
//             "name": "Baby Oil",
//             "category": "Oil",
//             "brand": "Johnson's",
//             "priceNumeric": 179,
//             "originalPriceNumeric": 230,
//             "savings": "22%",
//             "image": "/assets/Babyimg/oil.jpg",
//             "description": "Lightweight oil to nourish, hydrate, and massage your baby's delicate skin.",
//             "keyFeatures": [
//                 "Lightweight oil for gentle massage",
//                 "Keeps skin soft and hydrated",
//                 "Dermatologically tested"
//             ],
//             "howToUse": "Apply a few drops on palms and massage baby's skin gently.",
//             "ingredients": "Mineral Oil, Vitamin E",
//             "warnings": "For external use only."
//         },
//         {
//             "id": 9,
//             "name": "Baby Bath Gel",
//             "category": "Bath",
//             "brand": "Mamaearth",
//             "priceNumeric": 269,
//             "originalPriceNumeric": 350,
//             "savings": "23%",
//             "image": "/assets/Babyimg/bathgel.jpg",
//             "description": "Mild, tear-free body wash to cleanse and hydrate your baby's delicate skin.",
//             "keyFeatures": [
//                 "Mild cleansing formula",
//                 "Moisturizes and soothes skin",
//                 "Tear-free and pH balanced"
//             ],
//             "howToUse": "Apply on wet skin, lather gently, and rinse thoroughly.",
//             "ingredients": "Water, Aloe Vera Extract, Calendula Extract, Mild Surfactants",
//             "warnings": "For external use only. Avoid contact with eyes."
//         },
//         {
//             "id": 10,
//             "name": "Soothing Baby Cream",
//             "category": "Cream",
//             "brand": "Aveeno Baby",
//             "priceNumeric": 399,
//             "originalPriceNumeric": 500,
//             "savings": "20%",
//             "image": "/assets/Babyimg/aveeno.jpg",
//             "description": "Hydrating and soothing cream to protect your baby's skin from dryness and irritation.",
//             "keyFeatures": [
//                 "Hydrates and soothes dry skin",
//                 "Fragrance-free and gentle",
//                 "Safe for daily use on baby skin"
//             ],
//             "howToUse": "Apply evenly on baby's body and massage gently until absorbed.",
//             "ingredients": "Oat Extract, Glycerin, Emollients",
//             "warnings": "For external use only. Avoid contact with eyes."
//         }
//     ],

//     covid: [
//         {
//             "id": 11,
//             "name": "N95 Respirator Mask",
//             "category": "Face Mask",
//             "brand": "3M",
//             "priceNumeric": 249,
//             "originalPriceNumeric": 299,
//             "savings": "17%",
//             "image": "/assets/Covidimg/n95-mask.jpg",
//             "description": "NIOSH-approved N95 respirator mask providing 95% filtration efficiency against airborne particles.",
//             "keyFeatures": [
//                 "NIOSH approved",
//                 "95% filtration efficiency",
//                 "Adjustable nose clip",
//                 "Latex-free"
//             ],
//             "howToUse": "Place over nose and mouth, secure straps, mold nose clip for tight seal.",
//             "ingredients": "Non-woven polypropylene, nose foam, elastic straps",
//             "warnings": "Single-use only. Do not reuse. Discard if damaged or soiled."
//         },
//         {
//             "id": 12,
//             "name": "3-Ply Surgical Mask (Pack of 50)",
//             "category": "Face Mask",
//             "brand": "Honeywell",
//             "priceNumeric": 299,
//             "originalPriceNumeric": 399,
//             "savings": "25%",
//             "image": "/assets/Covidimg/surgical-mask.jpg",
//             "description": "Disposable 3-ply surgical masks with melt-blown filter layer for bacterial filtration.",
//             "keyFeatures": [
//                 "3-layer protection",
//                 "Fluid resistant",
//                 "Comfortable ear loops",
//                 "Bacterial filtration >95%"
//             ],
//             "howToUse": "Wear with blue side facing out. Pinch nose bridge for secure fit.",
//             "ingredients": "Non-woven fabric, melt-blown polypropylene, nose wire",
//             "warnings": "Dispose after single use. Do not wash."
//         },
//         {
//             "id": 13,
//             "name": "Hand Sanitizer Gel (500ml)",
//             "category": "Sanitizer",
//             "brand": "Dettol",
//             "priceNumeric": 199,
//             "originalPriceNumeric": 249,
//             "savings": "20%",
//             "image": "/assets/Covidimg/hand-sanitizer.jpg",
//             "description": "Alcohol-based sanitizer gel with 70% ethanol, kills 99.9% germs instantly.",
//             "keyFeatures": [
//                 "70% alcohol content",
//                 "Kills 99.9% germs",
//                 "Moisturizing formula",
//                 "Quick drying"
//             ],
//             "howToUse": "Apply palm-sized amount and rub hands together for 20 seconds.",
//             "ingredients": "Ethanol 70%, Glycerin, Hydrogen Peroxide",
//             "warnings": "Flammable. Keep away from fire. For external use only."
//         },
//         {
//             "id": 14,
//             "name": "Digital Infrared Thermometer",
//             "category": "Thermometer",
//             "brand": "Omron",
//             "priceNumeric": 799,
//             "originalPriceNumeric": 999,
//             "savings": "20%",
//             "image": "/assets/Covidimg/thermometer.jpg",
//             "description": "Non-contact forehead thermometer with instant reading and fever alarm.",
//             "keyFeatures": [
//                 "Non-contact measurement",
//                 "1-second reading",
//                 "Fever alarm",
//                 "Memory function"
//             ],
//             "howToUse": "Hold 3-5cm from forehead, press button for instant reading.",
//             "ingredients": "Plastic casing, infrared sensor, LCD screen",
//             "warnings": "Do not point at eyes. Keep away from children. Clean probe after use."
//         },
//         {
//             "id": 15,
//             "name": "Disposable Nitrile Gloves (Box of 100)",
//             "category": "Gloves",
//             "brand": "Medline",
//             "priceNumeric": 449,
//             "originalPriceNumeric": 549,
//             "savings": "18%",
//             "image": "/assets/Covidimg/nitrile-gloves.jpg",
//             "description": "Powder-free nitrile examination gloves offering superior protection and sensitivity.",
//             "keyFeatures": [
//                 "Powder-free",
//                 "Latex-free",
//                 "Textured fingertips",
//                 "Chemical resistant"
//             ],
//             "howToUse": "Select proper size, put on clean hands, remove carefully avoiding contamination.",
//             "ingredients": "Nitrile rubber",
//             "warnings": "Single use only. Not for surgical use. Check for tears before use."
//         },
//         {
//             "id": 16,
//             "name": "PPE Kit (Full Body)",
//             "category": "PPE Kit",
//             "brand": "HLL",
//             "priceNumeric": 599,
//             "originalPriceNumeric": 799,
//             "savings": "25%",
//             "image": "/assets/Covidimg/ppe-kit.jpg",
//             "description": "Complete personal protective equipment kit for healthcare workers and high-risk environments.",
//             "keyFeatures": [
//                 "Full body coverage",
//                 "Waterproof material",
//                 "Includes goggles and shoe covers",
//                 "Anti-fog visor"
//             ],
//             "howToUse": "Follow donning sequence: gown first, mask, goggles, gloves last.",
//             "ingredients": "Non-woven polypropylene, polyurethane, elastic",
//             "warnings": "Disposable. Do not reuse. Remove carefully to avoid contamination."
//         },
//         {
//             "id": 17,
//             "name": "Surface Disinfectant Spray (1L)",
//             "category": "Disinfectant",
//             "brand": "Lysol",
//             "priceNumeric": 349,
//             "originalPriceNumeric": 449,
//             "savings": "22%",
//             "image": "/assets/Covidimg/disinfectant-spray.jpg",
//             "description": "Kills 99.9% of viruses and bacteria on surfaces including COVID-19 virus.",
//             "keyFeatures": [
//                 "Kills COVID-19 virus",
//                 "Works in 30 seconds",
//                 "No-rinse formula",
//                 "Fresh scent"
//             ],
//             "howToUse": "Spray 6-8 inches from surface, let stand for 30 seconds, wipe if needed.",
//             "ingredients": "Ethyl Alcohol, Quaternary Ammonium Compounds",
//             "warnings": "Keep away from children. Avoid contact with eyes. Use in ventilated area."
//         },
//         {
//             "id": 18,
//             "name": "Pulse Oximeter",
//             "category": "Monitor",
//             "brand": "Dr Trust",
//             "priceNumeric": 1299,
//             "originalPriceNumeric": 1599,
//             "savings": "19%",
//             "image": "/assets/Covidimg/pulse-oximeter.jpg",
//             "description": "Fingertip pulse oximeter measuring SpO2 and pulse rate for home monitoring.",
//             "keyFeatures": [
//                 "Measures oxygen saturation",
//                 "Heart rate monitor",
//                 "OLED display",
//                 "Automatic shut-off"
//             ],
//             "howToUse": "Insert finger fully, wait for stable reading (about 10 seconds).",
//             "ingredients": "ABS plastic, LED sensors, OLED screen",
//             "warnings": "Not for medical diagnosis. Consult doctor for abnormal readings."
//         },
//         {
//             "id": 19,
//             "name": "Face Shield with Adjustable Headband",
//             "category": "Face Shield",
//             "brand": "3M",
//             "priceNumeric": 199,
//             "originalPriceNumeric": 249,
//             "savings": "20%",
//             "image": "/assets/Covidimg/face-shield.jpg",
//             "description": "Reusable face shield providing full face protection against droplets and splashes.",
//             "keyFeatures": [
//                 "Anti-fog coating",
//                 "Adjustable headband",
//                 "Lightweight design",
//                 "Reusable"
//             ],
//             "howToUse": "Place over face, adjust headband for comfortable fit.",
//             "ingredients": "PET visor, foam forehead pad, elastic band",
//             "warnings": "Clean with soap and water after each use. Replace if scratched."
//         },
//         {
//             "id": 20,
//             "name": "Oxygen Concentrator 5L",
//             "category": "Oxygen Therapy",
//             "brand": "Philips",
//             "priceNumeric": 54999,
//             "originalPriceNumeric": 64999,
//             "savings": "15%",
//             "image": "/assets/Covidimg/oxygen-concentrator.jpg",
//             "description": "Medical-grade oxygen concentrator delivering 90% pure oxygen up to 5 liters per minute.",
//             "keyFeatures": [
//                 "5 LPM oxygen flow",
//                 "90% oxygen purity",
//                 "Built-in humidifier",
//                 "Low noise operation"
//             ],
//             "howToUse": "Connect nasal cannula, set prescribed flow rate, turn on.",
//             "ingredients": "ABS cabinet, molecular sieve, compressor",
//             "warnings": "Prescription required. Keep away from flames. Medical supervision needed."
//         },
//         {
//             "id": 21,
//             "name": "Disposable Isolation Gown",
//             "category": "Protective Wear",
//             "brand": "Medisafe",
//             "priceNumeric": 149,
//             "originalPriceNumeric": 199,
//             "savings": "25%",
//             "image": "/assets/Covidimg/isolation-gown.jpg",
//             "description": "Water-resistant isolation gown with full sleeve coverage and tie closure.",
//             "keyFeatures": [
//                 "Water resistant",
//                 "Full sleeve design",
//                 "Tie neck and waist",
//                 "Medium weight"
//             ],
//             "howToUse": "Wear over clothing, tie at neck and waist, remove carefully after use.",
//             "ingredients": "Polypropylene SMS material",
//             "warnings": "Single use only. Discard after use. Not for sterile procedures."
//         },
//         {
//             "id": 22,
//             "name": "Antiviral Nasal Spray",
//             "category": "Nasal Spray",
//             "brand": "Naselin",
//             "priceNumeric": 299,
//             "originalPriceNumeric": 399,
//             "savings": "25%",
//             "image": "/assets/Covidimg/nasal-spray.jpg",
//             "description": "Povidone-iodine nasal spray that reduces viral load in nasal passages.",
//             "keyFeatures": [
//                 "Reduces viral load",
//                 "Soothes nasal passages",
//                 "Alcohol-free",
//                 "Clinically tested"
//             ],
//             "howToUse": "Spray 1-2 times in each nostril, 2-3 times daily.",
//             "ingredients": "Povidone-Iodine 0.5%, Sodium Chloride, Purified Water",
//             "warnings": "Do not use if allergic to iodine. Consult doctor before use."
//         },
//         {
//             "id": 23,
//             "name": "UV Sanitizer Box for Mobile",
//             "category": "Sanitizer",
//             "brand": "Mi",
//             "priceNumeric": 1999,
//             "originalPriceNumeric": 2499,
//             "savings": "20%",
//             "image": "/assets/Covidimg/uv-sanitizer.jpg",
//             "description": "UV-C light sanitizer box that kills 99.9% germs on phones, keys, and small items.",
//             "keyFeatures": [
//                 "UV-C sterilization",
//                 "360° coverage",
//                 "Automatic shut-off",
//                 "2-minute cycle"
//             ],
//             "howToUse": "Place items inside, close lid, press start button.",
//             "ingredients": "ABS plastic, UV-C lamps, electronic components",
//             "warnings": "Do not look directly at UV light. Keep away from children."
//         },
//         {
//             "id": 24,
//             "name": "Steam Inhaler",
//             "category": "Respiratory Care",
//             "brand": "Omron",
//             "priceNumeric": 2499,
//             "originalPriceNumeric": 2999,
//             "savings": "17%",
//             "image": "/assets/Covidimg/steam-inhaler.jpg",
//             "description": "Cool mist steam inhaler for respiratory relief, helps with congestion and breathing.",
//             "keyFeatures": [
//                 "Cool mist technology",
//                 "Adjustable steam control",
//                 "Mask and mouthpiece included",
//                 "Quiet operation"
//             ],
//             "howToUse": "Add distilled water, attach mask, turn on and inhale steam.",
//             "ingredients": "Plastic housing, heating element, water tank",
//             "warnings": "Use distilled water only. Do not touch hot surfaces. Keep upright."
//         },
//         {
//             "id": 25,
//             "name": "Emergency Home Test Kit (COVID-19)",
//             "category": "Test Kit",
//             "brand": "Mylab",
//             "priceNumeric": 499,
//             "originalPriceNumeric": 699,
//             "savings": "29%",
//             "image": "/assets/Covidimg/test-kit.jpg",
//             "description": "Rapid antigen self-test kit for COVID-19 detection at home with results in 15 minutes.",
//             "keyFeatures": [
//                 "Results in 15 minutes",
//                 "98% accuracy",
//                 "Easy nasal swab",
//                 "CE certified"
//             ],
//             "howToUse": "Collect nasal sample, mix with buffer, apply to test cassette, wait 15 minutes.",
//             "ingredients": "Test cassette, nasal swab, extraction buffer, dropper",
//             "warnings": "For self-testing only. Positive results require PCR confirmation. Check expiry date."
//         }
//     ],

//     diabetes: {
//         "tablets": [
//             {
//                 "id": 26,
//                 "name": "Metformin 500mg",
//                 "description": "First-line treatment for Type 2 diabetes that improves insulin sensitivity.",
//                 "medicine_type": "Biguanide",
//                 "uses": ["Type 2 Diabetes", "Insulin Resistance"],
//                 "images": "/assets/DiabetesCare/metformin.png",
//                 "cost": 85,
//                 "discount": 10,
//                 "final_price": 76.5,
//                 "manufacturer": "USV",
//                 "stock": 200,
//                 "rating": 4.8,
//                 "composition": "Metformin Hydrochloride IP 500mg",
//                 "chemical_name": "Metformin Hydrochloride",
//                 "brand_name": "Glycomet / Gluformin",
//                 "company_name": "USV Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Use as prescribed by diabetologist.",
//                     "usage_instruction": "Take 1 tablet after food."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "material_type_free": "Chemical based formulation",
//                 "ingredients": ["Metformin Hydrochloride"],
//                 "bio_friendly": "Yes",
//                 "net_quantity": "10 tablets",
//                 "weight": "10 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB2025-001",
//                 "manufactured_by": "Medicare Labs Pvt Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 27,
//                 "name": "Glimepiride 2mg",
//                 "description": "Sulfonylurea that helps the pancreas release more insulin.",
//                 "medicine_type": "Sulfonylurea",
//                 "uses": ["High Blood Sugar"],
//                 "images": "/assets/DiabetesCare/glimepiride.png",
//                 "cost": 55,
//                 "discount": 12,
//                 "final_price": 48.4,
//                 "manufacturer": "Sanofi",
//                 "stock": 180,
//                 "rating": 4.7,
//                 "composition": "Glimepiride IP 2mg",
//                 "chemical_name": "Glimepiride",
//                 "brand_name": "Amaryl",
//                 "company_name": "Sanofi India Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "May cause hypoglycemia.",
//                     "usage_instruction": "Take 30 minutes before breakfast."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "material_type_free": "Chemical",
//                 "ingredients": ["Glimepiride"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB2025-001",
//                 "manufactured_by": "Sanofi India",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 28,
//                 "name": "Sitagliptin 100mg",
//                 "description": "DPP-4 inhibitor that helps regulate blood sugar without weight gain.",
//                 "medicine_type": "DPP-4 Inhibitor",
//                 "uses": ["Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/sitagliptin-100.png",
//                 "cost": 620,
//                 "discount": 10,
//                 "final_price": 558,
//                 "manufacturer": "Merck",
//                 "stock": 130,
//                 "rating": 4.8,
//                 "composition": "Sitagliptin Phosphate Monohydrate IP equivalent to Sitagliptin 100mg",
//                 "chemical_name": "Sitagliptin Phosphate",
//                 "brand_name": "Januvia",
//                 "company_name": "MSD Pharmaceuticals",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (7 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "Safe for long-term use.",
//                     "usage_instruction": "1 tablet daily or as advised."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Sitagliptin"],
//                 "net_quantity": "7 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "manufactured_by": "MSD Pharma",
//                 "country_of_origin": "USA"
//             },
//             {
//                 "id": 29,
//                 "name": "Dapagliflozin 10mg",
//                 "description": "SGLT2 inhibitor that removes excess glucose via urine.",
//                 "medicine_type": "SGLT2 Inhibitor",
//                 "uses": ["Type 2 Diabetes", "Weight Reduction"],
//                 "images": "/assets/DiabetesCare/dapagliflozin.png",
//                 "cost": 280,
//                 "discount": 10,
//                 "final_price": 252,
//                 "manufacturer": "AstraZeneca",
//                 "stock": 150,
//                 "rating": 4.8,
//                 "composition": "Dapagliflozin Propanediol Monohydrate IP equivalent to Dapagliflozin 10mg",
//                 "chemical_name": "Dapagliflozin Propanediol",
//                 "brand_name": "Forxiga / Farxiga",
//                 "company_name": "AstraZeneca Pharma India Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "UK"
//                 },
//                 "information": {
//                     "disclaimer": "Monitor kidney function regularly.",
//                     "usage_instruction": "Take in the morning."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Dapagliflozin"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "seller_name": "Medicare Diabetes Store",
//                 "manufactured_by": "AstraZeneca Pharma",
//                 "country_of_origin": "UK"
//             },
//             {
//                 "id": 30,
//                 "name": "Voglibose 0.3mg",
//                 "description": "Controls post-meal sugar spikes.",
//                 "medicine_type": "Alpha Glucosidase Inhibitor",
//                 "uses": ["Post Meal Diabetes"],
//                 "images": "/assets/DiabetesCare/voglibose.png",
//                 "cost": 95,
//                 "discount": 10,
//                 "final_price": 85.5,
//                 "manufacturer": "Lupin",
//                 "stock": 160,
//                 "rating": 4.6,
//                 "composition": "Voglibose IP 0.3mg",
//                 "chemical_name": "Voglibose",
//                 "brand_name": "Voglibose / Volibo",
//                 "company_name": "Lupin Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "May cause mild gas.",
//                     "usage_instruction": "Take before food."
//                 },
//                 "ingredients": ["Voglibose"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "manufactured_by": "Lupin Pharma",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 31,
//                 "name": "Vildagliptin 50mg",
//                 "description": "DPP-4 inhibitor that improves pancreas response.",
//                 "medicine_type": "DPP-4 Inhibitor",
//                 "uses": ["Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/vildagliptin.png",
//                 "cost": 210,
//                 "discount": 10,
//                 "final_price": 189,
//                 "manufacturer": "Novartis",
//                 "stock": 120,
//                 "rating": 4.7,
//                 "composition": "Vildagliptin IP 50mg",
//                 "chemical_name": "Vildagliptin",
//                 "brand_name": "Galvus",
//                 "company_name": "Novartis India Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (15 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "Switzerland"
//                 },
//                 "information": {
//                     "disclaimer": "Monitor sugar weekly.",
//                     "usage_instruction": "1 tablet daily."
//                 },
//                 "ingredients": ["Vildagliptin"],
//                 "packaging_type": "Strip",
//                 "manufactured_by": "Novartis Pharma",
//                 "country_of_origin": "Switzerland"
//             },
//             {
//                 "id": 32,
//                 "name": "Teneligliptin 20mg",
//                 "description": "Cost-effective DPP-4 inhibitor used once daily.",
//                 "medicine_type": "DPP-4 Inhibitor",
//                 "uses": ["Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/teneligliptin.png",
//                 "cost": 130,
//                 "discount": 10,
//                 "final_price": 117,
//                 "manufacturer": "Cipla",
//                 "stock": 190,
//                 "rating": 4.6,
//                 "composition": "Teneligliptin Hydrobromide Hydrate IP equivalent to Teneligliptin 20mg",
//                 "chemical_name": "Teneligliptin Hydrobromide",
//                 "brand_name": "Teneligliptin / Ziten",
//                 "company_name": "Cipla Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Safe for long-term use.",
//                     "usage_instruction": "Take once daily."
//                 },
//                 "ingredients": ["Teneligliptin"],
//                 "packaging_type": "Strip",
//                 "manufacturer": "Cipla",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 33,
//                 "name": "Pioglitazone 15mg",
//                 "description": "Improves insulin sensitivity in peripheral tissues.",
//                 "medicine_type": "Thiazolidinedione",
//                 "uses": ["Insulin Resistance"],
//                 "images": "/assets/DiabetesCare/pioglitazone.png",
//                 "cost": 70,
//                 "discount": 10,
//                 "final_price": 63,
//                 "manufacturer": "Zydus",
//                 "stock": 250,
//                 "rating": 4.5,
//                 "composition": "Pioglitazone Hydrochloride IP equivalent to Pioglitazone 15mg",
//                 "chemical_name": "Pioglitazone Hydrochloride",
//                 "brand_name": "Pioz / Piosys",
//                 "company_name": "Zydus Cadila Healthcare Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Not recommended for heart failure patients.",
//                     "usage_instruction": "Take daily at night."
//                 },
//                 "ingredients": ["Pioglitazone"],
//                 "packaging_type": "Strip",
//                 "manufacturer": "Zydus Healthcare",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 34,
//                 "name": "Empagliflozin 10mg",
//                 "description": "SGLT2 inhibitor that reduces glucose reabsorption.",
//                 "medicine_type": "SGLT2 Inhibitor",
//                 "uses": ["Diabetes", "Heart Protection"],
//                 "images": "/assets/DiabetesCare/empagliflozin.png",
//                 "cost": 330,
//                 "discount": 10,
//                 "final_price": 297,
//                 "manufacturer": "Boehringer",
//                 "stock": 110,
//                 "rating": 4.8,
//                 "composition": "Empagliflozin IP 10mg",
//                 "chemical_name": "Empagliflozin",
//                 "brand_name": "Jardiance",
//                 "company_name": "Boehringer Ingelheim India Private Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "Germany"
//                 },
//                 "information": {
//                     "disclaimer": "Drink plenty of fluids.",
//                     "usage_instruction": "Take in the morning."
//                 },
//                 "ingredients": ["Empagliflozin"],
//                 "packaging_type": "Strip",
//                 "manufactured_by": "Boehringer Pharma",
//                 "country_of_origin": "Germany"
//             },
//             {
//                 "id": 35,
//                 "name": "Glimipride + Metformin",
//                 "description": "Combination therapy for improved glycemic control.",
//                 "medicine_type": "Combo (Sulfonylurea + Biguanide)",
//                 "uses": ["Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/glime-met.png",
//                 "cost": 150,
//                 "discount": 10,
//                 "final_price": 135,
//                 "manufacturer": "Sun Pharma",
//                 "stock": 140,
//                 "rating": 4.7,
//                 "composition": "Each tablet contains: Glimepiride IP 1mg/2mg/3mg + Metformin Hydrochloride IP 500mg/1000mg",
//                 "chemical_name": "Glimepiride + Metformin Hydrochloride",
//                 "brand_name": "Amaryl-M / Glimi-M",
//                 "company_name": "Sun Pharmaceutical Industries Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (15 tablets)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Monitor sugar regularly.",
//                     "usage_instruction": "Take with breakfast."
//                 },
//                 "ingredients": ["Glimepiride", "Metformin"],
//                 "packaging_type": "Strip",
//                 "manufactured_by": "Sun Pharmaceutical",
//                 "country_of_origin": "India"
//             }
//         ],
//         "insulin": [
//             {
//                 "id": 36,
//                 "name": "Actrapid HM 40IU",
//                 "description": "Fast-acting human insulin used to control sugar levels during meals.",
//                 "medicine_type": "Fast Acting Insulin",
//                 "uses": ["Type 1 Diabetes", "Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/actrapid.png",
//                 "cost": 310,
//                 "discount": 8,
//                 "final_price": 285.2,
//                 "manufacturer": "Novo Nordisk",
//                 "stock": 120,
//                 "rating": 4.8,
//                 "composition": "Human Insulin (rDNA) IP 40IU/ml",
//                 "chemical_name": "Recombinant Human Insulin",
//                 "brand_name": "Actrapid",
//                 "company_name": "Novo Nordisk India Private Limited",
//                 "highlights": {
//                     "product_type": "Injection",
//                     "pack_size": "1 vial (10ml)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "Denmark"
//                 },
//                 "information": {
//                     "disclaimer": "Use only with doctor's prescription.",
//                     "usage_instruction": "Inject 30 minutes before meals."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Regular Human Insulin"],
//                 "net_quantity": "10ml",
//                 "weight": "10ml",
//                 "packaging_type": "Vial",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Center",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB-INS-001",
//                 "manufactured_by": "Novo Nordisk A/S",
//                 "country_of_origin": "Denmark"
//             },
//             {
//                 "id": 37,
//                 "name": "Humalog 100IU KwikPen",
//                 "description": "Rapid-acting insulin used before meals to control sudden sugar spikes.",
//                 "medicine_type": "Rapid Acting Insulin",
//                 "uses": ["Type 1 Diabetes", "Insulin-dependent Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/humalog.png",
//                 "cost": 860,
//                 "discount": 5,
//                 "final_price": 817,
//                 "manufacturer": "Eli Lilly",
//                 "stock": 80,
//                 "rating": 4.9,
//                 "composition": "Insulin Lispro (rDNA) IP 100IU/ml",
//                 "chemical_name": "Insulin Lispro",
//                 "brand_name": "Humalog",
//                 "company_name": "Eli Lilly and Company (India) Private Limited",
//                 "highlights": {
//                     "product_type": "Insulin Pen",
//                     "pack_size": "1 prefilled pen (3ml)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "Store in refrigerator (2-8°C).",
//                     "usage_instruction": "Inject 15 minutes before food."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Insulin Lispro"],
//                 "net_quantity": "3ml",
//                 "packaging_type": "Pen",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Center",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB-INS-001",
//                 "manufactured_by": "Eli Lilly & Company",
//                 "country_of_origin": "USA"
//             },
//             {
//                 "id": 38,
//                 "name": "Lantus Basaglar 100IU",
//                 "description": "Long-acting basal insulin providing up to 24-hour glucose control.",
//                 "medicine_type": "Long Acting Insulin",
//                 "uses": ["Type 1 Diabetes", "Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/lantus.png",
//                 "cost": 980,
//                 "discount": 8,
//                 "final_price": 901.6,
//                 "manufacturer": "Sanofi",
//                 "stock": 95,
//                 "rating": 4.9,
//                 "composition": "Insulin Glargine (rDNA) IP 100IU/ml",
//                 "chemical_name": "Insulin Glargine",
//                 "brand_name": "Lantus",
//                 "company_name": "Sanofi India Limited",
//                 "highlights": {
//                     "product_type": "Injection",
//                     "pack_size": "1 pen cartridge (3ml)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "France"
//                 },
//                 "information": {
//                     "disclaimer": "Do not freeze.",
//                     "usage_instruction": "Inject once daily at the same time."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Insulin Glargine"],
//                 "net_quantity": "3ml",
//                 "packaging_type": "Cartridge",
//                 "customer_support": "support@yourapp.com",
//                 "manufactured_by": "Sanofi Aventis",
//                 "country_of_origin": "France"
//             },
//             {
//                 "id": 39,
//                 "name": "Tresiba 100IU Flextouch",
//                 "description": "Ultra-long acting insulin that provides over 42 hours of stable sugar control.",
//                 "medicine_type": "Ultra Long Acting Insulin",
//                 "uses": ["Type 1 Diabetes", "Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/tresiba.png",
//                 "cost": 1450,
//                 "discount": 10,
//                 "final_price": 1305,
//                 "manufacturer": "Novo Nordisk",
//                 "stock": 70,
//                 "rating": 4.9,
//                 "composition": "Insulin Degludec (rDNA) IP 100IU/ml",
//                 "chemical_name": "Insulin Degludec",
//                 "brand_name": "Tresiba",
//                 "company_name": "Novo Nordisk India Private Limited",
//                 "highlights": {
//                     "product_type": "Insulin Pen",
//                     "pack_size": "1 pen (3ml)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "Denmark"
//                 },
//                 "information": {
//                     "disclaimer": "Use once daily, any time of day.",
//                     "usage_instruction": "Inject subcutaneously."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Insulin Degludec"],
//                 "net_quantity": "3ml",
//                 "packaging_type": "Pen",
//                 "customer_support": "support@yourapp.com",
//                 "manufactured_by": "Novo Nordisk",
//                 "country_of_origin": "Denmark"
//             },
//             {
//                 "id": 40,
//                 "name": "Mixtard 30 100IU",
//                 "description": "Premixed insulin containing 30% regular and 70% NPH insulin.",
//                 "medicine_type": "Premixed Insulin",
//                 "uses": ["Type 1 Diabetes", "Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/mixtard.png",
//                 "cost": 530,
//                 "discount": 6,
//                 "final_price": 498.2,
//                 "manufacturer": "Novo Nordisk",
//                 "stock": 140,
//                 "rating": 4.7,
//                 "composition": "Biphasic Isophane Insulin (30% Soluble Insulin + 70% Isophane Insulin) 100IU/ml",
//                 "chemical_name": "Insulin Human (rDNA) - Biphasic",
//                 "brand_name": "Mixtard",
//                 "company_name": "Novo Nordisk India Private Limited",
//                 "highlights": {
//                     "product_type": "Injection",
//                     "pack_size": "1 vial (10ml)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "Denmark"
//                 },
//                 "information": {
//                     "disclaimer": "Inspect visually for particles before use.",
//                     "usage_instruction": "Inject 30 minutes before breakfast & dinner."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Insulin Regular", "NPH Insulin"],
//                 "net_quantity": "10ml",
//                 "packaging_type": "Vial",
//                 "customer_support": "support@yourapp.com",
//                 "manufactured_by": "Novo Nordisk",
//                 "country_of_origin": "Denmark"
//             },
//             {
//                 "id": 41,
//                 "name": "Insugen-N 100IU",
//                 "description": "Intermediate-acting NPH insulin for daily sugar control.",
//                 "medicine_type": "Intermediate Acting Insulin",
//                 "uses": ["Type 1 Diabetes", "Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/insugen-n.png",
//                 "cost": 470,
//                 "discount": 5,
//                 "final_price": 446.5,
//                 "manufacturer": "Biocon",
//                 "stock": 150,
//                 "rating": 4.6,
//                 "composition": "Isophane Insulin (NPH) Human (rDNA) IP 100IU/ml",
//                 "chemical_name": "Isophane Insulin (NPH)",
//                 "brand_name": "Insugen-N",
//                 "company_name": "Biocon Limited",
//                 "highlights": {
//                     "product_type": "Injection",
//                     "pack_size": "1 vial (10ml)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Rotate injection sites daily.",
//                     "usage_instruction": "Inject once or twice daily."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["NPH Human Insulin"],
//                 "net_quantity": "10ml",
//                 "packaging_type": "Vial",
//                 "customer_support": "support@yourapp.com",
//                 "manufactured_by": "Biocon Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 42,
//                 "name": "Insulin Glargine Cartridge 100IU",
//                 "description": "Long acting cartridge-based insulin for stable glucose control.",
//                 "medicine_type": "Long Acting Insulin",
//                 "uses": ["Type 1 Diabetes", "Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/glargine-cart.png",
//                 "cost": 930,
//                 "discount": 8,
//                 "final_price": 855.6,
//                 "manufacturer": "Sanofi",
//                 "stock": 85,
//                 "rating": 4.7,
//                 "composition": "Insulin Glargine (rDNA) IP 100IU/ml",
//                 "chemical_name": "Insulin Glargine",
//                 "brand_name": "Lantus / Basaglar",
//                 "company_name": "Sanofi India Limited",
//                 "highlights": {
//                     "product_type": "Cartridge",
//                     "pack_size": "1 cartridge (3ml)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "France"
//                 },
//                 "information": {
//                     "disclaimer": "Use with compatible insulin pens only.",
//                     "usage_instruction": "Inject once daily."
//                 },
//                 "ingredients": ["Insulin Glargine"],
//                 "packaging_type": "Cartridge",
//                 "customer_support": "support@yourapp.com",
//                 "manufactured_by": "Sanofi Aventis",
//                 "country_of_origin": "France"
//             },
//             {
//                 "id": 43,
//                 "name": "Novorapid FlexPen 100IU",
//                 "description": "Fast-acting insulin that works quickly after injection.",
//                 "medicine_type": "Rapid Acting Insulin",
//                 "uses": ["Type 1 Diabetes", "Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/novorapid.png",
//                 "cost": 850,
//                 "discount": 8,
//                 "final_price": 782,
//                 "manufacturer": "Novo Nordisk",
//                 "stock": 65,
//                 "rating": 4.8,
//                 "composition": "Insulin Aspart (rDNA) IP 100IU/ml",
//                 "chemical_name": "Insulin Aspart",
//                 "brand_name": "NovoRapid / NovoLog",
//                 "company_name": "Novo Nordisk India Private Limited",
//                 "highlights": {
//                     "product_type": "Insulin Pen",
//                     "pack_size": "1 pen (3ml)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "Denmark"
//                 },
//                 "information": {
//                     "disclaimer": "Use 5-10 minutes before meals.",
//                     "usage_instruction": "Inject subcutaneously."
//                 },
//                 "ingredients": ["Insulin Aspart"],
//                 "packaging_type": "Pen",
//                 "customer_support": "support@yourapp.com",
//                 "manufactured_by": "Novo Nordisk",
//                 "country_of_origin": "Denmark"
//             },
//             {
//                 "id": 44,
//                 "name": "Ryzodeg 70/30 Penfill",
//                 "description": "Combination of rapid and long-acting insulin for flexible sugar control.",
//                 "medicine_type": "Premix Insulin",
//                 "uses": ["Type 1 Diabetes", "Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/ryzodeg.png",
//                 "cost": 1350,
//                 "discount": 10,
//                 "final_price": 1215,
//                 "manufacturer": "Novo Nordisk",
//                 "stock": 50,
//                 "rating": 4.9,
//                 "composition": "Insulin Degludec 70% + Insulin Aspart 30% (rDNA) 100IU/ml",
//                 "chemical_name": "Insulin Degludec + Insulin Aspart",
//                 "brand_name": "Ryzodeg",
//                 "company_name": "Novo Nordisk India Private Limited",
//                 "highlights": {
//                     "product_type": "Injection",
//                     "pack_size": "1 pen cartridge (3ml)",
//                     "shelf_life": "30 months",
//                     "country_of_origin": "Denmark"
//                 },
//                 "information": {
//                     "disclaimer": "Do not share insulin pens.",
//                     "usage_instruction": "Inject once or twice daily."
//                 },
//                 "ingredients": ["Insulin Degludec", "Insulin Aspart"],
//                 "packaging_type": "Cartridge",
//                 "customer_support": "support@yourapp.com",
//                 "manufactured_by": "Novo Nordisk",
//                 "country_of_origin": "Denmark"
//             },
//             {
//                 "id": 45,
//                 "name": "Apidra Solostar 100IU",
//                 "description": "Rapid-acting insulin that starts working within minutes.",
//                 "medicine_type": "Rapid Acting Insulin",
//                 "uses": ["Meal-time Sugar Control"],
//                 "images": "/assets/DiabetesCare/apidra.png",
//                 "cost": 870,
//                 "discount": 10,
//                 "final_price": 783,
//                 "manufacturer": "Sanofi",
//                 "stock": 75,
//                 "rating": 4.8,
//                 "composition": "Insulin Glulisine (rDNA) IP 100IU/ml",
//                 "chemical_name": "Insulin Glulisine",
//                 "brand_name": "Apidra",
//                 "company_name": "Sanofi India Limited",
//                 "highlights": {
//                     "product_type": "Insulin Pen",
//                     "pack_size": "1 pen (3ml)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "France"
//                 },
//                 "information": {
//                     "disclaimer": "Use under medical supervision.",
//                     "usage_instruction": "Inject right before meals."
//                 },
//                 "ingredients": ["Insulin Glulisine"],
//                 "packaging_type": "Pen",
//                 "customer_support": "support@yourapp.com",
//                 "manufactured_by": "Sanofi Aventis",
//                 "country_of_origin": "France"
//             }
//         ],
//         "glucometer": [
//             {
//                 "id": 46,
//                 "name": "Accu-Chek Active Glucometer",
//                 "description": "Fast, accurate blood glucose monitoring with 5-second results.",
//                 "medicine_type": "Glucometer Device",
//                 "uses": ["Blood Sugar Monitoring"],
//                 "images": "/assets/DiabetesCare/accu-chek-active.png",
//                 "cost": 1450,
//                 "discount": 10,
//                 "final_price": 1305,
//                 "manufacturer": "Roche",
//                 "stock": 240,
//                 "rating": 4.8,
//                 "composition": "Blood Glucose Monitoring System with glucose oxidase-based test strips",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "Accu-Chek Active",
//                 "company_name": "Roche Diabetes Care India Private Limited",
//                 "highlights": {
//                     "product_type": "Glucometer",
//                     "pack_size": "Device + 10 strips",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "Germany"
//                 },
//                 "information": {
//                     "disclaimer": "Use only compatible strips.",
//                     "usage_instruction": "Apply 1 small drop of blood to the strip."
//                 },
//                 "brand": "Accu-Chek",
//                 "ingredients": [],
//                 "bio_friendly": "Yes",
//                 "net_quantity": "1 device",
//                 "weight": "150g",
//                 "packaging_type": "Box",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "DIAB2025HYD003",
//                 "manufactured_by": "Roche Diagnostics",
//                 "country_of_origin": "Germany"
//             },
//             {
//                 "id": 47,
//                 "name": "Dr. Morepen GlucoOne BG-03",
//                 "description": "Affordable glucometer with reliable readings and fast results.",
//                 "medicine_type": "Glucometer Device",
//                 "uses": ["Glucose Tracking"],
//                 "images": "/assets/DiabetesCare/morepen-bg03.png",
//                 "cost": 899,
//                 "discount": 15,
//                 "final_price": 764.15,
//                 "manufacturer": "Morepen",
//                 "stock": 320,
//                 "rating": 4.7,
//                 "composition": "Glucose meter with electrochemical test strip technology",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "GlucoOne",
//                 "company_name": "Morepen Laboratories Limited",
//                 "highlights": {
//                     "product_type": "Glucometer",
//                     "pack_size": "Device + 10 strips + Lancets",
//                     "shelf_life": "30 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Clean device after use.",
//                     "usage_instruction": "Insert strip and apply blood sample."
//                 },
//                 "brand": "Dr. Morepen",
//                 "ingredients": [],
//                 "net_quantity": "1 device",
//                 "weight": "130g",
//                 "packaging_type": "Box",
//                 "seller_name": "Medicare Diabetes Store",
//                 "manufactured_by": "Morepen Labs",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 48,
//                 "name": "OneTouch Select Plus Simple",
//                 "description": "Simple, no-setup meter with high accuracy for sugar monitoring.",
//                 "medicine_type": "Glucometer Device",
//                 "uses": ["Diabetes Monitoring"],
//                 "images": "/assets/DiabetesCare/onetouch-select.png",
//                 "cost": 1690,
//                 "discount": 12,
//                 "final_price": 1487.2,
//                 "manufacturer": "LifeScan",
//                 "stock": 150,
//                 "rating": 4.9,
//                 "composition": "Blood glucose monitoring system with TrueMetrix technology",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "OneTouch Select Plus",
//                 "company_name": "LifeScan India Private Limited",
//                 "highlights": {
//                     "product_type": "Glucometer",
//                     "pack_size": "Device + 10 strips",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "Use compatible test strips only.",
//                     "usage_instruction": "Touch blood sample to strip for instant reading."
//                 },
//                 "brand": "OneTouch",
//                 "ingredients": [],
//                 "net_quantity": "1 device",
//                 "weight": "160g",
//                 "packaging_type": "Box",
//                 "manufactured_by": "LifeScan",
//                 "country_of_origin": "USA"
//             },
//             {
//                 "id": 49,
//                 "name": "Contour Plus Glucometer",
//                 "description": "High precision glucometer with second-chance sampling.",
//                 "medicine_type": "Glucometer Device",
//                 "uses": ["Blood Sugar Check"],
//                 "images": "/assets/DiabetesCare/contour-plus.png",
//                 "cost": 1550,
//                 "discount": 10,
//                 "final_price": 1395,
//                 "manufacturer": "Ascensia",
//                 "stock": 95,
//                 "rating": 4.8,
//                 "composition": "Blood glucose monitoring system with No Coding technology",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "Contour Plus",
//                 "company_name": "Ascensia Diabetes Care India Private Limited",
//                 "highlights": {
//                     "product_type": "Glucometer",
//                     "pack_size": "Device + 5 strips",
//                     "shelf_life": "30 months",
//                     "country_of_origin": "Japan"
//                 },
//                 "information": {
//                     "disclaimer": "Check strip expiry before use.",
//                     "usage_instruction": "Apply blood sample to edge of strip."
//                 },
//                 "brand": "Contour",
//                 "ingredients": [],
//                 "net_quantity": "1 device",
//                 "weight": "145g",
//                 "packaging_type": "Box",
//                 "manufactured_by": "Ascensia Diabetes Care",
//                 "country_of_origin": "Japan"
//             },
//             {
//                 "id": 50,
//                 "name": "BeatO Smart Glucometer",
//                 "description": "Smartphone-connected glucometer with app-based tracking.",
//                 "medicine_type": "Smart Glucometer",
//                 "uses": ["Sugar Tracking", "Mobile Health Monitoring"],
//                 "images": "/assets/DiabetesCare/beato.png",
//                 "cost": 999,
//                 "discount": 20,
//                 "final_price": 799,
//                 "manufacturer": "BeatO",
//                 "stock": 220,
//                 "rating": 4.6,
//                 "composition": "Digital glucometer with smartphone connectivity and test strips",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "BeatO",
//                 "company_name": "Health Arx Technologies Private Limited",
//                 "highlights": {
//                     "product_type": "Smart Glucometer",
//                     "pack_size": "Device + 20 test strips",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "App required for full functionality.",
//                     "usage_instruction": "Connect via phone and insert test strip."
//                 },
//                 "brand": "BeatO",
//                 "ingredients": [],
//                 "net_quantity": "1 device",
//                 "weight": "100g",
//                 "packaging_type": "Box",
//                 "manufactured_by": "Health Arx Technologies",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 51,
//                 "name": "Dr Trust Glucometer Gold",
//                 "description": "Advanced glucometer with painless strips and gold electrodes.",
//                 "medicine_type": "Premium Glucometer",
//                 "uses": ["Blood Sugar Monitoring"],
//                 "images": "/assets/DiabetesCare/drtrust-gold.png",
//                 "cost": 1799,
//                 "discount": 10,
//                 "final_price": 1619.1,
//                 "manufacturer": "Dr Trust",
//                 "stock": 180,
//                 "rating": 4.7,
//                 "composition": "Advanced glucometer with gold electrode test strips",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "Dr Trust",
//                 "company_name": "Dr Trust (India) Private Limited",
//                 "highlights": {
//                     "product_type": "Glucometer",
//                     "pack_size": "Device + 10 strips + Lancets",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "Keep away from moisture.",
//                     "usage_instruction": "Insert strip and apply blood sample."
//                 },
//                 "brand": "Dr Trust",
//                 "ingredients": [],
//                 "net_quantity": "1 device",
//                 "weight": "155g",
//                 "packaging_type": "Box",
//                 "manufactured_by": "Dr Trust USA",
//                 "country_of_origin": "USA"
//             },
//             {
//                 "id": 52,
//                 "name": "Accu-Chek Instant S",
//                 "description": "Instant sugar monitoring with target range indicator.",
//                 "medicine_type": "Glucometer Device",
//                 "uses": ["Instant Sugar Check"],
//                 "images": "/assets/DiabetesCare/accu-chek-instant.png",
//                 "cost": 1790,
//                 "discount": 12,
//                 "final_price": 1575.2,
//                 "manufacturer": "Roche",
//                 "stock": 140,
//                 "rating": 4.8,
//                 "composition": "Blood glucose monitoring system with glucose dehydrogenase technology",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "Accu-Chek Instant S",
//                 "company_name": "Roche Diabetes Care India Private Limited",
//                 "highlights": {
//                     "product_type": "Glucometer",
//                     "pack_size": "Device + 10 strips",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "Germany"
//                 },
//                 "information": {
//                     "disclaimer": "Replace battery when low.",
//                     "usage_instruction": "Apply small drop of blood to strip."
//                 },
//                 "brand": "Accu-Chek",
//                 "ingredients": [],
//                 "net_quantity": "1 device",
//                 "weight": "160g",
//                 "packaging_type": "Box",
//                 "manufactured_by": "Roche Diagnostics",
//                 "country_of_origin": "Germany"
//             },
//             {
//                 "id": 53,
//                 "name": "OneTouch Verio Flex",
//                 "description": "Bluetooth-enabled glucometer with color range indicator.",
//                 "medicine_type": "Smart Glucometer",
//                 "uses": ["Sugar Tracking", "Bluetooth Monitoring"],
//                 "images": "/assets/DiabetesCare/onetouch-verio.png",
//                 "cost": 2099,
//                 "discount": 10,
//                 "final_price": 1889.1,
//                 "manufacturer": "LifeScan",
//                 "stock": 70,
//                 "rating": 4.9,
//                 "composition": "Bluetooth-enabled blood glucose meter with ColorSure technology",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "OneTouch Verio Flex",
//                 "company_name": "LifeScan India Private Limited",
//                 "highlights": {
//                     "product_type": "Bluetooth Glucometer",
//                     "pack_size": "Device + 10 strips",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "Sync with OneTouch App.",
//                     "usage_instruction": "Insert strip → apply blood → view result."
//                 },
//                 "brand": "OneTouch",
//                 "ingredients": [],
//                 "net_quantity": "1 device",
//                 "weight": "170g",
//                 "packaging_type": "Box",
//                 "manufactured_by": "LifeScan",
//                 "country_of_origin": "USA"
//             },
//             {
//                 "id": 54,
//                 "name": "Contour Plus Elite",
//                 "description": "Premium glucometer with high accuracy and smart monitoring.",
//                 "medicine_type": "Premium Glucometer",
//                 "uses": ["Accurate Sugar Reading"],
//                 "images": "/assets/DiabetesCare/contour-elite.png",
//                 "cost": 1950,
//                 "discount": 10,
//                 "final_price": 1755,
//                 "manufacturer": "Ascensia",
//                 "stock": 60,
//                 "rating": 4.8,
//                 "composition": "Premium blood glucose monitoring system with SmartLights technology",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "Contour Plus Elite",
//                 "company_name": "Ascensia Diabetes Care India Private Limited",
//                 "highlights": {
//                     "product_type": "Glucometer",
//                     "pack_size": "Device + 10 strips",
//                     "shelf_life": "30 months",
//                     "country_of_origin": "Japan"
//                 },
//                 "information": {
//                     "disclaimer": "Use before strip expiry date.",
//                     "usage_instruction": "Apply blood sample to active tip."
//                 },
//                 "brand": "Contour",
//                 "ingredients": [],
//                 "net_quantity": "1 device",
//                 "weight": "150g",
//                 "packaging_type": "Box",
//                 "manufactured_by": "Ascensia Diabetes Care",
//                 "country_of_origin": "Japan"
//             },
//             {
//                 "id": 55,
//                 "name": "BeatO Curv Glucometer",
//                 "description": "Compact, portable smartphone glucometer for on-the-go testing.",
//                 "medicine_type": "Smart Mini Glucometer",
//                 "uses": ["Mobile Sugar Tracking"],
//                 "images": "/assets/DiabetesCare/beato-curv.png",
//                 "cost": 799,
//                 "discount": 15,
//                 "final_price": 679.15,
//                 "manufacturer": "BeatO",
//                 "stock": 200,
//                 "rating": 4.6,
//                 "composition": "Mini smartphone glucometer with proprietary test strips",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "BeatO Curv",
//                 "company_name": "Health Arx Technologies Private Limited",
//                 "highlights": {
//                     "product_type": "Mini Smart Glucometer",
//                     "pack_size": "Device + 20 strips",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Works only with BeatO App.",
//                     "usage_instruction": "Insert into phone → insert strip → test."
//                 },
//                 "brand": "BeatO",
//                 "ingredients": [],
//                 "net_quantity": "1 device",
//                 "weight": "90g",
//                 "packaging_type": "Box",
//                 "manufactured_by": "Health Arx Technologies",
//                 "country_of_origin": "India"
//             }
//         ],
//         "syrups": [
//             {
//                 "id": 56,
//                 "name": "Diabetact Herbal Sugar Control Syrup",
//                 "description": "Ayurvedic herbal syrup that supports natural blood sugar control and digestion.",
//                 "medicine_type": "Herbal Sugar Control Syrup",
//                 "uses": ["Type 2 Diabetes", "Blood Sugar Control"],
//                 "images": "/assets/DiabetesCare/diabetact.png",
//                 "cost": 180,
//                 "discount": 10,
//                 "final_price": 162,
//                 "manufacturer": "Himalaya Wellness",
//                 "stock": 200,
//                 "rating": 4.7,
//                 "composition": "Each 10ml contains: Gymnema sylvestre (Gudmar) extract - 200mg, Pterocarpus marsupium (Vijaysar) extract - 100mg, Momordica charantia (Karela) extract - 100mg, Azadirachta indica (Neem) extract - 50mg",
//                 "chemical_name": "Herbal Extract Formulation",
//                 "brand_name": "Diabecon DS",
//                 "company_name": "The Himalaya Drug Company",
//                 "highlights": {
//                     "product_type": "Syrup",
//                     "pack_size": "200 ml bottle",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Not a replacement for diabetes medicines.",
//                     "usage_instruction": "Take 10ml twice daily after meals."
//                 },
//                 "brand": "Himalaya",
//                 "ingredients": ["Gudmar", "Vijaysar", "Karela", "Neem"],
//                 "net_quantity": "200 ml",
//                 "weight": "200 ml",
//                 "packaging_type": "Bottle",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "DIAB-SYRUP-001",
//                 "manufactured_by": "Himalaya Drug Company",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 57,
//                 "name": "SugarBalance Ayurvedic Syrup",
//                 "description": "Helps control sugar levels naturally and improves metabolism.",
//                 "medicine_type": "Herbal Syrup",
//                 "uses": ["Sugar Control", "Metabolism Support"],
//                 "images": "/assets/DiabetesCare/sugarbalance.png",
//                 "cost": 160,
//                 "discount": 8,
//                 "final_price": 147.2,
//                 "manufacturer": "Dabur",
//                 "stock": 180,
//                 "rating": 4.6,
//                 "composition": "Each 5ml contains: Syzygium cumini (Jamun) seed extract - 150mg, Gymnema sylvestre (Gudmar) leaf extract - 100mg, Azadirachta indica (Neem) leaf extract - 50mg, Momordica charantia (Karela) fruit extract - 50mg",
//                 "chemical_name": "Herbal Extract Formulation",
//                 "brand_name": "Dabur Madhu Rakshak",
//                 "company_name": "Dabur India Limited",
//                 "highlights": {
//                     "product_type": "Liquid Syrup",
//                     "pack_size": "150 ml bottle",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Consult doctor if sugar levels fluctuate.",
//                     "usage_instruction": "Take 2 teaspoons daily."
//                 },
//                 "brand": "Dabur",
//                 "ingredients": ["Jambu Beej", "Gudmar", "Neem", "Karela"],
//                 "net_quantity": "150 ml",
//                 "packaging_type": "Bottle",
//                 "seller_name": "Medicare Diabetes Store",
//                 "manufactured_by": "Dabur India Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 58,
//                 "name": "GlucoCare Sugar Management Syrup",
//                 "description": "Formulated to support healthy sugar levels and appetite control.",
//                 "medicine_type": "Ayurvedic Syrup",
//                 "uses": ["Blood Sugar Control"],
//                 "images": "/assets/DiabetesCare/glucocare.png",
//                 "cost": 210,
//                 "discount": 10,
//                 "final_price": 189,
//                 "manufacturer": "Patanjali",
//                 "stock": 150,
//                 "rating": 4.6,
//                 "composition": "Each 10ml contains: Syzygium cumini (Jamun) seed powder - 500mg, Momordica charantia (Karela) extract - 200mg, Azadirachta indica (Neem) leaf extract - 150mg, Tinospora cordifolia (Giloy) stem extract - 100mg",
//                 "chemical_name": "Herbal Extract Formulation",
//                 "brand_name": "Patanjali Madhunashini Vati Syrup",
//                 "company_name": "Patanjali Ayurved Limited",
//                 "highlights": {
//                     "product_type": "Herbal Syrup",
//                     "pack_size": "200 ml bottle",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Not a substitute for insulin.",
//                     "usage_instruction": "Take 10 ml before meals."
//                 },
//                 "brand": "Patanjali",
//                 "ingredients": ["Jamun Seed Extract", "Karela", "Neem", "Giloy"],
//                 "net_quantity": "200 ml",
//                 "packaging_type": "Bottle",
//                 "manufactured_by": "Patanjali Ayurved Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 59,
//                 "name": "Diabeta-H Syrup",
//                 "description": "Helps maintain healthy blood sugar naturally with herbal ingredients.",
//                 "medicine_type": "Health Syrup",
//                 "uses": ["Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/diabeta-h.png",
//                 "cost": 170,
//                 "discount": 10,
//                 "final_price": 153,
//                 "manufacturer": "Baidhyanath",
//                 "stock": 190,
//                 "rating": 4.7,
//                 "composition": "Each 10ml contains: Tinospora cordifolia (Guduchi) extract - 200mg, Momordica charantia (Karela) extract - 150mg, Trigonella foenum-graecum (Methi) seed extract - 100mg, Azadirachta indica (Neem) leaf extract - 50mg",
//                 "chemical_name": "Herbal Extract Formulation",
//                 "brand_name": "Baidyanath Diabeta-H",
//                 "company_name": "Shree Baidyanath Ayurved Bhawan Private Limited",
//                 "highlights": {
//                     "product_type": "Herbal",
//                     "pack_size": "200 ml bottle",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Safe for long-term use.",
//                     "usage_instruction": "Take 1 tablespoon twice daily."
//                 },
//                 "brand": "Baidhyanath",
//                 "ingredients": ["Guduchi", "Karela", "Methi", "Neem"],
//                 "net_quantity": "200 ml",
//                 "packaging_type": "Bottle",
//                 "manufactured_by": "Baidhyanath Ayurved",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 60,
//                 "name": "Karela Jamun Syrup",
//                 "description": "Traditional herbal remedy known for effective sugar control.",
//                 "medicine_type": "Ayurvedic Syrup",
//                 "uses": ["Blood Sugar Control"],
//                 "images": "/assets/DiabetesCare/karela-jamun.png",
//                 "cost": 120,
//                 "discount": 10,
//                 "final_price": 108,
//                 "manufacturer": "Herbal Hills",
//                 "stock": 220,
//                 "rating": 4.5,
//                 "composition": "Each 10ml contains: Momordica charantia (Karela) fruit juice - 5ml, Syzygium cumini (Jamun) seed powder - 500mg, Azadirachta indica (Neem) leaf extract - 100mg",
//                 "chemical_name": "Herbal Extract Formulation",
//                 "brand_name": "Herbal Hills Karela Jamun",
//                 "company_name": "Herbal Hills",
//                 "highlights": {
//                     "product_type": "Syrup",
//                     "pack_size": "500 ml bottle",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Monitor blood sugar weekly.",
//                     "usage_instruction": "Take 10-15 ml daily."
//                 },
//                 "brand": "Herbal Hills",
//                 "ingredients": ["Karela", "Jamun Seed", "Neem"],
//                 "net_quantity": "500 ml",
//                 "packaging_type": "Bottle",
//                 "manufactured_by": "Herbal Hills",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 61,
//                 "name": "Diabocare Syrup",
//                 "description": "Supports glucose metabolism and improves pancreatic health.",
//                 "medicine_type": "Ayurvedic Syrup",
//                 "uses": ["Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/diabocare.png",
//                 "cost": 165,
//                 "discount": 10,
//                 "final_price": 148.5,
//                 "manufacturer": "Charak Pharma",
//                 "stock": 140,
//                 "rating": 4.6,
//                 "composition": "Each 10ml contains: Gymnema sylvestre (Gudmar) extract - 250mg, Pterocarpus marsupium (Vijaysar) extract - 150mg, Azadirachta indica (Neem) leaf extract - 100mg",
//                 "chemical_name": "Herbal Extract Formulation",
//                 "brand_name": "Diabocare",
//                 "company_name": "Charak Pharma Private Limited",
//                 "highlights": {
//                     "product_type": "Herbal Syrup",
//                     "pack_size": "200 ml bottle",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "For supportive therapy.",
//                     "usage_instruction": "Take 2 tsp after meals."
//                 },
//                 "brand": "Charak",
//                 "ingredients": ["Gudmar", "Vijaysar", "Neem"],
//                 "net_quantity": "200 ml",
//                 "packaging_type": "Bottle",
//                 "manufactured_by": "Charak Pharma Pvt Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 62,
//                 "name": "GlycoHeal Syrup",
//                 "description": "Herbal formulation that regulates blood sugar levels naturally.",
//                 "medicine_type": "Herbal Supplement Syrup",
//                 "uses": ["Glucose Regulation"],
//                 "images": "/assets/DiabetesCare/glycoheal.png",
//                 "cost": 190,
//                 "discount": 12,
//                 "final_price": 167.2,
//                 "manufacturer": "Zandu",
//                 "stock": 170,
//                 "rating": 4.6,
//                 "composition": "Each 10ml contains: Momordica charantia (Karela) extract - 200mg, Syzygium cumini (Jamun) extract - 150mg, Azadirachta indica (Neem) leaf extract - 100mg, Trigonella foenum-graecum (Methi) seed extract - 100mg",
//                 "chemical_name": "Herbal Extract Formulation",
//                 "brand_name": "Zandu GlycoHeal",
//                 "company_name": "Zandu Pharmaceutical Works Limited",
//                 "highlights": {
//                     "product_type": "Herbal",
//                     "pack_size": "200 ml bottle",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Not to be taken on empty stomach.",
//                     "usage_instruction": "Take 10 ml twice daily."
//                 },
//                 "brand": "Zandu",
//                 "ingredients": ["Karela", "Jamun", "Neem", "Methi"],
//                 "net_quantity": "200 ml",
//                 "packaging_type": "Bottle",
//                 "manufactured_by": "Zandu Care",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 63,
//                 "name": "Jamun Karela Plus Syrup",
//                 "description": "Combines Ayurvedic extracts to support pancreatic function.",
//                 "medicine_type": "Ayurvedic Syrup",
//                 "uses": ["Sugar Management"],
//                 "images": "/assets/DiabetesCare/jamun-karela-plus.png",
//                 "cost": 150,
//                 "discount": 10,
//                 "final_price": 135,
//                 "manufacturer": "VedaPure",
//                 "stock": 210,
//                 "rating": 4.5,
//                 "composition": "Each 10ml contains: Syzygium cumini (Jamun) pulp extract - 300mg, Momordica charantia (Karela) fruit extract - 200mg, Tinospora cordifolia (Giloy) stem extract - 100mg",
//                 "chemical_name": "Herbal Extract Formulation",
//                 "brand_name": "VedaPure Jamun Karela Plus",
//                 "company_name": "VedaPure Naturals Private Limited",
//                 "highlights": {
//                     "product_type": "Syrup",
//                     "pack_size": "200 ml bottle",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Shake well before use.",
//                     "usage_instruction": "Take 2 spoons twice daily."
//                 },
//                 "brand": "VedaPure",
//                 "ingredients": ["Jamun Pulp", "Karela Extract", "Giloy"],
//                 "net_quantity": "200 ml",
//                 "packaging_type": "Bottle",
//                 "manufactured_by": "VedaPure Naturals",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 64,
//                 "name": "AyurSlim Diabetes Syrup",
//                 "description": "Promotes sugar balance and supports weight management for diabetics.",
//                 "medicine_type": "Health Syrup",
//                 "uses": ["Diabetes Support"],
//                 "images": "/assets/DiabetesCare/ayurslim.png",
//                 "cost": 195,
//                 "discount": 10,
//                 "final_price": 175.5,
//                 "manufacturer": "Himalaya",
//                 "stock": 155,
//                 "rating": 4.7,
//                 "composition": "Each 10ml contains: Trigonella foenum-graecum (Methi) seed extract - 150mg, Momordica charantia (Karela) extract - 150mg, Pterocarpus marsupium (Vijaysar) extract - 100mg",
//                 "chemical_name": "Herbal Extract Formulation",
//                 "brand_name": "Himalaya AyurSlim",
//                 "company_name": "The Himalaya Drug Company",
//                 "highlights": {
//                     "product_type": "Syrup",
//                     "pack_size": "200 ml bottle",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Maintain diet alongside.",
//                     "usage_instruction": "Take 1 tablespoon twice a day."
//                 },
//                 "brand": "Himalaya",
//                 "ingredients": ["Fenugreek", "Karela", "Vijaysar"],
//                 "net_quantity": "200 ml",
//                 "packaging_type": "Bottle",
//                 "manufactured_by": "Himalaya Drug Company",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 65,
//                 "name": "GlucoBalance Tonic",
//                 "description": "A complete sugar support tonic that improves metabolism and energy.",
//                 "medicine_type": "Tonic Syrup",
//                 "uses": ["Type 2 Diabetes", "Metabolic Support"],
//                 "images": "/assets/DiabetesCare/glucobalance.png",
//                 "cost": 220,
//                 "discount": 12,
//                 "final_price": 193.6,
//                 "manufacturer": "Vicco",
//                 "stock": 200,
//                 "rating": 4.8,
//                 "composition": "Each 15ml contains: Azadirachta indica (Neem) leaf extract - 200mg, Syzygium cumini (Jamun) seed extract - 150mg, Tinospora cordifolia (Giloy) stem extract - 100mg, Ocimum sanctum (Tulsi) leaf extract - 50mg",
//                 "chemical_name": "Herbal Extract Formulation",
//                 "brand_name": "Vicco GlucoBalance",
//                 "company_name": "Vicco Laboratories",
//                 "highlights": {
//                     "product_type": "Tonic",
//                     "pack_size": "250 ml bottle",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Tonic only—does not cure diabetes.",
//                     "usage_instruction": "Take 15 ml twice daily."
//                 },
//                 "brand": "Vicco",
//                 "ingredients": ["Neem", "Jamun Seed", "Giloy", "Tulsi"],
//                 "net_quantity": "250 ml",
//                 "packaging_type": "Bottle",
//                 "manufactured_by": "Vicco Laboratories",
//                 "country_of_origin": "India"
//             }
//         ],
//         "top_rated": [
//             {
//                 "id": 1,
//                 "name": "Metformin 500mg",
//                 "description": "Highly trusted first-line oral tablet for Type 2 diabetes management.",
//                 "medicine_type": "Biguanide Tablet",
//                 "uses": ["Type 2 Diabetes", "Insulin Resistance"],
//                 "images": "/assets/DiabetesCare/metformin-500.png",
//                 "cost": 85,
//                 "discount": 10,
//                 "final_price": 76.5,
//                 "manufacturer": "USV",
//                 "stock": 220,
//                 "rating": 4.9,
//                 "composition": "Metformin Hydrochloride IP 500mg",
//                 "chemical_name": "Metformin Hydrochloride",
//                 "brand_name": "Glycomet",
//                 "company_name": "USV Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Consult your doctor before use.",
//                     "usage_instruction": "Take one tablet after breakfast."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Metformin Hydrochloride"],
//                 "net_quantity": "10 tablets",
//                 "weight": "10 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB-2025-TOP001",
//                 "manufactured_by": "Medicare Labs Pvt Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 2,
//                 "name": "Humalog 100IU KwikPen",
//                 "description": "Top-rated rapid acting insulin pen for mealtime glucose spikes.",
//                 "medicine_type": "Rapid Acting Insulin",
//                 "uses": ["Type 1 Diabetes", "Meal-time Sugar Control"],
//                 "images": "/assets/DiabetesCare/humalog.png",
//                 "cost": 860,
//                 "discount": 5,
//                 "final_price": 817,
//                 "manufacturer": "Eli Lilly",
//                 "stock": 85,
//                 "rating": 4.9,
//                 "composition": "Insulin Lispro (rDNA) IP 100IU/ml",
//                 "chemical_name": "Insulin Lispro",
//                 "brand_name": "Humalog",
//                 "company_name": "Eli Lilly and Company (India) Private Limited",
//                 "highlights": {
//                     "product_type": "Insulin Pen",
//                     "pack_size": "1 pen (3ml)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "Use under medical supervision.",
//                     "usage_instruction": "Inject 15 minutes before food."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Insulin Lispro"],
//                 "net_quantity": "3ml",
//                 "packaging_type": "Pen",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB-2025-TOP002",
//                 "manufactured_by": "Eli Lilly & Company",
//                 "country_of_origin": "USA"
//             },
//             {
//                 "id": 3,
//                 "name": "BeatO Curv Glucometer",
//                 "description": "Highly rated smart glucometer with mobile app integration.",
//                 "medicine_type": "Smart Glucometer",
//                 "uses": ["Sugar Tracking", "Mobile Monitoring"],
//                 "images": "/assets/DiabetesCare/beato-curv.png",
//                 "cost": 799,
//                 "discount": 15,
//                 "final_price": 679.15,
//                 "manufacturer": "BeatO",
//                 "stock": 200,
//                 "rating": 4.8,
//                 "composition": "Mini smartphone glucometer with proprietary test strips",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "BeatO Curv",
//                 "company_name": "Health Arx Technologies Private Limited",
//                 "highlights": {
//                     "product_type": "Glucometer",
//                     "pack_size": "Device + 20 test strips",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Requires smartphone with app.",
//                     "usage_instruction": "Insert into phone, insert strip, apply sample."
//                 },
//                 "brand": "BeatO",
//                 "ingredients": [],
//                 "net_quantity": "1 device",
//                 "weight": "90g",
//                 "packaging_type": "Box",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB-2025-TOP003",
//                 "manufactured_by": "Health Arx Technologies",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 4,
//                 "name": "Lantus Insulin Glargine 100IU",
//                 "description": "Top rated long-acting basal insulin for 24-hour coverage.",
//                 "medicine_type": "Long Acting Insulin",
//                 "uses": ["Type 1 Diabetes", "Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/lantus.png",
//                 "cost": 980,
//                 "discount": 8,
//                 "final_price": 901.6,
//                 "manufacturer": "Sanofi",
//                 "stock": 90,
//                 "rating": 4.9,
//                 "composition": "Insulin Glargine (rDNA) IP 100IU/ml",
//                 "chemical_name": "Insulin Glargine",
//                 "brand_name": "Lantus",
//                 "company_name": "Sanofi India Limited",
//                 "highlights": {
//                     "product_type": "Injection",
//                     "pack_size": "1 cartridge (3ml)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "France"
//                 },
//                 "information": {
//                     "disclaimer": "Store in fridge 2-8°C.",
//                     "usage_instruction": "Inject once daily at same time."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Insulin Glargine"],
//                 "net_quantity": "3ml",
//                 "packaging_type": "Cartridge",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB-2025-TOP004",
//                 "manufactured_by": "Sanofi Aventis",
//                 "country_of_origin": "France"
//             },
//             {
//                 "id": 5,
//                 "name": "Accu-Chek Active Glucometer",
//                 "description": "Reliable meter known for its accuracy and easy use.",
//                 "medicine_type": "Glucometer Device",
//                 "uses": ["Blood Sugar Monitoring"],
//                 "images": "/assets/DiabetesCare/accu-chek-active.png",
//                 "cost": 1450,
//                 "discount": 10,
//                 "final_price": 1305,
//                 "manufacturer": "Roche",
//                 "stock": 250,
//                 "rating": 4.8,
//                 "composition": "Blood Glucose Monitoring System with glucose oxidase-based test strips",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "Accu-Chek Active",
//                 "company_name": "Roche Diabetes Care India Private Limited",
//                 "highlights": {
//                     "product_type": "Glucometer",
//                     "pack_size": "Device + 10 strips",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "Germany"
//                 },
//                 "information": {
//                     "disclaimer": "Use only original strips for accurate results.",
//                     "usage_instruction": "Insert strip → apply small blood sample."
//                 },
//                 "brand": "Accu-Chek",
//                 "ingredients": [],
//                 "net_quantity": "1 device",
//                 "weight": "150g",
//                 "packaging_type": "Box",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB-2025-TOP005",
//                 "manufactured_by": "Roche Diagnostics",
//                 "country_of_origin": "Germany"
//             },
//             {
//                 "id": 6,
//                 "name": "Empagliflozin 10mg",
//                 "description": "Top-rated SGLT2 inhibitor offering sugar control plus heart protection.",
//                 "medicine_type": "Tablet",
//                 "uses": ["Type 2 Diabetes", "Cardiovascular Protection"],
//                 "images": "/assets/DiabetesCare/empagliflozin.png",
//                 "cost": 330,
//                 "discount": 10,
//                 "final_price": 297,
//                 "manufacturer": "Boehringer",
//                 "stock": 110,
//                 "rating": 4.7,
//                 "composition": "Empagliflozin IP 10mg",
//                 "chemical_name": "Empagliflozin",
//                 "brand_name": "Jardiance",
//                 "company_name": "Boehringer Ingelheim India Private Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "Germany"
//                 },
//                 "information": {
//                     "disclaimer": "Drink ample water while using.",
//                     "usage_instruction": "Take in morning."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Empagliflozin"],
//                 "net_quantity": "10 tablets",
//                 "weight": "10 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB-2025-TOP006",
//                 "manufactured_by": "Boehringer Pharma",
//                 "country_of_origin": "Germany"
//             },
//             {
//                 "id": 7,
//                 "name": "Vildagliptin 50mg",
//                 "description": "Highly rated DPP-4 inhibitor for type 2 diabetes management.",
//                 "medicine_type": "Tablet",
//                 "uses": ["Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/vildagliptin.png",
//                 "cost": 210,
//                 "discount": 10,
//                 "final_price": 189,
//                 "manufacturer": "Novartis",
//                 "stock": 130,
//                 "rating": 4.7,
//                 "composition": "Vildagliptin IP 50mg",
//                 "chemical_name": "Vildagliptin",
//                 "brand_name": "Galvus",
//                 "company_name": "Novartis India Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (15 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "Switzerland"
//                 },
//                 "information": {
//                     "disclaimer": "Monitor sugar levels after initiation.",
//                     "usage_instruction": "One tablet daily or as advised."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Vildagliptin"],
//                 "net_quantity": "15 tablets",
//                 "weight": "15 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB-2025-TOP007",
//                 "manufactured_by": "Novartis Pharma",
//                 "country_of_origin": "Switzerland"
//             },
//             {
//                 "id": 8,
//                 "name": "Loperamide 2mg",
//                 "description": "Highly rated anti-diarrheal often used by diabetics during GI upset.",
//                 "medicine_type": "Tablet",
//                 "uses": ["Diarrhea", "Loose motion"],
//                 "images": "/assets/DiabetesCare/loperamide.png",
//                 "cost": 40,
//                 "discount": 10,
//                 "final_price": 36,
//                 "manufacturer": "Sun Pharma",
//                 "stock": 210,
//                 "rating": 4.6,
//                 "composition": "Loperamide Hydrochloride IP 2mg",
//                 "chemical_name": "Loperamide Hydrochloride",
//                 "brand_name": "Loperamide / Lopamide",
//                 "company_name": "Sun Pharmaceutical Industries Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (6 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Use only when necessary.",
//                     "usage_instruction": "Take 1 tablet after each loose motion."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Loperamide"],
//                 "net_quantity": "6 tablets",
//                 "weight": "6 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB-2025-TOP008",
//                 "manufactured_by": "Sun Pharmaceutical Industries Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 9,
//                 "name": "Teneligliptin 20mg",
//                 "description": "Popular DPP-4 inhibitor with excellent rating for type-2 diabetes management.",
//                 "medicine_type": "Tablet",
//                 "uses": ["Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/teneligliptin.png",
//                 "cost": 130,
//                 "discount": 10,
//                 "final_price": 117,
//                 "manufacturer": "Cipla",
//                 "stock": 190,
//                 "rating": 4.6,
//                 "composition": "Teneligliptin Hydrobromide Hydrate IP equivalent to Teneligliptin 20mg",
//                 "chemical_name": "Teneligliptin Hydrobromide",
//                 "brand_name": "Teneligliptin / Ziten",
//                 "company_name": "Cipla Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Review sugar occasionally.",
//                     "usage_instruction": "Take once daily."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Teneligliptin"],
//                 "net_quantity": "10 tablets",
//                 "weight": "10 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB-2025-TOP009",
//                 "manufactured_by": "Cipla Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 10,
//                 "name": "Dapagliflozin 10mg",
//                 "description": "Highly rated SGLT2 inhibitor for dual benefit of sugar and weight management.",
//                 "medicine_type": "Tablet",
//                 "uses": ["Type 2 Diabetes", "Weight Management"],
//                 "images": "/assets/DiabetesCare/dapagliflozin.png",
//                 "cost": 280,
//                 "discount": 10,
//                 "final_price": 252,
//                 "manufacturer": "AstraZeneca",
//                 "stock": 140,
//                 "rating": 4.8,
//                 "composition": "Dapagliflozin Propanediol Monohydrate IP equivalent to Dapagliflozin 10mg",
//                 "chemical_name": "Dapagliflozin Propanediol",
//                 "brand_name": "Forxiga",
//                 "company_name": "AstraZeneca Pharma India Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "UK"
//                 },
//                 "information": {
//                     "disclaimer": "Check kidney function periodically.",
//                     "usage_instruction": "Take in the morning."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Dapagliflozin"],
//                 "net_quantity": "10 tablets",
//                 "weight": "10 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Diabetes Store",
//                 "seller_address": "123 Medical Street, Hyderabad, India",
//                 "seller_license": "MED-DIAB-2025-TOP010",
//                 "manufactured_by": "AstraZeneca Pharma",
//                 "country_of_origin": "UK"
//             }
//         ],
//         "recommendations": [
//             {
//                 "id": 1,
//                 "name": "Metformin SR 500mg",
//                 "description": "Extended-release version of metformin for simplicity and better tolerability.",
//                 "medicine_type": "Tablet (SR)",
//                 "uses": ["Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/metformin-sr.png",
//                 "cost": 75,
//                 "discount": 10,
//                 "final_price": 67.5,
//                 "manufacturer": "USV",
//                 "stock": 180,
//                 "rating": 4.7,
//                 "composition": "Metformin Hydrochloride Sustained Release IP 500mg",
//                 "chemical_name": "Metformin Hydrochloride",
//                 "brand_name": "Glycomet-GP / Gluformin SR",
//                 "company_name": "USV Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Not for use in patients with kidney issues without monitoring.",
//                     "usage_instruction": "Take once daily after evening meal."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Metformin Hydrochloride"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "seller_name": "Medicare Diabetes Store",
//                 "manufactured_by": "USV Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 2,
//                 "name": "Gliclazide 80mg",
//                 "description": "Recommended sulfonylurea for effective blood sugar reduction.",
//                 "medicine_type": "Sulfonylurea Tablet",
//                 "uses": ["Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/gliclazide.png",
//                 "cost": 72,
//                 "discount": 8,
//                 "final_price": 66.24,
//                 "manufacturer": "Sun Pharma",
//                 "stock": 160,
//                 "rating": 4.6,
//                 "composition": "Gliclazide IP 80mg",
//                 "chemical_name": "Gliclazide",
//                 "brand_name": "Diamicron",
//                 "company_name": "Sun Pharmaceutical Industries Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Risk of hypoglycemia – monitor regularly.",
//                     "usage_instruction": "Take 1 tablet before breakfast."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Gliclazide"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "manufacturer": "Sun Pharma",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 3,
//                 "name": "Linagliptin 5mg",
//                 "description": "Modern DPP-4 inhibitor with once-daily dosing and minimal dosing adjustment.",
//                 "medicine_type": "Tablet",
//                 "uses": ["Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/linagliptin.png",
//                 "cost": 450,
//                 "discount": 10,
//                 "final_price": 405,
//                 "manufacturer": "Boehringer Ingelheim",
//                 "stock": 120,
//                 "rating": 4.7,
//                 "composition": "Linagliptin IP 5mg",
//                 "chemical_name": "Linagliptin",
//                 "brand_name": "Trajenta",
//                 "company_name": "Boehringer Ingelheim India Private Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "Germany"
//                 },
//                 "information": {
//                     "disclaimer": "Requires occasional kidney check.",
//                     "usage_instruction": "Take 1 tablet daily."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Linagliptin"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "manufactured_by": "Boehringer Ingelheim",
//                 "country_of_origin": "Germany"
//             },
//             {
//                 "id": 4,
//                 "name": "Canagliflozin 100mg",
//                 "description": "Recommendation for sugar control and cardiovascular benefit (SGLT2 inhibitor).",
//                 "medicine_type": "Tablet",
//                 "uses": ["Type 2 Diabetes", "Heart Protection"],
//                 "images": "/assets/DiabetesCare/canagliflozin.png",
//                 "cost": 380,
//                 "discount": 10,
//                 "final_price": 342,
//                 "manufacturer": "Janssen",
//                 "stock": 90,
//                 "rating": 4.6,
//                 "composition": "Canagliflozin Hemihydrate IP equivalent to Canagliflozin 100mg",
//                 "chemical_name": "Canagliflozin Hemihydrate",
//                 "brand_name": "Invokana",
//                 "company_name": "Janssen Pharmaceuticals India",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "Check for leg swelling and kidney function.",
//                     "usage_instruction": "Take once daily before breakfast."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Canagliflozin"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "manufactured_by": "Janssen Pharmaceuticals",
//                 "country_of_origin": "USA"
//             },
//             {
//                 "id": 5,
//                 "name": "GlucoOne BG-03 Glucometer",
//                 "description": "Recommended glucometer with accurate strips and digital display.",
//                 "medicine_type": "Glucometer Device",
//                 "uses": ["Blood Sugar Testing"],
//                 "images": "/assets/DiabetesCare/glucoone-bg03.png",
//                 "cost": 999,
//                 "discount": 10,
//                 "final_price": 899.1,
//                 "manufacturer": "Dr Morepen",
//                 "stock": 100,
//                 "rating": 4.7,
//                 "composition": "Glucose meter with electrochemical test strip technology",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "GlucoOne BG-03",
//                 "company_name": "Morepen Laboratories Limited",
//                 "highlights": {
//                     "product_type": "Glucometer",
//                     "pack_size": "Device + 10 strips + Lancets",
//                     "shelf_life": "30 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Keep strips in cool and dry place.",
//                     "usage_instruction": "Insert test strip, apply drop of blood."
//                 },
//                 "brand": "GlucoOne",
//                 "net_quantity": "1 device",
//                 "weight": "140g",
//                 "packaging_type": "Box",
//                 "manufactured_by": "Morepen Labs Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 6,
//                 "name": "Mixtard 30 100IU",
//                 "description": "Recommended premixed insulin combination for daily use.",
//                 "medicine_type": "Premixed Insulin",
//                 "uses": ["Type 1 Diabetes", "Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/mixtard.png",
//                 "cost": 530,
//                 "discount": 6,
//                 "final_price": 498.2,
//                 "manufacturer": "Novo Nordisk",
//                 "stock": 130,
//                 "rating": 4.7,
//                 "composition": "Biphasic Isophane Insulin (30% Soluble Insulin + 70% Isophane Insulin) 100IU/ml",
//                 "chemical_name": "Insulin Human (rDNA) - Biphasic",
//                 "brand_name": "Mixtard",
//                 "company_name": "Novo Nordisk India Private Limited",
//                 "highlights": {
//                     "product_type": "Injection",
//                     "pack_size": "1 vial (10ml)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "Denmark"
//                 },
//                 "information": {
//                     "disclaimer": "Use under medical guidance only.",
//                     "usage_instruction": "Inject before breakfast & dinner."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Regular Insulin", "NPH Insulin"],
//                 "net_quantity": "10ml",
//                 "packaging_type": "Vial",
//                 "manufactured_by": "Novo Nordisk A/S",
//                 "country_of_origin": "Denmark"
//             },
//             {
//                 "id": 7,
//                 "name": "OneTouch Verio Flex",
//                 "description": "Recommended Bluetooth-enabled glucometer for app integration.",
//                 "medicine_type": "Smart Glucometer",
//                 "uses": ["Blood Sugar Tracking", "Remote Monitoring"],
//                 "images": "/assets/DiabetesCare/onetouch-verio.png",
//                 "cost": 2099,
//                 "discount": 10,
//                 "final_price": 1889.1,
//                 "manufacturer": "LifeScan",
//                 "stock": 70,
//                 "rating": 4.9,
//                 "composition": "Bluetooth-enabled blood glucose meter with ColorSure technology",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "OneTouch Verio Flex",
//                 "company_name": "LifeScan India Private Limited",
//                 "highlights": {
//                     "product_type": "Smart Glucometer",
//                     "pack_size": "Device + 10 strips",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "Sync with app regularly.",
//                     "usage_instruction": "Insert strip → apply blood sample."
//                 },
//                 "brand": "OneTouch",
//                 "net_quantity": "1 device",
//                 "weight": "170g",
//                 "packaging_type": "Box",
//                 "manufactured_by": "LifeScan Inc.",
//                 "country_of_origin": "USA"
//             },
//             {
//                 "id": 8,
//                 "name": "Insulin Glargine Cartridge 100IU",
//                 "description": "Recommended long-acting insulin cartridge for stable glucose control.",
//                 "medicine_type": "Long Acting Insulin",
//                 "uses": ["Type 1 Diabetes", "Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/glargine-cart.png",
//                 "cost": 930,
//                 "discount": 8,
//                 "final_price": 855.6,
//                 "manufacturer": "Sanofi",
//                 "stock": 90,
//                 "rating": 4.7,
//                 "composition": "Insulin Glargine (rDNA) IP 100IU/ml",
//                 "chemical_name": "Insulin Glargine",
//                 "brand_name": "Lantus / Basaglar",
//                 "company_name": "Sanofi India Limited",
//                 "highlights": {
//                     "product_type": "Cartridge",
//                     "pack_size": "1 cartridge (3ml)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "France"
//                 },
//                 "information": {
//                     "disclaimer": "Use compatible pen only.",
//                     "usage_instruction": "Inject once daily."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Insulin Glargine"],
//                 "net_quantity": "3ml",
//                 "packaging_type": "Cartridge",
//                 "manufactured_by": "Sanofi Aventis",
//                 "country_of_origin": "France"
//             },
//             {
//                 "id": 9,
//                 "name": "BeatO Smart Glucometer",
//                 "description": "Recommendation for diabetics needing mobile-connected monitoring on the go.",
//                 "medicine_type": "Smart Glucometer",
//                 "uses": ["Sugar Monitoring"],
//                 "images": "/assets/DiabetesCare/beato.png",
//                 "cost": 999,
//                 "discount": 20,
//                 "final_price": 799.2,
//                 "manufacturer": "BeatO",
//                 "stock": 180,
//                 "rating": 4.6,
//                 "composition": "Digital glucometer with smartphone connectivity and test strips",
//                 "chemical_name": "Not applicable (Medical Device)",
//                 "brand_name": "BeatO",
//                 "company_name": "Health Arx Technologies Private Limited",
//                 "highlights": {
//                     "product_type": "Glucometer",
//                     "pack_size": "Device + 20 test strips",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Requires smartphone and app installation.",
//                     "usage_instruction": "Insert strip into phone and test."
//                 },
//                 "brand": "BeatO",
//                 "net_quantity": "1 device",
//                 "weight": "100g",
//                 "packaging_type": "Box",
//                 "manufactured_by": "Health Arx Technologies",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 10,
//                 "name": "Teneligliptin 20mg",
//                 "description": "Recommended DPP-4 inhibitor for cost-effective diabetes management.",
//                 "medicine_type": "Tablet",
//                 "uses": ["Type 2 Diabetes"],
//                 "images": "/assets/DiabetesCare/teneligliptin.png",
//                 "cost": 130,
//                 "discount": 10,
//                 "final_price": 117,
//                 "manufacturer": "Cipla",
//                 "stock": 190,
//                 "rating": 4.6,
//                 "composition": "Teneligliptin Hydrobromide Hydrate IP equivalent to Teneligliptin 20mg",
//                 "chemical_name": "Teneligliptin Hydrobromide",
//                 "brand_name": "Teneligliptin / Ziten",
//                 "company_name": "Cipla Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Check for kidney/liver function periodically.",
//                     "usage_instruction": "Take once daily."
//                 },
//                 "brand": "Medicare Diabetes",
//                 "ingredients": ["Teneligliptin"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "manufacturer": "Cipla Ltd",
//                 "country_of_origin": "India"
//             }
//         ]
//     },

//     cardiology: {
//         "medications": [
//             {
//                 "id": 66,
//                 "name": "Clopidogrel 75mg",
//                 "route": "clopvex-75",
//                 "brand": "Clopigold 75",
//                 "price": "₹299",
//                 "originalPrice": "₹450",
//                 "savings": "34%",
//                 "image": "/assets/Cardiology/heart1.png",
//                 "description": "It offers fast-acting protection for cardiovascular health.",
//                 "composition": "Clopvex-75 (Clopidogrel 75 mg)",
//                 "chemical_name": "Clopidogrel Bisulfate",
//                 "company_name": "Dr. Reddy's Laboratories Ltd"
//             },
//             {
//                 "id": 67,
//                 "name": "Atorvastatin 40 mg & Clopidogrel 75 mg",
//                 "route": "atortest-cz",
//                 "brand": "Atvastrin CV 40/75",
//                 "price": "₹599",
//                 "originalPrice": "₹850",
//                 "savings": "30%",
//                 "image": "/assets/Cardiology/heart2.png",
//                 "description": "It offers a high-quality, cost-effective solution approved by DCGI.",
//                 "composition": "ATORTEST-CZ (Atorvastatin 40 mg & Clopidogrel 75 mg)",
//                 "chemical_name": "Atorvastatin Calcium + Clopidogrel Bisulfate",
//                 "company_name": "Cadila Healthcare Ltd (Zydus)"
//             },
//             {
//                 "id": 68,
//                 "name": "Atorvastatin 20mg & Clopidogrel 75mg",
//                 "route": "clopvex-at20",
//                 "brand": "Dr. Reddy's",
//                 "price": "₹699",
//                 "originalPrice": "₹950",
//                 "savings": "26%",
//                 "image": "/assets/Cardiology/heart3.png",
//                 "description": "It helps reduce the risk of heart attack, stroke, and angina.",
//                 "composition": "CLOPVEX–AT20 (Clopidogrel 75mg + Atorvastatin 20mg)",
//                 "chemical_name": "Clopidogrel Bisulfate + Atorvastatin Calcium",
//                 "company_name": "Dr. Reddy's Laboratories Ltd"
//             },
//             {
//                 "id": 69,
//                 "name": "ROSUTAS PLUS",
//                 "route": "rosutas-plus",
//                 "brand": "Lupin",
//                 "price": "₹799",
//                 "originalPrice": "₹1,100",
//                 "savings": "27%",
//                 "image": "/assets/Cardiology/heart4.png",
//                 "description": "This triple-action formula helps lower cholesterol, prevent blood clots, and reduce the risk of heart attack and stroke.",
//                 "composition": "ROSUTAS PLUS (Rosuvastatin 10mg, Aspirin75 mg, Clopidogrel 75mg)",
//                 "chemical_name": "Rosuvastatin Calcium + Acetylsalicylic Acid + Clopidogrel Bisulfate",
//                 "company_name": "Lupin Limited"
//             },
//             {
//                 "id": 70,
//                 "name": "Clopidogrel 75mg",
//                 "route": "clopilet-75",
//                 "brand": "Zydus",
//                 "price": "₹279",
//                 "originalPrice": "₹420",
//                 "savings": "34%",
//                 "image": "/assets/Cardiology/heart5.png",
//                 "description": "It helps prevent blood clot formation, reducing the risk of heart attack and stroke.",
//                 "composition": "Clopilet (Clopidogrel 75 mg)",
//                 "chemical_name": "Clopidogrel Bisulfate",
//                 "company_name": "Cadila Healthcare Ltd (Zydus)"
//             },
//             {
//                 "id": 71,
//                 "name": "Clopivas 75 & 150",
//                 "route": "clopivas",
//                 "brand": "Sun Pharma",
//                 "price": "₹259",
//                 "originalPrice": "₹390",
//                 "savings": "34%",
//                 "image": "/assets/Cardiology/heart6.png",
//                 "description": "It helps prevent harmful blood clots, lowering the risk of heart attack and stroke.",
//                 "composition": "Clopivas (Clopidogrel 75mg/150mg)",
//                 "chemical_name": "Clopidogrel Bisulfate",
//                 "company_name": "Sun Pharmaceutical Industries Ltd"
//             },
//             {
//                 "id": 72,
//                 "name": "Clopidogrel 75mg",
//                 "route": "zylokor-75",
//                 "brand": "Torrent",
//                 "price": "₹319",
//                 "originalPrice": "₹480",
//                 "savings": "34%",
//                 "image": "/assets/Cardiology/heart7.png",
//                 "description": "Trusted Clopidogrel formulation",
//                 "composition": "Clopidogrel Bisulfate 75mg",
//                 "chemical_name": "Clopidogrel Bisulfate",
//                 "company_name": "Torrent Pharmaceuticals Ltd"
//             },
//             {
//                 "id": 73,
//                 "name": "Ceruvin 75mg",
//                 "route": "ceruvin-75",
//                 "brand": "Aurobindo",
//                 "price": "₹269",
//                 "originalPrice": "₹410",
//                 "savings": "34%",
//                 "image": "/assets/Cardiology/heart8.png",
//                 "description": "Reliable antiplatelet therapy",
//                 "composition": "Clopidogrel Bisulfate 75mg",
//                 "chemical_name": "Clopidogrel Bisulfate",
//                 "company_name": "Aurobindo Pharma Ltd"
//             },
//             {
//                 "id": 74,
//                 "name": "Aspirin 75mg",
//                 "route": "ecosprin-75",
//                 "brand": "USV",
//                 "price": "₹189",
//                 "originalPrice": "₹280",
//                 "savings": "32%",
//                 "image": "/assets/Cardiology/heart9.png",
//                 "description": "Prevents blood clot formation and reduces risk of heart attacks.",
//                 "composition": "Ecosprin (Aspirin 75mg)",
//                 "chemical_name": "Acetylsalicylic Acid",
//                 "company_name": "USV Private Limited"
//             },
//             {
//                 "id": 75,
//                 "name": "Rosuvastatin 10mg",
//                 "route": "rozavel-10",
//                 "brand": "Sun Pharma",
//                 "price": "₹349",
//                 "originalPrice": "₹520",
//                 "savings": "33%",
//                 "image": "/assets/Cardiology/heart10.png",
//                 "description": "Lowers cholesterol levels and reduces cardiovascular risks.",
//                 "composition": "Rozavel (Rosuvastatin 10mg)",
//                 "chemical_name": "Rosuvastatin Calcium",
//                 "company_name": "Sun Pharmaceutical Industries Ltd"
//             },
//             {
//                 "id": 76,
//                 "name": "Atorvastatin 10mg",
//                 "route": "atorva-10",
//                 "brand": "Lupin",
//                 "price": "₹229",
//                 "originalPrice": "₹340",
//                 "savings": "33%",
//                 "image": "/assets/Cardiology/heart11.png",
//                 "description": "Effective statin therapy for cholesterol management.",
//                 "composition": "Atorva (Atorvastatin 10mg)",
//                 "chemical_name": "Atorvastatin Calcium",
//                 "company_name": "Lupin Limited"
//             },
//             {
//                 "id": 77,
//                 "name": "Ticagrelor 90mg",
//                 "route": "ticagrelor-90",
//                 "brand": "AstraZeneca",
//                 "price": "₹899",
//                 "originalPrice": "₹1,350",
//                 "savings": "33%",
//                 "image": "/assets/Cardiology/heart12.png",
//                 "description": "Advanced antiplatelet therapy for acute coronary syndrome.",
//                 "composition": "Brilinta (Ticagrelor 90mg)",
//                 "chemical_name": "Ticagrelor",
//                 "company_name": "AstraZeneca Pharma India Ltd"
//             },
//             {
//                 "id": 78,
//                 "name": "Prasugrel 10mg",
//                 "route": "prasugrel-10",
//                 "brand": "Lilly",
//                 "price": "₹799",
//                 "originalPrice": "₹1,200",
//                 "savings": "33%",
//                 "image": "/assets/Cardiology/heart13.png",
//                 "description": "Potent antiplatelet medication for heart attack prevention.",
//                 "composition": "Effient (Prasugrel 10mg)",
//                 "chemical_name": "Prasugrel Hydrochloride",
//                 "company_name": "Eli Lilly and Company (India) Pvt. Ltd."
//             },
//             {
//                 "id": 79,
//                 "name": "Ezetimibe 10mg",
//                 "route": "ezetimibe-10",
//                 "brand": "MSN",
//                 "price": "₹459",
//                 "originalPrice": "₹690",
//                 "savings": "33%",
//                 "image": "/assets/Cardiology/heart14.png",
//                 "description": "Reduces cholesterol absorption in the intestine.",
//                 "composition": "Ezetrol (Ezetimibe 10mg)",
//                 "chemical_name": "Ezetimibe",
//                 "company_name": "MSN Laboratories Pvt. Ltd."
//             },
//             {
//                 "id": 80,
//                 "name": "Clopidogrel 150mg",
//                 "route": "clopidogrel-150",
//                 "brand": "Cipla",
//                 "price": "₹389",
//                 "originalPrice": "₹580",
//                 "savings": "33%",
//                 "image": "/assets/Cardiology/heart15.png",
//                 "description": "Higher strength antiplatelet therapy for enhanced protection.",
//                 "composition": "Clopivas (Clopidogrel 150mg)",
//                 "chemical_name": "Clopidogrel Bisulfate",
//                 "company_name": "Cipla Ltd"
//             },
//             {
//                 "id": 81,
//                 "name": "Rosuvastatin 20mg",
//                 "route": "rozavel-20",
//                 "brand": "Sun Pharma",
//                 "price": "₹499",
//                 "originalPrice": "₹750",
//                 "savings": "33%",
//                 "image": "/assets/Cardiology/heart16.png",
//                 "description": "Higher potency statin for aggressive cholesterol control.",
//                 "composition": "Rozavel (Rosuvastatin 20mg)",
//                 "chemical_name": "Rosuvastatin Calcium",
//                 "company_name": "Sun Pharmaceutical Industries Ltd"
//             },
//             {
//                 "id": 82,
//                 "name": "Atorvastatin 20mg",
//                 "route": "atorva-20",
//                 "brand": "Lupin",
//                 "price": "₹329",
//                 "originalPrice": "₹490",
//                 "savings": "33%",
//                 "image": "/assets/Cardiology/heart17.png",
//                 "description": "Medium strength statin for balanced cholesterol management.",
//                 "composition": "Atorva (Atorvastatin 20mg)",
//                 "chemical_name": "Atorvastatin Calcium",
//                 "company_name": "Lupin Limited"
//             },
//             {
//                 "id": 83,
//                 "name": "Aspirin 150mg",
//                 "route": "ecosprin-150",
//                 "brand": "USV",
//                 "price": "₹219",
//                 "originalPrice": "₹330",
//                 "savings": "34%",
//                 "image": "/assets/Cardiology/heart18.png",
//                 "description": "Higher strength aspirin for enhanced antiplatelet effect.",
//                 "composition": "Ecosprin (Aspirin 150mg)",
//                 "chemical_name": "Acetylsalicylic Acid",
//                 "company_name": "USV Private Limited"
//             }
//         ],

//         "featuredMedication": {
//             "name": "Cardiac Care Combo Pack",
//             "brand": "Heart Protection Bundle",
//             "price": "₹1,299",
//             "originalPrice": "₹1,999",
//             "savings": "35%",
//             "image": "/assets/Cardiology/Cardiac_Care_Combo_Pack.jpg",
//             "description": "Complete heart attack prevention medication bundle with antiplatelet and statin therapy",
//             "composition": "Contains: Clopidogrel 75mg, Aspirin 75mg, Atorvastatin 10mg",
//             "chemical_name": "Clopidogrel Bisulfate + Acetylsalicylic Acid + Atorvastatin Calcium",
//             "company_name": "CardioCare Pharmaceuticals"
//         }
//     },

//     liver: {
//         "tablets": [
//             {
//                 "id": 84,
//                 "name": "Ursodeoxycholic Acid 300mg",
//                 "description": "Dissolves cholesterol gallstones and treats primary biliary cirrhosis.",
//                 "medicine_type": "Gallstone Dissolution Agent",
//                 "uses": ["Gallstones", "Primary Biliary Cirrhosis", "Liver Protection"],
//                 "images": "/assets/LiverCare/urso.png",
//                 "cost": 480,
//                 "discount": 10,
//                 "final_price": 432,
//                 "manufacturer": "Abbott",
//                 "stock": 150,
//                 "rating": 4.8,
//                 "composition": "Ursodeoxycholic Acid IP 300mg",
//                 "chemical_name": "Ursodeoxycholic Acid",
//                 "brand_name": "Ursocol / Udiliv",
//                 "company_name": "Abbott India Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Take regularly for 6-12 months for gallstone dissolution.",
//                     "usage_instruction": "Take 1 tablet twice daily after meals."
//                 },
//                 "brand": "Medicare Liver Care",
//                 "material_type_free": "Chemical based formulation",
//                 "ingredients": ["Ursodeoxycholic Acid"],
//                 "bio_friendly": "Yes",
//                 "net_quantity": "10 tablets",
//                 "weight": "10 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Liver Care Store",
//                 "seller_address": "456 Health Avenue, Mumbai, India",
//                 "seller_license": "MED-LIVER2025-001",
//                 "manufactured_by": "Medicare Labs Pvt Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 85,
//                 "name": "Silymarin 140mg",
//                 "description": "Milk thistle extract that protects liver cells and promotes regeneration.",
//                 "medicine_type": "Hepatoprotective",
//                 "uses": ["Liver Detox", "Alcohol-induced Liver Damage", "Fatty Liver"],
//                 "images": "/assets/LiverCare/silymarin.png",
//                 "cost": 220,
//                 "discount": 12,
//                 "final_price": 193.6,
//                 "manufacturer": "Cipla",
//                 "stock": 180,
//                 "rating": 4.7,
//                 "composition": "Silymarin IP (Standardized Milk Thistle Extract) 140mg",
//                 "chemical_name": "Silymarin",
//                 "brand_name": "Silymarin / Silybon",
//                 "company_name": "Cipla Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Not a substitute for alcohol abstinence.",
//                     "usage_instruction": "Take 1 tablet twice daily before meals."
//                 },
//                 "brand": "Medicare Liver Care",
//                 "material_type_free": "Herbal Extract",
//                 "ingredients": ["Silymarin (Milk Thistle Extract)"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Liver Care Store",
//                 "seller_address": "456 Health Avenue, Mumbai, India",
//                 "seller_license": "MED-LIVER2025-001",
//                 "manufactured_by": "Cipla Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 86,
//                 "name": "L-Ornithine L-Aspartate 500mg",
//                 "description": "Reduces ammonia levels in blood and improves liver function.",
//                 "medicine_type": "Ammonia Reducer",
//                 "uses": ["Hepatic Encephalopathy", "Liver Cirrhosis"],
//                 "images": "/assets/LiverCare/l-ornithine.png",
//                 "cost": 320,
//                 "discount": 10,
//                 "final_price": 288,
//                 "manufacturer": "Zydus",
//                 "stock": 130,
//                 "rating": 4.8,
//                 "composition": "L-Ornithine L-Aspartate IP 500mg",
//                 "chemical_name": "L-Ornithine L-Aspartate",
//                 "brand_name": "Hepamerz / Lornasa",
//                 "company_name": "Zydus Cadila Healthcare Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Use under medical supervision in severe liver disease.",
//                     "usage_instruction": "Take 2 tablets three times daily."
//                 },
//                 "brand": "Medicare Liver Care",
//                 "ingredients": ["L-Ornithine L-Aspartate"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "manufactured_by": "Zydus Healthcare",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 87,
//                 "name": "Metadoxine 500mg",
//                 "description": "Accelerates alcohol metabolism and protects liver from alcoholic damage.",
//                 "medicine_type": "Alcohol Metabolism Enhancer",
//                 "uses": ["Alcoholic Liver Disease", "Fatty Liver", "Alcohol Detox"],
//                 "images": "/assets/LiverCare/metadoxine.png",
//                 "cost": 280,
//                 "discount": 10,
//                 "final_price": 252,
//                 "manufacturer": "Mankind",
//                 "stock": 150,
//                 "rating": 4.6,
//                 "composition": "Metadoxine IP 500mg",
//                 "chemical_name": "Metadoxine",
//                 "brand_name": "Metadoxine / Liverdox",
//                 "company_name": "Mankind Pharma Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Should not be used as license for excessive alcohol consumption.",
//                     "usage_instruction": "Take 1 tablet twice daily."
//                 },
//                 "brand": "Medicare Liver Care",
//                 "ingredients": ["Metadoxine"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "seller_name": "Medicare Liver Care Store",
//                 "manufactured_by": "Mankind Pharma",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 88,
//                 "name": "Liv-52 DS",
//                 "description": "Classical Ayurvedic liver tonic with hepatoprotective properties.",
//                 "medicine_type": "Ayurvedic Hepatoprotective",
//                 "uses": ["Liver Tonic", "Appetite Improvement", "Liver Protection"],
//                 "images": "/assets/LiverCare/liv52.png",
//                 "cost": 95,
//                 "discount": 10,
//                 "final_price": 85.5,
//                 "manufacturer": "Himalaya",
//                 "stock": 160,
//                 "rating": 4.6,
//                 "composition": "Each tablet contains: Capparis spinosa (Himsra) 65mg, Cichorium intybus (Kasani) 65mg, Solanum nigrum (Kakamachi) 32mg, Cassia occidentalis (Kasamarda) 32mg, Terminalia arjuna (Arjuna) 16mg, Achillea millefolium (Biranjasipha) 16mg, Tamarix gallica (Jhavuka) 16mg",
//                 "chemical_name": "Herbal Formulation",
//                 "brand_name": "Liv-52",
//                 "company_name": "The Himalaya Drug Company",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "For supplementary therapy only.",
//                     "usage_instruction": "Take 2 tablets twice daily."
//                 },
//                 "ingredients": ["Himsra", "Kasani", "Kakamachi", "Kasamarda", "Arjuna"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "manufactured_by": "Himalaya Drug Company",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 89,
//                 "name": "Rifaximin 550mg",
//                 "description": "Gut-selective antibiotic for hepatic encephalopathy prevention.",
//                 "medicine_type": "Gut Sterilizer",
//                 "uses": ["Hepatic Encephalopathy", "Traveler's Diarrhea"],
//                 "images": "/assets/LiverCare/rifaximin.png",
//                 "cost": 450,
//                 "discount": 10,
//                 "final_price": 405,
//                 "manufacturer": "Lupin",
//                 "stock": 120,
//                 "rating": 4.7,
//                 "composition": "Rifaximin IP 550mg",
//                 "chemical_name": "Rifaximin",
//                 "brand_name": "Rifagut / R-Cin",
//                 "company_name": "Lupin Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Prescription required for use.",
//                     "usage_instruction": "Take 1 tablet twice daily."
//                 },
//                 "ingredients": ["Rifaximin"],
//                 "packaging_type": "Strip",
//                 "manufactured_by": "Lupin Pharma",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 90,
//                 "name": "Pentoxifylline 400mg SR",
//                 "description": "Improves blood flow through liver and reduces fibrosis.",
//                 "medicine_type": "Anti-fibrotic",
//                 "uses": ["Alcoholic Hepatitis", "Liver Fibrosis"],
//                 "images": "/assets/LiverCare/pentoxifylline.png",
//                 "cost": 130,
//                 "discount": 10,
//                 "final_price": 117,
//                 "manufacturer": "Cipla",
//                 "stock": 190,
//                 "rating": 4.6,
//                 "composition": "Pentoxifylline Sustained Release IP 400mg",
//                 "chemical_name": "Pentoxifylline",
//                 "brand_name": "Trental / Pentoxil",
//                 "company_name": "Cipla Limited",
//                 "highlights": {
//                     "product_type": "Tablet (SR)",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "May cause dizziness.",
//                     "usage_instruction": "Take once daily after food."
//                 },
//                 "ingredients": ["Pentoxifylline"],
//                 "packaging_type": "Strip",
//                 "manufacturer": "Cipla",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 91,
//                 "name": "Vitamin E 400IU",
//                 "description": "Antioxidant that reduces oxidative stress in fatty liver disease.",
//                 "medicine_type": "Antioxidant Supplement",
//                 "uses": ["Non-alcoholic Fatty Liver Disease", "Liver Antioxidant"],
//                 "images": "/assets/LiverCare/vitamin-e.png",
//                 "cost": 70,
//                 "discount": 10,
//                 "final_price": 63,
//                 "manufacturer": "Zydus",
//                 "stock": 250,
//                 "rating": 4.5,
//                 "composition": "Vitamin E Acetate IP equivalent to Vitamin E 400IU",
//                 "chemical_name": "Alpha-tocopherol Acetate",
//                 "brand_name": "Evion / E-Vitol",
//                 "company_name": "Zydus Cadila Healthcare Limited",
//                 "highlights": {
//                     "product_type": "Capsule",
//                     "pack_size": "1 strip (10 capsules)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Not recommended for those on blood thinners.",
//                     "usage_instruction": "Take 1 capsule daily after meal."
//                 },
//                 "ingredients": ["Vitamin E"],
//                 "packaging_type": "Strip",
//                 "manufacturer": "Zydus Healthcare",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 92,
//                 "name": "Betaine Anhydrous 500mg",
//                 "description": "Methyl donor that helps process fats in liver and reduce fatty deposits.",
//                 "medicine_type": "Methyl Donor",
//                 "uses": ["Non-alcoholic Fatty Liver", "Homocystinuria"],
//                 "images": "/assets/LiverCare/betaine.png",
//                 "cost": 330,
//                 "discount": 10,
//                 "final_price": 297,
//                 "manufacturer": "Solace",
//                 "stock": 110,
//                 "rating": 4.8,
//                 "composition": "Betaine Anhydrous IP 500mg",
//                 "chemical_name": "Betaine",
//                 "brand_name": "Betaine / Cystadane",
//                 "company_name": "Solace Nutrition",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "Monitor homocysteine levels regularly.",
//                     "usage_instruction": "Take 2 tablets twice daily."
//                 },
//                 "ingredients": ["Betaine"],
//                 "packaging_type": "Strip",
//                 "manufactured_by": "Solace Nutrition",
//                 "country_of_origin": "USA"
//             },
//             {
//                 "id": 93,
//                 "name": "S-Adenosyl Methionine 400mg",
//                 "description": "Essential compound for liver detoxification and glutathione production.",
//                 "medicine_type": "Liver Detox Support",
//                 "uses": ["Liver Cirrhosis", "Intrahepatic Cholestasis"],
//                 "images": "/assets/LiverCare/same.png",
//                 "cost": 150,
//                 "discount": 10,
//                 "final_price": 135,
//                 "manufacturer": "Sun Pharma",
//                 "stock": 140,
//                 "rating": 4.7,
//                 "composition": "S-Adenosyl Methionine (SAMe) IP 400mg",
//                 "chemical_name": "S-Adenosyl Methionine Tosylate",
//                 "brand_name": "Samyr / SAMe",
//                 "company_name": "Sun Pharmaceutical Industries Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (15 tablets)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "May interact with antidepressants.",
//                     "usage_instruction": "Take 1 tablet twice daily on empty stomach."
//                 },
//                 "ingredients": ["S-Adenosyl Methionine"],
//                 "packaging_type": "Strip",
//                 "manufactured_by": "Sun Pharmaceutical",
//                 "country_of_origin": "India"
//             }
//         ],
//         "syrups": [
//             {
//                 "id": 94,
//                 "name": "Liv-52 Syrup",
//                 "description": "Ayurvedic liver tonic that improves appetite and protects liver cells.",
//                 "medicine_type": "Herbal Liver Tonic",
//                 "uses": ["Liver Protection", "Appetite Stimulant"],
//                 "images": "/assets/LiverCare/liv52-syrup.png",
//                 "cost": 180,
//                 "discount": 10,
//                 "final_price": 162,
//                 "manufacturer": "Himalaya",
//                 "stock": 200,
//                 "rating": 4.7,
//                 "composition": "Each 10ml contains: Capparis spinosa (Himsra) 130mg, Cichorium intybus (Kasani) 130mg, Solanum nigrum (Kakamachi) 65mg, Cassia occidentalis (Kasamarda) 65mg, Terminalia arjuna (Arjuna) 32mg, Achillea millefolium (Biranjasipha) 32mg, Tamarix gallica (Jhavuka) 32mg",
//                 "chemical_name": "Herbal Formulation",
//                 "brand_name": "Liv-52",
//                 "company_name": "The Himalaya Drug Company",
//                 "highlights": {
//                     "product_type": "Syrup",
//                     "pack_size": "200 ml bottle",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "For supportive therapy only.",
//                     "usage_instruction": "Take 2 teaspoons twice daily after meals."
//                 },
//                 "brand": "Himalaya",
//                 "ingredients": ["Himsra", "Kasani", "Kakamachi", "Kasamarda", "Arjuna"],
//                 "net_quantity": "200 ml",
//                 "weight": "200 ml",
//                 "packaging_type": "Bottle",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Liver Store",
//                 "seller_address": "456 Health Avenue, Mumbai, India",
//                 "seller_license": "LIVER-SYRUP-001",
//                 "manufactured_by": "Himalaya Drug Company",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 95,
//                 "name": "Bhep Syrup",
//                 "description": "Combination of essential amino acids for liver regeneration and protein synthesis.",
//                 "medicine_type": "Liver Regeneration Syrup",
//                 "uses": ["Liver Damage", "Protein Deficiency"],
//                 "images": "/assets/LiverCare/bhep.png",
//                 "cost": 260,
//                 "discount": 8,
//                 "final_price": 239.2,
//                 "manufacturer": "Franco-Indian",
//                 "stock": 180,
//                 "rating": 4.6,
//                 "composition": "Each 10ml contains: L-Ornithine L-Aspartate 1.5g, L-Lysine 200mg, L-Arginine 100mg, L-Carnitine 50mg, Vitamin B6 2mg",
//                 "chemical_name": "Amino Acid Complex",
//                 "brand_name": "Bhep",
//                 "company_name": "Franco-Indian Pharmaceuticals Pvt Ltd",
//                 "highlights": {
//                     "product_type": "Syrup",
//                     "pack_size": "200 ml bottle",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Use in cirrhosis only under medical supervision.",
//                     "usage_instruction": "Take 10 ml three times daily."
//                 },
//                 "brand": "Franco-Indian",
//                 "ingredients": ["L-Ornithine", "L-Lysine", "L-Arginine", "L-Carnitine", "Vitamin B6"],
//                 "net_quantity": "200 ml",
//                 "packaging_type": "Bottle",
//                 "seller_name": "Medicare Liver Store",
//                 "manufactured_by": "Franco-Indian Pharma",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 96,
//                 "name": "Lornasa Syrup",
//                 "description": "L-Ornithine L-Aspartate syrup for reducing ammonia levels in liver patients.",
//                 "medicine_type": "Ammonia Reducer Syrup",
//                 "uses": ["Hepatic Encephalopathy"],
//                 "images": "/assets/LiverCare/lornasa.png",
//                 "cost": 310,
//                 "discount": 10,
//                 "final_price": 279,
//                 "manufacturer": "Zydus",
//                 "stock": 150,
//                 "rating": 4.6,
//                 "composition": "Each 5ml contains: L-Ornithine L-Aspartate IP 1.5g",
//                 "chemical_name": "L-Ornithine L-Aspartate",
//                 "brand_name": "Lornasa",
//                 "company_name": "Zydus Cadila Healthcare Limited",
//                 "highlights": {
//                     "product_type": "Syrup",
//                     "pack_size": "150 ml bottle",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Monitor ammonia levels regularly.",
//                     "usage_instruction": "Take 5 ml three times daily."
//                 },
//                 "brand": "Zydus",
//                 "ingredients": ["L-Ornithine L-Aspartate"],
//                 "net_quantity": "150 ml",
//                 "packaging_type": "Bottle",
//                 "manufactured_by": "Zydus Healthcare",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 97,
//                 "name": "Hepamerz Granules",
//                 "description": "Oral granules for hepatic encephalopathy management.",
//                 "medicine_type": "Liver Function Improver",
//                 "uses": ["Liver Cirrhosis", "Hepatic Coma Prevention"],
//                 "images": "/assets/LiverCare/hepamerz.png",
//                 "cost": 270,
//                 "discount": 10,
//                 "final_price": 243,
//                 "manufacturer": "Franco-Indian",
//                 "stock": 190,
//                 "rating": 4.7,
//                 "composition": "Each sachet contains: L-Ornithine L-Aspartate IP 3g",
//                 "chemical_name": "L-Ornithine L-Aspartate",
//                 "brand_name": "Hepamerz",
//                 "company_name": "Franco-Indian Pharmaceuticals Pvt Ltd",
//                 "highlights": {
//                     "product_type": "Granules",
//                     "pack_size": "10 sachets",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Dissolve in water completely before consumption.",
//                     "usage_instruction": "Take 1 sachet three times daily."
//                 },
//                 "brand": "Franco-Indian",
//                 "ingredients": ["L-Ornithine L-Aspartate"],
//                 "net_quantity": "10 sachets",
//                 "packaging_type": "Sachets",
//                 "manufactured_by": "Franco-Indian Pharma",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 98,
//                 "name": "Kutki (Picrorhiza) Syrup",
//                 "description": "Traditional Ayurvedic liver protectant and detoxifier.",
//                 "medicine_type": "Ayurvedic Liver Syrup",
//                 "uses": ["Liver Detox", "Jaundice", "Viral Hepatitis"],
//                 "images": "/assets/LiverCare/kutki.png",
//                 "cost": 220,
//                 "discount": 10,
//                 "final_price": 198,
//                 "manufacturer": "Dabur",
//                 "stock": 220,
//                 "rating": 4.5,
//                 "composition": "Each 10ml contains: Picrorhiza kurroa (Kutki) extract 500mg, Boerhavia diffusa (Punarnava) extract 200mg, Andrographis paniculata (Kalmegh) extract 150mg",
//                 "chemical_name": "Herbal Extract Formulation",
//                 "brand_name": "Dabur Kutki",
//                 "company_name": "Dabur India Limited",
//                 "highlights": {
//                     "product_type": "Syrup",
//                     "pack_size": "200 ml bottle",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "May cause mild laxative effect.",
//                     "usage_instruction": "Take 2 teaspoons twice daily."
//                 },
//                 "brand": "Dabur",
//                 "ingredients": ["Kutki", "Punarnava", "Kalmegh"],
//                 "net_quantity": "200 ml",
//                 "packaging_type": "Bottle",
//                 "manufactured_by": "Dabur India Ltd",
//                 "country_of_origin": "India"
//             }
//         ],
//         "injections": [
//             {
//                 "id": 99,
//                 "name": "N-Acetylcysteine Injection 200mg/ml",
//                 "description": "Potent antioxidant used in acetaminophen overdose and liver failure.",
//                 "medicine_type": "Antioxidant Injection",
//                 "uses": ["Acetaminophen Overdose", "Liver Failure", "Mucolytic"],
//                 "images": "/assets/LiverCare/nac-injection.png",
//                 "cost": 310,
//                 "discount": 8,
//                 "final_price": 285.2,
//                 "manufacturer": "Cipla",
//                 "stock": 120,
//                 "rating": 4.8,
//                 "composition": "N-Acetylcysteine IP 200mg/ml",
//                 "chemical_name": "N-Acetylcysteine",
//                 "brand_name": "NAC / Fluimucil",
//                 "company_name": "Cipla Limited",
//                 "highlights": {
//                     "product_type": "Injection",
//                     "pack_size": "1 vial (10ml)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "For hospital use only under medical supervision.",
//                     "usage_instruction": "IV infusion as per body weight protocol."
//                 },
//                 "brand": "Medicare Liver Care",
//                 "ingredients": ["N-Acetylcysteine"],
//                 "net_quantity": "10ml",
//                 "weight": "10ml",
//                 "packaging_type": "Ampoule",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Liver Center",
//                 "seller_address": "456 Health Avenue, Mumbai, India",
//                 "seller_license": "MED-LIVER-INJ-001",
//                 "manufactured_by": "Cipla Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 100,
//                 "name": "L-Ornithine L-Aspartate Injection",
//                 "description": "IV formulation for severe hepatic encephalopathy.",
//                 "medicine_type": "Ammonia Reducer Injection",
//                 "uses": ["Severe Hepatic Encephalopathy", "Liver Coma"],
//                 "images": "/assets/LiverCare/ornithine-inj.png",
//                 "cost": 860,
//                 "discount": 5,
//                 "final_price": 817,
//                 "manufacturer": "Zydus",
//                 "stock": 80,
//                 "rating": 4.9,
//                 "composition": "L-Ornithine L-Aspartate IP 5g/10ml",
//                 "chemical_name": "L-Ornithine L-Aspartate",
//                 "brand_name": "Hepamerz / Lornasa",
//                 "company_name": "Zydus Cadila Healthcare Limited",
//                 "highlights": {
//                     "product_type": "Injection",
//                     "pack_size": "1 vial (10ml)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Monitor ammonia and electrolytes.",
//                     "usage_instruction": "IV infusion in 500ml saline."
//                 },
//                 "brand": "Medicare Liver Care",
//                 "ingredients": ["L-Ornithine L-Aspartate"],
//                 "net_quantity": "10ml",
//                 "packaging_type": "Vial",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Liver Center",
//                 "seller_address": "456 Health Avenue, Mumbai, India",
//                 "seller_license": "MED-LIVER-INJ-001",
//                 "manufactured_by": "Zydus Healthcare",
//                 "country_of_origin": "India"
//             }
//         ],
//         "herbal_supplements": [
//             {
//                 "id": 101,
//                 "name": "Milk Thistle Capsules",
//                 "description": "Standardized milk thistle extract for liver protection and regeneration.",
//                 "medicine_type": "Herbal Hepatoprotective",
//                 "uses": ["Liver Detox", "Alcohol Recovery", "Fatty Liver"],
//                 "images": "/assets/LiverCare/milk-thistle.png",
//                 "cost": 450,
//                 "discount": 10,
//                 "final_price": 405,
//                 "manufacturer": "Nature's Bounty",
//                 "stock": 240,
//                 "rating": 4.8,
//                 "composition": "Each capsule contains: Milk Thistle Extract (standardized to 80% Silymarin) 250mg",
//                 "chemical_name": "Silymarin",
//                 "brand_name": "Nature's Bounty Milk Thistle",
//                 "company_name": "Nature's Bounty",
//                 "highlights": {
//                     "product_type": "Capsule",
//                     "pack_size": "60 capsules",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "Not for treatment of viral hepatitis.",
//                     "usage_instruction": "Take 1 capsule twice daily."
//                 },
//                 "brand": "Nature's Bounty",
//                 "ingredients": ["Milk Thistle Extract"],
//                 "bio_friendly": "Yes",
//                 "net_quantity": "60 capsules",
//                 "weight": "100g",
//                 "packaging_type": "Bottle",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Liver Store",
//                 "seller_address": "456 Health Avenue, Mumbai, India",
//                 "seller_license": "LIVER2025MUM003",
//                 "manufactured_by": "Nature's Bounty Inc",
//                 "country_of_origin": "USA"
//             },
//             {
//                 "id": 102,
//                 "name": "Turmeric Curcumin 95%",
//                 "description": "High-potency curcumin with superior bioavailability for liver inflammation.",
//                 "medicine_type": "Anti-inflammatory Supplement",
//                 "uses": ["Liver Inflammation", "Antioxidant", "Detox Support"],
//                 "images": "/assets/LiverCare/curcumin.png",
//                 "cost": 899,
//                 "discount": 15,
//                 "final_price": 764.15,
//                 "manufacturer": "Doctor's Best",
//                 "stock": 320,
//                 "rating": 4.7,
//                 "composition": "Each capsule contains: Turmeric Extract (standardized to 95% Curcuminoids) 500mg",
//                 "chemical_name": "Curcumin",
//                 "brand_name": "Doctor's Best Curcumin",
//                 "company_name": "Doctor's Best",
//                 "highlights": {
//                     "product_type": "Capsule",
//                     "pack_size": "120 capsules",
//                     "shelf_life": "30 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "May interact with blood thinners.",
//                     "usage_instruction": "Take 1 capsule twice daily with meals."
//                 },
//                 "brand": "Doctor's Best",
//                 "ingredients": ["Turmeric Extract", "Curcuminoids"],
//                 "net_quantity": "120 capsules",
//                 "weight": "150g",
//                 "packaging_type": "Bottle",
//                 "seller_name": "Medicare Liver Store",
//                 "manufactured_by": "Doctor's Best Inc",
//                 "country_of_origin": "USA"
//             },
//             {
//                 "id": 103,
//                 "name": "Artichoke Extract Capsules",
//                 "description": "Supports bile production and liver detoxification pathways.",
//                 "medicine_type": "Choleretic Supplement",
//                 "uses": ["Bile Flow Support", "Gallbladder Health", "Digestive Aid"],
//                 "images": "/assets/LiverCare/artichoke.png",
//                 "cost": 690,
//                 "discount": 12,
//                 "final_price": 607.2,
//                 "manufacturer": "Solgar",
//                 "stock": 150,
//                 "rating": 4.9,
//                 "composition": "Each capsule contains: Artichoke Leaf Extract (standardized to 5% Cynarin) 500mg",
//                 "chemical_name": "Cynarin",
//                 "brand_name": "Solgar Artichoke Extract",
//                 "company_name": "Solgar Vitamins",
//                 "highlights": {
//                     "product_type": "Capsule",
//                     "pack_size": "50 capsules",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "Not for those with bile duct obstruction.",
//                     "usage_instruction": "Take 1 capsule before meals."
//                 },
//                 "brand": "Solgar",
//                 "ingredients": ["Artichoke Leaf Extract"],
//                 "net_quantity": "50 capsules",
//                 "weight": "80g",
//                 "packaging_type": "Bottle",
//                 "manufactured_by": "Solgar Inc",
//                 "country_of_origin": "USA"
//             }
//         ],
//         "top_rated": [
//             {
//                 "id": 1,
//                 "name": "Ursodeoxycholic Acid 300mg",
//                 "description": "Gold standard for gallstone dissolution and primary biliary cirrhosis.",
//                 "medicine_type": "Gallstone Treatment",
//                 "uses": ["Gallstones", "Primary Biliary Cirrhosis"],
//                 "images": "/assets/LiverCare/urso.png",
//                 "cost": 480,
//                 "discount": 10,
//                 "final_price": 432,
//                 "manufacturer": "Abbott",
//                 "stock": 180,
//                 "rating": 4.9,
//                 "composition": "Ursodeoxycholic Acid IP 300mg",
//                 "chemical_name": "Ursodeoxycholic Acid",
//                 "brand_name": "Ursocol",
//                 "company_name": "Abbott India Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Regular ultrasound monitoring required.",
//                     "usage_instruction": "Take 1 tablet twice daily."
//                 },
//                 "brand": "Medicare Liver Care",
//                 "ingredients": ["Ursodeoxycholic Acid"],
//                 "net_quantity": "10 tablets",
//                 "weight": "10 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Liver Store",
//                 "seller_address": "456 Health Avenue, Mumbai, India",
//                 "seller_license": "MED-LIVER-2025-TOP001",
//                 "manufactured_by": "Abbott India Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 2,
//                 "name": "Silymarin 140mg",
//                 "description": "Most trusted herbal liver protectant with proven efficacy.",
//                 "medicine_type": "Hepatoprotective",
//                 "uses": ["Liver Damage", "Fatty Liver"],
//                 "images": "/assets/LiverCare/silymarin.png",
//                 "cost": 220,
//                 "discount": 12,
//                 "final_price": 193.6,
//                 "manufacturer": "Cipla",
//                 "stock": 200,
//                 "rating": 4.8,
//                 "composition": "Silymarin IP (Standardized Milk Thistle Extract) 140mg",
//                 "chemical_name": "Silymarin",
//                 "brand_name": "Silybon",
//                 "company_name": "Cipla Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "Continue for 3-6 months for optimal benefit.",
//                     "usage_instruction": "Take 1 tablet twice daily."
//                 },
//                 "brand": "Medicare Liver Care",
//                 "ingredients": ["Silymarin"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Liver Store",
//                 "seller_address": "456 Health Avenue, Mumbai, India",
//                 "seller_license": "MED-LIVER-2025-TOP002",
//                 "manufactured_by": "Cipla Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 3,
//                 "name": "Liv-52 DS",
//                 "description": "Time-tested Ayurvedic liver tonic with millions of satisfied users.",
//                 "medicine_type": "Liver Tonic",
//                 "uses": ["Liver Protection", "Appetite Improvement"],
//                 "images": "/assets/LiverCare/liv52.png",
//                 "cost": 95,
//                 "discount": 10,
//                 "final_price": 85.5,
//                 "manufacturer": "Himalaya",
//                 "stock": 220,
//                 "rating": 4.7,
//                 "composition": "Classical Ayurvedic formulation",
//                 "chemical_name": "Herbal Formulation",
//                 "brand_name": "Liv-52",
//                 "company_name": "The Himalaya Drug Company",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "36 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "For supplementary therapy only.",
//                     "usage_instruction": "Take 2 tablets twice daily."
//                 },
//                 "brand": "Himalaya",
//                 "ingredients": ["Himsra", "Kasani", "Kakamachi"],
//                 "net_quantity": "10 tablets",
//                 "weight": "10 tablets",
//                 "packaging_type": "Strip",
//                 "customer_support": "support@yourapp.com",
//                 "seller_name": "Medicare Liver Store",
//                 "seller_address": "456 Health Avenue, Mumbai, India",
//                 "seller_license": "MED-LIVER-2025-TOP003",
//                 "manufactured_by": "Himalaya Drug Company",
//                 "country_of_origin": "India"
//             }
//         ],
//         "recommendations": [
//             {
//                 "id": 1,
//                 "name": "N-Acetylcysteine 600mg",
//                 "description": "Recommended antioxidant for liver detoxification and glutathione support.",
//                 "medicine_type": "Antioxidant",
//                 "uses": ["Liver Detox", "Antioxidant Support", "Respiratory Health"],
//                 "images": "/assets/LiverCare/nac.png",
//                 "cost": 350,
//                 "discount": 10,
//                 "final_price": 315,
//                 "manufacturer": "Cipla",
//                 "stock": 180,
//                 "rating": 4.7,
//                 "composition": "N-Acetylcysteine IP 600mg",
//                 "chemical_name": "N-Acetylcysteine",
//                 "brand_name": "NAC",
//                 "company_name": "Cipla Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "India"
//                 },
//                 "information": {
//                     "disclaimer": "May cause gastrointestinal upset.",
//                     "usage_instruction": "Take 1 tablet twice daily."
//                 },
//                 "brand": "Medicare Liver Care",
//                 "ingredients": ["N-Acetylcysteine"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "seller_name": "Medicare Liver Store",
//                 "manufactured_by": "Cipla Ltd",
//                 "country_of_origin": "India"
//             },
//             {
//                 "id": 2,
//                 "name": "Vitamin B Complex",
//                 "description": "Essential B vitamins for liver metabolism and energy production.",
//                 "medicine_type": "Vitamin Supplement",
//                 "uses": ["Liver Metabolism", "Energy Support"],
//                 "images": "/assets/LiverCare/b-complex.png",
//                 "cost": 72,
//                 "discount": 8,
//                 "final_price": 66.24,
//                 "manufacturer": "Merck",
//                 "stock": 160,
//                 "rating": 4.6,
//                 "composition": "Each tablet contains: Vitamin B1 100mg, Vitamin B2 50mg, Vitamin B6 50mg, Vitamin B12 250mcg, Niacinamide 50mg",
//                 "chemical_name": "Vitamin B Complex",
//                 "brand_name": "Neurobion Forte",
//                 "company_name": "Merck Limited",
//                 "highlights": {
//                     "product_type": "Tablet",
//                     "pack_size": "1 strip (10 tablets)",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "Germany"
//                 },
//                 "information": {
//                     "disclaimer": "Urine may turn bright yellow.",
//                     "usage_instruction": "Take 1 tablet daily after breakfast."
//                 },
//                 "brand": "Medicare Liver Care",
//                 "ingredients": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12", "Niacinamide"],
//                 "net_quantity": "10 tablets",
//                 "packaging_type": "Strip",
//                 "manufacturer": "Merck",
//                 "country_of_origin": "Germany"
//             },
//             {
//                 "id": 3,
//                 "name": "Alpha Lipoic Acid 300mg",
//                 "description": "Recommended antioxidant for liver protection and insulin sensitivity.",
//                 "medicine_type": "Antioxidant Supplement",
//                 "uses": ["Liver Protection", "Antioxidant", "Neuropathy"],
//                 "images": "/assets/LiverCare/ala.png",
//                 "cost": 450,
//                 "discount": 10,
//                 "final_price": 405,
//                 "manufacturer": "Swanson",
//                 "stock": 120,
//                 "rating": 4.7,
//                 "composition": "Alpha Lipoic Acid IP 300mg",
//                 "chemical_name": "Alpha Lipoic Acid",
//                 "brand_name": "Swanson ALA",
//                 "company_name": "Swanson Health Products",
//                 "highlights": {
//                     "product_type": "Capsule",
//                     "pack_size": "60 capsules",
//                     "shelf_life": "24 months",
//                     "country_of_origin": "USA"
//                 },
//                 "information": {
//                     "disclaimer": "Take on empty stomach for better absorption.",
//                     "usage_instruction": "Take 1 capsule twice daily."
//                 },
//                 "brand": "Medicare Liver Care",
//                 "ingredients": ["Alpha Lipoic Acid"],
//                 "net_quantity": "60 capsules",
//                 "packaging_type": "Bottle",
//                 "manufactured_by": "Swanson Health",
//                 "country_of_origin": "USA"
//             }
//         ]
//     },

//     oral: [
//         {
//             "id": 104,
//             "name": "FreshMint Toothpaste",
//             "category": "Toothpaste",
//             "brand": "Colgate",
//             "priceNumeric": 99,
//             "originalPriceNumeric": 140,
//             "savings": "29%",
//             "image": "/assets/Oralimg/freshmint.jpg",
//             "description": "A refreshing toothpaste that helps fight cavities, freshens breath, and maintains oral hygiene.",
//             "keyFeatures": [
//                 "Fights cavities",
//                 "Freshens breath instantly",
//                 "Strengthens enamel"
//             ],
//             "howToUse": "Brush twice daily for 2 minutes.",
//             "ingredients": "Fluoride, Sorbitol, Hydrated Silica",
//             "warnings": "Children under 6 should use a pea-sized amount under supervision."
//         },
//         {
//             "id": 105,
//             "name": "Herbal Clove Toothpaste",
//             "category": "Toothpaste",
//             "brand": "Dabur",
//             "priceNumeric": 79,
//             "originalPriceNumeric": 110,
//             "savings": "28%",
//             "image": "/assets/Oralimg/herbalclove.webp",
//             "description": "Natural toothpaste with clove oil that provides long-lasting protection from germs.",
//             "keyFeatures": [
//                 "Herbal formula",
//                 "Fights oral bacteria",
//                 "Reduces gum swelling"
//             ],
//             "howToUse": "Brush twice a day for best results.",
//             "ingredients": "Clove Oil, Mint, Herbal Extracts",
//             "warnings": "Avoid swallowing."
//         },
//         {
//             "id": 106,
//             "name": "Charcoal Whitening Toothpaste",
//             "category": "Toothpaste",
//             "brand": "Mamaearth",
//             "priceNumeric": 149,
//             "originalPriceNumeric": 199,
//             "savings": "25%",
//             "image": "/assets/Oralimg/charcoal.jpg",
//             "description": "Activated charcoal cleans teeth naturally and removes deep stains for a brighter smile.",
//             "keyFeatures": [
//                 "Removes stains",
//                 "Natural charcoal formula",
//                 "Strengthens teeth"
//             ],
//             "howToUse": "Brush twice daily without applying too much pressure.",
//             "ingredients": "Activated Charcoal, Peppermint Oil, Silica",
//             "warnings": "Not recommended for children below 10."
//         },
//         {
//             "id": 107,
//             "name": "Cooling Mint Mouthwash",
//             "category": "Mouthwash",
//             "brand": "Listerine",
//             "priceNumeric": 199,
//             "originalPriceNumeric": 240,
//             "savings": "17%",
//             "image": "/assets/Oralimg/mouthwash.jpg",
//             "description": "Alcohol-free mouthwash that kills germs, freshens breath, and protects gums.",
//             "keyFeatures": [
//                 "Kills 99% germs",
//                 "Alcohol-free",
//                 "Long-lasting freshness"
//             ],
//             "howToUse": "Rinse with 20ml for 30 seconds twice daily.",
//             "ingredients": "Eucalyptol, Menthol, Thymol",
//             "warnings": "Do not swallow."
//         },
//         {
//             "id": 108,
//             "name": "Advanced Whitening Mouthwash",
//             "category": "Mouthwash",
//             "brand": "Colgate",
//             "priceNumeric": 220,
//             "originalPriceNumeric": 280,
//             "savings": "21%",
//             "image": "/assets/Oralimg/advancedwash.jpg",
//             "description": "Removes surface stains while providing complete oral protection.",
//             "keyFeatures": [
//                 "Whitens teeth",
//                 "Strengthens enamel",
//                 "Freshens breath"
//             ],
//             "howToUse": "Rinse for 30 seconds after brushing.",
//             "ingredients": "Hydrogen Peroxide, Mint Oil",
//             "warnings": "Avoid using more than 2 times a day."
//         },
//         {
//             "id": 109,
//             "name": "Sensitive Relief Toothpaste",
//             "category": "Toothpaste",
//             "brand": "Sensodyne",
//             "priceNumeric": 180,
//             "originalPriceNumeric": 230,
//             "savings": "22%",
//             "image": "/assets/Oralimg/sensodyne.jpg",
//             "description": "Provides instant and long-lasting relief from tooth sensitivity.",
//             "keyFeatures": [
//                 "Fast relief",
//                 "Protects exposed dentin",
//                 "Recommended by dentists"
//             ],
//             "howToUse": "Brush twice daily or as directed by a dentist.",
//             "ingredients": "Potassium Nitrate, Fluoride",
//             "warnings": "Consult a dentist if sensitivity persists."
//         },
//         {
//             "id": 110,
//             "name": "Kids Berry Toothpaste",
//             "category": "Kids Toothpaste",
//             "brand": "Oral-B",
//             "priceNumeric": 90,
//             "originalPriceNumeric": 120,
//             "savings": "25%",
//             "image": "/assets/Oralimg/kids.jpg",
//             "description": "Fluoride toothpaste specially designed for kids with a sweet berry flavor.",
//             "keyFeatures": [
//                 "Kid-friendly flavor",
//                 "Strengthens teeth",
//                 "Cavity protection"
//             ],
//             "howToUse": "Use a pea-sized amount under adult supervision.",
//             "ingredients": "Fluoride, Calcium Carbonate",
//             "warnings": "Ensure kids do not swallow."
//         },
//         {
//             "id": 111,
//             "name": "Dry Mouth Relief Spray",
//             "category": "Spray",
//             "brand": "Biotene",
//             "priceNumeric": 399,
//             "originalPriceNumeric": 480,
//             "savings": "17%",
//             "image": "/assets/Oralimg/mouthspray.webp",
//             "description": "Instantly relieves dryness and moisturizes mouth tissues.",
//             "keyFeatures": [
//                 "Soothes dry mouth",
//                 "Long-lasting moisture",
//                 "Gentle on oral tissues"
//             ],
//             "howToUse": "Spray inside the mouth 2–3 times as needed.",
//             "ingredients": "Glycerin, Xylitol",
//             "warnings": "Avoid contact with eyes."
//         },
//         {
//             "id": 112,
//             "name": "Dental Floss Mint Waxed",
//             "category": "Floss",
//             "brand": "Oral-B",
//             "priceNumeric": 129,
//             "originalPriceNumeric": 170,
//             "savings": "24%",
//             "image": "/assets/Oralimg/oralbwax.jpg",
//             "description": "Waxed mint-flavored floss that removes plaque effectively between teeth.",
//             "keyFeatures": [
//                 "Mint flavored",
//                 "Waxed for smooth gliding",
//                 "Removes plaque efficiently"
//             ],
//             "howToUse": "Use 40cm floss and clean between each tooth gently.",
//             "ingredients": "Nylon, Mint Flavor",
//             "warnings": "Avoid snapping floss onto gums."
//         },
//         {
//             "id": 113,
//             "name": "Soft Bristles Toothbrush",
//             "category": "Toothbrush",
//             "brand": "Pepsodent",
//             "priceNumeric": 49,
//             "originalPriceNumeric": 70,
//             "savings": "30%",
//             "image": "/assets/Oralimg/brush.jpg",
//             "description": "Soft bristle toothbrush designed to clean teeth gently without hurting gums.",
//             "keyFeatures": [
//                 "Soft bristles",
//                 "Ergonomic grip",
//                 "Cleans hard-to-reach areas"
//             ],
//             "howToUse": "Brush gently twice daily.",
//             "ingredients": "Nylon Bristles, Plastic Handle",
//             "warnings": "Replace brush every 3 months."
//         },
//         {
//             "id": 114,
//             "name": "Oral-B Pro Repair Toothpaste",
//             "category": "Toothpaste",
//             "brand": "Oral-B",
//             "priceNumeric": 165,
//             "originalPriceNumeric": 199,
//             "savings": "17%",
//             "image": "/assets/Oralimg/oral11.jpg",
//             "description": "Strengthens enamel and protects sensitive areas for better gum health.",
//             "keyFeatures": [
//                 "Repairs weakened enamel",
//                 "Protects from gum issues",
//                 "Clinically tested formula"
//             ],
//             "howToUse": "Brush twice daily for best results.",
//             "ingredients": "Stannous Fluoride, Hydrated Silica, Glycerin.",
//             "warnings": "Avoid swallowing. Rinse thoroughly after brushing."
//         },
//         {
//             "id": 115,
//             "name": "Dabur Red Ayurvedic Toothpaste",
//             "category": "Toothpaste",
//             "brand": "Dabur",
//             "priceNumeric": 92,
//             "originalPriceNumeric": 110,
//             "savings": "16%",
//             "image": "/assets/Oralimg/oral12.jpg",
//             "description": "Ayurvedic toothpaste for strong teeth and healthy gums.",
//             "keyFeatures": [
//                 "Ayurvedic formulation",
//                 "Strengthens gums",
//                 "Freshens breath"
//             ],
//             "howToUse": "Brush twice daily for stronger teeth.",
//             "ingredients": "Laung, Pudina, Tomar, Sunthi.",
//             "warnings": "Store in a cool place. Suitable for adults."
//         },
//         {
//             "id": 116,
//             "name": "Himalaya Sparkling White Toothpaste",
//             "category": "Toothpaste",
//             "brand": "Himalaya",
//             "priceNumeric": 95,
//             "originalPriceNumeric": 120,
//             "savings": "21%",
//             "image": "/assets/Oralimg/oral13.jpg",
//             "description": "Herbal whitening toothpaste for brighter teeth.",
//             "keyFeatures": [
//                 "Herbal whitening",
//                 "No harsh chemicals",
//                 "Protects enamel"
//             ],
//             "howToUse": "Brush gently twice a day.",
//             "ingredients": "Bromelain, Papain, Miswak.",
//             "warnings": "Do not use if you have gum bleeding."
//         },
//         {
//             "id": 117,
//             "name": "Colgate Max Fresh Toothpaste (Blue Gel)",
//             "category": "Toothpaste",
//             "brand": "Colgate",
//             "priceNumeric": 145,
//             "originalPriceNumeric": 175,
//             "savings": "17%",
//             "image": "/assets/Oralimg/oral14.jpg",
//             "description": "Cooling crystals give long-lasting fresh breath.",
//             "keyFeatures": [
//                 "Cooling mint blast",
//                 "Long-lasting freshness",
//                 "Deep cleaning formula"
//             ],
//             "howToUse": "Brush twice daily or as directed by a dentist.",
//             "ingredients": "Sorbitol, Silica, Sodium Fluoride.",
//             "warnings": "For children below 6, use a pea-sized amount."
//         },
//         {
//             "id": 118,
//             "name": "Pepsodent Germi Check Toothpaste",
//             "category": "Toothpaste",
//             "brand": "Pepsodent",
//             "priceNumeric": 85,
//             "originalPriceNumeric": 99,
//             "savings": "14%",
//             "image": "/assets/Oralimg/oral15.jpg",
//             "description": "Provides 12-hour germ protection and strong teeth.",
//             "keyFeatures": [
//                 "12-hour germ protection",
//                 "Fights plaque",
//                 "Strengthens enamel"
//             ],
//             "howToUse": "Brush twice daily for maximum protection.",
//             "ingredients": "Calcium Carbonate, Fluoride, Hydrated Silica.",
//             "warnings": "Rinse thoroughly. Not for toddlers."
//         },
//         {
//             "id": 119,
//             "name": "Closeup Ever Fresh Red Gel Toothpaste",
//             "category": "Toothpaste",
//             "brand": "Closeup",
//             "priceNumeric": 99,
//             "originalPriceNumeric": 130,
//             "savings": "24%",
//             "image": "/assets/Oralimg/oral16.jpg",
//             "description": "Red gel toothpaste for long-lasting fresh breath.",
//             "keyFeatures": [
//                 "Fresh breath up to 12 hours",
//                 "Anti-germ formula",
//                 "Strong mint flavor"
//             ],
//             "howToUse": "Brush thoroughly twice daily.",
//             "ingredients": "Glycerin, Silica, Menthol.",
//             "warnings": "Avoid swallowing. Keep away from children."
//         },
//         {
//             "id": 120,
//             "name": "Sensodyne Sensitive Soft Toothbrush",
//             "category": "Toothbrush",
//             "brand": "Sensodyne",
//             "priceNumeric": 110,
//             "originalPriceNumeric": 130,
//             "savings": "15%",
//             "image": "/assets/Oralimg/oral17.jpg",
//             "description": "Soft bristles designed for gentle cleaning of sensitive teeth.",
//             "keyFeatures": [
//                 "Soft bristles",
//                 "Flexible neck",
//                 "Gentle on gums"
//             ],
//             "howToUse": "Brush in circular motions for effective cleaning.",
//             "ingredients": "Plastic handle, Soft nylon bristles.",
//             "warnings": "Replace every 3 months."
//         },
//         {
//             "id": 121,
//             "name": "Oral-B Pro Gum Care Toothbrush",
//             "category": "Toothbrush",
//             "brand": "Oral-B",
//             "priceNumeric": 145,
//             "originalPriceNumeric": 170,
//             "savings": "15%",
//             "image": "/assets/Oralimg/oral18.jpg",
//             "description": "Designed to protect gums while cleaning plaque.",
//             "keyFeatures": [
//                 "Ultra-soft bristles",
//                 "Angled neck",
//                 "Improves gum health"
//             ],
//             "howToUse": "Brush gently along gum line.",
//             "ingredients": "Rubber grip, Soft bristles.",
//             "warnings": "Do not apply excessive pressure."
//         },
//         {
//             "id": 122,
//             "name": "Colgate Zig Zag Soft Toothbrush",
//             "category": "Toothbrush",
//             "brand": "Colgate",
//             "priceNumeric": 60,
//             "originalPriceNumeric": 75,
//             "savings": "20%",
//             "image": "/assets/Oralimg/oral19.jpg",
//             "description": "Zig-zag bristle pattern to reach deep between teeth.",
//             "keyFeatures": [
//                 "Zig-zag bristles",
//                 "Soft & flexible",
//                 "Better plaque removal"
//             ],
//             "howToUse": "Brush gently for 2 minutes.",
//             "ingredients": "Plastic handle, Soft bristles.",
//             "warnings": "Replace brush every 3 months."
//         },
//         {
//             "id": 123,
//             "name": "Trisa Super Soft Toothbrush",
//             "category": "Toothbrush",
//             "brand": "Trisa",
//             "priceNumeric": 175,
//             "originalPriceNumeric": 210,
//             "savings": "17%",
//             "image": "/assets/Oralimg/oral20.jpg",
//             "description": "Swiss-made toothbrush with ultra-soft bristles.",
//             "keyFeatures": [
//                 "Ultra-soft bristles",
//                 "Swiss technology",
//                 "Gentle cleaning"
//             ],
//             "howToUse": "Use twice daily with gentle strokes.",
//             "ingredients": "Swiss nylon bristles, Plastic handle.",
//             "warnings": "Do not bend bristles."
//         },
//         {
//             "id": 124,
//             "name": "Colgate Kids Strawberry Toothpaste",
//             "category": "Kids Toothpaste",
//             "brand": "Colgate",
//             "priceNumeric": 95,
//             "originalPriceNumeric": 120,
//             "savings": "21%",
//             "image": "/assets/Oralimg/oral31.jpg",
//             "description": "Fluoride toothpaste with kid-friendly strawberry flavor.",
//             "keyFeatures": [
//                 "Gentle cleaning",
//                 "Strawberry flavor",
//                 "Cavity protection"
//             ],
//             "howToUse": "Use a pea-sized amount for kids under 6.",
//             "ingredients": "Fluoride, Sorbitol, Silica.",
//             "warnings": "Adult supervision required."
//         },
//         {
//             "id": 125,
//             "name": "Mamaearth Berry Blast Kids Toothpaste",
//             "category": "Kids Toothpaste",
//             "brand": "Mamaearth",
//             "priceNumeric": 149,
//             "originalPriceNumeric": 179,
//             "savings": "17%",
//             "image": "/assets/Oralimg/oral32.jpg",
//             "description": "100% natural toothpaste safe for children aged 3–12.",
//             "keyFeatures": [
//                 "No SLS or fluoride",
//                 "Natural berry flavor",
//                 "Safe if swallowed"
//             ],
//             "howToUse": "Brush gently twice daily.",
//             "ingredients": "Xylitol, Aloe Vera, Stevia.",
//             "warnings": "Store away from heat."
//         },
//         {
//             "id": 126,
//             "name": "Oral-B Kids Extra Soft Toothbrush",
//             "category": "Kids Toothbrush",
//             "brand": "Oral-B",
//             "priceNumeric": 85,
//             "originalPriceNumeric": 99,
//             "savings": "14%",
//             "image": "/assets/Oralimg/oral33.jpg",
//             "description": "Extra soft bristles designed for gentle kids’ brushing.",
//             "keyFeatures": [
//                 "Extra soft bristles",
//                 "Comfortable grip",
//                 "Gentle on gums"
//             ],
//             "howToUse": "Brush under adult supervision.",
//             "ingredients": "Soft nylon bristles, plastic handle.",
//             "warnings": "Replace every 2–3 months."
//         },
//         {
//             "id": 127,
//             "name": "Colgate Ortho Soft Toothbrush",
//             "category": "Specialized Toothbrush",
//             "brand": "Colgate",
//             "priceNumeric": 130,
//             "originalPriceNumeric": 155,
//             "savings": "16%",
//             "image": "/assets/Oralimg/oral34.jpg",
//             "description": "Specially designed for people with braces or dental appliances.",
//             "keyFeatures": [
//                 "Ortho-friendly design",
//                 "Soft bristles",
//                 "Deep cleaning"
//             ],
//             "howToUse": "Brush around braces gently.",
//             "ingredients": "Soft nylon bristles, plastic handle.",
//             "warnings": "Do not press hard on brackets."
//         },
//         {
//             "id": 128,
//             "name": "Thermoseal Proxa Interdental Brushes",
//             "category": "Interdental Brush",
//             "brand": "Thermoseal",
//             "priceNumeric": 160,
//             "originalPriceNumeric": 195,
//             "savings": "18%",
//             "image": "/assets/Oralimg/oral35.jpg",
//             "description": "For cleaning hard-to-reach gaps between teeth.",
//             "keyFeatures": [
//                 "Removes deep plaque",
//                 "Gentle wire core",
//                 "Ideal for braces users"
//             ],
//             "howToUse": "Insert gently between teeth and move back and forth.",
//             "ingredients": "Nylon bristles, stainless steel wire.",
//             "warnings": "Do not force into tight gaps."
//         },
//         {
//             "id": 129,
//             "name": "Himalaya Dental Cream",
//             "category": "Toothpaste",
//             "brand": "Himalaya",
//             "priceNumeric": 75,
//             "originalPriceNumeric": 95,
//             "savings": "21%",
//             "image": "/assets/Oralimg/oral36.jpg",
//             "description": "Herbal toothpaste for strong teeth and healthy gums.",
//             "keyFeatures": [
//                 "Herbal protection",
//                 "Cavity prevention",
//                 "Reduces gum bleeding"
//             ],
//             "howToUse": "Brush twice daily.",
//             "ingredients": "Neem, Pomegranate, Triphala.",
//             "warnings": "Avoid if irritation occurs."
//         },
//         {
//             "id": 130,
//             "name": "Dabur Herbal Clove Mouthwash",
//             "category": "Mouthwash",
//             "brand": "Dabur",
//             "priceNumeric": 165,
//             "originalPriceNumeric": 199,
//             "savings": "17%",
//             "image": "/assets/Oralimg/oral37.jpg",
//             "description": "Clove-rich mouthwash for long-lasting germ protection.",
//             "keyFeatures": [
//                 "Natural clove extract",
//                 "Reduces bad breath",
//                 "Prevents gum swelling"
//             ],
//             "howToUse": "Rinse with 15–20ml for 30 seconds.",
//             "ingredients": "Clove oil, Mint extract, Aqua.",
//             "warnings": "Do not swallow."
//         },
//         {
//             "id": 131,
//             "name": "Colgate Sensitive Clove Toothpaste",
//             "category": "Toothpaste",
//             "brand": "Colgate",
//             "priceNumeric": 165,
//             "originalPriceNumeric": 195,
//             "savings": "15%",
//             "image": "/assets/Oralimg/oral38.jpg",
//             "description": "Clove-enhanced toothpaste for sensitivity relief.",
//             "keyFeatures": [
//                 "Reduces sensitivity",
//                 "Clove oil for gum care",
//                 "Strengthens enamel"
//             ],
//             "howToUse": "Brush twice daily for at least 2 weeks.",
//             "ingredients": "Potassium Nitrate, Clove oil.",
//             "warnings": "Not for children under 12."
//         },
//         {
//             "id": 132,
//             "name": "Smartfloss Expanding Dental Floss",
//             "category": "Dental Floss",
//             "brand": "Smartfloss",
//             "priceNumeric": 210,
//             "originalPriceNumeric": 249,
//             "savings": "15%",
//             "image": "/assets/Oralimg/oral39.jpg",
//             "description": "Soft expanding floss that adapts to gaps for deeper cleaning.",
//             "keyFeatures": [
//                 "Expanding fibers",
//                 "Gentle on gums",
//                 "Superior plaque removal"
//             ],
//             "howToUse": "Use daily between teeth.",
//             "ingredients": "Waxed polyester.",
//             "warnings": "Use gently around gums."
//         },
//         {
//             "id": 133,
//             "name": "Toothsi Teeth Whitening Strips",
//             "category": "Teeth Whitening",
//             "brand": "Toothsi",
//             "priceNumeric": 399,
//             "originalPriceNumeric": 499,
//             "savings": "20%",
//             "image": "/assets/Oralimg/oral40.jpg",
//             "description": "Professional-grade whitening strips for visibly whiter teeth.",
//             "keyFeatures": [
//                 "Easy peel-and-apply",
//                 "Whitens in 14 days",
//                 "Enamel-safe formula"
//             ],
//             "howToUse": "Apply strips for 30 minutes daily.",
//             "ingredients": "Hydrogen Peroxide Gel.",
//             "warnings": "Avoid use if you have gum sensitivity."
//         }
//     ],
//     skincare: [
//         {
//             "id": 134,
//             "name": "Vitamin C Glow Serum",
//             "category": "Serum",
//             "brand": "The Ordinary",
//             "priceNumeric": 699,
//             "originalPriceNumeric": 899,
//             "savings": "22%",
//             "image": "/assets/Skincare/vitamin-c-serum.jpg",
//             "description": "Brightening serum with Vitamin C and Hyaluronic Acid for radiant, even-toned skin.",
//             "keyFeatures": [
//                 "Reduces dark spots",
//                 "Boosts collagen",
//                 "Hydrates intensely"
//             ],
//             "howToUse": "Apply 2-3 drops on cleansed face morning and night.",
//             "ingredients": "Ascorbic Acid, Hyaluronic Acid, Vitamin E",
//             "warnings": "Use sunscreen during the day. Patch test before full application."
//         },
//         {
//             "id": 135,
//             "name": "Hydrating Aloe Vera Gel",
//             "category": "Moisturizer",
//             "brand": "Benton",
//             "priceNumeric": 499,
//             "originalPriceNumeric": 650,
//             "savings": "23%",
//             "image": "/assets/Skincare/aloe-gel.jpg",
//             "description": "Soothing 99% Aloe Vera gel for instant hydration and calming irritated skin.",
//             "keyFeatures": [
//                 "Soothes sunburn",
//                 "Oil-free moisturizer",
//                 "Reduces redness"
//             ],
//             "howToUse": "Apply a thin layer on face and body as needed.",
//             "ingredients": "Aloe Barbadensis Leaf Juice, Glycerin",
//             "warnings": "Discontinue use if irritation occurs."
//         },
//         {
//             "id": 136,
//             "name": "Niacinamide 10% Serum",
//             "category": "Serum",
//             "brand": "The Ordinary",
//             "priceNumeric": 599,
//             "originalPriceNumeric": 750,
//             "savings": "20%",
//             "image": "/assets/Skincare/niacinamide.jpg",
//             "description": "Targets blemishes, minimizes pores, and regulates sebum production.",
//             "keyFeatures": [
//                 "Reduces pore appearance",
//                 "Controls oil",
//                 "Improves skin texture"
//             ],
//             "howToUse": "Use after cleansing, before moisturizer.",
//             "ingredients": "Niacinamide, Zinc PCA",
//             "warnings": "Avoid combining with Vitamin C in the same routine."
//         },
//         {
//             "id": 136,
//             "name": "SPF 50+ Sunscreen Gel",
//             "category": "Sunscreen",
//             "brand": "Neutrogena",
//             "priceNumeric": 449,
//             "originalPriceNumeric": 550,
//             "savings": "18%",
//             "image": "/assets/Skincare/sunscreen.jpg",
//             "description": "Ultra-light, non-greasy sunscreen with broad spectrum UVA/UVB protection.",
//             "keyFeatures": [
//                 "PA++++ protection",
//                 "Non-comedogenic",
//                 "Water-resistant"
//             ],
//             "howToUse": "Apply liberally 15 minutes before sun exposure. Reapply every 2 hours.",
//             "ingredients": "Avobenzone, Homosalate, Octisalate",
//             "warnings": "For external use only. Avoid contact with eyes."
//         },
//         {
//             "id": 137,
//             "name": "Salicylic Acid Face Wash",
//             "category": "Cleanser",
//             "brand": "Cetaphil",
//             "priceNumeric": 399,
//             "originalPriceNumeric": 500,
//             "savings": "20%",
//             "image": "/assets/Skincare/salicylic-cleanser.jpg",
//             "description": "Exfoliating cleanser that unclogs pores and fights acne-causing bacteria.",
//             "keyFeatures": [
//                 "2% Salicylic Acid",
//                 "Gentle exfoliation",
//                 "Oil control"
//             ],
//             "howToUse": "Massage onto wet face, rinse thoroughly. Use twice daily.",
//             "ingredients": "Salicylic Acid, Glycerin, Panthenol",
//             "warnings": "May cause dryness. Moisturize after use."
//         },
//         {
//             "id": 138,
//             "name": "Retinol Night Cream",
//             "category": "Night Cream",
//             "brand": "Olays",
//             "priceNumeric": 899,
//             "originalPriceNumeric": 1199,
//             "savings": "25%",
//             "image": "/assets/Skincare/retinol-cream.jpg",
//             "description": "Anti-aging cream with Retinol to reduce wrinkles and improve skin elasticity.",
//             "keyFeatures": [
//                 "Diminishes fine lines",
//                 "Boosts cell renewal",
//                 "Non-irritating formula"
//             ],
//             "howToUse": "Apply a pea-sized amount on face and neck at night.",
//             "ingredients": "Retinol, Niacinamide, Peptides",
//             "warnings": "Use only at night. Always follow with SPF in the morning."
//         },
//         {
//             "id": 139,
//             "name": "Hyaluronic Acid Moisturizer",
//             "category": "Moisturizer",
//             "brand": "Cerave",
//             "priceNumeric": 649,
//             "originalPriceNumeric": 799,
//             "savings": "19%",
//             "image": "/assets/Skincare/hyaluronic-moisturizer.jpg",
//             "description": "Lightweight gel-cream that provides 72-hour hydration with Hyaluronic Acid.",
//             "keyFeatures": [
//                 "Intense hydration",
//                 "Restores skin barrier",
//                 "Fragrance-free"
//             ],
//             "howToUse": "Apply to face and neck morning and evening.",
//             "ingredients": "Hyaluronic Acid, Ceramides, Glycerin",
//             "warnings": "Store in a cool, dry place."
//         },
//         {
//             "id": 140,
//             "name": "Charcoal Detox Mask",
//             "category": "Face Mask",
//             "brand": "Innisfree",
//             "priceNumeric": 349,
//             "originalPriceNumeric": 450,
//             "savings": "22%",
//             "image": "/assets/Skincare/charcoal-mask.jpg",
//             "description": "Purifying clay mask with charcoal to draw out impurities and excess oil.",
//             "keyFeatures": [
//                 "Deep cleansing",
//                 "Minimizes pores",
//                 "Smooths skin texture"
//             ],
//             "howToUse": "Apply an even layer, leave for 10-15 minutes, then rinse.",
//             "ingredients": "Activated Charcoal, Kaolin Clay, Menthol",
//             "warnings": "Avoid eye and lip area. Use once or twice a week."
//         },
//         {
//             "id": 141,
//             "name": "Tea Tree Oil Spot Treatment",
//             "category": "Treatment",
//             "brand": "The Body Shop",
//             "priceNumeric": 299,
//             "originalPriceNumeric": 399,
//             "savings": "25%",
//             "image": "/assets/Skincare/tea-tree-treatment.jpg",
//             "description": "Natural antiseptic treatment to reduce redness and size of acne spots.",
//             "keyFeatures": [
//                 "Anti-inflammatory",
//                 "Reduces swelling",
//                 "Natural formula"
//             ],
//             "howToUse": "Dab directly on blemishes up to 3 times daily.",
//             "ingredients": "Tea Tree Oil, Hamamelis Water",
//             "warnings": "For spot use only. Do not apply on large areas."
//         },
//         {
//             "id": 142,
//             "name": "AHA 30% + BHA 2% Peeling Solution",
//             "category": "Exfoliator",
//             "brand": "The Ordinary",
//             "priceNumeric": 799,
//             "originalPriceNumeric": 999,
//             "savings": "20%",
//             "image": "/assets/Skincare/aha-bha-peel.jpg",
//             "description": "Professional-grade at-home peel to improve skin radiance and texture.",
//             "keyFeatures": [
//                 "Exfoliates deeply",
//                 "Unclogs pores",
//                 "Brightens complexion"
//             ],
//             "howToUse": "Apply on dry face, leave for no more than 10 minutes, rinse thoroughly.",
//             "ingredients": "Glycolic Acid, Salicylic Acid, Tasmanian Pepperberry",
//             "warnings": "Use only once a week. Not for sensitive skin. Avoid sun exposure after use."
//         },
//         {
//             "id": 143,
//             "name": "Rosehip Oil",
//             "category": "Facial Oil",
//             "brand": "The Ordinary",
//             "priceNumeric": 899,
//             "originalPriceNumeric": 1099,
//             "savings": "18%",
//             "image": "/assets/Skincare/rosehip-oil.jpg",
//             "description": "Cold-pressed Rosehip oil rich in antioxidants and essential fatty acids.",
//             "keyFeatures": [
//                 "Fades scars & stretch marks",
//                 "Improves elasticity",
//                 "Nourishes dry skin"
//             ],
//             "howToUse": "Warm 2-3 drops between palms and press onto face.",
//             "ingredients": "100% Organic Rosa Canina Seed Oil",
//             "warnings": "Store away from light and heat."
//         },
//         {
//             "id": 144,
//             "name": "Centella Asiatica Calming Cream",
//             "category": "Moisturizer",
//             "brand": "Purito",
//             "priceNumeric": 749,
//             "originalPriceNumeric": 899,
//             "savings": "17%",
//             "image": "/assets/Skincare/centella-cream.jpg",
//             "description": "Soothing cream with Centella Asiatica to repair and calm sensitive skin.",
//             "keyFeatures": [
//                 "Reduces redness",
//                 "Strengthens skin barrier",
//                 "Fast absorption"
//             ],
//             "howToUse": "Apply as the last step of your skincare routine.",
//             "ingredients": "Centella Asiatica Extract, Madecassoside, Ceramides",
//             "warnings": "Patch test on sensitive skin."
//         },
//         {
//             "id": 145,
//             "name": "Glycolic Acid Toner 7%",
//             "category": "Toner",
//             "brand": "The Ordinary",
//             "priceNumeric": 549,
//             "originalPriceNumeric": 699,
//             "savings": "21%",
//             "image": "/assets/Skincare/glycolic-toner.jpg",
//             "description": "Exfoliating toner to improve skin clarity, texture, and radiance.",
//             "keyFeatures": [
//                 "Gentle exfoliation",
//                 "Brightens dull skin",
//                 "Improves skin tone"
//             ],
//             "howToUse": "Apply with cotton pad after cleansing, avoiding eye area.",
//             "ingredients": "Glycolic Acid, Tasmanian Pepperberry, Glycerin",
//             "warnings": "Start with 2-3 times weekly. Use sunscreen daily."
//         },
//         {
//             "id": 146,
//             "name": "Snail Mucin Essence",
//             "category": "Essence",
//             "brand": "Cosrx",
//             "priceNumeric": 1199,
//             "originalPriceNumeric": 1499,
//             "savings": "20%",
//             "image": "/assets/Skincare/snail-essence.jpg",
//             "description": "Hydrating and repairing essence with 96% Snail Secretion Filtrate.",
//             "keyFeatures": [
//                 "Intense hydration",
//                 "Repairs damaged skin",
//                 "Anti-aging benefits"
//             ],
//             "howToUse": "Pat onto face after toner, before moisturizer.",
//             "ingredients": "Snail Secretion Filtrate, Betaine, Sodium Hyaluronate",
//             "warnings": "Discontinue if allergic reaction occurs."
//         },
//         {
//             "id": 147,
//             "name": "Ceramide Barrier Repair Cream",
//             "category": "Moisturizer",
//             "brand": "Dr. Jart+",
//             "priceNumeric": 1899,
//             "originalPriceNumeric": 2299,
//             "savings": "17%",
//             "image": "/assets/Skincare/ceramide-cream.jpg",
//             "description": "Rich cream that restores and strengthens the skin's natural moisture barrier.",
//             "keyFeatures": [
//                 "Repairs damaged barrier",
//                 "Soothes irritation",
//                 "Long-lasting hydration"
//             ],
//             "howToUse": "Apply as the final step of your PM routine.",
//             "ingredients": "Ceramides, Cholesterol, Fatty Acids",
//             "warnings": "Suitable for very dry and sensitive skin."
//         }
//     ],

//     stomach: {
//         "product": {

//             "tablets": [
//                 {
//                     "id": 148,
//                     "name": "Omez 20mg",
//                     "description": "Long-lasting PPI for acidity and GERD.",
//                     "medicine_type": "PPI",
//                     "uses": ["GERD", "Acid reflux", "Ulcer"],
//                     "images": "/assets/StomachCare/Omez.png",
//                     "cost": 85,
//                     "discount": 20,
//                     "final_price": 74.8,
//                     "manufacturer": "Dr. Reddy's",
//                     "stock": 140,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Use as directed by physician.",
//                         "usage_instruction": "Take 1 tablet before breakfast."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical based formulation",
//                     "ingredients": ["Omeprazole"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 149,
//                     "name": "Pantop 40mg",
//                     "description": "Pantoprazole for reflux and acidity.",
//                     "medicine_type": "PPI",
//                     "uses": ["GERD", "Ulcer"],
//                     "images": "/assets/StomachCare/pantop.png",
//                     "cost": 75,
//                     "discount": 10,
//                     "final_price": 67.5,
//                     "manufacturer": "Aristo",
//                     "stock": 190,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Consult doctor if symptoms persist.",
//                         "usage_instruction": "Take 1 tablet daily before meals."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical based formulation",
//                     "ingredients": ["Pantoprazole"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 150,
//                     "name": "Zentac 150",
//                     "description": "H2 blocker for acidity and heartburn.",
//                     "medicine_type": "H2 Blocker",
//                     "uses": ["Heartburn", "Acidity"],
//                     "images": "/assets/StomachCare/zentac.png",
//                     "cost": 55,
//                     "discount": 15,
//                     "final_price": 46.75,
//                     "manufacturer": "Zydus",
//                     "stock": 180,
//                     "rating": 4.3,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (14 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Short-term use recommended.",
//                         "usage_instruction": "Take 1 tablet when acidity occurs."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical based formulation",
//                     "ingredients": ["Ranitidine"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "14 tablets",
//                     "weight": "14 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 151,
//                     "name": "Domstal 10mg",
//                     "description": "Domperidone for nausea and motility.",
//                     "medicine_type": "Prokinetic",
//                     "uses": ["Nausea", "Gastroparesis"],
//                     "images": "/assets/StomachCare/domstal.png",
//                     "cost": 65,
//                     "discount": 8,
//                     "final_price": 59.8,
//                     "manufacturer": "Torrent",
//                     "stock": 155,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "May cause drowsiness.",
//                         "usage_instruction": "Take before food."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical based formulation",
//                     "ingredients": ["Domperidone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 152,
//                     "name": "Mebeverine 135mg",
//                     "description": "Antispasmodic for IBS cramps.",
//                     "medicine_type": "Antispasmodic",
//                     "uses": ["IBS", "Stomach cramps"],
//                     "images": "/assets/StomachCare/mebeverine.png",
//                     "cost": 60,
//                     "discount": 10,
//                     "final_price": 54,
//                     "manufacturer": "Dr. Reddy's",
//                     "stock": 125,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Use as directed.",
//                         "usage_instruction": "Take after meals."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical based formulation",
//                     "ingredients": ["Mebeverine"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 153,
//                     "name": "Loperamide 2mg",
//                     "description": "Anti-diarrheal for loose motion.",
//                     "medicine_type": "Anti-diarrheal",
//                     "uses": ["Diarrhea"],
//                     "images": "/assets/StomachCare/loperamide.png",
//                     "cost": 40,
//                     "discount": 10,
//                     "final_price": 36,
//                     "manufacturer": "Sun Pharma",
//                     "stock": 210,
//                     "rating": 4.3,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (6 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not for children under 6.",
//                         "usage_instruction": "Take 1 tablet after each loose stool."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical",
//                     "ingredients": ["Loperamide"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "6 tablets",
//                     "weight": "6 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 154,
//                     "name": "Norflox-LB",
//                     "description": "Probiotic + antibiotic recovery tablet.",
//                     "medicine_type": "Probiotic",
//                     "uses": ["Post-diarrhea", "Gut flora"],
//                     "images": "/assets/StomachCare/probiotic.png",
//                     "cost": 55,
//                     "discount": 5,
//                     "final_price": 52.25,
//                     "manufacturer": "MacLeods",
//                     "stock": 300,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "For gut health support.",
//                         "usage_instruction": "Take after meals."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical",
//                     "ingredients": ["Lactobacillus", "Norfloxacin"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 155,
//                     "name": "Digestive Enzyme Tablet",
//                     "description": "Enzyme support for digestion.",
//                     "medicine_type": "Digestive Enzyme",
//                     "uses": ["Indigestion", "Bloating"],
//                     "images": "/assets/StomachCare/pancreatin.png",
//                     "cost": 95,
//                     "discount": 10,
//                     "final_price": 85.5,
//                     "manufacturer": "Macleods",
//                     "stock": 140,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "For digestive support.",
//                         "usage_instruction": "Take after meals."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical",
//                     "ingredients": ["Pancreatin"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 156,
//                     "name": "Gelusil Chewable",
//                     "description": "Fast gas & acidity relief chewable.",
//                     "medicine_type": "Antacid (chewable)",
//                     "uses": ["Acidity", "Gas"],
//                     "images": "/assets/StomachCare/gelusil-chew.png",
//                     "cost": 98,
//                     "discount": 5,
//                     "final_price": 93.1,
//                     "manufacturer": "Pfizer",
//                     "stock": 200,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Chewable tablet",
//                         "pack_size": "1 pouch (12 chewable tablets)",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "For temporary relief.",
//                         "usage_instruction": "Chew 1–2 tablets as needed."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical",
//                     "ingredients": ["Aluminium hydroxide", "Magnesium hydroxide", "Simethicone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "12 tablets",
//                     "weight": "12 tablets",
//                     "packaging_type": "Pouch",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 157,
//                     "name": "Meftal (Mefenamic acid)",
//                     "description": "Pain + spasm relief.",
//                     "medicine_type": "Analgesic/Antispasmodic",
//                     "uses": ["Cramp pain"],
//                     "images": "/assets/StomachCare/meftal.png",
//                     "cost": 50,
//                     "discount": 5,
//                     "final_price": 47.5,
//                     "manufacturer": "Blue Cross",
//                     "stock": 250,
//                     "rating": 4.4,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "For pain and cramps.",
//                         "usage_instruction": "Take after meals."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical",
//                     "ingredients": ["Mefenamic acid"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 158,
//                     "name": "Isabgol Tablet",
//                     "description": "Fiber for constipation relief.",
//                     "medicine_type": "Fiber Supplement",
//                     "uses": ["Constipation"],
//                     "images": "/assets/StomachCare/isabgol-tablet.png",
//                     "cost": 120,
//                     "discount": 5,
//                     "final_price": 114,
//                     "manufacturer": "Satyam",
//                     "stock": 170,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 bottle (30 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Drink plenty of water.",
//                         "usage_instruction": "Take 1–2 tablets at night."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Plant based",
//                     "ingredients": ["Psyllium husk"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "30 tablets",
//                     "weight": "30 tablets",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 159,
//                     "name": "Simethicone 40mg",
//                     "description": "Gas and bloating relief.",
//                     "medicine_type": "Anti-foaming",
//                     "uses": ["Gas", "Bloating"],
//                     "images": "/assets/StomachCare/simethicone.png",
//                     "cost": 30,
//                     "discount": 0,
//                     "final_price": 30,
//                     "manufacturer": "GSK",
//                     "stock": 320,
//                     "rating": 4.2,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Safe for adults.",
//                         "usage_instruction": "Take after meals."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical",
//                     "ingredients": ["Simethicone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 160,
//                     "name": "Pantoprazole + Domperidone",
//                     "description": "Combo for GERD + slow digestion.",
//                     "medicine_type": "Combo (PPI+Prokinetic)",
//                     "uses": ["GERD", "Delayed emptying"],
//                     "images": "/assets/StomachCare/panto-domperone-combo.png",
//                     "cost": 120,
//                     "discount": 12,
//                     "final_price": 105.6,
//                     "manufacturer": "Generic",
//                     "stock": 90,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "May cause dizziness.",
//                         "usage_instruction": "Take before meals."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical",
//                     "ingredients": ["Pantoprazole", "Domperidone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 161,
//                     "name": "Racecadotril 100mg",
//                     "description": "Anti-diarrheal that prevents dehydration.",
//                     "medicine_type": "Anti-diarrheal",
//                     "uses": ["Acute diarrhea"],
//                     "images": "/assets/StomachCare/racecadotril.png",
//                     "cost": 75,
//                     "discount": 5,
//                     "final_price": 71.25,
//                     "manufacturer": "Aristo",
//                     "stock": 170,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Keep hydrated.",
//                         "usage_instruction": "Take 1 tablet thrice daily."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical",
//                     "ingredients": ["Racecadotril"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 162,
//                     "name": "Ondansetron 4mg",
//                     "description": "Fast nausea and vomiting control.",
//                     "medicine_type": "Antiemetic",
//                     "uses": ["Nausea", "Vomiting"],
//                     "images": "/assets/StomachCare/ondansetron.png",
//                     "cost": 55,
//                     "discount": 5,
//                     "final_price": 52.25,
//                     "manufacturer": "Cipla",
//                     "stock": 250,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Use only when needed.",
//                         "usage_instruction": "1 tablet during nausea episodes."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical",
//                     "ingredients": ["Ondansetron"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 }
//             ],


//             "powders": [
//                 {
//                     "id": 163,
//                     "name": "ENO Fruit Salt (Powder Sachet)",
//                     "description": "Instant antacid powder to neutralize stomach acid fast; single-use sachet.",
//                     "medicine_type": "Antacid Powder",
//                     "uses": ["Acidity", "Bloating"],
//                     "images": "/assets/StomachCare/eno-sachet.png",
//                     "cost": 10.0,
//                     "discount": 0,
//                     "final_price": 10.0,
//                     "manufacturer": "GSK",
//                     "stock": 1200,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Powder Sachet",
//                         "pack_size": "1 sachet (5g)",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "For temporary relief only. Not for long-term use.",
//                         "usage_instruction": "Mix entire sachet in water and drink immediately."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical based formulation",
//                     "ingredients": ["Sodium bicarbonate", "Citric acid"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "5g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 164,
//                     "name": "ORS Hydration Powder Sachet",
//                     "description": "Oral Rehydration Salts for electrolyte replacement during diarrhea and vomiting.",
//                     "medicine_type": "ORS",
//                     "uses": ["Dehydration", "Diarrhea"],
//                     "images": "/assets/StomachCare/ors.png",
//                     "cost": 20.0,
//                     "discount": 0,
//                     "final_price": 20.0,
//                     "manufacturer": "WHO Formula",
//                     "stock": 800,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "ORS Powder",
//                         "pack_size": "1 sachet (21g)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "WHO recommended formulation for dehydration.",
//                         "usage_instruction": "Mix contents in 200ml clean water and drink gradually."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Electrolyte mixture",
//                     "ingredients": ["Glucose", "Sodium chloride", "Potassium chloride"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "21g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 165,
//                     "name": "Gastrolyte ORS Powder",
//                     "description": "Glucose-based hydration powder for dehydration and diarrhea relief.",
//                     "medicine_type": "ORS",
//                     "uses": ["Dehydration", "Diarrhea", "Vomiting"],
//                     "images": "/assets/StomachCare/gastrolyte.png",
//                     "cost": 22.0,
//                     "discount": 0,
//                     "final_price": 22.0,
//                     "manufacturer": "Pfizer",
//                     "stock": 700,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "ORS Powder",
//                         "pack_size": "1 sachet (20g)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Prepare fresh solution each time.",
//                         "usage_instruction": "Dissolve in 200ml clean water and sip slowly."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Electrolyte and glucose blend",
//                     "ingredients": ["Glucose", "Electrolytes"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "20g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 166,
//                     "name": "Electral Powder",
//                     "description": "WHO-recommended ORS powder for dehydration and electrolyte imbalance.",
//                     "medicine_type": "ORS",
//                     "uses": ["Dehydration", "Loose motion"],
//                     "images": "/assets/StomachCare/electral.png",
//                     "cost": 21.0,
//                     "discount": 0,
//                     "final_price": 21.0,
//                     "manufacturer": "FDC Ltd",
//                     "stock": 900,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "ORS Powder",
//                         "pack_size": "1 sachet (21g)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Use only as directed for dehydration.",
//                         "usage_instruction": "Mix in 200ml boiled/cooled water and consume."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Electrolyte mixture",
//                     "ingredients": ["Glucose", "Sodium chloride", "Potassium"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "21g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 167,
//                     "name": "Digene Powder",
//                     "description": "Antacid powder for quick relief from acidity and stomach burning.",
//                     "medicine_type": "Antacid Powder",
//                     "uses": ["Acidity", "Heartburn"],
//                     "images": "/assets/StomachCare/digene.png",
//                     "cost": 65.0,
//                     "discount": 10,
//                     "final_price": 58.5,
//                     "manufacturer": "Abbott",
//                     "stock": 400,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Antacid Powder",
//                         "pack_size": "130g bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not suitable for kidney patients without advice.",
//                         "usage_instruction": "Take 1 teaspoon with water after meals."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical formulation",
//                     "ingredients": ["Aluminium hydroxide", "Magnesium hydroxide"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "130g",
//                     "weight": "130g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 168,
//                     "name": "Gelmix Antacid Powder",
//                     "description": "Neutralizing stomach acid powder used for sour stomach and bloating.",
//                     "medicine_type": "Antacid Powder",
//                     "uses": ["Acidity", "Gas"],
//                     "images": "/assets/StomachCare/gelmix.png",
//                     "cost": 55.0,
//                     "discount": 5,
//                     "final_price": 52.25,
//                     "manufacturer": "Glenmark",
//                     "stock": 350,
//                     "rating": 4.3,

//                     "highlights": {
//                         "product_type": "Antacid Powder",
//                         "pack_size": "100g bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "May interact with some medications.",
//                         "usage_instruction": "Take 1 teaspoon mixed in water."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Chemical mixture",
//                     "ingredients": ["Magnesium hydroxide"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "100g",
//                     "weight": "100g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 169,
//                     "name": "Isabgol Husk Powder",
//                     "description": "Fiber-rich powder to treat constipation and promote bowel regularity.",
//                     "medicine_type": "Fiber Supplement",
//                     "uses": ["Constipation", "Digestive health"],
//                     "images": "/assets/StomachCare/isabgol.png",
//                     "cost": 140.0,
//                     "discount": 5,
//                     "final_price": 133.0,
//                     "manufacturer": "Satyam",
//                     "stock": 300,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Fiber Powder",
//                         "pack_size": "100g bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Drink plenty of water when using fiber supplements.",
//                         "usage_instruction": "Mix 1-2 teaspoons in warm water before bedtime."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Natural fiber",
//                     "ingredients": ["Psyllium husk"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "100g",
//                     "weight": "100g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 170,
//                     "name": "Triphala Churna",
//                     "description": "Ayurvedic digestive powder that helps relieve constipation and promote gut cleansing.",
//                     "medicine_type": "Ayurvedic Powder",
//                     "uses": ["Constipation", "Detox", "Digestion"],
//                     "images": "/assets/StomachCare/triphala.png",
//                     "cost": 90.0,
//                     "discount": 5,
//                     "final_price": 85.5,
//                     "manufacturer": "Patanjali",
//                     "stock": 250,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Ayurvedic Powder",
//                         "pack_size": "100g pouch",
//                         "shelf_life": "36 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Herbal product; consult doctor if pregnant.",
//                         "usage_instruction": "Take 1 teaspoon with warm water before bedtime."
//                     },

//                     "brand": "Patanjali",
//                     "material_type_free": "Herbal formulation",
//                     "ingredients": ["Triphala"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "100g",
//                     "weight": "100g",
//                     "packaging_type": "Pouch",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 171,
//                     "name": "Hingvastak Churna",
//                     "description": "Ayurvedic powder for gas, bloating, and indigestion.",
//                     "medicine_type": "Ayurvedic Digestive",
//                     "uses": ["Gas", "Indigestion"],
//                     "images": "/assets/StomachCare/hingvastak.png",
//                     "cost": 110.0,
//                     "discount": 10,
//                     "final_price": 99.0,
//                     "manufacturer": "Baidyanath",
//                     "stock": 180,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Ayurvedic Powder",
//                         "pack_size": "100g pouch",
//                         "shelf_life": "36 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Contains spices; avoid during ulcers.",
//                         "usage_instruction": "Take 1/2 teaspoon with warm water after meals."
//                     },

//                     "brand": "Baidyanath",
//                     "material_type_free": "Herbal blend",
//                     "ingredients": ["Hing", "Herbal spices"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "100g",
//                     "weight": "100g",
//                     "packaging_type": "Pouch",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 172,
//                     "name": "ORS Apple Flavour Powder",
//                     "description": "Flavored ORS for hydration during vomiting and diarrhea.",
//                     "medicine_type": "ORS",
//                     "uses": ["Diarrhea", "Vomiting"],
//                     "images": "/assets/StomachCare/ors-apple.png",
//                     "cost": 18.0,
//                     "discount": 0,
//                     "final_price": 18.0,
//                     "manufacturer": "Cipla",
//                     "stock": 500,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "ORS Powder",
//                         "pack_size": "1 sachet (20g)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Use for dehydration only.",
//                         "usage_instruction": "Mix in 200ml clean water and consume slowly."
//                     },

//                     "brand": "Cipla",
//                     "material_type_free": "Electrolyte blend",
//                     "ingredients": ["Electrolytes", "Glucose", "Flavour"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "20g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 173,
//                     "name": "ORS Lemon Powder",
//                     "description": "Electrolyte replenisher for dehydration and vomiting.",
//                     "medicine_type": "ORS",
//                     "uses": ["Dehydration", "Vomiting"],
//                     "images": "/assets/StomachCare/ors-lemon.png",
//                     "cost": 20.0,
//                     "discount": 0,
//                     "final_price": 20.0,
//                     "manufacturer": "Abbott",
//                     "stock": 550,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "ORS Powder",
//                         "pack_size": "1 sachet (20g)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Store in a cool dry place.",
//                         "usage_instruction": "Mix contents in 200ml of clean water."
//                     },

//                     "brand": "Abbott",
//                     "material_type_free": "Electrolyte blend",
//                     "ingredients": ["Sodium chloride", "Potassium chloride", "Glucose"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "20g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 174,
//                     "name": "ORS Zinc + Electrolyte Powder",
//                     "description": "Zinc-enriched ORS that supports immunity and reduces diarrhea severity.",
//                     "medicine_type": "ORS + Zinc",
//                     "uses": ["Diarrhea", "Dehydration"],
//                     "images": "/assets/StomachCare/zinc-ors.png",
//                     "cost": 28.0,
//                     "discount": 0,
//                     "final_price": 28.0,
//                     "manufacturer": "Sun Pharma",
//                     "stock": 400,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "ORS + Zinc",
//                         "pack_size": "1 sachet (20g)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Zinc improves gut recovery during diarrhea.",
//                         "usage_instruction": "Mix with water and consume in small sips."
//                     },

//                     "brand": "Sun Pharma",
//                     "material_type_free": "Electrolyte and zinc mix",
//                     "ingredients": ["Zinc", "Glucose", "Electrolytes"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "20g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 175,
//                     "name": "Pudina Churna Powder",
//                     "description": "Cooling digestive powder made from mint for gas and indigestion.",
//                     "medicine_type": "Ayurvedic Digestive Powder",
//                     "uses": ["Gas", "Indigestion", "Bloating"],
//                     "images": "/assets/StomachCare/pudina-churna.png",
//                     "cost": 85.0,
//                     "discount": 5,
//                     "final_price": 80.75,
//                     "manufacturer": "Patanjali",
//                     "stock": 240,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Ayurvedic Digestive Powder",
//                         "pack_size": "100g pouch",
//                         "shelf_life": "36 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Herbal digestive; safe for daily use.",
//                         "usage_instruction": "Take 1 teaspoon after meals."
//                     },

//                     "brand": "Patanjali",
//                     "material_type_free": "Herbal formulation",
//                     "ingredients": ["Mint leaf powder"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "100g",
//                     "weight": "100g",
//                     "packaging_type": "Pouch",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Medicare Labs Pvt Ltd",
//                     "country_of_origin": "India"
//                 }
//             ],

//             "syrups": [
//                 {
//                     "id": 176,
//                     "name": "Gaviscon Liquid (Syrup)",
//                     "description": "Forms a barrier to reflux and soothes heartburn and regurgitation.",
//                     "medicine_type": "Alginate Antacid (syrup)",
//                     "uses": ["GERD symptoms", "Heartburn"],
//                     "images": "/assets/StomachCare/gaviscon.png",
//                     "cost": 165.0,
//                     "discount": 8,
//                     "final_price": 151.8,
//                     "manufacturer": "Reckitt",
//                     "stock": 95,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Syrup",
//                         "pack_size": "150 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not recommended for patients with severe kidney issues.",
//                         "usage_instruction": "Consume 1-2 teaspoons after meals or as directed."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Sodium alginate", "Calcium carbonate"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "150 ml",
//                     "weight": "200g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Road, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Reckitt Healthcare Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 177,
//                     "name": "Aristozyme Syrup (Digestive Enzyme)",
//                     "description": "Digestive enzyme syrup for bloating and indigestion in children and adults.",
//                     "medicine_type": "Digestive Enzyme (syrup)",
//                     "uses": ["Indigestion", "Bloating"],
//                     "images": "/assets/StomachCare/aristozyme.png",
//                     "cost": 110.0,
//                     "discount": 10,
//                     "final_price": 99.0,
//                     "manufacturer": "Aristo",
//                     "stock": 140,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Digestive Syrup",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Use cautiously if diabetic.",
//                         "usage_instruction": "Take 1 teaspoon twice daily after meals."
//                     },

//                     "brand": "Aristo",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Diastase", "Pepsin"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "200 ml",
//                     "weight": "250g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Road, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Aristo Pharmaceuticals",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 178,
//                     "name": "Sucralfate Oral Suspension",
//                     "description": "Mucosal protective liquid for ulcers and gastritis.",
//                     "medicine_type": "Anti-ulcer (suspension)",
//                     "uses": ["Ulcers", "Gastritis"],
//                     "images": "/assets/StomachCare/sucralfate-susp.png",
//                     "cost": 175.0,
//                     "discount": 10,
//                     "final_price": 157.5,
//                     "manufacturer": "Asian Pharma",
//                     "stock": 80,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Oral Suspension",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Shake well before use.",
//                         "usage_instruction": "Take 1 tablespoon before meals or as prescribed."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "No artificial flavors",
//                     "ingredients": ["Sucralfate"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "200 ml",
//                     "weight": "250g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Road, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Asian Pharma",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 179,
//                     "name": "Pudin Hara Liquid",
//                     "description": "Ayurvedic cooling liquid to ease gas and stomach discomfort.",
//                     "medicine_type": "Ayurvedic (syrup)",
//                     "uses": ["Gas", "Indigestion"],
//                     "images": "/assets/StomachCare/pudinhara.png",
//                     "cost": 45.0,
//                     "discount": 5,
//                     "final_price": 42.75,
//                     "manufacturer": "Dabur",
//                     "stock": 300,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Ayurvedic Liquid",
//                         "pack_size": "30 ml bottle",
//                         "shelf_life": "36 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Contains natural mint; avoid overdose.",
//                         "usage_instruction": "Take 5–10 drops in water."
//                     },

//                     "brand": "Dabur",
//                     "material_type_free": "100% herbal",
//                     "ingredients": ["Mint", "Herbal oils"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic product",
//                     "net_quantity": "30 ml",
//                     "weight": "40g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Road, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Dabur India Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 180,
//                     "name": "Digene Gel Syrup Mint",
//                     "description": "Fast-acting liquid antacid gel for acidity and gas.",
//                     "medicine_type": "Antacid Gel (syrup)",
//                     "uses": ["Acidity", "Gas", "Heartburn"],
//                     "images": "/assets/StomachCare/digene-gel.png",
//                     "cost": 135.0,
//                     "discount": 5,
//                     "final_price": 128.25,
//                     "manufacturer": "Abbott",
//                     "stock": 160,
//                     "rating": 4.4,

//                     "highlights": {
//                         "product_type": "Antacid Gel",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Do not take with other antacids at same time.",
//                         "usage_instruction": "Take 2 teaspoons after food."
//                     },

//                     "brand": "Abbott",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Magnesium hydroxide", "Simethicone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "200 ml",
//                     "weight": "250g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Road, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Abbott Healthcare",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 181,
//                     "name": "Colicaid Drops/Syrup",
//                     "description": "Simethicone-based formula to relieve gas, colic, and discomfort in infants.",
//                     "medicine_type": "Anti-gas (infant syrup)",
//                     "uses": ["Gas", "Colic", "Bloating"],
//                     "images": "/assets/StomachCare/colicaid.png",
//                     "cost": 75.0,
//                     "discount": 5,
//                     "final_price": 71.25,
//                     "manufacturer": "Abbott",
//                     "stock": 200,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Infant Drops/Syrup",
//                         "pack_size": "30 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Use only for infants as directed.",
//                         "usage_instruction": "5–10 drops after feeding."
//                     },

//                     "brand": "Abbott",
//                     "material_type_free": "Sugar-free",
//                     "ingredients": ["Simethicone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Pediatric formulation",
//                     "net_quantity": "30 ml",
//                     "weight": "40g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Road, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Abbott Healthcare",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 182,
//                     "name": "Looz Syrup",
//                     "description": "Lactulose-based syrup used to treat chronic constipation.",
//                     "medicine_type": "Laxative (syrup)",
//                     "uses": ["Constipation"],
//                     "images": "/assets/StomachCare/looz.png",
//                     "cost": 165.0,
//                     "discount": 8,
//                     "final_price": 151.8,
//                     "manufacturer": "Intas",
//                     "stock": 90,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Laxative Syrup",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "30 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "May cause bloating initially.",
//                         "usage_instruction": "Take 1–2 tablespoons daily."
//                     },

//                     "brand": "Intas",
//                     "material_type_free": "Gluten-free",
//                     "ingredients": ["Lactulose"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "200 ml",
//                     "weight": "250g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Road, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Intas Pharma",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 183,
//                     "name": "Gastica Syrup",
//                     "description": "Enzyme-rich syrup improving digestion and reducing bloating.",
//                     "medicine_type": "Digestive Enzyme (syrup)",
//                     "uses": ["Indigestion", "Gas"],
//                     "images": "/assets/StomachCare/gastica.png",
//                     "cost": 120.0,
//                     "discount": 10,
//                     "final_price": 108.0,
//                     "manufacturer": "Mankind Pharma",
//                     "stock": 130,
//                     "rating": 4.4,

//                     "highlights": {
//                         "product_type": "Digestive Enzyme Syrup",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not for diabetic patients without advice.",
//                         "usage_instruction": "Take 1 teaspoon after meals."
//                     },

//                     "brand": "Mankind",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Diastase", "Papain"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "200 ml",
//                     "weight": "250g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Road, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Mankind Pharma",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 184,
//                     "name": "Gelusil Liquid",
//                     "description": "Liquid antacid to neutralize acidity and relieve bloating.",
//                     "medicine_type": "Antacid (syrup)",
//                     "uses": ["Acidity", "Gas"],
//                     "images": "/assets/StomachCare/gelusil.png",
//                     "cost": 145.0,
//                     "discount": 7,
//                     "final_price": 134.85,
//                     "manufacturer": "Pfizer",
//                     "stock": 110,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Antacid Liquid",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Avoid taking it with iron supplements.",
//                         "usage_instruction": "Take 2 teaspoons after meals."
//                     },

//                     "brand": "Pfizer",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Aluminium hydroxide", "Simethicone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "200 ml",
//                     "weight": "250g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Road, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Pfizer Healthcare",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 185,
//                     "name": "Zymnet Plus Syrup",
//                     "description": "Digestive enzyme syrup supporting breakdown of proteins, carbs, and fats.",
//                     "medicine_type": "Digestive Enzyme (syrup)",
//                     "uses": ["Indigestion", "Heaviness", "Gas"],
//                     "images": "/assets/StomachCare/zymnet-plus.png",
//                     "cost": 115.0,
//                     "discount": 10,
//                     "final_price": 103.5,
//                     "manufacturer": "Cipla",
//                     "stock": 150,
//                     "rating": 4.4,

//                     "highlights": {
//                         "product_type": "Digestive Enzyme Syrup",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not suitable for children below 5 years.",
//                         "usage_instruction": "Take 1 teaspoon after meals."
//                     },

//                     "brand": "Cipla",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Papain", "Fungal diastase"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "200 ml",
//                     "weight": "250g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Road, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Cipla Ltd",
//                     "country_of_origin": "India"
//                 }
//             ],


//             "ors": [
//                 {
//                     "id": 186,
//                     "name": "Electral ORS",
//                     "description": "WHO-recommended Oral Rehydration Salts to restore electrolytes and fluids lost during diarrhea or vomiting.",
//                     "medicine_type": "ORS",
//                     "uses": ["Diarrhea", "Dehydration", "Vomiting"],
//                     "images": "/assets/StomachCare/electral2.png",
//                     "cost": 21.0,
//                     "discount": 0,
//                     "final_price": 21.0,
//                     "manufacturer": "FDC Ltd",
//                     "stock": 900,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "ORS Powder",
//                         "pack_size": "1 sachet",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Use immediately after mixing with water.",
//                         "usage_instruction": "Dissolve entire sachet in 200 ml drinking water."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Sugar-based formula",
//                     "ingredients": ["Dextrose", "Sodium chloride", "Potassium chloride"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "21g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "FDC Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 187,
//                     "name": "ORS Hydration Powder (Standard)",
//                     "description": "Balanced ORS formula for quick electrolyte replenishment and hydration.",
//                     "medicine_type": "ORS",
//                     "uses": ["Loose motion", "Vomiting", "Dehydration"],
//                     "images": "/assets/StomachCare/ors-standard.png",
//                     "cost": 20.0,
//                     "discount": 0,
//                     "final_price": 20.0,
//                     "manufacturer": "WHO Formula",
//                     "stock": 850,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "ORS Powder",
//                         "pack_size": "1 sachet",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Use only freshly prepared solution.",
//                         "usage_instruction": "Mix with 200 ml drinking water and consume within 24 hours."
//                     },

//                     "brand": "Medicare",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Dextrose", "Sodium chloride", "Trisodium citrate"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "20g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "WHO Formula Manufacturer",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 188,
//                     "name": "ORS Lemon Flavour",
//                     "description": "Refreshing lemon-flavored electrolyte salt for dehydration and diarrhea.",
//                     "medicine_type": "ORS",
//                     "uses": ["Dehydration", "Heat exhaustion"],
//                     "images": "/assets/StomachCare/ors-lemon.png",
//                     "cost": 20.0,
//                     "discount": 0,
//                     "final_price": 20.0,
//                     "manufacturer": "Abbott",
//                     "stock": 650,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Flavoured ORS Powder",
//                         "pack_size": "1 sachet",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not to be mixed with hot water.",
//                         "usage_instruction": "Mix 1 sachet with 200 ml cold/room temp water."
//                     },

//                     "brand": "Abbott",
//                     "material_type_free": "Artificial-color free",
//                     "ingredients": ["Dextrose", "Citric acid", "Electrolytes"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "20g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Abbott Healthcare",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 189,
//                     "name": "ORS Apple Flavour",
//                     "description": "Apple-flavored Oral Rehydration Salts for kids and adults to prevent dehydration.",
//                     "medicine_type": "ORS",
//                     "uses": ["Diarrhea", "Vomiting"],
//                     "images": "/assets/StomachCare/ors-apple.png",
//                     "cost": 18.0,
//                     "discount": 0,
//                     "final_price": 18.0,
//                     "manufacturer": "Cipla",
//                     "stock": 500,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Flavoured ORS",
//                         "pack_size": "1 sachet",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Keep away from direct sunlight.",
//                         "usage_instruction": "Mix with 200 ml water and consume."
//                     },

//                     "brand": "Cipla",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Dextrose", "Electrolytes", "Apple flavour"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "18g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Cipla Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 190,
//                     "name": "ORS Orange Flavour",
//                     "description": "Orange-flavored electrolyte mixture to replace fluids and salts during diarrhea.",
//                     "medicine_type": "ORS",
//                     "uses": ["Loose motion", "Dehydration"],
//                     "images": "/assets/StomachCare/ors-orange.png",
//                     "cost": 20.0,
//                     "discount": 0,
//                     "final_price": 20.0,
//                     "manufacturer": "GSK",
//                     "stock": 700,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Flavoured ORS Powder",
//                         "pack_size": "1 sachet",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Store in a cool, dry place.",
//                         "usage_instruction": "Dissolve 1 sachet in 200 ml of drinking water."
//                     },

//                     "brand": "GSK",
//                     "material_type_free": "Sugar-based formula",
//                     "ingredients": ["Dextrose", "Electrolytes", "Orange flavour"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "20g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "GSK Pharma",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 191,
//                     "name": "ORS Zinc + Electrolyte",
//                     "description": "Zinc-enriched ORS that shortens the duration of diarrhea and improves immunity.",
//                     "medicine_type": "ORS + Zinc",
//                     "uses": ["Diarrhea", "Dehydration"],
//                     "images": "/assets/StomachCare/zinc-ors.png",
//                     "cost": 28.0,
//                     "discount": 0,
//                     "final_price": 28.0,
//                     "manufacturer": "Sun Pharma",
//                     "stock": 480,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "ORS + Zinc Powder",
//                         "pack_size": "1 sachet",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not for children under 6 months.",
//                         "usage_instruction": "Mix with 200 ml clean water and drink slowly."
//                     },

//                     "brand": "Sun Pharma",
//                     "material_type_free": "No artificial sweeteners",
//                     "ingredients": ["Zinc", "Dextrose", "Electrolytes"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "28g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Sun Pharma Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 192,
//                     "name": "ORS Glucose Energy Mix",
//                     "description": "Instant glucose + electrolyte formula for dehydration, weakness, and recovery after diarrhea.",
//                     "medicine_type": "ORS + Glucose",
//                     "uses": ["Fatigue", "Loose motion"],
//                     "images": "/assets/StomachCare/glucose-ors.png",
//                     "cost": 25.0,
//                     "discount": 0,
//                     "final_price": 25.0,
//                     "manufacturer": "Dabur",
//                     "stock": 600,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "ORS + Glucose Powder",
//                         "pack_size": "1 sachet",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not suitable for diabetics.",
//                         "usage_instruction": "Mix with 200 ml water; consume immediately."
//                     },

//                     "brand": "Dabur",
//                     "material_type_free": "No synthetic colours",
//                     "ingredients": ["Glucose", "Electrolytes"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "None",
//                     "net_quantity": "1 sachet",
//                     "weight": "25g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Dabur India Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 193,
//                     "name": "ORS Sports Electrolyte",
//                     "description": "Electrolyte-rich sports ORS for athletes and dehydration due to heat and diarrhea.",
//                     "medicine_type": "ORS + Electrolyte",
//                     "uses": ["Dehydration", "Heat stroke", "Loose motion"],
//                     "images": "/assets/StomachCare/sports-ors.png",
//                     "cost": 30.0,
//                     "discount": 0,
//                     "final_price": 30.0,
//                     "manufacturer": "Enerzal",
//                     "stock": 420,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Sports ORS Powder",
//                         "pack_size": "1 sachet",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not for people with kidney issues.",
//                         "usage_instruction": "Mix with 250 ml of water for best results."
//                     },

//                     "brand": "Enerzal",
//                     "material_type_free": "No preservatives",
//                     "ingredients": ["Electrolytes", "Glucose"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Energy supplement",
//                     "net_quantity": "1 sachet",
//                     "weight": "30g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Enerzal Pvt Ltd",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 194,
//                     "name": "ORS Kids (Pediatric)",
//                     "description": "Mild-flavored pediatric ORS for children with dehydration due to diarrhea.",
//                     "medicine_type": "ORS (Kids)",
//                     "uses": ["Pediatric dehydration", "Diarrhea"],
//                     "images": "/assets/StomachCare/ors-kids.png",
//                     "cost": 18.0,
//                     "discount": 0,
//                     "final_price": 18.0,
//                     "manufacturer": "Pedicare",
//                     "stock": 430,
//                     "rating": 4.9,

//                     "highlights": {
//                         "product_type": "Kids ORS Powder",
//                         "pack_size": "1 sachet",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Pediatric use only.",
//                         "usage_instruction": "Mix with 200 ml boiled & cooled water."
//                     },

//                     "brand": "Pedicare",
//                     "material_type_free": "No artificial sweeteners",
//                     "ingredients": ["Electrolytes", "Dextrose"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Pediatric product",
//                     "net_quantity": "1 sachet",
//                     "weight": "18g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad, India",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Pedicare Labs",
//                     "country_of_origin": "India"
//                 }

//             ]
//             ,

//             "kids": [
//                 {
//                     "id": 195,
//                     "name": "Colicaid Syrup",
//                     "description": "Pediatric syrup with dill oil, fennel oil and simethicone to relieve infant colic, flatulence and stomach cramps.",
//                     "medicine_type": "Antiflatulent (paediatric syrup)",
//                     "uses": ["Infant colic", "Gas in baby", "Stomach cramps"],
//                     "images": "/assets/StomachCare/colicaid.png",
//                     "cost": 75.0,
//                     "discount": 5,
//                     "final_price": 71.25,
//                     "manufacturer": "Meyer Organics",
//                     "stock": 250,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Paediatric Syrup",
//                         "pack_size": "30 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Consult pediatrician if symptoms persist.",
//                         "usage_instruction": "Give as directed on pack or by doctor."
//                     },

//                     "brand": "Meyer Organics",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Dill oil", "Fennel oil", "Simethicone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Paediatric product",
//                     "net_quantity": "30 ml",
//                     "weight": "30 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "KidsCare Pharmacy",
//                     "seller_address": "123 Child Wellness Street, Hyderabad",
//                     "seller_license": "KIDMED2025HYD01",
//                     "manufactured_by": "Meyer Organics",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 196,
//                     "name": "Gaso Kid Oral Drops",
//                     "description": "Oral drops for children: dill oil + fennel oil + simethicone to ease abdominal pain, bloating & discomfort.",
//                     "medicine_type": "Antispasmodic/Antiflatulent (paediatric drops)",
//                     "uses": ["Abdominal pain (child)", "Bloating", "Gas"],
//                     "images": "/assets/StomachCare/gasokid.png",
//                     "cost": 95.0,
//                     "discount": 8,
//                     "final_price": 87.4,
//                     "manufacturer": "Biosortia Healthcare",
//                     "stock": 180,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Paediatric Drops",
//                         "pack_size": "15 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Shake well before use.",
//                         "usage_instruction": "Administer with dropper according to age."
//                     },

//                     "brand": "Biosortia Kids",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Dill oil", "Fennel oil", "Simethicone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Paediatric",
//                     "net_quantity": "15 ml",
//                     "weight": "15 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "KidsCare Pharmacy",
//                     "seller_address": "123 Child Wellness Street, Hyderabad",
//                     "seller_license": "KIDMED2025HYD01",
//                     "manufactured_by": "Biosortia Healthcare",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 197,
//                     "name": "Woodward’s Gripe Water 130 ml",
//                     "description": "Classic gripe water used for infants to ease colic, indigestion and stomach discomfort.",
//                     "medicine_type": "Gripe Water (infant syrup)",
//                     "uses": ["Infant colic", "Indigestion", "Gas"],
//                     "images": "/assets/StomachCare/gripe-water.png",
//                     "cost": 57.0,
//                     "discount": 8,
//                     "final_price": 52.44,
//                     "manufacturer": "Woodward’s",
//                     "stock": 300,
//                     "rating": 4.4,

//                     "highlights": {
//                         "product_type": "Infant Syrup",
//                         "pack_size": "130 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not recommended for babies below 1 month.",
//                         "usage_instruction": "Give recommended dose with measuring cap."
//                     },

//                     "brand": "Woodward's",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Dill extract", "Sarjikakshar", "Sugar base"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "130 ml",
//                     "weight": "130 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "KidsCare Pharmacy",
//                     "seller_address": "123 Child Wellness Street, Hyderabad",
//                     "seller_license": "KIDMED2025HYD01",
//                     "manufactured_by": "Woodward’s",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 198,
//                     "name": "Probiotic Sachets for Kids",
//                     "description": "Probiotics specially formulated for children to help gut flora balance, especially after diarrhea or antibiotic use.",
//                     "medicine_type": "Probiotic (paediatric sachet)",
//                     "uses": ["Diarrhea (child)", "Post-antibiotic gut recovery"],
//                     "images": "/assets/StomachCare/probiotic-kids.png",
//                     "cost": 120.0,
//                     "discount": 10,
//                     "final_price": 108.0,
//                     "manufacturer": "MacLeods (kids range)",
//                     "stock": 220,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Kids Probiotic Sachet",
//                         "pack_size": "1 sachet",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Use under pediatric guidance.",
//                         "usage_instruction": "Mix sachet contents with water/milk."
//                     },

//                     "brand": "MacLeods Kids",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Lactobacillus", "Bifidobacterium"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Probiotic",
//                     "net_quantity": "1 sachet",
//                     "weight": "5g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "KidsCare Pharmacy",
//                     "seller_address": "123 Child Wellness Street, Hyderabad",
//                     "seller_license": "KIDMED2025HYD01",
//                     "manufactured_by": "MacLeods",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 199,
//                     "name": "ORS Kids Hydration Powder",
//                     "description": "Mild flavored ORS powder for children to restore hydration and electrolytes.",
//                     "medicine_type": "ORS (Kids)",
//                     "uses": ["Dehydration (child)", "Loose motion (child)"],
//                     "images": "/assets/StomachCare/ors-kids.png",
//                     "cost": 18.0,
//                     "discount": 0,
//                     "final_price": 18.0,
//                     "manufacturer": "Pedicare",
//                     "stock": 480,
//                     "rating": 4.9,

//                     "highlights": {
//                         "product_type": "Kids ORS Powder",
//                         "pack_size": "1 sachet",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Store in cool dry place.",
//                         "usage_instruction": "Mix with 200 ml clean water."
//                     },

//                     "brand": "Pedicare",
//                     "material_type_free": "Sugar-based",
//                     "ingredients": ["Dextrose", "Electrolytes"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "ORS",
//                     "net_quantity": "1 sachet",
//                     "weight": "18g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "KidsCare Pharmacy",
//                     "seller_address": "123 Child Wellness Street, Hyderabad",
//                     "seller_license": "KIDMED2025HYD01",
//                     "manufactured_by": "Pedicare Labs",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 200,
//                     "name": "Pudin Hara Pearls (Kids)",
//                     "description": "Ayurvedic digestive pearls for kids to relieve gas and stomach discomfort.",
//                     "medicine_type": "Ayurvedic (kids tablets)",
//                     "uses": ["Gas (child)", "Indigestion (child)"],
//                     "images": "/assets/StomachCare/pudin-hara-kids.png",
//                     "cost": 45.0,
//                     "discount": 5,
//                     "final_price": 42.75,
//                     "manufacturer": "Dabur",
//                     "stock": 300,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Ayurvedic Tablets (Kids)",
//                         "pack_size": "10 capsules",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not for children under 3 years.",
//                         "usage_instruction": "Give 1 pearl after meals."
//                     },

//                     "brand": "Dabur Kids",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Mint", "Carminative herbs"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "10 capsules",
//                     "weight": "10g",
//                     "packaging_type": "Blister pack",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "KidsCare Pharmacy",
//                     "seller_address": "123 Child Wellness Street, Hyderabad",
//                     "seller_license": "KIDMED2025HYD01",
//                     "manufactured_by": "Dabur India",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 201,
//                     "name": "Lactobacillus Kids Capsule",
//                     "description": "Child-friendly probiotic capsule/sachet for digestion and immunity support.",
//                     "medicine_type": "Probiotic (kids capsule)",
//                     "uses": ["Digestive health (child)", "Gut flora support"],
//                     "images": "/assets/StomachCare/lactobacillus-kids.png",
//                     "cost": 95.0,
//                     "discount": 8,
//                     "final_price": 87.4,
//                     "manufacturer": "Win-Medic (kids range)",
//                     "stock": 240,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "Kids Probiotic Capsule",
//                         "pack_size": "10 capsules",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Use under pediatric supervision.",
//                         "usage_instruction": "Take 1 capsule daily after meals."
//                     },

//                     "brand": "Win-Medic Kids",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Lactobacillus", "Bifidobacterium"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Probiotic",
//                     "net_quantity": "10 capsules",
//                     "weight": "10g",
//                     "packaging_type": "Blister pack",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "KidsCare Pharmacy",
//                     "seller_address": "123 Child Wellness Street, Hyderabad",
//                     "seller_license": "KIDMED2025HYD01",
//                     "manufactured_by": "Win-Medic",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 202,
//                     "name": "Simethicone Drops Infant",
//                     "description": "Infant drops containing simethicone for safe relief from wind/colic and trapped gas in babies.",
//                     "medicine_type": "Anti-foaming (infant drops)",
//                     "uses": ["Wind/colic (infant)", "Gas relief"],
//                     "images": "/assets/StomachCare/simethiconeinfant.png",
//                     "cost": 60.0,
//                     "discount": 0,
//                     "final_price": 60.0,
//                     "manufacturer": "Glenmark (infant)",
//                     "stock": 320,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Infant Drops",
//                         "pack_size": "15 ml",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Use only the dropper provided.",
//                         "usage_instruction": "Give 0.5–1 ml up to 4 times daily."
//                     },

//                     "brand": "Glenmark Infant",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Simethicone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Infant care",
//                     "net_quantity": "15 ml",
//                     "weight": "15 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "KidsCare Pharmacy",
//                     "seller_address": "123 Child Wellness Street, Hyderabad",
//                     "seller_license": "KIDMED2025HYD01",
//                     "manufactured_by": "Glenmark",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 203,
//                     "name": "Itopride Junior Syrup",
//                     "description": "Gastro-prokinetic syrup for children with functional dyspepsia, fullness after meals and nausea.",
//                     "medicine_type": "Prokinetic (kids syrup)",
//                     "uses": ["Functional dyspepsia (child)", "Nausea (child)"],
//                     "images": "/assets/StomachCare/itopride-junior.png",
//                     "cost": 110.0,
//                     "discount": 10,
//                     "final_price": 99.0,
//                     "manufacturer": "Sun Pharma (paediatric)",
//                     "stock": 150,
//                     "rating": 4.4,

//                     "highlights": {
//                         "product_type": "Kids Syrup",
//                         "pack_size": "60 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not for children below 5 years.",
//                         "usage_instruction": "Give 5–10 ml before meals, as prescribed."
//                     },

//                     "brand": "Sun Pharma Kids",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Itopride Hydrochloride"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Prescription recommended",
//                     "net_quantity": "60 ml",
//                     "weight": "60 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "KidsCare Pharmacy",
//                     "seller_address": "123 Child Wellness Street, Hyderabad",
//                     "seller_license": "KIDMED2025HYD01",
//                     "manufactured_by": "Sun Pharma",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 204,
//                     "name": "Hypothetical Kids Antacid Chewable",
//                     "description": "Child-sized antacid chewable tablet for occasional heartburn and sour stomach in older children.",
//                     "medicine_type": "Antacid Chewable (kids tablet)",
//                     "uses": ["Heartburn (child)", "Sour stomach (child)"],
//                     "images": "/assets/StomachCare/antacid-chew-kids.png",
//                     "cost": 50.0,
//                     "discount": 5,
//                     "final_price": 47.5,
//                     "manufacturer": "Generic Kids Brand",
//                     "stock": 260,
//                     "rating": 4.3,

//                     "highlights": {
//                         "product_type": "Kids Chewable Tablet",
//                         "pack_size": "10 tablets",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not for children below 6 years.",
//                         "usage_instruction": "Chew 1 tablet when needed."
//                     },

//                     "brand": "Generic Kids",
//                     "material_type_free": "Sugar-free",
//                     "ingredients": ["Calcium carbonate", "Flavouring agents"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "OTC",
//                     "net_quantity": "10 tablets",
//                     "weight": "12g",
//                     "packaging_type": "Blister pack",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "KidsCare Pharmacy",
//                     "seller_address": "123 Child Wellness Street, Hyderabad",
//                     "seller_license": "KIDMED2025HYD01",
//                     "manufactured_by": "Generic Kids Brand",
//                     "country_of_origin": "India"
//                 }
//             ],
//             "elder": [
//                 {
//                     "id": 205,
//                     "name": "Digene Senior Gel",
//                     "description": "Gentle antacid gel formulated for elders to relieve acidity, bloating, and heartburn.",
//                     "medicine_type": "Antacid Gel (elder safe)",
//                     "uses": ["Acidity", "Gas", "Heartburn"],
//                     "images": "/assets/StomachCare/digene-senior.png",
//                     "cost": 145.0,
//                     "discount": 5,
//                     "final_price": 137.75,
//                     "manufacturer": "Abbott",
//                     "stock": 140,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Antacid Gel",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Safe for seniors; consult doctor if kidney issues exist.",
//                         "usage_instruction": "Take 2 teaspoons after meals or as directed."
//                     },

//                     "brand": "Abbott Senior",
//                     "material_type_free": "Sugar-free",
//                     "ingredients": ["Magnesium hydroxide", "Aluminium hydroxide", "Simethicone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "OTC",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Abbott India",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 206,
//                     "name": "Isabgol Fiber Husk (Elder Care)",
//                     "description": "Natural fiber supplement for constipation relief, specially recommended for senior citizens.",
//                     "medicine_type": "Fiber Supplement",
//                     "uses": ["Constipation", "Digestive health"],
//                     "images": "/assets/StomachCare/isabgol-elder.png",
//                     "cost": 160.0,
//                     "discount": 5,
//                     "final_price": 152.0,
//                     "manufacturer": "Satyam",
//                     "stock": 200,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "Fiber Husk",
//                         "pack_size": "100g pack",
//                         "shelf_life": "12 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Drink plenty of water after consumption.",
//                         "usage_instruction": "Mix 1 spoon in warm water before bedtime."
//                     },

//                     "brand": "Satyam Elder",
//                     "material_type_free": "Gluten-free",
//                     "ingredients": ["Psyllium husk"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "100g",
//                     "weight": "100g",
//                     "packaging_type": "Pouch",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Satyam Naturals",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 207,
//                     "name": "Senior Enzyme Syrup",
//                     "description": "Mild digestive enzyme syrup for elders experiencing indigestion or slow digestion.",
//                     "medicine_type": "Digestive Enzyme",
//                     "uses": ["Indigestion", "Gas", "Bloating"],
//                     "images": "/assets/StomachCare/senior-enzyme.png",
//                     "cost": 135.0,
//                     "discount": 10,
//                     "final_price": 121.5,
//                     "manufacturer": "Mankind Pharma",
//                     "stock": 120,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Enzyme Syrup",
//                         "pack_size": "150 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not recommended for diabetic elders without physician advice.",
//                         "usage_instruction": "Take one teaspoon after meals."
//                     },

//                     "brand": "Mankind Senior",
//                     "material_type_free": "Artificial flavor-free",
//                     "ingredients": ["Fungal diastase", "Papain"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Digestive Care",
//                     "net_quantity": "150 ml",
//                     "weight": "150 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Mankind Pharma",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 208,
//                     "name": "Sucralfate Suspension (Senior Safe)",
//                     "description": "Protective stomach-coating liquid for ulcers and gastritis, gentle on elderly stomach.",
//                     "medicine_type": "Anti-ulcer suspension",
//                     "uses": ["Ulcers", "Gastritis", "Burning sensation"],
//                     "images": "/assets/StomachCare/sucralfate-elder.png",
//                     "cost": 170.0,
//                     "discount": 10,
//                     "final_price": 153.0,
//                     "manufacturer": "Sun Pharma",
//                     "stock": 100,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Oral Suspension",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Take 30 minutes before meals.",
//                         "usage_instruction": "Shake well and take 1 tablespoon before meals."
//                     },

//                     "brand": "Sun Senior",
//                     "material_type_free": "Sugar-free",
//                     "ingredients": ["Sucralfate"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Anti-ulcer care",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Sun Pharma",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 209,
//                     "name": "Rabeprazole 20mg (Elder Care)",
//                     "description": "Low-irritation PPI for elders with GERD, acidity or acid reflux.",
//                     "medicine_type": "PPI (Tablet)",
//                     "uses": ["GERD", "Acid reflux", "Ulcers"],
//                     "images": "/assets/StomachCare/rabe-senior.png",
//                     "cost": 95.0,
//                     "discount": 10,
//                     "final_price": 85.5,
//                     "manufacturer": "Cipla",
//                     "stock": 200,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Consult doctor if taking blood thinners.",
//                         "usage_instruction": "Take 1 tablet before breakfast."
//                     },

//                     "brand": "Cipla Senior",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Rabeprazole"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Prescription advised",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Cipla",
//                     "country_of_origin": "India"
//                 },
//                 {
//                     "id": 210,
//                     "name": "Pantoprazole 20mg (Senior Safe)",
//                     "description": "Gentle PPI tablet for acidity and chronic GERD, formulated for senior stomach sensitivity.",
//                     "medicine_type": "PPI (Tablet)",
//                     "uses": ["GERD", "Acid reflux", "Heartburn"],
//                     "images": "/assets/StomachCare/pantop-senior.png",
//                     "cost": 75.0,
//                     "discount": 5,
//                     "final_price": 71.25,
//                     "manufacturer": "Aristo",
//                     "stock": 240,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Tablet",
//                         "pack_size": "1 strip (10 tablets)",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Take before meals. Safe for long-term GERD under doctor supervision.",
//                         "usage_instruction": "Take 1 tablet daily before breakfast."
//                     },

//                     "brand": "Aristo Senior",
//                     "material_type_free": "Sugar-free",
//                     "ingredients": ["Pantoprazole"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Prescription recommended",
//                     "net_quantity": "10 tablets",
//                     "weight": "10 tablets",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Aristo Pharma",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 211,
//                     "name": "Elder Digestive Tonic",
//                     "description": "Ayurvedic digestive tonic for seniors to improve gut motility and reduce bloating.",
//                     "medicine_type": "Ayurvedic Digestive Tonic",
//                     "uses": ["Gas", "Bloating", "Slow digestion"],
//                     "images": "/assets/StomachCare/StomachCaretonic.png",
//                     "cost": 140.0,
//                     "discount": 10,
//                     "final_price": 126.0,
//                     "manufacturer": "Himalaya",
//                     "stock": 180,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Ayurvedic Liquid",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Shake well before use.",
//                         "usage_instruction": "Consume 1 tablespoon after meals."
//                     },

//                     "brand": "Himalaya Senior",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Jeera", "Saunf", "Ajwain"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Himalaya Wellness",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 212,
//                     "name": "Lactulose Senior Syrup",
//                     "description": "Mild laxative syrup suitable for elders with chronic constipation.",
//                     "medicine_type": "Laxative (Syrup)",
//                     "uses": ["Constipation", "Hard stools"],
//                     "images": "/assets/StomachCare/lactulose-senior.png",
//                     "cost": 185.0,
//                     "discount": 5,
//                     "final_price": 175.75,
//                     "manufacturer": "Intas",
//                     "stock": 160,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Syrup",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Safe for seniors; hydrate well after use.",
//                         "usage_instruction": "Take 15 ml at bedtime or as advised."
//                     },

//                     "brand": "Intas Senior",
//                     "material_type_free": "Sugar-free",
//                     "ingredients": ["Lactulose"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "OTC",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Intas Pharma",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 213,
//                     "name": "Probiotic Senior Capsule",
//                     "description": "Daily probiotic capsule to maintain gut balance and digestion in elders.",
//                     "medicine_type": "Probiotic",
//                     "uses": ["Gut balance", "Weak digestion", "Antibiotic recovery"],
//                     "images": "/assets/StomachCare/probiotic-senior.png",
//                     "cost": 95.0,
//                     "discount": 5,
//                     "final_price": 90.25,
//                     "manufacturer": "Sun Pharma",
//                     "stock": 260,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "Capsule",
//                         "pack_size": "1 strip (10 capsules)",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Consult if immunocompromised.",
//                         "usage_instruction": "Take 1 capsule daily after meals."
//                     },

//                     "brand": "Sun Senior",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Lactobacillus", "Bifidobacterium"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Probiotic",
//                     "net_quantity": "10 capsules",
//                     "weight": "10 capsules",
//                     "packaging_type": "Strip",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Sun Pharma",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 214,
//                     "name": "Antacid Elder Chewable Tablet",
//                     "description": "Sugar-free antacid chewable designed for elders with acidity and sour stomach.",
//                     "medicine_type": "Antacid (chewable)",
//                     "uses": ["Acidity", "Sour stomach"],
//                     "images": "/assets/StomachCare/antacid.png",
//                     "cost": 55.0,
//                     "discount": 5,
//                     "final_price": 52.25,
//                     "manufacturer": "Pfizer",
//                     "stock": 300,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Chewable Tablet",
//                         "pack_size": "15 tablets",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Do not exceed 3 tablets per day.",
//                         "usage_instruction": "Chew 1 tablet after meals."
//                     },

//                     "brand": "Pfizer Senior",
//                     "material_type_free": "Sugar-free",
//                     "ingredients": ["Calcium carbonate"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "OTC",
//                     "net_quantity": "15 tablets",
//                     "weight": "20g",
//                     "packaging_type": "Blister pack",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Pfizer",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 215,
//                     "name": "Ajwain Elder Tablets",
//                     "description": "Natural ajwain-based digestive tablets for gas, indigestion, and bloating in elders.",
//                     "medicine_type": "Ayurvedic Tablet",
//                     "uses": ["Gas", "Indigestion"],
//                     "images": "/assets/StomachCare/ajwain-elder.png",
//                     "cost": 85.0,
//                     "discount": 5,
//                     "final_price": 80.75,
//                     "manufacturer": "Patanjali",
//                     "stock": 220,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Ayurvedic Tablet",
//                         "pack_size": "20 tablets",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Herbal product; consult if allergic.",
//                         "usage_instruction": "Take 1–2 tablets after meals."
//                     },

//                     "brand": "Patanjali Elder",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Ajwain", "Herbal carminatives"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "20 tablets",
//                     "weight": "25g",
//                     "packaging_type": "Blister pack",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Patanjali",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 216,
//                     "name": "Elder Gas Relief Drops",
//                     "description": "Gentle anti-gas liquid for elders suffering from bloating or trapped gas.",
//                     "medicine_type": "Anti-foaming Drops",
//                     "uses": ["Gas", "Bloating"],
//                     "images": "/assets/StomachCare/gas-drops-elder.png",
//                     "cost": 65.0,
//                     "discount": 5,
//                     "final_price": 61.75,
//                     "manufacturer": "Glenmark",
//                     "stock": 180,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Liquid Drops",
//                         "pack_size": "30 ml bottle",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Shake before use.",
//                         "usage_instruction": "Take 1 ml after meals."
//                     },

//                     "brand": "Glenmark Senior",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Simethicone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "OTC",
//                     "net_quantity": "30 ml",
//                     "weight": "30 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Glenmark",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 217,
//                     "name": "Elder Ayurvedic Digestive Churna",
//                     "description": "Mild herbal churna designed for elders to relieve indigestion and acidity.",
//                     "medicine_type": "Ayurvedic Powder",
//                     "uses": ["Indigestion", "Acidity", "Gas"],
//                     "images": "/assets/StomachCare/churna11.png",
//                     "cost": 95.0,
//                     "discount": 5,
//                     "final_price": 90.25,
//                     "manufacturer": "Baidyanath",
//                     "stock": 210,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Digestive Powder",
//                         "pack_size": "100g jar",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Keep away from moisture.",
//                         "usage_instruction": "Take 1 spoon with warm water."
//                     },

//                     "brand": "Baidyanath Elder",
//                     "material_type_free": "Chemical-free",
//                     "ingredients": ["Hing", "Jeera", "Ajwain"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "100g",
//                     "weight": "100g",
//                     "packaging_type": "Jar",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Baidyanath",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 218,
//                     "name": "Simethicone Senior Chewable",
//                     "description": "Gentle chewable tablet for elders suffering from gas, heaviness, or discomfort.",
//                     "medicine_type": "Anti-gas Chewable",
//                     "uses": ["Gas", "Bloating"],
//                     "images": "/assets/StomachCare/simethicone-senior.png",
//                     "cost": 58.0,
//                     "discount": 5,
//                     "final_price": 55.1,
//                     "manufacturer": "Cipla",
//                     "stock": 270,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Chewable Tablet",
//                         "pack_size": "10 tablets",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Do not exceed 4 tablets/day.",
//                         "usage_instruction": "Chew 1 tablet after meals."
//                     },

//                     "brand": "Cipla Senior",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Simethicone"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "OTC",
//                     "net_quantity": "10 tablets",
//                     "weight": "12g",
//                     "packaging_type": "Blister pack",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Cipla",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 219,
//                     "name": "Elder ORS Hydration Mix",
//                     "description": "ORS formulation designed for elders prone to dehydration due to digestion issues or heat.",
//                     "medicine_type": "ORS (Elder Focused)",
//                     "uses": ["Dehydration", "Loose motion", "Weakness"],
//                     "images": "/assets/StomachCare/ors3.png",
//                     "cost": 25.0,
//                     "discount": 0,
//                     "final_price": 25.0,
//                     "manufacturer": "Cipla",
//                     "stock": 380,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "ORS Sachet",
//                         "pack_size": "1 sachet",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Mix with 200 ml clean water only.",
//                         "usage_instruction": "Sip slowly throughout the day."
//                     },

//                     "brand": "Cipla Senior",
//                     "material_type_free": "Sugar-based",
//                     "ingredients": ["Electrolytes", "Dextrose"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "ORS",
//                     "net_quantity": "1 sachet",
//                     "weight": "20g",
//                     "packaging_type": "Sachet",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Medicare Pharmacy",
//                     "seller_address": "123 Medical Street, Hyderabad",
//                     "seller_license": "MED2025HYD001",
//                     "manufactured_by": "Cipla",
//                     "country_of_origin": "India"
//                 }
//             ],

//             "top_rated": [
//                 {
//                     "id": 79,
//                     "name": "Elder Digestive Enzyme Syrup",
//                     "description": "A mild digestive enzyme syrup formulated for seniors to support digestion, reduce bloating and improve nutrient absorption.",
//                     "medicine_type": "Digestive Enzyme (syrup)",
//                     "uses": ["Indigestion", "Gas", "Bloating"],
//                     "images": ["/assets/StomachCare/enzyme-syrup.png"],
//                     "cost": 160.0,
//                     "discount": 10,
//                     "final_price": 144.0,
//                     "manufacturer": "Himalaya",
//                     "stock": 180,
//                     "rating": 4.9,

//                     "highlights": {
//                         "product_type": "Senior Digestive Syrup",
//                         "pack_size": "200 ml",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Consult physician if symptoms persist.",
//                         "usage_instruction": "Take 10 ml after meals or as advised."
//                     },

//                     "brand": "Himalaya Senior",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Papain", "Fungal Diastase", "Cinnamon"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic Digestive",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD01",
//                     "manufactured_by": "Himalaya",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 80,
//                     "name": "Senior Triphala Plus",
//                     "description": "A gentle triphala-based formulation that supports bowel movement, reduces acidity and enhances digestion in older adults.",
//                     "medicine_type": "Ayurvedic Digestive",
//                     "uses": ["Constipation", "Acidity", "Gut cleansing"],
//                     "images": "/assets/StomachCare/triphala-plus.png",
//                     "cost": 130.0,
//                     "discount": 5,
//                     "final_price": 123.5,
//                     "manufacturer": "Patanjali",
//                     "stock": 200,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "Senior Digestive Tonic",
//                         "pack_size": "150 ml",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Safe for daily use. Consult doctor if diabetic.",
//                         "usage_instruction": "Take 10 ml at bedtime with warm water."
//                     },

//                     "brand": "Patanjali Senior",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Amla", "Haritaki", "Bibhitaki"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "150 ml",
//                     "weight": "150 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD01",
//                     "manufactured_by": "Patanjali",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 81,
//                     "name": "Gas Relief Herbal Tonic (Senior)",
//                     "description": "A soothing herbal tonic that reduces gas, acidity and stomach discomfort in seniors.",
//                     "medicine_type": "Ayurvedic Gas Tonic",
//                     "uses": ["Gas", "Acidity", "Heaviness"],
//                     "images": "/assets/StomachCare/gas-relief.png",
//                     "cost": 140.0,
//                     "discount": 8,
//                     "final_price": 128.8,
//                     "manufacturer": "Dabur",
//                     "stock": 170,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Herbal Digestive Tonic",
//                         "pack_size": "200 ml",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Shake well before use.",
//                         "usage_instruction": "Consume 2 teaspoons after meals."
//                     },

//                     "brand": "Dabur Senior",
//                     "material_type_free": "Chemical-free",
//                     "ingredients": ["Ajwain", "Saunf", "Ginger"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic OTC",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD01",
//                     "manufactured_by": "Dabur India",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 82,
//                     "name": "Isabgol Fiber Senior",
//                     "description": "Natural psyllium husk for seniors to maintain bowel regularity and promote digestion.",
//                     "medicine_type": "Fiber Supplement",
//                     "uses": ["Constipation", "Digestive health"],
//                     "images": "/assets/StomachCare/isabgol-senior.png",
//                     "cost": 160.0,
//                     "discount": 10,
//                     "final_price": 144.0,
//                     "manufacturer": "Satyam",
//                     "stock": 340,
//                     "rating": 4.9,

//                     "highlights": {
//                         "product_type": "Fiber Powder",
//                         "pack_size": "200g jar",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Drink plenty of water.",
//                         "usage_instruction": "Mix 1 spoon in warm water and drink at night."
//                     },

//                     "brand": "Satyam Senior",
//                     "material_type_free": "Gluten-free",
//                     "ingredients": ["Psyllium Husk"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Fiber Supplement",
//                     "net_quantity": "200g",
//                     "weight": "200g",
//                     "packaging_type": "Jar",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD01",
//                     "manufactured_by": "Satyam",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 83,
//                     "name": "LivPro Senior Liver Tonic",
//                     "description": "Ayurvedic tonic designed to support digestion, metabolism and liver function in seniors.",
//                     "medicine_type": "Ayurvedic Liver Tonic",
//                     "uses": ["Fatty liver support", "Weak digestion"],
//                     "images": "/assets/StomachCare/liver-tonic.png",
//                     "cost": 175.0,
//                     "discount": 10,
//                     "final_price": 157.5,
//                     "manufacturer": "Himalaya",
//                     "stock": 150,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "Herbal Liver Tonic",
//                         "pack_size": "200 ml",
//                         "shelf_life": "36 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Avoid in severe liver issues.",
//                         "usage_instruction": "Take 10 ml after meals twice daily."
//                     },

//                     "brand": "Himalaya Senior",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Kasani", "Arjuna", "Punarnava"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD01",
//                     "manufactured_by": "Himalaya",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 84,
//                     "name": "Senior Ajwain Ark",
//                     "description": "A soothing ajwain-based tonic for acidity, gas and heaviness designed specifically for older adults.",
//                     "medicine_type": "Ayurvedic Ark",
//                     "uses": ["Acidity", "Gas", "Indigestion"],
//                     "images": "/assets/StomachCare/ajwain-ark1.png",
//                     "cost": 95.0,
//                     "discount": 5,
//                     "final_price": 90.25,
//                     "manufacturer": "Baidyanath",
//                     "stock": 210,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Digestive Ark",
//                         "pack_size": "100 ml",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Keep away from direct sunlight.",
//                         "usage_instruction": "Mix 5 ml in warm water and drink after meals."
//                     },

//                     "brand": "Baidyanath Senior",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Ajwain Extract"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "100 ml",
//                     "weight": "100 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD01",
//                     "manufactured_by": "Baidyanath",
//                     "country_of_origin": "India"
//                 },
//                 {
//                     "id": 85,
//                     "name": "Herbal Acidity Relief Tonic (Senior)",
//                     "description": "A soothing ayurvedic formulation for seniors to relieve acidity, heartburn and acid reflux naturally.",
//                     "medicine_type": "Ayurvedic Antacid Tonic",
//                     "uses": ["Acidity", "Heartburn", "Reflux"],
//                     "images": "/assets/StomachCare/herbal-acidity.png",
//                     "cost": 150.0,
//                     "discount": 10,
//                     "final_price": 135.0,
//                     "manufacturer": "Zandu",
//                     "stock": 190,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "Herbal Antacid Tonic",
//                         "pack_size": "200 ml",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Avoid spicy foods for best results.",
//                         "usage_instruction": "Take 10 ml twice a day after meals."
//                     },

//                     "brand": "Zandu Senior",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Yashtimadhu", "Amla", "Jeera"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic OTC",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD01",
//                     "manufactured_by": "Zandu",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 86,
//                     "name": "Senior Digestive Churna",
//                     "description": "A light and effective ayurvedic churna blend to improve digestion and relieve gas in elderly individuals.",
//                     "medicine_type": "Ayurvedic Churna",
//                     "uses": ["Gas", "Indigestion", "Bloating"],
//                     "images": "/assets/StomachCare/digestive-churna.png",
//                     "cost": 85.0,
//                     "discount": 5,
//                     "final_price": 80.75,
//                     "manufacturer": "Baidyanath",
//                     "stock": 220,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Digestive Powder",
//                         "pack_size": "100g jar",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not suitable for children.",
//                         "usage_instruction": "Take half teaspoon with warm water after meals."
//                     },

//                     "brand": "Baidyanath Senior",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Hing", "Jeera", "Saunf", "Black salt"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "100g",
//                     "weight": "100g",
//                     "packaging_type": "Jar",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD01",
//                     "manufactured_by": "Baidyanath",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 87,
//                     "name": "Senior Probiotic Capsule",
//                     "description": "Probiotic specially designed for senior gut health, improving digestion, immunity and nutrient absorption.",
//                     "medicine_type": "Probiotic (capsule)",
//                     "uses": ["Gut health", "Indigestion", "Bloating"],
//                     "images": "/assets/StomachCare/probiotic-senior.png",
//                     "cost": 180.0,
//                     "discount": 10,
//                     "final_price": 162.0,
//                     "manufacturer": "Cipla",
//                     "stock": 160,
//                     "rating": 4.9,

//                     "highlights": {
//                         "product_type": "Senior Probiotic Capsule",
//                         "pack_size": "10 capsules",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Consult doctor if immune-compromised.",
//                         "usage_instruction": "Take 1 capsule daily after lunch."
//                     },

//                     "brand": "Cipla Senior",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Lactobacillus", "Bifidobacterium"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Probiotic",
//                     "net_quantity": "10 capsules",
//                     "weight": "10g",
//                     "packaging_type": "Blister pack",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD01",
//                     "manufactured_by": "Cipla",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 88,
//                     "name": "Herbal Constipation Relief Tonic (Elder)",
//                     "description": "A safe, non-habit forming ayurvedic tonic to relieve constipation and support smooth bowel movement in seniors.",
//                     "medicine_type": "Ayurvedic Laxative Tonic",
//                     "uses": ["Constipation", "Dry stool"],
//                     "images": ["/assets/StomachCare/constipation.png"],
//                     "cost": 165.0,
//                     "discount": 8,
//                     "final_price": 151.8,
//                     "manufacturer": "Dabur",
//                     "stock": 150,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "Herbal Laxative Tonic",
//                         "pack_size": "200 ml",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Do not overdose. Mild loose motion may occur.",
//                         "usage_instruction": "Take 10–15 ml at night with warm water."
//                     },

//                     "brand": "Dabur Senior",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Senna", "Triphala", "Isabgol"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic OTC",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD01",
//                     "manufactured_by": "Dabur India",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 89,
//                     "name": "Senior Amla Digestive Tonic",
//                     "description": "Amla-rich tonic for seniors to improve digestion, support immunity and reduce acidity.",
//                     "medicine_type": "Ayurvedic Tonic",
//                     "uses": ["Acidity", "Weak digestion", "Nutrient absorption"],
//                     "images": "/assets/StomachCare/amla.png",
//                     "cost": 140.0,
//                     "discount": 5,
//                     "final_price": 133.0,
//                     "manufacturer": "Himalaya",
//                     "stock": 210,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Ayurvedic Digestive Tonic",
//                         "pack_size": "200 ml",
//                         "shelf_life": "36 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "May mildly increase bowel movement.",
//                         "usage_instruction": "Consume 10 ml on empty stomach."
//                     },

//                     "brand": "Himalaya Senior",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Amla", "Ginger", "Jeera"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD01",
//                     "manufactured_by": "Himalaya",
//                     "country_of_origin": "India"
//                 }
//             ],

//             "recommendations": [
//                 {
//                     "id": 90,
//                     "name": "Zandu Pancharishta Digestive Tonic",
//                     "description": "Ayurvedic digestive tonic that improves appetite, supports digestion, and reduces gas and acidity in elders.",
//                     "medicine_type": "Ayurvedic Digestive Tonic",
//                     "uses": ["Indigestion", "Gas", "Loss of appetite", "Acidity"],
//                     "images": "/assets/StomachCare/pancharishta.png",
//                     "cost": 145.0,
//                     "discount": 10,
//                     "final_price": 130.5,
//                     "manufacturer": "Zandu Care",
//                     "stock": 250,
//                     "rating": 4.8,

//                     "highlights": {
//                         "product_type": "Digestive Tonic",
//                         "pack_size": "450 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Consult a doctor if symptoms persist for long.",
//                         "usage_instruction": "Take 2 tbsp twice daily after meals."
//                     },

//                     "brand": "Zandu",
//                     "material_type_free": "Alcohol-based formulation",
//                     "ingredients": ["Dashmool", "Draksha", "Amla", "Haritaki"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "450 ml",
//                     "weight": "450 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "56 Wellness Road, Hyderabad",
//                     "seller_license": "ELDMED2025HYD11",
//                     "manufactured_by": "Zandu Care",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 91,
//                     "name": "Baidyanath Abhayarishta",
//                     "description": "Ayurvedic tonic for constipation, acidity, and digestion problems frequently seen in elders.",
//                     "medicine_type": "Ayurvedic Tonic",
//                     "uses": ["Constipation", "Gas", "Acidity", "Bloating"],
//                     "images": "/assets/StomachCare/abhayarishta.png",
//                     "cost": 160.0,
//                     "discount": 8,
//                     "final_price": 147.2,
//                     "manufacturer": "Baidyanath",
//                     "stock": 180,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Ayurvedic Digestive",
//                         "pack_size": "450 ml bottle",
//                         "shelf_life": "36 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "May contain natural sediment. Shake before use.",
//                         "usage_instruction": "15–30 ml twice daily with water."
//                     },

//                     "brand": "Baidyanath",
//                     "material_type_free": "Chemical-free",
//                     "ingredients": ["Haritaki", "Musta", "Danti"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "450 ml",
//                     "weight": "450 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Herbal Wellness Store",
//                     "seller_address": "Main Street, Vizag",
//                     "seller_license": "ELDMED2025VZG10",
//                     "manufactured_by": "Baidyanath Pharma",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 92,
//                     "name": "Himalaya Gasex Syrup",
//                     "description": "Ayurvedic syrup for gas, bloating, and abdominal discomfort. Suitable for elder digestion support.",
//                     "medicine_type": "Ayurvedic Syrup",
//                     "uses": ["Gas", "Bloating", "Indigestion"],
//                     "images": "/assets/StomachCare/gasex.png",
//                     "cost": 95.0,
//                     "discount": 5,
//                     "final_price": 90.25,
//                     "manufacturer": "Himalaya",
//                     "stock": 300,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Digestive Syrup",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Keep away from direct sunlight.",
//                         "usage_instruction": "10 ml twice a day after meals."
//                     },

//                     "brand": "Himalaya",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Triphala", "Cumin", "Mint"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "AyurCare Store",
//                     "seller_address": "Greenlands, Bengaluru",
//                     "seller_license": "ELDMED2025BLR77",
//                     "manufactured_by": "Himalaya Wellness",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 93,
//                     "name": "Dabur Dashmularishta",
//                     "description": "A powerful Ayurvedic tonic supporting digestion, strength, and gut health in elder adults.",
//                     "medicine_type": "Ayurvedic Tonic",
//                     "uses": ["Weak digestion", "Gas", "General wellness"],
//                     "images": "/assets/StomachCare/dashmularishta.png",
//                     "cost": 180.0,
//                     "discount": 10,
//                     "final_price": 162.0,
//                     "manufacturer": "Dabur",
//                     "stock": 210,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Ayurvedic Tonic",
//                         "pack_size": "450 ml",
//                         "shelf_life": "36 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Contains natural herbs; taste may vary.",
//                         "usage_instruction": "15 ml twice daily."
//                     },

//                     "brand": "Dabur",
//                     "material_type_free": "No artificial preservatives",
//                     "ingredients": ["Dashmool", "Ashwagandha", "Bala"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "450 ml",
//                     "weight": "450 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "Senior Wellness Store",
//                     "seller_address": "Mumbai Central",
//                     "seller_license": "ELDMED2025MUM55",
//                     "manufactured_by": "Dabur India",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 94,
//                     "name": "Charak Livomyn Syrup",
//                     "description": "Liver-supportive digestive tonic for elders suffering from acidity, bloating, or slow digestion.",
//                     "medicine_type": "Digestive Liver Tonic",
//                     "uses": ["Bloating", "Acidity", "Weak digestion"],
//                     "images": "/assets/StomachCare/livomyn.png",
//                     "cost": 130.0,
//                     "discount": 8,
//                     "final_price": 119.6,
//                     "manufacturer": "Charak Pharma",
//                     "stock": 170,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Herbal Syrup",
//                         "pack_size": "200 ml",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not recommended for severe liver diseases.",
//                         "usage_instruction": "Take 15 ml twice daily."
//                     },

//                     "brand": "Charak",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Bhringraj", "Kalmegh", "Triphala"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "Wellness Road, Chennai",
//                     "seller_license": "ELDMED2025CHN33",
//                     "manufactured_by": "Charak Pharma",
//                     "country_of_origin": "India"
//                 },
//                 {
//                     "id": 95,
//                     "name": "Elder Digestive Tonic Plus",
//                     "description": "Ayurvedic digestive tonic designed for elders to reduce bloating, acidity, and slow digestion.",
//                     "medicine_type": "Ayurvedic Digestive Tonic",
//                     "uses": ["Acidity", "Indigestion", "Bloating"],
//                     "images": "/assets/StomachCare/digestive-tonic-plus.png",
//                     "cost": 180,
//                     "discount": 10,
//                     "final_price": 162,
//                     "manufacturer": "Himalaya",
//                     "stock": 120,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Herbal Liquid Tonic",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Consult physician if symptoms persist.",
//                         "usage_instruction": "15 ml after meals twice daily."
//                     },

//                     "brand": "Himalaya Wellness",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Triphala", "Jeera", "Pudina", "Ajwain"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "200 ml",
//                     "weight": "220g",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "45 Senior Wellness Lane, Hyderabad",
//                     "seller_license": "ELD2025HYD01",
//                     "manufactured_by": "Himalaya Wellness",
//                     "country_of_origin": "India"
//                 }

//             ],
//             "ayurvedic": [
//                 {
//                     "id": 74,
//                     "name": "Hingvashtak Churna Senior",
//                     "description": "Mild Ayurvedic digestive churna for seniors to relieve indigestion, bloating and weak digestion.",
//                     "medicine_type": "Ayurvedic Digestive Powder",
//                     "uses": ["Indigestion", "Gas", "Bloating"],
//                     "images": "/assets/StomachCare/hingvashtak-senior.png",
//                     "cost": 120.0,
//                     "discount": 5,
//                     "final_price": 114.0,
//                     "manufacturer": "Baidyanath",
//                     "stock": 240,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Digestive Churna",
//                         "pack_size": "100g jar",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Consult physician if symptoms persist.",
//                         "usage_instruction": "Take 1 teaspoon with warm water after meals."
//                     },

//                     "brand": "Baidyanath Senior",
//                     "material_type_free": "Chemical-free",
//                     "ingredients": ["Hing", "Jeera", "Saunf", "Ginger"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "100g",
//                     "weight": "100g",
//                     "packaging_type": "Jar",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD1",
//                     "manufactured_by": "Baidyanath",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 75,
//                     "name": "Dashmularishta Senior Tonic",
//                     "description": "Strengthening Ayurvedic tonic for seniors to improve digestion, energy and appetite.",
//                     "medicine_type": "Ayurvedic Tonic",
//                     "uses": ["Weak digestion", "Low appetite", "Fatigue"],
//                     "images": "/assets/StomachCare/dashmool-senior.png",
//                     "cost": 180.0,
//                     "discount": 10,
//                     "final_price": 162.0,
//                     "manufacturer": "Dhootapapeshwar",
//                     "stock": 200,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Ayurvedic Liquid Tonic",
//                         "pack_size": "450 ml bottle",
//                         "shelf_life": "36 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "May contain natural sediments.",
//                         "usage_instruction": "Take 15–20 ml twice daily after meals."
//                     },

//                     "brand": "Dhootapapeshwar",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Dashmool", "Bilva", "Ashwagandha"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "450 ml",
//                     "weight": "450 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD1",
//                     "manufactured_by": "Dhootapapeshwar",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 76,
//                     "name": "Ayurvedic Gas Relief Tonic (Elder)",
//                     "description": "Gentle herbal tonic to relieve gas, bloating and stomach heaviness in elders.",
//                     "medicine_type": "Ayurvedic Gas Tonic",
//                     "uses": ["Gas", "Stomach heaviness", "Bloating"],
//                     "images": "/assets/StomachCare/gas-tonic-senior.png",
//                     "cost": 135.0,
//                     "discount": 5,
//                     "final_price": 128.25,
//                     "manufacturer": "Himalaya",
//                     "stock": 180,
//                     "rating": 4.5,

//                     "highlights": {
//                         "product_type": "Ayurvedic Liquid",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "24 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Shake well before use.",
//                         "usage_instruction": "Take 2 teaspoons after meals."
//                     },

//                     "brand": "Himalaya Senior",
//                     "material_type_free": "Alcohol-free",
//                     "ingredients": ["Ajwain", "Saunf", "Jeera"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD1",
//                     "manufactured_by": "Himalaya",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 77,
//                     "name": "Triphala Senior Syrup",
//                     "description": "Ayurvedic syrup for digestive cleansing, mild constipation and gut health in elders.",
//                     "medicine_type": "Ayurvedic Syrup",
//                     "uses": ["Constipation", "Digestive cleansing", "Acidity"],
//                     "images": "/assets/StomachCare/triphala-senior.png",
//                     "cost": 160.0,
//                     "discount": 10,
//                     "final_price": 144.0,
//                     "manufacturer": "Patanjali",
//                     "stock": 150,
//                     "rating": 4.7,

//                     "highlights": {
//                         "product_type": "Ayurvedic Syrup",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "18 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Consult if diabetic.",
//                         "usage_instruction": "Consume 10 ml at bedtime."
//                     },

//                     "brand": "Patanjali Senior",
//                     "material_type_free": "Sugar-free",
//                     "ingredients": ["Triphala", "Haritaki", "Amla"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD1",
//                     "manufactured_by": "Patanjali",
//                     "country_of_origin": "India"
//                 },

//                 {
//                     "id": 78,
//                     "name": "Liv-52 Senior Tonic",
//                     "description": "Liver-supporting tonic designed for elders to improve metabolism and digestion.",
//                     "medicine_type": "Ayurvedic Liver Tonic",
//                     "uses": ["Weak digestion", "Liver support"],
//                     "images": "/assets/StomachCare/liv52-senior.png",
//                     "cost": 130.0,
//                     "discount": 5,
//                     "final_price": 123.5,
//                     "manufacturer": "Himalaya",
//                     "stock": 210,
//                     "rating": 4.6,

//                     "highlights": {
//                         "product_type": "Ayurvedic Tonic",
//                         "pack_size": "200 ml bottle",
//                         "shelf_life": "36 months",
//                         "country_of_origin": "India"
//                     },

//                     "information": {
//                         "disclaimer": "Not recommended for severe liver conditions.",
//                         "usage_instruction": "Take 1-2 teaspoons after meals."
//                     },

//                     "brand": "Himalaya Senior",
//                     "material_type_free": "Preservative-free",
//                     "ingredients": ["Kasani", "Arjuna", "Himsra"],
//                     "bio_friendly": "Yes",
//                     "exemption_type": "Ayurvedic",
//                     "net_quantity": "200 ml",
//                     "weight": "200 ml",
//                     "packaging_type": "Bottle",

//                     "customer_support": "support@yourapp.com",
//                     "seller_name": "ElderCare Pharmacy",
//                     "seller_address": "11 Ayurveda Street, Hyderabad",
//                     "seller_license": "ELDMED2025HYD1",
//                     "manufactured_by": "Himalaya",
//                     "country_of_origin": "India"
//                 }
//             ]

//         }
//     }
// }


// export default products;













// // products.js - Complete product data for all categories

// const products = {
//   baby: [
//     {
//       id: 'baby-1',
//       name: 'Pampers Active Baby Diapers',
//       brand: 'Pampers',
//       price: '₹899',
//       priceNumeric: 899,
//       originalPrice: '₹1199',
//       originalPriceNumeric: 1199,
//       savings: '25%',
//       image: '/assets/Babyimg/huggies.jpg',
//       rating: 4.7,
//       stock: 120,
//       description: 'Super absorbent diapers with Wetness Indicator for baby comfort',
//       category: 'baby',
//       subCategory: 'diapers',
//       prescriptionRequired: false,
//       brand_name: 'Pampers Active Baby',
//       company_name: 'Procter & Gamble',
//       chemical_name: 'Absorbent Polymer',
//       medicine_type: 'Baby Care',
//       uses: ['Diaper rash prevention', 'Overnight protection', 'Active babies'],
//       composition: 'Absorbent polymer, soft top sheet, breathable back sheet',
//       country_of_origin: 'India',
//       shelf_life: '24 months',
//       pack_size: '64 diapers (Large)',
//       product_type: 'Disposable Diapers',
//       keyFeatures: [
//         'Wetness indicator',
//         '12-hour protection',
//         'Hypoallergenic',
//         'Soft elastic waistband'
//       ],
//       howToUse: 'Choose appropriate size, ensure snug fit around waist and legs',
//       ingredients: 'Super absorbent polymer, polypropylene, cellulose',
//       warnings: 'Change diapers regularly to prevent rash',
//       highlights: {
//         pack_size: '64 diapers',
//         product_type: 'Disposable Diapers',
//         shelf_life: '24 months',
//         country_of_origin: 'India'
//       },
//       information: {
//         usage_instruction: 'Change every 4-6 hours or when wet',
//         disclaimer: 'For external use only. Keep away from fire.'
//       }
//     },
//     {
//       id: 'baby-2',
//       name: 'Johnson\'s Baby Powder',
//       brand: 'Johnson & Johnson',
//       price: '₹249',
//       priceNumeric: 249,
//       originalPrice: '₹299',
//       originalPriceNumeric: 299,
//       savings: '17%',
//       image: '/assets/Babyimg/powder.jpg',
//       rating: 4.5,
//       stock: 85,
//       description: 'Gentle baby powder with natural cornstarch',
//       category: 'baby',
//       subCategory: 'skincare',
//       prescriptionRequired: false,
//       company_name: 'Johnson & Johnson',
//       medicine_type: 'Baby Care',
//       uses: ['Diaper rash', 'Skin irritation', 'Moisture absorption'],
//       composition: 'Natural cornstarch, natural minerals',
//       keyFeatures: [
//         'Dermatologist tested',
//         'Hypoallergenic',
//         'Talc-free formula',
//         '24-hour moisture absorption'
//       ]
//     },
//     {
//       id: 'baby-3',
//       name: 'Baby Dove Rich Moisture Shampoo',
//       brand: 'Dove',
//       price: '₹399',
//       priceNumeric: 399,
//       originalPrice: '₹450',
//       originalPriceNumeric: 450,
//       savings: '11%',
//       image: '/assets/Babyimg/dove-shampoo.png',
//       rating: 4.6,
//       stock: 65,
//       description: 'Mild shampoo for baby\'s delicate hair and scalp',
//       category: 'baby',
//       subCategory: 'bath',
//       prescriptionRequired: false
//     },
//     {
//       id: 'baby-4',
//       name: 'Mee Mee Baby Feeding Bottle',
//       brand: 'Mee Mee',
//       price: '₹549',
//       priceNumeric: 549,
//       originalPrice: '₹650',
//       originalPriceNumeric: 650,
//       savings: '16%',
//       image: '/assets/Babyimg/feeding-bottle.png',
//       rating: 4.4,
//       stock: 40,
//       description: 'Anti-colic feeding bottle with slow flow nipple',
//       category: 'baby',
//       subCategory: 'feeding',
//       prescriptionRequired: false
//     },
//     {
//       id: 'baby-5',
//       name: 'Sebamed Baby Cream',
//       brand: 'Sebamed',
//       price: '₹699',
//       priceNumeric: 699,
//       originalPrice: '₹850',
//       originalPriceNumeric: 850,
//       savings: '18%',
//       image: '/assets/Babyimg/sebamed.jpg',
//       rating: 4.8,
//       stock: 55,
//       description: 'pH 5.5 balanced cream for baby\'s sensitive skin',
//       category: 'baby',
//       subCategory: 'skincare',
//       prescriptionRequired: false
//     }
//   ],

//   covid: [
//     {
//       id: 'covid-1',
//       name: 'N95 Respirator Mask (Pack of 10)',
//       brand: '3M',
//       price: '₹999',
//       priceNumeric: 999,
//       originalPrice: '₹1499',
//       originalPriceNumeric: 1499,
//       savings: '33%',
//       image: '/assets/Covidimg/n95-mask.jpg',
//       rating: 4.6,
//       stock: 200,
//       description: 'NIOSH approved N95 respirator mask for maximum protection',
//       category: 'covid',
//       prescriptionRequired: false,
//       company_name: '3M India',
//       medicine_type: 'PPE',
//       uses: ['Virus protection', 'Pollution', 'Dust protection'],
//       composition: 'Polypropylene, nose bridge foam, elastic straps',
//       keyFeatures: [
//         'NIOSH approved',
//         '95% filtration efficiency',
//         'Adjustable nose bridge',
//         'Comfortable fit'
//       ]
//     },
//     {
//       id: 'covid-2',
//       name: 'Dettol Antiseptic Liquid',
//       brand: 'Dettol',
//       price: '₹349',
//       priceNumeric: 349,
//       originalPrice: '₹425',
//       originalPriceNumeric: 425,
//       savings: '18%',
//       image: '/assets/Covidimg/dettol-liquid.png',
//       rating: 4.7,
//       stock: 150,
//       description: 'Kills 99.9% germs including coronavirus',
//       category: 'covid',
//       prescriptionRequired: false,
//       company_name: 'Reckitt Benckiser',
//       medicine_type: 'Antiseptic',
//       uses: ['Surface disinfection', 'Hand wash', 'Wound cleaning']
//     },
//     {
//       id: 'covid-3',
//       name: 'Digital Thermometer',
//       brand: 'Dr. Morepen',
//       price: '₹599',
//       priceNumeric: 599,
//       originalPrice: '₹799',
//       originalPriceNumeric: 799,
//       savings: '25%',
//       image: '/assets/Covidimg/thermometer.jpg',
//       rating: 4.4,
//       stock: 75,
//       description: 'Fast and accurate digital thermometer with fever alarm',
//       category: 'covid',
//       prescriptionRequired: false
//     },
//     {
//       id: 'covid-4',
//       name: 'Hand Sanitizer (500ml)',
//       brand: 'Lifebuoy',
//       price: '₹299',
//       priceNumeric: 299,
//       originalPrice: '₹399',
//       originalPriceNumeric: 399,
//       savings: '25%',
//       image: '/assets/Covidimg/hand-sanitizer.jpg',
//       rating: 4.5,
//       stock: 120,
//       description: 'Alcohol-based hand sanitizer with moisturizers',
//       category: 'covid',
//       prescriptionRequired: false
//     },
//     {
//       id: 'covid-5',
//       name: 'Vitamin C + Zinc Tablets',
//       brand: 'HealthKart',
//       price: '₹499',
//       priceNumeric: 499,
//       originalPrice: '₹650',
//       originalPriceNumeric: 650,
//       savings: '23%',
//       image: '/assets/Covidimg/vitamin-tablets.png',
//       rating: 4.6,
//       stock: 90,
//       description: 'Immune booster with Vitamin C and Zinc',
//       category: 'covid',
//       prescriptionRequired: false
//     }
//   ],

//   diabetes: {
//     tablets: [
//       {
//         id: 'diabetes-tablets-1',
//         name: 'Metformin Hydrochloride 500mg',
//         brand: 'Glycomet',
//         price: '₹189',
//         priceNumeric: 189,
//         originalPrice: '₹250',
//         originalPriceNumeric: 250,
//         savings: '24%',
//         image: '/assets/DiabetesCare/metformin.png',
//         rating: 4.5,
//         stock: 100,
//         description: 'First-line medication for type 2 diabetes management',
//         category: 'diabetes',
//         subCategory: 'tablets',
//         prescriptionRequired: true,
//         company_name: 'USV Pharmaceuticals',
//         chemical_name: 'Metformin Hydrochloride',
//         medicine_type: 'Anti-diabetic',
//         uses: ['Type 2 Diabetes', 'PCOS', 'Prediabetes'],
//         composition: 'Metformin Hydrochloride IP 500mg',
//         keyFeatures: [
//           'Controls blood sugar levels',
//           'May aid in weight loss',
//           'Improves insulin sensitivity'
//         ],
//         howToUse: 'Take as directed by physician, usually with meals',
//         ingredients: 'Metformin Hydrochloride, excipients',
//         warnings: 'Risk of lactic acidosis in patients with kidney problems'
//       },
//       {
//         id: 'diabetes-tablets-2',
//         name: 'Glimepiride 2mg',
//         brand: 'Amaryl',
//         price: '₹345',
//         priceNumeric: 345,
//         originalPrice: '₹420',
//         originalPriceNumeric: 420,
//         savings: '18%',
//         image: '/assets/DiabetesCare/glimepiride.png',
//         rating: 4.3,
//         stock: 85,
//         description: 'Sulfonylurea for stimulating insulin production',
//         category: 'diabetes',
//         subCategory: 'tablets',
//         prescriptionRequired: true
//       }
//     ],
//     insulin: [
//       {
//         id: 'diabetes-insulin-1',
//         name: 'Insulin Glargine Pen',
//         brand: 'Lantus',
//         price: '₹1299',
//         priceNumeric: 1299,
//         originalPrice: '₹1650',
//         originalPriceNumeric: 1650,
//         savings: '21%',
//         image: '/assets/DiabetesCare/lantus.png',
//         rating: 4.7,
//         stock: 50,
//         description: 'Long-acting basal insulin analog',
//         category: 'diabetes',
//         subCategory: 'insulin',
//         prescriptionRequired: true,
//         company_name: 'Sanofi',
//         chemical_name: 'Insulin Glargine',
//         medicine_type: 'Injectable Insulin'
//       },
//       {
//         id: 'diabetes-insulin-2',
//         name: 'Human Insulin 40IU/ml',
//         brand: 'Mixtard',
//         price: '₹899',
//         priceNumeric: 899,
//         originalPrice: '₹1100',
//         originalPriceNumeric: 1100,
//         savings: '18%',
//         image: '/assets/DiabetesCare/mixtard.png',
//         rating: 4.4,
//         stock: 65,
//         description: 'Biphasic isophane insulin injection',
//         category: 'diabetes',
//         subCategory: 'insulin',
//         prescriptionRequired: true
//       }
//     ],
//     devices: [
//       {
//         id: 'diabetes-devices-1',
//         name: 'Accu-Chek Blood Glucose Monitor',
//         brand: 'Accu-Chek',
//         price: '₹2499',
//         priceNumeric: 2499,
//         originalPrice: '₹3200',
//         originalPriceNumeric: 3200,
//         savings: '22%',
//         image: '/assets/DiabetesCare/accu-chek-active.png',
//         rating: 4.6,
//         stock: 35,
//         description: 'Digital glucometer with Bluetooth connectivity',
//         category: 'diabetes',
//         subCategory: 'devices',
//         prescriptionRequired: false
//       },
//       {
//         id: 'diabetes-devices-2',
//         name: 'Sugar Test Strips (Pack of 50)',
//         brand: 'Dr. Morepen',
//         price: '₹899',
//         priceNumeric: 899,
//         originalPrice: '₹1150',
//         originalPriceNumeric: 1150,
//         savings: '22%',
//         image: '/assets/DiabetesCare/test-strips.png',
//         rating: 4.3,
//         stock: 120,
//         description: 'Compatible strips for glucose monitoring',
//         category: 'diabetes',
//         subCategory: 'devices',
//         prescriptionRequired: false
//       }
//     ]
//   },

//   cardiology: {
//     medications: [
//       {
//         id: 'cardiology-1',
//         name: 'Atorvastatin 20mg',
//         brand: 'Atorva',
//         price: '₹299',
//         priceNumeric: 299,
//         originalPrice: '₹380',
//         originalPriceNumeric: 380,
//         savings: '21%',
//         image: '/assets/Cardiology/heart2.png',
//         rating: 4.6,
//         stock: 95,
//         description: 'Statin medication for lowering cholesterol',
//         category: 'cardiology',
//         prescriptionRequired: true,
//         company_name: 'Sun Pharmaceutical',
//         chemical_name: 'Atorvastatin Calcium',
//         medicine_type: 'Statin',
//         uses: ['High cholesterol', 'Heart disease prevention', 'Stroke prevention'],
//         composition: 'Atorvastatin Calcium equivalent to Atorvastatin 20mg',
//         keyFeatures: [
//           'Lowers LDL cholesterol',
//           'Raises HDL cholesterol',
//           'Reduces cardiovascular risk'
//         ],
//         howToUse: 'Take once daily, usually in the evening',
//         warnings: 'May cause muscle pain, liver problems in rare cases'
//       },
//       {
//         id: 'cardiology-2',
//         name: 'Clopidogrel 75mg',
//         brand: 'Clopilet',
//         price: '₹425',
//         priceNumeric: 425,
//         originalPrice: '₹520',
//         originalPriceNumeric: 520,
//         savings: '18%',
//         image: '/assets/Cardiology/heart1.png',
//         rating: 4.5,
//         stock: 80,
//         description: 'Anti-platelet medication to prevent blood clots',
//         category: 'cardiology',
//         prescriptionRequired: true,
//         company_name: 'Cipla',
//         chemical_name: 'Clopidogrel Bisulfate'
//       },
//       {
//         id: 'cardiology-3',
//         name: 'Amlodipine 5mg',
//         brand: 'Amlong',
//         price: '₹175',
//         priceNumeric: 175,
//         originalPrice: '₹220',
//         originalPriceNumeric: 220,
//         savings: '20%',
//         image: '/assets/Cardiology/amlodipine.png',
//         rating: 4.4,
//         stock: 110,
//         description: 'Calcium channel blocker for hypertension',
//         category: 'cardiology',
//         prescriptionRequired: true
//       },
//       {
//         id: 'cardiology-4',
//         name: 'Losartan 50mg',
//         brand: 'Losar',
//         price: '₹245',
//         priceNumeric: 245,
//         originalPrice: '₹310',
//         originalPriceNumeric: 310,
//         savings: '21%',
//         image: '/assets/Cardiology/losartan.png',
//         rating: 4.5,
//         stock: 90,
//         description: 'ARB medication for blood pressure control',
//         category: 'cardiology',
//         prescriptionRequired: true
//       },
//       {
//         id: 'cardiology-5',
//         name: 'Aspirin 75mg',
//         brand: 'Ecosprin',
//         price: '₹85',
//         priceNumeric: 85,
//         originalPrice: '₹110',
//         originalPriceNumeric: 110,
//         savings: '23%',
//         image: '/assets/Cardiology/heart9.png',
//         rating: 4.3,
//         stock: 200,
//         description: 'Low-dose aspirin for heart attack prevention',
//         category: 'cardiology',
//         prescriptionRequired: true
//       }
//     ]
//   },

//   liver: {
//     supplements: [
//       {
//         id: 'liver-supplements-1',
//         name: 'Liv 52 DS Tablets',
//         brand: 'Himalaya',
//         price: '₹265',
//         priceNumeric: 265,
//         originalPrice: '₹330',
//         originalPriceNumeric: 330,
//         savings: '20%',
//         image: '/assets/LiverCare/liv52.png',
//         rating: 4.6,
//         stock: 150,
//         description: 'Herbal liver supplement for liver protection',
//         category: 'liver',
//         subCategory: 'supplements',
//         prescriptionRequired: false,
//         company_name: 'Himalaya Wellness',
//         medicine_type: 'Herbal Supplement',
//         uses: ['Liver detoxification', 'Hepatitis support', 'Fatty liver'],
//         composition: 'Capparis spinosa, Terminalia arjuna, etc.',
//         keyFeatures: [
//           'Herbal formulation',
//           'Clinically tested',
//           'Improves liver function',
//           'Antioxidant properties'
//         ]
//       },
//       {
//         id: 'liver-supplements-2',
//         name: 'Silybon 140mg',
//         brand: 'Micro Labs',
//         price: '₹385',
//         priceNumeric: 385,
//         originalPrice: '₹470',
//         originalPriceNumeric: 470,
//         savings: '18%',
//         image: '/assets/LiverCare/silybon.png',
//         rating: 4.5,
//         stock: 95,
//         description: 'Silymarin extract for liver cell regeneration',
//         category: 'liver',
//         subCategory: 'supplements',
//         prescriptionRequired: false
//       }
//     ],
//     medications: [
//       {
//         id: 'liver-medications-1',
//         name: 'Ursodeoxycholic Acid 300mg',
//         brand: 'Udinol',
//         price: '₹520',
//         priceNumeric: 520,
//         originalPrice: '₹650',
//         originalPriceNumeric: 650,
//         savings: '20%',
//         image: '/assets/LiverCare/udinol.png',
//         rating: 4.4,
//         stock: 65,
//         description: 'For primary biliary cirrhosis and gallstones',
//         category: 'liver',
//         subCategory: 'medications',
//         prescriptionRequired: true
//       },
//       {
//         id: 'liver-medications-2',
//         name: 'Rifaximin 550mg',
//         brand: 'Rifagut',
//         price: '₹1120',
//         priceNumeric: 1120,
//         originalPrice: '₹1400',
//         originalPriceNumeric: 1400,
//         savings: '20%',
//         image: '/assets/LiverCare/rifaximin.png',
//         rating: 4.3,
//         stock: 45,
//         description: 'For hepatic encephalopathy prevention',
//         category: 'liver',
//         subCategory: 'medications',
//         prescriptionRequired: true
//       }
//     ]
//   },

//   oral: [
//     {
//       id: 'oral-1',
//       name: 'Colgate Strong Teeth Toothpaste',
//       brand: 'Colgate',
//       price: '₹189',
//       priceNumeric: 189,
//       originalPrice: '₹225',
//       originalPriceNumeric: 225,
//       savings: '16%',
//       image: '/assets/Oralimg/colgate-toothpaste.png',
//       rating: 4.7,
//       stock: 250,
//       description: 'Fluoride toothpaste for cavity protection',
//       category: 'oral',
//       prescriptionRequired: false,
//       company_name: 'Colgate-Palmolive',
//       medicine_type: 'Dental Care',
//       uses: ['Cavity prevention', 'Plaque removal', 'Fresh breath'],
//       composition: 'Sodium Fluoride, Calcium Carbonate, Glycerin',
//       keyFeatures: [
//         'Anti-cavity protection',
//         'Enamel strengthening',
//         'Fresh breath',
//         'Whitening action'
//       ]
//     },
//     {
//       id: 'oral-2',
//       name: 'Sensodyne Rapid Relief Toothpaste',
//       brand: 'Sensodyne',
//       price: '₹295',
//       priceNumeric: 295,
//       originalPrice: '₹350',
//       originalPriceNumeric: 350,
//       savings: '16%',
//       image: '/assets/Oralimg/sensodyne.jpg',
//       rating: 4.8,
//       stock: 180,
//       description: 'For sensitive teeth with potassium nitrate formula',
//       category: 'oral',
//       prescriptionRequired: false,
//       company_name: 'GSK',
//       medicine_type: 'Sensitive Teeth Care'
//     },
//     {
//       id: 'oral-3',
//       name: 'Oral-B Electric Toothbrush',
//       brand: 'Oral-B',
//       price: '₹2499',
//       priceNumeric: 2499,
//       originalPrice: '₹3200',
//       originalPriceNumeric: 3200,
//       savings: '22%',
//       image: '/assets/Oralimg/electric-toothbrush.png',
//       rating: 4.6,
//       stock: 40,
//       description: 'Rechargeable electric toothbrush with multiple modes',
//       category: 'oral',
//       prescriptionRequired: false
//     },
//     {
//       id: 'oral-4',
//       name: 'Listerine Cool Mint Mouthwash',
//       brand: 'Listerine',
//       price: '₹345',
//       priceNumeric: 345,
//       originalPrice: '₹420',
//       originalPriceNumeric: 420,
//       savings: '18%',
//       image: '/assets/Oralimg/mouthwash.png',
//       rating: 4.5,
//       stock: 120,
//       description: 'Antiseptic mouthwash kills 99.9% of germs',
//       category: 'oral',
//       prescriptionRequired: false
//     },
//     {
//       id: 'oral-5',
//       name: 'Patanjali Dant Kanti Toothpaste',
//       brand: 'Patanjali',
//       price: '₹145',
//       priceNumeric: 145,
//       originalPrice: '₹180',
//       originalPriceNumeric: 180,
//       savings: '19%',
//       image: '/assets/Oralimg/dant-kanti.png',
//       rating: 4.4,
//       stock: 200,
//       description: 'Ayurvedic toothpaste with herbal ingredients',
//       category: 'oral',
//       prescriptionRequired: false
//     }
//   ],

//   skincare: [
//     {
//       id: 'skincare-1',
//       name: 'Cetaphil Gentle Skin Cleanser',
//       brand: 'Cetaphil',
//       price: '₹899',
//       priceNumeric: 899,
//       originalPrice: '₹1100',
//       originalPriceNumeric: 1100,
//       savings: '18%',
//       image: '/assets/Skincare/cetaphil-cleanser.png',
//       rating: 4.8,
//       stock: 95,
//       description: 'Non-irritating, non-comedogenic facial cleanser',
//       category: 'skincare',
//       prescriptionRequired: false,
//       company_name: 'Galderma',
//       medicine_type: 'Skincare',
//       uses: ['Sensitive skin', 'Acne-prone skin', 'Daily cleansing'],
//       composition: 'Water, Cetyl Alcohol, Propylene Glycol',
//       keyFeatures: [
//         'Dermatologist recommended',
//         'pH balanced',
//         'Fragrance-free',
//         'Suitable for all skin types'
//       ]
//     },
//     {
//       id: 'skincare-2',
//       name: 'La Shield Sunscreen Gel SPF 40',
//       brand: 'La Shield',
//       price: '₹650',
//       priceNumeric: 650,
//       originalPrice: '₹800',
//       originalPriceNumeric: 800,
//       savings: '19%',
//       image: '/assets/Skincare/sunscreen.png',
//       rating: 4.7,
//       stock: 75,
//       description: 'Broad spectrum sunscreen for sensitive skin',
//       category: 'skincare',
//       prescriptionRequired: false,
//       company_name: 'Cipla',
//       medicine_type: 'Sunscreen'
//     },
//     {
//       id: 'skincare-3',
//       name: 'Benzoyl Peroxide 2.5% Gel',
//       brand: 'Benzac',
//       price: '₹420',
//       priceNumeric: 420,
//       originalPrice: '₹520',
//       originalPriceNumeric: 520,
//       savings: '19%',
//       image: '/assets/Skincare/benzoyl-peroxide.png',
//       rating: 4.5,
//       stock: 65,
//       description: 'Acne treatment gel for mild to moderate acne',
//       category: 'skincare',
//       prescriptionRequired: true
//     },
//     {
//       id: 'skincare-4',
//       name: 'Moisturex Cream',
//       brand: 'Cipla',
//       price: '₹385',
//       priceNumeric: 385,
//       originalPrice: '₹480',
//       originalPriceNumeric: 480,
//       savings: '20%',
//       image: '/assets/Skincare/moisturex.png',
//       rating: 4.6,
//       stock: 85,
//       description: 'Urea and lactic acid cream for dry, rough skin',
//       category: 'skincare',
//       prescriptionRequired: false
//     },
//     {
//       id: 'skincare-5',
//       name: 'Kojivit Plus Gel',
//       brand: 'Micro Labs',
//       price: '₹550',
//       priceNumeric: 550,
//       originalPrice: '₹680',
//       originalPriceNumeric: 680,
//       savings: '19%',
//       image: '/assets/Skincare/kojivit.png',
//       rating: 4.4,
//       stock: 60,
//       description: 'Skin lightening gel for pigmentation',
//       category: 'skincare',
//       prescriptionRequired: false
//     }
//   ],

//   stomach: {
//     product: {
//       antacids: [
//         {
//           id: 'stomach-antacids-1',
//           name: 'Pantoprazole 40mg',
//           brand: 'Pantocid',
//           price: '₹225',
//           priceNumeric: 225,
//           originalPrice: '₹280',
//           originalPriceNumeric: 280,
//           savings: '20%',
//           image: '/assets/StomachCare/pantoprazole.png',
//           rating: 4.6,
//           stock: 150,
//           description: 'Proton pump inhibitor for acid reflux and GERD',
//           category: 'stomach',
//           subCategory: 'antacids',
//           prescriptionRequired: true,
//           company_name: 'Sun Pharmaceutical',
//           chemical_name: 'Pantoprazole Sodium',
//           medicine_type: 'PPI',
//           uses: ['Acid reflux', 'GERD', 'Peptic ulcers', 'Zollinger-Ellison syndrome'],
//           composition: 'Pantoprazole Sodium equivalent to Pantoprazole 40mg',
//           keyFeatures: [
//             'Reduces stomach acid production',
//             'Long-lasting relief',
//             'Once daily dosage'
//           ],
//           howToUse: 'Take 30-60 minutes before breakfast',
//           warnings: 'Long-term use may cause vitamin B12 deficiency'
//         },
//         {
//           id: 'stomach-antacids-2',
//           name: 'Rabeprazole 20mg',
//           brand: 'Rabeloc',
//           price: '₹285',
//           priceNumeric: 285,
//           originalPrice: '₹350',
//           originalPriceNumeric: 350,
//           savings: '19%',
//           image: '/assets/StomachCare/rabe-senior.png',
//           rating: 4.5,
//           stock: 120,
//           description: 'Fast-acting proton pump inhibitor',
//           category: 'stomach',
//           subCategory: 'antacids',
//           prescriptionRequired: true
//         }
//       ],
//       probiotics: [
//         {
//           id: 'stomach-probiotics-1',
//           name: 'Enterogermina Probiotic Sachets',
//           brand: 'Sanofi',
//           price: '₹450',
//           priceNumeric: 450,
//           originalPrice: '₹560',
//           originalPriceNumeric: 560,
//           savings: '20%',
//           image: '/assets/StomachCare/enterogermina.png',
//           rating: 4.7,
//           stock: 95,
//           description: 'Bacillus clausii probiotic for gut health',
//           category: 'stomach',
//           subCategory: 'probiotics',
//           prescriptionRequired: false,
//           company_name: 'Sanofi',
//           medicine_type: 'Probiotic',
//           uses: ['Diarrhea', 'Antibiotic-associated diarrhea', 'Gut flora balance']
//         },
//         {
//           id: 'stomach-probiotics-2',
//           name: 'VSL#3 Probiotic Capsules',
//           brand: 'VSL#3',
//           price: '₹1899',
//           priceNumeric: 1899,
//           originalPrice: '₹2400',
//           originalPriceNumeric: 2400,
//           savings: '21%',
//           image: '/assets/StomachCare/vsl3.png',
//           rating: 4.6,
//           stock: 45,
//           description: 'High-potency probiotic for IBS and IBD',
//           category: 'stomach',
//           subCategory: 'probiotics',
//           prescriptionRequired: false
//         }
//       ],
//       antidiarrheal: [
//         {
//           id: 'stomach-antidiarrheal-1',
//           name: 'Loperamide 2mg',
//           brand: 'Lomotil',
//           price: '₹125',
//           priceNumeric: 125,
//           originalPrice: '₹160',
//           originalPriceNumeric: 160,
//           savings: '22%',
//           image: '/assets/StomachCare/loperamide.png',
//           rating: 4.4,
//           stock: 180,
//           description: 'For acute diarrhea and traveler\'s diarrhea',
//           category: 'stomach',
//           subCategory: 'antidiarrheal',
//           prescriptionRequired: true
//         },
//         {
//           id: 'stomach-antidiarrheal-2',
//           name: 'Racecadotril 100mg',
//           brand: 'Racecal',
//           price: '₹320',
//           priceNumeric: 320,
//           originalPrice: '₹400',
//           originalPriceNumeric: 400,
//           savings: '20%',
//           image: '/assets/StomachCare/racecadotril.png',
//           rating: 4.5,
//           stock: 85,
//           description: 'Enkephalinase inhibitor for acute diarrhea',
//           category: 'stomach',
//           subCategory: 'antidiarrheal',
//           prescriptionRequired: true
//         }
//       ],
//       laxatives: [
//         {
//           id: 'stomach-laxatives-1',
//           name: 'Polyethylene Glycol 3350',
//           brand: 'Pegclear',
//           price: '₹380',
//           priceNumeric: 380,
//           originalPrice: '₹475',
//           originalPriceNumeric: 475,
//           savings: '20%',
//           image: '/assets/StomachCare/peg.png',
//           rating: 4.5,
//           stock: 110,
//           description: 'Osmotic laxative for constipation relief',
//           category: 'stomach',
//           subCategory: 'laxatives',
//           prescriptionRequired: false
//         },
//         {
//           id: 'stomach-laxatives-2',
//           name: 'Lactulose Syrup',
//           brand: 'Duphalac',
//           price: '₹295',
//           priceNumeric: 295,
//           originalPrice: '₹370',
//           originalPriceNumeric: 370,
//           savings: '20%',
//           image: '/assets/StomachCare/lactulose-senior.png',
//           rating: 4.4,
//           stock: 95,
//           description: 'For chronic constipation and hepatic encephalopathy',
//           category: 'stomach',
//           subCategory: 'laxatives',
//           prescriptionRequired: true
//         }
//       ]
//     }
//   }
// };

// export default products;






































// products.js - COMPLETE DETAILED VERSION WITH 8+ PRODUCTS PER CATEGORY
const products = {
  baby: [
    {
      id: 'baby-1',
      name: 'Pampers Active Baby Diapers',
      brand: 'Pampers',
      priceNumeric: 899,
      originalPriceNumeric: 1199,
      savings: '25%',
      image: '/assets/Babyimg/huggies.jpg',
      rating: 4.7,
      stock: 120,
      description: 'Super absorbent diapers with Wetness Indicator for baby comfort. Provides up to 12 hours of protection and prevents diaper rash.',
      category: 'baby',
      subCategory: 'diapers',
      prescriptionRequired: false,
      brand_name: 'Pampers Active Baby',
      company_name: 'Procter & Gamble',
      chemical_name: 'Absorbent Polymer',
      medicine_type: 'Baby Care',
      uses: ['Diaper rash prevention', 'Overnight protection', 'Active babies', 'Newborn care'],
      composition: 'Absorbent polymer, soft top sheet, breathable back sheet, wetness indicator',
      country_of_origin: 'India',
      shelf_life: '24 months',
      pack_size: '64 diapers (Large)',
      product_type: 'Disposable Diapers',
      keyFeatures: [
        'Wetness indicator for easy changes',
        '12-hour overnight protection',
        'Hypoallergenic material',
        'Soft elastic waistband',
        'Breathable back sheet'
      ],
      howToUse: 'Choose appropriate size for baby. Unfold diaper and place under baby. Bring front up between legs and fasten tapes snugly. Adjust fit around waist and legs.',
      ingredients: 'Super absorbent polymer, polypropylene, cellulose, cotton',
      warnings: 'Change diapers regularly to prevent rash. Do not flush. Keep away from fire. For external use only.',
      highlights: {
        pack_size: '64 diapers (Large)',
        product_type: 'Disposable Diapers',
        shelf_life: '24 months',
        country_of_origin: 'India',
        weight: '2.5 kg',
        suitable_for: '6-12 kg babies'
      },
      information: {
        usage_instruction: 'Change every 4-6 hours or when wet indicator shows',
        disclaimer: 'For external use only. Keep away from fire and children. Store in cool dry place.'
      },
      net_quantity: '64 diapers'
    },
    {
      id: 'baby-2',
      name: 'Johnson\'s Baby Powder',
      brand: 'Johnson & Johnson',
      priceNumeric: 249,
      originalPriceNumeric: 299,
      savings: '17%',
      image: '/assets/Babyimg/powder.jpg',
      rating: 4.5,
      stock: 85,
      description: 'Gentle baby powder with natural cornstarch. Dermatologist tested and talc-free formula.',
      category: 'baby',
      subCategory: 'skincare',
      prescriptionRequired: false,
      company_name: 'Johnson & Johnson',
      medicine_type: 'Baby Care',
      uses: ['Diaper rash', 'Skin irritation', 'Moisture absorption', 'Chafing prevention'],
      composition: 'Natural cornstarch, natural minerals, fragrance',
      keyFeatures: [
        'Dermatologist tested',
        'Hypoallergenic formula',
        'Talc-free',
        '24-hour moisture absorption',
        'Soft fragrance'
      ],
      howToUse: 'Apply small amount to clean, dry skin. Gently pat onto baby\'s skin. Avoid application on face.',
      warnings: 'Keep away from eyes. For external use only. Do not inhale.',
      highlights: {
        pack_size: '200g',
        product_type: 'Baby Powder',
        shelf_life: '36 months',
        country_of_origin: 'USA',
        fragrance: 'Mild baby scent'
      }
    },
    {
      id: 'baby-3',
      name: 'Baby Dove Rich Moisture Shampoo',
      brand: 'Dove',
      priceNumeric: 399,
      originalPriceNumeric: 450,
      savings: '11%',
      image: '/assets/Babyimg/dove-shampoo.png',
      rating: 4.6,
      stock: 65,
      description: 'Mild shampoo for baby\'s delicate hair and scalp with 1/4 moisturizing cream.',
      category: 'baby',
      subCategory: 'bath',
      prescriptionRequired: false,
      company_name: 'Unilever',
      medicine_type: 'Baby Care',
      uses: ['Baby hair care', 'Gentle cleansing', 'Moisturizing'],
      composition: 'Water, Cocamidopropyl Betaine, Glycerin, Fragrance',
      keyFeatures: [
        'pH balanced',
        'Tear-free formula',
        'No parabens',
        'Dermatologist tested',
        'Hypoallergenic'
      ],
      howToUse: 'Apply small amount to wet hair. Gently massage into scalp. Rinse thoroughly.',
      highlights: {
        pack_size: '400ml',
        product_type: 'Baby Shampoo',
        shelf_life: '30 months',
        country_of_origin: 'India',
        volume: '400 ml'
      }
    },
    {
      id: 'baby-4',
      name: 'Mee Mee Anti-Colic Feeding Bottle',
      brand: 'Mee Mee',
      priceNumeric: 549,
      originalPriceNumeric: 650,
      savings: '16%',
      image: '/assets/Babyimg/feeding-bottle.png',
      rating: 4.4,
      stock: 40,
      description: 'Anti-colic feeding bottle with slow flow silicone nipple and air vent system.',
      category: 'baby',
      subCategory: 'feeding',
      prescriptionRequired: false,
      company_name: 'Mee Mee',
      medicine_type: 'Feeding Accessory',
      uses: ['Baby feeding', 'Anti-colic solution', 'Formula feeding'],
      composition: 'BPA-free polypropylene, silicone nipple',
      keyFeatures: [
        'Anti-colic air vent system',
        'Slow flow silicone nipple',
        'BPA-free material',
        'Easy to clean',
        'Heat resistant'
      ],
      howToUse: 'Sterilize before first use. Prepare formula as directed. Assemble bottle and feed baby.',
      warnings: 'Check temperature before feeding. Discard if damaged. Not for microwave sterilization.',
      highlights: {
        capacity: '250ml',
        material: 'BPA-free plastic',
        nipple_type: 'Slow flow silicone',
        suitable_for: '0-6 months'
      }
    },
    {
      id: 'baby-5',
      name: 'Sebamed Baby Protective Facial Cream',
      brand: 'Sebamed',
      priceNumeric: 699,
      originalPriceNumeric: 850,
      savings: '18%',
      image: '/assets/Babyimg/sebamed.jpg',
      rating: 4.8,
      stock: 55,
      description: 'pH 5.5 balanced cream for baby\'s sensitive skin. Dermatologically tested.',
      category: 'baby',
      subCategory: 'skincare',
      prescriptionRequired: false,
      company_name: 'Sebamed',
      medicine_type: 'Baby Skincare',
      uses: ['Dry skin', 'Eczema', 'Sensitive skin', 'Winter care'],
      composition: 'Aqua, Glycerin, Panthenol, Cetyl Alcohol',
      keyFeatures: [
        'pH 5.5 balanced',
        'Dermatologically tested',
        'Fragrance-free',
        'Hypoallergenic',
        'Contains panthenol'
      ],
      howToUse: 'Apply small amount to clean, dry skin. Gently massage until absorbed.',
      warnings: 'For external use only. Avoid contact with eyes.',
      highlights: {
        pack_size: '200ml',
        pH_level: '5.5',
        fragrance: 'Fragrance-free',
        skin_type: 'All skin types'
      }
    },
    {
      id: 'baby-6',
      name: 'Chicco Natural Sensation Bottle',
      brand: 'Chicco',
      priceNumeric: 799,
      originalPriceNumeric: 950,
      savings: '16%',
      image: '/assets/Babyimg/chicco-bottle.png',
      rating: 4.6,
      stock: 30,
      description: 'Wide neck bottle with soft silicone nipple for natural feeding experience.',
      category: 'baby',
      subCategory: 'feeding',
      prescriptionRequired: false,
      company_name: 'Chicco',
      medicine_type: 'Feeding Bottle',
      uses: ['Breastfeeding transition', 'Formula feeding', 'Natural feeding'],
      composition: 'BPA-free plastic, silicone',
      keyFeatures: [
        'Wide neck for easy cleaning',
        'Soft silicone nipple',
        'Anti-colic system',
        'Heat resistant'
      ],
      highlights: {
        capacity: '300ml',
        material: 'BPA-free',
        nipple_flow: 'Medium'
      }
    },
    {
      id: 'baby-7',
      name: 'Himalaya Baby Lotion',
      brand: 'Himalaya',
      priceNumeric: 299,
      originalPriceNumeric: 350,
      savings: '15%',
      image: '/assets/Babyimg/himalaya-lotion.png',
      rating: 4.5,
      stock: 75,
      description: 'Herbal baby lotion with almond oil and milk protein.',
      category: 'baby',
      subCategory: 'skincare',
      prescriptionRequired: false,
      company_name: 'Himalaya',
      medicine_type: 'Baby Lotion',
      uses: ['Moisturizing', 'Dry skin', 'Daily care'],
      composition: 'Almond oil, Milk protein, Herbal extracts',
      keyFeatures: ['Herbal formula', 'Non-greasy', 'Quick absorption'],
      highlights: {
        pack_size: '400ml',
        key_ingredient: 'Almond oil'
      }
    },
    {
      id: 'baby-8',
      name: 'Philips Avent Electric Breast Pump',
      brand: 'Philips Avent',
      priceNumeric: 12999,
      originalPriceNumeric: 15999,
      savings: '19%',
      image: '/assets/Babyimg/breast-pump.png',
      rating: 4.7,
      stock: 15,
      description: 'Electric breast pump with dual expression technology.',
      category: 'baby',
      subCategory: 'feeding',
      prescriptionRequired: false,
      company_name: 'Philips',
      medicine_type: 'Breast Pump',
      uses: ['Breast milk expression', 'Working mothers'],
      keyFeatures: ['Dual expression', 'Adjustable suction', 'Portable'],
      highlights: {
        type: 'Electric',
        power_source: 'Battery/USB'
      }
    }
  ],

  covid: [
    {
      id: 'covid-1',
      name: 'N95 Respirator Mask (Pack of 10)',
      brand: '3M',
      priceNumeric: 999,
      originalPriceNumeric: 1499,
      savings: '33%',
      image: '/assets/Covidimg/n95-mask.jpg',
      rating: 4.6,
      stock: 200,
      description: 'NIOSH approved N95 respirator mask for maximum protection against airborne particles.',
      category: 'covid',
      prescriptionRequired: false,
      company_name: '3M India',
      medicine_type: 'PPE',
      uses: ['Virus protection', 'Pollution', 'Dust protection', 'Industrial use'],
      composition: 'Polypropylene filter layer, nose bridge foam, elastic straps',
      keyFeatures: [
        'NIOSH approved N95',
        '95% filtration efficiency',
        'Adjustable nose bridge',
        'Comfortable ear loops',
        'Multi-layer protection'
      ],
      howToUse: 'Place mask over nose and mouth. Secure straps around ears. Press nose bridge for snug fit.',
      warnings: 'Single use only. Do not reuse. Discard if damaged or soiled.',
      highlights: {
        pack_size: '10 masks',
        product_type: 'Respirator Mask',
        certification: 'NIOSH N95',
        country_of_origin: 'USA',
        filtration: '95% BFE'
      }
    },
    {
      id: 'covid-2',
      name: 'Dettol Antiseptic Liquid',
      brand: 'Dettol',
      priceNumeric: 349,
      originalPriceNumeric: 425,
      savings: '18%',
      image: '/assets/Covidimg/dettol-liquid.png',
      rating: 4.7,
      stock: 150,
      description: 'Kills 99.9% germs including coronavirus. For surface disinfection and wound cleaning.',
      category: 'covid',
      prescriptionRequired: false,
      company_name: 'Reckitt Benckiser',
      medicine_type: 'Antiseptic',
      uses: ['Surface disinfection', 'Hand wash', 'Wound cleaning', 'Sanitization'],
      composition: 'Chloroxylenol 4.8% w/v, Alcohol, Pine oil',
      keyFeatures: [
        'Kills 99.9% germs',
        'Suitable for surfaces and skin',
        'Proven protection',
        'Hospital grade'
      ],
      howToUse: 'For surfaces: Dilute 20ml in 1 liter water. For skin: Dilute and apply.',
      warnings: 'For external use only. Keep away from children. Avoid contact with eyes.',
      highlights: {
        pack_size: '1 liter',
        product_type: 'Antiseptic Liquid',
        germ_kill: '99.9%',
        dilution_ratio: '1:50 for surfaces'
      }
    },
    {
      id: 'covid-3',
      name: 'Dr. Morepen Digital Thermometer',
      brand: 'Dr. Morepen',
      priceNumeric: 599,
      originalPriceNumeric: 799,
      savings: '25%',
      image: '/assets/Covidimg/thermometer.jpg',
      rating: 4.4,
      stock: 75,
      description: 'Fast and accurate digital thermometer with fever alarm and memory function.',
      category: 'covid',
      prescriptionRequired: false,
      company_name: 'Dr. Morepen',
      medicine_type: 'Medical Device',
      uses: ['Fever monitoring', 'Body temperature check', 'Health screening'],
      composition: 'Plastic body, metal tip, LCD display',
      keyFeatures: [
        '10-second reading',
        'Fever alarm',
        'Memory function',
        'Waterproof tip',
        'Auto shut-off'
      ],
      howToUse: 'Place tip under tongue or in armpit. Press start button. Wait for beep.',
      warnings: 'For oral/axillary use only. Do not use rectally. Clean after each use.',
      highlights: {
        measurement_time: '10 seconds',
        memory: 'Last 10 readings',
        display: 'Large LCD',
        waterproof: 'Tip only'
      }
    },
    {
      id: 'covid-4',
      name: 'Lifebuoy Hand Sanitizer (500ml)',
      brand: 'Lifebuoy',
      priceNumeric: 299,
      originalPriceNumeric: 399,
      savings: '25%',
      image: '/assets/Covidimg/hand-sanitizer.jpg',
      rating: 4.5,
      stock: 120,
      description: 'Alcohol-based hand sanitizer with moisturizers. Kills 99.99% germs.',
      category: 'covid',
      prescriptionRequired: false,
      company_name: 'Hindustan Unilever',
      medicine_type: 'Hand Sanitizer',
      uses: ['Hand hygiene', 'Germ protection', 'On-the-go sanitization'],
      composition: 'Ethyl Alcohol 70%, Glycerin, Hydrogen Peroxide',
      keyFeatures: [
        '70% alcohol content',
        'Kills 99.99% germs',
        'With moisturizers',
        'Quick drying',
        'No sticky residue'
      ],
      howToUse: 'Apply palmful amount. Rub hands together for 20 seconds until dry.',
      warnings: 'Flammable. Keep away from fire. For external use only.',
      highlights: {
        pack_size: '500ml',
        alcohol_content: '70%',
        germ_kill: '99.99%',
        fragrance: 'Fresh'
      }
    },
    {
      id: 'covid-5',
      name: 'HealthKart Vitamin C + Zinc Tablets',
      brand: 'HealthKart',
      priceNumeric: 499,
      originalPriceNumeric: 650,
      savings: '23%',
      image: '/assets/Covidimg/vitamin-tablets.png',
      rating: 4.6,
      stock: 90,
      description: 'Immune booster with Vitamin C and Zinc. Supports immune system function.',
      category: 'covid',
      prescriptionRequired: false,
      company_name: 'HealthKart',
      medicine_type: 'Immune Booster',
      uses: ['Immune support', 'Vitamin deficiency', 'Antioxidant protection'],
      composition: 'Vitamin C 500mg, Zinc 10mg, Excipients q.s.',
      keyFeatures: [
        'High potency Vitamin C',
        'Zinc for immunity',
        'Antioxidant properties',
        'Sugar-free',
        'Vegetarian'
      ],
      howToUse: 'Take 1 tablet daily with water, preferably after meals.',
      warnings: 'Store in cool, dry place. Keep away from children. Consult doctor if pregnant.',
      highlights: {
        pack_size: '60 tablets',
        vitamin_c: '500mg per tablet',
        zinc: '10mg per tablet',
        duration: '2 months supply'
      }
    },
    {
      id: 'covid-6',
      name: 'Surgical Face Mask (Pack of 50)',
      brand: 'Medik',
      priceNumeric: 449,
      originalPriceNumeric: 600,
      savings: '25%',
      image: '/assets/Covidimg/surgical-mask.jpg',
      rating: 4.3,
      stock: 300,
      description: '3-ply surgical face mask with nose clip and ear loops.',
      category: 'covid',
      prescriptionRequired: false,
      company_name: 'Medik',
      medicine_type: 'Surgical Mask',
      uses: ['Daily protection', 'Public places', 'Healthcare settings'],
      composition: 'Non-woven fabric, melt-blown fabric, nose wire',
      keyFeatures: [
        '3-ply protection',
        'Adjustable nose clip',
        'Comfortable ear loops',
        'Breathable material'
      ],
      howToUse: 'Place colored side outward. Secure over nose and mouth. Adjust nose clip.',
      warnings: 'Single use only. Replace if wet or soiled.',
      highlights: {
        pack_size: '50 masks',
        layers: '3-ply',
        type: 'Surgical mask'
      }
    },
    {
      id: 'covid-7',
      name: 'Pulse Oximeter Finger Tip',
      brand: 'Dr. Trust',
      priceNumeric: 1299,
      originalPriceNumeric: 1699,
      savings: '24%',
      image: '/assets/Covidimg/pulse-oximeter.jpg',
      rating: 4.5,
      stock: 45,
      description: 'Digital finger pulse oximeter for SpO2 and heart rate monitoring.',
      category: 'covid',
      prescriptionRequired: false,
      medicine_type: 'Medical Device',
      uses: ['Oxygen level monitoring', 'Heart rate check', 'Health tracking'],
      keyFeatures: ['SpO2 measurement', 'Heart rate monitor', 'OLED display'],
      highlights: {
        display: 'OLED',
        battery: 'AAA x 2'
      }
    },
    {
      id: 'covid-8',
      name: 'Disposable Gloves (Pack of 100)',
      brand: 'Medisafe',
      priceNumeric: 299,
      originalPriceNumeric: 399,
      savings: '25%',
      image: '/assets/Covidimg/gloves.png',
      rating: 4.2,
      stock: 200,
      description: 'Latex-free disposable gloves for protection.',
      category: 'covid',
      prescriptionRequired: false,
      medicine_type: 'PPE',
      uses: ['Medical use', 'Cleaning', 'Food handling'],
      keyFeatures: ['Latex-free', 'Powder-free', 'Ambidextrous'],
      highlights: {
        pack_size: '100 gloves',
        material: 'Nitrile'
      }
    }
  ],

  diabetes: {
    tablets: [
      {
        id: 'diabetes-tablets-1',
        name: 'Metformin Hydrochloride 500mg',
        brand: 'Glycomet',
        priceNumeric: 189,
        originalPriceNumeric: 250,
        savings: '24%',
        image: '/assets/DiabetesCare/metformin.png',
        rating: 4.5,
        stock: 100,
        description: 'First-line medication for type 2 diabetes management. Improves insulin sensitivity.',
        category: 'diabetes',
        subCategory: 'tablets',
        prescriptionRequired: true,
        company_name: 'USV Pharmaceuticals',
        chemical_name: 'Metformin Hydrochloride',
        medicine_type: 'Anti-diabetic',
        uses: ['Type 2 Diabetes', 'PCOS', 'Prediabetes', 'Insulin resistance'],
        composition: 'Metformin Hydrochloride IP 500mg',
        keyFeatures: [
          'Controls blood sugar levels',
          'May aid in weight loss',
          'Improves insulin sensitivity',
          'Reduces cardiovascular risk'
        ],
        howToUse: 'Take as directed by physician, usually 1-2 tablets daily with meals.',
        ingredients: 'Metformin Hydrochloride, excipients',
        warnings: 'Risk of lactic acidosis in patients with kidney problems. Avoid alcohol.',
        highlights: {
          strength: '500mg',
          form: 'Tablet',
          pack_size: '30 tablets',
          storage: 'Store below 30°C'
        }
      },
      {
        id: 'diabetes-tablets-2',
        name: 'Glimepiride 2mg',
        brand: 'Amaryl',
        priceNumeric: 345,
        originalPriceNumeric: 420,
        savings: '18%',
        image: '/assets/DiabetesCare/glimepiride.png',
        rating: 4.3,
        stock: 85,
        description: 'Sulfonylurea for stimulating insulin production from pancreas.',
        category: 'diabetes',
        subCategory: 'tablets',
        prescriptionRequired: true,
        company_name: 'Sanofi',
        chemical_name: 'Glimepiride',
        medicine_type: 'Sulfonylurea',
        uses: ['Type 2 Diabetes', 'Blood sugar control'],
        composition: 'Glimepiride 2mg',
        keyFeatures: [
          'Stimulates insulin secretion',
          'Lowers blood glucose',
          'Once daily dosage'
        ],
        howToUse: 'Take 1 tablet daily with breakfast or first main meal.',
        warnings: 'May cause hypoglycemia. Monitor blood sugar regularly.',
        highlights: {
          strength: '2mg',
          dosage: 'Once daily',
          pack_size: '30 tablets'
        }
      },
      {
        id: 'diabetes-tablets-3',
        name: 'Sitagliptin 100mg',
        brand: 'Januvia',
        priceNumeric: 850,
        originalPriceNumeric: 1050,
        savings: '19%',
        image: '/assets/DiabetesCare/sitagliptin-100.png',
        rating: 4.6,
        stock: 60,
        description: 'DPP-4 inhibitor for type 2 diabetes management.',
        category: 'diabetes',
        subCategory: 'tablets',
        prescriptionRequired: true,
        company_name: 'Merck',
        chemical_name: 'Sitagliptin Phosphate',
        medicine_type: 'DPP-4 Inhibitor',
        uses: ['Type 2 Diabetes'],
        composition: 'Sitagliptin Phosphate 100mg',
        keyFeatures: ['Increases insulin release', 'Reduces glucagon secretion'],
        highlights: {
          strength: '100mg',
          pack_size: '28 tablets'
        }
      }
    ],
    insulin: [
      {
        id: 'diabetes-insulin-1',
        name: 'Insulin Glargine Pen',
        brand: 'Lantus',
        priceNumeric: 1299,
        originalPriceNumeric: 1650,
        savings: '21%',
        image: '/assets/DiabetesCare/lantus.png',
        rating: 4.7,
        stock: 50,
        description: 'Long-acting basal insulin analog for 24-hour glucose control.',
        category: 'diabetes',
        subCategory: 'insulin',
        prescriptionRequired: true,
        company_name: 'Sanofi',
        chemical_name: 'Insulin Glargine',
        medicine_type: 'Injectable Insulin',
        uses: ['Type 1 Diabetes', 'Type 2 Diabetes', 'Basal insulin therapy'],
        composition: 'Insulin Glargine 100 IU/ml',
        keyFeatures: [
          '24-hour action',
          'Once daily injection',
          'Consistent glucose control',
          'Prefilled pen'
        ],
        howToUse: 'Inject subcutaneously once daily at same time each day.',
        warnings: 'Risk of hypoglycemia. Rotate injection sites.',
        highlights: {
          strength: '100 IU/ml',
          presentation: '3ml prefilled pen',
          storage: 'Refrigerate at 2-8°C'
        }
      },
      {
        id: 'diabetes-insulin-2',
        name: 'Human Insulin 40IU/ml',
        brand: 'Mixtard',
        priceNumeric: 899,
        originalPriceNumeric: 1100,
        savings: '18%',
        image: '/assets/DiabetesCare/mixtard.png',
        rating: 4.4,
        stock: 65,
        description: 'Biphasic isophane insulin injection (30% soluble, 70% isophane).',
        category: 'diabetes',
        subCategory: 'insulin',
        prescriptionRequired: true,
        company_name: 'Novo Nordisk',
        chemical_name: 'Human Insulin',
        medicine_type: 'Injectable Insulin',
        uses: ['Type 1 Diabetes', 'Type 2 Diabetes'],
        composition: 'Human Insulin 40 IU/ml',
        keyFeatures: ['Biphasic action', 'Twice daily dosing'],
        highlights: {
          strength: '40 IU/ml',
          type: 'Biphasic'
        }
      },
      {
        id: 'diabetes-insulin-3',
        name: 'Insulin Aspart FlexPen',
        brand: 'NovoRapid',
        priceNumeric: 1450,
        originalPriceNumeric: 1800,
        savings: '19%',
        image: '/assets/DiabetesCare/novorapid.png',
        rating: 4.6,
        stock: 40,
        description: 'Rapid-acting insulin analog for mealtime glucose control.',
        category: 'diabetes',
        subCategory: 'insulin',
        prescriptionRequired: true,
        company_name: 'Novo Nordisk',
        chemical_name: 'Insulin Aspart',
        medicine_type: 'Injectable Insulin',
        uses: ['Mealtime insulin', 'Type 1 Diabetes'],
        composition: 'Insulin Aspart 100 IU/ml',
        keyFeatures: ['Rapid action', 'Mealtime dosing'],
        highlights: {
          strength: '100 IU/ml',
          presentation: 'FlexPen'
        }
      }
    ],
    devices: [
      {
        id: 'diabetes-devices-1',
        name: 'Accu-Chek Blood Glucose Monitor',
        brand: 'Accu-Chek',
        priceNumeric: 2499,
        originalPriceNumeric: 3200,
        savings: '22%',
        image: '/assets/DiabetesCare/accu-chek-active.png',
        rating: 4.6,
        stock: 35,
        description: 'Digital glucometer with Bluetooth connectivity and large display.',
        category: 'diabetes',
        subCategory: 'devices',
        prescriptionRequired: false,
        company_name: 'Roche Diabetes Care',
        medicine_type: 'Medical Device',
        uses: ['Blood glucose monitoring', 'Diabetes management'],
        keyFeatures: [
          'Bluetooth connectivity',
          '500 reading memory',
          'Fast 4-second result',
          'Small blood sample',
          'Large display'
        ],
        howToUse: 'Insert test strip, apply blood sample to strip, read result.',
        highlights: {
          measurement_time: '4 seconds',
          memory: '500 readings',
          connectivity: 'Bluetooth',
          warranty: '3 years'
        }
      },
      {
        id: 'diabetes-devices-2',
        name: 'Sugar Test Strips (Pack of 50)',
        brand: 'Dr. Morepen',
        priceNumeric: 899,
        originalPriceNumeric: 1150,
        savings: '22%',
        image: '/assets/DiabetesCare/test-strips.png',
        rating: 4.3,
        stock: 120,
        description: 'Compatible strips for glucose monitoring devices.',
        category: 'diabetes',
        subCategory: 'devices',
        prescriptionRequired: false,
        company_name: 'Dr. Morepen',
        medicine_type: 'Test Strips',
        uses: ['Blood glucose testing'],
        keyFeatures: [
          'Fast results',
          'Small blood sample',
          'Accurate readings',
          'Compatible with most meters'
        ],
        howToUse: 'Use with compatible glucometer. Apply blood to test area.',
        warnings: 'Use before expiry date. Store in cool, dry place.',
        highlights: {
          quantity: '50 strips',
          sample_size: '0.5 µl',
          test_time: '5 seconds',
          coding: 'No coding required'
        }
      },
      {
        id: 'diabetes-devices-3',
        name: 'Lancet Device with Lancets',
        brand: 'Accu-Chek',
        priceNumeric: 499,
        originalPriceNumeric: 650,
        savings: '23%',
        image: '/assets/DiabetesCare/accu-chek-instant.png',
        rating: 4.4,
        stock: 80,
        description: 'Lancet device with adjustable depth control.',
        category: 'diabetes',
        subCategory: 'devices',
        prescriptionRequired: false,
        company_name: 'Roche',
        medicine_type: 'Medical Device',
        uses: ['Blood sampling'],
        keyFeatures: ['Adjustable depth', 'Virtually painless'],
        highlights: {
          lancets_included: '100',
          depth_settings: '5 levels'
        }
      },
      {
        id: 'diabetes-devices-4',
        name: 'Continuous Glucose Monitor',
        brand: 'Freestyle Libre',
        priceNumeric: 4999,
        originalPriceNumeric: 6500,
        savings: '23%',
        image: '/assets/DiabetesCare/cgm.png',
        rating: 4.7,
        stock: 20,
        description: 'Sensor-based continuous glucose monitoring system.',
        category: 'diabetes',
        subCategory: 'devices',
        prescriptionRequired: true,
        company_name: 'Abbott',
        medicine_type: 'Medical Device',
        uses: ['Continuous glucose monitoring'],
        keyFeatures: ['14-day sensor', 'No finger pricks', 'Real-time data'],
        highlights: {
          sensor_life: '14 days',
          scanning: 'No calibration needed'
        }
      }
    ]
  },

  cardiology: {
    medications: [
      {
        id: 'cardiology-1',
        name: 'Atorvastatin 20mg',
        brand: 'Atorva',
        priceNumeric: 299,
        originalPriceNumeric: 380,
        savings: '21%',
        image: '/assets/Cardiology/heart2.png',
        rating: 4.6,
        stock: 95,
        description: 'Statin medication for lowering cholesterol and reducing cardiovascular risk.',
        category: 'cardiology',
        prescriptionRequired: true,
        company_name: 'Sun Pharmaceutical',
        chemical_name: 'Atorvastatin Calcium',
        medicine_type: 'Statin',
        uses: ['High cholesterol', 'Heart disease prevention', 'Stroke prevention'],
        composition: 'Atorvastatin Calcium equivalent to Atorvastatin 20mg',
        keyFeatures: [
          'Lowers LDL cholesterol',
          'Raises HDL cholesterol',
          'Reduces cardiovascular risk',
          'Once daily dosage'
        ],
        howToUse: 'Take 1 tablet daily, usually in the evening with or without food.',
        warnings: 'May cause muscle pain, liver problems in rare cases. Avoid grapefruit.',
        highlights: {
          strength: '20mg',
          form: 'Tablet',
          pack_size: '30 tablets',
          storage: 'Store below 30°C'
        }
      },
      {
        id: 'cardiology-2',
        name: 'Clopidogrel 75mg',
        brand: 'Clopilet',
        priceNumeric: 425,
        originalPriceNumeric: 520,
        savings: '18%',
        image: '/assets/Cardiology/heart1.png',
        rating: 4.5,
        stock: 80,
        description: 'Anti-platelet medication to prevent blood clots and heart attacks.',
        category: 'cardiology',
        prescriptionRequired: true,
        company_name: 'Cipla',
        chemical_name: 'Clopidogrel Bisulfate',
        medicine_type: 'Anti-platelet',
        uses: ['Heart attack prevention', 'Stroke prevention', 'Stent patients'],
        composition: 'Clopidogrel Bisulfate 75mg',
        keyFeatures: [
          'Prevents blood clots',
          'Reduces heart attack risk',
          'Protects stent patients',
          'Once daily dosage'
        ],
        howToUse: 'Take 1 tablet daily with or without food.',
        warnings: 'May increase bleeding risk. Inform dentist/surgeon before procedures.',
        highlights: {
          strength: '75mg',
          pack_size: '30 tablets',
          therapeutic_class: 'Anti-platelet'
        }
      },
      {
        id: 'cardiology-3',
        name: 'Amlodipine 5mg',
        brand: 'Amlong',
        priceNumeric: 175,
        originalPriceNumeric: 220,
        savings: '20%',
        image: '/assets/Cardiology/amlodipine.png',
        rating: 4.4,
        stock: 110,
        description: 'Calcium channel blocker for hypertension and angina treatment.',
        category: 'cardiology',
        prescriptionRequired: true,
        company_name: 'Micro Labs',
        chemical_name: 'Amlodipine Besylate',
        medicine_type: 'Calcium Channel Blocker',
        uses: ['Hypertension', 'Angina', 'High blood pressure'],
        composition: 'Amlodipine Besylate 5mg',
        keyFeatures: [
          'Lowers blood pressure',
          'Reduces angina attacks',
          '24-hour control',
          'Once daily dosage'
        ],
        howToUse: 'Take 1 tablet daily, with or without food.',
        warnings: 'May cause ankle swelling. Rise slowly from sitting position.',
        highlights: {
          strength: '5mg',
          pack_size: '30 tablets',
          duration: '24-hour action'
        }
      },
      {
        id: 'cardiology-4',
        name: 'Losartan 50mg',
        brand: 'Losar',
        priceNumeric: 245,
        originalPriceNumeric: 310,
        savings: '21%',
        image: '/assets/Cardiology/losartan.png',
        rating: 4.5,
        stock: 90,
        description: 'ARB medication for blood pressure control and kidney protection.',
        category: 'cardiology',
        prescriptionRequired: true,
        company_name: 'Torrent Pharmaceuticals',
        chemical_name: 'Losartan Potassium',
        medicine_type: 'ARB',
        uses: ['Hypertension', 'Diabetic nephropathy', 'Heart failure'],
        composition: 'Losartan Potassium 50mg',
        keyFeatures: [
          'Lowers blood pressure',
          'Protects kidneys',
          'Reduces stroke risk',
          'Well tolerated'
        ],
        howToUse: 'Take 1 tablet daily, with or without food.',
        warnings: 'Avoid during pregnancy. May cause dizziness initially.',
        highlights: {
          strength: '50mg',
          pack_size: '30 tablets',
          class: 'ARB'
        }
      },
      {
        id: 'cardiology-5',
        name: 'Aspirin 75mg',
        brand: 'Ecosprin',
        priceNumeric: 85,
        originalPriceNumeric: 110,
        savings: '23%',
        image: '/assets/Cardiology/heart9.png',
        rating: 4.3,
        stock: 200,
        description: 'Low-dose aspirin for heart attack and stroke prevention.',
        category: 'cardiology',
        prescriptionRequired: true,
        company_name: 'USV Pharmaceuticals',
        chemical_name: 'Acetylsalicylic Acid',
        medicine_type: 'Anti-platelet',
        uses: ['Heart attack prevention', 'Stroke prevention', 'Blood thinner'],
        composition: 'Aspirin 75mg',
        keyFeatures: [
          'Prevents blood clots',
          'Reduces cardiovascular events',
          'Low dose',
          'Once daily'
        ],
        howToUse: 'Take 1 tablet daily after food.',
        warnings: 'May cause stomach upset. Avoid if allergic to aspirin.',
        highlights: {
          strength: '75mg',
          pack_size: '30 tablets',
          type: 'Enteric coated'
        }
      },
      {
        id: 'cardiology-6',
        name: 'Metoprolol 25mg',
        brand: 'Metolar',
        priceNumeric: 185,
        originalPriceNumeric: 230,
        savings: '20%',
        image: '/assets/Cardiology/metoprolol.png',
        rating: 4.4,
        stock: 75,
        description: 'Beta blocker for hypertension, angina and heart rate control.',
        category: 'cardiology',
        prescriptionRequired: true,
        company_name: 'AstraZeneca',
        chemical_name: 'Metoprolol Tartrate',
        medicine_type: 'Beta Blocker',
        uses: ['Hypertension', 'Angina', 'Heart failure', 'Arrhythmia'],
        composition: 'Metoprolol Tartrate 25mg',
        keyFeatures: ['Controls heart rate', 'Lowers blood pressure'],
        highlights: {
          strength: '25mg',
          pack_size: '30 tablets'
        }
      },
      {
        id: 'cardiology-7',
        name: 'Ramipril 5mg',
        brand: 'Cardace',
        priceNumeric: 265,
        originalPriceNumeric: 330,
        savings: '20%',
        image: '/assets/Cardiology/ramipril.png',
        rating: 4.5,
        stock: 85,
        description: 'ACE inhibitor for hypertension and heart failure.',
        category: 'cardiology',
        prescriptionRequired: true,
        company_name: 'Sanofi',
        chemical_name: 'Ramipril',
        medicine_type: 'ACE Inhibitor',
        uses: ['Hypertension', 'Heart failure', 'Post-heart attack'],
        composition: 'Ramipril 5mg',
        keyFeatures: ['Protects heart function', 'Lowers blood pressure'],
        highlights: {
          strength: '5mg',
          pack_size: '30 tablets'
        }
      },
      {
        id: 'cardiology-8',
        name: 'Spironolactone 25mg',
        brand: 'Aldactone',
        priceNumeric: 195,
        originalPriceNumeric: 245,
        savings: '20%',
        image: '/assets/Cardiology/spironolactone.png',
        rating: 4.3,
        stock: 65,
        description: 'Potassium-sparing diuretic for heart failure and hypertension.',
        category: 'cardiology',
        prescriptionRequired: true,
        company_name: 'Pfizer',
        chemical_name: 'Spironolactone',
        medicine_type: 'Diuretic',
        uses: ['Heart failure', 'Hypertension', 'Edema'],
        composition: 'Spironolactone 25mg',
        keyFeatures: ['Reduces fluid retention', 'Preserves potassium'],
        highlights: {
          strength: '25mg',
          pack_size: '30 tablets'
        }
      }
    ]
  },

  liver: {
    supplements: [
      {
        id: 'liver-supplements-1',
        name: 'Liv 52 DS Tablets',
        brand: 'Himalaya',
        priceNumeric: 265,
        originalPriceNumeric: 330,
        savings: '20%',
        image: '/assets/LiverCare/liv52.png',
        rating: 4.6,
        stock: 150,
        description: 'Herbal liver supplement for liver protection and detoxification.',
        category: 'liver',
        subCategory: 'supplements',
        prescriptionRequired: false,
        company_name: 'Himalaya Wellness',
        medicine_type: 'Herbal Supplement',
        uses: ['Liver detoxification', 'Hepatitis support', 'Fatty liver', 'Jaundice'],
        composition: 'Capparis spinosa, Terminalia arjuna, Cassia occidentalis',
        keyFeatures: [
          'Herbal formulation',
          'Clinically tested',
          'Improves liver function',
          'Antioxidant properties',
          'Protects liver cells'
        ],
        howToUse: 'Take 2 tablets twice daily, or as directed by physician.',
        ingredients: 'Herbal extracts, excipients',
        warnings: 'Take as directed. Results may vary. Not for acute liver conditions.',
        highlights: {
          pack_size: '100 tablets',
          product_type: 'Herbal Supplement',
          shelf_life: '36 months',
          country_of_origin: 'India'
        }
      },
      {
        id: 'liver-supplements-2',
        name: 'Silybon 140mg',
        brand: 'Micro Labs',
        priceNumeric: 385,
        originalPriceNumeric: 470,
        savings: '18%',
        image: '/assets/LiverCare/silybon.png',
        rating: 4.5,
        stock: 95,
        description: 'Silymarin extract for liver cell regeneration and protection.',
        category: 'liver',
        subCategory: 'supplements',
        prescriptionRequired: false,
        company_name: 'Micro Labs',
        medicine_type: 'Liver Supplement',
        uses: ['Liver protection', 'Fatty liver', 'Hepatitis', 'Liver cirrhosis'],
        composition: 'Silymarin 140mg',
        keyFeatures: [
          'Standardized extract',
          'Liver cell regeneration',
          'Antioxidant effect',
          'Improves liver enzymes'
        ],
        howToUse: 'Take 1 capsule twice daily after meals.',
        highlights: {
          strength: '140mg',
          pack_size: '30 capsules',
          extract: 'Standardized silymarin'
        }
      },
      {
        id: 'liver-supplements-3',
        name: 'Livosin DS Tablets',
        brand: 'Mankind',
        priceNumeric: 320,
        originalPriceNumeric: 400,
        savings: '20%',
        image: '/assets/LiverCare/livosin.png',
        rating: 4.4,
        stock: 80,
        description: 'Herbal liver tonic for liver function improvement.',
        category: 'liver',
        subCategory: 'supplements',
        prescriptionRequired: false,
        company_name: 'Mankind Pharma',
        medicine_type: 'Herbal Tonic',
        uses: ['Liver tonic', 'Digestive aid', 'Fatty liver'],
        composition: 'Herbal extracts',
        keyFeatures: ['Improves digestion', 'Liver support'],
        highlights: {
          pack_size: '60 tablets',
          type: 'Herbal tonic'
        }
      },
      {
        id: 'liver-supplements-4',
        name: 'Urso Forte 300mg',
        brand: 'Sun Pharma',
        priceNumeric: 520,
        originalPriceNumeric: 650,
        savings: '20%',
        image: '/assets/LiverCare/urso.png',
        rating: 4.4,
        stock: 65,
        description: 'Ursodeoxycholic acid for liver and gall bladder health.',
        category: 'liver',
        subCategory: 'supplements',
        prescriptionRequired: true,
        company_name: 'Sun Pharma',
        chemical_name: 'Ursodeoxycholic Acid',
        medicine_type: 'Bile Acid',
        uses: ['Primary biliary cirrhosis', 'Gallstones', 'Liver protection'],
        composition: 'Ursodeoxycholic Acid 300mg',
        keyFeatures: ['Dissolves cholesterol stones', 'Liver protective'],
        howToUse: 'Take as directed by physician, usually 2-3 tablets daily.',
        warnings: 'May cause diarrhea. Monitor liver function.',
        highlights: {
          strength: '300mg',
          pack_size: '30 tablets'
        }
      },
      {
        id: 'liver-supplements-5',
        name: 'Liver Detox Capsules',
        brand: 'Nature\'s Best',
        priceNumeric: 450,
        originalPriceNumeric: 560,
        savings: '20%',
        image: '/assets/LiverCare/liver-detox.png',
        rating: 4.3,
        stock: 70,
        description: 'Natural liver detoxification supplement with milk thistle.',
        category: 'liver',
        subCategory: 'supplements',
        prescriptionRequired: false,
        company_name: 'Nature\'s Best',
        medicine_type: 'Detox Supplement',
        uses: ['Liver detox', 'Alcohol recovery', 'Toxin removal'],
        composition: 'Milk Thistle, Turmeric, Dandelion',
        keyFeatures: ['Natural ingredients', 'Detox support'],
        highlights: {
          pack_size: '60 capsules',
          key_ingredient: 'Milk Thistle'
        }
      }
    ],
    medications: [
      {
        id: 'liver-medications-1',
        name: 'Rifaximin 550mg',
        brand: 'Rifagut',
        priceNumeric: 1120,
        originalPriceNumeric: 1400,
        savings: '20%',
        image: '/assets/LiverCare/rifaximin.png',
        rating: 4.3,
        stock: 45,
        description: 'For hepatic encephalopathy prevention and treatment.',
        category: 'liver',
        subCategory: 'medications',
        prescriptionRequired: true,
        company_name: 'Lupin',
        chemical_name: 'Rifaximin',
        medicine_type: 'Antibiotic',
        uses: ['Hepatic encephalopathy', 'Traveler\'s diarrhea', 'IBS'],
        composition: 'Rifaximin 550mg',
        keyFeatures: [
          'Gut-specific antibiotic',
          'Reduces ammonia levels',
          'Minimal systemic absorption',
          'Well tolerated'
        ],
        howToUse: 'Take 1 tablet twice daily as directed by physician.',
        warnings: 'Not for systemic infections. Use only as prescribed.',
        highlights: {
          strength: '550mg',
          pack_size: '30 tablets',
          indication: 'Hepatic encephalopathy'
        }
      },
      {
        id: 'liver-medications-2',
        name: 'Lactulose Syrup',
        brand: 'Duphalac',
        priceNumeric: 295,
        originalPriceNumeric: 370,
        savings: '20%',
        image: '/assets/LiverCare/lactulose-senior.png',
        rating: 4.4,
        stock: 95,
        description: 'For chronic constipation and hepatic encephalopathy.',
        category: 'liver',
        subCategory: 'medications',
        prescriptionRequired: true,
        company_name: 'Abbott',
        chemical_name: 'Lactulose',
        medicine_type: 'Laxative',
        uses: ['Hepatic encephalopathy', 'Chronic constipation'],
        composition: 'Lactulose 3.35g/5ml',
        keyFeatures: [
          'Reduces blood ammonia',
          'Softens stools',
          'Non-absorbable sugar',
          'Colonic acidification'
        ],
        howToUse: 'Take as directed, usually 15-30ml daily in divided doses.',
        warnings: 'May cause flatulence initially. Adjust dose for desired effect.',
        highlights: {
          strength: '3.35g/5ml',
          pack_size: '200ml',
          flavor: 'Vanilla'
        }
      },
      {
        id: 'liver-medications-3',
        name: 'Tenofovir 300mg',
        brand: 'Tenvir',
        priceNumeric: 950,
        originalPriceNumeric: 1200,
        savings: '21%',
        image: '/assets/LiverCare/tenofovir.png',
        rating: 4.5,
        stock: 55,
        description: 'Antiviral for hepatitis B treatment.',
        category: 'liver',
        subCategory: 'medications',
        prescriptionRequired: true,
        company_name: 'Cipla',
        chemical_name: 'Tenofovir Disoproxil Fumarate',
        medicine_type: 'Antiviral',
        uses: ['Hepatitis B', 'HIV'],
        composition: 'Tenofovir Disoproxil Fumarate 300mg',
        keyFeatures: ['Suppresses HBV', 'Once daily dosing'],
        highlights: {
          strength: '300mg',
          pack_size: '30 tablets'
        }
      }
    ]
  },

  oral: [
    {
      id: 'oral-1',
      name: 'Colgate Strong Teeth Toothpaste',
      brand: 'Colgate',
      priceNumeric: 189,
      originalPriceNumeric: 225,
      savings: '16%',
      image: '/assets/Oralimg/colgate-toothpaste.png',
      rating: 4.7,
      stock: 250,
      description: 'Fluoride toothpaste for cavity protection and enamel strengthening.',
      category: 'oral',
      prescriptionRequired: false,
      company_name: 'Colgate-Palmolive',
      medicine_type: 'Dental Care',
      uses: ['Cavity prevention', 'Plaque removal', 'Fresh breath', 'Enamel protection'],
      composition: 'Sodium Fluoride, Calcium Carbonate, Glycerin, Sodium Lauryl Sulfate',
      keyFeatures: [
        'Anti-cavity protection',
        'Enamel strengthening',
        'Fresh breath',
        'Whitening action',
        'Tartar control'
      ],
      howToUse: 'Apply pea-sized amount to toothbrush. Brush twice daily for 2 minutes.',
      ingredients: 'Active ingredients: Sodium Fluoride 0.76%',
      warnings: 'Do not swallow. Keep away from children under 6 years.',
      highlights: {
        pack_size: '200g',
        product_type: 'Toothpaste',
        fluoride_content: '1450 ppm',
        flavor: 'Mint',
        shelf_life: '36 months'
      }
    },
    {
      id: 'oral-2',
      name: 'Sensodyne Rapid Relief Toothpaste',
      brand: 'Sensodyne',
      priceNumeric: 295,
      originalPriceNumeric: 350,
      savings: '16%',
      image: '/assets/Oralimg/sensodyne.jpg',
      rating: 4.8,
      stock: 180,
      description: 'For sensitive teeth with potassium nitrate formula. Provides relief in 60 seconds.',
      category: 'oral',
      prescriptionRequired: false,
      company_name: 'GSK',
      medicine_type: 'Sensitive Teeth Care',
      uses: ['Sensitive teeth', 'Enamel protection', 'Cavity prevention', 'Gum care'],
      composition: 'Potassium Nitrate, Sodium Fluoride, Stannous Fluoride',
      keyFeatures: [
        'Rapid relief in 60 seconds',
        'Long-lasting protection',
        'Sensitive teeth formula',
        'Dentist recommended',
        'Fluoride protection'
      ],
      howToUse: 'Brush twice daily with Sensodyne for lasting sensitivity relief.',
      warnings: 'If sensitivity persists, consult dentist.',
      highlights: {
        pack_size: '150g',
        relief_time: '60 seconds',
        protection: '12-hour',
        flavor: 'Fresh Mint'
      }
    },
    {
      id: 'oral-3',
      name: 'Oral-B Electric Toothbrush',
      brand: 'Oral-B',
      priceNumeric: 2499,
      originalPriceNumeric: 3200,
      savings: '22%',
      image: '/assets/Oralimg/electric-toothbrush.png',
      rating: 4.6,
      stock: 40,
      description: 'Rechargeable electric toothbrush with multiple cleaning modes and pressure sensor.',
      category: 'oral',
      prescriptionRequired: false,
      company_name: 'Procter & Gamble',
      medicine_type: 'Oral Hygiene Device',
      uses: ['Deep cleaning', 'Plaque removal', 'Gum care', 'Teeth whitening'],
      keyFeatures: [
        '3D cleaning action',
        'Pressure sensor',
        'Multiple cleaning modes',
        '2-minute timer',
        'Rechargeable battery'
      ],
      howToUse: 'Apply toothpaste to brush head. Select mode. Brush systematically for 2 minutes.',
      warnings: 'Do not use while bathing. Keep charger dry.',
      highlights: {
        modes: 'Daily Clean, Sensitive, Whitening',
        battery_life: '2 weeks',
        included: '2 brush heads, travel case',
        warranty: '2 years'
      }
    },
    {
      id: 'oral-4',
      name: 'Listerine Cool Mint Mouthwash',
      brand: 'Listerine',
      priceNumeric: 345,
      originalPriceNumeric: 420,
      savings: '18%',
      image: '/assets/Oralimg/mouthwash.png',
      rating: 4.5,
      stock: 120,
      description: 'Antiseptic mouthwash kills 99.9% of germs that cause bad breath, plaque, and gum problems.',
      category: 'oral',
      prescriptionRequired: false,
      company_name: 'Johnson & Johnson',
      medicine_type: 'Mouthwash',
      uses: ['Bad breath', 'Plaque reduction', 'Gum health', 'Oral hygiene'],
      composition: 'Essential oils (Eucalyptol, Menthol, Methyl Salicylate, Thymol)',
      keyFeatures: [
        'Kills 99.9% germs',
        'Fights bad breath',
        'Reduces plaque',
        'Strengthens gums',
        'Alcohol-free formula'
      ],
      howToUse: 'Use 20ml twice daily. Rinse for 30 seconds. Do not swallow.',
      warnings: 'For oral use only. Not for children under 12.',
      highlights: {
        pack_size: '500ml',
        alcohol_free: 'Yes',
        germ_kill: '99.9%',
        flavor: 'Cool Mint'
      }
    },
    {
      id: 'oral-5',
      name: 'Patanjali Dant Kanti Toothpaste',
      brand: 'Patanjali',
      priceNumeric: 145,
      originalPriceNumeric: 180,
      savings: '19%',
      image: '/assets/Oralimg/dant-kanti.png',
      rating: 4.4,
      stock: 200,
      description: 'Ayurvedic toothpaste with herbal ingredients for complete oral care.',
      category: 'oral',
      prescriptionRequired: false,
      company_name: 'Patanjali Ayurved',
      medicine_type: 'Ayurvedic Dental Care',
      uses: ['Natural oral care', 'Gum strengthening', 'Teeth whitening', 'Fresh breath'],
      composition: 'Neem, Babool, Miswak, Clove, Mint',
      keyFeatures: [
        '100% ayurvedic',
        'Natural ingredients',
        'No chemicals',
        'Gum strengthening',
        'Fresh breath'
      ],
      howToUse: 'Brush twice daily for complete oral hygiene.',
      highlights: {
        pack_size: '200g',
        type: 'Ayurvedic',
        key_ingredients: 'Neem, Babool'
      }
    },
    {
      id: 'oral-6',
      name: 'Oral-B Dental Floss',
      brand: 'Oral-B',
      priceNumeric: 199,
      originalPriceNumeric: 250,
      savings: '20%',
      image: '/assets/Oralimg/oralbwax.jpg',
      rating: 4.3,
      stock: 150,
      description: 'Waxed dental floss for effective interdental cleaning.',
      category: 'oral',
      prescriptionRequired: false,
      medicine_type: 'Dental Floss',
      uses: ['Interdental cleaning', 'Plaque removal', 'Gum health'],
      keyFeatures: ['Waxed for easy glide', 'Mint flavor', 'Strong and shred-resistant'],
      highlights: {
        length: '50 meters',
        flavor: 'Mint',
        type: 'Waxed'
      }
    },
    {
      id: 'oral-7',
      name: 'Sensodyne Toothbrush',
      brand: 'Sensodyne',
      priceNumeric: 149,
      originalPriceNumeric: 180,
      savings: '17%',
      image: '/assets/Oralimg/oral17.jpg',
      rating: 4.4,
      stock: 180,
      description: 'Soft bristle toothbrush for sensitive teeth and gums.',
      category: 'oral',
      prescriptionRequired: false,
      medicine_type: 'Toothbrush',
      uses: ['Sensitive teeth', 'Gentle cleaning'],
      keyFeatures: ['Extra soft bristles', 'Compact head', 'Comfort grip'],
      highlights: {
        bristle_type: 'Extra soft',
        pack_size: '1 piece'
      }
    },
    {
      id: 'oral-8',
      name: 'Colgate Mouthwash',
      brand: 'Colgate',
      priceNumeric: 275,
      originalPriceNumeric: 340,
      savings: '19%',
      image: '/assets/Oralimg/colgate-mouthwash.png',
      rating: 4.5,
      stock: 110,
      description: 'Alcohol-free mouthwash for fresh breath and cavity protection.',
      category: 'oral',
      prescriptionRequired: false,
      medicine_type: 'Mouthwash',
      uses: ['Fresh breath', 'Cavity protection'],
      keyFeatures: ['Alcohol-free', 'Fluoride protection', 'Fresh mint'],
      highlights: {
        pack_size: '400ml',
        alcohol_free: 'Yes'
      }
    }
  ],

  skincare: [
    {
      id: 'skincare-1',
      name: 'Cetaphil Gentle Skin Cleanser',
      brand: 'Cetaphil',
      priceNumeric: 899,
      originalPriceNumeric: 1100,
      savings: '18%',
      image: '/assets/Skincare/cetaphil-cleanser.png',
      rating: 4.8,
      stock: 95,
      description: 'Non-irritating, non-comedogenic facial cleanser for all skin types.',
      category: 'skincare',
      prescriptionRequired: false,
      company_name: 'Galderma',
      medicine_type: 'Skincare',
      uses: ['Sensitive skin', 'Acne-prone skin', 'Daily cleansing', 'Dry skin'],
      composition: 'Water, Cetyl Alcohol, Propylene Glycol, Sodium Lauryl Sulfate',
      keyFeatures: [
        'Dermatologist recommended',
        'pH balanced',
        'Fragrance-free',
        'Suitable for all skin types',
        'Non-comedogenic'
      ],
      howToUse: 'Apply to wet skin. Massage gently. Rinse thoroughly and pat dry.',
      warnings: 'For external use only. Avoid contact with eyes.',
      highlights: {
        pack_size: '500ml',
        product_type: 'Facial Cleanser',
        skin_type: 'All skin types',
        fragrance: 'Fragrance-free',
        shelf_life: '36 months'
      }
    },
    {
      id: 'skincare-2',
      name: 'La Shield Sunscreen Gel SPF 40',
      brand: 'La Shield',
      priceNumeric: 650,
      originalPriceNumeric: 800,
      savings: '19%',
      image: '/assets/Skincare/sunscreen.png',
      rating: 4.7,
      stock: 75,
      description: 'Broad spectrum sunscreen for sensitive skin with oil-free formula.',
      category: 'skincare',
      prescriptionRequired: false,
      company_name: 'Cipla',
      medicine_type: 'Sunscreen',
      uses: ['Sun protection', 'Sensitive skin', 'Daily use', 'Acne-prone skin'],
      composition: 'Zinc Oxide, Titanium Dioxide, Octinoxate',
      keyFeatures: [
        'SPF 40 PA+++',
        'Broad spectrum protection',
        'Oil-free gel',
        'Non-comedogenic',
        'For sensitive skin'
      ],
      howToUse: 'Apply liberally 15 minutes before sun exposure. Reapply every 2 hours.',
      warnings: 'For external use only. Reapply after swimming or sweating.',
      highlights: {
        spf: '40',
        pa_rating: '+++',
        texture: 'Gel',
        water_resistant: 'Yes'
      }
    },
    {
      id: 'skincare-3',
      name: 'Benzoyl Peroxide 2.5% Gel',
      brand: 'Benzac',
      priceNumeric: 420,
      originalPriceNumeric: 520,
      savings: '19%',
      image: '/assets/Skincare/benzoyl-peroxide.png',
      rating: 4.5,
      stock: 65,
      description: 'Acne treatment gel for mild to moderate acne. Kills acne-causing bacteria.',
      category: 'skincare',
      prescriptionRequired: true,
      company_name: 'Galderma',
      chemical_name: 'Benzoyl Peroxide',
      medicine_type: 'Acne Treatment',
      uses: ['Acne treatment', 'Pimple prevention', 'Oily skin'],
      composition: 'Benzoyl Peroxide 2.5% in aqueous gel base',
      keyFeatures: [
        'Kills acne bacteria',
        'Reduces inflammation',
        'Prevents new breakouts',
        'Oil-free formula',
        'Clinically proven'
      ],
      howToUse: 'Apply thin layer to affected areas once or twice daily.',
      warnings: 'May cause dryness and peeling initially. Use sunscreen.',
      highlights: {
        strength: '2.5%',
        form: 'Gel',
        pack_size: '30g',
        prescription: 'Required'
      }
    },
    {
      id: 'skincare-4',
      name: 'Moisturex Cream',
      brand: 'Cipla',
      priceNumeric: 385,
      originalPriceNumeric: 480,
      savings: '20%',
      image: '/assets/Skincare/moisturex.png',
      rating: 4.6,
      stock: 85,
      description: 'Urea and lactic acid cream for dry, rough skin. Excellent moisturizer.',
      category: 'skincare',
      prescriptionRequired: false,
      company_name: 'Cipla',
      medicine_type: 'Moisturizer',
      uses: ['Dry skin', 'Rough skin', 'Eczema', 'Psoriasis', 'Keratosis'],
      composition: 'Urea 10%, Lactic Acid 5%',
      keyFeatures: [
        'Dual action: moisturizes and exfoliates',
        'Improves skin texture',
        'Restores skin barrier',
        'Non-greasy',
        'Dermatologist recommended'
      ],
      howToUse: 'Apply to affected areas twice daily or as directed.',
      warnings: 'For external use only. Avoid contact with eyes.',
      highlights: {
        urea_content: '10%',
        lactic_acid: '5%',
        pack_size: '75g',
        texture: 'Cream'
      }
    },
    {
      id: 'skincare-5',
      name: 'Kojivit Plus Gel',
      brand: 'Micro Labs',
      priceNumeric: 550,
      originalPriceNumeric: 680,
      savings: '19%',
      image: '/assets/Skincare/kojivit.png',
      rating: 4.4,
      stock: 60,
      description: 'Skin lightening gel for pigmentation with kojic acid and vitamins.',
      category: 'skincare',
      prescriptionRequired: false,
      company_name: 'Micro Labs',
      medicine_type: 'Pigmentation Treatment',
      uses: ['Hyperpigmentation', 'Dark spots', 'Melasma', 'Uneven skin tone'],
      composition: 'Kojic Acid, Vitamin C, Vitamin E, Niacinamide',
      keyFeatures: [
        'Reduces dark spots',
        'Brightens skin tone',
        'Antioxidant protection',
        'Non-greasy gel',
        'Visible results in 4 weeks'
      ],
      howToUse: 'Apply small amount to affected areas twice daily.',
      warnings: 'Use sunscreen. May cause mild irritation initially.',
      highlights: {
        key_ingredient: 'Kojic Acid',
        form: 'Gel',
        pack_size: '30g',
        results: 'Visible in 4 weeks'
      }
    },
    {
      id: 'skincare-6',
      name: 'Sebamed Face Wash',
      brand: 'Sebamed',
      priceNumeric: 499,
      originalPriceNumeric: 620,
      savings: '20%',
      image: '/assets/Skincare/sebamed-facewash.png',
      rating: 4.6,
      stock: 70,
      description: 'pH 5.5 face wash for sensitive and acne-prone skin.',
      category: 'skincare',
      prescriptionRequired: false,
      medicine_type: 'Face Wash',
      uses: ['Sensitive skin', 'Acne-prone skin', 'Daily cleansing'],
      keyFeatures: ['pH 5.5', 'Soap-free', 'Fragrance-free'],
      highlights: {
        pH_level: '5.5',
        pack_size: '150ml'
      }
    },
    {
      id: 'skincare-7',
      name: 'Neutrogena Hydro Boost Gel',
      brand: 'Neutrogena',
      priceNumeric: 850,
      originalPriceNumeric: 1050,
      savings: '19%',
      image: '/assets/Skincare/neutrogena.png',
      rating: 4.7,
      stock: 45,
      description: 'Oil-free water gel moisturizer with hyaluronic acid.',
      category: 'skincare',
      prescriptionRequired: false,
      medicine_type: 'Moisturizer',
      uses: ['Hydration', 'Dry skin', 'All skin types'],
      keyFeatures: ['Hyaluronic acid', 'Oil-free', 'Non-comedogenic'],
      highlights: {
        key_ingredient: 'Hyaluronic Acid',
        texture: 'Water gel'
      }
    },
    {
      id: 'skincare-8',
      name: 'Ponds Age Miracle Cream',
      brand: 'Ponds',
      priceNumeric: 399,
      originalPriceNumeric: 500,
      savings: '20%',
      image: '/assets/Skincare/ponds.png',
      rating: 4.5,
      stock: 90,
      description: 'Anti-aging cream with retinol and niacinamide.',
      category: 'skincare',
      prescriptionRequired: false,
      medicine_type: 'Anti-Aging',
      uses: ['Anti-aging', 'Wrinkles', 'Fine lines'],
      keyFeatures: ['Retinol formula', 'Niacinamide', 'Vitamin B3'],
      highlights: {
        key_ingredients: 'Retinol, Niacinamide',
        pack_size: '50g'
      }
    }
  ],

  stomach: {
    product: {
      antacids: [
        {
          id: 'stomach-antacids-1',
          name: 'Pantoprazole 40mg',
          brand: 'Pantocid',
          priceNumeric: 225,
          originalPriceNumeric: 280,
          savings: '20%',
          image: '/assets/StomachCare/pantoprazole.png',
          rating: 4.6,
          stock: 150,
          description: 'Proton pump inhibitor for acid reflux and GERD. Provides 24-hour acid control.',
          category: 'stomach',
          subCategory: 'antacids',
          prescriptionRequired: true,
          company_name: 'Sun Pharmaceutical',
          chemical_name: 'Pantoprazole Sodium',
          medicine_type: 'PPI',
          uses: ['Acid reflux', 'GERD', 'Peptic ulcers', 'Zollinger-Ellison syndrome'],
          composition: 'Pantoprazole Sodium equivalent to Pantoprazole 40mg',
          keyFeatures: [
            'Reduces stomach acid production',
            'Long-lasting relief',
            'Once daily dosage',
            'Heals esophageal damage',
            'Prevents ulcer recurrence'
          ],
          howToUse: 'Take 30-60 minutes before breakfast. Swallow whole with water.',
          warnings: 'Long-term use may cause vitamin B12 deficiency. Consult doctor for prolonged use.',
          highlights: {
            strength: '40mg',
            form: 'Tablet',
            pack_size: '30 tablets',
            duration: '24-hour action',
            storage: 'Store below 30°C'
          }
        },
        {
          id: 'stomach-antacids-2',
          name: 'Rabeprazole 20mg',
          brand: 'Rabeloc',
          priceNumeric: 285,
          originalPriceNumeric: 350,
          savings: '19%',
          image: '/assets/StomachCare/rabe-senior.png',
          rating: 4.5,
          stock: 120,
          description: 'Fast-acting proton pump inhibitor for acid-related disorders.',
          category: 'stomach',
          subCategory: 'antacids',
          prescriptionRequired: true,
          company_name: 'Lupin',
          chemical_name: 'Rabeprazole Sodium',
          medicine_type: 'PPI',
          uses: ['Acid reflux', 'GERD', 'Duodenal ulcers', 'Gastric ulcers'],
          composition: 'Rabeprazole Sodium 20mg',
          keyFeatures: [
            'Fast onset of action',
            'Effective acid suppression',
            'Once daily dosing',
            'Well tolerated'
          ],
          howToUse: 'Take 1 tablet daily before breakfast.',
          highlights: {
            strength: '20mg',
            pack_size: '30 tablets',
            onset: 'Fast acting'
          }
        },
        {
          id: 'stomach-antacids-3',
          name: 'Esomeprazole 40mg',
          brand: 'Nexium',
          priceNumeric: 320,
          originalPriceNumeric: 400,
          savings: '20%',
          image: '/assets/StomachCare/esomeprazole.png',
          rating: 4.6,
          stock: 100,
          description: 'Proton pump inhibitor for severe acid reflux.',
          category: 'stomach',
          subCategory: 'antacids',
          prescriptionRequired: true,
          medicine_type: 'PPI',
          uses: ['Severe GERD', 'Erosive esophagitis'],
          composition: 'Esomeprazole 40mg',
          keyFeatures: ['Strong acid suppression', 'Heals esophagitis'],
          highlights: {
            strength: '40mg',
            pack_size: '28 tablets'
          }
        }
      ],
      probiotics: [
        {
          id: 'stomach-probiotics-1',
          name: 'Enterogermina Probiotic Sachets',
          brand: 'Sanofi',
          priceNumeric: 450,
          originalPriceNumeric: 560,
          savings: '20%',
          image: '/assets/StomachCare/enterogermina.png',
          rating: 4.7,
          stock: 95,
          description: 'Bacillus clausii probiotic for gut health and antibiotic-associated diarrhea.',
          category: 'stomach',
          subCategory: 'probiotics',
          prescriptionRequired: false,
          company_name: 'Sanofi',
          medicine_type: 'Probiotic',
          uses: ['Diarrhea', 'Antibiotic-associated diarrhea', 'Gut flora balance', 'Digestive health'],
          composition: 'Bacillus clausii spores 2 billion per vial',
          keyFeatures: [
            'Heat-stable spores',
            'Resistant to antibiotics',
            'Restores gut flora',
            'No refrigeration needed',
            'Safe for all ages'
          ],
          howToUse: 'Mix contents of 1-2 vials in water or milk and consume.',
          warnings: 'Use as directed. Not for acute infectious diarrhea without medical advice.',
          highlights: {
            strain: 'Bacillus clausii',
            count: '2 billion spores per vial',
            pack_size: '10 vials',
            storage: 'Room temperature',
            age_group: 'All ages'
          }
        },
        {
          id: 'stomach-probiotics-2',
          name: 'VSL#3 Probiotic Capsules',
          brand: 'VSL#3',
          priceNumeric: 1899,
          originalPriceNumeric: 2400,
          savings: '21%',
          image: '/assets/StomachCare/vsl3.png',
          rating: 4.6,
          stock: 45,
          description: 'High-potency probiotic for IBS and IBD. Contains 8 probiotic strains.',
          category: 'stomach',
          subCategory: 'probiotics',
          prescriptionRequired: false,
          company_name: 'VSL Pharmaceuticals',
          medicine_type: 'Probiotic',
          uses: ['IBS', 'IBD', 'Ulcerative colitis', 'Digestive disorders'],
          composition: '8 probiotic strains including Lactobacillus, Bifidobacterium',
          keyFeatures: [
            'High potency: 450 billion bacteria',
            '8 clinically studied strains',
            'Medical grade probiotic',
            'IBS and IBD management'
          ],
          howToUse: 'Take 1-2 capsules daily or as directed by physician.',
          warnings: 'Refrigerate for maximum potency.',
          highlights: {
            potency: '450 billion CFU',
            strains: '8 strains',
            pack_size: '30 capsules',
            storage: 'Refrigerate'
          }
        },
        {
          id: 'stomach-probiotics-3',
          name: 'Yakult Probiotic Drink',
          brand: 'Yakult',
          priceNumeric: 320,
          originalPriceNumeric: 400,
          savings: '20%',
          image: '/assets/StomachCare/yakult.png',
          rating: 4.5,
          stock: 200,
          description: 'Probiotic drink with Lactobacillus casei Shirota strain.',
          category: 'stomach',
          subCategory: 'probiotics',
          prescriptionRequired: false,
          medicine_type: 'Probiotic Drink',
          uses: ['Daily gut health', 'Digestive balance'],
          composition: 'Lactobacillus casei Shirota',
          keyFeatures: ['Live bacteria', 'Daily probiotic', 'Refreshing taste'],
          highlights: {
            strain: 'L. casei Shirota',
            pack_size: '5 bottles',
            storage: 'Refrigerate'
          }
        }
      ],
      antidiarrheal: [
        {
          id: 'stomach-antidiarrheal-1',
          name: 'Loperamide 2mg',
          brand: 'Lomotil',
          priceNumeric: 125,
          originalPriceNumeric: 160,
          savings: '22%',
          image: '/assets/StomachCare/loperamide.png',
          rating: 4.4,
          stock: 180,
          description: 'For acute diarrhea and traveler\'s diarrhea. Reduces bowel movements.',
          category: 'stomach',
          subCategory: 'antidiarrheal',
          prescriptionRequired: true,
          company_name: 'Cipla',
          chemical_name: 'Loperamide Hydrochloride',
          medicine_type: 'Anti-diarrheal',
          uses: ['Acute diarrhea', 'Traveler\'s diarrhea', 'IBS-D'],
          composition: 'Loperamide Hydrochloride 2mg',
          keyFeatures: [
            'Rapid relief',
            'Reduces frequency',
            'Improves consistency',
            'Convenient dosing'
          ],
          howToUse: 'Take 2 capsules initially, then 1 after each loose stool.',
          warnings: 'Not for bacterial diarrhea. Maximum 8 capsules in 24 hours.',
          highlights: {
            strength: '2mg',
            form: 'Capsule',
            pack_size: '10 capsules',
            onset: 'Rapid'
          }
        },
        {
          id: 'stomach-antidiarrheal-2',
          name: 'Racecadotril 100mg',
          brand: 'Racecal',
          priceNumeric: 320,
          originalPriceNumeric: 400,
          savings: '20%',
          image: '/assets/StomachCare/racecadotril.png',
          rating: 4.5,
          stock: 85,
          description: 'Enkephalinase inhibitor for acute diarrhea in adults and children.',
          category: 'stomach',
          subCategory: 'antidiarrheal',
          prescriptionRequired: true,
          company_name: 'Micro Labs',
          chemical_name: 'Racecadotril',
          medicine_type: 'Anti-diarrheal',
          uses: ['Acute diarrhea', 'Viral diarrhea', 'Traveler\'s diarrhea'],
          composition: 'Racecadotril 100mg',
          keyFeatures: [
            'Reduces fluid secretion',
            'Preserves electrolytes',
            'Fast acting',
            'Well tolerated'
          ],
          howToUse: 'Take 1 capsule 3 times daily until diarrhea stops.',
          warnings: 'Not for chronic diarrhea without medical advice.',
          highlights: {
            strength: '100mg',
            pack_size: '10 capsules',
            mechanism: 'Enkephalinase inhibitor'
          }
        },
        {
          id: 'stomach-antidiarrheal-3',
          name: 'ORS Powder (WHO Formula)',
          brand: 'Electral',
          priceNumeric: 95,
          originalPriceNumeric: 120,
          savings: '21%',
          image: '/assets/StomachCare/electral.png',
          rating: 4.7,
          stock: 250,
          description: 'Oral rehydration salts for diarrhea dehydration prevention.',
          category: 'stomach',
          subCategory: 'antidiarrheal',
          prescriptionRequired: false,
          medicine_type: 'Rehydration',
          uses: ['Dehydration prevention', 'Diarrhea management'],
          composition: 'WHO formula: Sodium chloride, potassium chloride, glucose',
          keyFeatures: ['WHO formula', 'Rehydrates quickly', 'Electrolyte balance'],
          highlights: {
            formula: 'WHO standard',
            pack_size: '10 sachets'
          }
        }
      ],
      laxatives: [
        {
          id: 'stomach-laxatives-1',
          name: 'Polyethylene Glycol 3350',
          brand: 'Pegclear',
          priceNumeric: 380,
          originalPriceNumeric: 475,
          savings: '20%',
          image: '/assets/StomachCare/peg.png',
          rating: 4.5,
          stock: 110,
          description: 'Osmotic laxative for constipation relief. Works by retaining water in stool.',
          category: 'stomach',
          subCategory: 'laxatives',
          prescriptionRequired: false,
          company_name: 'Mankind Pharma',
          chemical_name: 'Polyethylene Glycol 3350',
          medicine_type: 'Osmotic Laxative',
          uses: ['Constipation', 'Bowel preparation', 'Chronic constipation'],
          composition: 'Polyethylene Glycol 3350 powder',
          keyFeatures: [
            'Osmotic action',
            'Softens stools',
            'Non-stimulant',
            'Safe for long-term use',
            'No cramping'
          ],
          howToUse: 'Dissolve 1 sachet in 200ml water. Drink once daily.',
          warnings: 'Drink plenty of fluids. Not for bowel obstruction.',
          highlights: {
            strength: '13.8g sachet',
            pack_size: '10 sachets',
            mechanism: 'Osmotic',
            taste: 'Orange flavor'
          }
        },
        {
          id: 'stomach-laxatives-2',
          name: 'Lactulose Syrup',
          brand: 'Duphalac',
          priceNumeric: 295,
          originalPriceNumeric: 370,
          savings: '20%',
          image: '/assets/StomachCare/lactulose-senior.png',
          rating: 4.4,
          stock: 95,
          description: 'For chronic constipation and hepatic encephalopathy. Softens stools.',
          category: 'stomach',
          subCategory: 'laxatives',
          prescriptionRequired: true,
          company_name: 'Abbott',
          chemical_name: 'Lactulose',
          medicine_type: 'Osmotic Laxative',
          uses: ['Chronic constipation', 'Hepatic encephalopathy', 'Portal-systemic encephalopathy'],
          composition: 'Lactulose 3.35g/5ml',
          keyFeatures: [
            'Softens stools',
            'Non-absorbable sugar',
            'Colonic acidification',
            'Safe for long-term use'
          ],
          howToUse: 'Take 15-30ml daily in divided doses, adjust as needed.',
          warnings: 'May cause flatulence initially. Adjust dose gradually.',
          highlights: {
            strength: '3.35g/5ml',
            pack_size: '200ml',
            flavor: 'Vanilla',
            form: 'Syrup'
          }
        },
        {
          id: 'stomach-laxatives-3',
          name: 'Bisacodyl 5mg',
          brand: 'Dulcolax',
          priceNumeric: 85,
          originalPriceNumeric: 110,
          savings: '23%',
          image: '/assets/StomachCare/bisacodyl.png',
          rating: 4.3,
          stock: 150,
          description: 'Stimulant laxative for occasional constipation relief.',
          category: 'stomach',
          subCategory: 'laxatives',
          prescriptionRequired: false,
          medicine_type: 'Stimulant Laxative',
          uses: ['Occasional constipation', 'Bowel evacuation'],
          composition: 'Bisacodyl 5mg',
          keyFeatures: ['Stimulates bowel', 'Works in 6-12 hours'],
          warnings: 'Not for long-term use',
          highlights: {
            strength: '5mg',
            pack_size: '10 tablets'
          }
        }
      ]
    }
  }
};

export default products;