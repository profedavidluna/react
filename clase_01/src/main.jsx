import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BienvenidaApp from './components/Bienvenida/App.jsx'
import AccountApp from './components/Account/App.jsx'
import ProductCardApp from './components/ProductCard/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BienvenidaApp></BienvenidaApp>
    <ProductCardApp></ProductCardApp>
    <AccountApp></AccountApp>
  </StrictMode>,
)
