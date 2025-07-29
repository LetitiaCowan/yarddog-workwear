// Products.jsx
import React from 'react';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Classic Work Shirt",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Durable cotton work shirt with reinforced stitching"
    },
    {
      id: 2,
      name: "Long Sleeve Utility Shirt",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Heavy-duty long sleeve shirt with multiple pockets"
    },
    {
      id: 3,
      name: "High-Visibility Work Shirt",
      price: 44.99,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Safety-rated high-visibility work shirt with reflective strips"
    },
    {
      id: 4,
      name: "Moisture-Wicking Performance Shirt",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Breathable performance shirt for hot work environments"
    },
    {
      id: 5,
      name: "Flame-Resistant Work Shirt",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "FR-rated work shirt for hazardous environments"
    },
    {
      id: 6,
      name: "Pocket T-Shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comfortable cotton t-shirt with chest pocket"
    },
    {
      id: 7,
      name: "Button-Up Work Shirt",
      price: 42.99,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Professional button-up shirt with reinforced collar"
    },
    {
      id: 8,
      name: "Quick-Dry Work Shirt",
      price: 47.99,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Fast-drying work shirt with UV protection"
    }
  ];

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
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}