import React, { useContext } from 'react'
import { BookContext } from '../../context/BookContext';
import ListedCards from '../../ui/ListedCards';

const ListedWishList = () => {
  const {wishList} = useContext(BookContext);

  if(wishList.length === 0) {
        return <div className="flex flex-col items-center justify-center p-20 text-center">
        <div className="text-6xl mb-4 opacity-40">
            📂
        </div>
            <h3 className="text-xl font-semibold text-gray-800 ">
                No Data Found
            </h3>
            <p className="text-sm text-gray-500 max-w-[250px]">
                We couldn't find any results.
            </p>
        </div>
  }
    return (
      <div className='space-y-6 mb-10'>
          {
              wishList.map((book, idx) => <ListedCards key={idx} book={book}/>)
          }
      </div>
      
    )
}

export default ListedWishList
