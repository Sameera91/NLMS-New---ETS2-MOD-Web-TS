export interface User {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

export interface Mod {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl: string;
  category: ModCategory;
  downloads: number;
  createdAt: string;
  updatedAt: string;
}

export type ModCategory = 'Bus Mods' | 'Bus Parts' | 'Truck Mods' | 'Truck Parts';

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export interface Stats {
  users: number;
  downloads: number;
  mods: number;
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  description?: string;
}