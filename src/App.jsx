import Footer from './Frontend/Components/Footer/Footer.jsx'
import Header from './Frontend/Components/Header/Navbar.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header />
      <div className='pt-19'>
      <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
