import React, { useState } from "react";

import traditional from "../assets/traditional-1.avif";
import western from "../assets/western-1.jpg";
import saree from "../assets/saree-1.avif";



const featuredProducts = [
  {
    id: 1,
    name: "Awesome Traditional",
    image: traditional,
    price: 49.99,
  },
  {
    id: 2,
    name: "Fantastic saree",
    image: saree,
    price: 99.99,
  },
  {
    id: 3,
    name: "Incredible western",
    image: western,
    price: 74.5,
  },
];
const FeaturedProduct = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full md:h-auto">
      <a href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </a>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-2">₹{product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
const FeaturedProducts = () => {
 

  return (
    <section className="container mx-auto px-4 py-16">
    <h2 className="text-2xl font-semibold mb-8">Featured Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {featuredProducts.map((product) => (
        <FeaturedProduct key={product.id} product={product} />
      ))}
    </div>
  </section>
  );
};

export default FeaturedProducts;
