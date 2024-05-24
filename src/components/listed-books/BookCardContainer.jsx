import BookCard from "./BookCard";

const BookCardContainer = ({ books }) => {
  return (
    <div className="grid gap-5">
      {books.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default BookCardContainer;
