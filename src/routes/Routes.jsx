import MainLayout from '../layout/MainLayout.jsx';
import HomePage from '../components/HomePage/HomePage.jsx';
import ErrorPage from '../page/ErrorPage/ErrorPage.jsx';
import { createBrowserRouter } from 'react-router';
import BookDetails from '../page/ErrorPage/BookDetails/BookDetails.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('/booksData.json'),
        Component: HomePage
      },
      {
        path: '/bookDetails/:bookId', 
        loader: () => fetch('/booksData.json'),
        Component: BookDetails
      }
    ],
    errorElement: <ErrorPage />
    
  },
]);

