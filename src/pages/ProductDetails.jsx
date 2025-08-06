// src/pages/ProductDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/product'; // ✅ correct import name
import './ProductDetails.css';
import { CardContext } from '../context/CardContext'; // ✅ correct spelling

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id)); // ✅ only one variable used
  const { addToCart } = useContext(CardContext); // ✅ useContext must be inside the component

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="details-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
