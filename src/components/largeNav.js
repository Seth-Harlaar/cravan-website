import React, { useContext } from "react";
import logoPic from '../assets/logo.png';
import { NavigationContext } from "./navigationProvider";


// navbar will have height of x, and the website will be offset 
// by x when the navbar is active, otherwise none 


function LargeNav() {
  // const sideLinkStyle = "text-yellow-500 hover:text-gray-500 text-center bg-red-700 flex-none w-[120px]";
  const linkWrapperStyle = "bg-blue-700 hover:bg-blue-500 h-full w-[120px] justify-center flex items-center";


  const { navigateTo } = useContext(NavigationContext);


  return (
    <>
    {/* the whole thing */}
      <div className="fixed w-full bg-blue-400">

        {/* the other buttons */}
        <div className="">
          <div className="flex justify-center items-center bg-red-500 min-w-[640px] h-24">
            <div className={linkWrapperStyle} onClick={() => navigateTo('Services')}>
              Services
            </div>
            <div className={linkWrapperStyle} onClick={() => navigateTo('Portfolio')}>
              Portfolio
            </div>
            <div className='w-40'></div>
            <div className={linkWrapperStyle} onClick={() => navigateTo('Testimonials')}>
              Testimonials
            </div>
            <div className={linkWrapperStyle} onClick={() => navigateTo('Contact Us')}>
              Contact Us
            </div>
          </div>
        </div>

        {/* middle part */}
        <div onClick={() => navigateTo('Home')}
          className='fixed top-0 left-1/2 transform -translate-x-1/2 h-40 w-40 
                        flex flex-col items-center justify-center bg-yellow-700 
                        hover:cursor-pointer'>
          <img src={logoPic} alt="" className='h-24 w-24'/>
          <div>
            Cravan Construction
          </div>
          <hr className="border w-10/12" />
          <div>
            Home
          </div>
        </div>
      </div>
    </>
  )
}

export default LargeNav;