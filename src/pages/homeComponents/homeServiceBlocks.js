import React from "react";

import serviceListings from "../../assets/content/homeServicesContent";

function HomeServiceBlocks ({isSmallScreen}) {
  console.log(isSmallScreen);
  const serviceListingContainer = !isSmallScreen ? 
    "flex" :
    "";

  return(
    <>
      {/* framing, additions, renovations */}
      <div className="pt-10 pb-20">
        <div className="text-3xl text-center">
          Our Services
        </div>


        <div className={serviceListingContainer}>
          {/* map each service listing */}
          {serviceListings.map((service) => {

            return(
              <>
                <div className="flex flex-col items-center px-10 pt-16">
                  <div className=" bg-highlight rounded-full p-5">
                    <service.icon className="h-10 w-10 text-darkBg"/>
                  </div>

                  <div className="text-2xl text-center py-3">
                    {service.title}
                  </div>
                  <div className="text-justify">
                    {service.text}
                  </div>
                </div>
              </>
            )
          })}
        </div>


      </div>
    </>
  )
}

export default HomeServiceBlocks;