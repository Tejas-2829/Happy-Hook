import React from 'react';

const Dashboard = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-500">Total Products</h2>
          <p className="text-4xl font-bold text-gray-900 mt-2">150</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-500">Pending Orders</h2>
          <p className="text-4xl font-bold text-pink-500 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-500">Total Users</h2>
          <p className="text-4xl font-bold text-gray-900 mt-2">250</p>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
              <th className="py-3 px-4 rounded-l-lg">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 rounded-r-lg">Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4">#001</td>
              <td className="py-3 px-4">Jane Doe</td>
              <td className="py-3 px-4 text-pink-500 font-semibold">Pending</td>
              <td className="py-3 px-4">$25.00</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4">#002</td>
              <td className="py-3 px-4">John Smith</td>
              <td className="py-3 px-4 text-green-500 font-semibold">Shipped</td>
              <td className="py-3 px-4">$50.00</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4">#003</td>
              <td className="py-3 px-4">Emma Watson</td>
              <td className="py-3 px-4 text-green-500 font-semibold">Shipped</td>
              <td className="py-3 px-4">$15.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;