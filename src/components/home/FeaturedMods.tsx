import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import { Mod } from '../../types';
import { mods } from '../../data/mods';
import { useAuth } from '../../context/AuthContext';

const FeaturedMods: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const featuredMods = [...mods].sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="btext-black bg-clip-text">
              Featured Mods
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore the most popular and community-loved ETS2 mods, handpicked for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          {featuredMods.map((mod) => (
            <FeaturedModCard key={mod.id} mod={mod} isAuthenticated={isAuthenticated} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/mods"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>View All Mods</span>
            <ArrowRight size={18} />
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
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 border border-gray-100 hover:border-blue-500 group">
      <div className="h-48 overflow-hidden relative">
        <img
          src={mod.imageUrl}
          alt={mod.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            <Link to={`/mods/${mod.id}`}>{mod.title}</Link>
          </h3>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-0.5 rounded-full">
            {mod.category}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {mod.description}
        </p>

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500 flex items-center gap-1">
            <Download className="h-4 w-4 text-green-500" />
            {mod.downloads.toLocaleString()} downloads
          </span>

          {isAuthenticated ? (
            <Link
              to={`/mods/${mod.id}`}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Download
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-gray-200 hover:bg-blue-500 text-black hover:text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
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
