import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="absolute top-0 left-0 z-10 flex items-center justify-between w-full p-3 sm:px-6 text-white bg-black bg-opacity-60">
        <Link
          to={"/"}
          className="sm:p-1 sm:px-5 py-[2px] px-3 text-[12px] sm:text-lg text-black bg-white rounded w-fit "
        >
          Logo
        </Link>
        <div>
          <ul className="flex flex-wrap items-center sm:gap-4 gap-2">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `nav_link ${isActive ? "text-custom-link-blue" : "text-white"}`
              }
            >
              Where to recycle?
            </NavLink>
            <NavLink
              to={"/resourses"}
              className={({ isActive }) =>
                `nav_link ${isActive ? "text-custom-link-blue" : "text-white"}`
              }
            >
              Resources
            </NavLink>
            <Link to={"/signIn"} className="sign_in_btn">
              Sign In
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
