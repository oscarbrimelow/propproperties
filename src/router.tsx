import React, { createContext, useContext, useState, useEffect } from 'react';
import { RoutePath } from './types';

interface RouterContextType {
  currentPath: string;
  navigate: (path: RoutePath | string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Read initial hash or default to '/'
    const hash = window.location.hash;
    return hash ? hash.replace('#', '') : '/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const path = hash ? hash.replace('#', '') : '/';
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial hash if empty to ensure hash-routing works nicely
    if (!window.location.hash) {
      window.location.hash = '/';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

// Helper to make it type safe and easy to use
export function useRouter() {
  const context = React.useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

// Router-related wrapper context
const RouterContextTypeContainer = createContext<RouterContextType | undefined>(undefined);
export { RouterContext };
