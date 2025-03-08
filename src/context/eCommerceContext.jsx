import React, { createContext, useEffect, useState } from "react";

export const eCommerceContext = createContext({
  products: [],
  setProducts: () => {},
  men: [],
  setMen: () => {},
  menClothing: () => {},
});

function ECommerceContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [addToCart, setAddToCart] = useState([]);
  const [toggleCart, setToggleCart] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setAddToCart(storedCart);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      menClothing();
      womenClothing();
      electronicsProducts();
      jeweleryProducts();
    }
  }, [products]);

  const menClothing = () => {
    setMen(products.filter((product) => product.category === "men's clothing"));
  };

  const womenClothing = () => {
    setWomen(
      products.filter((product) => product.category === "women's clothing")
    );
  };

  const electronicsProducts = () => {
    setElectronics(
      products.filter((product) => product.category === "electronics")
    );
  };

  const jeweleryProducts = () => {
    setJewelery(products.filter((product) => product.category === "jewelery"));
  };

  const addToCartHandler = (product) => {
    setAddToCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === product.id);

      let updatedCart;
      if (isItemInCart) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [
          ...prevCart,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            description: product.description,
            category: product.category,
            rating: product.rating.rate,
            quantity: 1,
            toggleCart: true,
          },
        ];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCartHandler = (id) => {
    setAddToCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const increaseQuantity = (id) => {
    setAddToCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    })
  };

  const decreaseQuantity = (id) => {
    setAddToCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    })
  };

  return (
    <eCommerceContext.Provider
      value={{
        products,
        setProducts,
        men,
        setMen,
        menClothing,
        women,
        setWomen,
        womenClothing,
        electronics,
        setElectronics,
        electronicsProducts,
        jewelery,
        setJewelery,
        jeweleryProducts,
        addToCartHandler,
        removeFromCartHandler,
        addToCart,
        setAddToCart,
        toggleCart,
        setToggleCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </eCommerceContext.Provider>
  );
}

export default ECommerceContextProvider;