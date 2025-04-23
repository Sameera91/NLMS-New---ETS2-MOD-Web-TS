import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Calendar, Tag, Edit, Truck } from 'lucide-react';
import { getModById, incrementDownload } from '../data/mods';
import { Mod } from '../types';
import { useAuth } from '../context/AuthContext';

const ModDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [mod, setMod] = useState<Mod | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!id) return;
    
    setIsLoading(true);
    try {
      const foundMod = getModById(id);
      if (foundMod) {
        setMod(foundMod);
        setError(null);
      } else {
        setError('Mod not found');
      }
    } catch (err) {
      setError('Failed to load mod details');
    } finally {
      setIsLoading(false);
    }
  }, [id]);
  
  const handleDownload = () => {
    if (!mod || !isAuthenticated) return;
    
    // Increment download count
    incrementDownload(mod.id);
    
    // Open download link in new tab
    window.open(mod.downloadUrl, '_blank');
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 flex justify-center items-center">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-600">Loading mod details...</p>
        </div>
      </div>
    );
  }
  
  if (error || !mod) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
          <div className="text-red-500 mb-4">
            <Truck className="h-12 w-12 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Mod Not Found</h2>
          <p className="text-gray-600 mb-6">
            The mod you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/mods"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Browse All Mods
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Mods</span>
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img 
              src={mod.imageUrl} 
              alt={mod.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded mb-2 inline-block">
                    {mod.category}
                  </span>
                  <h1 className="text-3xl font-bold text-white">{mod.title}</h1>
                </div>
                {isAdmin && (
                  <Link 
                    to={`/admin/mods/edit/${mod.id}`}
                    className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors duration-300"
                  >
                    <Edit className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>
                  Added: {new Date(mod.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center">
                <Download className="h-4 w-4 mr-1" />
                <span>{mod.downloads.toLocaleString()} downloads</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>{mod.category}</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <div className="prose text-gray-700">
                <p>{mod.description}</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              {isAuthenticated ? (
                <button
                  onClick={handleDownload}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Mod</span>
                </button>
              ) : (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    You need to be logged in to download this mod.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/login"
                      className="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-300"
                    >
                      Sign In
                    </Link>
                    <Link 
                      to="/register"
                      className="text-center bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-300"
                    >
                      Create Account
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModDetailPage;