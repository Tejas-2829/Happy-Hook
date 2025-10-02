import { useState } from 'react'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Navbar.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
