import React, { useContext } from "react";
import PageBanner from "../../components/pageBanner";
import { ScreenContext } from "../../components/screenProvider";

import ProjectGallery from "./projectGallery"
import portfolioContent from "../../assets/content/portfolioContent";



function Portfolio() {

  const {isSmallScreen} = useContext(ScreenContext);



  return (
    <>
      <PageBanner title={"Our Projects"} description={"See some of the work we've done."} isSmallScreen={isSmallScreen} />
      <div>
        <ProjectGallery projectInfo={portfolioContent[0]}/>
      </div>
    </>
  );
}
  
export default Portfolio;