import React, { useState } from 'react'
import {
  FaBullhorn,
  FaBell,
  FaTicketAlt,
  FaImage,
  FaUsers,
  FaChartLine,
  FaPlus,
  FaPaperPlane,
  FaClock,
  FaTrash,
  FaEdit,
  FaEye,
  FaFilter,
  FaStore,
  FaCalendar,
  FaRupeeSign,
  FaPercent,
  FaTag,
  FaMapMarkerAlt,
  FaUserCheck,
  FaTruck,
  FaFileMedical
} from 'react-icons/fa'
import Modal from '../../../shared/components/modals/Modal' 

const Marketing = () => {
  const [tab, setTab] = useState('campaigns')
  const [isCreateCampaignModalOpen, setIsCreateCampaignModalOpen] = useState(false)

  // Campaign form state
  const [campaignForm, setCampaignForm] = useState({
    title: '',
    description: '',
    campaignType: 'discount',
    discountType: 'percentage',
    discountValue: '',
    targetAudience: 'all',
    targetCities: [],
    scheduleType: 'immediate',
    scheduledDate: '',
    scheduledTime: '',
    budget: '',
    maxRedemptions: '',
    bannerImage: null
  })

  const campaigns = [
    {
      id: 'CMP-101',
      title: 'Free Delivery Weekend',
      target: 'All Users',
      type: 'Push + Banner',
      status: 'Active',
      reach: 1240,
      conversions: 186
    },
    {
      id: 'CMP-102',
      title: '20% OFF on Medicines',
      target: 'Kadapa Zone',
      type: 'Promo Code',
      status: 'Scheduled',
      reach: 680,
      conversions: 0
    }
  ]

  const promoCodes = [
    {
      code: 'ANAND20',
      discount: '20%',
      usage: '54 / 200',
      expires: '2024-02-10',
      status: 'Active'
    },
    {
      code: 'FIRST50',
      discount: '₹50',
      usage: '112 / 500',
      expires: '2024-01-30',
      status: 'Paused'
    }
  ]

  const notifications = [
    {
      title: 'Order Faster!',
      message: 'Upload prescription now and get medicines in 30 mins',
      target: 'Prescription Users',
      status: 'Sent',
      time: '10 mins ago'
    },
    {
      title: 'Festival Offer',
      message: 'Flat 10% OFF on all medicines today!',
      target: 'All Users',
      status: 'Scheduled',
      time: 'Today 6 PM'
    }
  ]

  const statCards = [
    { label: 'Active Campaigns', value: '4', color: 'from-purple-500 to-pink-500', icon: FaBullhorn },
    { label: 'Push Sent Today', value: '1,240', color: 'from-blue-500 to-cyan-500', icon: FaBell },
    { label: 'Active Coupons', value: '6', color: 'from-green-500 to-emerald-500', icon: FaTicketAlt },
    { label: 'Conversion Rate', value: '14.8%', color: 'from-orange-500 to-amber-500', icon: FaChartLine }
  ]

  const badge = (status) => {
    if (status === 'Active') return 'bg-green-100 text-green-800'
    if (status === 'Scheduled') return 'bg-yellow-100 text-yellow-800'
    if (status === 'Paused') return 'bg-gray-200 text-gray-700'
    return 'bg-blue-100 text-blue-800'
  }

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target
    if (type === 'file') {
      setCampaignForm(prev => ({ ...prev, [name]: files[0] }))
    } else {
      setCampaignForm(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmitCampaign = (e) => {
    e.preventDefault()
    console.log('Campaign created:', campaignForm)

    // Reset form
    setCampaignForm({
      title: '',
      description: '',
      campaignType: 'discount',
      discountType: 'percentage',
      discountValue: '',
      targetAudience: 'all',
      targetCities: [],
      scheduleType: 'immediate',
      scheduledDate: '',
      scheduledTime: '',
      budget: '',
      maxRedemptions: '',
      bannerImage: null
    })

    // Show success message
    alert(`Campaign "${campaignForm.title}" created successfully!`)

    // Close modal
    setIsCreateCampaignModalOpen(false)
  }

  const cities = ['Kadapa', 'Tirupati', 'Kurnool', 'Nellore', 'Chittoor', 'Anantapur']
  const campaignTypes = [
    { value: 'discount', label: 'Discount Offer', icon: FaTag },
    { value: 'free_delivery', label: 'Free Delivery', icon: FaTruck },
    { value: 'cashback', label: 'Cashback', icon: FaRupeeSign },
    { value: 'bogo', label: 'Buy One Get One', icon: FaStore }
  ]
  const audienceTypes = [
    { value: 'all', label: 'All Users', icon: FaUsers },
    { value: 'new', label: 'New Users', icon: FaUserCheck },
    { value: 'returning', label: 'Returning Customers', icon: FaChartLine },
    { value: 'prescription', label: 'Prescription Users', icon: FaFileMedical }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Create Campaign Modal */}
      <Modal
        isOpen={isCreateCampaignModalOpen}
        onClose={() => setIsCreateCampaignModalOpen(false)}
        title="Create New Campaign"
        size="xl"
        contentClassName="p-6"
      >
        <form onSubmit={handleSubmitCampaign} className="space-y-6">
          {/* Campaign Details */}
          <div className="bg-purple-50 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FaBullhorn className="text-purple-600 text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Campaign Details</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={campaignForm.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="E.g., Summer Sale 2024, Free Delivery Weekend"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={campaignForm.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Describe your campaign..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Type *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {campaignTypes.map(type => (
                    <label key={type.value} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-white cursor-pointer">
                      <input
                        type="radio"
                        name="campaignType"
                        value={type.value}
                        checked={campaignForm.campaignType === type.value}
                        onChange={handleInputChange}
                        className="text-purple-600"
                      />
                      <div className="ml-3">
                        <span className="font-medium text-gray-900">{type.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Discount Details */}
              {campaignForm.campaignType === 'discount' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Type
                    </label>
                    <select
                      name="discountType"
                      value={campaignForm.discountType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                    >
                      <option value="percentage">Percentage (%)</option>
                      <option value="fixed">Fixed Amount (₹)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Value *
                    </label>
                    <div className="relative">
                      {campaignForm.discountType === 'percentage' ? (
                        <FaPercent className="absolute left-3 top-3.5 text-gray-400" />
                      ) : (
                        <FaRupeeSign className="absolute left-3 top-3.5 text-gray-400" />
                      )}
                      <input
                        type="number"
                        name="discountValue"
                        value={campaignForm.discountValue}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg"
                        placeholder={campaignForm.discountType === 'percentage' ? 'Enter percentage' : 'Enter amount'}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Targeting & Audience */}
          <div className="bg-blue-50 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <FaUsers className="text-blue-600 text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Target Audience</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Audience Type *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {audienceTypes.map(audience => (
                    <label key={audience.value} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-white cursor-pointer">
                      <input
                        type="radio"
                        name="targetAudience"
                        value={audience.value}
                        checked={campaignForm.targetAudience === audience.value}
                        onChange={handleInputChange}
                        className="text-blue-600"
                      />
                      <div className="ml-3">
                        <span className="font-medium text-gray-900">{audience.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Cities (Optional)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {cities.map(city => (
                    <label key={city} className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg hover:bg-white cursor-pointer">
                      <input
                        type="checkbox"
                        checked={campaignForm.targetCities.includes(city)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCampaignForm(prev => ({
                              ...prev,
                              targetCities: [...prev.targetCities, city]
                            }))
                          } else {
                            setCampaignForm(prev => ({
                              ...prev,
                              targetCities: prev.targetCities.filter(c => c !== city)
                            }))
                          }
                        }}
                        className="text-blue-600"
                      />
                      <span className="text-sm">{city}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Schedule & Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <FaCalendar className="text-green-600 text-lg" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Schedule</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    When to launch?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="scheduleType"
                        value="immediate"
                        checked={campaignForm.scheduleType === 'immediate'}
                        onChange={handleInputChange}
                        className="text-green-600"
                      />
                      <span className="text-sm">Launch immediately</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="scheduleType"
                        value="scheduled"
                        checked={campaignForm.scheduleType === 'scheduled'}
                        onChange={handleInputChange}
                        className="text-green-600"
                      />
                      <span className="text-sm">Schedule for later</span>
                    </label>
                  </div>
                </div>

                {campaignForm.scheduleType === 'scheduled' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        name="scheduledDate"
                        value={campaignForm.scheduledDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time
                      </label>
                      <input
                        type="time"
                        name="scheduledTime"
                        value={campaignForm.scheduledTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <FaRupeeSign className="text-yellow-600 text-lg" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Budget & Limits</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Budget (₹)
                  </label>
                  <input
                    type="number"
                    name="budget"
                    value={campaignForm.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Redemptions
                  </label>
                  <input
                    type="number"
                    name="maxRedemptions"
                    value={campaignForm.maxRedemptions}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                    placeholder="Optional - Leave empty for unlimited"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="bg-pink-50 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-100 p-2 rounded-lg">
                <FaImage className="text-pink-600 text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Campaign Banner</h3>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-400 transition-colors">
              <input
                type="file"
                name="bannerImage"
                accept="image/*"
                onChange={handleInputChange}
                className="hidden"
                id="banner-upload"
              />
              <label htmlFor="banner-upload" className="cursor-pointer flex flex-col items-center">
                <div className="text-gray-400 mb-3">
                  <FaImage className="mx-auto text-3xl" />
                </div>
                <span className="text-sm text-pink-600 hover:text-pink-800 font-medium">
                  {campaignForm.bannerImage ? 'Change Image' : 'Click to upload banner'}
                </span>
                <p className="text-xs text-gray-500 mt-1">Recommended: 1200×400px, JPG or PNG</p>
              </label>
              {campaignForm.bannerImage && (
                <p className="text-sm text-green-600 mt-3 flex items-center justify-center gap-2">
                  <span className="text-green-500">✓</span>
                  {campaignForm.bannerImage.name}
                </p>
              )}
            </div>
          </div>

          {/* Campaign Preview */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-300">
            <h3 className="font-semibold text-gray-800 mb-3">Campaign Preview</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Title:</span>
                <span className="font-medium">{campaignForm.title || '--'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium">
                  {campaignTypes.find(t => t.value === campaignForm.campaignType)?.label || '--'}
                </span>
              </div>
              {campaignForm.discountValue && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount:</span>
                  <span className="font-medium">
                    {campaignForm.discountType === 'percentage'
                      ? `${campaignForm.discountValue}%`
                      : `₹${campaignForm.discountValue}`}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Target:</span>
                <span className="font-medium">
                  {audienceTypes.find(a => a.value === campaignForm.targetAudience)?.label || '--'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Schedule:</span>
                <span className="font-medium">
                  {campaignForm.scheduleType === 'immediate' ? 'Immediate' : 'Scheduled'}
                </span>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setIsCreateCampaignModalOpen(false)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <FaPlus />
              Create Campaign
            </button>
          </div>
        </form>
      </Modal>

      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Marketing & Growth Control Center
              </h1>
              <p className="text-gray-600 mt-1">
                Campaigns, promotions, pharmacy offers, notifications & platform growth tools
              </p>
            </div>

            <button
              onClick={() => setIsCreateCampaignModalOpen(true)}
              className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow hover:shadow-lg transition flex items-center gap-2"
            >
              <FaPlus />
              Create Campaign
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Marketing Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statCards.map((card, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-5 rounded-xl hover:shadow-lg transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">{card.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {card.value}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${card.color}`}
                  >
                    <card.icon className="text-white text-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Marketing Tools</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'campaigns', label: 'Campaigns', icon: FaBullhorn },
              { id: 'notifications', label: 'Push Notifications', icon: FaBell },
              { id: 'promos', label: 'Promo Codes', icon: FaTicketAlt },
              { id: 'banners', label: 'Banners', icon: FaImage },
              { id: 'targeting', label: 'Targeting', icon: FaUsers }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${tab === t.id
                    ? 'bg-blue-600 text-white border border-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                  }`}
              >
                <t.icon />
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* CAMPAIGNS */}
        {tab === 'campaigns' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-200">
              <h3 className="text-md font-semibold text-gray-700">Campaigns</h3>
              <p className="text-sm text-gray-500 mt-1">{campaigns.length} campaigns found</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[900px] w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">Campaign</th>
                    <th className="px-6 py-3 text-left">Target</th>
                    <th className="px-6 py-3 text-left">Type</th>
                    <th className="px-6 py-3 text-left">Reach</th>
                    <th className="px-6 py-3 text-left">Conversions</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((c) => (
                    <tr key={c.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="font-semibold">{c.title}</p>
                        <p className="text-xs text-gray-500">{c.id}</p>
                      </td>
                      <td className="px-6 py-4">{c.target}</td>
                      <td className="px-6 py-4">{c.type}</td>
                      <td className="px-6 py-4">{c.reach}</td>
                      <td className="px-6 py-4 font-semibold text-green-700">
                        {c.conversions}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${badge(c.status)}`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="p-2 bg-blue-100 rounded-lg"><FaEye /></button>
                        <button className="p-2 bg-yellow-100 rounded-lg"><FaEdit /></button>
                        <button className="p-2 bg-red-100 rounded-lg"><FaTrash /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PUSH NOTIFICATIONS */}
        {tab === 'notifications' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold mb-4">Send Push Notification</h3>
              <input className="w-full border p-2 rounded mb-3" placeholder="Title" />
              <textarea className="w-full border p-2 rounded mb-3" placeholder="Message"></textarea>

              <select className="w-full border p-2 rounded mb-3">
                <option>All Users</option>
                <option>Prescription Users</option>
                <option>City: Kadapa</option>
                <option>New Users</option>
              </select>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
                  <FaPaperPlane /> Send Now
                </button>
                <button className="flex-1 bg-gray-200 py-2 rounded-lg flex items-center justify-center gap-2">
                  <FaClock /> Schedule
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-200">
                <h3 className="text-md font-semibold text-gray-700">Recent Notifications</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-[500px] w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">Title</th>
                      <th className="px-6 py-3">Target</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notifications.map((n, i) => (
                      <tr key={i} className="border-b">
                        <td className="px-6 py-4 font-medium">{n.title}</td>
                        <td className="px-6 py-4">{n.target}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm ${badge(n.status)}`}>
                            {n.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500">{n.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* PROMO CODES */}
        {tab === 'promos' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-200">
              <h3 className="text-md font-semibold text-gray-700">Promo Codes</h3>
              <p className="text-sm text-gray-500 mt-1">{promoCodes.length} active codes</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[700px] w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Code</th>
                    <th className="px-6 py-3">Discount</th>
                    <th className="px-6 py-3">Usage</th>
                    <th className="px-6 py-3">Expires</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {promoCodes.map((p, i) => (
                    <tr key={i} className="border-b">
                      <td className="px-6 py-4 font-bold">{p.code}</td>
                      <td className="px-6 py-4">{p.discount}</td>
                      <td className="px-6 py-4">{p.usage}</td>
                      <td className="px-6 py-4">{p.expires}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${badge(p.status)}`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="p-2 bg-yellow-100 rounded-lg"><FaEdit /></button>
                        <button className="p-2 bg-red-100 rounded-lg"><FaTrash /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TARGETING */}
        {tab === 'targeting' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
            <h3 className="text-md font-semibold text-gray-700">Audience Targeting Rules</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select className="border p-2 rounded">
                <option>City</option>
                <option>Order Frequency</option>
                <option>Prescription Users</option>
              </select>

              <select className="border p-2 rounded">
                <option>Equals</option>
                <option>Greater Than</option>
                <option>Less Than</option>
              </select>

              <input className="border p-2 rounded" placeholder="Value (e.g. Kadapa / 5 orders)" />
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Save Targeting Rule
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Marketing