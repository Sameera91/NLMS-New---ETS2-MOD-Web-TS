import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/mainlogo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-blue-400 border-b-2 border-blue-400"
      : "text-gray-300 hover:text-white";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="backdrop-blur-md bg-black/90 shadow-md text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 text-2xl font-bold"
          >
            <img
              src={logo}
              alt="NLMS Logo"
              className="h-12 w-12 rounded-md shadow-md object-cover"
            />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              NLMS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`font-medium ${isActive("/")}`}>
              Home
            </Link>
            <Link to="/mods" className={`font-medium ${isActive("/mods")}`}>
              Mods
            </Link>
            <Link to="/about" className={`font-medium ${isActive("/about")}`}>
              About
            </Link>
            <Link
              to="/contact"
              className={`font-medium ${isActive("/contact")}`}
            >
              Contact
            </Link>
            {isAuthenticated && (
              <Link to="/media" className={`font-medium ${isActive("/media")}`}>
                Media
              </Link>
            )}
            {user?.isAdmin && (
              <Link to="/admin" className={`font-medium ${isActive("/admin")}`}>
                Admin
              </Link>
            )}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">
                  Hello,{" "}
                  <span className="font-medium text-blue-400">
                    {user?.username}
                  </span>
                </span>
                <button
                  onClick={logout}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login" className="hover:text-blue-300">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-200 hover:text-white"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 rounded-lg bg-black/70 backdrop-blur-md space-y-3">
            <Link
              to="/"
              onClick={closeMenu}
              className="block hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              to="/mods"
              onClick={closeMenu}
              className="block hover:text-blue-400"
            >
              Mods
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block hover:text-blue-400"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block hover:text-blue-400"
            >
              Contact
            </Link>
            {isAuthenticated && (
              <Link
                to="/media"
                onClick={closeMenu}
                className="block hover:text-blue-400"
              >
                Media
              </Link>
            )}
            {user?.isAdmin && (
              <Link
                to="/admin"
                onClick={closeMenu}
                className="block hover:text-blue-400"
              >
                Admin
              </Link>
            )}
            <div className="border-t border-gray-700 pt-2">
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="w-full text-left text-blue-400 hover:text-red-400"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="block hover:text-blue-400"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="block hover:text-blue-400"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
