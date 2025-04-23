import React from 'react';
import { Truck, Heart, Award, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Nolimit Mods Sri Lanka</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your premier source for high-quality Euro Truck Simulator 2 mods
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Nolimit Mods Sri Lanka was founded in 2025 by a passionate group of Euro Truck Simulator 2 enthusiasts who wanted to create a community where Sri Lankan players could find high-quality mods and connect with fellow trucking fans.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small Discord group has grown into one of Sri Lanka's largest ETS2 modding communities, with thousands of users and a growing collection of premium mods.
                </p>
                <p className="text-gray-600">
                  Our team is dedicated to providing the most realistic and enjoyable trucking experience through our carefully curated selection of mods for Euro Truck Simulator 2.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 flex items-center justify-center">
              <img 
                src="https://cdn.discordapp.com/attachments/1123362230700875819/1364501439581523968/logo.jpg?ex=6809e67e&is=680894fe&hm=26c4afbd7b72c2d25b65ddb1e5becc0084e1b6be92827468cac47223034fc053&"
                alt="NLMS Logo" 
                className="max-w-full h-auto max-h-64"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Truck className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Mods</h3>
            <p className="text-gray-600">
              We specialize in high-quality, realistic mods that enhance your ETS2 experience with attention to detail.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Passion-Driven</h3>
            <p className="text-gray-600">
              Our team consists of passionate modders and trucking enthusiasts who love what they do.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community First</h3>
            <p className="text-gray-600">
              We prioritize building a friendly, helpful community of like-minded trucking enthusiasts.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h3>
            <p className="text-gray-600">
              Every mod undergoes rigorous testing to ensure compatibility and performance.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-700 rounded-lg shadow-md overflow-hidden">
          <div className="p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Connect with fellow trucking enthusiasts, get mod support, and stay updated on the latest releases.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://discord.gg/MYu4Uqpuma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Join our Discord
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;