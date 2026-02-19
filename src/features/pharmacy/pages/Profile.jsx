// src/pages/pharmacy/Profile.jsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  FaStore, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPhone, 
  FaEnvelope, 
  FaEdit, 
  FaSave, 
  FaUpload, 
  FaUser,
  FaIdCard,
  FaCalendar,
  FaShieldAlt,
  FaQrcode,
  FaCamera,
  FaImage,
  FaFileAlt,
  FaTimes,
  FaCheck,
  FaStar,
  FaWhatsapp,
  FaGlobe,
  FaTag,
  FaCreditCard,
  FaPercentage,
  FaFileInvoice,
  FaCertificate,
  FaCheckCircle,
  FaDownload,
  FaPrint,
  FaEye,
  FaTrash,
  FaSync,
  FaCopy,
  FaShareAlt,
  FaBell,
  FaLock,
  FaUnlock,
  FaMap,
  FaCalendarAlt,
  FaWallet,
  FaChartLine,
  FaFilePdf,
  FaFileImage,
  FaKey,
  FaDatabase,
  FaUsers,
  FaTruck,
  FaFirstAid,
  FaPills,
  FaUserMd,
  FaHome,
  FaShippingFast,
  FaPrescriptionBottleAlt,
  FaClipboardCheck,
  FaRegEdit,
  FaCloudUploadAlt,
  FaHistory,
  FaChartBar,
  FaBellSlash,
  FaUserCheck,
  FaUserTimes,
  FaExpand,
  FaCompress,
  FaExternalLinkAlt
} from 'react-icons/fa';

// Import QR Code Generator - Use named import
import { QRCodeSVG as QRCode } from 'qrcode.react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');
  const [uploadedImages, setUploadedImages] = useState([]);
  const [certificates, setCertificates] = useState([
    { id: 1, name: 'Drug License.pdf', type: 'license', date: '2024-01-15', size: '2.4 MB', url: '#' },
    { id: 2, name: 'GST Certificate.pdf', type: 'tax', date: '2024-01-10', size: '1.8 MB', url: '#' },
    { id: 3, name: 'Shop Photo.jpg', type: 'image', date: '2024-01-05', size: '3.2 MB', url: '#' },
  ]);
  
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: true,
    orders: true,
    stock: true,
    expiry: true
  });

  const fileInputRef = useRef(null);
  const certInputRef = useRef(null);
  const [isGeneratingQR, setIsGeneratingQR] = useState(false);
  const [qrData, setQrData] = useState('');
  const [profileCompleteness, setProfileCompleteness] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [stats, setStats] = useState({
    totalOrders: 1248,
    monthlyRevenue: '₹2.45L',
    customerRating: 4.7,
    activeCustomers: 342
  });

  // Initial profile data
  const initialProfile = {
    shopName: 'MedLife Pharmacy & Medical Store',
    ownerName: 'Dr. Rahul Sharma',
    licenseNumber: 'PH/DL/KA/123456/2024',
    gstNumber: '29ABCDE1234F1Z5',
    pharmacyId: 'MEDPHARMA001',
    address: '123 MG Road, Near Central Mall',
    landmark: 'Opposite Metro Station',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560001',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    email: 'contact@medlifepharmacy.com',
    website: 'www.medlifepharmacy.com',
    openingTime: '08:00',
    closingTime: '22:00',
    workingDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    description: '24/7 Premium Pharmacy & Medical Store. Certified pharmacists, emergency medicines, home delivery, and healthcare consultation available.',
    specialties: ['Emergency Medicines', 'Chronic Care', 'Vaccinations', 'Medical Equipment', 'Home Delivery'],
    paymentMethods: ['Cash', 'UPI', 'Credit Card', 'Debit Card', 'Net Banking'],
    discountOffers: '10% off on all chronic medicines. Free delivery above ₹500.',
    rating: 4.7,
    totalReviews: 128,
    establishmentYear: 2015,
    deliveryRadius: '5 km',
    minOrderValue: 200,
    deliveryTime: '30-45 minutes',
    facebook: 'facebook.com/medlifepharmacy',
    instagram: '@medlifepharmacy',
    twitter: '@medlifepharma'
  };

  const [profile, setProfile] = useState(initialProfile);

  // Calculate profile completeness
  useEffect(() => {
    calculateCompleteness();
  }, [profile]);

  const calculateCompleteness = () => {
    const requiredFields = [
      'shopName', 'ownerName', 'licenseNumber', 'address', 
      'city', 'pincode', 'phone', 'email', 'openingTime', 'closingTime'
    ];
    
    let completed = 0;
    requiredFields.forEach(field => {
      if (profile[field] && profile[field].toString().trim() !== '') {
        completed++;
      }
    });

    // Additional points for optional fields
    const optionalFields = ['whatsapp', 'website', 'description', 'specialties'];
    optionalFields.forEach(field => {
      if (profile[field] && (Array.isArray(profile[field]) ? profile[field].length > 0 : profile[field].toString().trim() !== '')) {
        completed += 0.5;
      }
    });

    const percentage = Math.min(100, Math.round((completed / (requiredFields.length + optionalFields.length * 0.5)) * 100));
    setProfileCompleteness(percentage);
  };

  // Generate QR code data
  useEffect(() => {
    const qrContent = JSON.stringify({
      name: profile.shopName,
      id: profile.pharmacyId,
      phone: profile.phone,
      address: `${profile.address}, ${profile.city}`,
      whatsapp: profile.whatsapp,
      website: profile.website
    });
    setQrData(qrContent);
  }, [profile]);

  const handleInputChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSpecialtyToggle = (specialty) => {
    if (isEditing) {
      const updated = profile.specialties.includes(specialty)
        ? profile.specialties.filter(s => s !== specialty)
        : [...profile.specialties, specialty];
      handleInputChange('specialties', updated);
    }
  };

  const handleWorkingDayToggle = (day) => {
    if (isEditing) {
      const updated = profile.workingDays.includes(day)
        ? profile.workingDays.filter(d => d !== day)
        : [...profile.workingDays, day];
      handleInputChange('workingDays', updated);
    }
  };

  const handlePaymentMethodToggle = (method) => {
    if (isEditing) {
      const updated = profile.paymentMethods.includes(method)
        ? profile.paymentMethods.filter(m => m !== method)
        : [...profile.paymentMethods, method];
      handleInputChange('paymentMethods', updated);
    }
  };

  const handleNotificationToggle = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file, index) => ({
      id: Date.now() + index,
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
      type: file.type.split('/')[0],
      uploadedAt: new Date().toLocaleDateString()
    }));
    setUploadedImages([...uploadedImages, ...newImages]);
    alert(`${files.length} image(s) uploaded successfully!`);
  };

  const handleCertificateUpload = (e) => {
    const files = Array.from(e.target.files);
    const newCerts = files.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      type: file.name.includes('license') ? 'license' : 
            file.name.includes('gst') ? 'tax' : 
            file.name.includes('cert') ? 'certificate' : 'other',
      date: new Date().toLocaleDateString(),
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
      url: URL.createObjectURL(file)
    }));
    setCertificates([...certificates, ...newCerts]);
    alert(`${files.length} document(s) uploaded successfully!`);
  };

  const removeImage = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      setUploadedImages(uploadedImages.filter(img => img.id !== id));
    }
  };

  const removeCertificate = (id) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      setCertificates(certificates.filter(cert => cert.id !== id));
    }
  };

  const handleSave = () => {
    // Simulate API call
    setIsEditing(false);
    
    // Show success message
    const event = new CustomEvent('showToast', {
      detail: {
        message: 'Profile updated successfully!',
        type: 'success'
      }
    });
    window.dispatchEvent(event);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all changes?')) {
      setProfile(initialProfile);
      setIsEditing(false);
    }
  };

  const generateQRCode = () => {
    setIsGeneratingQR(true);
    setTimeout(() => {
      setIsGeneratingQR(false);
      // Trigger download
      const svg = document.getElementById('qr-code-canvas');
      if (svg) {
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        
        img.onload = function() {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          
          const pngUrl = canvas.toDataURL("image/png");
          const downloadLink = document.createElement("a");
          downloadLink.href = pngUrl;
          downloadLink.download = `${profile.shopName.replace(/\s+/g, '-')}-QR.png`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        };
        
        img.src = "data:image/svg+xml;base64," + btoa(svgData);
      }
    }, 1000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  };

  const shareProfile = () => {
    if (navigator.share) {
      navigator.share({
        title: profile.shopName,
        text: `Check out ${profile.shopName}`,
        url: window.location.href,
      });
    } else {
      copyToClipboard(window.location.href);
    }
  };

  const printProfile = () => {
    window.print();
  };

  const previewCertificate = (cert) => {
    if (cert.url && cert.url !== '#') {
      window.open(cert.url, '_blank');
    } else {
      alert('Preview not available for this document');
    }
  };

  const toggle24Hours = () => {
    if (isEditing) {
      if (profile.openingTime === '00:00' && profile.closingTime === '23:59') {
        handleInputChange('openingTime', '08:00');
        handleInputChange('closingTime', '22:00');
      } else {
        handleInputChange('openingTime', '00:00');
        handleInputChange('closingTime', '23:59');
      }
    }
  };

  // Days of week
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Available specialties
  const availableSpecialties = [
    'Emergency Medicines',
    'Chronic Care', 
    'Vaccinations',
    'Medical Equipment',
    'Home Delivery',
    'Doctor Consultation',
    'Lab Tests',
    'Baby Care',
    'Elderly Care',
    'Ayurvedic',
    'Homeopathy',
    'Diabetes Care',
    'Cardiac Care',
    'First Aid',
    'Medical Consultation'
  ];

  // Available payment methods
  const availablePaymentMethods = [
    'Cash',
    'UPI',
    'Credit Card',
    'Debit Card',
    'Net Banking',
    'Wallet',
    'Insurance',
    'EMI',
    'Cheque',
    'Bank Transfer'
  ];

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pharmacy Profile
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-1">Manage your pharmacy information, settings, and documents</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={shareProfile}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 flex items-center gap-2 text-sm md:text-base transition-all hover:scale-105"
            >
              <FaShareAlt /> Share
            </button>
            <button
              onClick={printProfile}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm md:text-base transition-all hover:scale-105"
            >
              <FaPrint /> Print
            </button>
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm md:text-base transition-all hover:scale-105 ${
                isEditing 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
              }`}
            >
              {isEditing ? <><FaSave /> Save Changes</> : <><FaEdit /> Edit Profile</>}
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
        {[
          { 
            value: stats.totalOrders, 
            label: 'Total Orders', 
            icon: FaClipboardCheck,
            color: 'from-blue-500 to-blue-600',
            change: '+12%'
          },
          { 
            value: stats.monthlyRevenue, 
            label: 'Monthly Revenue', 
            icon: FaChartLine,
            color: 'from-green-500 to-emerald-600',
            change: '+8%'
          },
          { 
            value: `${profile.rating}/5`, 
            label: 'Customer Rating', 
            icon: FaStar,
            color: 'from-yellow-500 to-orange-500',
            change: `${profile.totalReviews} reviews`
          },
          { 
            value: stats.activeCustomers, 
            label: 'Active Customers', 
            icon: FaUsers,
            color: 'from-purple-500 to-pink-600',
            change: '+5 this week'
          }
        ].map((stat, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-br ${stat.color} p-4 md:p-5 rounded-xl text-white shadow-lg transition-transform hover:scale-105`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
              <div className="p-2 md:p-3 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
                <stat.icon className="text-xl" />
              </div>
            </div>
            <div className="mt-3 text-xs opacity-80">{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          {/* Profile Completeness */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-800">Profile Completeness</h2>
                <p className="text-gray-600 text-sm">Complete your profile to get better visibility</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">{profileCompleteness}%</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${profileCompleteness}%` }}
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              {[
                { label: 'Basic Info', complete: profile.shopName && profile.ownerName && profile.licenseNumber },
                { label: 'Contact Details', complete: profile.phone && profile.email },
                { label: 'Address', complete: profile.address && profile.city && profile.pincode },
                { label: 'Working Hours', complete: profile.openingTime && profile.closingTime },
                { label: 'Specialties', complete: profile.specialties.length > 0 },
                { label: 'Documents', complete: certificates.length >= 2 },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.complete ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                  )}
                  <span className={item.complete ? 'text-gray-800' : 'text-gray-500'}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="bg-white rounded-2xl border border-gray-200 p-2 shadow-sm">
            <div className="flex overflow-x-auto scrollbar-hide">
              {[
                { id: 'basic', label: 'Basic Info', icon: FaStore },
                { id: 'contact', label: 'Contact', icon: FaPhone },
                { id: 'hours', label: 'Business Hours', icon: FaClock },
                { id: 'services', label: 'Services', icon: FaFirstAid },
                { id: 'documents', label: 'Documents', icon: FaFileAlt },
                { id: 'settings', label: 'Settings', icon: FaShieldAlt },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50 rounded-t-lg'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="text-sm" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="transition-all duration-300">
            {/* Basic Information */}
            {activeTab === 'basic' && (
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <FaStore className="text-blue-600" /> Shop Information
                    </h2>
                    {isEditing && (
                      <button
                        onClick={handleReset}
                        className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                      >
                        <FaSync /> Reset
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {[
                      { label: 'Shop Name *', field: 'shopName', icon: FaStore, placeholder: 'Enter shop name' },
                      { label: 'Owner Name *', field: 'ownerName', icon: FaUser, placeholder: 'Enter owner name' },
                      { label: 'License Number *', field: 'licenseNumber', icon: FaIdCard, placeholder: 'PH/DL/XX/XXXXX/YYYY' },
                      { label: 'GST Number *', field: 'gstNumber', icon: FaFileInvoice, placeholder: '29XXXXX1234X1X5' },
                      { label: 'Pharmacy ID', field: 'pharmacyId', icon: FaKey, placeholder: 'Auto-generated', readOnly: true },
                      { label: 'Establishment Year', field: 'establishmentYear', icon: FaCalendarAlt, placeholder: '2015', type: 'number' },
                    ].map((item) => (
                      <div key={item.field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                          <item.icon className="text-gray-400" /> {item.label}
                        </label>
                        {isEditing ? (
                          <input
                            type={item.type || 'text'}
                            value={profile[item.field]}
                            onChange={(e) => handleInputChange(item.field, e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder={item.placeholder}
                            readOnly={item.readOnly}
                          />
                        ) : (
                          <div className="px-4 py-3 bg-gray-50 rounded-lg border border-transparent">
                            <div className="font-medium text-gray-800">{profile[item.field]}</div>
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <FaStore className="text-gray-400" /> Description
                      </label>
                      {isEditing ? (
                        <textarea
                          value={profile.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          rows="4"
                          placeholder="Describe your pharmacy services, specialties, and unique selling points..."
                        />
                      ) : (
                        <div className="px-4 py-3 bg-gray-50 rounded-lg border border-transparent">
                          <div className="text-gray-600">{profile.description}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaShareAlt className="text-purple-600" /> Social Media Links
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { field: 'facebook', label: 'Facebook', icon: FaGlobe, placeholder: 'facebook.com/username' },
                      { field: 'instagram', label: 'Instagram', icon: FaCamera, placeholder: '@username' },
                      { field: 'twitter', label: 'Twitter', icon: FaGlobe, placeholder: '@username' },
                    ].map((social) => (
                      <div key={social.field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{social.label}</label>
                        {isEditing ? (
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={profile[social.field]}
                              onChange={(e) => handleInputChange(social.field, e.target.value)}
                              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder={social.placeholder}
                            />
                            <button
                              onClick={() => copyToClipboard(profile[social.field])}
                              className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                              title="Copy"
                            >
                              <FaCopy />
                            </button>
                          </div>
                        ) : profile[social.field] ? (
                          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg">
                            <div className="text-blue-600 truncate">{profile[social.field]}</div>
                            <button
                              onClick={() => window.open(`https://${profile[social.field]}`, '_blank')}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                              title="Visit"
                            >
                              <FaExternalLinkAlt />
                            </button>
                          </div>
                        ) : (
                          <div className="text-gray-400 italic">Not provided</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Contact Information */}
            {activeTab === 'contact' && (
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <FaPhone className="text-green-600" /> Contact Details
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {[
                      { label: 'Phone Number *', field: 'phone', icon: FaPhone, type: 'tel' },
                      { label: 'WhatsApp Number', field: 'whatsapp', icon: FaWhatsapp, type: 'tel' },
                      { label: 'Email Address *', field: 'email', icon: FaEnvelope, type: 'email' },
                      { label: 'Website', field: 'website', icon: FaGlobe, type: 'url' },
                    ].map((contact) => (
                      <div key={contact.field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                          <contact.icon className={contact.field === 'whatsapp' ? 'text-green-500' : 'text-gray-400'} /> 
                          {contact.label}
                        </label>
                        {isEditing ? (
                          <div className="flex gap-2">
                            <input
                              type={contact.type}
                              value={profile[contact.field]}
                              onChange={(e) => handleInputChange(contact.field, e.target.value)}
                              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                              onClick={() => copyToClipboard(profile[contact.field])}
                              className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                              title="Copy"
                            >
                              <FaCopy />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg">
                            <div className="font-medium">{profile[contact.field]}</div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => copyToClipboard(profile[contact.field])}
                                className="p-2 text-gray-600 hover:bg-gray-100 rounded"
                                title="Copy"
                              >
                                <FaCopy />
                              </button>
                              {contact.field === 'phone' && (
                                <a href={`tel:${profile[contact.field]}`} className="p-2 text-blue-600 hover:bg-blue-50 rounded" title="Call">
                                  <FaPhone />
                                </a>
                              )}
                              {contact.field === 'whatsapp' && (
                                <a href={`https://wa.me/${profile[contact.field].replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="p-2 text-green-600 hover:bg-green-50 rounded" title="WhatsApp">
                                  <FaWhatsapp />
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-500" /> Complete Address *
                      </label>
                      {isEditing ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            value={profile.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            placeholder="Street Address"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            value={profile.landmark}
                            onChange={(e) => handleInputChange('landmark', e.target.value)}
                            placeholder="Landmark"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                              type="text"
                              value={profile.city}
                              onChange={(e) => handleInputChange('city', e.target.value)}
                              placeholder="City"
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <input
                              type="text"
                              value={profile.state}
                              onChange={(e) => handleInputChange('state', e.target.value)}
                              placeholder="State"
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <input
                              type="text"
                              value={profile.pincode}
                              onChange={(e) => handleInputChange('pincode', e.target.value)}
                              placeholder="Pincode"
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="px-4 py-3 bg-gray-50 rounded-lg">
                          <div className="font-medium text-gray-800 mb-1">{profile.address}</div>
                          <div className="text-gray-600 text-sm mb-1">Near {profile.landmark}</div>
                          <div className="text-gray-600">{profile.city}, {profile.state} - {profile.pincode}</div>
                          <button
                            onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(profile.address + ', ' + profile.city)}`, '_blank')}
                            className="mt-3 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 flex items-center gap-2"
                          >
                            <FaMap /> View on Map
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Delivery Information */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaTruck className="text-orange-600" /> Delivery Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { field: 'deliveryRadius', label: 'Delivery Radius', icon: FaMapMarkerAlt },
                      { field: 'minOrderValue', label: 'Min Order Value', icon: FaCreditCard },
                      { field: 'deliveryTime', label: 'Delivery Time', icon: FaClock },
                    ].map((item) => (
                      <div key={item.field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{item.label}</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={profile[item.field]}
                            onChange={(e) => handleInputChange(item.field, e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        ) : (
                          <div className="px-4 py-2 bg-gray-50 rounded-lg">
                            <div className="font-medium">{profile[item.field]}</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Business Hours */}
            {activeTab === 'hours' && (
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <FaClock className="text-orange-600" /> Business Hours
                    </h2>
                    {isEditing && (
                      <button
                        onClick={toggle24Hours}
                        className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                          profile.openingTime === '00:00' && profile.closingTime === '23:59'
                            ? 'bg-green-100 text-green-800 border border-green-200'
                            : 'bg-gray-100 text-gray-800 border border-gray-200'
                        }`}
                      >
                        {profile.openingTime === '00:00' && profile.closingTime === '23:59' ? (
                          <>
                            <FaCheck /> 24/7 Enabled
                          </>
                        ) : (
                          <>
                            <FaClock /> Set as 24/7
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Daily Timings</label>
                      {isEditing ? (
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex-1">
                            <label className="text-sm text-gray-600 mb-1">Opening Time</label>
                            <input
                              type="time"
                              value={profile.openingTime}
                              onChange={(e) => handleInputChange('openingTime', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div className="text-gray-500">to</div>
                          <div className="flex-1">
                            <label className="text-sm text-gray-600 mb-1">Closing Time</label>
                            <input
                              type="time"
                              value={profile.closingTime}
                              onChange={(e) => handleInputChange('closingTime', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="text-2xl font-bold text-gray-800">
                            {profile.openingTime} - {profile.closingTime}
                          </div>
                          {profile.openingTime === '00:00' && profile.closingTime === '23:59' && (
                            <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-full">
                              24/7 Pharmacy
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Working Days</label>
                      <p className="text-gray-600 text-sm mb-3">Select days your pharmacy is open</p>
                      <div className="flex flex-wrap gap-2">
                        {daysOfWeek.map((day) => (
                          <button
                            key={day}
                            onClick={() => handleWorkingDayToggle(day)}
                            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                              profile.workingDays.includes(day)
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-600 border border-gray-200'
                            } ${!isEditing && 'cursor-default'}`}
                          >
                            {day} {profile.workingDays.includes(day) && <FaCheck className="inline ml-1" />}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-800">Emergency Services</div>
                          <div className="text-sm text-gray-600">
                            {profile.workingDays.includes('Sun') ? 
                              'Open on Sundays for emergencies' : 
                              'Closed on Sundays - Emergency contact available'}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">Status:</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            profile.workingDays.includes('Sun') 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {profile.workingDays.includes('Sun') ? 'Available' : 'Limited'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaCreditCard className="text-purple-600" /> Accepted Payment Methods
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">Select payment methods you accept</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {availablePaymentMethods.map((method) => (
                      <button
                        key={method}
                        onClick={() => handlePaymentMethodToggle(method)}
                        className={`p-3 rounded-lg text-sm transition-all flex flex-col items-center justify-center gap-2 ${
                          profile.paymentMethods.includes(method)
                            ? 'bg-green-50 text-green-700 border-2 border-green-200 shadow-sm'
                            : 'bg-gray-50 text-gray-600 border border-gray-200'
                        } ${!isEditing && 'cursor-default'}`}
                      >
                        <FaCreditCard className={profile.paymentMethods.includes(method) ? 'text-green-600' : 'text-gray-400'} />
                        <span>{method}</span>
                        {profile.paymentMethods.includes(method) && (
                          <FaCheck className="text-green-500 text-xs" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>


              </div>
            )}

            {/* Services & Specialties */}
            {activeTab === 'services' && (
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaFirstAid className="text-red-600" /> Specialties & Services
                  </h2>
                  <p className="text-gray-600 text-sm mb-6">Select the services your pharmacy provides to help customers find you</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {availableSpecialties.map((specialty) => (
                      <button
                        key={specialty}
                        onClick={() => handleSpecialtyToggle(specialty)}
                        className={`p-4 rounded-xl text-sm transition-all flex items-center gap-3 ${
                          profile.specialties.includes(specialty)
                            ? 'bg-blue-50 text-blue-800 border-2 border-blue-200 shadow-sm'
                            : 'bg-gray-50 text-gray-600 border border-gray-200'
                        } ${!isEditing && 'cursor-default'}`}
                      >
                        <div className={`p-2 rounded-lg ${
                          profile.specialties.includes(specialty)
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          <FaFirstAid />
                        </div>
                        <div className="text-left flex-1">
                          <div className="font-medium">{specialty}</div>
                          <div className="text-xs text-gray-500 mt-1">Service available</div>
                        </div>
                        {profile.specialties.includes(specialty) && (
                          <FaCheckCircle className="text-green-500" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Statistics */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Service Performance</h3>
                  <div className="space-y-4">
                    {[
                      { service: 'Home Delivery', percentage: 85, color: 'bg-blue-500' },
                      { service: 'Emergency Services', percentage: 92, color: 'bg-red-500' },
                      { service: 'Consultation', percentage: 78, color: 'bg-green-500' },
                      { service: 'Chronic Care', percentage: 88, color: 'bg-purple-500' },
                    ].map((stat, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">{stat.service}</span>
                          <span>{stat.percentage}% satisfaction</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${stat.color} transition-all duration-500`}
                            style={{ width: `${stat.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Documents */}
            {activeTab === 'documents' && (
              <div className="space-y-4 md:space-y-6">
                {/* License & Certificates */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <FaCertificate className="text-amber-600" /> Licenses & Certificates
                    </h2>
                    <button
                      onClick={() => certInputRef.current?.click()}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:opacity-90 flex items-center gap-2"
                    >
                      <FaCloudUploadAlt /> Upload Documents
                    </button>
                    <input
                      type="file"
                      ref={certInputRef}
                      onChange={handleCertificateUpload}
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="hidden"
                      multiple
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Drug License Number *</label>
                      {isEditing ? (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={profile.licenseNumber}
                            onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <button
                            onClick={() => copyToClipboard(profile.licenseNumber)}
                            className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                            title="Copy"
                          >
                            <FaCopy />
                          </button>
                        </div>
                      ) : (
                        <div className="px-4 py-3 bg-gray-50 rounded-lg border border-transparent">
                          <div className="font-medium text-gray-800">{profile.licenseNumber}</div>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">GST Number *</label>
                      {isEditing ? (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={profile.gstNumber}
                            onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <button
                            onClick={() => copyToClipboard(profile.gstNumber)}
                            className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                            title="Copy"
                          >
                            <FaCopy />
                          </button>
                        </div>
                      ) : (
                        <div className="px-4 py-3 bg-gray-50 rounded-lg border border-transparent">
                          <div className="font-medium text-gray-800">{profile.gstNumber}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Certificate Files */}
                  <div>
                    <h3 className="font-bold text-gray-800 mb-4">Uploaded Documents ({certificates.length})</h3>
                    <div className="space-y-3">
                      {certificates.map((cert) => (
                        <div key={cert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-all">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-lg border">
                              {cert.type === 'image' ? (
                                <FaFileImage className="text-blue-600" />
                              ) : (
                                <FaFilePdf className="text-red-600" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">{cert.name}</div>
                              <div className="text-sm text-gray-500 flex items-center gap-3 mt-1">
                                <span className="px-2 py-0.5 bg-gray-200 rounded text-xs">{cert.type.toUpperCase()}</span>
                                <span>{cert.size}</span>
                                <span>Uploaded: {cert.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => previewCertificate(cert)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                              title="Preview"
                            >
                              <FaEye />
                            </button>
                            <button 
                              onClick={() => window.open(cert.url, '_blank')}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                              title="Download"
                            >
                              <FaDownload />
                            </button>
                            {isEditing && (
                              <button 
                                onClick={() => removeCertificate(cert.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                title="Delete"
                              >
                                <FaTrash />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gallery Images */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <FaCamera className="text-purple-600" /> Pharmacy Gallery
                    </h2>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:opacity-90 flex items-center gap-2"
                      >
                        <FaUpload /> Upload Images
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        className="hidden"
                        multiple
                      />
                      {uploadedImages.length > 0 && (
                        <button
                          onClick={() => setPreviewImage(null)}
                          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                        >
                          {previewImage ? <FaCompress /> : <FaExpand />} {previewImage ? 'Close' : 'View All'}
                        </button>
                      )}
                    </div>
                  </div>

                  {previewImage ? (
                    <div className="relative">
                      <button
                        onClick={() => setPreviewImage(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                      >
                        <FaTimes />
                      </button>
                      <img
                        src={previewImage.preview}
                        alt="Preview"
                        className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                      />
                    </div>
                  ) : uploadedImages.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {uploadedImages.map((image) => (
                        <div key={image.id} className="relative group">
                          <img
                            src={image.preview}
                            alt={image.name}
                            className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-all"
                            onClick={() => setPreviewImage(image)}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 rounded-lg flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewImage(image);
                              }}
                              className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-100"
                              title="Preview"
                            >
                              <FaEye />
                            </button>
                            {isEditing && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeImage(image.id);
                                }}
                                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                                title="Delete"
                              >
                                <FaTrash />
                              </button>
                            )}
                          </div>
                          <div className="mt-2">
                            <div className="text-sm font-medium truncate">{image.name}</div>
                            <div className="text-xs text-gray-500">{image.size} • {image.uploadedAt}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="border-3 border-dashed border-gray-300 rounded-2xl p-8 md:p-12 text-center">
                      <FaImage className="text-4xl text-gray-400 mx-auto mb-4" />
                      <div className="text-gray-600 mb-2">No images uploaded yet</div>
                      <div className="text-sm text-gray-500 mb-6">Upload photos of your pharmacy storefront, interior, and team</div>
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:opacity-90 flex items-center gap-2 mx-auto"
                      >
                        <FaCamera /> Browse Images
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Settings */}
            {activeTab === 'settings' && (
              <div className="space-y-4 md:space-y-6">

                {/* QR Code Generator */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <FaQrcode className="text-green-600" /> Pharmacy QR Code
                  </h2>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                      <div className="bg-gray-50 p-6 rounded-xl border text-center">
                        <div id="qr-code-canvas" className="inline-block">
                          <QRCode
                            value={qrData}
                            size={200}
                            level="H"
                            includeMargin={true}
                            bgColor="#ffffff"
                            fgColor="#1f2937"
                          />
                        </div>
                        <div className="mt-4 text-sm text-gray-600">
                          Scan to view pharmacy details
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="space-y-4">
                        <div>
                          <div className="font-medium text-gray-800 mb-2">QR Code Contains:</div>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center gap-2">
                              <FaCheckCircle className="text-green-500" />
                              Pharmacy Name & Contact
                            </li>
                            <li className="flex items-center gap-2">
                              <FaCheckCircle className="text-green-500" />
                              Address & Location
                            </li>
                            <li className="flex items-center gap-2">
                              <FaCheckCircle className="text-green-500" />
                              WhatsApp Quick Connect
                            </li>
                            <li className="flex items-center gap-2">
                              <FaCheckCircle className="text-green-500" />
                              Website Link
                            </li>
                          </ul>
                        </div>
                        
                        <div className="space-y-3">
                          <button
                            onClick={generateQRCode}
                            disabled={isGeneratingQR}
                            className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-50"
                          >
                            {isGeneratingQR ? (
                              <>
                                <FaSync className="animate-spin" /> Generating...
                              </>
                            ) : (
                              <>
                                <FaDownload /> Download QR Code
                              </>
                            )}
                          </button>
                          
                          <button
                            onClick={shareProfile}
                            className="w-full px-4 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2"
                          >
                            <FaShareAlt /> Share QR Code
                          </button>
                          
                          <button
                            onClick={printProfile}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2"
                          >
                            <FaPrint /> Print QR Code
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-4 md:space-y-6">
          {/* Pharmacy Card */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-5 md:p-6 text-white shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                <FaStore size={24} />
              </div>
              <div>
                <div className="font-bold text-xl">{profile.shopName}</div>
                <div className="text-blue-100 text-sm">ID: {profile.pharmacyId}</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <FaMapMarkerAlt className="text-blue-200" />
                <span className="truncate">{profile.city}, {profile.state}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FaPhone className="text-blue-200" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FaStar className="text-yellow-300" />
                <span>{profile.rating}/5 ({profile.totalReviews} reviews)</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white border-opacity-20">
              <div className="flex justify-between items-center">
                <div className="text-sm">Status</div>
                <div className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">Active</div>
              </div>
            </div>
          </div>

          {/* Business Verification */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-green-600" /> Verification Status
            </h3>
            
            <div className="space-y-4">
              {[
                { label: 'Email Verified', status: 'verified', icon: FaCheckCircle },
                { label: 'Phone Verified', status: 'verified', icon: FaCheckCircle },
                { label: 'License Verified', status: 'pending', icon: FaCertificate },
                { label: 'Address Verified', status: 'verified', icon: FaMapMarkerAlt },
                { label: 'GST Verified', status: 'verified', icon: FaFileInvoice },
                { label: 'Bank Verified', status: 'pending', icon: FaCreditCard },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <item.icon className={`${
                      item.status === 'verified' ? 'text-green-500' : 'text-yellow-500'
                    }`} />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.status === 'verified' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status === 'verified' ? 'Verified' : 'Pending'}
                  </span>
                </div>
              ))}
              
              <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:opacity-90">
                Complete Verification
              </button>
            </div>
          </div>

                          {/* Discounts & Offers */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaPercentage className="text-pink-600" /> Discounts & Offers
                  </h2>
                  {isEditing ? (
                    <div className="space-y-4">
                      <textarea
                        value={profile.discountOffers}
                        onChange={(e) => handleInputChange('discountOffers', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="3"
                        placeholder="List your current offers, discounts, and promotions..."
                      />
                      <div className="flex gap-3">
                        <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg hover:opacity-90">
                          Add Seasonal Offer
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                          View Offer History
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="px-4 py-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-100">
                        <div className="font-medium text-gray-800">{profile.discountOffers}</div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Last updated: Today, 10:30 AM
                      </div>
                    </div>
                  )}
                </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      {isEditing && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <button
            onClick={handleSave}
            className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110"
            title="Save Changes"
          >
            <FaSave size={20} />
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="p-4 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110"
            title="Cancel"
          >
            <FaTimes size={20} />
          </button>
        </div>
      )}

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            background: white !important;
          }
          
          .print-only {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;