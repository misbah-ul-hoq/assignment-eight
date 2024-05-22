import { useLoaderData, useParams } from "react-router-dom";

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
  return (
    <div className="container-center grid lg:grid-cols-2 gap-5 my-14">
      <div className="image-area bg-base-200 p-5 rounded-xl flex justify-center">
        <img src={imageUrl} alt={title} className="" />
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
      </div>
    </div>
  );
};

export default BookDetails;
