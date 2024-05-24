import { useState } from "react";

const useData = () => {
  const [books, setBooks] = useState([]);
  fetch("data.json")
    .then((data) => data.json())
    .then((data) => setBooks(data));
  return books;
};

export default useData;
