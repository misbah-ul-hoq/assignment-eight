const getStoredWishListBooks = () => {
  const wishlistBooks = localStorage.getItem("wishlist-books");
  if (wishlistBooks) {
    return JSON.parse(wishlistBooks);
  }
  return [];
};

const getStoredReadBooks = () => {
  const storedReadBooks = localStorage.getItem("read-books");
  if (storedReadBooks) {
    return JSON.parse(storedReadBooks);
  }
  return [];
};

const saveReadBook = (bookId) => {
  const books = getStoredReadBooks();
  if (!books.includes(bookId)) {
    books.push(bookId);
    localStorage.setItem("read-books", JSON.stringify(books));
  }
};

const saveWishListBooks = (bookId) => {
  const books = getStoredWishListBooks();
  if (!books.includes(bookId)) {
    books.push(bookId);
    localStorage.setItem("wishlist-books", JSON.stringify(books));
  }
};

export {
  getStoredReadBooks,
  getStoredWishListBooks,
  saveReadBook,
  saveWishListBooks,
};
