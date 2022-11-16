import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

//Import components
import Layout from './layout/Layout';

//import pages
import Index, { loader as ClientesLoader } from './pages/Index';
import NewClient, { action as newClientAction } from './pages/NewClient';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: ClientesLoader,
      },
      {
        path: '/clients/new-client',
        element: <NewClient />,
        action: newClientAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
