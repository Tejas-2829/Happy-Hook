import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Herosection.jsx'
import Shop from './Components/Shop/Shop.jsx'
import About from './Components/Home/NewArrival.jsx'
import './index.css'
import App from './App.jsx'
import NewArrival from './Components/Home/NewArrival.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={
        <>
        <Home />
        <NewArrival />
        </>      
      } /> 
      <Route path='/shop' element={<Shop />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <RouterProvider router={router} />
    </>
  </StrictMode>,
)
