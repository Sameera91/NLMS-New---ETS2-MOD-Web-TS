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
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={mod.imageUrl}
          alt={mod.title} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1 hover:text-blue-600 transition-colors duration-300">
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
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{createdDate}</span>
          </div>
          
          <div className="flex items-center">
            <Download className="h-4 w-4 mr-1" />
            <span>{mod.downloads.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="mt-4">
          {isAuthenticated ? (
            <Link 
              to={`/mods/${mod.id}`}
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 rounded-lg transition-colors duration-300"
            >
              View Details
            </Link>
          ) : (
            <Link 
              to="/login"
              className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-center font-medium py-2 rounded-lg transition-colors duration-300"
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