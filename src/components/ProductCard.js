// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ product, addToCart }) => {
  // ✅ Force price to USD with $ symbol
  const formatPrice = (price) =>
    `$${price.toFixed(2)}`;

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition duration-200">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600 mb-1">{product.company}</p>
      <p className="text-sm text-gray-500">{product.description}</p>

      {/* ✅ Always show USD with $ */}
      <p className="text-lg font-bold mt-2 text-green-600">
        {formatPrice(product.price)}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        🛒 Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
