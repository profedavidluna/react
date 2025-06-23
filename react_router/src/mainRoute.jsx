import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AppRoute from './AppRoute'
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>
);