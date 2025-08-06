// src/data/products.js


import sneakerImg from '../assets/sneaker.jpeg';
import hoodiImg from '../assets/hoodie.jpeg';
import TShirtImg from '../assets/t-shirt.jpeg';
import WathcImg from '../assets/watch.jpeg';
import WathcImg1 from '../assets/watch1.jpeg';
import hoodiImg1 from '../assets/hoodi1.jpeg';
const products = [
  {
    id: 1,
    name: "T-Shirt",
    category: "Clothing",
    price: 499,
  // image: "https://dummyimage.com/200x200/ccc/000&text=T-Shirt",
    image:TShirtImg,
  },
  {
    id: 2,
    name: "Sneakers",
    category: "Footwear",
    price: 1499,
    // image: "https://dummyimage.com/200x200/ccc/000&text=Sneakers",
    image: sneakerImg,
  },
  {
    id: 3,
    name: "Wrist Watch",
    category: "Accessories",
    price: 999,
    //  image: "https://dummyimage.com/200x200/ccc/000&text=Watch",
    image:WathcImg,
  },
  {
    id: 4,
    name: "Hoodie",
    category: "Clothing",
    price: 799,
    // image:  "https://dummyimage.com/200x200/ccc/000&text=Hoodie",
    image: hoodiImg,
  },
  {
    id: 5,
    name: "Hoodie",
    category: "Clothing",
    price: 799,
    // image:  "https://dummyimage.com/200x200/ccc/000&text=Hoodie",
     image: hoodiImg1,
  },
  {
    id: 6,
    name: "Wrist Watch",
    category: "Accessories",
    price: 999,
    //  image: "https://dummyimage.com/200x200/ccc/000&text=Watch",
     image:WathcImg1,
  },
];

export default products;
