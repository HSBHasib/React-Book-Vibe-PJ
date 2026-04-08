import { IoIosStarOutline } from 'react-icons/io';
import { useLoaderData } from 'react-router'

const AllBooks = () => {
  const data = useLoaderData();
//   const {author, bookName, image, rating, } = data;
  console.log('Loader data = ', data);
  return (
    <div className='w-[90%] mx-auto'>
      <h2 className='font-bold text-3xl text-center'>Books</h2>

      <div className='grid grid-cols-3 gap-6 my-6'>
        {
          data.map(book => {
            return <div className="max-w-sm bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
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
            
          })
        }
      </div>
    </div>
  )
}

export default AllBooks




{/* <svg xmlns="http://w3.org" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg> */}





