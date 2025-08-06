// src/pages/Checkout.js
import React, { useContext, useState } from 'react';
import { CardContext } from '../context/CardContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CardContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({ name: '', address: '' });

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address) {
      alert('Please fill in all fields');
      return;
    }

    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="checkout">
        <h2>Thank you for your order!</h2>
        <p>We will ship your items to: {form.address}</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="checkout-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              value={form.address}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Place Order</button>
          </form>

          <div className="summary">
            <h3>Order Summary</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ₹{item.price}
                </li>
              ))}
            </ul>
            <p><strong>Total:</strong> ₹{total}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
