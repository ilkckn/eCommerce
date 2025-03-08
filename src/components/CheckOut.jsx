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
    <div className="checkoutContainer w-full min-h-[100vh] flex gap-6">
      <div className="total-products w-full min-h-[100vh] flex relative">
        <div className="cartContainer w-[75%] flex flex-col gap-4 mt-[19rem]">
          {addToCart.map((product) => (
            <div
              key={product.id}
              className="cartCard w-full min-h-[35rem] flex justify-between items-center gap-[4rem] bg-white px-[3rem] rounded-[5px] py-10"
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
                    <p className="text-[1.8rem] font-bold">
                      {product.quantity}
                    </p>
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

        <div className="totalAmount w-[24.5%] min-h-[54vh] flex flex-col justify-between absolute right-[0] [top-[19rem] bg-gray-100 rounded-[5px] p-4 border-l mt-[19rem] px-10 py-6">
          <div className="products-list flex flex-col gap-6">
            {addToCart.map((product) => (
              <div
                key={product.id}
                className="totalProducts w-full flex justify-between items-center"
              >
                <div className="image-title flex items-center gap-8">
                  <img src={product.image} className="w-10" alt="" />
                  <p className="text-[1.6rem] font-normal">
                    {product.title.slice(0, 20)}
                  </p>
                </div>
                <p className="text-[1.6rem] font-bold text-[color:#1D232A]">
                  ${product.price * product.quantity}
                </p>
              </div>
            ))}
          </div>
          <h3 className="flex gap-2 text-[2.2rem] font-medium text-[color:#1D232A] tracking-[1px] mb-4">
            <span className="underline [text-decoration-color:#1D232A] underline-offset-[.5rem]">Total Amount:</span>
            {addToCart.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            ).toFixed(2)}
            $
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
