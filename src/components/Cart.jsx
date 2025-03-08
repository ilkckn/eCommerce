import React, { useContext, useState, useEffect } from "react";
import { eCommerceContext } from "../context/eCommerceContext";
import { NavLink } from "react-router-dom";

function Cart() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const {
    addToCart,
    removeFromCartHandler,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(eCommerceContext);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setCartIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setCartIsOpen(false);
    }, 500); 
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div
      className="cartContainer relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10 text-white cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
      <div className="quantity absolute -bottom-3 -right-2 -mt-2 -mr-2 bg-white text-black w-8 h-8 flex justify-center items-center rounded-full">
        <p className="text-[1.5rem] text-pink-800 font-bold">
          {addToCart.length}
        </p>
      </div>

      {cartIsOpen && (
        <div className="cartItemsContainer flex flex-col items-center gap-4 fixed w-[53rem] h-[100vh] bg-white shadow-lg top-0 right-[0] px-1 py-10 overflow-y-scroll z-10">
          <h1 className="cart-heading text-[2.5rem] text-black underline uppercase font-extrabold tracking-[1px] mb-[2rem]">Cart Products</h1>
          {addToCart.map((item) => (
            <div
              key={item.id}
              className="cartItem w-[70%] flex justify-between items-center mb-4 border-b-[1px] border-b-primary pb-8"
            >
              <div className="image-info">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[10rem] h-[10rem] rounded-[15px]"
                />
                <div className="info flex flex-col justify-center gap-4">
                  <h3 className=" text-[1.6rem] text-black font-medium">
                    {item.title.slice(0, 20)}
                  </h3>
                  <p className="text-[1.7rem] text-primary font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="btns flex flex-col items-center gap-3">
                <div className="increase-decrease-quantity w-full flex justify-between items-center gap-5">
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="increase inline-flex items-center justify-center w-[2.5rem] h-[2.5rem] bg-primary rounded-[5px]"
                  >
                    +
                  </button>
                  <p className="text-primary">{item.quantity}</p>
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="decrease inline-flex items-center justify-center w-[2.5rem] h-[2.5rem] font-bold bg-primary rounded-[5px]"
                  >
                    -
                  </button>
                </div>
                <div className="delete">
                  <button
                    onClick={() => removeFromCartHandler(item.id)}
                    className="inline-flex items-center justify-center w-[13rem] h-[3rem] text-[1.4rem] tracking-[.5px] bg-red-700 rounded-[5px]"
                  >
                    Remove
                  </button>
                </div>
                <div className="gotCheckOut">
                  <NavLink to="/cart">
                    <button className="inline-flex items-center justify-center w-[13rem] h-[3rem] text-[1.4rem] tracking-[.5px] bg-blue-500 rounded-[5px]">
                      Go to Check Out
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;