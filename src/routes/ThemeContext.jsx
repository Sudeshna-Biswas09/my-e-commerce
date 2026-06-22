import { createContext,  useState } from 'react';

 export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [Light, setLight] = useState(true);

  
  const toggleTheme = () => setLight(prev => (prev === true ? false : true));

  return (
    <ThemeContext.Provider value={{ Light, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


