import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const loadTheme = async (c_id) => {
    try {
      console.log('Loading theme...');
      const themeKey = `theme_${c_id}`;
      console.log('Theme Key:', themeKey);
      const storedTheme = await AsyncStorage.getItem(themeKey);
      console.log('Retrieved theme for key:', storedTheme);

      if (storedTheme) {
        setIsDarkTheme(storedTheme === 'dark');
      } else {
        setIsDarkTheme(false); // Default to light theme if no theme is stored
      }
    } catch (error) {
      console.error("Error loading theme from storage", error);
      setIsDarkTheme(false); // Default to light theme in case of error
    }
  };

  const toggleTheme = async () => {
    try {
      const c_id = await AsyncStorage.getItem('async_c_id');
      if (c_id) {
        const newTheme = !isDarkTheme ? 'dark' : 'light';
        console.log('Toggling theme to:', newTheme);
        await AsyncStorage.setItem(`theme_${c_id}`, newTheme);
        setIsDarkTheme(newTheme === 'dark');
      }
    } catch (error) {
      console.error("Error saving theme to storage", error);
    }
  };

  useEffect(() => {
    const initializeTheme = async () => {
      const c_id = await AsyncStorage.getItem('async_c_id');
      if (c_id) {
        loadTheme(c_id);
      }
    };
    initializeTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, loadTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
