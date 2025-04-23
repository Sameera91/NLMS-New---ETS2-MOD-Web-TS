import React, { createContext, useState, useContext, useEffect } from 'react';
import { AuthContextType, User } from '../types';

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Admin credentials
const ADMIN_USERNAME = 'nlms';
const ADMIN_PASSWORD = '1991';

// Mock user database
const mockUsers = [
  {
    id: '1',
    username: ADMIN_USERNAME,
    email: 'admin@nlms.com',
    isAdmin: true,
    password: ADMIN_PASSWORD
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('nlmsUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (username: string, password: string): Promise<void> => {
    // In a real app, this would be an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundUser = mockUsers.find(
          u => u.username === username && u.password === password
        );
        
        if (foundUser) {
          const { password, ...userWithoutPassword } = foundUser;
          setUser(userWithoutPassword);
          localStorage.setItem('nlmsUser', JSON.stringify(userWithoutPassword));
          resolve();
        } else {
          reject(new Error('Invalid username or password'));
        }
      }, 500); // Simulate network delay
    });
  };

  const register = async (username: string, email: string, password: string): Promise<void> => {
    // Check if username or email already exists
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingUser = mockUsers.find(
          u => u.username === username || u.email === email
        );
        
        if (existingUser) {
          reject(new Error('Username or email already exists'));
        } else {
          const newUser = {
            id: (mockUsers.length + 1).toString(),
            username,
            email,
            isAdmin: false,
            password
          };
          
          mockUsers.push(newUser);
          const { password: _, ...userWithoutPassword } = newUser;
          setUser(userWithoutPassword);
          localStorage.setItem('nlmsUser', JSON.stringify(userWithoutPassword));
          resolve();
        }
      }, 500); // Simulate network delay
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nlmsUser');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};