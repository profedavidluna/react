import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BienvenidaApp from './components/Bienvenida/App.jsx'
import AccountApp from './components/Account/App.jsx'
import ProductCardApp from './components/ProductCard/App.jsx'
import Button from './components/Styles/CSS/Button.jsx'
import ProductCardStyle from './components/Styles/StyleComponents/ProductCardStyle.jsx'
import AppTailwind from './components/Styles/Tailwind/AppTailwind.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button>Hola</Button>
    <ProductCardStyle></ProductCardStyle>
    <AppTailwind></AppTailwind>
  </StrictMode>,
)
