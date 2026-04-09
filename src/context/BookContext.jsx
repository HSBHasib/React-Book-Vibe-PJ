import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishistFromLocalDB } from '../utils/localDB';

export const BookContext = createContext();

const BookProvider = ({children}) => {

  // ReadList
  const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());
  const handleMarkAsRead = (currentBook) => {
    const allReadyExists = readList.find(books => books.bookId === currentBook.bookId);
    addReadListToLocalDB(currentBook);

    if(allReadyExists) {
      toast.error(`${currentBook.bookName} book already exits in readList`);
      return;
    } else {
      setReadList([...readList, currentBook])
      toast.success(`${currentBook.bookName} book added to readList`);
    }
  }

  // WishList
  const [wishList, setWishList] = useState(() => getAllWishistFromLocalDB());
  const handleMarkAsWish = (currentBook) => {
    const isExistInWishList = readList.find( books => books.bookId  === currentBook.bookId);
    addWishListToLocalDB(currentBook);

    if(isExistInWishList) {
      toast.error(`${currentBook.bookName} book already exits in readList`);
      return;
    }

    const allReadyExists = wishList.find(books => books.bookId === currentBook.bookId);

    if(allReadyExists) {
      toast.error(`${currentBook.bookName} book already exits in wishList`);
      return;
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} book added to wishList`);
    }
  }


  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleMarkAsWish
  };

  return <BookContext.Provider value={data}>
    {children}
  </BookContext.Provider>
}

export default BookProvider

