// src/pages/pharmacy/Settings.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaBell, 
  FaLock, 
  FaShieldAlt, 
  FaCreditCard, 
  FaUsers, 
  FaDatabase, 
  FaGlobe,
  FaDownload,
  FaUpload,
  FaUserPlus,
  FaTrash,
  FaEdit,
  FaKey,
  FaHistory,
  FaCheck,
  FaTimes
} from 'react-icons/fa';
import { MdPhoneAndroid, MdEmail } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('notifications');
  const [settings, setSettings] = useState({
    notifications: {
      newOrders: true,
      lowStock: true,
      orderUpdates: true,
      marketing: false,
      smsNotifications: true,
      emailNotifications: true
    },
    security: {
      twoFactor: false,
      sessionTimeout: 30,
      passwordExpiry: 90,
      loginAlerts: true
    },
    payment: {
      autoCollect: true,
      paymentMethods: ['upi', 'card', 'cash'],
      invoiceAutoGenerate: true,
      taxInclusive: true,
      gstRate: 18
    },
    users: {
      usersList: [
        { id: 1, name: 'John Doe', email: 'john@pharmacy.com', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@pharmacy.com', role: 'Pharmacist', status: 'Active' },
        { id: 3, name: 'Robert Johnson', email: 'robert@pharmacy.com', role: 'Cashier', status: 'Inactive' }
      ]
    },
    integrations: {
      whatsappEnabled: true,
      emailEnabled: true,
      apiEnabled: false,
      erpSync: true,
      apiKey: 'sk_live_1234567890abcdef'
    },
    backup: {
      lastBackup: '2024-01-15 14:30',
      autoBackup: true,
      backupFrequency: 'daily',
      cloudStorage: true,
      backupSize: '245',
      storageUsed: '1.2'
    }
  });

  const [sessionTimeout, setSessionTimeout] = useState(settings.security.sessionTimeout);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Pharmacist', password: '' });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [gstRate, setGstRate] = useState(settings.payment.gstRate);
  const [isSaving, setIsSaving] = useState(false);
  const [originalSettings, setOriginalSettings] = useState(null);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const [apiKeyVisible, setApiKeyVisible] = useState(false);
  const [backupProgress, setBackupProgress] = useState(0);
  const [isBackingUp, setIsBackingUp] = useState(false);

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('pharmacySettings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      setOriginalSettings(parsed);
      setSessionTimeout(parsed.security.sessionTimeout);
      setGstRate(parsed.payment.gstRate);
    } else {
      // Save initial settings to localStorage
      localStorage.setItem('pharmacySettings', JSON.stringify(settings));
      setOriginalSettings(JSON.parse(JSON.stringify(settings)));
    }
  }, []);

  // Check if settings have changed
  const hasChanges = () => {
    if (!originalSettings) return false;
    return JSON.stringify(settings) !== JSON.stringify(originalSettings);
  };

  const handleToggle = (category, key) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key]
      }
    }));
  };

  const handleInputChange = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const handleNumericChange = (category, key, value) => {
    const numValue = parseInt(value) || 0;
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: numValue
      }
    }));
  };

  // User Management Functions
  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      toast.error('Please fill all fields including password');
      return;
    }

    if (!validateEmail(newUser.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    const userExists = settings.users.usersList.some(user => 
      user.email.toLowerCase() === newUser.email.toLowerCase()
    );

    if (userExists) {
      toast.error('User with this email already exists');
      return;
    }

    const newUserObj = {
      id: Date.now(), // Simple unique ID
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: 'Active'
    };

    const updatedUsers = [...settings.users.usersList, newUserObj];
    handleInputChange('users', 'usersList', updatedUsers);
    setNewUser({ name: '', email: '', role: 'Pharmacist', password: '' });
    toast.success('User added successfully');
  };

  const handleRemoveUser = (id) => {
    if (window.confirm('Are you sure you want to remove this user?')) {
      const updatedUsers = settings.users.usersList.filter(user => user.id !== id);
      handleInputChange('users', 'usersList', updatedUsers);
      toast.success('User removed successfully');
    }
  };

  const startEditUser = (user) => {
    setEditingUserId(user.id);
    setEditedUser({ ...user });
  };

  const cancelEditUser = () => {
    setEditingUserId(null);
    setEditedUser(null);
  };

  const saveEditUser = () => {
    if (!editedUser.name || !editedUser.email) {
      toast.error('Name and email are required');
      return;
    }

    const updatedUsers = settings.users.usersList.map(user =>
      user.id === editingUserId ? editedUser : user
    );
    
    handleInputChange('users', 'usersList', updatedUsers);
    setEditingUserId(null);
    setEditedUser(null);
    toast.success('User updated successfully');
  };

  // Security Functions
  const handlePasswordChange = () => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast.error('Please fill all password fields');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      toast.error('New password must be at least 8 characters long');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    // In a real app, you would verify currentPassword with your backend here
    toast.success('Password updated successfully');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  // Payment Functions
  const updateGSTRate = () => {
    if (gstRate < 0 || gstRate > 100) {
      toast.error('GST rate must be between 0 and 100');
      return;
    }
    handleNumericChange('payment', 'gstRate', gstRate);
    toast.success('GST rate updated successfully');
  };

  // Integration Functions
  const regenerateApiKey = () => {
    const newApiKey = 'sk_live_' + Math.random().toString(36).substr(2, 32);
    handleInputChange('integrations', 'apiKey', newApiKey);
    toast.success('API Key regenerated successfully');
  };

  // Backup Functions
  const simulateBackup = () => {
    setIsBackingUp(true);
    setBackupProgress(0);
    
    const interval = setInterval(() => {
      setBackupProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsBackingUp(false);
          
          const now = new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          });
          
          handleInputChange('backup', 'lastBackup', now.replace(',', ''));
          toast.success('Backup completed successfully!');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleRestoreBackup = () => {
    if (window.confirm('Are you sure you want to restore from backup? This will replace all current settings.')) {
      const backupData = localStorage.getItem('pharmacyBackup');
      if (backupData) {
        setSettings(JSON.parse(backupData));
        toast.success('Backup restored successfully');
      } else {
        toast.error('No backup found');
      }
    }
  };

  const handleCreateBackup = () => {
    localStorage.setItem('pharmacyBackup', JSON.stringify(settings));
    toast.success('Backup created successfully');
  };

  // Save All Settings
  const saveAllSettings = () => {
    setIsSaving(true);
    
    // Simulate API call delay
    setTimeout(() => {
      localStorage.setItem('pharmacySettings', JSON.stringify(settings));
      setOriginalSettings(JSON.parse(JSON.stringify(settings)));
      setIsSaving(false);
      toast.success('Settings saved successfully!');
    }, 1000);
  };

  const cancelChanges = () => {
    if (originalSettings) {
      setSettings(JSON.parse(JSON.stringify(originalSettings)));
      setSessionTimeout(originalSettings.security.sessionTimeout);
      setGstRate(originalSettings.payment.gstRate);
      toast.info('Changes discarded');
    }
  };

  // Validation helper
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Mobile scrollable tabs component
  const MobileTabs = () => (
    <div className="lg:hidden mb-6 overflow-x-auto pb-2">
      <div className="flex space-x-2 min-w-max">
        {[
          { id: 'notifications', label: 'Notifications', icon: FaBell },
          { id: 'security', label: 'Security', icon: FaLock },
          { id: 'payment', label: 'Payment', icon: FaCreditCard },
          { id: 'users', label: 'Users', icon: FaUsers },
          { id: 'integrations', label: 'Integrations', icon: FaGlobe },
          { id: 'backup', label: 'Backup', icon: FaDatabase }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg flex items-center whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="mr-2" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="relative p-3 md:p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">Configure your pharmacy settings and preferences</p>
      </div>

      {/* Mobile Tabs */}
      <MobileTabs />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Desktop Settings Sidebar */}
        <div className="lg:col-span-1 hidden lg:block">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 sticky top-6">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-800">Settings</h3>
              {hasChanges() && (
                <div className="mt-2 text-sm text-amber-600 bg-amber-50 p-2 rounded">
                  <FaBell className="inline mr-1" /> Unsaved changes
                </div>
              )}
            </div>
            <nav className="p-2">
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full text-left px-4 py-3 rounded-lg mb-1 flex items-center transition-colors ${
                  activeTab === 'notifications'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100 border border-transparent'
                }`}
              >
                <FaBell className="mr-3" /> Notifications
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`w-full text-left px-4 py-3 rounded-lg mb-1 flex items-center transition-colors ${
                  activeTab === 'security'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100 border border-transparent'
                }`}
              >
                <FaLock className="mr-3" /> Security
              </button>
              <button
                onClick={() => setActiveTab('payment')}
                className={`w-full text-left px-4 py-3 rounded-lg mb-1 flex items-center transition-colors ${
                  activeTab === 'payment'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100 border border-transparent'
                }`}
              >
                <FaCreditCard className="mr-3" /> Payment
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`w-full text-left px-4 py-3 rounded-lg mb-1 flex items-center transition-colors ${
                  activeTab === 'users'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100 border border-transparent'
                }`}
              >
                <FaUsers className="mr-3" /> User Management
              </button>
              <button
                onClick={() => setActiveTab('integrations')}
                className={`w-full text-left px-4 py-3 rounded-lg mb-1 flex items-center transition-colors ${
                  activeTab === 'integrations'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100 border border-transparent'
                }`}
              >
                <FaGlobe className="mr-3" /> Integrations
              </button>
              <button
                onClick={() => setActiveTab('backup')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors ${
                  activeTab === 'backup'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100 border border-transparent'
                }`}
              >
                <FaDatabase className="mr-3" /> Backup & Restore
              </button>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaBell className="mr-2" /> Notification Settings
                </h2>
                
                <div className="space-y-4">
                  {[
                    { key: 'newOrders', label: 'New Order Notifications', description: 'Get notified when new orders arrive' },
                    { key: 'lowStock', label: 'Low Stock Alerts', description: 'Get notified when stock is low' },
                    { key: 'orderUpdates', label: 'Order Status Updates', description: 'Get notified about order status changes' },
                    { key: 'marketing', label: 'Marketing Emails', description: 'Receive promotional emails and updates' },
                    { key: 'smsNotifications', label: 'SMS Notifications', description: 'Receive order updates via SMS', icon: MdPhoneAndroid },
                    { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email', icon: MdEmail }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                      <div className="flex items-center">
                        {item.icon && <item.icon className="mr-3 text-gray-500" />}
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.notifications[item.key]}
                          onChange={() => handleToggle('notifications', item.key)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaShieldAlt className="mr-2" /> Security Settings
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-gray-600">Add an extra layer of security to your account</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.security.twoFactor}
                        onChange={() => handleToggle('security', 'twoFactor')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="font-medium mb-2">Session Timeout</div>
                    <div className="text-sm text-gray-600 mb-4">Automatically log out after inactivity</div>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="5"
                        max="120"
                        step="5"
                        value={sessionTimeout}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          setSessionTimeout(value);
                          handleNumericChange('security', 'sessionTimeout', value);
                        }}
                        className="w-full"
                      />
                      <span className="text-blue-600 font-medium min-w-[80px]">{sessionTimeout} minutes</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium">Login Alerts</div>
                      <div className="text-sm text-gray-600">Get notified of new logins to your account</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.security.loginAlerts}
                        onChange={() => handleToggle('security', 'loginAlerts')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="font-medium mb-4">Change Password</div>
                    <div className="space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                      <button 
                        onClick={handlePasswordChange}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Tab */}
            {activeTab === 'payment' && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaCreditCard className="mr-2" /> Payment Settings
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium">Auto-collect Payments</div>
                      <div className="text-sm text-gray-600">Automatically collect payments for online orders</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.payment.autoCollect}
                        onChange={() => handleToggle('payment', 'autoCollect')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium">Auto-generate Invoices</div>
                      <div className="text-sm text-gray-600">Generate invoices automatically for all orders</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.payment.invoiceAutoGenerate}
                        onChange={() => handleToggle('payment', 'invoiceAutoGenerate')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="font-medium mb-4">Accepted Payment Methods</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        { id: 'upi', label: 'UPI' },
                        { id: 'card', label: 'Card' },
                        { id: 'cash', label: 'Cash' },
                        { id: 'netbanking', label: 'Net Banking' },
                        { id: 'wallet', label: 'Wallet' }
                      ].map((method) => (
                        <label key={method.id} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.payment.paymentMethods.includes(method.id)}
                            onChange={() => {
                              const updatedMethods = settings.payment.paymentMethods.includes(method.id)
                                ? settings.payment.paymentMethods.filter(m => m !== method.id)
                                : [...settings.payment.paymentMethods, method.id];
                              handleInputChange('payment', 'paymentMethods', updatedMethods);
                            }}
                            className="mr-3 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="capitalize">{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="font-medium mb-4">Tax Settings</div>
                    <div className="flex items-center justify-between mb-6">
                      <span>Include tax in prices</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.payment.taxInclusive}
                          onChange={() => handleToggle('payment', 'taxInclusive')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">GST Rate (%)</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={gstRate}
                          onChange={(e) => setGstRate(parseInt(e.target.value) || 0)}
                          className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <button 
                        onClick={updateGSTRate}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors mt-6"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* User Management Tab */}
            {activeTab === 'users' && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaUsers className="mr-2" /> User Management
                </h2>
                
                <div className="space-y-6">
                  <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="font-medium mb-4">Add New User</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={newUser.name}
                          onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="john@pharmacy.com"
                          value={newUser.email}
                          onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                          type="password"
                          placeholder="Minimum 8 characters"
                          value={newUser.password}
                          onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <select
                          value={newUser.role}
                          onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="Admin">Admin</option>
                          <option value="Pharmacist">Pharmacist</option>
                          <option value="Cashier">Cashier</option>
                          <option value="Viewer">Viewer</option>
                        </select>
                      </div>
                    </div>
                    <button
                      onClick={handleAddUser}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <FaUserPlus className="mr-2" /> Add User
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 font-medium">Current Users ({settings.users.usersList.length})</div>
                    <div className="divide-y divide-gray-200">
                      {settings.users.usersList.map((user) => (
                        <div key={user.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-gray-50">
                          {editingUserId === user.id ? (
                            <div className="w-full">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                  type="text"
                                  value={editedUser.name}
                                  onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
                                  className="p-2 border border-gray-300 rounded"
                                  placeholder="Name"
                                />
                                <input
                                  type="email"
                                  value={editedUser.email}
                                  onChange={(e) => setEditedUser({...editedUser, email: e.target.value})}
                                  className="p-2 border border-gray-300 rounded"
                                  placeholder="Email"
                                />
                                <select
                                  value={editedUser.role}
                                  onChange={(e) => setEditedUser({...editedUser, role: e.target.value})}
                                  className="p-2 border border-gray-300 rounded"
                                >
                                  <option value="Admin">Admin</option>
                                  <option value="Pharmacist">Pharmacist</option>
                                  <option value="Cashier">Cashier</option>
                                  <option value="Viewer">Viewer</option>
                                </select>
                                <select
                                  value={editedUser.status}
                                  onChange={(e) => setEditedUser({...editedUser, status: e.target.value})}
                                  className="p-2 border border-gray-300 rounded"
                                >
                                  <option value="Active">Active</option>
                                  <option value="Inactive">Inactive</option>
                                </select>
                              </div>
                              <div className="flex space-x-2">
                                <button 
                                  onClick={saveEditUser}
                                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center"
                                >
                                  <FaCheck className="mr-2" /> Save
                                </button>
                                <button 
                                  onClick={cancelEditUser}
                                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 flex items-center"
                                >
                                  <FaTimes className="mr-2" /> Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="mb-3 sm:mb-0">
                                <div className="font-medium">{user.name}</div>
                                <div className="text-sm text-gray-600">{user.email}</div>
                              </div>
                              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                                <span className={`px-3 py-1 rounded-full text-sm ${
                                  user.status === 'Active' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  {user.status}
                                </span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                  {user.role}
                                </span>
                                <div className="flex space-x-2">
                                  <button 
                                    onClick={() => startEditUser(user)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                  >
                                    <FaEdit />
                                  </button>
                                  <button 
                                    onClick={() => handleRemoveUser(user.id)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                                    disabled={user.role === 'Admin'}
                                  >
                                    <FaTrash />
                                  </button>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Integrations Tab */}
            {activeTab === 'integrations' && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaGlobe className="mr-2" /> Integrations
                </h2>
                
                <div className="space-y-6">
                  {[
                    { key: 'whatsappEnabled', label: 'WhatsApp Integration', description: 'Send order updates via WhatsApp' },
                    { key: 'emailEnabled', label: 'Email Integration', description: 'Send invoices and updates via email' },
                    { key: 'erpSync', label: 'ERP System Sync', description: 'Sync inventory with ERP system' },
                    { key: 'apiEnabled', label: 'API Access', description: 'Enable API access for third-party integrations' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.integrations[item.key]}
                          onChange={() => handleToggle('integrations', item.key)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}

                  {settings.integrations.apiEnabled && (
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="font-medium mb-4">API Settings</div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
                          <div className="flex items-center space-x-2">
                            <input
                              type={apiKeyVisible ? "text" : "password"}
                              value={settings.integrations.apiKey}
                              readOnly
                              className="p-2 border border-gray-300 rounded flex-1 bg-gray-50 font-mono"
                            />
                            <button 
                              onClick={() => setApiKeyVisible(!apiKeyVisible)}
                              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                            >
                              {apiKeyVisible ? 'Hide' : 'Show'}
                            </button>
                            <button 
                              onClick={regenerateApiKey}
                              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
                            >
                              <FaKey className="mr-2" /> Regenerate
                            </button>
                          </div>
                          <div className="text-sm text-gray-500 mt-2">
                            Use this key to authenticate API requests
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Backup & Restore Tab */}
            {activeTab === 'backup' && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaDatabase className="mr-2" /> Backup & Restore
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="font-medium mb-4">Backup Settings</div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Automatic Backups</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.backup.autoBackup}
                              onChange={() => handleToggle('backup', 'autoBackup')}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        
                        {settings.backup.autoBackup && (
                          <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Backup Frequency</label>
                            <select
                              value={settings.backup.backupFrequency}
                              onChange={(e) => handleInputChange('backup', 'backupFrequency', e.target.value)}
                              className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            >
                              <option value="daily">Daily</option>
                              <option value="weekly">Weekly</option>
                              <option value="monthly">Monthly</option>
                            </select>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <span>Cloud Storage</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.backup.cloudStorage}
                              onChange={() => handleToggle('backup', 'cloudStorage')}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="font-medium mb-4">Backup Status</div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Last Backup</span>
                          <span className="font-medium">{settings.backup.lastBackup}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Backup Size</span>
                          <span className="font-medium">{settings.backup.backupSize} MB</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Storage Used</span>
                          <span className="font-medium">{settings.backup.storageUsed} GB / 10 GB</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {isBackingUp && (
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                      <div className="font-medium mb-2">Creating Backup...</div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                          style={{ width: `${backupProgress}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600 mt-2 text-right">
                        {backupProgress}%
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={simulateBackup}
                      disabled={isBackingUp}
                      className={`px-6 py-3 rounded-lg flex items-center transition-colors ${
                        isBackingUp 
                          ? 'bg-blue-400 cursor-not-allowed' 
                          : 'bg-blue-600 hover:bg-blue-700'
                      } text-white`}
                    >
                      <FaDownload className="mr-2" /> Backup Now
                    </button>
                    
                    <button
                      onClick={handleCreateBackup}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center transition-colors"
                    >
                      <FaDownload className="mr-2" /> Create Manual Backup
                    </button>
                    
                    <button
                      onClick={handleRestoreBackup}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center transition-colors"
                    >
                      <FaUpload className="mr-2" /> Restore Backup
                    </button>
                    
                    <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center transition-colors">
                      <FaHistory className="mr-2" /> View Backup History
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Save/Cancel Buttons */}
            <div className={`mt-8 pt-6 border-t border-gray-200 ${hasChanges() ? 'block' : 'hidden'}`}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm text-amber-600">
                  You have unsaved changes
                </div>
                <div>
                  <button
                    onClick={saveAllSettings}
                    disabled={isSaving}
                    className={`px-6 py-2 rounded-lg flex items-center ${
                      isSaving 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white transition-colors`}
                  >
                    {isSaving ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Saving...
                      </>
                    ) : 'Save Changes'}
                  </button>
                  <button
                    onClick={cancelChanges}
                    className="ml-4 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;