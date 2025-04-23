import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, Search } from 'lucide-react';
import { ModCategory } from '../../types';

interface ModFilterProps {
  onFilterChange: (category: ModCategory | null) => void;
  onSearch: (term: string) => void;
}

const categories: ModCategory[] = ['Bus Mods', 'Bus Parts', 'Truck Mods', 'Truck Parts'];

// Example mod suggestions - replace with dynamic data or API later
const modSuggestions = [
  'Bus Mods',
  'Bus Skin',
  'Bus parts',
  'exterrior mod',
  'Interior Mod',
  'Custom Horn',
  'Truck Mods',
  'Truck Skin',
  'Truck parts',
  'exterrior mod',
  'Interior Mod',
  'Man TGX',
];

const ModFilter: React.FC<ModFilterProps> = ({ onFilterChange, onSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState<ModCategory | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleCategoryChange = (category: ModCategory | null) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSuggestions([]); // Clear suggestions after search
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);

    // Only react to alphabetic characters
    const isAlphabet = /^[A-Za-z]/.test(value);
    if (value.trim() === '' || !isAlphabet) {
      setSuggestions([]);
    } else {
      const filtered = modSuggestions.filter((mod) =>
        mod.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
  };

  useEffect(() => {
    if (searchTerm === '') {
      onSearch('');
    }
  }, [searchTerm, onSearch]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center">
          <SlidersHorizontal className="h-5 w-5 text-gray-500 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Filter Mods</h3>
        </div>

        <form onSubmit={handleSearch} className="w-full md:w-auto relative">
          <div className="relative">
            <input
              type="text"
              className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search mods..."
              value={searchTerm}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <Search className="h-4 w-4" />
            </button>

            {suggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-200 mt-1 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100 text-sm"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Mods
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModFilter;
