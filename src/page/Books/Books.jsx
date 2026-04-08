import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';
import { useContext } from 'react';
import { BookContext } from '../../context/BookContext';


const Books = () => {
  const {readList, WishList} = useContext(BookContext);

  return (
    <div className='w-[90%] mx-auto'>
        <div >
            <h1 className='bg-gray-100 py-4 my-4 flex justify-center font-bold text-2xl rounded-xl'>Books</h1>
            
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
