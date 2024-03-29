import { Link } from "react-router-dom";

const NavBar = () => {
  const navOption = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/About">ABOUT</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li>
        <Link to="/order"> ONLINE ORDER</Link>
      </li>
      <li>
        <Link to="/Featured"> FUSION FOOD</Link>
      </li>

      <li>
        <Link to="/Faq">FAQ</Link>
      </li>
      <li>
        <Link to="/massage">CLINT MASSAGE</Link>
      </li>
      <li>
        <Link to="/Review">REVIEW</Link>
      </li>
      {/* <li><a>SIGN OUT</a></li> */}
      {/* <li tabIndex={0}>
        <details>
          <summary>dropdown</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-400 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            HENAZ KITCHEN!{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">SIGN OUT</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
