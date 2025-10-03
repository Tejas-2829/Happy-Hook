import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminLayout = () => {
  const location = useLocation();
  const activePage = location.pathname.split('/').pop() || 'Dashboard';

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans antialiased">
      <Sidebar activePage={activePage} />
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;