/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookCard = ({ props }) => {
  const { bookId, imageUrl, title, author, category, tags, rating } = props;
  return (
    <Link
      to={`/book/${bookId}`}
      className="card card-compact bg-base-100 shadow-xl border border-primary"
    >
      <figure className="bg-base-200">
        <img src={imageUrl} alt={title} className="w-32 h-44" />
      </figure>
      <div className="card-body">
        <div className="tags-wrapper flex gap-2">
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-accent">
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="border-b-2 border-dashed pb-3 mb-3"> By: {author}</p>
        <div className="flex justify-between items-center">
          <p className="category">{category}</p>

          <div className="rating flex items-center">
            <p> {rating}</p>
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
