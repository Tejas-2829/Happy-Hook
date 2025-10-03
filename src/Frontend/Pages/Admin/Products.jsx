import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: 'Teddy Bear Keychain', price: 15, stock: 20, image: 'https://via.placeholder.com/60' },
    { id: 2, name: 'Rainbow Cloud', price: 20, stock: 10, image: 'https://via.placeholder.com/60' },
    { id: 3, name: 'Bunny with Heart', price: 18, stock: 5, image: 'https://via.placeholder.com/60' },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-pink-600">
          + Add New Product
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
              <th className="py-3 px-4 rounded-l-lg">Product</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Stock</th>
              <th className="py-3 px-4 rounded-r-lg">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center space-x-3">
                  <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg" />
                  <span>{product.name}</span>
                </td>
                <td className="py-3 px-4">${product.price.toFixed(2)}</td>
                <td className="py-3 px-4">{product.stock}</td>
                <td className="py-3 px-4 flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                  <button className="text-red-500 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;