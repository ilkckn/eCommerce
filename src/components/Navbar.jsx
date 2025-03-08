import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";

function Navbar() {
  return (
    <div className="navContainer w-full min-h-[10rem] flex justify-between items-center bg-purple-600 px-[5rem]">
      <div className="logo">
        <NavLink to="/" className="text-[2.5rem] text-white font-medium">
          E-Commerce
        </NavLink>
      </div>
      <ul className="navList flex items-center gap-6 text-[1.8rem] text-white">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <Cart />
      </ul>
    </div>
  );
}

export default Navbar;
