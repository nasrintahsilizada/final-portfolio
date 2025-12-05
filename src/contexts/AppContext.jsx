import { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Theme management
  const [theme, setTheme] = useLocalStorage('portfolio-theme', 'light');
  
  // Favorites management
  const [favorites, setFavorites] = useLocalStorage('portfolio-favorites', []);
  
  // Contact form draft
  const [contactDraft, setContactDraft] = useLocalStorage('portfolio-contact-draft', {
    name: '',
    email: '',
    message: ''
  });

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const toggleFavorite = (projectId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(projectId)) {
        return prevFavorites.filter(id => id !== projectId);
      } else {
        return [...prevFavorites, projectId];
      }
    });
  };

  const isFavorite = (projectId) => {
    return favorites.includes(projectId);
  };

  const saveContactDraft = (formData) => {
    setContactDraft(formData);
  };

  const clearContactDraft = () => {
    setContactDraft({ name: '', email: '', message: '' });
  };

  const value = {
    theme,
    toggleTheme,
    favorites,
    toggleFavorite,
    isFavorite,
    contactDraft,
    saveContactDraft,
    clearContactDraft
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export default AppContext;
