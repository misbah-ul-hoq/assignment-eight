import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Listed Books",
    route: "/listed-books",
  },
  {
    name: "Pages To Read",
    route: "/pages-to-read",
  },
  {
    name: "Contact",
    route: "/contact",
  },
  {
    name: "About",
    route: "/about",
  },
];

const Nav = () => {
  return (
    <div className="navbar bg-base-100 p-0 container-center">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.route}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-2xl">
          Book Vibe
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.route}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-primary mr-5">Sign In</button>
        <button className="btn btn-secondary">Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;
