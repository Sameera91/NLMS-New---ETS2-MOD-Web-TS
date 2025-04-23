import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mods, getModsByCategory } from '../data/mods';
import { Mod, ModCategory } from '../types';
import ModFilter from '../components/mods/ModFilter';
import ModCard from '../components/mods/ModCard';

const ModsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as ModCategory | null;
  
  const [filteredMods, setFilteredMods] = useState<Mod[]>(mods);
  const [selectedCategory, setSelectedCategory] = useState<ModCategory | null>(categoryParam);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    let result = [...mods];
    
    // Apply category filter
    if (selectedCategory) {
      result = getModsByCategory(selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        mod => 
          mod.title.toLowerCase().includes(term) || 
          mod.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredMods(result);
  }, [selectedCategory, searchTerm]);
  
  // Initialize from URL parameter
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Browse All Mods
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of high-quality Euro Truck Simulator 2 mods
          </p>
        </div>
        
        <ModFilter 
          onFilterChange={setSelectedCategory} 
          onSearch={setSearchTerm} 
        />
        
        {filteredMods.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMods.map(mod => (
              <ModCard key={mod.id} mod={mod} />
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No mods found</h3>
            <p className="text-gray-600">
              No mods match your current filters. Try adjusting your search or category selection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModsPage;