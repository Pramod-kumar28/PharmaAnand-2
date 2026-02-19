import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import {
  FaShieldAlt,
  FaStore,
  FaTruck,
  FaMoneyBillWave,
  FaBell,
  FaCogs,
  FaSave,
  FaRedoAlt,
  FaDatabase,
  FaKey
} from 'react-icons/fa'

const Toggle = ({ enabled, setEnabled, label, description }) => (
  <div className="flex justify-between items-center border-b pb-3 last:border-none gap-4">
    <div className="flex-1 min-w-0">
      <p className="font-medium text-gray-900">{label}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`
        ${enabled ? 'bg-blue-600' : 'bg-gray-300'}
        relative inline-flex shrink-0 h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      `}
    >
      <span className="sr-only">Toggle {label}</span>
      <span
        className={`
          ${enabled ? 'translate-x-4 sm:translate-x-6' : 'translate-x-0.5'}
          inline-block h-4 w-4 sm:h-5 sm:w-5 transform rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out
        `}
      />
    </Switch>
  </div>
)

const Setting = () => {
  const [security, setSecurity] = useState({
    twoFA: true,
    sessionTimeout: true,
    apiAccess: false
  })

  const [platform, setPlatform] = useState({
    autoApprovePharmacy: false,
    maintenanceMode: false,
    prescriptionRequired: true
  })

  const [delivery, setDelivery] = useState({
    autoAssignRider: true,
    penalties: true
  })

  const [finance, setFinance] = useState({
    gstEnabled: true,
    autoRefund: false
  })

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    whatsapp: true,
    system: true
  })

  const settingBlock = (icon, title, children) => (
    <div className="bg-white rounded-xl sm:rounded-2xl border shadow-sm p-4 sm:p-6 space-y-3 sm:space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
          {icon}
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {children}
      </div>
    </div>
  )

  return (
    <div className="w-full min-w-full space-y-6 sm:space-y-8 p-3 sm:p-4 md:p-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Platform Settings
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Control security, operations, finance & system behavior
          </p>
        </div>

        <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition flex-1 sm:flex-none text-sm sm:text-base">
            <FaRedoAlt className="text-xs sm:text-sm" /> 
            <span className="hidden xs:inline">Reset</span>
          </button>
          <button className="flex items-center justify-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex-1 sm:flex-none text-sm sm:text-base">
            <FaSave className="text-xs sm:text-sm" /> 
            <span className="hidden xs:inline">Save Changes</span>
          </button>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

        {/* Security */}
        {settingBlock(
          <FaShieldAlt className="text-sm sm:text-base" />,
          'Security & Access',
          <>
            <Toggle
              label="Two-Factor Authentication"
              description="Require OTP for admin & pharmacy logins"
              enabled={security.twoFA}
              setEnabled={(v) => setSecurity({ ...security, twoFA: v })}
            />
            <Toggle
              label="Session Timeout"
              description="Auto logout inactive users after 15 minutes"
              enabled={security.sessionTimeout}
              setEnabled={(v) => setSecurity({ ...security, sessionTimeout: v })}
            />
            <Toggle
              label="API Access"
              description="Allow third-party system integration"
              enabled={security.apiAccess}
              setEnabled={(v) => setSecurity({ ...security, apiAccess: v })}
            />
          </>
        )}

        {/* Platform */}
        {settingBlock(
          <FaStore className="text-sm sm:text-base" />,
          'Platform Controls',
          <>
            <Toggle
              label="Auto Approve Pharmacies"
              description="Skip manual admin approval for new pharmacies"
              enabled={platform.autoApprovePharmacy}
              setEnabled={(v) => setPlatform({ ...platform, autoApprovePharmacy: v })}
            />
            <Toggle
              label="Maintenance Mode"
              description="Temporarily disable user ordering"
              enabled={platform.maintenanceMode}
              setEnabled={(v) => setPlatform({ ...platform, maintenanceMode: v })}
            />
            <Toggle
              label="Prescription Enforcement"
              description="Require doctor prescription for regulated medicines"
              enabled={platform.prescriptionRequired}
              setEnabled={(v) => setPlatform({ ...platform, prescriptionRequired: v })}
            />
          </>
        )}

        {/* Delivery */}
        {settingBlock(
          <FaTruck className="text-sm sm:text-base" />,
          'Delivery Network',
          <>
            <Toggle
              label="Auto Rider Assignment"
              description="Automatically assign nearest rider to new orders"
              enabled={delivery.autoAssignRider}
              setEnabled={(v) => setDelivery({ ...delivery, autoAssignRider: v })}
            />
            <Toggle
              label="Penalty System"
              description="Apply penalties for delayed deliveries"
              enabled={delivery.penalties}
              setEnabled={(v) => setDelivery({ ...delivery, penalties: v })}
            />
          </>
        )}

        {/* Finance */}
        {settingBlock(
          <FaMoneyBillWave className="text-sm sm:text-base" />,
          'Finance & Compliance',
          <>
            <Toggle
              label="GST Enabled"
              description="Apply GST to all transactions"
              enabled={finance.gstEnabled}
              setEnabled={(v) => setFinance({ ...finance, gstEnabled: v })}
            />
            <Toggle
              label="Auto Refunds"
              description="Automatically process failed delivery refunds"
              enabled={finance.autoRefund}
              setEnabled={(v) => setFinance({ ...finance, autoRefund: v })}
            />
          </>
        )}

        {/* Notifications */}
        {settingBlock(
          <FaBell className="text-sm sm:text-base" />,
          'Notifications',
          <>
            <Toggle
              label="Email Alerts"
              description="Send updates via email"
              enabled={notifications.email}
              setEnabled={(v) => setNotifications({ ...notifications, email: v })}
            />
            <Toggle
              label="SMS Alerts"
              description="Send updates via SMS"
              enabled={notifications.sms}
              setEnabled={(v) => setNotifications({ ...notifications, sms: v })}
            />
            <Toggle
              label="WhatsApp Alerts"
              description="Send updates via WhatsApp"
              enabled={notifications.whatsapp}
              setEnabled={(v) => setNotifications({ ...notifications, whatsapp: v })}
            />
            <Toggle
              label="System Notifications"
              description="Show platform alerts inside dashboard"
              enabled={notifications.system}
              setEnabled={(v) => setNotifications({ ...notifications, system: v })}
            />
          </>
        )}

        {/* System */}
        <div className="bg-white rounded-xl sm:rounded-2xl border shadow-sm p-4 sm:p-6 space-y-3 sm:space-y-4 lg:col-span-2 xl:col-span-1">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
              <FaCogs className="text-sm sm:text-base" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">System & Data</h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center border-b pb-3 last:border-none gap-4">
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900">Automatic Backups</p>
                <p className="text-sm text-gray-500">Backup platform data every 24 hours</p>
              </div>
              <Switch
                checked={true}
                onChange={() => {}}
                className={`
                  bg-blue-600
                  relative inline-flex shrink-0 h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors duration-200 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                `}
              >
                <span className="sr-only">Toggle Automatic Backups</span>
                <span
                  className="translate-x-4 sm:translate-x-6 inline-block h-4 w-4 sm:h-5 sm:w-5 transform rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out"
                />
              </Switch>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900">System Logs</p>
                <p className="text-sm text-gray-500">Download platform activity logs</p>
              </div>
              <button className="flex items-center justify-center gap-1 sm:gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm w-full sm:w-auto mt-1 sm:mt-0">
                <FaDatabase className="text-xs sm:text-sm" /> Download
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900">API Keys</p>
                <p className="text-sm text-gray-500">Manage secure access tokens</p>
              </div>
              <button className="flex items-center justify-center gap-1 sm:gap-2 px-3 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-lg text-sm w-full sm:w-auto mt-1 sm:mt-0">
                <FaKey className="text-xs sm:text-sm" /> Manage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting