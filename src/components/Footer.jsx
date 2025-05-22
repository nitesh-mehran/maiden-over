import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-4"> Kefiko - Tea&Coffee</h3>
          <p className="text-gray-400 leading-relaxed">
            Pure Vegetarian Cafe in Malviya Nagar, Jaipur. A cozy venue perfect for birthdays, kitty parties, and family functions. Known for Pizza, Coffee & Cozy Ambience.
          </p>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" /> 
              <span>Malviya Nagar, Jaipur, Rajasthan 302004</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <a href="tel:+919829169137" className="hover:text-yellow-300 transition">+91-8104942875</a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-yellow-400" />
              <a href="https://wa.me/918104942875" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:info@kafikoteacoffee.com" className="hover:text-yellow-300 transition">info@kafikoteacoffee.com</a>
            </li>
          </ul>
        </div>
        
        {/* Opening Hours */}
        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-4">Opening Hours</h3>
          <ul className="text-gray-400 space-y-1">
            <li>Monday - Friday:  11:30AM - 10:30PM </li>
            <li>Saturday: 9:00 AM - 11:00 PM</li>
            <li>Sunday: 9:00 AM - 9:00 PM</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/cafe-menu" className="hover:text-yellow-300 transition">Cafe Menu</Link>
            </li>
            <li>
              <Link to="/breakfast-menu" className="hover:text-yellow-300 transition">Breakfast Menu</Link>
            </li>
            <li>
              <a href="https://www.google.com/maps?q=Kefiko+-+Tea+and+Coffee,+D-654-55,+Park+Ave+Rd,+Siddharth+Nagar,+Sector+9,+Malviya+Nagar,+Jaipur,+Rajasthan+302017&ftid=0x396db77fdd9bbc0d:0x1aece1e73a70cdc3&entry=gps&lucs=,94242541,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjA2LjEuNzIyNzcxMDg2MBgAIJ6dCipjLDk0MjQyNTQxLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJJTg%3D%3D&g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                Location
              </a>
            </li>
            <li>
              <a href="https://wa.me/918014942875" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="mt-6 flex space-x-4 text-yellow-400">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-300 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/kefikojaipur" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-300 transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-yellow-300 transition">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()}  Kefiko - Tea&Coffee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
