import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav>
      <div className=" Navbar w-full flex flex-col   bg-orange-600">
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 px-4 sm:px-8  py-3">
          <NavLink
            className={({ isActive }) => {
              return isActive ? "nav-link nav-link-active-home" : "nav-link";
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "nav-link nav-link-active" : "nav-link";
            }}
            to="/unUsedStaff"
          >
            Become A Seller
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "nav-link nav-link-active" : "nav-link";
            }}
            to="/unUsedStaff"
          >
            Help and Support
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "nav-link nav-link-active" : "nav-link";
            }}
            to="/unUsedStaff"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "nav-link nav-link-active" : "nav-link";
            }}
            to="/unUsedStaff"
          >
            Sign Up
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "nav-link nav-link-active" : "nav-link";
            }}
            to="/unUsedStaff"
          >
            Language
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
