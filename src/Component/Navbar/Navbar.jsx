import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text antialiased block bg-gradient-to-r from-violet-500 to-blue-900">
        <Link to={"/"} className="flex items-center">
          Home
        </Link>
      </li>
      <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-blue-900">
        <Link to={"/foods"} className="flex items-center">
          Foods
        </Link>
      </li>
      <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-blue-900">
        <Link to={"/addProduct"} className="flex items-center">
          Add Product
        </Link>
      </li>
      <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-blue-900">
        <Link to={"/myCart"} className="flex items-center">
          My Cart
        </Link>
      </li>

      <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-blue-900">
        <Link to={"/register"} className="flex items-center">
          Register
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar w-11/12 bg-red-400  mx-auto">
        <div className="navbar-start sm:flex justify-between ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className=" flex justify-center  item-center lg:mr-80 ">
            <img
              src="https://i.ibb.co/BqrMv41/logo-no-background.png"
              alt="logo"
              className="lg:h-24 lg:w-28 h-14 w-16 p-2 relative "
            />
          </div>
          {/* <Link className="btn btn-ghost normal-case text-xl border-2 flex border-blue-600 -ml-9">daisyUI</Link> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end  items-center grid grid-cols-3  justify-between">
          <div className="pl-2  grid lg:grid-cols-5  items-center justify-center  col-span-2">
            <div className="user-name text-xs lg:text-xl lg:font-semibold italic text-blue-400 lg:col-span-3 mb-1 ">
              user name
            </div>
            <div className="ml-14  lg:col-span-2">
              <img
                src="https://i.ibb.co/HnLSwS2/user-removebg-preview.png"
                alt="user"
                className="rounded-full h-7 w-7 lg:h-14 lg:w-14"
              />
            </div>
          </div>
          <div className="flex justify-end ">
            <Link to={'/login'} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
