// Products.jsx
import React from "react";
import { ProductsInfo } from "../assets/ProductsInfo";
import { Link } from "react-router-dom";

const Products = () => {


  return (
    <div className="pt-20 bg-[#f4ebd0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Work Shirts Collection
          </h2>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto">
            Browse our selection of high-quality work shirts for every job site.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ProductsInfo.map((product) => (
            <Link
              to={`/product/${product.id}`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain bg-gray-100"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-900 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#b68d40]">
                    ${product.price}
                  </span>
                  <button className="bg-[#b68d40] hover:bg-[#d6ad60] text-white px-4 py-2 rounded-md transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
