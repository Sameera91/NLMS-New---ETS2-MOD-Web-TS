import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
            <img 
              src="https://cdn.discordapp.com/attachments/1123362230700875819/1364501439581523968/logo.jpg?ex=6809e67e&is=680894fe&hm=26c4afbd7b72c2d25b65ddb1e5becc0084e1b6be92827468cac47223034fc053&" 
              alt="NLMS Logo" 
              className=" h-10 w-10 box-full"
            />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">NLMS</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Sri Lanka's premier ETS2 mod community, providing high-quality truck and bus mods since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/mods" className="hover:text-blue-400 transition-colors">All Mods</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Mod Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/mods?category=Bus%20Mods" className="hover:text-blue-400 transition-colors">Bus Mods</Link></li>
              <li><Link to="/mods?category=Bus%20Parts" className="hover:text-blue-400 transition-colors">Bus Parts</Link></li>
              <li><Link to="/mods?category=Truck%20Mods" className="hover:text-blue-400 transition-colors">Truck Mods</Link></li>
              <li><Link to="/mods?category=Truck%20Parts" className="hover:text-blue-400 transition-colors">Truck Parts</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-2">
              Have questions or need assistance? Reach out to us!
            </p>
            <a href="mailto:info@nlms.com" className="text-blue-400 hover:text-blue-300 transition-colors block mb-2">
              info@nlms.com
            </a>
            <a href="https://wa.me/+94 78 756 9738" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors block">
              WhatsApp: +94 78 756 9738
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-500 text-center">
          <p>&copy; {currentYear} Nolimit Mods Sri Lanka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;