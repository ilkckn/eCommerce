import React from "react";
import { useContext } from "react";
import { eCommerceContext } from "../context/eCommerceContext";

function CheckOut() {
  const {
    addToCart,
    removeFromCartHandler,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(eCommerceContext);

  return (
    <div className="checkoutContainer w-full min-h-[100vh] flex flex-col gap-6">
      <div className="cartContainer w-full flex gap-4">
        {addToCart.map((product) => (
          <div
            key={product.id}
            className="cartCard w-full h-[35rem] flex justify-between items-center gap-[4rem] bg-white px-[3rem] rounded-[5px]"
          >
            <div className="image flex justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-[20rem] h-[15rem]"
              />
            </div>
            <div className="info w-full flex flex-col gap-4">
              <h3 className="inline-flex flex-col gap-3 w-[80%] text-[1.8rem] text-primary font-medium">
                <span className="text-[1.5rem]">
                  <span className="font-bold">Title</span>:{" "}
                  {product.title.slice(0, 25)}
                </span>
                <span className="text-[1.5rem]">
                  <span className="font-bold">Description</span>:{" "}
                  {product.description}
                </span>
                <span className="text-[1.5rem]">
                  <span className="font-bold">Category</span>:{" "}
                  {product.category}
                </span>
                <span className="text-[1.5rem]">
                  <span className="font-bold">Rating</span>: {product.rating}
                </span>
              </h3>
              <div className="quantity w-full flex flex-col gap-4">
                <div className="inc-dec flex items-center gap-4">
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="w-[2.2rem] h-[2.2rem] inline-flex items-center justify-center text-[1.8rem] font-medium bg-transparent text-primary border-[1px] border-primary rounded hover:bg-primary hover:text-white transition-all duration-[.3s]"
                  >
                    <p className="font-medium">+</p>
                  </button>
                  <p className="text-[1.8rem] font-bold">{product.quantity}</p>
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="w-[2.2rem] h-[2.2rem] inline-flex items-center justify-center text-[1.8rem] font-medium bg-transparent text-primary border-[1px] border-primary rounded hover:bg-primary hover:text-white transition-all duration-[.3s]"
                  >
                    <p className="font-medium">-</p>
                  </button>
                </div>
                <button
                  onClick={() => removeFromCartHandler(product.id)}
                  className="remove w-[7rem] text-[1.4rem] font-medium bg-transparent text-red-700 border-[1px] border-red-700 py-1 px-1 rounded hover:bg-red-700 hover:text-white transition-all duration-[.3s]"
                >
                  Remove
                </button>
              </div>
              <p className="text-[1.8rem] font-bold">
                ${product.price * product.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="totalAmount w-full flex justify-end items-center border-b border-b-white pb-4">
        <h3 className="text-[2.2rem] font-medium text-white tracking-[1px]">
          Total Amount: $
          {addToCart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </h3>
      </div>
    </div>
  );
}

export default CheckOut;
