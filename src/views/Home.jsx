import React, { useContext } from "react";
import { eCommerceContext } from "../context/eCommerceContext";

function Home() {
  const { products, addToCartHandler, addToCart } =
    useContext(eCommerceContext);

  return (
    <div className="homeContainer w-full min-h-[100vh] flex">
      <div className="productContainer flex flex-wrap justify-center gap-6 mt-[20rem]">
        {products.map((product) => {
          const isAdded = addToCart.some(
            (item) => item.id === product.id && item.toggleCart === true
          );
          return (
            <div
              key={product.id}
              className="productCard w-[38.5rem] flex flex-col justify-between items-start hover:scale-[1.03] transition-all duration-[.3s] cursor-pointer"
            >
              <div className="image w-full h-[20rem] p-6 flex justify-center bg-white rounded-t-[15px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[13rem]"
                />
              </div>
              <div className="info w-full flex flex-col flex-1 justify-between items-center gap-4 bg-primary py-4 text-white text-[1.4rem]">
                <h3 className="text-[1.8rem] text-gray-300 font-medium text-center">
                  {product.title.slice(0, 25)}
                </h3>
                <p className="text-[1.9rem] font-medium">${product.price}</p>
                <button
                  onClick={() => addToCartHandler(product)}
                  className={`w-full py-3 text-[1.8rem] font-bold rounded tracking-[1px] ${
                    isAdded ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600"
                  }`}
                  disabled={isAdded}
                >
                  {isAdded ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
