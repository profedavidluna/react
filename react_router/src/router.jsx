import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx';
import NotFound from './pages/NotFound.jsx'; // Componente para rutas no encontradas
import Layout from './components/Layout.jsx'; // Un layout para tu app

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Este layout envuelve todas las rutas hijas
    errorElement: <NotFound />, // Renderiza si una ruta hija no se encuentra o hay un error
    children: [
      {
        index: true, // Esta es la ruta por defecto para el path '/'
        element: <Home />,
      },
      {
        path: 'about', // Ruta relativa a la ruta padre '/'
        element: <About />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:productId', // Parámetro de ruta. Accedes con useParams()
        element: <ProductDetail />,
      },
      // Puedes añadir una ruta de "catch-all" si no usas errorElement en el padre
      // {
      //   path: '*',
      //   element: <NotFound />,
      // },
    ],
  },
  // Opcional: Si quieres rutas que no usen el Layout principal
  // {
  //   path: '/login',
  //   element: <LoginPage />,
  // },
]);

export default router;