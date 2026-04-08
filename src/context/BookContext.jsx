import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {

  const [readList, setReadList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    console.log("currentBook", currentBook);

    const allReadyExists = readList.find(books => books.bookId === currentBook.bookId);

    if(allReadyExists) {
      toast.error(`${currentBook.bookName} book already exits in readList`);
      return;
    } else {
      setReadList([...readList, currentBook])
      toast.success(`${currentBook.bookName} book added to readList`);
    }
  }

  const [wishList, setWishList] = useState([]);

  const handleMarkAsWish = (currentBook) => {
    console.log("currentBook", currentBook);

    const isExistInWishList = readList.find( books => books.bookId  === currentBook.bookId);
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

