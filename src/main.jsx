import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ListedBooks from "./components/ListedBooks.jsx";
import BookDetails from "./components/BookDetails.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/pages-to-read",
        element: "",
      },
      {
        path: "/contact",
        element: "",
      },
      {
        path: "/about",
        element: "",
      },
      {
        path: "/book/:id",
        loader: () => fetch("/data.json"),
        element: <BookDetails />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
