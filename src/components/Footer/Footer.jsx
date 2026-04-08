import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
  // Common style for NavLinks
  const navLinkStyles = ({ isActive }) => 
    isActive 
      ? "text-orange-500 font-bold underline underline-offset-4 decoration-2" 
      : "hover:text-orange-400 transition-colors duration-300";

  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-6 mt-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-2xl font-bold text-orange-500">
            <svg xmlns="http://w3.org" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>BookVibe</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Your ultimate destination for discovering timeless classics and modern masterpieces. Join our community of readers today.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 border-b-2 border-orange-500 w-fit">Explore</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
            <li><NavLink to="/all-books" className={navLinkStyles}>Listed Books</NavLink></li>
            <li><NavLink to="/best-sellers" className={navLinkStyles}>Page to Read</NavLink></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 border-b-2 border-orange-500 w-fit">Customer Care</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><NavLink to="/order-tracking" className={navLinkStyles}>Order Tracking</NavLink></li>
            <li><NavLink to="/returns" className={navLinkStyles}>Return Policy</NavLink></li>
            <li><NavLink to="/faq" className={navLinkStyles}>FAQ</NavLink></li>
            <li><NavLink to="/contact" className={navLinkStyles}>Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 border-b-2 border-orange-500 w-fit">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">Stay updated with the latest releases.</p>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full text-sm border border-gray-700 transition-all"
            />
            <button 
              type="submit" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all active:scale-95 shadow-lg shadow-orange-900/20"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} <span className="text-orange-500 font-semibold tracking-wide">BookVibe</span>. All Rights Reserved.</p>
        <div className="flex gap-6">
          <NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink>
          <NavLink to="/terms" className="hover:text-white transition-colors">Terms of Service</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
