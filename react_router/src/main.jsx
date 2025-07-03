// src/main.jsx (para Vite/Create React App)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router'; // Importa tu configuración de enrutador
import './index.css'; // Tus estilos globales
import DataContext from './context/DataContext';


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <DataContext.Provider value={{valor1: "Prueba", valor2: "Context"}}>
          <RouterProvider router={router} />
      </DataContext.Provider>
  </React.StrictMode>,
);