// src/pages/Cart.js
import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CardContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button onClick={clearCart}>Clear Cart</button>
            <Link to="/checkout"><button>Proceed to Checkout</button></Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
