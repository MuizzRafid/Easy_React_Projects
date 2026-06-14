import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-col sm:flex-row  items-center bg-gray-700 p-3">
      <div className="flex-1 mb-2 sm:m-auto">
        <h1 className="text-xl italic font-semibold tracking-wide">
          MyPasteApp
        </h1>
      </div>
      <div className=" flex flex-row justify-center gap-4">
        <NavLink
          className="px-5 py-2 rounded bg-gray-700 text-2xl font-bold"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className="px-5 py-2 rounded bg-gray-700 text-2xl font-bold"
          to="/pastes"
        >
          Pastes
        </NavLink>
      </div>
      <div className="flex-1 "></div>
    </div>
  );
};

export default NavBar;
