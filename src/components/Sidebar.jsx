import { Link } from "react-router-dom";
import {
  FaHome,
  FaStar,
  FaTshirt,
  FaSocks,
  FaShoePrints,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`bg-[#f4ebd0] h-screen w-80 fixed top-0 left-0 z-50 shadow-lg transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
          <ImCross
            className="text-2xl text-gray-900 cursor-pointer clickable"
            onClick={toggleSidebar}
          />
        </div>

        <nav>
          <div className="space-y-4">
            {/* Home Block */}
            <Link
              onClick={() => setIsOpen(false)}
              to="/"
              className="block w-full bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
            >
              <div className="flex justify-center items-center gap-2">
                <FaHome className="text-2xl text-gray-700" />
                <span className="font-semibold text-gray-900">HOME</span>
              </div>
            </Link>

            {/* Best Sellers Block */}
            <Link
              to="/best-sellers"
              className="block w-full bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
            >
              <div className="flex justify-center items-center gap-2">
                <FaStar className="text-2xl text-gray-700" />
                <span className="font-semibold text-gray-900">
                  BEST SELLERS
                </span>
              </div>
            </Link>

            {/* Categories Section */}
            <div className="pt-4 flex flex-col justify-start">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">
                CATEGORIES
              </h3>

              <div className="space-y-3">
                {/* Shirts Block */}
                <Link
                  to="/category/shirts"
                  className="block w-full bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
                >
                  <div className="flex justify-center items-center gap-2 text-center">
                    <FaTshirt className="text-2xl text-gray-700" />
                    <span className="font-semibold text-gray-900">SHIRTS</span>
                  </div>
                </Link>

                {/* Pants Block */}
                <Link
                  to="/category/pants"
                  className="block w-full bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
                >
                  <div className="flex justify-center items-center gap-2 text-center">
                    <FaSocks className="text-2xl text-gray-700" />
                    <span className="font-semibold text-gray-900">PANTS</span>
                  </div>
                </Link>

                {/* Shorts Block */}
                <Link
                  to="/category/shorts"
                  className="block w-full bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
                >
                  <div className="flex justify-center items-center gap-2 text-center">
                    <FaShoePrints className="text-2xl text-gray-700" />
                    <span className="font-semibold text-gray-900">SHORTS</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
