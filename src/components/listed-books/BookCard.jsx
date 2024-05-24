import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
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
  } = book;
  return (
    <div className="book-card gap-5 grid grid-cols-12 border-2 rounded-2xl p-4">
      <div className="img-wrapper bg-base-200 col-span-3 flex justify-center items-center py-5 rounded-xl">
        {" "}
        <img className="w-32 h-40 object-cover" src={imageUrl} alt="" />
      </div>

      <div className="content-wrapper col-span-9 space-y-4">
        <h3 className="text-xl font-medium">{title}</h3>

        <p>By: {author}</p>

        <div className="tags-wrapper flex gap-5">
          Tags:
          <div className="flex items-center gap-2">
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-accent">
                accent
              </div>
            ))}
          </div>
        </div>

        <p className="border-b-2 border-dashed pb-4">Pages: {pages}</p>

        <div className="flex items-center gap-4">
          <button className="btn btn-secondary btn-outline ">{category}</button>
          <button className="btn btn-info btn-outline ">{rating}</button>
          <Link to={`/book/${bookId}`} className="btn btn-accent">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
