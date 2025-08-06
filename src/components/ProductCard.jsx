// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
        <button>Add to Cart</button>
      </Link>
    </div>
  );
};

export default ProductCard;
