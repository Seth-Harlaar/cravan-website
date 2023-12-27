import React, {useState} from "react";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
// info
import pic from "../../assets/pictures/homePortPics/additions_1.jpg";

function PictureSlider(){
  const [offset, updateOffset] = useState(-100);

  function moveLeft(){
    updateOffset(offset + 100);
  }

  function moveRight(){
    updateOffset(offset - 100);
  }

  const sliderOffset = `${offset}%`;

  const sliderOffsetStyle = {
    left: sliderOffset
  }

  const pictureStyles = " h-[250px] min-w-full object-cover px-2 ";
  const padderStyles = " h-[250px] min-w-full flex-none bg-green-500 px-2"

  const arrowStyles = " absolute inset-y-0 h-full hover:cursor-pointer";

  const sliderStyles = " relative h-[250px] w-full duration-100 ";


  return(
    <>
      <div className=" w-full m-auto overflow-hidden">
        <div className="relative w-10/12 m-auto">
          {/* the image container that slides */}
          <div className={sliderStyles} style={sliderOffsetStyle}>
            <div className="absolute flex w-full">
              <div className={padderStyles}/>
              {/* change to list */}
              <img className={pictureStyles} src={pic} alt={"gallery picture"}/>
              <img className={pictureStyles} src={pic} alt={"gallery picture"}/>
              <img className={pictureStyles} src={pic} alt={"gallery picture"}/>
              <div className={padderStyles}/>
            </div>
          </div>

          <FaArrowAltCircleLeft className={arrowStyles + " left-0 "} onClick={moveLeft}/>
          <FaArrowAltCircleRight className={arrowStyles + " right-0 "} onClick={moveRight}/>
        </div>
      </div>
    </>
  );
}

export default PictureSlider;