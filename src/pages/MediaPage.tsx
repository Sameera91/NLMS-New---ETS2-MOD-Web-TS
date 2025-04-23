import React from 'react';
import { mediaItems } from '../data/media';

const MediaPage: React.FC = () => {
  const images = mediaItems.filter(item => item.type === 'image');
  const videos = mediaItems.filter(item => item.type === 'video');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-black mb-3">
            Media Gallery
          </h1>
          <p className="text-black max-w-xl mx-auto text-lg">
            Explore visuals and trailers from our best ETS2 mods 🚛
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Images
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map(image => (
              <div
                key={image.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {image.title}
                  </h3>
                  {image.description && (
                    <p className="text-gray-500 text-sm">{image.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Videos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {videos.map(video => (
              <div
                key={video.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-gray-500 text-sm">{video.description}</p>
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
