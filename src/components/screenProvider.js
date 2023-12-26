import React, { createContext, useEffect, useState } from "react";

import {scrSmall, scrMed} from "../utils/globals";


const ScreenContext = createContext();

function ScreenProvider({children}){
  // screen size states
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMedScreen, setIsMedScreen] = useState(false);
  const [isLrgSCreen, setIsLrgScreen] = useState(false);

  
  // listen for window resizes and set state
  useEffect(() => {
    // setting states on resize
    const handleResize = () => {
      const wid = window.innerWidth;
      setIsSmallScreen(wid <= scrSmall);
      setIsMedScreen(wid > scrSmall && wid <= scrMed);
      setIsLrgScreen(wid > scrMed);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contextValue = {
    isSmallScreen,
    isMedScreen,
    isLrgSCreen,
  }

  return(
    <>
      <ScreenContext.Provider value={contextValue}>
        {children}
      </ScreenContext.Provider>
    </>
  );
}

export { ScreenContext, ScreenProvider };