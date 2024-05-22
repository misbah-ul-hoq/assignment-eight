import { Link } from "react-router-dom";
import "./App.css";
import BooksContainer from "./components/BooksContainer";

function App() {
  return (
    <>
      {/* hero section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="max-w-md lg:ml-10">
            <h1 className="text-5xl font-bold mb-7 mt-7  lg:mt-0">
              Books to freshen up your bookshelf
            </h1>

            <Link to="/listed-books" className="btn btn-info">
              Get Started
            </Link>
          </div>
          <img
            src="https://ia801401.us.archive.org/view_archive.php?archive=/32/items/l_covers_0008/l_covers_0008_22.tar&file=0008228691-L.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
      {/* hero section ends */}

      {/* books section starts */}
      <section>
        <h2 className="text-4xl font-bold mt-12 mb-7 text-center">Books</h2>
        <BooksContainer />
      </section>
      {/* books section ends */}
    </>
  );
}

export default App;
