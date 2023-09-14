import React, { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let existingCartItem = localStorage.getItem('cart');
    if (existingCartItem) {
      const parsedCart = JSON.parse(existingCartItem).map(item => ({
        ...item,
        price: parseFloat(item.price) // Parse the price as a floating-point number
      }));
      setCart(parsedCart);
    }
  }, []);
  

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
