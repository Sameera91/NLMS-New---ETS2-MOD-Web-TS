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

    if (selectedCategory) {
      result = getModsByCategory(selectedCategory);
    }

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

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="text-black">
              Explore Our Mods
            </span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Discover top-quality Euro Truck Simulator 2 mods designed with passion.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-200 shadow-xl rounded-2xl p-6 border border-gray-100 animate-fade-in-up">
            <ModFilter onFilterChange={setSelectedCategory} onSearch={setSearchTerm} />
          </div>
        </div>

        {/* Mod Cards */}
        {filteredMods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {filteredMods.map(mod => (
              <div key={mod.id} className="transition-transform hover:scale-[1.03]">
                <ModCard mod={mod} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-white rounded-xl shadow-xl animate-fade-in-up">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No Results"
              className="mx-auto w-24 h-24 mb-4 opacity-60"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">No mods found</h3>
            <p className="text-gray-600">
              Try adjusting your search or category selection to find more awesome content.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModsPage;
