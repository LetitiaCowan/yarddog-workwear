import React from 'react'
import { FaShieldAlt } from 'react-icons/fa'
import { FaTruck } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { FaAward } from 'react-icons/fa'

export function Features() {
  const features = [
    {
      icon: FaShieldAlt,
      title: 'Safety Certified',
      description:
        'All products meet or exceed industry safety standards and regulations.',
    },
    {
      icon: FaTruck,
      title: 'Fast Shipping',
      description:
        'Free shipping on orders over $100. Get your gear delivered quickly.',
    },
    {
      icon: FaClock,
      title: '24/7 Support',
      description:
        'Our expert team is here to help you find the right workwear solutions.',
    },
    {
      icon: FaAward,
      title: 'Quality Guarantee',
      description:
        '30-day return policy and lifetime warranty on select premium items.',
    },
  ]
  return (
    <section className="py-16 bg-[#f4ebd0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Yard Dog Workwear?
          </h2>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto">
            We understand the demands of your job. That's why we provide only
            the highest quality workwear and equipment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-[#b68d40]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-900">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Gear Up?
          </h3>
          <p className="text-xl mb-8 text-[#f4ebd0]">
          Join thousands of professionals who trust Yard Dog Workwear for their workwear needs.
          </p>
          <button className="bg-[#b68d40] text-white hover:bg-[#d6ad60] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Start Shopping
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features;
