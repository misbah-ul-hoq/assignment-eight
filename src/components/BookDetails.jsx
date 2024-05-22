import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { getStoredBooks, saveBook } from "../utils/localStorage";
const BookDetails = () => {
  const books = useLoaderData();
  const currentUrl = parseInt(useParams().id);
  const currentBook = books.find((book) => book.bookId === currentUrl);
  const {
    bookId,
    imageUrl,
    title,
    author,
    category,
    review,
    tags,
    pages,
    publisher,
    yearOfPublishing,
    rating,
  } = currentBook;
  console.log(currentBook);

  const handleRead = () => {
    const savedBooks = getStoredBooks();
    if (!savedBooks.includes(bookId)) {
      toast("Congratulations for reading this book");
      saveBook(bookId);
    } else {
      toast.error("You have already read this book");
    }
  };

  const handleWishList = () => {
    const savedBooks = getStoredBooks();
    if (savedBooks.includes(bookId)) {
      toast.error("You have already read this book");
      saveBook(bookId);
    }
  };

  return (
    <div className="container-center grid lg:grid-cols-2 gap-5 my-14">
      <div className="image-area bg-base-200 p-5 rounded-xl flex justify-center">
        <img src={imageUrl.replace("L", "M")} alt={title} className="" />
      </div>

      {/* content area */}
      <div className="content-area space-y-5">
        <h2 className="text-4xl font-bold">{title}</h2>

        <p className="author text-lg font-medium"> By: {author}</p>

        <p className="category border-b-2 border-t-2 py-4">{category}</p>

        <p className="review">
          <span className="font-bold text-lg">Review: </span>
          {review}
        </p>

        <div className="tags-wrapper flex items-center gap-6 border-b-2 pb-6">
          Tags:
          <div>
            {tags.map((tag) => (
              <button key={tag} className="badge badge-accent ml-4 ">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="info-wrapper lg:w-96 space-y-4">
          <div className="flex justify-between items-center gap-5">
            <p>Number of Pages: </p>
            <p className="font-bold">{pages}</p>
          </div>

          <div className="flex justify-between items-center gap-5">
            <p>Publisher: </p>
            <p className="font-bold">{publisher}</p>
          </div>

          <div className="flex justify-between items-center gap-5">
            <p>Year Of Publishing: </p>
            <p className="font-bold">{yearOfPublishing}</p>
          </div>

          <div className="flex justify-between items-center gap-5">
            <p>Rating: </p>
            <p className="font-bold">{rating}</p>
          </div>
        </div>

        <div className="buttons-wrapper flex items-center gap-5">
          <button onClick={handleRead} className="btn">
            Read
          </button>
          <button onClick={handleWishList} className="btn btn-info text-white">
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
