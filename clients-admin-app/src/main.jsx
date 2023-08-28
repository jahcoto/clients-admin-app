import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Components
import Layout from './components/Layout';

//Pages
import NewClient from './pages/NewClient';
import Clients, { loader as clientsLoader } from './pages/Clients';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Clients />,
        loader: clientsLoader,
      },
      {
        path: '/clients/new-client',
        element: <NewClient />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
