import React, { createContext, useState } from 'react';

export const CardContext = createContext();


const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      alert("Item already in cart!");
      return;
    }
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CardContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CardContext.Provider>
  );
};

export default CartProvider;
