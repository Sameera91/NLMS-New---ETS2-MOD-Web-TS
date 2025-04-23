import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Download } from 'lucide-react';
import { Mod } from '../../types';
import { useAuth } from '../../context/AuthContext';

interface ModCardProps {
  mod: Mod;
}

const ModCard: React.FC<ModCardProps> = ({ mod }) => {
  const { isAuthenticated } = useAuth();
  const createdDate = new Date(mod.createdAt).toLocaleDateString();

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-blue-300 transition-all duration-300 overflow-hidden">
      {/* Mod Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={mod.imageUrl}
          alt={mod.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title & Category */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors duration-300">
            <Link to={`/mods/${mod.id}`}>
              {mod.title}
            </Link>
          </h3>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
            {mod.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{mod.description}</p>

        {/* Meta */}
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 opacity-100 text-blue-500" />
            <span>{createdDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="h-4 w-4 opacity-100 text-green-500" />
            <span>{mod.downloads.toLocaleString()}</span>
          </div>
        </div>

        {/* CTA */}
        <div>
          {isAuthenticated ? (
            <Link
              to={`/mods/${mod.id}`}
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 rounded-lg transition-transform duration-300 hover:scale-[1.03]"
            >
              View Details
            </Link>
          ) : (
            <Link
              to="/login"
              className="block w-full text-center bg-gray-200 hover:bg-blue-600 hover:text-white text-black font-medium py-2 rounded-lg transition-all duration-300"
            >
              Login to Download
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModCard;
