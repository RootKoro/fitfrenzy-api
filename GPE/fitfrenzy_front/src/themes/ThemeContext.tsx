import React, { createContext, ReactNode, useContext, useState } from 'react';
import theme from './theme';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextType {
  theme: typeof theme;
  setTheme: React.Dispatch<React.SetStateAction<typeof theme>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setTheme] = useState(theme);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
