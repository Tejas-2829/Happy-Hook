import React from 'react';

const Users = () => {
  // Sample data - replace with your data fetched from the backend
  const users = [
    { id: 1, name: 'Jane Doe', email: 'jane.doe@example.com' },
    { id: 2, name: 'John Smith', email: 'john.smith@example.com' },
    { id: 3, name: 'Emma Watson', email: 'emma.watson@example.com' },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Users</h1>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
              <th className="py-3 px-4 rounded-l-lg">User ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4 rounded-r-lg">Email</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{user.id}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;