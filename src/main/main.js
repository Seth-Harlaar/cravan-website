import React, { useContext } from 'react';
import {Route, Routes } from 'react-router-dom';
import {ScreenContext} from '../components/screenProvider';

// navigators
import LargeNav from '../components/largeNav';
import SmallNav from '../components/smallNav';

// pages
import Home from '../pages/homeComponents/home';
import Portfolio from '../pages/portfolioComponents/portfolio';
import Services from '../pages/serviceComponents/services';
import Testimonials from '../pages/testimonialComponents/testimonials';
import ContactUs from '../pages/contactUsComponents/contactUs';
import Footer from '../components/footer';





function Main() {
  const {isSmallScreen} = useContext(ScreenContext);

  return (
    <>
      {!isSmallScreen ? <LargeNav/> : <SmallNav/>}
      <Routes>
        <Route index element={<Home isSmallScreen={isSmallScreen}/>} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default Main;