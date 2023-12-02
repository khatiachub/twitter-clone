// NavbarContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context
interface NavbarContextType {
  state: boolean;
  setState:React.Dispatch<React.SetStateAction<boolean>>;
  toggleNavbar: () => void;
  removeBox:()=>void;
}

// Create a context with the specified type
const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// Create a provider component
export const NavbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState(false);
  const toggleNavbar = () => {
    setState(true);
  };
  const removeBox=()=>{
    setState(false)
  }
  return (
    <NavbarContext.Provider value={{ state, setState,toggleNavbar,removeBox }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Create a custom hook for using the context
export const useNavbarContext = (): NavbarContextType => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbarContext must be used within a NavbarProvider');
  }
  return context;
};

