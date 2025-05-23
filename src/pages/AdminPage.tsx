import React, { useState } from 'react';
import { mods, addMod, updateMod, deleteMod } from '../data/mods';
import { Mod } from '../types';
import ModsList from '../components/admin/ModsList';

const AdminPage: React.FC = () => {
  const [modsList, setModsList] = useState<Mod[]>(mods);

  const handleAddMod = (modData: Partial<Mod>) => {
    const newMod = addMod(modData as Omit<Mod, 'id' | 'downloads' | 'createdAt' | 'updatedAt'>);
    setModsList([...mods]);
    return newMod;
  };

  const handleUpdateMod = (id: string, modData: Partial<Mod>) => {
    const updatedMod = updateMod(id, modData);
    setModsList([...mods]);
    return updatedMod;
  };

  const handleDeleteMod = (id: string) => {
    const success = deleteMod(id);
    if (success) {
      setModsList([...mods]);
    }
    return success;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            Manage mods, users, and content for <span className="text-blue-500 font-medium">Nolimit Mods Sri Lanka</span>
          </p>
        </div>

        {/* Mods List Section */}
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-gray-200">
          <ModsList
            mods={modsList}
            onAddMod={handleAddMod}
            onUpdateMod={handleUpdateMod}
            onDeleteMod={handleDeleteMod}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
