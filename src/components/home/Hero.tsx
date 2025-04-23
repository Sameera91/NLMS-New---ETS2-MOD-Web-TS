import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Download } from 'lucide-react';

// Array of background images
const backgroundImages = [
  'https://cdn.discordapp.com/attachments/1123362230700875819/1363946814797119719/WhatsApp_Image_2025-04-02_at_16.22.49_d7602ff9.jpg?ex=68093375&is=6807e1f5&hm=c053b98de189498229f020ca8bf096e960ac83a8db161361895b5eba6a5dc399&',
  'https://cdn.discordapp.com/attachments/1123362230700875819/1363964580757377094/1.jpg?ex=68094401&is=6807f281&hm=a9bdf90964e44592347db4c9cb101e37107a250281f41944655788585d9bf1ed&',
  'https://cdn.discordapp.com/attachments/1123362230700875819/1364135338292805715/2.jpg?ex=68093a49&is=6807e8c9&hm=9e1a38abb35a7412f3b782eaa32c5e7279e803cc752a9e9bb52bf4c76e89cd09&'
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-screen max-h-[600px] overflow-hidden">
      {/* Background image with fade transition */}
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out"
          style={{ 
            backgroundImage: `url(${image})`,
            opacity: index === currentImage ? 1 : 0,
          }}
        />
      ))}
      
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fadeIn">
            <img 
              src="https://cdn.discordapp.com/attachments/1123362230700875819/1364501439581523968/logo.jpg?ex=6809e67e&is=680894fe&hm=26c4afbd7b72c2d25b65ddb1e5becc0084e1b6be92827468cac47223034fc053&" 
              alt="NLMS Logo" 
              className="mx-auto h-32 mb-6"
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nolimit Mods <span className="text-blue-400">Sri Lanka</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Sri Lanka's premier source for high-quality Euro Truck Simulator 2 mods
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/mods" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors duration-300"
              >
                <span>Browse Mods</span>
                <ChevronRight size={20} />
              </Link>
              
              <Link 
                to="/register" 
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors duration-300"
              >
                <span>Join Community</span>
                <Download size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scrollDown"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;