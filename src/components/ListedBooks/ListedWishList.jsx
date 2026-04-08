import React, { useContext } from 'react'
import { BookContext } from '../../context/BookContext';
import ListedCards from '../../ui/ListedCards';

const ListedWishList = () => {
  const {wishList} = useContext(BookContext);
    return (
      <div className='space-y-6 mb-10'>
          {
              wishList.map((book, idx) => <ListedCards key={idx} book={book}/>)
          }
      </div>
      
    )
}

export default ListedWishList
