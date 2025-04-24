import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import mainLogo from '../../assets/mainlogo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Branding */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <img
                src={mainLogo}
                alt="NLMS Logo"
                className="h-12 w-12 rounded-md shadow-md group-hover:scale-105 group-hover:rotate-3 transition duration-300"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                NLMS
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-5">
              Sri Lanka's premier ETS2 modding hub, delivering top-quality truck & bus mods since 2020.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/163cnkQWpP/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1877F2] transition-transform hover:scale-110"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-transform hover:scale-110"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.youtube.com/@redpandagaming4256"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-transform hover:scale-110"
              >
                <Youtube size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/mods" className="hover:text-blue-300 transition">
                  All Mods
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-300 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mod Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Mod Categories</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/mods?category=Bus%20Mods" className="hover:text-blue-300 transition">
                  Bus Mods
                </Link>
              </li>
              <li>
                <Link to="/mods?category=Bus%20Parts" className="hover:text-blue-300 transition">
                  Bus Parts
                </Link>
              </li>
              <li>
                <Link to="/mods?category=Truck%20Mods" className="hover:text-blue-300 transition">
                  Truck Mods
                </Link>
              </li>
              <li>
                <Link to="/mods?category=Truck%20Parts" className="hover:text-blue-300 transition">
                  Truck Parts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-3">
              Need help? Reach out to our support team anytime.
            </p>
            <a
              href="mailto:info@nlms.com"
              className="text-blue-400 hover:text-blue-300 transition block mb-1 text-sm"
            >
              info@nlms.com
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=94787569738&text=Hello%20NLMS%20Team%2C%20I%20need%20support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-300 transition block text-sm"
            >
              WhatsApp: +94 78 756 9738
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 mt-6 text-sm text-gray-500 text-center">
          &copy; {currentYear} Nolimit Mods Sri Lanka. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
