import React from 'react';

const Orders = () => {
  const orders = [
    { id: '#001', customer: 'Jane Doe', status: 'Pending', total: 25.00 },
    { id: '#002', customer: 'John Smith', status: 'Shipped', total: 50.00 },
    { id: '#003', customer: 'Emma Watson', status: 'Delivered', total: 15.00 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'text-pink-500';
      case 'Shipped':
        return 'text-blue-500';
      case 'Delivered':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Orders</h1>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
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
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.customer}</td>
                <td className={`py-3 px-4 font-semibold ${getStatusColor(order.status)}`}>
                  {order.status}
                </td>
                <td className="py-3 px-4">${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;