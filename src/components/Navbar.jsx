import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaFacebookSquare,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Scroll listener for navbar shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Change height after 20px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`bg-white shadow-md fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center md:justify-around justify-between px-4">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          data-aos="fade-down"
          data-aos-delay="50"
        >
          <img
            src="/Logo.jpeg"
            alt="Logo"
            className={`h-16 w-auto sm:h-16 md:h-20 lg:h-16 transition-all duration-300 ${
              scrolled ? "md:h-12 lg:h-14" : ""
            }`}
          />
          <span className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800 select-none">
            Kefiko-Tea&Coffee
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
          <li data-aos="fade-down" data-aos-delay="100">
            <Link
              to="/"
              className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#b08968] hover:after:w-full after:transition-all after:duration-300"
            >
              HOME
            </Link>
          </li>
          <li data-aos="fade-down" data-aos-delay="150">
            <Link
              to="/cafe-menu"
              className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#b08968] hover:after:w-full after:transition-all after:duration-300"
            >
              CAFE&nbsp;MENU
            </Link>
          </li>
          <li data-aos="fade-down" data-aos-delay="200">
            <Link
              to="/breakfast-menu"
              className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#b08968] hover:after:w-full after:transition-all after:duration-300"
            >
              BREAKFAST&nbsp;MENU
            </Link>
          </li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.instagram.com/kefikojaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-pink-500 hover:text-pink-600 hover:shadow-[0_0_10px_#ec4899] transition-transform transform hover:scale-110 duration-200 rounded-full"
            data-aos="fade-down"
            data-aos-delay="250"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-600 hover:text-blue-700 hover:shadow-[0_0_12px_#3b82f6] transition-transform transform hover:scale-110 duration-200 rounded"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <FaFacebookSquare />
          </a>

          <a
            href="https://wa.me/918014942875"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 border border-green-500 text-green-600 text-sm rounded-full transition hover:bg-green-50 hover:shadow-[0_0_10px_#22c55e]"
            data-aos="fade-down"
            data-aos-delay="350"
          >
            <span className="mr-2 font-semibold">Call&nbsp;/&nbsp;Whatsapp</span>
            <FaWhatsapp className="text-xl hover:text-green-700 hover:scale-110 transition-transform duration-200" />
          </a>
        </div>

        {/* Mobile Burger Icon */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden bg-white shadow-md border-t border-gray-200"
          data-aos="fade-down"
          // data-aos-delay="50"
        >
          <ul className="flex flex-col space-y-4 p-4 text-gray-800 text-sm font-medium">
            <li data-aos="fade-down" data-aos-delay="100">
              <Link to="/" onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="150">
              <Link to="/cafe-menu" onClick={closeMenu}>
                CAFE&nbsp;MENU
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="200">
              <Link to="/breakfast-menu" onClick={closeMenu}>
                BREAKFAST&nbsp;MENU
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="250">
              <a
                href="https://www.instagram.com/kefikojaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-pink-500 hover:text-pink-600 hover:shadow-[0_0_10px_#ec4899] transition-transform transform hover:scale-110 duration-200 rounded-full px-2 py-1"
              >
                <FaInstagram /> <span>Instagram</span>
              </a>
            </li>
            <li data-aos="fade-down" data-aos-delay="300">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 hover:shadow-[0_0_12px_#3b82f6] transition-transform transform hover:scale-110 duration-200 rounded px-2 py-1"
              >
                <FaFacebookSquare /> <span>Facebook</span>
              </a>
            </li>
            <li data-aos="fade-down" data-aos-delay="350">
              <a
                href="https://wa.me/918104942875"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-2 py-2 text-green-600 rounded-md hover:bg-green-50 hover:shadow-[0_0_10px_#22c55e]"
              >
                <FaWhatsapp className="mr-2 text-xl hover:text-green-700 hover:scale-110 transition-transform duration-200" />
                Call&nbsp;/&nbsp;Whatsapp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
