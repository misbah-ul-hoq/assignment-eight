const ListedBooks = () => {
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

      <div className="tabs-wrapper flex">
        <div role="tablist" className="tabs tabs-boxed">
          <a role="tab" className="tab tab-active">
            Tab 1
          </a>
          <a role="tab" className="tab">
            Tab 2
          </a>
        </div>
      </div>
    </section>
  );
};

export default ListedBooks;
