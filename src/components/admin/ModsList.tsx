import React, { useState } from 'react';
import { Edit, Trash2, PlusCircle } from 'lucide-react';
import { Mod } from '../../types';
import ModForm from './ModForm';

interface ModsListProps {
  mods: Mod[];
  onAddMod: (modData: Partial<Mod>) => void;
  onUpdateMod: (id: string, modData: Partial<Mod>) => void;
  onDeleteMod: (id: string) => void;
}

const ModsList: React.FC<ModsListProps> = ({ mods, onAddMod, onUpdateMod, onDeleteMod }) => {
  const [isAddingMod, setIsAddingMod] = useState(false);
  const [editingMod, setEditingMod] = useState<Mod | null>(null);
  
  const handleAddMod = (modData: Partial<Mod>) => {
    onAddMod(modData);
    setIsAddingMod(false);
  };
  
  const handleUpdateMod = (modData: Partial<Mod>) => {
    if (editingMod) {
      onUpdateMod(editingMod.id, modData);
      setEditingMod(null);
    }
  };
  
  const handleDeleteMod = (id: string) => {
    if (window.confirm('Are you sure you want to delete this mod? This action cannot be undone.')) {
      onDeleteMod(id);
    }
  };
  
  // Render form if adding or editing
  if (isAddingMod) {
    return (
      <ModForm
        onSubmit={handleAddMod}
        onCancel={() => setIsAddingMod(false)}
      />
    );
  }
  
  if (editingMod) {
    return (
      <ModForm
        initialData={editingMod}
        onSubmit={handleUpdateMod}
        onCancel={() => setEditingMod(null)}
      />
    );
  }
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Mods</h2>
        <button
          onClick={() => setIsAddingMod(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors duration-300"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Add New Mod
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mod
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Downloads
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mods.map((mod) => (
              <tr key={mod.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img 
                        className="h-10 w-10 rounded-md object-cover" 
                        src={mod.imageUrl} 
                        alt={mod.title} 
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{mod.title}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {mod.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {mod.downloads.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(mod.updatedAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => setEditingMod(mod)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteMod(mod.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
            
            {mods.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                  No mods found. Click "Add New Mod" to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModsList;