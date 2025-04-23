import React from 'react';
import { Play } from 'lucide-react';
import { mediaItems } from '../data/media';

const MediaPage: React.FC = () => {
  const images = mediaItems.filter(item => item.type === 'image');
  const videos = mediaItems.filter(item => item.type === 'video');
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Media Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore screenshots and videos of our Euro Truck Simulator 2 mods
          </p>
        </div>
        
        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
            Images
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map(image => (
              <div key={image.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{image.title}</h3>
                  {image.description && (
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Video Gallery */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
            Videos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map(video => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{video.title}</h3>
                  {video.description && (
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;