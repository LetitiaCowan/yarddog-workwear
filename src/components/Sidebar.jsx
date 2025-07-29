import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaStar, FaTshirt, FaSocks, FaShoePrints  } from 'react-icons/fa'
import { ImCross } from "react-icons/im";

 

const Sidebar = ({ isOpen, setIsOpen }) => {

  const toggleSidebar = () => {
    setIsOpen(false)
  }


  return (
    <div className={`bg-[#f4ebd0] h-screen w-64 fixed top-0 left-0 z-50 shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className='p-6'>
        <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold text-gray-900 mb-8'>Menu</h2>
        <ImCross  className='text-2xl text-gray-900 mb-8 cursor-pointer' onClick={toggleSidebar} />
        </div>
      
        <nav>
          <ul className='space-y-4'>
            <li>
              <Link to="/" className='flex items-center gap-3 text-gray-900 hover:text-[#b68d40] transition-colors'>
                <FaHome className='text-xl' />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/best-sellers" className='flex items-center gap-3 text-gray-900 hover:text-[#b68d40] transition-colors'>
                <FaStar className='text-xl' />
                <span>Best Sellers</span>
              </Link>
            </li>
            <li className='pt-4'>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>Categories</h3>
              <ul className='space-y-3'>
                <li>
                  <Link to="/category/shirts" className='flex items-center gap-3 text-gray-900 hover:text-[#b68d40] transition-colors'>
                    <FaTshirt className='text-xl' />
                    <span>Shirts</span>
                  </Link>
                </li>
                <li>
                  <Link to="/category/pants" className='flex items-center gap-3 text-gray-900 hover:text-[#b68d40] transition-colors'>
                    <FaSocks className='text-xl' />
                    <span>Pants</span>
                  </Link>
                </li>
                <li>
                  <Link to="/category/shorts" className='flex items-center gap-3 text-gray-900 hover:text-[#b68d40] transition-colors'>
                    <FaShoePrints className='text-xl' />
                    <span>Shorts</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar