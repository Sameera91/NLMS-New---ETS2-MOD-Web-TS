import { Mod, ModCategory, Stats } from '../types';

// Initial mods data
export const mods: Mod[] = [
  {
    id: '1',
    title: 'Mercedes-Benz Actros 2019 Premium',
    name: 'Mercedes-Benz Actros 2019 Premium',
    description: 'High-quality truck mod with custom interior, multiple engine options, and real-life sounds.',
    imageUrl: 'https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg',
    downloadUrl: '/download/1',
    category: 'Truck Mods',
    downloads: 1245,
    createdAt: '2023-08-15T10:30:00Z',
    updatedAt: '2023-08-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'Scania S730 Custom Parts',
    name: 'Scania S730 Custom Parts',
    description: 'Enhanced parts pack for Scania S730 including custom bumpers, lights, and interior accessories.',
    imageUrl: 'https://images.pexels.com/photos/3662845/pexels-photo-3662845.jpeg',
    downloadUrl: '/download/2',
    category: 'Truck Parts',
    downloads: 980,
    createdAt: '2023-09-20T14:15:00Z',
    updatedAt: '2023-09-20T14:15:00Z'
  },
  {
    id: '3',
    title: 'Premium Coach Bus Mod',
    name: 'Premium Coach Bus Mod',
    description: 'Luxury coach bus with detailed interior and exterior, accurate physics, and custom sounds.',
    imageUrl: 'https://images.pexels.com/photos/68629/pexels-photo-68629.jpeg',
    downloadUrl: '/download/3',
    category: 'Bus Mods',
    downloads: 789,
    createdAt: '2023-10-05T09:45:00Z',
    updatedAt: '2023-10-05T09:45:00Z'
  },
  {
    id: '4',
    title: 'Bus Dashboard Enhancement Kit',
    name: 'Bus Dashboard Enhancement Kit',
    description: 'Complete dashboard upgrade for various bus models with enhanced textures and functionality.',
    imageUrl: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
    downloadUrl: '/download/4',
    category: 'Bus Parts',
    downloads: 567,
    createdAt: '2023-11-12T16:20:00Z',
    updatedAt: '2023-11-12T16:20:00Z'
  },
  {
    id: '5',
    title: 'Volvo FH16 Custom Tuning',
    name: 'Volvo FH16 Custom Tuning',
    description: 'Performance tuning mod for Volvo FH16 with realistic engine parameters and sound enhancements.',
    imageUrl: 'https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg',
    downloadUrl: '/download/5',
    category: 'Truck Mods',
    downloads: 1032,
    createdAt: '2023-12-08T11:10:00Z',
    updatedAt: '2023-12-08T11:10:00Z'
  },
  {
    id: '6',
    title: 'MAN TGX Euro 6 Sound Package',
    name: 'MAN TGX Euro 6 Sound Package',
    description: 'High-quality sound pack for MAN TGX Euro 6 trucks with realistic engine, interior, and exterior sounds.',
    imageUrl: 'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg',
    downloadUrl: '/download/6',
    category: 'Truck Parts',
    downloads: 842,
    createdAt: '2024-01-19T13:25:00Z',
    updatedAt: '2024-01-19T13:25:00Z'
  }
];

// Get mods by category
export const getModsByCategory = (category: ModCategory): Mod[] => {
  return mods.filter(mod => mod.category === category);
};

// Get mod by ID
export const getModById = (id: string): Mod | undefined => {
  return mods.find(mod => mod.id === id);
};

// Get all stats
export const getStats = (): Stats => {
  return {
    users: 1250,
    downloads: mods.reduce((total, mod) => total + mod.downloads, 0),
    mods: mods.length
  };
};

// Add a new mod
export const addMod = (mod: Omit<Mod, 'id' | 'downloads' | 'createdAt' | 'updatedAt'>): Mod => {
  const newMod: Mod = {
    ...mod,
    id: (mods.length + 1).toString(),
    downloads: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  mods.push(newMod);
  return newMod;
};

// Update a mod
export const updateMod = (id: string, modData: Partial<Mod>): Mod | undefined => {
  const index = mods.findIndex(mod => mod.id === id);
  if (index !== -1) {
    mods[index] = {
      ...mods[index],
      ...modData,
      updatedAt: new Date().toISOString()
    };
    return mods[index];
  }
  return undefined;
};

// Delete a mod
export const deleteMod = (id: string): boolean => {
  const initialLength = mods.length;
  const newMods = mods.filter(mod => mod.id !== id);
  mods.length = 0;
  mods.push(...newMods);
  return initialLength > mods.length;
};

// Increment download count
export const incrementDownload = (id: string): Mod | undefined => {
  const mod = mods.find(mod => mod.id === id);
  if (mod) {
    mod.downloads += 1;
    mod.updatedAt = new Date().toISOString();
    return mod;
  }
  return undefined;
};