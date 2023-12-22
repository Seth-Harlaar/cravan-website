import React, { useState, useEffect } from 'react';
import LargeNav from '../components/largeNav';
import SmallNav from '../components/smallNav';

import { scrSmall } from '../utils/globals';


function Main() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < scrSmall); // Adjust breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div>
        
        {!isSmallScreen ? <LargeNav/> : <SmallNav/>}

      </div>
    </>
  )
}

export default Main;