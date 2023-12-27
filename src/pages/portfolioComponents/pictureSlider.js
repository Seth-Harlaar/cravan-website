import React, {useEffect, useState} from "react";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
// info
import pic from "../../assets/pictures/homePortPics/additions_1.jpg";
const imageListLength = 3;

function PictureSlider(){
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(-100);

  const [canMoveRight, setCanMoveRight] = useState(true);
  const [canMoveLeft, setCanMoveLeft] = useState(false);

  // when index changes, update moveability
  useEffect(() => {
    // right edge of images
    if(index === (imageListLength -1)){
      setCanMoveRight(false);
    }
    // left edge of images
    if(index === 0){
      setCanMoveLeft(false);
    }
  }, [index]);

  function decrementIndex(){
    setIndex(index - 1);
  }
  function incrementIndex(){
    setIndex(index + 1);
  }


  function moveLeft(){
    if(canMoveLeft){
      setOffset(offset + 100);
      decrementIndex();
    }

    // if at right edge and moves left
    if(!canMoveRight){
      setCanMoveRight(true);
    }
  }

  function moveRight(){
    if(canMoveRight){
      setOffset(offset - 100);
      incrementIndex();
    }

    // if at left edge and moves right
    if(!canMoveLeft){
      setCanMoveLeft(true);
    }
  }

  const sliderOffset = `${offset}%`;

  const sliderOffsetStyle = {
    left: sliderOffset
  }

  const pictureStyles = " h-[250px] min-w-full object-cover px-2 ";
  const padderStyles = " h-[250px] min-w-full flex-none bg-lightBgDark px-2"

  const arrowStyles = " absolute inset-y-0 h-full text-2xl hover:cursor-pointer";

  const rightArrowColor = canMoveRight ? " text-highlight " : " text-black ";
  const leftArrowColor = canMoveLeft ? " text-highlight " : " text-black ";

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
              <img className={pictureStyles} src={pic} alt={"gallery"}/>
              <img className={pictureStyles} src={pic} alt={"gallery"}/>
              <img className={pictureStyles} src={pic} alt={"gallery"}/>
              <div className={padderStyles}/>
            </div>
          </div>

          <FaArrowAltCircleLeft className={arrowStyles + leftArrowColor + " left-0 "} onClick={moveLeft}/>
          <FaArrowAltCircleRight className={arrowStyles + rightArrowColor + " right-0 "} onClick={moveRight}/>
        </div>
      </div>
    </>
  );
}

export default PictureSlider;