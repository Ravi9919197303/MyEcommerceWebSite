// src/pages/Admin.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import productsData from '../data/product';
import './Admin.css';

const Admin = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState(productsData);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const id = products.length + 1;
    setProducts([...products, { id, ...newProduct, price: Number(newProduct.price) }]);
    setNewProduct({ name: '', category: '', price: '', image: '' });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  if (!user || !user.isAdmin) {
    return <h2 style={{ padding: '20px' }}>Access denied: Admins only</h2>;
  }

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>

      <form className="admin-form" onSubmit={handleAdd}>
        <h3>Add New Product</h3>
        <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>

      <div className="admin-products">
        <h3>Product List</h3>
        {products.map((product) => (
          <div className="admin-product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <h4>{product.name}</h4>
              <p>₹{product.price} - {product.category}</p>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
