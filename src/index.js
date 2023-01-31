import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hooks from './componentesFetch/Hooks';
import Producto from './componentesFetch/Producto';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Hooks></Hooks>
  },
  {
    path: '/Producto/:id',
    element: <Producto ></Producto>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={browserRouter} />
  </React.StrictMode>
);


reportWebVitals();
