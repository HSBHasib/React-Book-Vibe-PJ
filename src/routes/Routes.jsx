import MainLayout from '../layout/MainLayout.jsx';
import HomePage from '../components/HomePage/HomePage.jsx';
import ErrorPage from '../page/ErrorPage/ErrorPage.jsx';
import { createBrowserRouter } from 'react-router';
import BookDetails from '../page/BookDetails/BookDetails.jsx';
import Books from '../page/Books/Books.jsx';

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
        path: '/listedBooks', Component: Books
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

