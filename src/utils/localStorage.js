const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("stored-books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const saveBook = (bookId) => {
  const books = getStoredBooks();
  if (!books.includes(bookId)) {
    books.push(bookId);
    localStorage.setItem("stored-books", JSON.stringify(books));
  }
};

export { getStoredBooks, saveBook };
