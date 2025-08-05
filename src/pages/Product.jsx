import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart, FaStar } from "react-icons/fa";
import { ProductsInfo } from "../assets/ProductsInfo";

const Product = () => {
  const { id } = useParams();
  const product = ProductsInfo.find((product) => product.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="pt-20 bg-[#f4ebd0] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h2>
          <Link
            to="/products"
            className="text-[#b68d40] hover:text-[#d6ad60] font-semibold"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart functionality would go here
    console.log(`Added ${quantity} ${product.name} (${selectedSize}) to cart`);
  };

    return (
    <div className="pt-20 bg-[#f4ebd0] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Breadcrumb */}
        <div className="mb-6 lg:mb-8">
          <Link
            to="/products"
            className="inline-flex items-center text-[#b68d40] hover:text-[#d6ad60] font-semibold text-sm lg:text-base"
          >
            <FaArrowLeft className="mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
                             <img
                 src={product.image}
                 alt={product.name}
                 className="w-full h-[50vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh] object-cover rounded-xl"
               />
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4 lg:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center mb-3 lg:mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 lg:w-5 lg:h-5" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm lg:text-base">(24 reviews)</span>
              </div>
              <p className="text-xl lg:text-2xl font-bold text-[#b68d40] mb-3 lg:mb-4">
                ${product.price}
              </p>
            </div>

            <div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                Product Details
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                {product.detailedDescription}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Select Size
              </h3>
              <div className="grid grid-cols-3 gap-2 lg:gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 lg:py-3 px-3 lg:px-4 border-2 rounded-md font-semibold transition-colors text-sm lg:text-base ${
                      selectedSize === size
                        ? "border-[#b68d40] bg-[#b68d40] text-white"
                        : "border-gray-300 text-gray-700 hover:border-[#b68d40]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Quantity
              </h3>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="w-8 h-8 lg:w-10 lg:h-10 border-2 border-gray-300 rounded-md flex items-center justify-center hover:border-[#b68d40] transition-colors text-base lg:text-lg font-semibold"
                >
                  −
                </button>
                <span className="text-lg lg:text-xl font-semibold text-gray-900 min-w-[2.5rem] lg:min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="w-8 h-8 lg:w-10 lg:h-10 border-2 border-gray-300 rounded-md flex items-center justify-center hover:border-[#b68d40] transition-colors text-base lg:text-lg font-semibold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#b68d40] hover:bg-[#d6ad60] text-white py-3 lg:py-4 px-4 lg:px-6 rounded-md font-semibold text-base lg:text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <FaShoppingCart className="text-sm lg:text-base" />
                <span>
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </span>
              </button>
            </div>

            {/* Product Features */}
            <div className="border-t pt-4 lg:pt-6">
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Features
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#b68d40] rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm lg:text-base">100% Premium Cotton</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#b68d40] rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm lg:text-base">Reinforced Stitching</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#b68d40] rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm lg:text-base">Classic Fit</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#b68d40] rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm lg:text-base">Durable Construction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
