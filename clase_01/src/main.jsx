import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BienvenidaApp from './components/Bienvenida/App.jsx'
import AccountApp from './components/Account/App.jsx'
import ProductCardApp from './components/ProductCard/App.jsx'
import Button from './components/Styles/CSS/Button.jsx'
import ProductCardStyle from './components/Styles/StyleComponents/ProductCardStyle.jsx'
import AppTailwind from './components/Styles/Tailwind/AppTailwind.jsx'
import ProductListJson from './components/ProductCard/ProductListJson.jsx'
import Bienvenida from './components/Bienvenida/Bienvenida.jsx'
import ContadorSimple from './components/Estados/ContadorSimple.jsx'
import TodoListSimple from './components/Estados/TodoListSimple.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TodoListSimple></TodoListSimple>
  </StrictMode>,
)
