import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './Frontend/Components/Home/Herosection.jsx';
import Shop from './Frontend/Components/Shop/Shop.jsx';
import './index.css';
import App from './App.jsx';
import NewArrival from './Frontend/Components/Home/NewArrival.jsx';
import AboutUs from './Frontend/Components/AboutUs/AboutUs.jsx';
import ContactUs from './Frontend/Components/ContactUs/ContactUs.jsx';

// Import the new AdminLayout component
import AdminLayout from './Frontend/Pages/Admin/AdminLayout.jsx';
import Dashboard from './Frontend/Pages/Admin/Dashboard.jsx';
import Products from './Frontend/Pages/Admin/Products.jsx';
import Orders from './Frontend/Pages/Admin/Orders.jsx';
import Users from './Frontend/Pages/Admin/Users.jsx';
import Settings from './Frontend/Pages/Admin/Settings.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* Public Routes */}
      <Route index element={
        <>
          <Home />
          <NewArrival />
        </>
      } />
      <Route path='shop' element={<Shop />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='contact' element={<ContactUs />} />

      {/* Correctly nested Admin Panel routes */}
      <Route path='admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='products' element={<Products />} />
        <Route path='orders' element={<Orders />} />
        <Route path='users' element={<Users />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);