import React from "react";

// pictures
import additions_1 from "../../assets/pictures/homePortPics/additions_1.jpg";
import renovations_1 from "../../assets/pictures/homePortPics/renovations_1.jpg";
import framing_1 from "../../assets/pictures/homePortPics/framing_1.jpg";


function HomePort({isSmallScreen}) {

  // styles
  const galleryFlex = isSmallScreen ? " flex flex-col space-y-5 " : "flex flex-wrap justify-center";

  const photoWidth = isSmallScreen ? " w-full " : " w-[640px] ";
  const photoStyle = `object-cover ${photoWidth} h-[400px] px-10 `;

  const picList = [framing_1, additions_1, renovations_1, ];

  return (
    <>
      <div className="flex flex-col items-center py-32 bg-darkBg text-white">
        <div className="text-3xl ">
          Our Work
        </div>
        <div className="text-">
          Some insirational message
        </div>
        <div className="w-full ">
          <div className={galleryFlex + " w-full "}>
              {/* create a picture for each in the list */}
              {picList.map((picture) => {
                return (
                  <>
                    <div>
                      <img src={picture} className={photoStyle}/>
                    </div>
                  </>
                )
              })}
          </div>

        </div>
      </div>
    </>
  )
}


export default HomePort;