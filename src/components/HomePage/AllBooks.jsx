import { useLoaderData } from 'react-router'
import BookCard from '../../ui/BookCard';

const AllBooks = () => {
  const data = useLoaderData();
  return (
    <div className='w-[90%] mx-auto flex flex-col items-center'>
      <h2 className='font-bold text-3xl text-center'>Books</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6'>
        {
          data.map((book, idx) => {
            return <BookCard key={idx} book={book}/>
          })
        }
      </div>
    </div>
  )
}

export default AllBooks
