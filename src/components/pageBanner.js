import React from "react";

function Divider (){
  return(
    <>
      <div className='pt-[160px]'/>
    </>
  )
}


function PageBanner ({title, description, isSmallScreen}) {
  return (
    <>
      {/* {!isSmallScreen ? <Divider/> : null} */}
      <div className="h-72 pt-[180px] bg-yellow-600 px-12">
        <div className="text-6xl">
          {title}
        </div>
        <div className="text-4xl">
          {description}
        </div>
      </div>
    </>
  )
}

export default PageBanner;