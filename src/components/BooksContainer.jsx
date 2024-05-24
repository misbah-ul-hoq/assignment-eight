import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const BooksContainer = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="container-center grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
      {books.map((book) => (
        <BookCard key={book.bookId} props={book} />
      ))}
    </div>
  );
};

export default BooksContainer;
