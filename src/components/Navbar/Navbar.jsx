import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";
import CartModal from "../CartModal/CartModal";

const Navbar = ({ cartItems, clearCart,}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = (page) => {
    if (page === "login") {
      navigate("/login");
    } else if (page === "register") {
      navigate("/register");
    } else if (page === "logout") {
      navigate("/logout");
    }
    setDropdownOpen(false);
  };

  const MenuLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "About", link: "/about" },
    { id: 4, name: "Blogs", link: "/blogs" },
  ];

  const LoginDropdownLinks = [
    { id: 1, name: "Login", action: () => handleLinkClick("login") },
    { id: 2, name: "Register", action: () => handleLinkClick("register") },
    { id: 3, name: "Logout", action: () => handleLinkClick("logout") },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="relative w-full lg:px-20 sm:px-12 px-6 
     z-40 bg-white  dark:bg-gray-900 dark:text-white">
      <div className="py-4">
        <div className="flex justify-between items-center">
          {/* logo and link */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-2xl font-semibold
               tracking-widest uppercase text-primary sm:text-3xl"
            >
              Eshop
            </Link>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block px-4
                       font-semibold text-gray-500
                        hover:text-black dark:hover:text-white
                         duration-200"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navbar Right */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600
               dark:text-gray-400 absolute 
               top-1/2 -translate-y-1/2 right-3
                group-hover:text-primary duration-200" />
            </div>
            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="p-3 focus:outline-none"
              >
                <FaUser className="text-xl text-gray-600
                 dark:text-gray-400" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48
                 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2">
                  <ul className="space-y-2">
                    {LoginDropdownLinks.map((data) => (
                      <li key={data.id}>
                        <button
                          onClick={data.action}
                          className="block w-full px-4 py-2
                           text-gray-700 dark:text-white
                            hover:bg-primary/20 rounded-md font-semibold"
                        >
                          {data.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <button onClick={() => setCartOpen(true)} className="relative p-3">
              <FaShoppingCart className="text-xl text-gray-600
               dark:text-gray-400" />
              {cartItems.length > 0 && (
                <div className="w-4 h-4 bg-red-500 text-white
                 rounded-full absolute top-0 right-0 
                 flex items-center justify-center text-xl">
                  {cartItems.length}
                </div>
              )}
            </button>
            {/* Dark Mode */}
            <div>
              <DarkMode />
            </div>
          </div>
          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3"
          >
            <FaBars className="text-xl text-gray-600
             dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0
         w-full bg-white/50 text-black dark:bg-gray-800 shadow-lg">
          <ul className="space-y-4 p-4" data-aos="fade-up">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="block px-4 py-2 text-gray-700
                   dark:text-white hover:bg-primary/20
                    rounded-md font-semibold"
                  onClick={() => setMobileMenuOpen(false)} 
                  data-aos="fade-up" 
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* cartOpen */}
      {cartOpen && (
        <CartModal
          cartItems={cartItems}
          total={total}
          clearCart={clearCart}
          onClose={() => setCartOpen(false)}
          data-aos="fade-up" 
        />
      )}
    </div>
  );
};

export default Navbar;
