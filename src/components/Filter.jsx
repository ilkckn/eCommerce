import React from "react";
import { NavLink } from "react-router-dom";

function Filter() {
  return (
    <div className="filterContainer @container w-full max-w-[1600px] fixed top-[10rem] left-1/2 transform -translate-x-1/2 flex justify-center items-center flex-wrap gap-7 z-[1] bg-[#1D232A] py-[2rem]">
      <div className="filters flex justify-center items-center gap-7 @[430px]:flex-wrap @[375px]:gap-4 @[375px]:flex-wrap @[430px]:gap-3 @[768px]:w-[80%] @[768px]:flex-wrap @[768px]:gap-5 ">
        <NavLink to="/">
          <button className="menClothing bg-transparent border border-purple-400 text-purple-400 text-[1.5rem] font-medium px-7 py-5 rounded-[5px] tracking-[1px] hover:bg-purple-400 hover:text-black transition-all duration-[.3s] @[430px]:text-[1.2rem] @[375px]:px-2 @[375px]:py-2 @[375px]:text-[1.2rem] @[430px]:px-3 @[430px]:py-3 @[768px]:text-[1.5rem] @[768px]:px-5 @[768px]:py-5">
            All Products
          </button>
        </NavLink>
        <NavLink to="category/men-clothing">
          <button className="menClothing bg-transparent border border-purple-400 text-purple-400 text-[1.5rem] font-medium px-7 py-5 rounded-[5px] tracking-[1px] hover:bg-purple-400 hover:text-black transition-all duration-[.3s] @[430px]:text-[1.2rem] @[375px]:px-2 @[375px]:py-2 @[375px]:text-[1.2rem] @[430px]:px-3 @[430px]:py-3 @[768px]:text-[1.5rem] @[768px]:px-5 @[768px]:py-5">
            Men's Clothing
          </button>
        </NavLink>
        <NavLink to="category/women-clothing">
          <button className="womenClothing bg-transparent border border-purple-400 text-purple-400 text-[1.5rem] font-medium px-7 py-5 rounded-[5px] tracking-[1px] hover:bg-purple-400 hover:text-black transition-all duration-[.3s] @[430px]:text-[1.2rem] @[375px]:px-2 @[375px]:py-2 @[375px]:text-[1.2rem] @[430px]:px-3 @[430px]:py-3 @[768px]:text-[1.5rem] @[768px]:px-5 @[768px]:py-5">
            Women's Clothing
          </button>
        </NavLink>
        <NavLink to="/category/electronics">
          <button className="electronics bg-transparent border border-purple-400 text-purple-400 text-[1.5rem] font-medium px-7 py-5 rounded-[5px] tracking-[1px] hover:bg-purple-400 hover:text-black transition-all duration-[.3s] @[430px]:text-[1.2rem] @[375px]:px-2 @[375px]:py-2 @[375px]:text-[1.2rem] @[430px]:px-3 @[430px]:py-3 @[768px]:text-[1.5rem] @[768px]:px-5 @[768px]:py-5">
            Electronics
          </button>
        </NavLink>
        <NavLink to="/category/jewelery">
          <button className="jewelery bg-transparent border border-purple-400 text-purple-400 text-[1.5rem] font-medium px-7 py-5 rounded-[5px] tracking-[1px] hover:bg-purple-400 hover:text-black transition-all duration-[.3s] @[430px]:text-[1.2rem] @[375px]:px-2 @[375px]:py-2 @[375px]:text-[1.2rem] @[430px]:px-3 @[430px]:py-3 @[768px]:text-[1.5rem] @[768px]:px-5 @[768px]:py-5">
            Jewelery
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Filter;
