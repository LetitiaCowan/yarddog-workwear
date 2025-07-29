import React from 'react'
export function ProductCategories() {
  const categories = [
    {
      title: 'Safety Gear',
      description: 'Hard hats, safety vests, protective eyewear',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Work Uniforms',
      description: 'Coveralls, work shirts, professional attire',
      image:
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Safety Footwear',
      description: 'Steel toe boots, slip-resistant shoes',
      image:
        'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Tools & Equipment',
      description: 'Hand tools, power tools, tool storage',
      image:
        'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]
  return (
    <section className="py-16 bg-[#f4ebd0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto">
            Find exactly what you need for your job site with our comprehensive
            selection of workwear and safety equipment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-900 mb-4">{category.description}</p>
                <button className="text-[#b68d40] hover:text-[#d6ad60] font-medium">
                  Shop Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories;
