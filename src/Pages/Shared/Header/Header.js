import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleUserLogout = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link>Reviews</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
      {user?.uid && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost md:hidden ">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className=" normal-case text-xl">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-end">
          <div className="hidden md:flex ">
            <ul className="menu menu-horizontal p-0">{navItems}</ul>
          </div>
          <div className="">
            {user?.uid ? (
              <div className="flex items-center ml-8">
                <button
                  onClick={handleUserLogout}
                  className="btn-ghost px-5 py-2"
                >
                  Logout
                </button>
                <div className="w-8 rounded-full ml-2">
                  <img src={user?.photoURL} alt="" title="" />
                </div>
              </div>
            ) : (
              <div className="ml-8">
                <Link to="/login">
                  <button className="btn-ghost px-5 py-2">Login</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
