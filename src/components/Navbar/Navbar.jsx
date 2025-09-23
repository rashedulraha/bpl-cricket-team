import mainLogoImg from "../../assets/logo.png";
import dollarImg from "../../assets/dollar-1.png";

const Navbar = ({ availableBalance }) => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-zinc-900"
            >
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
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-medium capitalize"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>fixture</a>
              </li>
              <li>
                <a>teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a className="text-xl">
            <figure>
              <img className="w-14 h-auto" src={mainLogoImg} alt="" />
            </figure>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium capitalize text-zinc-500 ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>fixture</a>
            </li>
            <li>
              <a>teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className=" border text-lg font-medium border-gray-400 rounded-full px-2 md:px-3 py-1 flex items-center space-x-2 text-center text-zinc-800">
            <span className="hidden md:flex">{availableBalance}</span>
            <span className="font-bold text-xl capitalize text-center">
              coin
            </span>
            <img
              className="hidden md:flex"
              src={dollarImg}
              alt="Dollar coin img"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
