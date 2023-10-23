import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
// console.log(user)
// console.log(user.displayName)
// console.log(user.photoURL)
// console.log( user, user.photoURL, user.displayName)
  // ::: LOG OUT BUTTON HANDLER :::
  const handelLogOut = () => {
    logOut()
    .then(result =>{
      console.log(result.user)
      setSuccessMessage("Log Out SuccessFully")
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: successMessage,
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error=>{
      console.error(error)
      setErrorMessage("You are Logged out " )
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: errorMessage,
        showConfirmButton: false,
        timer: 1500
      })
    })

  }



  const navLinks = (
    <>
      <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text antialiased block bg-gradient-to-r from-violet-500 to-blue-900 ">
        <Link to={"/"} className="flex items-center">
          Home
        </Link>
      </li>
      <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-blue-900">
        <Link to={"/foods"} className="flex items-center">
          Foods
        </Link>
      </li>
      {
        user && 
        <>
        <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-blue-900">
        <Link to={"/addProduct"} className="flex items-center">
          Add Product
        </Link>
      </li>
      <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-blue-900">
        <Link to={"/addToCartPage"} className="flex items-center">
          My Cart
        </Link>
      </li>
        </>
      }

      {
        !user && 
        <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-blue-900">
        <Link to={"/register"} className="flex items-center">
          Register
        </Link>
      </li>
      }
    </>
  );

  return (
    <div>
      <div className="navbar w-11/12 mx-auto">
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
              className="lg:h-24 lg:w-28 h-14 w-16 p-2  "
            />
          </div>
          {/* <Link className="btn btn-ghost normal-case text-xl border-2 flex border-blue-600 -ml-9">daisyUI</Link> */}
        </div>
        <div className="navbar-center hidden bg-slate-100 lg:mr-5 lg:p-2 rounded-full lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end  items-center grid grid-cols-5  justify-center">
          <div className="lg:px-10 bg-sky-100 lg:p-2  rounded-full grid grid-cols-1 lg:grid-cols-5 justify-center items-center   col-span-4">
            <div className="user-name lg:col-span-3 mb-1 flex justify-center ">
              <h2 className="text-xs lg:text-xl lg:font-semibold italic text-blue-400">{user?.displayName}</h2>
            </div>
            <div className="ml-14  lg:col-span-2">
            <img 
                src={user?.photoURL || "https://i.ibb.co/HnLSwS2/user-removebg-preview.png"}
                alt="https://i.ibb.co/HnLSwS2/user-removebg-preview.png"
                className="rounded-full h-7 w-7 lg:h-14 lg:w-14"
              />
              
            </div>
          </div>
          <div className="flex justify-end col-span-1 ">
            {
              user ? 
              <>
              <Link onClick={handelLogOut} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Log Out
            </Link>
            </> :
            <Link to={'/login'} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Log in
            </Link>
              
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
