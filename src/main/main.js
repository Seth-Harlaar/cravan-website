import React, { useState, useEffect, useContext } from 'react';
import LargeNav from '../components/largeNav';
import SmallNav from '../components/smallNav';

import { scrSmall } from '../utils/globals';
import { NavigationContext } from '../components/navigationProvider';
import PageBanner from '../components/pageBanner';




function Main() {
  const { CurrentPage, currentRoute } = useContext(NavigationContext);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < scrSmall);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      {!isSmallScreen ? <LargeNav/> : <SmallNav/>}
      <PageBanner isSmallScreen={isSmallScreen} title={currentRoute} description={"world"}/>
      <div>
        {CurrentPage}
      </div>
    </>
  )
}

export default Main;