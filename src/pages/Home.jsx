// // src/pages/Home.js
// import React from 'react';

// const Home = () => {
//   return (
//     <div className="home">
//       <h1>Welcome to MyShop</h1>
//       <p>Find the best products here!</p>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';
import products from '../data/product';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProducts = products.filter(product =>
    (category === 'All' || product.category === category) &&
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <h2>Our Products</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Clothing">Clothing</option>
          <option value="Footwear">Footwear</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
