import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 relative z-10">
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-2 px-4">
          <NavLink href="#moments" mobile>
            Moments
          </NavLink>
          <NavLink href="#profile" mobile>
            Profile
          </NavLink>
          <NavLink href="#blog" mobile>
            Blog
          </NavLink>
          <div className="mt-4">
            <ContactButton />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, mobile }) => (
  <a
    href={href}
    className={`hover:text-[#604CC3] font-bold relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-[#604CC3] hover:after:w-full after:transition-all after:duration-300
      ${mobile ? "block py-2" : ""}`}
  >
    {children}
  </a>
);

const ContactButton = () => (
  <button className="bg-[#604CC3] text-white px-6 sm:px-10 py-2 rounded-[15px] text-sm sm:text-base hover:bg-black transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(96,76,195,0.7)] relative overflow-hidden">
    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
    <span className="relative z-10">Contact</span>
  </button>
);

export default Navbar;
