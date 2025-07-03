import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage'; // Importa la página 404
import App from './App'; // Usaremos App como nuestro layout base
import Home from '../../pages/Home';
import ProductListPage from './pages/ProductListPage';
import ProductDetail from './pages/ProductDetail';
import Layout from '../Layout';

const router = createBrowserRouter([
  {
    path: '/', // Cuando la URL es '/', renderiza el componente App
    element: <Layout />,
    errorElement: <NotFoundPage />, // Si hay un error o la ruta no existe aquí
    children: [ // Las rutas anidadas se renderizarán dentro de App
      {
        index: true, // Esta es la ruta por defecto para el path '/'
        element: <HomePage />,
      },
      {
        path: 'products', // La URL será /about
        element: <ProductListPage />,
      },
      {
        path: 'products/:id', // La URL será /about
        element: <ProductDetail />,
      },

      // Si quieres una ruta de "catch-all" dentro de este nivel:
      // {
      //   path: '*',
      //   element: <NotFoundPage />,
      // },
    ],
  },
  // Puedes añadir otras rutas de nivel superior aquí si no quieres que usen el layout de App
  // {
  //   path: '/full-screen-map',
  //   element: <FullScreenMapComponent />,
  // },
]);

export default router;