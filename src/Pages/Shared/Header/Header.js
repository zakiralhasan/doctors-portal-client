import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleUserLogout = () => {
    logOutUser()
      .then(() => { })
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
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <GiHamburgerMenu className="text-xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className=" normal-case text-xl sm:mr-4">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex ">
            <ul className="menu menu-horizontal p-0">{navItems}</ul>
          </div>
          <div className="flex items-center sm:ml-8">
            <input type="checkbox" className="toggle" />
          </div>
          <div className="">
            {user?.uid ? (
              <div className="flex items-center sm:ml-8">
                <button
                  onClick={handleUserLogout}
                  className="btn-ghost px-3 sm:px-5 py-2"
                >
                  Logout
                </button>
                <div className="w-8 rounded-full ml-2">
                  <label htmlFor="dashboard-drawer" className="drawer-button lg:hidden"><img className="rounded-full" src={user?.photoURL} alt="" /></label>
                  <img className="rounded-full lg:block hidden" src={user?.photoURL} alt="" title="" />
                </div>
              </div>
            ) : (
              <div className="flex items-center sm:ml-8">
                <Link to="/login">
                  <button className="btn-ghost px-3 sm:px-5 py-2 ">
                    Login
                  </button>
                </Link>
                <FaUserAlt className="ml-1" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
