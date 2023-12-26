import React, { useContext } from "react";
import PageBanner from "../../components/pageBanner";
import {ScreenContext} from "../../components/screenProvider";

function Services() {

  const {isSmallScreen} = useContext(ScreenContext);

  return (
    <>
      <PageBanner title={"Services"} description={"Services you can trust."} isSmallScreen={isSmallScreen} />
      <div>
        services
      </div>
    </>
  );
}
  
export default Services;