'use client';
import { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function SettingsPage() {
  const [displayName, setDisplayName] = useState("John Doe");
  const [role, setRole] = useState("Manager");
  const [darkMode, setDarkMode] = useState(false);
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSaveSettings = () => {
    // TODO: Implement save functionality
    console.log('Settings saved:', {
      displayName,
      role,
      darkMode,
      password
    });
    
    // Show toast notification
    setShowToast(true);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Settings ⚙️</h1>
      
      <div className="flex justify-center">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-sm p-6">
          
          {/* Toast Notification */}
          {showToast && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md flex items-center gap-2">
              <span>✅</span>
              <span>Settings saved successfully!</span>
            </div>
          )}
          
          <div className="space-y-6">
            
            {/* Profile Information */}
            <div>
              <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">
                Display Name
              </label>
              <input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="Manager">Manager</option>
                <option value="Staff">Staff</option>
              </select>
            </div>

            {/* Dark Mode Toggle */}
            <div>
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Enable Dark Mode</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    onClick={() => setDarkMode(!darkMode)}
                    className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                      darkMode ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                        darkMode ? 'translate-x-6' : 'translate-x-0.5'
                      } mt-0.5`}
                    />
                  </div>
                </div>
              </label>
            </div>

            {/* Change Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Change Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed"
              />
              <p className="text-xs text-gray-500 mt-1">Password change functionality coming soon</p>
            </div>

            {/* Save Button */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={handleSaveSettings}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
              >
                Save Settings
              </button>
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 