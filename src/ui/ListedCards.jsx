import { div } from 'framer-motion/client';
import { BiMemoryCard } from 'react-icons/bi';
import { GoPeople } from 'react-icons/go';
import { SlLocationPin } from 'react-icons/sl';
const ListedCards = ({book}) => {
  return (
    <div>
        {/*` Main Card Container */}
        <div className="w-full  bg-white border border-gray-100 rounded-2xl p-6 md:p-5 shadow-sm flex flex-col md:flex-row gap-7 items-start">
            
            {/* Book Image Section */}
            <div className="bg-[#F3F3F3] rounded-2xl p-8 flex items-center justify-center w-full md:w-50 shrink-0 aspect-[4/5]">
            <img 
                src={book.image} 
                alt={book.bookName}  
                className="w-35 shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            </div>
            {/* Content Section */}
            <div className="flex-grow w-full">
            <h2 className="text-3xl font-serif font-bold text-[#131313] mb-2">
                {book.bookName}
            </h2>
            <p className="text-[#131313cc] text-[16px] mb-4">
                By : <span className="font-semibold">{book.author}</span>
            </p>
            {/* Tags Section */}
            <div className="flex flex-wrap items-center gap-4 mb-5">
                <span className="font-bold text-[#131313] mr-2">Tag</span>
                <span className="bg-[#23BE0A0D] text-[#23BE0A] px-5 py-2 rounded-full text-base font-medium">
                #{book.tags[0]}
                </span>
                <span className="bg-[#23BE0A0D] text-[#23BE0A] px-5 py-2 rounded-full text-base font-medium">
                #{book.tags[1]}
                </span>
                
                <div className="flex items-center text-[#131313cc] gap-2 ml-auto md:ml-4">
                <SlLocationPin size={22} />
                Year of Publishing: {book.yearOfPublishing}
                </div>
            </div>
            {/* Publisher Info */}
            <div className="flex flex-wrap items-center gap-8 mb-5 text-[#13131399]">
                <div className="flex items-center gap-1.5 text-[15px]">
                <GoPeople size={22}/>
                Publisher: {book.publisher}
                </div>
                <div className="flex items-center gap-1.5 text-[15px]">
                <BiMemoryCard size={22}/>
                Page {book.totalPages}
                </div>
            </div>
            <hr className="border-gray-300 mb-4" />
            {/* Action Footer */}
            <div className="space-x-5">
                <span className="bg-[#328EFF26] text-[15px] text-[#328EFF] px-6 py-2.5 rounded-full ">
                Category: {book.category}
                </span>
                <span className="bg-[#FFAC3326] text-[15px] text-[#FFAC33] px-6 py-2.5 rounded-full ">
                Rating: {book.rating}
                </span>
                <button className="bg-[#23BE0A] text-[15px] text-white px-7 py-2.5 rounded-full font-semibold hover:bg-[#1a8d07] transition-all active:scale-95 ml-auto">
                View Details
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ListedCards

