import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/MainLayout.jsx';
import HomePage from './components/HomePage/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {index: true, Component: HomePage},
      // {path: '/', Component: }
    ]
    
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
