import React, { useContext, useState } from "react";

import logoPic from '../assets/logo.png';

import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { NavigationContext } from "./navigationProvider";





function Drawer ({closeDrawer}) {
  const { navigateTo } = useContext(NavigationContext);

  // styles
  const menuItemStyle = 'bg-blue-400 text-lg my-3 hover:bg-blue-600 hover:cursor-pointer';

  return (
    <>
      {/* menu */}
      <div className="fixed right-0 h-full bg-green-700 w-40 pt-12 px-5">
        <div className={menuItemStyle} onClick={() => {navigateTo('Services'); closeDrawer()}}>
          Services
        </div>
        <div className={menuItemStyle} onClick={() => {navigateTo('Portfolio'); closeDrawer()}}>
          Portfolio
        </div>
        <div className={menuItemStyle} onClick={() => {navigateTo('Home'); closeDrawer()}}>
          Home
        </div>
        <div className={menuItemStyle} onClick={() => {navigateTo('Testimonials'); closeDrawer()}}>
          Testimonials
        </div>
        <div className={menuItemStyle} onClick={() => {navigateTo('Contact Us'); closeDrawer()}}>
          Contact Us
        </div>


        {/* the close button */}
        <div className="absolute top-2 right-2 bg-red-700 h-8 w-8 hover:cursor-pointer" onClick={closeDrawer}>
          <IoIosClose className="h-full w-full"/>
        </div>

        {/* logo at bottom */}
        <div className="absolute bottom-0 left-0 h-12 w-full flex items-center px-5 mb-5 justify-between">
          <img src={logoPic} className='w-12 h-12'/>
          <div>
            Cravan
          </div>
        </div>
      </div>

    </>
  )
}

function HamMenuButton ({openDrawer}) {
  return (
    <>
      <div className="fixed top-5 right-5 bg-green-700 h-8 w-8 hover:cursor-pointer" onClick={openDrawer}>
        <GiHamburgerMenu className="h-full w-full"/>
      </div>
    </>
  )
}



function SmallNav () {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return(
    <>
      {drawerOpen ? <Drawer closeDrawer={toggleDrawer}/> : <HamMenuButton openDrawer={toggleDrawer}/>}
    </>
  )
}


export default SmallNav;