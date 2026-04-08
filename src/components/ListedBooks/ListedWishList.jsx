import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../../context/BookContext';
import ListedCards from '../../ui/ListedCards';

const ListedWishList = ({sorting}) => {
  const {wishList} = useContext(BookContext);
  const [filteredReadList, setFilteredReadList] = useState(wishList);
  
      useEffect(() => {
          if(sorting) {
              if(sorting === 'pages') {
                  const sortedData = [...wishList].sort((a,b) => a.totalPages - b.totalPages);
                  setFilteredReadList(sortedData);
              } else if (sorting === 'rating') {
                  const sortedData = [...wishList].sort((a,b) => a.rating - b.rating);
                  setFilteredReadList(sortedData);
              }
          }
      }, [sorting, wishList]);

  if(filteredReadList.length === 0) {
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
              filteredReadList.map((book, idx) => <ListedCards key={idx} book={book}/>)
          }
      </div>
      
    )
}

export default ListedWishList
