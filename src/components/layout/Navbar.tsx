import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X,  } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-white';
  };
  
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
        <img 
              src="https://cdn.discordapp.com/attachments/1123362230700875819/1364501439581523968/logo.jpg?ex=6809e67e&is=680894fe&hm=26c4afbd7b72c2d25b65ddb1e5becc0084e1b6be92827468cac47223034fc053&" 
              alt="NLMS Logo" 
              className="mx-auto h-10 w-10 box-full"
            />
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">NLMS</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={`font-medium ${isActive('/')}`}>Home</Link>
          <Link to="/mods" className={`font-medium ${isActive('/mods')}`}>Mods</Link>
          <Link to="/about" className={`font-medium ${isActive('/about')}`}>About</Link>
          <Link to="/contact" className={`font-medium ${isActive('/contact')}`}>Contact</Link>
          {isAuthenticated && (
            <Link to="/media" className={`font-medium ${isActive('/media')}`}>Media</Link>
          )}
          {user?.isAdmin && (
            <Link to="/admin" className={`font-medium ${isActive('/admin')}`}>Admin</Link>
          )}
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">
                Hello, <span className="font-medium text-blue-400">{user?.username}</span>
              </span>
              <button 
                onClick={logout}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/login" className="px-4 py-2 font-medium text-white hover:text-blue-300 transition-colors duration-300">
                Login
              </Link>
              <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                Register
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-200 hover:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 mt-4 p-4 rounded-lg">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="p-2 rounded hover:bg-gray-700" onClick={closeMenu}>Home</Link>
            <Link to="/mods" className="p-2 rounded hover:bg-gray-700" onClick={closeMenu}>Mods</Link>
            <Link to="/about" className="p-2 rounded hover:bg-gray-700" onClick={closeMenu}>About</Link>
            <Link to="/contact" className="p-2 rounded hover:bg-gray-700" onClick={closeMenu}>Contact</Link>
            {isAuthenticated && (
              <Link to="/media" className="p-2 rounded hover:bg-gray-700" onClick={closeMenu}>Media</Link>
            )}
            {user?.isAdmin && (
              <Link to="/admin" className="p-2 rounded hover:bg-gray-700" onClick={closeMenu}>Admin</Link>
            )}
            
            <div className="border-t border-gray-700 pt-2 mt-2">
              {isAuthenticated ? (
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-gray-400">
                    Logged in as <span className="font-medium text-blue-400">{user?.username}</span>
                  </span>
                  <button 
                    onClick={() => { logout(); closeMenu(); }}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link 
                    to="/login" 
                    className="text-center p-2 rounded hover:bg-gray-700"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg text-center"
                    onClick={closeMenu}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;