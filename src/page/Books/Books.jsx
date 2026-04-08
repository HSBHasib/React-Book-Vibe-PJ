import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';
import { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { FaAngleDown } from 'react-icons/fa6';


const Books = () => {

  return (
    <div className='w-[90%] mx-auto space-y-2'>
        <div className='text-center'>
            <h1 className='bg-gray-100 py-4 my-4 flex justify-center font-bold text-2xl rounded-xl'>Books</h1>
            
            <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1 text-white bg-[#23BE0A] rounded-lg border-none">Sort By <FaAngleDown /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>
       <Tabs>
            <TabList className='mb-4'>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel>
                <ListedReadList />
            </TabPanel>
            <TabPanel>
                <ListedWishList />
            </TabPanel>
        </Tabs>        
    </div>
  )
}

export default Books
