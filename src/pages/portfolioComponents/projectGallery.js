import React, { useState } from "react";

import PictureSlider from "./pictureSlider";



// info
const desc = "Revamping a suburban home, our construction project embraced innovation with a striking addition—a new gable. Seamlessly integrating into the existing structure, the gable expanded living space, infusing modern aesthetics. Crafted with precision, this architectural marvel not only enhanced functionality but also elevated the property's visual allure.";

function ProjectGallery({projectInfo}){

  return(
    <>
      <PictureSlider/>
      <div>
        <div className="px-10">
          <div className="text-2xl">
            title
          </div>
          <div className="text-justify">
            {desc}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectGallery;