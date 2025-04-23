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
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Manage mods, users, and content for Nolimit Mods Sri Lanka
          </p>
        </div>
        
        <div className="mb-8">
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