import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl sm:text-3xl font-bold">
          XII<span className="text-[#604CC3]">PPLG2</span>
        </div>

        {/* Animated Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 flex items-center justify-center group"
          >
            <span
              className={`block absolute h-[3px] w-6 bg-gray-700 rounded transform transition duration-500 ease-in-out ${
                isMenuOpen ? "rotate-45 top-4" : "top-2.5"
              }`}
            />
            <span
              className={`block absolute h-[3px] w-6 bg-gray-700 rounded transform transition duration-500 ease-in-out ${
                isMenuOpen ? "opacity-0" : "top-4"
              }`}
            />
            <span
              className={`block absolute h-[3px] w-6 bg-gray-700 rounded transform transition duration-500 ease-in-out ${
                isMenuOpen ? "-rotate-45 top-4" : "top-6"
              }`}
            />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#moments">Moments</NavLink>
          <NavLink href="#profile">Profile</NavLink>
          <NavLink href="#blog">Blog</NavLink>
        </div>

        {/* Contact button (hidden on mobile) */}
        <div className="hidden md:block">
          <ContactButton />
        </div>
      </div>

      {/* Mobile menu with background overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <NavLink href="#moments" mobile>
            Moments
          </NavLink>
          <NavLink href="#profile" mobile>
            Profile
          </NavLink>
          <NavLink href="#blog" mobile>
            Blog
          </NavLink>
          <div className="mt-6">
            <ContactButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, mobile }) => (
  <a
    href={href}
    className={`block text-lg font-semibold text-gray-700 hover:text-[#604CC3] py-2 ${
      mobile ? "border-b border-gray-200" : ""
    }`}
  >
    {children}
  </a>
);

const ContactButton = () => (
  <button className="w-full bg-[#604CC3] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-105">
    Contact
  </button>
);

export default Navbar;
