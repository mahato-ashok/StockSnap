import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import HomePage from './landing_pages/home/HomePage'

import AboutPage from './landing_pages/about/AboutPage'
import PricingPage from './landing_pages/pricing/PricingPage'
import ProductsPage from './landing_pages/products/ProductsPage'
import SupportPage from './landing_pages/support/SupportPage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HomePage/>
  <AboutPage/>
  <PricingPage/>
  <ProductsPage/>
  <SupportPage/>
  </StrictMode>,
)
