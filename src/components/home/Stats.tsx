import React from 'react';
import { Users, Download, Package } from 'lucide-react';
import { getStats } from '../../data/mods';

const Stats: React.FC = () => {
  const stats = getStats();

  const statItems = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      count: stats.users,
      label: 'Community Members',
      description: 'Active registered users in our community'
    },
    {
      icon: <Download className="h-6 w-6 text-white" />,
      count: stats.downloads,
      label: 'Total Downloads',
      description: 'Mods downloaded by our users'
    },
    {
      icon: <Package className="h-6 w-6 text-white" />,
      count: stats.mods,
      label: 'Available Mods',
      description: 'High-quality mods in our collection'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Community Stats
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Join Sri Lanka's largest Euro Truck Simulator 2 modding network 🚛
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-8 text-center shadow-xl backdrop-blur-md border border-white/10 hover:scale-[1.03] transition-transform duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full shadow-lg group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
              </div>

              <div className="text-4xl font-bold text-white mb-1 tracking-tight">
                {item.count.toLocaleString()}
              </div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                {item.label}
              </h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
