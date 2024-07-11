import React, { useState, useEffect } from "react";
import logo from '../assets/logo-2.png'
export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsSticky(currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return (
    <header
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-8">
        <div className="mr-4">
          <img
            src={logo}
            alt="Your Logo"
            className="h-12 w-auto cursor-pointer"
          />
        </div>

        {/* Search Bar */}
        <div >
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Login & Cart Icons */}
        <div className="flex items-center space-x-9">
          <a href="/login">
          <i style={{fontSize:'28px'}} class="ri-login-box-line"></i>
          </a>
          <a href="/cart">
          <i style={{fontSize:'28px'}} class="ri-shopping-cart-line"></i>
          </a>
        </div>
      </div>
    </header>
  );
};
