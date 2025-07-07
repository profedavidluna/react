import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx';
import NotFound from './pages/NotFound.jsx'; // Componente para rutas no encontradas
import Layout from './components/Layout.jsx'; // Un layout para tu app
import SubMenuLayout from './components/SubMenuLayout.jsx'; // Un layout para tu app
import Tecnologia from './pages/Tecnologia.jsx';
import Gastronomia from './pages/Gastronomia.jsx';
import Viaje from './pages/Viaje.jsx';
import Blog from './pages/Blog.jsx';
import ReactHookFormMini from './components/forms/ReactHookFormMini.jsx';
import LoginForm from './components/forms/LoginForm.jsx';
import RegistroForm from './components/forms/RegistroForm.jsx';
import RegistroForm2 from './components/forms/RegistroForm2.jsx';
import ReactHookFormAdvanced from './components/forms/ReactHookFormAdvanced.jsx';

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
      {
        path:'blog',
        element: <SubMenuLayout
          title="Nuestro Blog"
          menuItems={[
            { label: 'Últimos Artículos', path: '', end: true }, // Ruta vacía para el índice
            { label: 'Tecnología', path: '/tecnologia' },
            { label: 'Gastronomía', path: '/gastronomia' },
            { label: 'Viajes', path: '/viajes' },
          ]}
        />,
        children: [
          { path:"",index: true, element: <Blog /> }, // Contenido por defecto para /blog
          { path: 'tecnologia', element: <Tecnologia /> },
          { path: 'gastronomia', element: <Gastronomia /> },
          { path: 'viajes', element: <Viaje /> },
        ],
      },
      {
        path:'forms',
        element: <SubMenuLayout
          title="Practica de Forms"
          menuItems={[
            { label: 'Basico', path: '', end: true }, // Ruta vacía para el índice
            { label: 'Login', path: '/login' },
            { label: 'registro', path: '/registro' },
            { label: 'registro2', path: '/registro2' },
             { label: 'avanzado', path: '/avanzado' },
          ]}
        />,
        children: [
          { path:"",index: true, element: <ReactHookFormMini /> }, // Contenido por defecto para /blog
          { path: 'login', element: <LoginForm /> },
          { path: 'registro', element: <RegistroForm /> },
          { path: 'registro2', element: <RegistroForm2 /> },
          { path: 'avanzado', element: <ReactHookFormAdvanced /> },

        ],
      }
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