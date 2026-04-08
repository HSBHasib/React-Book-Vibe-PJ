import { useScroll } from 'framer-motion';
import { useContext, useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { BookContext } from '../../context/BookContext';

const BookDetails = () => {
  const bookData = useLoaderData();
  const {bookId: bookParamId} = useParams();

  let navigate = useNavigate();
  
  const expectedBook = bookData.find(book => book.bookId === Number(bookParamId));
  const {
    bookId,
    image, 
    bookName, 
    author, 
    category, 
    review, 
    tags, 
    totalPages, 
    publisher, 
    yearOfPublishing, 
    rating
  } = expectedBook;

  const {readList, setReadList, handleMarkAsRead, WishList, setWishList, handleMarkAsWish} = useContext(BookContext);

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 py-5">
      <div className="relative bg-white rounded-xl shadow-sm flex flex-col md:flex-row max-w-[90%] w-full overflow-hidden border border-gray-100">
        
        {/* Left Side: Book Cover Image */}
        <div className="bg-[#F3F4F6] p-12 md:w-1/2 flex items-center justify-center">
          <img 
            src={image} 
            alt={bookName} 
            className="w-full h-auto max-w-[300px] shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side: Book Information */}
        <div className="p-8 md:w-1/2 flex flex-col">
          <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 font-serif">
            {bookName}
            </h1>
            <FaDeleteLeft onClick={() => navigate(-1)} className='absolute right-4 top-4 cursor-pointer active:scale-95' size={28}/>
            
          </div>
          <p className="text-gray-600 font-medium mb-4 italic">
            By : {author}
          </p>

          <hr className="border-gray-300 mb-3" />
          <p className="text-gray-700 font-medium mb-3">{category}</p>
          <hr className="border-gray-300 mb-3" />

          {/* Review Section */}
          <div className="mb-6 text-sm text-gray-600 leading-relaxed">
            <span className="font-bold text-gray-800">Review : </span>
            {review}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8 items-center">
            <span className="font-bold text-gray-800 text-sm">Tag</span>
            {tags?.map((tag, index) => (
              <span 
                key={index} 
                className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>

          <hr className="border-gray-300 mb-5" />

          {/* Details Table */}
          <div className="grid grid-cols-2 gap-y-3 text-sm mb-6">
            <p className="text-gray-500">Number of Pages:</p>
            <p className="font-bold text-gray-800">{totalPages}</p>
            
            <p className="text-gray-500">Publisher:</p>
            <p className="font-bold text-gray-800">{publisher}</p>
            
            <p className="text-gray-500">Year of Publishing:</p>
            <p className="font-bold text-gray-800">{yearOfPublishing}</p>
            
            <p className="text-gray-500">Rating:</p>
            <p className="font-bold text-gray-800">{rating}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-auto">
            <Link>
              <button onClick={() => handleMarkAsRead(expectedBook)} className="border border-gray-300 px-6 py-2 rounded-md font-semibold text-gray-800 hover:bg-gray-50 transition-colors active:scale-95 cursor-pointer">
                Read
              </button>
            </Link>
            <button onClick={() => handleMarkAsWish(expectedBook)} className="bg-[#59B2C1] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#4a99a6] transition-colors shadow-md shadow-[#59B2C1]/20 active:scale-95 cursor-pointer">
              Wishlist
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BookDetails
