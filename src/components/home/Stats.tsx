import React from 'react';
import { Users, Download, Package } from 'lucide-react';
import { getStats } from '../../data/mods';

const Stats: React.FC = () => {
  const stats = getStats();
  
  const statItems = [
    { 
      icon: <Users className="h-8 w-8 text-blue-500" />,
      count: stats.users,
      label: 'Community Members',
      description: 'Active registered users in our community'
    },
    { 
      icon: <Download className="h-8 w-8 text-blue-500" />,
      count: stats.downloads,
      label: 'Total Downloads',
      description: 'Mods downloaded by our users'
    },
    { 
      icon: <Package className="h-8 w-8 text-blue-500" />,
      count: stats.mods,
      label: 'Available Mods',
      description: 'High-quality mods in our collection'
    }
  ];
  
  return (
    <section className="py-16 bg-gray-900 mt-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Community Stats</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join Sri Lanka's largest Euro Truck Simulator 2 modding community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {item.count.toLocaleString()}
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{item.label}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;