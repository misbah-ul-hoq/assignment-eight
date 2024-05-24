import { useEffect, useState } from "react";
import {
  getStoredReadBooks,
  getStoredWishListBooks,
} from "../utils/localStorage";
import BookCardContainer from "./listed-books/BookCardContainer";

const ListedBooks = () => {
  const [tab, setTab] = useState("read");

  const [books, setBooks] = useState([]);

  const [readBooks, setReadBooks] = useState([]);

  const [wishlistBooks, setWishlistBooks] = useState([]);

  const localReadBooks = getStoredReadBooks();

  const localWishlistBooks = getStoredWishListBooks();

  const handleTab = (e) => {
    const clickedTab = e.target.id;

    setTab(() => {
      if (clickedTab === "readbooks-tab") {
        return "read";
      } else if (clickedTab === "wishlist-tab") {
        setWishlistBooks(
          books.filter((book) => localWishlistBooks.includes(book.bookId))
        );
        console.log(wishlistBooks);
        return "wishlist";
      }
    });
  };

  useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((data) => {
        setBooks(data);
        setReadBooks(
          data.filter((book) => localReadBooks.includes(book.bookId))
        );
      });
    console.log(books, readBooks);
  }, []);

  return (
    <section className="container-center">
      <div className="title-wrapperr bg-base-200 py-5 my-6 rounded-xl">
        <h1 className="text-4xl font-bold text-center">Books</h1>
      </div>

      <div className="dropdown-wrapper flex justify-center mb-20">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1 btn-accent">
            Sort By
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="tabs-wrapper flex border-b-2 mb-10">
        <div role="tablist" className="tabs tabs-boxed">
          <button
            onClick={handleTab}
            role="tab"
            id="readbooks-tab"
            className={`${tab === "read" && "tab-active"} tab`}
          >
            Read Books
          </button>
          <button
            onClick={handleTab}
            role="tab"
            id="wishlist-tab"
            className={`tab ${tab === "wishlist" && "tab-active"}`}
          >
            WishList Books
          </button>
        </div>
      </div>

      <BookCardContainer books={tab == "read" ? readBooks : wishlistBooks} />
    </section>
  );
};

export default ListedBooks;
