// ReadList
const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem('readList');

    if(allReadList) return JSON.parse(allReadList);
    return []
}

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);

    if(!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem('readList', JSON.stringify(allBooks));
    }
}


// WishList
const getAllWishistFromLocalDB = () => {
    const allWishList = localStorage.getItem('wishList');

    if(allWishList) return JSON.parse(allWishList);
    return []
}

const addWishListToLocalDB = (book) => {
    const allBooks = getAllWishistFromLocalDB();
    const isAllreadyExist = allBooks.find(bk => bk.bookId === book.bookId);

    if(!isAllreadyExist) {
        allBooks.push(book);
        localStorage.setItem('wishList', JSON.stringify(allBooks));
    }
}


export {
    getAllReadListFromLocalDB,
    addReadListToLocalDB,
    getAllWishistFromLocalDB,
    addWishListToLocalDB
}