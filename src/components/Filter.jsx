import React from "react";
import { NavLink } from "react-router-dom";

function Filter() {
  return (
    <div className="filterContainer flex items-center gap-7 mt-8 mb-8">
      <NavLink to="/">
        <button className="menClothing bg-transparent border border-purple-400 text-purple-400 text-[1.5rem] font-medium px-7 py-5 rounded-[5px] tracking-[1px] hover:bg-purple-400 hover:text-black transition-all duration-[.3s]">All Products</button>
      </NavLink>
      <NavLink to="/men-clothing">
        <button className="menClothing bg-transparent border border-purple-400 text-purple-400 text-[1.5rem] font-medium px-7 py-5 rounded-[5px] tracking-[1px] hover:bg-purple-400 hover:text-black transition-all duration-[.3s]">Men's Clothing</button>
      </NavLink>
      <NavLink to="/women-clothing">
        <button className="womenClothing bg-transparent border border-purple-400 text-purple-400 text-[1.5rem] font-medium px-7 py-5 rounded-[5px] tracking-[1px] hover:bg-purple-400 hover:text-black transition-all duration-[.3s]">Women's Clothing</button>
      </NavLink>
      <NavLink to="electronics">
        <button className="electronics bg-transparent border border-purple-400 text-purple-400 text-[1.5rem] font-medium px-7 py-5 rounded-[5px] tracking-[1px] hover:bg-purple-400 hover:text-black transition-all duration-[.3s]">Electronics</button>
      </NavLink>
      <NavLink to="jewelery">
        <button className="jewelery bg-transparent border border-purple-400 text-purple-400 text-[1.5rem] font-medium px-7 py-5 rounded-[5px] tracking-[1px] hover:bg-purple-400 hover:text-black transition-all duration-[.3s]">Jewelery</button>
      </NavLink>
    </div>
  );
}

export default Filter;
