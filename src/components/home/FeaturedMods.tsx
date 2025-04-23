import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import { Mod } from '../../types';
import { mods } from '../../data/mods';
import { useAuth } from '../../context/AuthContext';

const FeaturedMods: React.FC = () => {
  const { isAuthenticated } = useAuth();
  // Get 3 random mods for featuring
  const featuredMods = [...mods].sort(() => 0.5 - Math.random()).slice(0, 3);
  
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Mods</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our most popular and high-quality Euro Truck Simulator 2 mods
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredMods.map((mod) => (
            <FeaturedModCard key={mod.id} mod={mod} isAuthenticated={isAuthenticated} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/mods" 
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <span>View All Mods</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

interface FeaturedModCardProps {
  mod: Mod;
  isAuthenticated: boolean;
}

const FeaturedModCard: React.FC<FeaturedModCardProps> = ({ mod, isAuthenticated }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={mod.imageUrl} 
          alt={mod.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
            <Link to={`/mods/${mod.id}`}>
              {mod.title}
            </Link>
          </h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {mod.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {mod.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            <Download className="inline-block h-4 w-4 mr-1" />
            {mod.downloads.toLocaleString()} downloads
          </span>
          
          {isAuthenticated ? (
            <Link 
              to={`/mods/${mod.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
            >
              Download
            </Link>
          ) : (
            <Link 
              to="/login"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm transition-colors duration-300"
            >
              Login to Download
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMods;