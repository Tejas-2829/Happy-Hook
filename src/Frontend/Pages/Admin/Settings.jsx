import React from 'react';

const Settings = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Client's Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="client@example.com"
            />
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-pink-600"
          >
            Save Changes
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Change Password</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Current Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Confirm New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-pink-600"
          >
            Update Password
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Store Settings</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Store Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Happy Hook"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Contact Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="contact@happyhook.com"
            />
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-pink-600"
          >
            Save Store Settings
          </button>
        </form>
      </div>
    </>
  );
};

export default Settings;