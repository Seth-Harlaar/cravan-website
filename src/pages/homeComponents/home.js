import React from "react";
import HomeServiceBlocks from "./homeServiceBlocks";

function Home({isSmallScreen}) {
  return (
    <div>
      <HomeServiceBlocks isSmallScreen={isSmallScreen}/>
    </div>
  );
}

export default Home;
