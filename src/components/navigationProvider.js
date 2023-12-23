import React, { createContext, useState } from 'react';
import Home from '../pages/home';
import Services from '../pages/services';
import Portfolio from '../pages/portfolio';
import Testimonials from '../pages/testimonials';
import ContactUs from '../pages/contactUs';

const NavigationContext = createContext();




const NavigationProvider = ({ children }) => {
  const pageIndex = {
    'Services': Services,
    'Portfolio': Portfolio,
    'Home': Home,
    'Testimonials': Testimonials,
    'Contact Us': ContactUs,
  }

  const [currentRoute, setCurrentRoute] = useState('Home');
  const [CurrentPage, setCurrentPage] = useState(Home);

  const navigateTo = (route) => {
    setCurrentRoute(route);
    setCurrentPage(pageIndex[route]);
  };

  const contextValue = {
    currentRoute,
    navigateTo,
    CurrentPage,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };