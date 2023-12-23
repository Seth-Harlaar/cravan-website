import React, { useState, useEffect, useContext } from 'react';
import LargeNav from '../components/largeNav';
import SmallNav from '../components/smallNav';

import { scrSmall } from '../utils/globals';
import { NavigationContext } from '../components/navigationProvider';
import PageBanner from '../components/pageBanner';
import HomeBanner from '../pages/homeComponents/homeBanner';


function Main() {
  const { pageIndex, currentRoute } = useContext(NavigationContext);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const PageComponent = pageIndex[currentRoute];

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
      {currentRoute === 'Home' ? 
        <HomeBanner isSmallScreen={isSmallScreen}/> :
        <PageBanner isSmallScreen={isSmallScreen} title={currentRoute} description={"world"}/>}
      
      <div>
        <PageComponent isSmallScreen={isSmallScreen}/>
      </div>
    </>
  )
}

export default Main;