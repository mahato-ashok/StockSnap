import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import HomePage from './landing_pages/home/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutPage from './landing_pages/about/AboutPage'
import PricingPage from './landing_pages/pricing/PricingPage'
import ProductsPage from './landing_pages/products/ProductsPage'
import SupportPage from './landing_pages/support/SupportPage'
import SignUp from './landing_pages/signup/SignUp'
import Footer from './landing_pages/Footer';
import Navbar from './landing_pages/Navbar';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path = "/" element={<HomePage/>}/>
     <Route path = "/about" element={<AboutPage/>}/>
    <Route path = "/pricing" element={<PricingPage/>}/>
    <Route path = "/products" element={<ProductsPage/>}/>
    <Route path = "/support" element={<SupportPage/>}/>
    <Route path = "/signup" element={<SignUp/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
