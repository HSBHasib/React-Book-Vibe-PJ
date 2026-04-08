import { IoIosStarOutline } from 'react-icons/io';
import { Link } from 'react-router';

const BookCard = ({book}) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`}>
      <div className="max-w-sm h-[510px] bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="bg-[#F3F3F3] rounded-2xl p-8 mb-6 flex justify-center items-center h-62">
              <img 
                src={book.image} 
                alt={book.bookName} 
                className="h-full object-contain shadow-lg "
              />
            </div>

            <div className="flex gap-2 mb-4">
                <span className="bg-green-50 text-[#23BE0A] px-4 py-1 rounded-full text-sm font-medium">
                  {book.tags[0]}
                </span>
                <span className="bg-green-50 text-[#23BE0A] px-4 py-1 rounded-full text-sm font-medium">
                  {book.tags[1]}
                </span>
            </div>


            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-[#131313]">{book.bookName}</h2>
              <p className="text-[#131313CC] font-medium border-b border-dashed border-gray-300 pb-4">
                By : {book.author}
              </p>
            </div>

            <div className="flex justify-between items-center pt-4 text-[#131313CC] font-medium">
              <span>{book.category}</span>
              <div className="flex items-center gap-1.5">
                <span>{book.rating}</span>
                <IoIosStarOutline size={20} />
              </div>
            </div>
          </div>
    </Link>
  )
}

export default BookCard
