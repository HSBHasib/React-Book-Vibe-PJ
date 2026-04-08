import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/Routes.jsx';
import BookProvider, { BookContext } from './context/BookContext.jsx';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <BookProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </BookProvider>,
)
